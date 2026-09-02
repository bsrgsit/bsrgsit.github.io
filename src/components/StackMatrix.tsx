'use client';

import React from 'react';
import { stackData } from '@/data/stack';
import { Cpu, Zap, Boxes, Database } from 'lucide-react';

export const StackMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section className="py-16 border-b border-border/40" id="stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono block mb-1">
            // TECHNICAL TOOLKIT & MATRIX
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            Production Hardware Silicon & Cloud Stack
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Enterprise hardware platforms, inference runtimes, container orchestrators, and SRE tooling operated in production.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackData.map((group, idx) => (
            <div key={idx} className="p-6 rounded-3xl neu-card border border-border/70 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-border/40">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0 shadow-inner">
                  {getIcon(group.iconName)}
                </div>
                <h3 className="font-heading font-bold text-sm text-foreground leading-tight">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-background text-foreground/90 border border-border/60 hover:border-brand-cyan/40 hover:text-brand-cyan transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
