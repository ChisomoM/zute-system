import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const PreFooter = () => {
  const features = [
    {
      icon: Shield,
      title: "Legal Protection",
      description: "Comprehensive legal coverage and representation for all professional matters."
    },
    {
      icon: TrendingUp,
      title: "Financial Growth",
      description: "Access to exclusive investment opportunities and cooperative benefits."
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "Connect with a nationwide network of dedicated education professionals."
    },
    {
      icon: Award,
      title: "Career Development",
      description: "Continuous learning resources to advance your professional standing."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F15A29] font-semibold tracking-wider text-sm uppercase mb-4 block"
          >
            Why Choose ZUTE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            The Professional Standard for Educators
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            We are building a modern institution that prioritizes your security, growth, and professional dignity.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#172E70]/5 transition-colors">
                <feature.icon className="text-[#172E70] w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#172E70] rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
            {/* Abstract Pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="20"/>
                </svg>
            </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to elevate your career?
              </h3>
              <p className="text-blue-100 text-lg">
                Join thousands of Zambian educators who trust ZUTE for their professional representation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/join">
                <Button 
                  size="lg" 
                  className="bg-[#F15A29] hover:bg-[#d94c1e] text-white font-semibold px-8 py-6 h-auto text-base w-full sm:w-auto shadow-lg shadow-orange-900/20"
                >
                  Become a Member
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white px-8 py-6 h-auto text-base w-full sm:w-auto"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PreFooter;
