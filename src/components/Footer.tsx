'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/40 bg-card/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-cyan to-blue-600 flex items-center justify-center font-heading font-extrabold text-slate-950 text-xs shadow-sm">
              VG
            </div>
            <div>
              <strong className="text-foreground font-semibold">Venkata Guravareddy</strong> · Principal Platform & AI Infrastructure Architect
            </div>
          </div>

          <div className="flex items-center gap-6">
            <span>© 2026 Venkata Guravareddy. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-card hover:bg-secondary border border-border text-foreground transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
