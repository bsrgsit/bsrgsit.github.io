'use client';

import React, { useState } from 'react';
import { caseStudiesData, CaseStudy } from '@/data/case-studies';
import { patentsData } from '@/data/patents';
import { Plus, Minus, ArrowUpRight, Scroll, Cpu, ShieldCheck, Sparkles, Layers, Activity, Zap } from 'lucide-react';
import { NVIDIALogo, KubernetesLogo } from '@/components/CompanyLogos';

export const MainDossierConceptB: React.FC = () => {
  // First project expanded by default
  const [expandedId, setExpandedId] = useState<string | null>('gpu-inference-platform');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-12 border-b border-border/50" id="case-studies">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Expandable Engineering Case Studies (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border/40">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#38bdf8]" />
              <h2 className="font-heading font-extrabold text-lg text-foreground tracking-tight">
                Production Systems & Case Studies
              </h2>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-secondary text-muted-foreground font-semibold">
              Interactive Deep-Dives
            </span>
          </div>

          <div className="space-y-3.5">
            {caseStudiesData.map((study) => {
              const isExpanded = expandedId === study.id;

              return (
                <div
                  key={study.id}
                  className={`rounded-2xl neu-card transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'border-brand-cyan/60 shadow-[0_4px_20px_rgba(56,189,248,0.15)]'
                      : 'hover:border-brand-cyan/30'
                  }`}
                >
                  {/* Clickable Header */}
                  <button
                    onClick={() => toggleExpand(study.id)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-heading font-bold text-base text-foreground group-hover:text-brand-cyan transition-colors">
                          {study.title}
                        </span>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                          {study.impactBadge}
                        </span>
                      </div>
                      <p className="text-xs text-brand-cyan font-medium line-clamp-1">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 w-8 h-8 rounded-xl bg-background neu-button flex items-center justify-center text-foreground hover:border-brand-cyan/50 transition-colors">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-brand-cyan" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Deep Dive */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-border/40 space-y-4 animate-in fade-in-50 duration-200 text-xs leading-relaxed">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground pt-1">
                        <div className="p-3.5 rounded-xl neu-inset space-y-1">
                          <strong className="text-foreground font-semibold block text-xs">
                            The Challenge:
                          </strong>
                          <p>{study.problem}</p>
                        </div>
                        <div className="p-3.5 rounded-xl neu-inset space-y-1">
                          <strong className="text-foreground font-semibold block text-xs">
                            Architectural Solution:
                          </strong>
                          <p>{study.architecture}</p>
                        </div>
                      </div>

                      {/* Measured Result */}
                      <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-foreground">
                        <strong className="text-emerald-400 font-bold block text-xs mb-0.5">
                          Measured Production Impact:
                        </strong>
                        {study.impact}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/30">
                        {study.techStack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-secondary text-foreground/80 border border-border/50"
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

        {/* Right Column: Hardware Specification Matrix & Granted US Patents (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          {/* Hardware & Platform Specification Table */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-3 border-b border-border/40">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818cf8]" />
              <h2 className="font-heading font-extrabold text-lg text-foreground tracking-tight">
                Hardware Silicon & Stack Matrix
              </h2>
            </div>

            <div className="rounded-2xl neu-card overflow-hidden divide-y divide-border/60 text-xs font-mono">
              <div className="p-3 flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <NVIDIALogo className="w-4 h-4" /> GPU Silicon:
                </span>
                <span className="font-bold text-foreground">8x NVIDIA H100 SXM5 / L40S</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" /> Lossless Mesh:
                </span>
                <span className="font-bold text-foreground">400G InfiniBand · NVLink 900 GB/s</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Layers className="w-4 h-4 text-brand-cyan" /> Serving Runtimes:
                </span>
                <span className="font-bold text-emerald-400">vLLM & Triton (3.8x Speedup)</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <KubernetesLogo className="w-4 h-4" /> Fleet Orchestration:
                </span>
                <span className="font-bold text-foreground">600+ K8s Clusters / 52 DCs</span>
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" /> Capacity Engine:
                </span>
                <span className="font-bold text-emerald-400">CER Telemetry ($1.8M/Yr Saved)</span>
              </div>
            </div>
          </div>

          {/* Granted US Patents Box */}
          <div className="space-y-3" id="patents">
            <div className="flex items-center gap-2 pb-3 border-b border-border/40">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <h2 className="font-heading font-extrabold text-lg text-foreground tracking-tight">
                Granted United States Patents
              </h2>
            </div>

            <div className="space-y-3.5">
              {patentsData.map((patent) => (
                <div
                  key={patent.patentNumber}
                  className="p-4 rounded-2xl neu-card hover:border-brand-cyan/40 transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      USPTO GRANTED
                    </span>
                    <a
                      href={patent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-brand-cyan hover:underline"
                    >
                      <span>{patent.patentNumber}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="font-heading font-bold text-sm text-foreground group-hover:text-brand-cyan transition-colors leading-snug">
                    {patent.title}
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {patent.description}
                  </p>

                  <div className="text-[11px] font-mono text-muted-foreground pt-1 border-t border-border/40">
                    Granted: {patent.grantDate} · {patent.assignee}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
