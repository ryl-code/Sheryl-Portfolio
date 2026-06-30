import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, BookOpen, Compass, Code, ShieldCheck, Cpu, Briefcase, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const yearsToGo = "2024 - Expected 2027";

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-24 relative overflow-hidden bg-transparent"
    >
      {/* Decorative Section Divider */}
      <div className="absolute top-0 inset-x-0 flex justify-center items-start">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-0 w-2/3 max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-blue-700/40 to-transparent blur-[1px]" />

        {/* Center glowing element */}
        <div className="absolute top-[-3px] w-12 h-1.5 bg-blue-500 rounded-full blur-[3px] opacity-60" />
        <div className="absolute top-[-1px] w-4 h-0.5 bg-blue-300 rounded-full" />
      </div>

      {/* Decorative Network Nodes Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {/* Top Right Network SVG */}
        <svg className="absolute top-[15%] right-[5%] w-64 h-64 text-slate-300/40 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="0.5">
          <circle cx="20" cy="20" r="1" fill="currentColor" />
          <circle cx="80" cy="30" r="1.5" fill="currentColor" />
          <circle cx="40" cy="80" r="1" fill="currentColor" />
          <circle cx="90" cy="70" r="1.2" fill="currentColor" />
          <line x1="20" y1="20" x2="80" y2="30" />
          <line x1="20" y1="20" x2="40" y2="80" />
          <line x1="80" y1="30" x2="40" y2="80" />
          <line x1="80" y1="30" x2="90" y2="70" />
          <line x1="40" y1="80" x2="90" y2="70" />
        </svg>
        
        {/* Bottom Left Network SVG */}
        <svg className="absolute bottom-[10%] left-[2%] w-72 h-72 text-slate-300/40 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="0.5">
           <circle cx="10" cy="40" r="1.5" fill="currentColor" />
           <circle cx="40" cy="10" r="1" fill="currentColor" />
           <circle cx="70" cy="60" r="1.2" fill="currentColor" />
           <circle cx="30" cy="90" r="1" fill="currentColor" />
           <line x1="10" y1="40" x2="40" y2="10" />
           <line x1="10" y1="40" x2="30" y2="90" />
           <line x1="10" y1="40" x2="70" y2="60" />
           <line x1="40" y1="10" x2="70" y2="60" />
           <line x1="30" y1="90" x2="70" y2="60" />
        </svg>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >

          <span className="font-mono text-xs sm:text-sm text-[#1E3A8A] tracking-[0.25em] uppercase mb-4 font-semibold opacity-80">
            Get To Know
          </span>
          <div className="relative inline-block">
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-12 sm:-left-16 text-blue-400/50"
            >
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, -15, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-12 sm:-right-16 text-sky-500/30"
            >
              <Terminal className="w-10 h-10 sm:w-12 sm:h-12" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -right-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400/50 blur-[2px]"
            />

            <h2 id="about-heading" className="font-sans font-black text-5xl sm:text-6xl lg:text-7xl text-[#1E3A8A] tracking-tighter drop-shadow-sm relative z-10">
              About Me
            </h2>
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#1E3A8A] to-blue-700 rounded-full mt-7 shadow-sm" />
        </motion.div>

        <motion.div
          className="flex flex-col gap-10 w-full max-w-5xl mx-auto relative z-10"
        >
          {/* Subtle Ambient Glow behind boxes */}
          <div className="absolute top-20 -left-20 w-[40rem] h-[40rem] bg-blue-900/[0.02] rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="absolute bottom-40 -right-20 w-[35rem] h-[35rem] bg-slate-500/[0.025] rounded-full blur-[80px] pointer-events-none -z-10" />
          {/* 1. Professional Objective (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(30,58,138,0.15)" }}
            className="w-full bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/50 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(30,58,138,0.08)] transition-all duration-300"
          >
            <h3 className="font-sans font-bold text-2xl text-[#2D3748] mb-4 flex items-center gap-2.5">
              <ShieldCheck className="w-6 h-6 text-blue-900" />
              <span>Professional Objective</span>
            </h3>
            <p className="text-slate-600 text-[15px] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </motion.div>

          {/* 2. Education History (Full Width) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -10px rgba(30,58,138,0.15)" }}
            className="w-full bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/50 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(30,58,138,0.08)] relative overflow-hidden transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-900/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-7 h-7 text-[#1E3A8A]" />
              <h3 className="font-sans font-bold text-2xl text-[#2D3748]">Education </h3>
            </div>

            {/* Education Main Bloc */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                <Calendar className="w-4 h-4" />
                <span>{PERSONAL_INFO.education.period}</span>
              </div>

              <h4 className="font-sans font-bold text-lg text-[#2D3748]">
                {PERSONAL_INFO.education.degree}
              </h4>

              <p className="text-slate-700 font-medium text-[15px]">
                {PERSONAL_INFO.education.institution}
              </p>

              <p className="text-slate-600 text-[14px]">
                Concentration: <span className="text-[#1E3A8A] font-medium">{PERSONAL_INFO.education.concentration}</span>
              </p>

              <p className="text-[#1E3A8A] font-bold text-[14px] mt-2">
                GPA: {PERSONAL_INFO.education.gpa}
              </p>
            </div>

            {/* Relevant Coursework badges */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span className="font-sans font-semibold text-xs text-slate-550 tracking-wide uppercase">Relevant Coursework</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.education.relevantCourses.map((course, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-600 hover:text-[#1E3A8A] transition-all duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3. Areas of Focus & Specialization (3-Column Grid) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full space-y-6"
          >
            <h3 className="font-sans font-bold text-2xl text-[#2D3748] flex items-center gap-2.5 pl-2">
              <Compass className="w-6 h-6 text-blue-900" />
              <span>Areas of Focus & Specialization</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {PERSONAL_INFO.interests.map((interest, i) => {
                const getIcon = (title: string) => {
                  if (title.toLowerCase().includes('cyber')) return <ShieldCheck className="w-5 h-5 text-blue-900" />;
                  if (title.toLowerCase().includes('forensics')) return <Cpu className="w-5 h-5 text-sky-600" />;
                  return <Code className="w-5 h-5 text-blue-600" />;
                };

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                    className="bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-lg hover:bg-white/95 border border-slate-200/80 border-t-4 border-t-blue-500 hover:border-blue-300 rounded-2xl p-6 shadow-[0_4px_20px_rgba(30,58,138,0.05)] hover:shadow-[0_12px_30px_rgba(30,58,138,0.15)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors mb-4">
                      {getIcon(interest.title)}
                    </div>
                    <h4 className="font-sans font-bold text-lg text-[#2D3748] tracking-wide mb-2 group-hover:text-[#1E3A8A] transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                      {interest.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
