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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-[#F15A29] font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-orange-50 rounded-full border border-orange-200">
              Why Choose ZUTE
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-inter bg-clip-text text-transparent bg-gradient-to-r from-[#172E70] to-[#F15A29]"
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
          className="bg-[#172E70] rounded-2xl pl-8 pt-8 pb-8 md:p-12 relative overflow-hidden"
        >
            {/* Abstract Pattern */}
            <div className="absolute top-0 right-0 mr-4 pl-12 pt-16 opacity-10 pointer-events-none">
                <svg width="275" height="275" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" stroke="white" strokeWidth="24"/>
                </svg>
            </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#F15A29] via-orange-400 to-[#F15A29]">
                Join the Movement for Teacher Empowerment
              </h3>
              <p className="text-blue-100 text-lg">
                Be part of a union that fights for your rights, protects your future, and builds your wealth.
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
