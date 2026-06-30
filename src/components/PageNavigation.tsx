import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PageNavigationProps {
  prevLabel?: string;
  prevPath?: string;
  nextLabel?: string;
  nextPath?: string;
  className?: string;
}

export default function PageNavigation({ prevLabel, prevPath, nextLabel, nextPath, className = "" }: PageNavigationProps) {
  const navigate = useNavigate();

  return (
    <div className={`flex justify-between items-center w-full relative z-20 ${className || 'mt-16 pt-8 border-t border-slate-200/60'}`}>
      <div>
        {prevPath && prevLabel && (
          <button
            onClick={() => navigate(prevPath)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 shadow-sm hover:shadow transition-all duration-200 group active:scale-[0.98]"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>{prevLabel}</span>
          </button>
        )}
      </div>
      <div>
        {nextPath && nextLabel && (
          <button
            onClick={() => navigate(nextPath)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-semibold text-sm shadow-md shadow-blue-900/20 transition-all duration-200 group active:scale-[0.98]"
          >
            <span>{nextLabel}</span>
            <ArrowRight className="w-4 h-4 text-blue-300 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>
    </div>
  );
}
