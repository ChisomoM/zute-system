import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp, 
  PieChart, 
  Users, 
  Briefcase, 
  CheckCircle2,
  Wallet,
  LineChart,
  ShieldCheck,
  Coins
} from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const offerings = [
  {
    icon: LineChart,
    title: 'Investment Opportunities',
    description: 'Access sustainable investment initiatives designed for long-term wealth building.',
    color: 'bg-blue-500'
  },
  {
    icon: Wallet,
    title: 'Financial Services',
    description: 'Affordable loans, savings programs, and financial products tailored for educators.',
    color: 'bg-green-500'
  },
  {
    icon: Users,
    title: 'Cooperative Ownership',
    description: 'Be part of a member-owned cooperative where profits benefit all participants.',
    color: 'bg-orange-500'
  },
  {
    icon: Briefcase,
    title: 'Entrepreneurial Support',
    description: 'Resources and training for teachers looking to start or grow their own businesses.',
    color: 'bg-purple-500'
  }
];

const benefits = [
  'Sustainable income generation',
  'Member dividends and profit-sharing',
  'Collective economic power',
  'Access to capital for personal projects',
  'Professional financial guidance',
  'Financial literacy training'
];

const steps = [
  {
    number: '01',
    title: 'Become a ZUTE Member',
    description: 'Join ZUTE to access all cooperative benefits.'
  },
  {
    number: '02',
    title: 'Register with ECOS',
    description: 'Complete your ECOS membership registration.'
  },
  {
    number: '03',
    title: 'Start Investing',
    description: 'Choose investment options that fit your goals.'
  }
];

