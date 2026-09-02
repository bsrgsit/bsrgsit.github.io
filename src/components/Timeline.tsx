'use client';

import React, { useState } from 'react';
import { timelineData } from '@/data/timeline';
import { Plus, Minus, MapPin, CheckCircle2 } from 'lucide-react';
import { VerizonLogo, EricssonLogo, HPELogo, HCLLogo, AndhraLogo } from '@/components/CompanyLogos';

export const Timeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const getCompanyLogo = (company: string) => {
    if (company.includes('Verizon')) return <VerizonLogo className="h-7 w-auto" />;
    if (company.includes('Ericsson')) return <EricssonLogo className="h-7 w-auto" />;
    if (company.includes('Hewlett Packard')) return <HPELogo className="h-7 w-auto" />;
    if (company.includes('HCL')) return <HCLLogo className="h-7 w-auto" />;
    return <AndhraLogo className="h-7 w-auto" />;
  };

  return (
    <section className="py-12 border-b border-border/50" id="experience">
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-border/40">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
            <h2 className="font-heading font-extrabold text-lg text-foreground tracking-tight">
              14 Years Across the Infrastructure Stack
            </h2>
          </div>
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-semibold">
            Stack Layers 01 — 05
          </span>
        </div>

        <div className="space-y-3">
          {timelineData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-card/90 border-brand-cyan/50 shadow-md'
                    : 'bg-card/40 border-border/70 hover:border-brand-cyan/30 hover:bg-card/70'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className="w-28 sm:w-32 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 p-2 shadow-sm">
                      {getCompanyLogo(item.company)}
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-base sm:text-lg text-foreground">
                        {item.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted-foreground">
                        <span className="text-emerald-400 font-semibold">{item.layerBadge}</span>
                        <span>·</span>
                        <span>{item.period}</span>
                        <span>·</span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:border-brand-cyan/50 transition-colors">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-brand-cyan" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 border-t border-border/40 space-y-3 animate-in fade-in-50 duration-200 text-xs leading-relaxed">
                    <p className="text-muted-foreground pt-2">
                      {item.description}
                    </p>
                    <div className="space-y-1.5 pt-1">
                      {item.keyAchievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2 text-foreground/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
