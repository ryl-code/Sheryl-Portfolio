import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ArrowRight, UserCheck, Code, Database, Terminal, Cpu, Globe, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const PROFILE_PHOTOS = ['/profile.jpg', '/photo1.png', '/photo2.jpeg'];
  
  const handlePhotoClick = () => {
    setPhotoIndex((prev) => (prev + 1) % PROFILE_PHOTOS.length);
  };

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const headerOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };




  const CYBER_NODES = [
    { id: 1, top: '10%', width: 80, duration: 45, delay: -5, opacity: 0.15 },
    { id: 2, top: '30%', width: 120, duration: 55, delay: -15, opacity: 0.1 },
    { id: 3, top: '65%', width: 90, duration: 48, delay: -10, opacity: 0.12 },
    { id: 4, top: '80%', width: 140, duration: 65, delay: -20, opacity: 0.08 }
  ];

  const SPARKLES = [
    { id: 1, top: '14%', left: '12%', size: 18, delay: 0, color: 'text-orange-400/60' },
    { id: 2, top: '26%', left: '85%', size: 24, delay: 1.6, color: 'text-rose-300/70' },
    { id: 3, top: '46%', left: '42%', size: 20, delay: 0.8, color: 'text-orange-300/50' },
    { id: 4, top: '65%', left: '16%', size: 22, delay: 2.2, color: 'text-rose-200/60' },
    { id: 5, top: '82%', left: '78%', size: 16, delay: 1.2, color: 'text-orange-400/50' }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center justify-center overflow-hidden bg-transparent"
    >


      {/* Decorative Nodes */}
      {CYBER_NODES.map((node) => (
        <motion.div
          key={`node-${node.id}`}
          animate={{
            y: [0, -15, 0],
            opacity: [node.opacity, node.opacity * 1.5, node.opacity],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            delay: node.delay,
            ease: "linear",
          }}
          className="absolute rounded-full border border-blue-200 pointer-events-none"
          style={{
            top: node.top,
            left: `${(node.id * 20) % 90}%`,
            width: node.width,
            height: node.width,
            borderStyle: 'dashed',
            borderWidth: '1.5px'
          }}
        />
      ))}

      {/* Decorative Sparkles */}
      {SPARKLES.map((sparkle) => (
        <motion.div
          key={`sparkle-${sparkle.id}`}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut"
          }}
          className={`absolute pointer-events-none ${sparkle.color.replace('orange-400', 'blue-400').replace('rose-300', 'indigo-300').replace('orange-300', 'sky-400').replace('rose-200', 'blue-300')}`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
          }}
        >
          <Shield className="w-5 h-5 opacity-40" />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center"
        >

          {/* Hero text */}
          <div className="md:col-span-7 flex flex-col items-start text-left md:pr-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 text-slate-700 font-sans text-sm font-medium mb-6 shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for internships</span>
            </motion.div>

            <motion.h1
              className="font-sans font-extrabold tracking-tight text-[#2D3748] text-3xl sm:text-4xl lg:text-5xl leading-[1.2] mb-5 select-none"
            >


              <div className="overflow-hidden py-1 flex flex-wrap">
                <motion.span
                  animate={{
                    backgroundPosition: ["0% center", "200% center"]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="inline-flex text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 font-serif italic font-bold tracking-normal py-2 text-5xl sm:text-6xl lg:text-7xl lg:leading-tight"
                  style={{ backgroundSize: "200% auto" }}
                >
                  {PERSONAL_INFO.fullName.split('').map((char, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 50, rotate: -15, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        rotate: 0,
                        scale: 1
                      }}
                      whileHover={{
                        y: -15,
                        scale: 1.1,
                        rotate: 5,
                        color: "#3b82f6", // tailwind blue-500
                        transition: { duration: 0.2, type: "spring", stiffness: 300 }
                      }}
                      transition={{ 
                        duration: 0.7, 
                        delay: 0.3 + idx * 0.06, 
                        type: 'spring', 
                        bounce: 0.5 
                      }}
                      className="inline-block cursor-default"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </motion.span>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-lg sm:text-xl font-medium tracking-tight text-slate-600 mb-5 max-w-2xl border-l-[3px] border-blue-900 pl-4 py-1"
            >
              <span className="text-[#2D3748] font-semibold block sm:inline">I'm an Information Technology Student</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                id="hero-view-portfolio"
                onClick={() => handleScrollTo('#portfolio')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-blue-900/20 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                id="hero-contact-me"
                onClick={() => handleScrollTo('#contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <UserCheck className="w-4 h-4 text-blue-900" />
                <span>Contact Me</span>
              </button>
            </motion.div>


          </div>

          {/* Profile Photo Placeholder Graphic / Mockup */}
          <div className="md:col-span-5 flex justify-center items-center relative mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.2, rotateY: -180, rotateZ: 45, y: 150 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0, rotateZ: 0, y: 0 }}
              transition={{ 
                duration: 1.8, 
                type: "spring", 
                bounce: 0.6, 
                delay: 0.2 
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group/avatar"
              style={{ perspective: 1000 }}
            >
              {/* High-Tech Orbital Rings Container */}
              <div className="absolute -inset-10 md:-inset-14 rounded-full pointer-events-none">
                
                {/* Outer Ring - Dashed */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-[1.5px] border-dashed border-blue-200/50"
                />

                {/* Middle Ring - Solid with Glow */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 rounded-full border border-blue-300/30 shadow-[0_0_15px_rgba(59,130,246,0.1)_inset]"
                />

                {/* Inner Ring - Glowing Track */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 rounded-full border border-blue-100/50"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 70%, rgba(37, 99, 235, 0.1) 90%, rgba(37, 99, 235, 0.4) 100%)'
                  }}
                />

                {/* Orbiting Satellites (Icons) - Unified Orderly Ring */}
                <motion.div 
                  animate={{ rotate: 360 }} 
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                  className="absolute inset-0"
                >
                  {/* Icon 1: 0 degrees */}
                  <div className="absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="bg-white backdrop-blur-md rounded-full p-2 shadow-[0_4px_12px_rgba(37,99,235,0.15)] border border-blue-100">
                      <Code className="w-4 h-4 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Icon 2: 60 degrees */}
                  <div className="absolute top-[93.3%] left-[75%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="bg-white backdrop-blur-md rounded-full p-2 shadow-[0_4px_12px_rgba(37,99,235,0.15)] border border-indigo-100">
                      <Database className="w-4 h-4 text-indigo-500" />
                    </motion.div>
                  </div>

                  {/* Icon 3: 120 degrees */}
                  <div className="absolute top-[93.3%] left-[25%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="bg-white backdrop-blur-md rounded-full p-2 shadow-[0_4px_12px_rgba(16,185,129,0.15)] border border-emerald-100">
                      <Terminal className="w-4 h-4 text-emerald-500" />
                    </motion.div>
                  </div>

                  {/* Icon 4: 180 degrees */}
                  <div className="absolute top-[50%] left-[0%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="bg-white backdrop-blur-md rounded-full p-2 shadow-[0_4px_12px_rgba(245,158,11,0.15)] border border-amber-100">
                      <Cpu className="w-4 h-4 text-amber-500" />
                    </motion.div>
                  </div>

                  {/* Icon 5: 240 degrees */}
                  <div className="absolute top-[6.7%] left-[25%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="bg-white backdrop-blur-md rounded-full p-2 shadow-[0_4px_12px_rgba(225,29,72,0.15)] border border-rose-100">
                      <Shield className="w-4 h-4 text-rose-500" />
                    </motion.div>
                  </div>

                  {/* Icon 6: 300 degrees */}
                  <div className="absolute top-[6.7%] left-[75%] -translate-x-1/2 -translate-y-1/2">
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="bg-white backdrop-blur-md rounded-full p-2 shadow-[0_4px_12px_rgba(14,165,233,0.15)] border border-sky-100">
                      <Globe className="w-4 h-4 text-sky-500" />
                    </motion.div>
                  </div>
                </motion.div>

              </div>

              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-full h-full relative"
              >
                {/* Soft, beautiful organic gradient background blob */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-blue-900/10 rounded-full blur-xl group-hover/avatar:opacity-100 transition-opacity duration-300"
                />

                {/* Photo Box container with click animation */}
                <motion.div 
                  onClick={handlePhotoClick}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-full h-full rounded-full overflow-hidden bg-white border-2 border-white/80 shadow-[0_0_40px_-10px_rgba(30,58,138,0.3)] relative flex items-center justify-center p-1.5 cursor-pointer transition-shadow duration-300 group-hover/avatar:shadow-[0_0_50px_-5px_rgba(30,58,138,0.4)] z-20"
                >

                  {/* Actual Profile Photo */}
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-100">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={photoIndex}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        src={PROFILE_PHOTOS[photoIndex]}
                        alt="Profile Photo"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover/avatar:scale-105"
                        style={{ imageRendering: 'high-quality' }}
                      />
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
