import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Instagram, Check, Copy, ExternalLink, Shield, MessageCircle, Send, AtSign } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="contact"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16 relative w-full max-w-lg mx-auto"
        >
          {/* Subtle floating background glow */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 w-24 h-24 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />

          {/* Floating Element 1 - Top Left: Message/Chat Bubble */}
          <motion.div 
            animate={{ y: [0, -8, 0], rotate: [-10, 5, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -left-4 sm:-left-12 text-blue-500 opacity-60"
          >
            <MessageCircle className="w-6 h-6" strokeWidth={1.5} />
          </motion.div>
          
          {/* Floating Element 2 - Bottom Right: AtSign / Mention */}
          <motion.div 
            animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-2 -right-4 sm:-right-8 text-orange-400 opacity-60"
          >
            <AtSign className="w-5 h-5" strokeWidth={2} />
          </motion.div>
          
          {/* Floating Element 3 - Top Right: Paper Plane / Send */}
          <motion.div 
            animate={{ x: [0, 5, 0], y: [0, -5, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-6 -right-2 sm:-right-8 text-emerald-500 opacity-60"
          >
            <Send className="w-5 h-5" strokeWidth={1.5} />
          </motion.div>

          <motion.h2 
            id="contact-heading" 
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-sans font-black text-4xl sm:text-5xl text-[#1E3A8A] tracking-tighter drop-shadow-sm text-center relative z-10"
          >
            Get in touch
          </motion.h2>
          
          <motion.div 
            animate={{ width: ["3rem", "6rem", "3rem"], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 bg-gradient-to-r from-[#1E3A8A] to-blue-500 rounded-full mt-5 shadow-sm relative z-10" 
          />
        </motion.div>

        {/* Dynamic Social Cards Bento Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          
          {/* 1. PROFESSIONAL EMAIL CARD (With copy & click support) */}
          <motion.div 
            id="contact-card-email" 
            whileHover={{ y: -5 }}
            className="group bg-white/70 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/50 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between h-56 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.15)] relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-blue-500/15" />
            <div className="flex items-start justify-between relative z-10 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm transition-transform group-hover:scale-110 duration-300 flex-shrink-0">
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                    <Mail className="w-5 h-5" />
                  </motion.div>
                </div>
                <span className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider block">Send an Email</span>
              </div>
              <button 
                onClick={() => handleCopy('email', PERSONAL_INFO.email)}
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer flex-shrink-0 ml-2"
                title="Copy email to clipboard"
              >
                {copiedKey === 'email' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="font-sans font-bold text-[15px] text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors truncate">
                {PERSONAL_INFO.email}
              </h3>
              <p className="text-slate-500 text-[12px] leading-snug font-sans">
                Feel free to reach out for internship opportunities, project collaborations, or just to say hi.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <span>Write Mail</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* 2. LINKEDIN PROFESSIONAL CARD */}
          <motion.div 
            id="contact-card-linkedin"
            whileHover={{ y: -5 }}
            className="group bg-white/70 backdrop-blur-xl border border-slate-200/60 hover:border-sky-300/50 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between h-56 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.15)] relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-sky-500/15" />
            <div className="flex items-start justify-between relative z-10 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm transition-transform group-hover:scale-110 duration-300 flex-shrink-0">
                  <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                    <Linkedin className="w-5 h-5 text-sky-600" />
                  </motion.div>
                </div>
                <span className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider block">LinkedIn Network</span>
              </div>
              <button 
                onClick={() => handleCopy('linkedin', PERSONAL_INFO.linkedin)}
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer flex-shrink-0 ml-2"
                title="Copy LinkedIn link to clipboard"
              >
                {copiedKey === 'linkedin' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="font-sans font-bold text-[15px] text-slate-900 mb-1.5 group-hover:text-sky-600 transition-colors truncate">
                Sheryl Sharon
              </h3>
              <p className="text-slate-500 text-[12px] leading-snug font-sans">
                Let's connect! I share my professional journey, achievements, and tech insights here.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-sky-600 hover:text-sky-700 transition-colors cursor-pointer"
              >
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-400 group-hover:text-sky-600 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* 3. GITHUB REPOSITORY CARD */}
          <motion.div 
            id="contact-card-github"
            whileHover={{ y: -5 }}
            className="group bg-white/70 backdrop-blur-xl border border-slate-200/60 hover:border-slate-400/50 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between h-56 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.15)] relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-slate-500/15" />
            <div className="flex items-start justify-between relative z-10 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-800 shadow-sm transition-transform group-hover:scale-110 duration-300 flex-shrink-0">
                  <motion.div animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
                    <Github className="w-5 h-5" />
                  </motion.div>
                </div>
                <span className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider block">Code Workspace</span>
              </div>
              <button 
                onClick={() => handleCopy('github', PERSONAL_INFO.github)}
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer flex-shrink-0 ml-2"
                title="Copy GitHub link to clipboard"
              >
                {copiedKey === 'github' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="font-sans font-bold text-[15px] text-slate-900 mb-1.5 group-hover:text-slate-700 transition-colors truncate">
                @ryl-code
              </h3>
              <p className="text-slate-500 text-[12px] leading-snug font-sans">
                Check out my source code, security projects, and see what I'm currently building.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
              >
                <span>Explore Repos</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* 4. INSTAGRAM SOCIAL CARD */}
          <motion.div 
            id="contact-card-instagram"
            whileHover={{ y: -5 }}
            className="group bg-white/70 backdrop-blur-xl border border-slate-200/60 hover:border-pink-300/50 rounded-2xl p-6 transition-all duration-500 flex flex-col justify-between h-56 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.15)] relative overflow-hidden"
          >
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-pink-500/15" />
            <div className="flex items-start justify-between relative z-10 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center text-pink-600 shadow-sm transition-transform group-hover:scale-110 duration-300 flex-shrink-0">
                  <motion.div animate={{ y: [0, -2, 0], rotate: [-5, 5, -5] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
                    <Instagram className="w-5 h-5" />
                  </motion.div>
                </div>
                <span className="font-sans font-bold text-[11px] text-slate-400 uppercase tracking-wider block">Casual Channel</span>
              </div>
              <button 
                onClick={() => handleCopy('instagram', PERSONAL_INFO.instagram)}
                className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer flex-shrink-0 ml-2"
                title="Copy Instagram link to clipboard"
              >
                {copiedKey === 'instagram' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            <div className="relative z-10 flex-grow">
              <h3 className="font-sans font-bold text-[15px] text-slate-900 mb-1.5 group-hover:text-pink-600 transition-colors truncate">
                @xierylka
              </h3>
              <p className="text-slate-500 text-[12px] leading-snug font-sans">
                A glimpse into my daily life, behind the scenes, and random moments outside of coding.
              </p>
            </div>

            <div className="pt-2">
              <a 
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans font-semibold text-xs text-pink-600 hover:text-pink-700 transition-colors cursor-pointer"
              >
                <span>Follow Activity</span>
                <ExternalLink className="w-3.5 h-3.5 text-pink-400 group-hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
