'use client';

import React from 'react';
import { patentsData } from '@/data/patents';
import { Scroll, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';

export const Patents: React.FC = () => {
  return (
    <section className="py-16 border-b border-border/50" id="patents">
      <div className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-border/40">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Granted United States Patents
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Patented distributed validation engines and cloud-native admission control systems assigned to Verizon Patent and Licensing Inc.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patentsData.map((patent) => (
            <div
              key={patent.patentNumber}
              className="p-7 sm:p-8 rounded-3xl neu-card hover:border-brand-cyan/50 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    USPTO GRANTED
                  </span>
                  <span className="text-xs font-mono text-brand-cyan font-bold">
                    {patent.patentNumber}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-brand-cyan transition-colors leading-snug">
                  {patent.title}
                </h3>

                <div className="text-xs font-mono text-muted-foreground">
                  Granted: {patent.grantDate} · {patent.assignee}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                  {patent.description}
                </p>
              </div>

              <div className="pt-6 border-t border-border/40 mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground/80">
                  Inventor: Venkata Guravareddy et al.
                </span>
                <a
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary hover:bg-card border border-border text-xs font-semibold text-foreground transition-colors hover:border-brand-cyan/50 shadow-sm"
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
