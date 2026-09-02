'use client';

import React from 'react';
import { metricsData } from '@/data/metrics';

export const Metrics: React.FC = () => {
  return (
    <section className="py-10 bg-card/30 border-b border-border/40" aria-label="Scale and Impact Metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {metricsData.map((metric, idx) => (
            <div key={idx} className="flex flex-col space-y-1">
              <div className="flex items-baseline gap-1">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
                  {metric.value}
                </span>
                {metric.suffix && (
                  <span className="font-heading font-bold text-xs text-brand-cyan uppercase">
                    {metric.suffix}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-xs text-foreground/90 uppercase tracking-wider font-mono">
                {metric.label}
              </h3>
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
