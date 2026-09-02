'use client';

import React from 'react';
import { patentsData } from '@/data/patents';
import { Scroll, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

export const Patents: React.FC = () => {
  return (
    <section className="py-16 border-b border-border/40" id="patents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono block mb-1">
            // INTELLECTUAL PROPERTY & PATENTS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            Granted United States Patents
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Patented distributed validation engines and cloud-native admission control systems assigned to Verizon Patent and Licensing Inc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patentsData.map((patent) => (
            <div
              key={patent.patentNumber}
              className="p-7 rounded-3xl neu-card border border-border/70 hover:border-brand-cyan/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    USPTO GRANTED
                  </span>
                  <span className="text-xs font-mono text-brand-cyan font-bold">
                    {patent.patentNumber}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-brand-cyan transition-colors">
                  {patent.title}
                </h3>

                <div className="text-xs font-mono text-muted-foreground">
                  Granted: {patent.grantDate} · {patent.assignee}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {patent.description}
                </p>
              </div>

              <div className="pt-5 border-t border-border/40 mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground/80">
                  Inventor: Venkata Guravareddy et al.
                </span>
                <a
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-secondary hover:bg-card border border-border text-xs font-semibold text-foreground transition-colors"
                >
                  <span>View Official Patent</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
