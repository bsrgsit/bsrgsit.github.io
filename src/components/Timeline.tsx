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
    <section className="py-16 border-b border-border/50" id="experience">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-border/40">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                14 Years Across the Infrastructure Stack
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Career progression mapped across foundational hardware silicon up to enterprise GPU supercomputing fleets.
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground font-semibold shrink-0">
            Stack Layers 01 — 05
          </span>
        </div>

        <div className="space-y-4">
          {timelineData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-3xl neu-card transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'border-brand-cyan/50 shadow-[0_6px_25px_rgba(56,189,248,0.12)]'
                    : 'hover:border-brand-cyan/30'
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-6 text-left transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-24 sm:w-28 h-12 flex items-center justify-start shrink-0">
                      {getCompanyLogo(item.company)}
                    </div>

                    <div className="space-y-1.5">
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

                  <div className="shrink-0 w-9 h-9 rounded-xl bg-background neu-button flex items-center justify-center text-foreground hover:border-brand-cyan/50 transition-colors">
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-brand-cyan" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-7 pt-1 border-t border-border/40 space-y-4 animate-in fade-in-50 duration-200 text-xs sm:text-sm leading-relaxed">
                    <p className="text-muted-foreground pt-2">
                      {item.description}
                    </p>
                    {item.projects && item.projects.length > 0 ? (
                      <div className="space-y-4 pt-2">
                        {item.projects.map((proj, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-4 sm:p-5 rounded-2xl bg-secondary/50 border border-border/70 space-y-2.5"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-border/50 pb-2">
                              <div>
                                <h4 className="font-heading font-bold text-sm sm:text-base text-foreground">
                                  {proj.title}
                                </h4>
                                <p className="text-xs text-brand-cyan font-semibold mt-0.5">
                                  {proj.roleTitle}
                                </p>
                              </div>
                              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-background border border-border text-muted-foreground self-start sm:self-auto">
                                {proj.period}
                              </span>
                            </div>
                            <p className="text-xs font-mono text-muted-foreground">
                              {proj.tagline}
                            </p>
                            <ul className="space-y-2 pt-1">
                              {proj.achievements.map((ach, aIdx) => (
                                <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                                  <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {proj.skills.map((skill, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[11px] font-mono px-2 py-0.5 rounded bg-background text-foreground/80 border border-border"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-2 pt-1">
                        {item.keyAchievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}
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
