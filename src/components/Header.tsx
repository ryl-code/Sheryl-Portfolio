import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Replaced CloudBackground with modern geometric glow effects inline.

export default function Header() {
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
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Contact', path: '/contact' }
  ];

  const location = useLocation();

  const handleMobileLinkClick = () => {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-center h-20">

          {/* Desktop Cloud Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  id={`nav-link-${item.label.toLowerCase()}`}
                  to={item.path}
                  className="relative group min-w-[95px] h-11 flex items-center justify-center transition-all duration-200"
                >
                  <div className={`absolute inset-0 rounded-lg transition-all duration-300 scale-95 ${isActive ? 'bg-blue-100/60 shadow-[0_2px_10px_rgba(30,58,138,0.08)] ring-1 ring-blue-200/50' : 'opacity-0 group-hover:opacity-100 group-hover:bg-slate-100/80 group-hover:scale-100'}`} />
                  <span className={`relative z-10 font-sans text-sm font-bold tracking-wider transition-colors duration-200 mt-0.5 ${
                    isActive ? 'text-[#1E3A8A]' : 'text-slate-600 group-hover:text-slate-900'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
            

          </nav>

          {/* Mobile Menu Toggler */}
          <div className="md:hidden absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2">
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
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    id={`mobile-nav-link-${item.label.toLowerCase()}`}
                    to={item.path}
                    onClick={handleMobileLinkClick}
                    className="relative group min-w-[120px] h-11 flex items-center justify-center transition-all duration-200"
                  >
                    <div className={`absolute inset-0 rounded-lg transition-all duration-300 scale-95 ${isActive ? 'bg-blue-100/60 shadow-[0_2px_10px_rgba(30,58,138,0.08)] ring-1 ring-blue-200/50' : 'opacity-0 group-hover:opacity-100 group-hover:bg-slate-100 group-hover:scale-100'}`} />
                    <span className={`relative z-10 font-sans font-bold text-base tracking-wider transition-colors duration-200 mt-0.5 ${
                      isActive ? 'text-[#1E3A8A]' : 'text-slate-600 group-hover:text-slate-900'
                    }`}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
