'use client';

import React, { useState, useEffect } from 'react';
import { Download, Mail, Linkedin, Github, Cpu, Server, Network, Zap, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { DrawablyButton } from 'drawably/react';

export const HeroExecutive: React.FC = () => {
  const [liveLatency, setLiveLatency] = useState('11.4');

  useEffect(() => {
    const interval = setInterval(() => {
      const jitter = (11.2 + Math.random() * 0.5 - 0.25).toFixed(1);
      setLiveLatency(jitter);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 border-b border-border/50" id="overview">
      {/* Ambient background glow meshes */}
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[320px] bg-brand-cyan/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[280px] bg-brand-emerald/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Identity & Executive Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                Principal Platform & AI Systems Architect
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                Verizon Principal Engineer · Open to Leadership
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.12]">
              Venkata Guravareddy
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-semibold">14 years</strong> bridging physical silicon lifecycle, multi-node NVIDIA H100 GPU supercomputers, low-latency LLM serving runtimes (vLLM, Triton), and enterprise Kubernetes fleets across 52 global data centers. Currently Principal Platform Engineer at <span className="font-extrabold text-[#ED1C24] tracking-tight hover:brightness-125 transition-all">Verizon</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="Venkata_Guravareddy_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download Master Resume (2-Page PDF)</span>
              </a>

              <a
                href="mailto:bsrgsit@gmail.com"
                className="inline-block"
              >
                <DrawablyButton
                  variant="outline"
                  stroke="#38bdf8"
                  roughness={1.3}
                  boil={1}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-foreground hover:text-brand-cyan transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-cyan inline-block mr-1" />
                  bsrgsit@gmail.com
                </DrawablyButton>
              </a>

              <a
                href="https://linkedin.com/in/bvguravareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-blue-400/50 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/bsrgsit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-purple-400/50 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-purple-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Supercomputer & Fleet Telemetry Cockpit (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl neu-card border border-border/80 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-border/50">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground">
                  <Server className="w-4 h-4 text-brand-cyan" />
                  <span>COMPUTE & FLEET TELEMETRY</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>52 DCs Active</span>
                </div>
              </div>

              {/* Hardware Telemetry Parameters */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between p-3 rounded-xl neu-inset">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5 text-brand-cyan" /> GPU Silicon:
                  </span>
                  <span className="font-bold text-foreground">8x NVIDIA H100 SXM5 (80GB)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-inset">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Network className="w-3.5 h-3.5 text-indigo-400" /> Lossless Mesh:
                  </span>
                  <span className="font-bold text-foreground">400G InfiniBand · NVLink 900 GB/s</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-inset">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Token Latency:
                  </span>
                  <span className="font-bold text-emerald-400">{liveLatency} ms (P99)</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-inset">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-blue-400" /> Fleet Orchestration:
                  </span>
                  <span className="font-bold text-foreground">600+ K8s Clusters / 42k Nodes</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl neu-inset">
                  <span className="text-muted-foreground flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> IP & Inventions:
                  </span>
                  <span className="font-bold text-brand-cyan">2 Granted US Patents (USPTO)</span>
                </div>
              </div>

              <div className="pt-2 text-center border-t border-border/40">
                <span className="text-[11px] text-muted-foreground font-mono">
                  Continuous batching & DCGM telemetry enabled.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
