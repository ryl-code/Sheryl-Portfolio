import React from 'react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50/60 backdrop-blur-md border-t border-slate-200/60 py-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <p className="text-slate-500 text-xs text-center font-sans">
          &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
