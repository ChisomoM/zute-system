// import { useState, useEffect } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from '@/components/ui/table';
// import { Badge } from '@/components/ui/badge';
// import { Calendar } from '@/components/ui/calendar';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Textarea } from '@/components/ui/textarea';
// import { Plus, CalendarIcon, Loader2, CreditCard } from 'lucide-react';
// import { format } from 'date-fns';
// import { cn } from '@/lib/utils';
// import { toast } from 'sonner';
// import { FirebaseFirestore } from '@/lib/firebase/firestore';
// // import { PaymentService } from '@/lib/services/paymentService';
// // import type { PaymentRecord, PaymentMethod } from '@/types/payments';

// interface Member {
//   id: string;
//   fullName: string;
//   email?: string;
//   district?: string;
//   school?: string;
// }

// export default function RecordPayments() {
//   const [members, setMembers] = useState<Member[]>([]);
//   const [recentPayments, setRecentPayments] = useState<PaymentRecord[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [submitting, setSubmitting] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Form state
//   const [selectedMember, setSelectedMember] = useState<Member | null>(null);
//   const [paymentDate, setPaymentDate] = useState<Date>(new Date());
//   const [amount, setAmount] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('manual');
//   const [notes, setNotes] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch active members
//         const membersData = await FirebaseFirestore.getCollection('users', [
//           FirebaseFirestore.where('status', '==', 'active')
//         ]) as Member[];
//         setMembers(membersData);

//         // Fetch recent payments
//         const paymentsData = await FirebaseFirestore.getCollection('payments', [], [
//           FirebaseFirestore.orderBy('recordedAt', 'desc'),
//           FirebaseFirestore.limit(10)
//         ]) as PaymentRecord[];
//         setRecentPayments(paymentsData);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//         toast.error('Failed to load data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredMembers = members.filter(member =>
//     member.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     member.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     member.district?.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!selectedMember) {
//       toast.error('Please select a member');
//       return;
//     }

//     if (!amount || parseFloat(amount) <= 0) {
//       toast.error('Please enter a valid amount');
//       return;
//     }

//     try {
//       setSubmitting(true);

//       const paymentData = {
//         memberId: selectedMember.id,
//         memberName: selectedMember.fullName,
//         amount: parseFloat(amount),
//         paymentDate,
//         paymentMethod,
//         notes: notes.trim() || undefined,
//       };

//       await PaymentService.recordPayment(paymentData);

//       toast.success('Payment recorded successfully');

//       // Reset form
//       setSelectedMember(null);
//       setAmount('');
//       setPaymentMethod('manual');
//       setNotes('');
//       setPaymentDate(new Date());

//       // Refresh recent payments
//       const paymentsData = await FirebaseFirestore.getCollection('payments', [], [
//         FirebaseFirestore.orderBy('recordedAt', 'desc'),
//         FirebaseFirestore.limit(10)
//       ]) as PaymentRecord[];
//       setRecentPayments(paymentsData);

//     } catch (error) {
//       console.error('Error recording payment:', error);
//       toast.error('Failed to record payment');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const getPaymentMethodLabel = (method: PaymentMethod) => {
//     switch (method) {
//       case 'salary_deduction': return 'Salary Deduction';
//       case 'manual': return 'Manual Payment';
//       case 'bank_transfer': return 'Bank Transfer';
//       case 'cash': return 'Cash';
//       default: return method;
//     }
//   };