const SectionHeader = ({ title, subtitle, align = 'center', light = false }: { title: string, subtitle?: string, align?: 'left' | 'center', light?: boolean }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-block"
    >
      <h2 className={`text-3xl md:text-5xl font-bold font-inter mb-4 ${light ? 'text-white' : 'text-[#172E70]'}`}>
        {title}
      </h2>
      <div className={`h-1.5 w-24 bg-[#F15A29] rounded-full ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`mt-6 text-lg md:text-xl max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600'}`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function EcosPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-white overflow-x-hidden" ref={containerRef}>
      <SEO 
        title="ECOS | Financial Independence for Teachers"
        description="The Educators Cooperative Society (ECOS) is ZUTE's investment wing, providing sustainable wealth-building opportunities designed by teachers, for teachers."
      />
      
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#172E70]">
        {/* Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-[#F15A29] rounded-full blur-[150px] opacity-10" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-400 rounded-full blur-[150px] opacity-10" />
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-[#F15A29] font-bold text-sm mb-6 border border-white/10 backdrop-blur-sm">
                <TrendingUp className="w-4 h-4" />
                <span>The Educators Cooperative Society</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white font-inter mb-6 leading-tight">
                Your Path to <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F15A29] to-orange-400">
                  Financial Independence
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed mb-8">
                ECOS creates sustainable wealth-building opportunities designed by teachers, for teachers. Join the movement towards economic freedom.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#F15A29] hover:bg-[#d14012] text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-900/20">
                  Join ECOS
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm">
                  How It Works
                </Button>
              </div>
            </motion.div>

            {/* Right Visual - Abstract Growth Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block h-[600px]"
            >
              {/* Main Card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[40px] border border-white/20 shadow-2xl p-8 flex flex-col justify-between z-20">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-[#F15A29] rounded-2xl">
                      <PieChart className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">Total Assets</p>
                      <p className="text-white font-bold text-2xl">Growing</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-[#F15A29]" 
                      />
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden w-2/3">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "60%" }}
                        transition={{ duration: 1.5, delay: 0.7 }}
                        className="h-full bg-blue-400" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-3xl p-6 backdrop-blur-md">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold">Monthly Dividends</p>
                      <p className="text-green-400 text-sm">+12.5% Growth</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3"
              >
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#172E70] font-bold text-sm">Member Owned</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-40 left-10 bg-white p-4 rounded-2xl shadow-xl z-30 flex items-center gap-3"
              >
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[#172E70] font-bold text-sm">Secure Future</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- What is ECOS (Redesigned) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Typography & Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#F15A29]/10 text-[#F15A29] font-bold text-sm mb-6">
                Registered & Recognized
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#172E70] font-inter mb-8 leading-tight">
                Building Wealth, <br/>
                <span className="relative inline-block">
                  <span className="relative z-10">Together.</span>
                  <div className="absolute bottom-2 left-0 w-full h-3 bg-[#F15A29]/20 -rotate-2" />
                </span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  The <strong className="text-[#172E70]">Educators Cooperative Society (ECOS)</strong> is not just an investment wing; it's a movement towards financial sovereignty for Zambian teachers.
                </p>
                <p>
                  Registered with the <span className="text-[#172E70] font-medium">Ministry of Agriculture and Cooperatives</span>, we leverage the collective power of thousands of educators to unlock investment opportunities that were previously out of reach.
                </p>
                
                <div className="pt-4 grid grid-cols-2 gap-6">
                  <div className="pl-4 border-l-4 border-[#F15A29]">
                    <p className="text-3xl font-bold text-[#172E70]">100%</p>
                    <p className="text-sm text-gray-500">Teacher Owned</p>
                  </div>
                  <div className="pl-4 border-l-4 border-blue-500">
                    <p className="text-3xl font-bold text-[#172E70]">High</p>
                    <p className="text-sm text-gray-500">Growth Potential</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-12">
                  <div className="bg-[#172E70] p-6 rounded-3xl text-white shadow-xl">
                    <TrendingUp className="w-8 h-8 mb-4 text-[#F15A29]" />
                    <p className="font-bold text-lg">Sustainable Growth</p>
                    <p className="text-white/60 text-sm mt-2">Long-term value creation strategies.</p>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-3xl h-40 bg-[url('/pattern.png')] bg-cover opacity-80" />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-6 rounded-3xl h-40 bg-[url('/ZUTE-IMAGE.jpg')] bg-cover bg-center" />
                  <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-xl">
                    <ShieldCheck className="w-8 h-8 mb-4 text-blue-500" />
                    <p className="font-bold text-lg text-[#172E70]">Secure Assets</p>
                    <p className="text-gray-500 text-sm mt-2">Regulated and transparent management.</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50 to-orange-50 rounded-full blur-3xl -z-10 opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- What We Offer --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="What We Offer" 
            subtitle="Comprehensive financial solutions for every stage of your career."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-7 h-7 text-${item.color.split('-')[1]}-600`} />
                </div>
                <h3 className="text-xl font-bold text-[#172E70] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- How It Works --- */}
      <section className="py-24 bg-[#172E70] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader 
            title="Join ECOS in 3 Simple Steps" 
            light={true}
            subtitle="Start your journey to financial freedom today."
          />

          <div className="grid md:grid-cols-3 gap-12 mt-16 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20 border-t border-dashed border-white/40" />

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto bg-[#F15A29] rounded-full flex items-center justify-center text-3xl font-bold text-white shadow-xl shadow-orange-900/30 mb-8 relative z-10 border-4 border-[#172E70]">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-white text-[#172E70] hover:bg-gray-100 px-10 py-6 text-lg rounded-full font-bold">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* --- Benefits --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Why Join ECOS?" 
                align="left"
                subtitle="Experience the power of collective investment."
              />
              
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#F15A29] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#172E70] to-[#F15A29] rounded-[40px] rotate-3 opacity-10" />
               <img 
                 src="/ecos-benefits.jpg" 
                 alt="Teachers discussing finances" 
                 className="rounded-[40px] shadow-2xl relative z-10 w-full h-[500px] object-cover bg-gray-200"
               />
               
               {/* Floating Stat Card */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
                 className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl z-20 max-w-xs hidden md:block"
               >
                 <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-green-100 rounded-full text-green-600">
                     <Coins className="w-8 h-8" />
                   </div>
                   <div>
                     <p className="text-gray-500 text-sm">Average Return</p>
                     <p className="text-[#172E70] font-bold text-2xl">High Yield</p>
                   </div>
                 </div>
                 <p className="text-gray-600 text-sm">
                   Our cooperative model ensures that profits are shared back to you.
                 </p>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Final CTA --- */}
      <section className="py-32 bg-[#F8FAFC] relative overflow-hidden text-center">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-[#172E70] mb-8 font-inter">
            Ready to Build Your <span className="text-[#F15A29]">Financial Future?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join ECOS today and take control of your economic empowerment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-[#172E70] hover:bg-[#0f1e4a] text-white px-10 py-8 text-xl rounded-full shadow-xl transition-transform hover:scale-105">
              Join ECOS Now
            </Button>
            <Button variant="outline" size="lg" className="border-[#172E70] text-[#172E70] hover:bg-blue-50 px-10 py-8 text-xl rounded-full">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
