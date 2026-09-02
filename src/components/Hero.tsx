'use client';

import React from 'react';
import { Download, ArrowUpRight, Cpu, Layers, Sparkles, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden" id="top">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-brand-cyan/15 to-brand-emerald/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge Row */}
          <div className="inline-flex flex-wrap items-center gap-2.5 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              Principal AI & Cloud Infrastructure
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              Open to Global Leadership Roles
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.12] mb-6">
            Architecting High-Density{' '}
            <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-emerald bg-clip-text text-transparent">
              GPU Supercomputers
            </span>{' '}
            & Global Cloud Fleets.
          </h1>

          {/* Executive Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            <strong className="text-foreground font-semibold">14 years</strong> bridging physical bare-metal hardware lifecycle, multi-node NVIDIA H100/L40S GPU supercomputing, low-latency LLM serving runtimes (vLLM, Triton), and enterprise Kubernetes fleets across 52 global data centers. Currently Principal Platform Engineer at Verizon.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <a
              href="Venkata_Guravareddy_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Master ATS Resume (PDF)</span>
            </a>

            <a
              href="#case-studies"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card hover:bg-card/80 border border-border hover:border-brand-cyan/50 text-foreground font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              <span>Explore Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-secondary/50 hover:bg-secondary border border-transparent hover:border-border text-muted-foreground hover:text-foreground font-medium text-sm transition-all"
            >
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Key Technology Chips */}
          <div className="pt-6 border-t border-border/40 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground font-mono">
            <span className="text-foreground/70 font-sans font-semibold uppercase tracking-wider text-[11px]">
              Core Competencies:
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> NVIDIA H100 SXM5 / DGX
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> vLLM & Triton Serving
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> 600+ Kubernetes Fleets
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" /> 2 Granted US Patents
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
