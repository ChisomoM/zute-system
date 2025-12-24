import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Target, 
  Heart, 
  Users, 
  Lightbulb, 
  Award,
  TrendingUp,
  Download,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
// import { Badge } from '@/components/ui/badge';

const coreValues = [
  {
    icon: Award,
    title: 'Integrity',
    description: 'Unwavering honesty and ethical leadership.',
    color: 'bg-blue-500'
  },
  {
    icon: Users,
    title: 'Unity',
    description: 'Strength in numbers, power in collaboration.',
    color: 'bg-orange-500'
  },
  {
    icon: TrendingUp,
    title: 'Empowerment',
    description: 'Building capacity for teachers to thrive.',
    color: 'bg-green-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Modern solutions for modern education.',
    color: 'bg-purple-500'
  },
  {
    icon: Heart,
    title: 'Service',
    description: 'Dedication to the welfare of educators.',
    color: 'bg-red-500'
  }
];

const leadershipTeam = [
  {
    name: 'Dr. Jane Mwansa',
    title: 'National President',
    image: '',
    bio: 'Dr. Mwansa has over 20 years of experience in educational leadership...'
  },
  {
    name: 'Mr. Peter Lungu',
    title: 'Vice President',
    image: '',
    bio: 'A staunch advocate for teacher rights with a background in labor law...'
  },
  {
    name: 'Ms. Grace Phiri',
    title: 'General Secretary',
    image: '',
    bio: 'Driving the strategic vision of ZUTE with operational excellence...'
  },
  {
    name: 'Mr. David Banda',
    title: 'Treasurer',
    image: '',
    bio: 'Ensuring financial transparency and sustainable growth for ECOS...'
  },
  {
    name: 'Mrs. Mary Chilufya',
    title: 'Trustee',
    image: '',
    bio: 'Overseeing the welfare and benefits distribution for members...'
  },
  {
    name: 'Mr. John Tembo',
    title: 'Publicity Secretary',
    image: '',
    bio: 'Managing communications and public relations for the union...'
  },
  {
    name: 'Ms. Sarah Kasonde',
    title: 'Projects Coordinator',
    image: '',
    bio: 'Leading development projects and partnerships...'
  },
  {
    name: 'Mr. Kennedy Mulenga',
    title: 'Legal Counsel',
    image: '',
    bio: 'Providing legal guidance and representation for members...'
  }
];

