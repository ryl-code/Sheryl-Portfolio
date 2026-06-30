import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

// Replaced CloudBackground with modern geometric glow effects inline.

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3" />

          {/* Desktop Cloud Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.href}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative group min-w-[95px] h-11 flex items-center justify-center transition-all duration-200"
                >
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 scale-95 ${isActive ? 'bg-blue-100/60 shadow-[0_2px_10px_rgba(30,58,138,0.08)] ring-1 ring-blue-200/50' : 'opacity-0 group-hover:opacity-100 group-hover:bg-slate-100/80 group-hover:scale-100'}`} />
                  <span className={`relative z-10 font-sans text-sm font-bold tracking-wider transition-colors duration-200 mt-0.5 ${
                    isActive ? 'text-[#1E3A8A]' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {item.label}
                  </span>
                </a>
              );
            })}
            
            {/* Clean Tech CTA Button */}
            <a
              id="contact-cta-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative group ml-4 px-6 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="absolute inset-0 z-0 bg-slate-900 rounded-lg shadow-sm group-hover:bg-blue-700 transition-colors duration-300">
                <div className="absolute inset-px rounded-lg bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </div>
              
              <span className="relative z-10 font-sans font-semibold text-xs tracking-widest uppercase text-white">
                Download CV
              </span>
            </a>
          </nav>

          {/* Mobile Menu Toggler */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-900 focus:outline-none transition-colors duration-250 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Cloud Navigation Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-dropdown-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-50/95 backdrop-blur-md border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col items-center">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    id={`mobile-nav-link-${item.label.toLowerCase()}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative group min-w-[120px] h-11 flex items-center justify-center transition-all duration-200"
                  >
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 scale-95 ${isActive ? 'bg-blue-100/60 shadow-[0_2px_10px_rgba(30,58,138,0.08)] ring-1 ring-blue-200/50' : 'opacity-0 group-hover:opacity-100 group-hover:bg-slate-100 group-hover:scale-100'}`} />
                    <span className={`relative z-10 font-sans font-bold text-base tracking-wider transition-colors duration-200 mt-0.5 ${
                      isActive ? 'text-[#1E3A8A]' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {item.label}
                    </span>
                  </a>
                );
              })}
              
              <div className="pt-2 w-full flex justify-center">
                <a
                  id="mobile-request-cv-btn"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="relative group min-w-[170px] h-[60px] flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-900 via-blue-800 to-[#1E3A8A] rounded-full shadow-[0_4px_16px_rgba(30,58,138,0.4)] group-hover:shadow-[0_8px_24px_rgba(30,58,138,0.6)] transition-all duration-300">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-px rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                  </div>
                  
                  <span className="relative z-10 font-sans font-bold uppercase text-sm tracking-widest text-white mt-1">
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
