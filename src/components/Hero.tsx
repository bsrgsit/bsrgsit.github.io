'use client';

import React from 'react';
import { Download, ArrowUpRight, Cpu, Layers, ShieldCheck, CheckCircle2, Server, Activity, Network } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-border/40" id="top">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-brand-cyan/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[250px] bg-brand-emerald/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition & Identity (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                Principal Platform & AI Systems Architect
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                Open to Global Leadership Roles
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.12]">
              Architecting High-Density{' '}
              <span className="bg-gradient-to-r from-brand-cyan via-sky-400 to-brand-emerald bg-clip-text text-transparent">
                GPU Supercomputers
              </span>{' '}
              & Global Cloud Fleets.
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <strong className="text-foreground font-semibold">14 years</strong> bridging physical silicon lifecycle, multi-node NVIDIA H100/L40S GPU clusters, low-latency LLM serving runtimes (vLLM, Triton), and enterprise Kubernetes fleets across 52 global data centers. Currently Principal Platform Engineer at Verizon.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
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
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-card hover:bg-card/80 border border-border hover:border-brand-cyan/50 text-foreground font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Architectural Case Studies</span>
                <ArrowUpRight className="w-4 h-4 text-brand-cyan" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Infrastructure Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl neu-card space-y-5 border border-border/80 relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-border/50">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <Server className="w-4 h-4 text-brand-cyan" />
                  <span>FLEET INFRASTRUCTURE SNAPSHOT</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-bold">
                  99.999% SLA
                </span>
              </div>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-background/80 border border-border/50">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-brand-cyan" /> GPU Compute:
                  </span>
                  <span className="font-bold text-foreground">8x NVIDIA H100 SXM5 / L40S</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-background/80 border border-border/50">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-indigo-400" /> Lossless Fabric:
                  </span>
                  <span className="font-bold text-foreground">400G InfiniBand & NVLink 900 GB/s</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-background/80 border border-border/50">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-amber-400" /> Model Serving:
                  </span>
                  <span className="font-bold text-emerald-400">vLLM & Triton (3.8x Speedup)</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-background/80 border border-border/50">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Server className="w-3.5 h-3.5 text-blue-400" /> Fleet Control:
                  </span>
                  <span className="font-bold text-foreground">600+ K8s Clusters / 52 DCs</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-background/80 border border-border/50">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Intellectual Property:
                  </span>
                  <span className="font-bold text-brand-cyan">2 Granted US Patents (USPTO)</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-muted-foreground">
                  Governing carrier-grade & enterprise AI workloads at global scale.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
