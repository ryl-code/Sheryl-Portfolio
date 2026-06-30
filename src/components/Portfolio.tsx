import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Database, 
  ExternalLink, 
  Github, 
  Eye, 
  Lock, 
  FileText, 
  UserCheck, 
  CheckCircle2, 
  Grid, 
  Smartphone,
  Sparkles,
  Camera,
  Heart,
  Activity,
  AlertTriangle,
  Award,
  Layers,
  Code,
  Users,
  Globe,
  Server
} from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data';
import { Project } from '../types';
import ProjectDetailModal from './ProjectDetailModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'IT Development' | 'Achievement' | 'Campus Social'>('all');

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col justify-start pt-32 pb-24 relative overflow-hidden bg-transparent"
    >
      {/* Decorative Section Divider */}
      <div className="absolute top-0 inset-x-0 flex justify-center items-start">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute top-0 w-2/3 max-w-md h-[1.5px] bg-gradient-to-r from-transparent via-blue-700/40 to-transparent blur-[1px]" />
        
        {/* Center glowing element */}
        <div className="absolute top-[-3px] w-12 h-1.5 bg-blue-500 rounded-full blur-[3px] opacity-60" />
        <div className="absolute top-[-1px] w-4 h-0.5 bg-blue-300 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching specification */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="font-mono text-xs sm:text-sm text-[#1E3A8A] tracking-[0.25em] uppercase mb-4 font-semibold opacity-80">
            Showcase
          </span>
          <div className="relative inline-block">
            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-12 sm:-left-16 text-blue-400/50"
            >
              <Grid className="w-8 h-8 sm:w-10 sm:h-10" />
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5], rotate: [0, -15, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-2 -right-12 sm:-right-16 text-sky-500/30"
            >
              <Layers className="w-10 h-10 sm:w-12 sm:h-12" />
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-2 -right-6 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-400/50 blur-[2px]"
            />

            <h2 id="portfolio-heading" className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E3A8A] tracking-tighter drop-shadow-sm relative z-10">
              Portfolio
            </h2>
          </div>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#1E3A8A] to-blue-700 rounded-full mt-7 shadow-sm" />
          <p className="text-slate-500 text-sm sm:text-base font-medium max-w-xl mt-6 font-sans leading-relaxed tracking-wide">
            Academic Works & Social Projects
          </p>
        </motion.div>

        {/* Premium Filter Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center items-center gap-2 mb-16 p-1.5 bg-white/60 backdrop-blur-md border border-slate-200/60 rounded-2xl w-fit mx-auto shadow-sm"
        >
          {(['all', 'IT Development', 'Achievement', 'Campus Social'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50/80'
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="activeFilterBg"
                  className="absolute inset-0 bg-slate-900 rounded-xl shadow-sm"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {filter === 'all' && <Grid className="w-4 h-4" />}
                {filter === 'IT Development' && <Code className="w-4 h-4" />}
                {filter === 'Achievement' && <Award className="w-4 h-4" />}
                {filter === 'Campus Social' && <Users className="w-4 h-4" />}
                {filter === 'all' ? 'All Works' : filter}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Inject Certification for Achievement or All filter */}
        <AnimatePresence>
          {(activeFilter === 'all' || activeFilter === 'Achievement') && PERSONAL_INFO.certifications && PERSONAL_INFO.certifications.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="max-w-5xl mx-auto mb-12 bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-xl border border-slate-200/60 hover:border-blue-300/50 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-[0_8px_32px_rgba(30,58,138,0.08)] w-full hover:shadow-[0_20px_50px_-20px_rgba(30,58,138,0.25)] hover:-translate-y-1 transition-all duration-300 group/cert"
            >
              {/* Cyber Theme Network / Grid Accent */}
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <svg width="100" height="100" className="text-blue-900" fill="currentColor" viewBox="0 0 100 100">
                  <rect x="10" y="10" width="4" height="4" />
                  <rect x="30" y="10" width="4" height="4" />
                  <rect x="10" y="30" width="4" height="4" />
                  <rect x="30" y="30" width="4" height="4" />
                  <rect x="50" y="10" width="4" height="4" />
                  <rect x="10" y="50" width="4" height="4" />
                  <rect x="50" y="30" width="4" height="4" />
                  <rect x="30" y="50" width="4" height="4" />
                  <rect x="50" y="50" width="4" height="4" />
                </svg>
              </div>
              <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover/cert:opacity-100 transition-opacity duration-700 pointer-events-none bg-blue-500/10" />
              
              {/* Modern Left-Aligned Header */}
              <div className="flex flex-col items-start mb-10 relative z-10 w-full">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50/80 border border-blue-100/50 flex items-center justify-center shadow-sm">
                     <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-sans font-black text-3xl sm:text-4xl text-[#2D3748] tracking-tight">
                    Certification
                  </h3>
                </div>
                <div className="h-[2px] w-full bg-gradient-to-r from-amber-100 via-slate-100 to-transparent mt-4" />
              </div>

              <div className="flex flex-col gap-6 items-start w-full">
                {PERSONAL_INFO.certifications.map((cert: any, index: number) => (
                  <div
                    key={index}
                    className="group relative w-full flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center bg-white/40 hover:bg-white/80 border border-slate-200/50 hover:border-blue-200/70 rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgba(30,58,138,0.06)]"
                  >
                    {/* Decorative side accent on hover */}
                    <div className="absolute left-0 top-8 bottom-8 w-[3px] bg-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Organizer Logo */}
                    {cert.logo && (
                      <div className="w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 rounded-2xl border border-slate-200/80 bg-white shadow-sm flex items-center justify-center p-3 sm:p-4 group-hover:shadow-[0_8px_20px_rgba(30,58,138,0.1)] transition-all duration-500 z-10 relative">
                        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none rounded-2xl" />
                        <img 
                          src={cert.logo} 
                          alt={cert.title} 
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}

                    {/* Minimal & Interactive Text Layout */}
                    <div className="flex-1 flex flex-col h-full py-1">
                      <h4 className="font-sans font-bold text-lg sm:text-xl text-slate-900 leading-snug mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="flex items-center gap-1.5 text-slate-600 font-medium text-sm mb-4">
                        <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        {cert.issuer}
                      </p>
                      
                      {cert.description && (
                        <p className="text-slate-500 text-[13px] leading-relaxed mb-5 sm:mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          {cert.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2.5 mt-auto">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100/50 text-[11px] font-bold tracking-wide uppercase">
                          {cert.field}
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 text-[11px] font-bold tracking-wide uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-blue-600" />
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Portfolio Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto pb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className="group bg-white/60 backdrop-blur-xl border border-white/80 hover:border-blue-200 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(30,58,138,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                {/* PROJECT PHOTO PLACEHOLDER */}
                <div className="relative h-56 bg-slate-100 flex items-center justify-center overflow-hidden border-b border-slate-200">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        project.id === 'ctf-1st-place-2024' ? 'object-bottom' : project.id === 'ctf-top-8-2026' ? 'object-top' : ''
                      }`}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-400 gap-2">
                      <Camera className="w-8 h-8 opacity-50" />
                      <span className="text-[11px] font-mono tracking-widest font-semibold uppercase opacity-70">
                        Photo Placeholder
                      </span>
                    </div>
                  )}
                </div>

                {/* CARD DETAILS LAYOUT - MATCHING HIGH PRESTIGE SPECIFICATION */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="flex items-center gap-1.5 font-sans text-[10px] font-bold text-slate-700 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Clean, dominant heading based on mock blueprint */}
                    <h3 className="font-sans font-black text-2xl text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    
                    {/* Muted description */}
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-sans">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-5 pt-4 border-t border-slate-100">
                    {/* Technology pill layout */}
                    {project.category !== 'Campus Social' && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-sans font-medium px-3 py-1 bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 rounded-full transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Highly interactive action button to view details & specifications */}
                    <div className="w-full">
                      <button
                        id={`view-details-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 sm:py-3 rounded-xl bg-blue-900 hover:bg-blue-950 active:scale-[0.98] text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:shadow-[0_4px_12px_rgba(30,58,138,0.2)] transition-all cursor-pointer font-sans"
                        title="Detail"
                        aria-label="View Project Specifications"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Detail</span>
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Detail specification modal portal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
