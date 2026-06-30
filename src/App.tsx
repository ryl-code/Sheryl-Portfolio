import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import { Terminal, Shield, Fingerprint, Code2, Cpu, Globe, Lock, Database, Server, Wifi, Command, Hash, Activity, Key, Code, Laptop } from 'lucide-react';
const SectionDivider = () => (
  <div className="w-full flex items-center justify-center opacity-60 py-8">
    <div className="w-1/3 max-w-xs h-[1px] bg-gradient-to-r from-transparent to-slate-300" />
    <div className="mx-4 w-2 h-2 bg-blue-500/80 rotate-45 rounded-[1px] shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
    <div className="w-1/3 max-w-xs h-[1px] bg-gradient-to-l from-transparent to-slate-300" />
  </div>
);



const ScrollDecorations = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block z-0">
    {/* Left Side */}
    <div className="absolute top-[2%] left-[4%] text-slate-400 opacity-30"><Code2 className="w-8 h-8" /></div>
    <div className="absolute top-[8%] left-[7%] text-blue-400 opacity-30"><Hash className="w-5 h-5" /></div>
    <div className="absolute top-[18%] left-[3%] text-indigo-400 opacity-30"><Lock className="w-6 h-6" /></div>
    <div className="absolute top-[26%] left-[6%] text-slate-400 opacity-30"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full" /></div>
    <div className="absolute top-[35%] left-[4%] text-sky-400 opacity-30"><Globe className="w-8 h-8" /></div>
    <div className="absolute top-[45%] left-[8%] text-slate-400 opacity-30"><Activity className="w-5 h-5" /></div>
    <div className="absolute top-[55%] left-[3%] text-slate-400 opacity-30"><Fingerprint className="w-10 h-10" /></div>
    <div className="absolute top-[65%] left-[6%] text-blue-400 opacity-30"><Key className="w-6 h-6" /></div>
    <div className="absolute top-[75%] left-[4%] text-slate-400 opacity-30"><div className="w-2 h-2 border border-slate-400 rotate-45" /></div>
    <div className="absolute top-[85%] left-[7%] text-indigo-400 opacity-30"><Server className="w-7 h-7" /></div>
    <div className="absolute top-[95%] left-[5%] text-slate-400 opacity-30"><Command className="w-6 h-6" /></div>

    {/* Right Side */}
    <div className="absolute top-[5%] right-[5%] text-slate-400 opacity-30"><Terminal className="w-7 h-7" /></div>
    <div className="absolute top-[15%] right-[3%] text-sky-400 opacity-30"><Shield className="w-8 h-8" /></div>
    <div className="absolute top-[22%] right-[7%] text-slate-400 opacity-30"><div className="w-2 h-2 rounded-full border border-slate-400" /></div>
    <div className="absolute top-[32%] right-[4%] text-blue-400 opacity-30"><Cpu className="w-9 h-9" /></div>
    <div className="absolute top-[42%] right-[6%] text-indigo-400 opacity-30"><Database className="w-6 h-6" /></div>
    <div className="absolute top-[52%] right-[3%] text-slate-400 opacity-30"><Wifi className="w-7 h-7" /></div>
    <div className="absolute top-[62%] right-[7%] text-slate-400 opacity-30"><div className="w-1.5 h-1.5 bg-slate-400 rounded-full" /></div>
    <div className="absolute top-[72%] right-[4%] text-sky-400 opacity-30"><Code className="w-8 h-8" /></div>
    <div className="absolute top-[82%] right-[6%] text-slate-400 opacity-30"><Hash className="w-5 h-5" /></div>
    <div className="absolute top-[92%] right-[3%] text-blue-400 opacity-30"><Laptop className="w-7 h-7" /></div>
    <div className="absolute top-[98%] right-[8%] text-slate-400 opacity-30"><div className="w-2 h-2 border border-slate-400 rotate-45" /></div>
  </div>
);

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (showIntro) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // The line of sight is 250px from the top of the viewport
          if (rect.top <= 250 && rect.bottom > 250) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger once on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showIntro]);

  return (
    <AnimatePresence mode="wait">
      {showIntro ? (
        <IntroScreen key="intro" onComplete={() => setShowIntro(false)} />
      ) : (
        <motion.div
          key="main-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          id="portfolio-root"
          className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-900/20 selection:text-blue-950"
        >
          {/* Watercolor Cloud Background */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50">
            {/* Top Right Cloud */}
            <div 
              className="absolute top-[-10%] right-[-5%] w-[45vw] h-[45vw] bg-blue-300/30 blur-[100px] mix-blend-multiply" 
              style={{ animation: 'cloud-shift 20s ease-in-out infinite alternate' }} 
            />
            {/* Bottom Left Cloud */}
            <div 
              className="absolute bottom-[-10%] left-[-10%] w-[55vw] h-[55vw] bg-sky-200/40 blur-[120px] mix-blend-multiply" 
              style={{ animation: 'cloud-shift 25s ease-in-out infinite alternate-reverse' }} 
            />
            {/* Center Drifting Cloud */}
            <div 
              className="absolute top-[30%] left-[25%] w-[40vw] h-[40vw] bg-indigo-200/30 blur-[110px] mix-blend-multiply" 
              style={{ animation: 'cloud-shift 30s ease-in-out infinite alternate' }} 
            />
          </div>

          {/* Structured Single-Screen Sections */}
          <Header activeSection={activeSection} />

          <main id="portfolio-main-content" className="relative z-10 flex-grow">
            <ScrollDecorations />
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider />
            <Skills />
            <SectionDivider />
            <Portfolio />
            <SectionDivider />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
