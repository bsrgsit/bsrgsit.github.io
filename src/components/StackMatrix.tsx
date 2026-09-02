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
    <section className="py-20" id="stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
            Technical Competencies
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
            Architectural Stack & Tooling.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Enterprise hardware platforms, inference runtimes, container orchestrators, and SRE tooling operated in production.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackData.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl neu-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/40">
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
                      className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-card/90 text-foreground/80 border border-border/60 hover:border-brand-cyan/50 hover:text-brand-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
