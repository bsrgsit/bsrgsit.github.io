'use client';

import React from 'react';
import { timelineData } from '@/data/timeline';
import { Layers, CheckCircle2, Award, Building, MapPin } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section className="py-20 bg-card/10 border-t border-border/30" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
            Career Progression
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
            14 Years of Infrastructure Evolution.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Progression mapped directly across the infrastructure stack layers (Layer 01 through Layer 05)—from fundamental distributed computing to enterprise GPU supercomputers.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-12 max-w-4xl">
          {timelineData.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border-4 border-brand-cyan shadow-[0_0_10px_#38bdf8] group-hover:scale-125 transition-transform" />

              {/* Layer Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold uppercase mb-3">
                <Layers className="w-3.5 h-3.5" />
                {item.layerBadge}
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-7 rounded-2xl neu-card space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/40 pb-3">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mt-0.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                    <span>{item.period}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {item.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-2 pt-2">
                  {item.keyAchievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
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
