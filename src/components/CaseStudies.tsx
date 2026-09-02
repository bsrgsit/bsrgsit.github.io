'use client';

import React, { useState } from 'react';
import { caseStudiesData, CaseStudy } from '@/data/case-studies';
import { ArrowUpRight, Cpu, Server, Activity, Radio, CheckCircle2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gpu' | 'k8s' | 'capacity' | 'telecom'>('all');

  const filteredStudies = caseStudiesData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const filterTabs = [
    { id: 'all', label: 'All Systems' },
    { id: 'gpu', label: 'GPU & Inference' },
    { id: 'k8s', label: 'Kubernetes Fleets' },
    { id: 'capacity', label: 'Capacity & SRE' },
    { id: 'telecom', label: 'Telecom & Edge' },
  ];

  return (
    <section className="py-20 border-b border-border/40" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2 font-mono">
              // PRODUCTION SYSTEMS & IMPACT
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
              Featured Case Studies & Architectures.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Selected production platforms demonstrating measured throughput gains, multi-million dollar cost avoidance, and carrier-grade availability.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-card border border-border shrink-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-brand-cyan text-slate-950 shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="p-7 rounded-3xl neu-card flex flex-col justify-between group border border-border/70 hover:border-brand-cyan/50 transition-all"
            >
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-secondary text-foreground/80 font-mono">
                    {study.categoryBadge}
                  </span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                    {study.impactBadge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-foreground mb-1 group-hover:text-brand-cyan transition-colors">
                  {study.title}
                </h3>

                <p className="text-xs font-semibold text-brand-cyan mb-4">
                  {study.subtitle}
                </p>

                {/* Problem */}
                <div className="mb-3.5 text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground/90 font-semibold block mb-1">Challenge:</strong>
                  {study.problem}
                </div>

                {/* Architecture */}
                <div className="mb-4 text-xs text-muted-foreground leading-relaxed">
                  <strong className="text-foreground/90 font-semibold block mb-1">Architecture:</strong>
                  {study.architecture}
                </div>

                {/* Impact */}
                <div className="p-3.5 rounded-2xl bg-card/80 border border-border/50 text-xs text-foreground/90 leading-relaxed mb-6">
                  <strong className="text-emerald-400 font-semibold block mb-1">Measured Impact:</strong>
                  {study.impact}
                </div>
              </div>

              {/* Tech Stack Tags */}
              <div className="pt-4 border-t border-border/40 flex flex-wrap gap-1.5">
                {study.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/80 text-muted-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
