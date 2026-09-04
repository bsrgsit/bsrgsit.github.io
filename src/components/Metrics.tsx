'use client';

import React from 'react';
import { metricsData } from '@/data/metrics';

export const Metrics: React.FC = () => {
  return (
    <section className="py-14 border-b border-border/50" aria-label="Scale and Impact Metrics">
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <h2 className="font-heading font-extrabold text-lg text-foreground tracking-tight">
            Verified Scale & Production Impact
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {metricsData.map((metric, idx) => (
            <div
              key={idx}
              className={`p-5 sm:p-6 rounded-3xl neu-card flex flex-col justify-between group transition-all ${
                metric.highlight ? 'border-brand-cyan/50 shadow-[0_0_20px_rgba(56,189,248,0.15)]' : ''
              }`}
            >
              <div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight group-hover:text-brand-cyan transition-colors">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="font-heading font-bold text-xs text-brand-cyan">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-xs text-foreground/90 uppercase tracking-wider font-mono mb-1.5">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
