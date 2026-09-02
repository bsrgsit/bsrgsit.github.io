'use client';

import React, { useState } from 'react';
import { caseStudiesData, CaseStudy } from '@/data/case-studies';
import { ChevronDown, ChevronUp, Cpu, Server, Activity, Radio, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ExpandableProjects: React.FC = () => {
  // First project expanded by default
  const [expandedId, setExpandedId] = useState<string | null>('gpu-inference-platform');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredProjects = caseStudiesData.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'gpu', label: 'GPU & LLM Serving' },
    { id: 'k8s', label: 'Kubernetes Fleets' },
    { id: 'capacity', label: 'Capacity & SRE' },
    { id: 'telecom', label: 'Edge & Carrier' },
  ];

  return (
    <section className="py-16 border-b border-border/40" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider font-mono block mb-1">
              // PRODUCTION SYSTEMS & ARCHITECTURES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Featured Systems & Case Studies
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Click any architecture to expand full technical design, problem context, and measured production results.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-card border border-border shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-cyan text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.35)]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Expandable Project List */}
        <div className="space-y-4">
          {filteredProjects.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <div
                key={project.id}
                className={`rounded-3xl neu-card transition-all duration-200 overflow-hidden border ${
                  isExpanded
                    ? 'border-brand-cyan/50 shadow-lg'
                    : 'border-border/70 hover:border-border hover:bg-card/70'
                }`}
              >
                {/* Header Row (Clickable) */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className="w-full p-6 sm:p-7 flex items-center justify-between gap-4 text-left transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-heading font-bold text-lg sm:text-xl text-foreground">
                        {project.title}
                      </span>
                      <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.impactBadge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-brand-cyan font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 text-muted-foreground">
                    <span className="text-xs font-mono font-semibold hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Expand Deep-Dive'}
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

                {/* Expanded Technical Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-border/40 space-y-5 animate-in fade-in-50 duration-200 text-xs sm:text-sm">
                    {/* Problem & Architecture Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground leading-relaxed pt-2">
                      <div className="p-4 rounded-2xl bg-background/60 border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold block text-sm">
                          The Challenge & Context:
                        </strong>
                        <p>{project.problem}</p>
                      </div>

                      <div className="p-4 rounded-2xl bg-background/60 border border-border/50 space-y-1.5">
                        <strong className="text-foreground font-semibold block text-sm">
                          Architectural Design & Decisions:
                        </strong>
                        <p>{project.architecture}</p>
                      </div>
                    </div>

                    {/* Measured Result Highlight Box */}
                    <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-foreground/90 leading-relaxed">
                      <strong className="text-emerald-400 font-bold block text-sm mb-1">
                        Key Measured Production Result:
                      </strong>
                      <p>{project.impact}</p>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/30">
                      <span className="text-xs font-mono text-muted-foreground uppercase font-semibold mr-1">
                        Hardware & Software Stack:
                      </span>
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono px-2.5 py-1 rounded-lg bg-secondary text-foreground/90 border border-border/60"
                        >
                          {tech}
                        </span>
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
