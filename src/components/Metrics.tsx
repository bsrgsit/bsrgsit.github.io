'use client';

import React from 'react';
import { metricsData } from '@/data/metrics';
import { ShieldCheck, Award, TrendingUp, DollarSign, Server, Globe } from 'lucide-react';

export const Metrics: React.FC = () => {
  return (
    <section className="py-8 border-y border-border/40 bg-card/20" aria-label="Verified Impact Metrics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {metricsData.map((metric, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl neu-card flex flex-col justify-between transition-all duration-200 group ${
                metric.highlight ? 'border-brand-cyan/30 shadow-[0_0_15px_rgba(56,189,248,0.08)]' : ''
              }`}
            >
              <div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight group-hover:text-brand-cyan transition-colors">
                    {metric.value}
                  </span>
                  {metric.suffix && (
                    <span className="font-heading font-bold text-xs sm:text-sm text-brand-cyan">
                      {metric.suffix}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-1 leading-snug">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
