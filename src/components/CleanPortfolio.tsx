'use client';

import React, { useState } from 'react';
import { Download, Mail, Linkedin, Github, ArrowUpRight, Plus, Minus, Check, Moon, Sun } from 'lucide-react';
import { DrawablyButton } from 'drawably/react';
import { timelineData } from '@/data/timeline';
import { caseStudiesData } from '@/data/case-studies';
import { patentsData } from '@/data/patents';
import { stackData } from '@/data/stack';
import { VerizonIcon, EricssonIcon, HPEIcon, HCLIcon, AndhraIcon } from '@/components/CompanyLogos';

export const CleanPortfolio: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>('gpu-inference-platform');
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(0);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    const next = !isLightMode;
    setIsLightMode(next);
    if (next) {
      document.body.classList.add('light-mode');
      localStorage.setItem('vg_theme_pref', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('vg_theme_pref', 'dark');
    }
  };

  const getCompanyIcon = (company: string) => {
    if (company.includes('Verizon')) return <VerizonIcon className="w-5 h-5 shrink-0" />;
    if (company.includes('Ericsson')) return <EricssonIcon className="w-5 h-5 shrink-0" />;
    if (company.includes('Hewlett Packard')) return <HPEIcon className="w-5 h-5 shrink-0" />;
    if (company.includes('HCL')) return <HCLIcon className="w-5 h-5 shrink-0" />;
    return <AndhraIcon className="w-5 h-5 shrink-0" />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors selection:bg-neutral-800 selection:text-neutral-100">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-20">
        {/* Navigation / Header Bar */}
        <header className="flex items-center justify-between pb-8 border-b border-border/60">
          <a href="#" className="font-heading font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            vg.
          </a>
          <div className="flex items-center gap-4 text-xs">
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#systems" className="text-muted-foreground hover:text-foreground transition-colors">
              Systems
            </a>
            <a href="#patents" className="text-muted-foreground hover:text-foreground transition-colors">
              Patents
            </a>
            <a href="#stack" className="text-muted-foreground hover:text-foreground transition-colors">
              Stack
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Hero / Identity Section (Pure typography, no clutter) */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight text-foreground">
              Venkata Guravareddy
            </h1>
            <p className="text-base text-muted-foreground font-medium">
              Principal AI & Platform Infrastructure Architect ·{' '}
              <span className="font-bold text-[#ED1C24]">Verizon</span>
            </p>
          </div>

          <p className="text-base leading-relaxed text-muted-foreground">
            14 years engineering distributed compute platforms, multi-node NVIDIA H100 GPU supercomputers, low-latency LLM serving runtimes (vLLM, Triton), and enterprise Kubernetes fleets across 52 global data centers. Co-inventor on 2 granted United States Patents.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <a
              href="Venkata_Guravareddy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-semibold hover:opacity-90 transition-opacity"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume (PDF)</span>
            </a>

            <a href="mailto:bsrgsit@gmail.com" className="inline-block">
              <DrawablyButton
                variant="outline"
                stroke="#38bdf8"
                roughness={1.2}
                boil={1}
                className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-foreground hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan inline-block mr-1" />
                bsrgsit@gmail.com
              </DrawablyButton>
            </a>

            <a
              href="https://linkedin.com/in/bvguravareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href="https://github.com/bsrgsit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* Minimal Scale Counters */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-border/60">
          <div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground">14+ Yrs</div>
            <div className="text-xs text-muted-foreground mt-0.5">Systems Engineering</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground">600+</div>
            <div className="text-xs text-muted-foreground mt-0.5">Kubernetes Fleets</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono tracking-tight text-emerald-400">3.8x</div>
            <div className="text-xs text-muted-foreground mt-0.5">LLM Serving Speedup</div>
          </div>
          <div>
            <div className="text-2xl font-bold font-mono tracking-tight text-foreground">2 US</div>
            <div className="text-xs text-muted-foreground mt-0.5">Granted Patents</div>
          </div>
        </section>

        {/* Work Experience (Clean, authentic chronological timeline) */}
        <section className="space-y-8" id="experience">
          <h2 className="font-heading font-bold text-lg text-foreground tracking-tight">
            Work Experience
          </h2>

          <div className="space-y-6">
            {timelineData.map((item, idx) => {
              const isExpanded = expandedTimeline === idx;

              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border/60 hover:border-border transition-colors space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 p-1 rounded-md bg-secondary/80 border border-border/60">
                        {getCompanyIcon(item.company)}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-sm text-foreground">
                          {item.role}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {item.company} · {item.location}
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono text-muted-foreground">
                        {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-muted-foreground pt-1">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {item.keyAchievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-foreground/90">
                        <span className="text-muted-foreground mt-0.5">•</span>
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Systems & Case Studies (Clean Paco Coursey style) */}
        <section className="space-y-8" id="systems">
          <div>
            <h2 className="font-heading font-bold text-lg text-foreground tracking-tight">
              Featured Systems & Case Studies
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Production architectures engineered across GPU supercomputers and distributed platforms.
            </p>
          </div>

          <div className="space-y-3">
            {caseStudiesData.map((study) => {
              const isExpanded = expandedProject === study.id;

              return (
                <div
                  key={study.id}
                  className="rounded-xl border border-border/60 hover:border-border transition-colors overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : study.id)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="font-heading font-semibold text-sm text-foreground">
                          {study.title}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                          {study.impactBadge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 text-muted-foreground">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-border/40 space-y-4 text-xs text-muted-foreground leading-relaxed">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                        <div className="space-y-1">
                          <strong className="text-foreground font-semibold block">The Problem:</strong>
                          <p>{study.problem}</p>
                        </div>
                        <div className="space-y-1">
                          <strong className="text-foreground font-semibold block">Architectural Solution:</strong>
                          <p>{study.architecture}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-secondary/60 border border-border/40 text-foreground">
                        <strong className="text-emerald-400 font-semibold block mb-0.5">Measured Impact:</strong>
                        <p>{study.impact}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {study.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-secondary text-foreground/80 border border-border/40"
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
        </section>

        {/* Granted US Patents */}
        <section className="space-y-6" id="patents">
          <div>
            <h2 className="font-heading font-bold text-lg text-foreground tracking-tight">
              Granted United States Patents
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              Assigned to Verizon Patent & Licensing Inc.
            </p>
          </div>

          <div className="space-y-3">
            {patentsData.map((patent) => (
              <div
                key={patent.patentNumber}
                className="p-5 rounded-xl border border-border/60 hover:border-border transition-colors space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-foreground">
                    {patent.patentNumber}
                  </span>
                  <a
                    href={patent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span>USPTO ↗</span>
                  </a>
                </div>

                <h3 className="font-heading font-bold text-sm text-foreground">
                  {patent.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {patent.description}
                </p>

                <div className="text-[11px] font-mono text-muted-foreground pt-1">
                  Granted: {patent.grantDate} · {patent.assignee}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Technologies & Toolkit */}
        <section className="space-y-6" id="stack">
          <h2 className="font-heading font-bold text-lg text-foreground tracking-tight">
            Core Technical Stack
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stackData.map((group, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-border/60 space-y-2">
                <h3 className="font-heading font-semibold text-xs text-foreground uppercase tracking-wider font-mono">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-foreground/90 border border-border/40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / Footer */}
        <footer className="pt-10 border-t border-border/60 space-y-4 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p>
              Venkata Guravareddy ·{' '}
              <a href="mailto:bsrgsit@gmail.com" className="text-foreground hover:underline">
                bsrgsit@gmail.com
              </a>{' '}
              · +91 9884883957
            </p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/bvguravareddy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                LinkedIn ↗
              </a>
              <a href="https://github.com/bsrgsit" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground/80">
            Engineered with Next.js & Tailwind CSS. Minimalist design inspired by Lee Robinson & Paco Coursey.
          </p>
        </footer>
      </div>
    </div>
  );
};