//   if (loading) {
//     return (
//       <div className="space-y-6">
//         <div className="animate-pulse">
//           <div className="h-8 bg-gray-200 rounded w-48 mb-6"></div>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             <div className="h-96 bg-gray-200 rounded"></div>
//             <div className="h-96 bg-gray-200 rounded"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-gray-900">Record Payments</h1>
//         <p className="text-gray-600 mt-1">Manually record member payments and track payment history</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Record Payment Form */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Plus className="h-5 w-5" />
//               Record New Payment
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Member Selection */}
//               <div className="space-y-2">
//                 <Label htmlFor="member">Select Member</Label>
//                 <Select
//                   value={selectedMember?.id || ''}
//                   onValueChange={(value) => {
//                     const member = members.find(m => m.id === value);
//                     setSelectedMember(member || null);
//                   }}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Search and select a member..." />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <div className="p-2">
//                       <Input
//                         placeholder="Search members..."
//                         value={searchQuery}
//                         onChange={(e) => setSearchQuery(e.target.value)}
//                         className="mb-2"
//                       />
//                     </div>
//                     {filteredMembers.slice(0, 10).map((member) => (
//                       <SelectItem key={member.id} value={member.id}>
//                         <div className="flex flex-col">
//                           <span className="font-medium">{member.fullName}</span>
//                           <span className="text-sm text-gray-500">
//                             {member.district} • {member.school}
//                           </span>
//                         </div>
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Payment Amount */}
//               <div className="space-y-2">
//                 <Label htmlFor="amount">Amount (K)</Label>
//                 <Input
//                   id="amount"
//                   type="number"
//                   step="0.01"
//                   min="0"
//                   placeholder="0.00"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   required
//                 />
//               </div>

//               {/* Payment Date */}
//               <div className="space-y-2">
//                 <Label>Payment Date</Label>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button
//                       variant="outline"
//                       className={cn(
//                         "w-full justify-start text-left font-normal",
//                         !paymentDate && "text-muted-foreground"
//                       )}
//                     >
//                       <CalendarIcon className="mr-2 h-4 w-4" />
//                       {paymentDate ? format(paymentDate, "PPP") : "Pick a date"}
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-auto p-0">
//                     <Calendar
//                       mode="single"
//                       selected={paymentDate}
//                       onSelect={(date) => date && setPaymentDate(date)}
//                       initialFocus
//                     />
//                   </PopoverContent>
//                 </Popover>
//               </div>

//               {/* Payment Method */}
//               <div className="space-y-2">
//                 <Label htmlFor="method">Payment Method</Label>
//                 <Select value={paymentMethod} onValueChange={(value: PaymentMethod) => setPaymentMethod(value)}>
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="salary_deduction">Salary Deduction</SelectItem>
//                     <SelectItem value="manual">Manual Payment</SelectItem>
//                     <SelectItem value="bank_transfer">Bank Transfer</SelectItem>
//                     <SelectItem value="cash">Cash</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Notes */}
//               <div className="space-y-2">
//                 <Label htmlFor="notes">Notes (Optional)</Label>
//                 <Textarea
//                   id="notes"
//                   placeholder="Additional payment details..."
//                   value={notes}
//                   onChange={(e) => setNotes(e.target.value)}
//                   rows={3}
//                 />
//               </div>

//               <Button type="submit" disabled={submitting} className="w-full">
//                 {submitting ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Recording Payment...
//                   </>
//                 ) : (
//                   <>
//                     <CreditCard className="mr-2 h-4 w-4" />
//                     Record Payment
//                   </>
//                 )}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>

//         {/* Recent Payments */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Payments</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {recentPayments.length > 0 ? (
//               <div className="space-y-3">
//                 {recentPayments.map((payment) => (
//                   <div key={payment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <Badge className="bg-green-100 text-green-800">
//                           {getPaymentMethodLabel(payment.paymentMethod)}
//                         </Badge>
//                         <span className="font-medium">K{payment.amount.toLocaleString()}</span>
//                       </div>
//                       <p className="text-sm font-medium text-gray-900">{payment.memberName}</p>
//                       <p className="text-sm text-gray-600">
//                         {format(new Date(payment.paymentDate), 'MMM dd, yyyy')}
//                       </p>
//                       {payment.notes && (
//                         <p className="text-xs text-gray-500 mt-1">{payment.notes}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-8 text-gray-500">
//                 No payments recorded yet.
//               </div>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
