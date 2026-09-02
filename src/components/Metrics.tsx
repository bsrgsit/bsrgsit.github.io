'use client';

import React from 'react';
import { metricsData } from '@/data/metrics';

export const Metrics: React.FC = () => {
  return (
    <section className="py-10 bg-card/20 border-b border-border/40" aria-label="Scale and Impact Metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {metricsData.map((metric, idx) => (
            <div
              key={idx}
              className={`p-4 sm:p-5 rounded-2xl neu-card flex flex-col justify-between group ${
                metric.highlight ? 'border-brand-cyan/40 shadow-[0_0_15px_rgba(56,189,248,0.1)]' : ''
              }`}
            >
              <div>
                <div className="flex items-baseline gap-1.5 mb-1.5">
                  <span className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight group-hover:text-brand-cyan transition-colors">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="font-heading font-bold text-xs text-brand-cyan">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-xs text-foreground/90 uppercase tracking-wider font-mono mb-1">
                  {metric.label}
                </h3>
              </div>
              <p className="text-[11px] text-muted-foreground leading-snug">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
