/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, Users, Calendar } from 'lucide-react';
import { FirebaseFirestore } from '@/lib/firebase/firestore';
import { format } from 'date-fns';

interface FinancialStats {
  totalRevenue: number;
  monthlyRevenue: number;
  totalMembers: number;
  averageContribution: number;
  recentPayments: Array<{
    id: string;
    amount: number;
    type: string;
    date: Date;
    description: string;
  }>;
}

export default function FinancialsPage() {
  const [stats, setStats] = useState<FinancialStats>({
    totalRevenue: 0,
    monthlyRevenue: 0,
    totalMembers: 0,
    averageContribution: 0,
    recentPayments: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFinancialData = async () => {
      try {
        setLoading(true);

        // Fetch members for revenue calculation
        const members = await FirebaseFirestore.getCollection('users') as unknown as Array<{
          status: string;
        }>;
        const activeMembers = members.filter((m) => m.status === 'active');

        // Calculate financial stats
        const totalMembers = activeMembers.length;
        const monthlyRevenue = totalMembers * 100; // K100 per member
        const totalRevenue = monthlyRevenue * 12; // Estimated annual
        const averageContribution = totalMembers > 0 ? monthlyRevenue / totalMembers : 0;

        // Fetch recent referral payments
        const referrals = await FirebaseFirestore.getCollection('referrals') as Array<{
          id: string;
          status: string;
          amount?: number;
          paidAt?: { toDate?: () => Date };
          createdAt: string | number | Date;
          referrerName: string;
          refereeName: string;
        }>;
        const paidReferrals = referrals
          .filter((r) => r.status === 'paid')
          .sort((a, b) => {
            const dateA = a.paidAt?.toDate?.() || new Date(a.createdAt);
            const dateB = b.paidAt?.toDate?.() || new Date(b.createdAt);
            return dateB.getTime() - dateA.getTime();
          })
          .slice(0, 5)
          .map((r: any) => ({
            id: r.id,
            amount: r.amount || 0,
            type: 'Referral Payout',
            date: r.paidAt?.toDate?.() || new Date(r.createdAt),
            description: `Payment to ${r.referrerName} for referring ${r.refereeName}`,
          }));

        setStats({
          totalRevenue,
          monthlyRevenue,
          totalMembers,
          averageContribution,
          recentPayments: paidReferrals,
        });
      } catch (error) {
        console.error('Error fetching financial data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFinancialData();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Financial Overview</h1>
        <p className="text-gray-600 mt-1">Monitor revenue, contributions, and financial performance</p>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-green-600">Total Revenue</p>
                <p className="text-2xl font-bold text-green-900">K{stats.totalRevenue.toLocaleString()}</p>
                <p className="text-xs text-green-600 mt-1">Annual estimate</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-600">Monthly Revenue</p>
                <p className="text-2xl font-bold text-blue-900">K{stats.monthlyRevenue.toLocaleString()}</p>
                <p className="text-xs text-blue-600 mt-1">Current month</p>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-600">Active Members</p>
                <p className="text-2xl font-bold text-purple-900">{stats.totalMembers}</p>
                <p className="text-xs text-purple-600 mt-1">Contributing members</p>
              </div>
              <Users className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-600">Avg Contribution</p>
                <p className="text-2xl font-bold text-orange-900">K{stats.averageContribution.toFixed(0)}</p>
                <p className="text-xs text-orange-600 mt-1">Per member</p>
              </div>
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Payments</CardTitle>
        </CardHeader>
        <CardContent>
          {stats.recentPayments.length > 0 ? (
            <div className="space-y-3">
              {stats.recentPayments.map((payment) => (
                <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge className="bg-green-100 text-green-800">
                        {payment.type}
                      </Badge>
                      <span className="text-sm font-medium">K{payment.amount.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-600">{payment.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {format(payment.date, 'MMM dd, yyyy')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              No recent payments found.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}