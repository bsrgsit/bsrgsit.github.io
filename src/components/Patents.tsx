'use client';

import React from 'react';
import { patentsData } from '@/data/patents';
import { Scroll, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

export const Patents: React.FC = () => {
  return (
    <section className="py-16 bg-card/10 border-y border-border/30" id="patents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
            Intellectual Property
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
            Granted United States Patents.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Patented distributed validation engines and cloud-native admission control systems assigned to Verizon Patent and Licensing Inc.
          </p>
        </div>

        {/* Patents List */}
        <div className="space-y-6">
          {patentsData.map((patent) => (
            <div
              key={patent.patentNumber}
              className="p-6 sm:p-8 rounded-2xl neu-card flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-1 shadow-inner">
                  <Scroll className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-heading font-bold text-lg sm:text-xl text-foreground group-hover:text-brand-cyan transition-colors">
                      {patent.title}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-brand-cyan font-semibold">
                    <span>{patent.patentNumber}</span>
                    <span>•</span>
                    <span>Granted: {patent.grantDate}</span>
                    <span>•</span>
                    <span className="text-muted-foreground font-sans">{patent.assignee}</span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed max-w-4xl pt-1">
                    {patent.description}
                  </p>
                </div>
              </div>

              <div className="shrink-0 pt-2 md:pt-0">
                <a
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-card border border-border hover:border-brand-cyan/60 text-xs font-bold text-foreground transition-all hover:-translate-y-0.5 shadow-sm"
                >
                  <span>View Official Patent</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
