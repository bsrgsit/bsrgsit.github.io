'use client';

import React from 'react';
import { pillarsData } from '@/data/pillars';
import { Cpu, Zap, Boxes, Activity, CheckCircle2 } from 'lucide-react';

export const Pillars: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-brand-cyan" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6 text-indigo-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      default:
        return <Cpu className="w-6 h-6 text-brand-cyan" />;
    }
  };

  return (
    <section className="py-20 border-b border-border/40" id="specializations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2 font-mono">
            // CORE ARCHITECTURAL DISCIPLINES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
            Four Pillars of Mission-Critical Platforms.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            End-to-end platform systems engineered across hardware bring-up, lossless interconnects, high-throughput model serving runtimes, and planet-scale cloud control planes.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillarsData.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl neu-card flex flex-col justify-between group border border-border/70 hover:border-brand-cyan/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-background/80 border border-border flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary text-foreground/80 font-mono border border-border/50">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-2xl text-foreground group-hover:text-brand-cyan transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-border/40 space-y-2.5">
                {pillar.keyHighlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
