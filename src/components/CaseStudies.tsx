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
    { id: 'all', label: 'All Projects' },
    { id: 'gpu', label: 'GPU & LLM Serving' },
    { id: 'k8s', label: 'Kubernetes Fleets' },
    { id: 'capacity', label: 'Capacity & SRE' },
    { id: 'telecom', label: 'Edge & Carrier' },
  ];

  return (
    <section className="py-16 border-b border-border/40" id="projects">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono block mb-1">
              // FEATURED ARCHITECTURES & SYSTEMS
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Landmark Systems & Platforms
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-card border border-border">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-brand-cyan text-slate-950 font-bold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="p-6 sm:p-7 rounded-2xl bg-card/80 border border-border hover:border-brand-cyan/40 transition-all space-y-4 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-foreground group-hover:text-brand-cyan transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-brand-cyan font-medium">
                    {study.subtitle}
                  </p>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {study.impactBadge}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground pt-1">
                <div>
                  <strong className="text-foreground font-semibold block mb-0.5">Problem Context:</strong>
                  {study.problem}
                </div>
                <div>
                  <strong className="text-foreground font-semibold block mb-0.5">Architecture & Design:</strong>
                  {study.architecture}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-background/60 border border-border/50 text-xs text-foreground/90">
                <strong className="text-emerald-400 font-semibold block mb-0.5">Key Technical Result:</strong>
                {study.impact}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/30">
                {study.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border/40"
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
