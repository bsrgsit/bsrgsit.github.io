'use client';

import React, { useState } from 'react';
import { timelineData, TimelineItem } from '@/data/timeline';
import { ChevronDown, ChevronUp, CheckCircle2, Building, MapPin, Layers } from 'lucide-react';

export const ExpandableExperience: React.FC = () => {
  // First item expanded by default (Verizon)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 border-b border-border/40" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono block mb-1">
            // CAREER PROGRESSION & INFRASTRUCTURE STACK
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            14 Years Across the Infrastructure Stack
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Evolution mapped from academic computer science foundations up to enterprise GPU supercomputing leadership.
          </p>
        </div>

        <div className="space-y-4">
          {timelineData.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-3xl neu-card transition-all duration-200 overflow-hidden border ${
                  isExpanded
                    ? 'border-brand-cyan/50 shadow-lg'
                    : 'border-border/70 hover:border-border hover:bg-card/70'
                }`}
              >
                {/* Header (Clickable) */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-heading font-bold text-lg sm:text-xl text-foreground">
                        {item.role}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-brand-cyan">
                        @ {item.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-muted-foreground">
                      <span className="px-2 py-0.5 rounded bg-brand-cyan/10 text-brand-cyan font-bold border border-brand-cyan/20">
                        {item.layerBadge}
                      </span>
                      <span>·</span>
                      <span>{item.period}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs font-mono font-semibold hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Expand Details'}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-brand-cyan" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/40 space-y-4 animate-in fade-in-50 duration-200 text-xs sm:text-sm">
                    <p className="text-muted-foreground leading-relaxed pt-2">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {item.keyAchievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-foreground/90 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
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