// --- Components ---

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

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadershipTeam[0] | null>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-white overflow-x-hidden" ref={containerRef}>
      <SEO 
        title="About ZUTE | Empowering Zambia's Educators"
        description="Discover the story, mission, and leadership behind ZUTE. We are building a stronger future for teachers through advocacy and economic empowerment."
      />
      
      <Navbar />

      {/* --- Hero Section --- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-[url('/ZUTE-IMAGE.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#172E70]/90" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 pt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-inter mb-6">
                Empowerment <span className="text-[#F15A29]">Our Agenda.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-8">
                Building a stronger, more dignified future for Zambia's educators through unity, advocacy, and economic independence.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-[#F15A29] hover:bg-[#d14012] text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105 shadow-lg shadow-orange-900/20">
                  Join the Movement <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    

      {/* --- Our Story (Bento Grid Style) --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Text Content */}
            <div className="lg:col-span-5 sticky top-24">
              <SectionHeader 
                title="Who We Are" 
                align="left" 
                subtitle="More than just a union. We are a movement."
              />
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  The <strong className="text-[#172E70]">Zambia Union of Teachers Empowerment (ZUTE)</strong> was born from a simple yet powerful realization: teachers deserve more than just representation; they deserve <span className="text-[#F15A29] font-semibold">transformation</span>.
                </p>
                <p className="mb-6">
                  Founded on the principles of integrity and unity, we are a forward-thinking organization that combines traditional labor advocacy with modern economic solutions.
                </p>
                <p>
                  Through our investment wing, <strong className="text-[#172E70]">ECOS</strong>, we are rewriting the narrative of the "struggling teacher" by providing sustainable wealth-building opportunities designed by teachers, for teachers.
                </p>
              </div>
              
              <div className="mt-10 p-6 bg-[#172E70]/5 rounded-2xl border border-[#172E70]/10">
                <h4 className="font-bold text-[#172E70] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#F15A29]" />
                  Registered & Recognized
                </h4>
                <p className="text-sm text-gray-600">
                  Fully registered with the Ministry of Labor and Ministry of Agriculture (for ECOS).
                </p>
              </div>
            </div>

            {/* Visual Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="col-span-2 h-64 md:h-80 rounded-3xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gray-200 bg-[url('/bg-t.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-bold text-xl">Advocating for Policy Reform</p>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-64 rounded-3xl overflow-hidden relative group bg-[#172E70]"
              >
                 <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp className="w-20 h-20 text-white/20" />
                 </div>
                 <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-[#F15A29] font-bold text-sm uppercase tracking-wider mb-1">ECOS Wing</span>
                    <p className="text-white font-bold text-lg">Financial Independence</p>
                 </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="h-64 rounded-3xl overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-gray-200 bg-[url('/bg-t.png')] bg-cover bg-right transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-lg">Community Impact</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Mission & Vision (Dark Mode) --- */}
      <section className="py-24 bg-[#172E70] text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F15A29] rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400 rounded-full blur-[100px] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Target className="w-8 h-8 text-[#F15A29]" />
                </div>
                <h3 className="text-2xl font-bold text-white/80 uppercase tracking-widest">Our Vision</h3>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                To be the leading teachers' union in Zambia known for <span className="text-[#F15A29]">integrity</span>, <span className="text-[#F15A29]">innovation</span>, and sustainable empowerment.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-[#F15A29]" />
                </div>
                <h3 className="text-2xl font-bold text-white/80 uppercase tracking-widest">Our Mission</h3>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                "To promote, protect, and advance the interests, welfare, and professional development of teachers through advocacy, cooperation, and innovation."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Core Values (Interactive Cards) --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Core Values" 
            subtitle="The principles that guide every decision we make."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-[#F15A29] group"
              >
                <div className={`w-14 h-14 rounded-xl ${value.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-7 h-7 text-${value.color.split('-')[1]}-600`} />
                </div>
                <h3 className="text-xl font-bold text-[#172E70] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Governance Structure (Visual) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Democratic Structure" 
                align="left"
                subtitle="Built on transparency. Governed by you."
              />
              <p className="text-lg text-gray-600 mb-8">
                ZUTE operates on a bottom-up democratic model. Every member has a voice, from the district level all the way to the National Conference.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "General Conference", desc: "Highest decision-making body. Meets every 4 years." },
                  { title: "National Council", desc: "Strategic oversight between conferences." },
                  { title: "National Management", desc: "Day-to-day operations and implementation." },
                  { title: "Provincial & District", desc: "Grassroots engagement and local representation." }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#F15A29]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#F15A29] font-bold text-sm">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#172E70] text-lg">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Button variant="outline" className="mt-10 border-[#172E70] text-[#172E70]">
                <Download className="w-4 h-4 mr-2" /> Download Constitution
              </Button>
            </div>

            {/* Visual Representation - Step Down Flow */}
            <div className="relative bg-[#F8FAFC] rounded-[40px] p-10 flex flex-col items-center justify-center space-y-2 min-h-[600px]">
               <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-50" />
               
               {[
                 { title: "General Conference", icon: Users, color: "bg-[#003a6b]" },
                 { title: "National Council", icon: Target, color: "bg-[#00579e]" },
                 { title: "National Management", icon: Award, color: "bg-[#006cc4]" },
                 { title: "Provincial & District", icon: Lightbulb, color: "bg-white" }
               ].map((item, index, arr) => (
                 <div key={index} className="relative z-10 flex flex-col items-center w-full">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`w-full max-w-md p-4 rounded-2xl shadow-lg ${item.color} ${index === 3 ? 'text-[#172E70]' : 'text-white'} flex items-center gap-4 relative`}
                    >
                      <div className={`p-3 rounded-full ${index === 3 ? 'bg-[#172E70]/10' : 'bg-white/20'}`}>
                        <item.icon className={`w-6 h-6 ${index === 3 ? 'text-[#172E70]' : 'text-white'}`} />
                      </div>
                      <span className="font-bold text-lg">{item.title}</span>
                    </motion.div>
                    
                    {index < arr.length - 1 && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         whileInView={{ height: 40, opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.2 + 0.1, duration: 0.4 }}
                         className="w-0.5 bg-gray-300 my-1 relative"
                       >
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                            <ArrowRight className="w-4 h-4 text-gray-400 rotate-90" />
                          </div>
                       </motion.div>
                    )}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Leadership Team --- */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Meet Our Stewards" 
            subtitle="Dedicated leaders committed to the vision."
          />

          <div className="flex flex-col gap-8">
            {/* President - Top Alone */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-80"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {leadershipTeam[0].image ? (
                    <img src={leadershipTeam[0].image} alt={leadershipTeam[0].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#172E70]/5 text-[#172E70]/20">
                      <Users className="w-20 h-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172E70] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full bg-[#F15A29] text-white hover:bg-[#d14012] border-none"
                      onClick={() => setSelectedLeader(leadershipTeam[0])}
                    >
                      View Bio
                    </Button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-[#172E70] mb-1">{leadershipTeam[0].name}</h3>
                  <p className="text-[#F15A29] font-medium text-sm uppercase tracking-wider">{leadershipTeam[0].title}</p>
                </div>
              </motion.div>
            </div>

            {/* VP - Second Alone */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-80"
              >
                <div className="h-64 bg-gray-200 relative overflow-hidden">
                  {leadershipTeam[1].image ? (
                    <img src={leadershipTeam[1].image} alt={leadershipTeam[1].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#172E70]/5 text-[#172E70]/20">
                      <Users className="w-20 h-20" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172E70] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full bg-[#F15A29] text-white hover:bg-[#d14012] border-none"
                      onClick={() => setSelectedLeader(leadershipTeam[1])}
                    >
                      View Bio
                    </Button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl text-[#172E70] mb-1">{leadershipTeam[1].name}</h3>
                  <p className="text-[#F15A29] font-medium text-sm uppercase tracking-wider">{leadershipTeam[1].title}</p>
                </div>
              </motion.div>
            </div>

            {/* Two People Side by Side */}
            <div className="flex justify-center gap-8">
              {[2, 3].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-80"
                >
                  <div className="h-64 bg-gray-200 relative overflow-hidden">
                    {leadershipTeam[idx].image ? (
                      <img src={leadershipTeam[idx].image} alt={leadershipTeam[idx].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#172E70]/5 text-[#172E70]/20">
                        <Users className="w-20 h-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172E70] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-6">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full bg-[#F15A29] text-white hover:bg-[#d14012] border-none"
                        onClick={() => setSelectedLeader(leadershipTeam[idx])}
                      >
                        View Bio
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl text-[#172E70] mb-1">{leadershipTeam[idx].name}</h3>
                    <p className="text-[#F15A29] font-medium text-sm uppercase tracking-wider">{leadershipTeam[idx].title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rest Down Together - Four in a Row */}
            <div className="flex justify-center gap-8 flex-wrap">
              {[4, 5, 6, 7].map((idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-64"
                >
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {leadershipTeam[idx].image ? (
                      <img src={leadershipTeam[idx].image} alt={leadershipTeam[idx].name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#172E70]/5 text-[#172E70]/20">
                        <Users className="w-20 h-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#172E70] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end justify-center p-4">
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="w-full bg-[#F15A29] text-white hover:bg-[#d14012] border-none"
                        onClick={() => setSelectedLeader(leadershipTeam[idx])}
                      >
                        View Bio
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg text-[#172E70] mb-1">{leadershipTeam[idx].name}</h3>
                    <p className="text-[#F15A29] font-medium text-xs uppercase tracking-wider">{leadershipTeam[idx].title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-32 bg-[#172E70] relative overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-8 font-inter"
          >
            Ready to be part of the <span className="text-[#F15A29]">change?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Join thousands of educators who are taking control of their professional and financial future with ZUTE.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button size="lg" className="bg-[#F15A29] hover:bg-[#d14012] text-white px-10 py-8 text-xl rounded-full shadow-2xl shadow-orange-900/50 transition-transform hover:scale-105" onClick={() => window.location.href = '/join'}>
              Become a Member
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Leadership Modal */}
      <Dialog open={!!selectedLeader} onOpenChange={() => setSelectedLeader(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden bg-white border-none">
          <div className="grid md:grid-cols-2">
            <div className="bg-[#172E70] p-8 flex flex-col justify-center items-center text-center text-white">
              <Avatar className="w-32 h-32 border-4 border-[#F15A29] mb-6 shadow-xl">
                <AvatarImage src={selectedLeader?.image} />
                <AvatarFallback className="bg-white/10 text-2xl font-bold">
                  {selectedLeader?.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold mb-2">{selectedLeader?.name}</h3>
              <p className="text-[#F15A29] font-medium uppercase tracking-wider text-sm">{selectedLeader?.title}</p>
            </div>
            <div className="p-8 flex items-center">
              <div>
                <DialogHeader>
                  <DialogTitle className="text-[#172E70] mb-4 text-xl">Biography</DialogTitle>
                </DialogHeader>
                <p className="text-gray-600 leading-relaxed">
                  {selectedLeader?.bio}
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
