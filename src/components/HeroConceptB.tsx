'use client';

import React from 'react';
import { Download, Mail, Linkedin, Github, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { DrawablyButton } from 'drawably/react';

export const HeroConceptB: React.FC = () => {
  return (
    <section className="pt-10 pb-12 border-b border-border/50" id="overview">
      <div className="space-y-6">
        {/* Title & Badge */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              Principal Platform & AI Systems Architect · Hyderabad, India
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.12]">
              Venkata Guravareddy
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl pt-1">
              <strong className="text-foreground font-semibold">14 years</strong> bridging physical silicon lifecycle, multi-node NVIDIA H100 GPU supercomputers, low-latency LLM serving runtimes (vLLM, Triton), and enterprise Kubernetes fleets across 52 global data centers. Currently Principal Platform Engineer at <span className="font-extrabold text-[#ED1C24] tracking-tight hover:brightness-125 transition-all">Verizon</span>.
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center font-heading font-black text-2xl text-brand-cyan shadow-inner shrink-0">
            VG
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Big Polished Gradient Button for Resume */}
          <a
            href="Venkata_Guravareddy_Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Download Master Resume (2-Page PDF)</span>
          </a>

          {/* Small Drawably Button for Email */}
          <a
            href="mailto:bsrgsit@gmail.com"
            className="inline-block"
          >
            <DrawablyButton
              variant="outline"
              stroke="#38bdf8"
              roughness={1.3}
              boil={1}
              className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-foreground hover:text-brand-cyan transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-brand-cyan inline-block mr-1" />
              bsrgsit@gmail.com
            </DrawablyButton>
          </a>

          <a
            href="https://linkedin.com/in/bvguravareddy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-blue-400/50 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/bsrgsit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-purple-400/50 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-purple-400" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};
