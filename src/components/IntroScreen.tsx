import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Shield, Code2, Fingerprint } from 'lucide-react';

interface IntroScreenProps {
  key?: React.Key;
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  useEffect(() => {
    // Automatically transition to the main app after 3.2 seconds
    const timer = setTimeout(() => {
      onComplete();
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 overflow-hidden"
      exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Watercolor Cloud Background */}
      <div 
        className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-blue-300/30 blur-[100px] mix-blend-multiply" 
        style={{ animation: 'cloud-shift 20s ease-in-out infinite alternate' }} 
      />
      <div 
        className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-sky-200/40 blur-[120px] mix-blend-multiply" 
        style={{ animation: 'cloud-shift 25s ease-in-out infinite alternate-reverse' }} 
      />

      {/* Floating Theme Icons */}
      <motion.div 
        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 text-blue-200"
      >
        <Code2 className="w-8 h-8" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 15, 0], rotate: [0, -10, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 text-blue-200"
      >
        <Shield className="w-10 h-10" />
      </motion.div>
      <motion.div 
        animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/3 right-1/3 text-slate-200"
      >
        <Terminal className="w-6 h-6" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <motion.div 
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
          className="w-12 h-12 bg-[#1E3A8A] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20"
        >
          <Fingerprint className="w-6 h-6 text-white" />
        </motion.div>

        <h1 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl text-[#1E3A8A] tracking-tight leading-tight">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="block text-slate-400 text-sm sm:text-base font-bold uppercase tracking-widest mb-2"
          >
            Initializing
          </motion.span>
          <motion.span
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Sheryl Sharon's Space
          </motion.span>
        </h1>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full mt-8 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
            className="h-full bg-[#1E3A8A] rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
