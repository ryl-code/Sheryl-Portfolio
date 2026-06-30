import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ShieldCheck, Database, Layout, User, Award, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  
  // Close on Escape press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Render a specific security verification list based on the project type
  const getSecurityPostures = (id: string) => {
    switch (id) {
      case 'cryptowaf':
        return [
          { check: 'PHP String Sanitization', status: 'Pre-flight string filter escaping malicious payloads' },
          { check: 'Regex Threat Detection', status: 'Standard OWASP signature maps compiled as compiled regex' },
          { check: 'Session Defense', status: 'Secure session generation and anti-fixation checks' },
          { check: 'Middleware Pipeline Integration', status: 'Request routing intercepts incoming packets seamlessly' }
        ];
      case 'campus-sport-booking':
        return [
          { check: 'SQLite Concurrency Locking', status: 'Pessimistic session lock checks prevents overlapping transactions' },
          { check: 'Local Storage Encapsulation', status: 'Keeps student reservation states encapsulated on disk' },
          { check: 'Time-Target Verification', status: 'Bounds testing rejects overlapping start/end schedules' },
          { check: 'Material UI Touch Target Size', status: 'Touch elements designed for standard fingers (44px min)' }
        ];
      case 'lens-of-life':
        return [
          { check: 'Identity Protection Standard', status: 'Vetted student testimonials aligned with fair consent releases' },
          { check: 'Media Rights Verification', status: 'Documentary submissions cataloged with explicit permission' },
          { check: 'Sensitivity Moderation Layer', status: 'Positive-tone vetting protocol for student mental wellness stories' },
          { check: 'Content Distribution Safeguards', status: 'Zero persistent storage of unapproved photographic drafts' }
        ];
      case 'mapalus-peduli-kawanua':
        return [
          { check: 'Aid Ledger Validation', status: 'Every solidarity donation log double-checked for balance parity' },
          { check: 'Recipient Contact Privacy', status: 'Personal details and coordinates obscured on mutual aid boards' },
          { check: 'API Response Sanitization', status: 'Removes unused metadata markers from response structures' },
          { check: 'Community Action Vetting', status: 'Activity logs signed to confirm genuine volunteer support delivery' }
        ];
      default:
        return [
          { check: 'Code Quality Audits', status: 'Linter-validated code syntax and type-strict definitions verified' },
          { check: 'Responsive Layout Inspection', status: 'Checked elements across normal mobile and desktop screens' }
        ];
    }
  };

  const securityPostures = getSecurityPostures(project.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-40 flex items-center justify-center p-4 pt-24">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative bg-white/95 backdrop-blur-xl border border-white/80 rounded-2xl w-full max-w-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col max-h-[85vh] z-10"
        >
          {/* Header Graphic Cover */}
          <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200/60 relative flex items-center justify-between overflow-hidden">
            <div className="absolute inset-0 bg-blue-50/30 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />
            
            <div className="relative z-10">
              <span className="font-mono text-[10px] text-[#1E3A8A] font-bold tracking-widest uppercase bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full">
                {project.category}
              </span>
              <h3 id="modal-project-title" className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 mt-3 tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              id="modal-close-btn"
              onClick={onClose}
              className="relative z-10 p-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-sm"
              aria-label="Close modal dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal scrollable body content */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 scrollable-feed">
            {/* Conditionally render content based on category */}
            {project.category === 'Achievement' ? (
              <div className="space-y-6 pb-2">
                {/* Team Name */}
                {project.teamName && (
                  <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-blue-50/50 border border-blue-100/50 text-xs shadow-sm">
                    <User className="w-4 h-4 text-blue-600" />
                    <span className="text-slate-500">Team name: <span className="text-[#1E3A8A] font-semibold">{project.teamName}</span></span>
                  </div>
                )}
                
                {/* Overview */}
                <div className="space-y-3 pb-4 border-b border-slate-200/60">
                  <h4 className="font-sans font-extrabold text-[15px] text-[#1E3A8A] tracking-wider uppercase">Overview</h4>
                  <p className="text-slate-600 text-[13px] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Key Contributions & Methodology */}
                <div className="space-y-4 pb-4 border-b border-slate-200/60">
                  <h4 className="font-sans font-extrabold text-[15px] text-[#1E3A8A] tracking-wider uppercase flex items-center gap-2">
                    <Layout className="w-5 h-5 text-blue-600" />
                    <span>Key Contributions & Methodology</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Utilized */}
                {project.technologies.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-sans font-extrabold text-[15px] text-[#1E3A8A] tracking-wider uppercase">Tools Utilized</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-[12px] font-sans px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Split description columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pb-5 border-b border-slate-200/60">
                  <div className={project.category === 'Campus Social' ? "md:col-span-12 space-y-4" : "md:col-span-8 space-y-4"}>
                    <h4 className="font-sans font-extrabold text-[15px] text-[#1E3A8A] tracking-wider uppercase">Project Overview</h4>
                    <p className="text-slate-600 text-[13px] leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.role && (
                      <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-blue-50/50 border border-blue-100/50 text-xs shadow-sm">
                        <User className="w-4 h-4 text-blue-600" />
                        <span className="text-slate-500">Role: <span className="text-[#1E3A8A] font-semibold">{project.role}</span></span>
                      </div>
                    )}
                  </div>

                  {/* Specifications block */}
                  {project.category !== 'Campus Social' && (
                    <div className="md:col-span-4 bg-white border border-slate-200/60 p-4 rounded-xl shadow-sm">
                      <span className="block font-sans font-extrabold text-[13px] text-[#1E3A8A] uppercase tracking-wider mb-2">Tech Stack</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-[11px] font-sans px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-slate-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Outcome Prominently Displayed */}
                {project.impact && (
                  <div className="pb-5 border-b border-slate-200/60">
                    <div className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/60 rounded-xl p-5 shadow-sm">
                      <h4 className="font-sans font-extrabold text-[15px] text-[#1E3A8A] tracking-wider uppercase mb-2 flex items-center gap-2">
                        <Award className="w-5 h-5 text-blue-600" />
                        Project Outcome
                      </h4>
                      <p className="text-slate-700 text-[13.5px] leading-relaxed font-medium">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                )}

                {/* Core Features list */}
                <div className="space-y-4 pb-2">
                  <h4 className="font-sans font-extrabold text-[15px] text-[#1E3A8A] tracking-wider uppercase flex items-center gap-2">
                    <Layout className="w-5 h-5 text-blue-600" />
                    <span>Features and Core Workflows</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-[13px] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}



          </div>

          {/* Modal Footer actions */}
          <div className="bg-slate-50/80 border-t border-slate-200/60 px-5 sm:px-6 py-4 flex flex-col sm:flex-row gap-4 items-center justify-end">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.category === 'IT Development' && (
                <a
                  id="modal-request-source"
                  href={project.githubUrl || "https://github.com/ryl-code"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4.5 py-2.5 rounded-xl bg-[#24292e] hover:bg-[#1b1f23] text-white font-semibold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                </a>
              )}
              {project.category === 'Achievement' && (
                <a
                  id="modal-write-up"
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4.5 py-2.5 rounded-xl bg-[#1E3A8A] hover:bg-blue-900 text-white font-semibold text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Write Up</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                id="modal-exit"
                onClick={onClose}
                className="w-full sm:w-auto px-4.5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 cursor-pointer text-center shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
