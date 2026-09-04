'use client';

import React, { useState } from 'react';
import {
  Download,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Cpu,
  Server,
  Network,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Cloud,
  ChevronDown,
  ChevronUp,
  Moon,
  Sun,
} from 'lucide-react';
import { DrawablyButton } from 'drawably/react';
import { timelineData } from '@/data/timeline';
import { caseStudiesData } from '@/data/case-studies';
import { patentsData } from '@/data/patents';
import { stackData } from '@/data/stack';
import {
  VerizonBrandLogo,
  EricssonBrandLogo,
  HPEBrandLogo,
  HCLBrandLogo,
  AndhraBrandLogo,
  NVIDIALogo,
  KubernetesLogo,
  PythonLogo,
  CephLogo,
} from '@/components/CompanyLogos';

export const CraftPortfolio: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>('gpu-inference-platform');
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(0);
  const [activeArchTab, setActiveArchTab] = useState<'inference' | 'capacity'>('inference');
  const [isArchExpanded, setIsArchExpanded] = useState<boolean>(true);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

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

  const getCompanyLogo = (company: string) => {
    if (company.includes('Verizon')) return <VerizonBrandLogo className="h-6 sm:h-7 w-auto" />;
    if (company.includes('Ericsson')) return <EricssonBrandLogo className="h-6 sm:h-7 w-auto" />;
    if (company.includes('Hewlett Packard')) return <HPEBrandLogo className="h-6 sm:h-7 w-auto" />;
    if (company.includes('HCL')) return <HCLBrandLogo className="h-6 sm:h-7 w-auto" />;
    return <AndhraBrandLogo className="h-6 sm:h-7 w-auto" />;
  };

  const getStackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <NVIDIALogo className="w-5 h-5" />;
      case 'Zap':
        return <PythonLogo className="w-5 h-5" />;
      case 'Boxes':
        return <KubernetesLogo className="w-5 h-5" />;
      case 'Database':
        return <CephLogo className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors selection:bg-brand-cyan/20 selection:text-brand-cyan relative overflow-hidden">
      {/* Subtle, elegant ambient lighting (Apple / Stripe style) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-10 sm:py-16 space-y-20 sm:space-y-24">
        {/* Navigation Bar */}
        <header className="sticky top-4 z-50 p-2.5 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/80 shadow-lg flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 pl-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center font-heading font-extrabold text-slate-950 text-xs shadow-sm">
              VG
            </div>
            <span className="font-heading font-bold text-sm tracking-tight hidden sm:inline">
              Venkata Guravareddy
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-muted-foreground">
            <a href="#experience" className="hover:text-foreground transition-colors">
              Experience
            </a>
            <a href="#systems" className="hover:text-foreground transition-colors">
              Systems
            </a>
            <a href="#architecture" className="hover:text-foreground transition-colors">
              Architecture
            </a>
            <a href="#patents" className="hover:text-foreground transition-colors">
              Patents
            </a>
            <a href="#stack" className="hover:text-foreground transition-colors">
              Stack
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2 pr-1">
            <a
              href="Venkata_Guravareddy_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="space-y-6 pt-2" id="overview">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Principal Platform & AI Systems Architect</span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.12]">
              Venkata Guravareddy
            </h1>

            <p className="text-lg text-muted-foreground font-medium">
              Principal Platform Engineer at{' '}
              <span className="font-extrabold text-[#ED1C24] tracking-tight">Verizon</span> · Open to Leadership
            </p>
          </div>

          <p className="text-base sm:text-lg leading-relaxed text-muted-foreground max-w-3xl">
            14 years engineering distributed compute platforms, multi-node NVIDIA H100 GPU supercomputers, low-latency LLM serving runtimes (vLLM, Triton), and enterprise Kubernetes fleets across 52 global data centers. Co-inventor on 2 granted United States Patents.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 text-xs">
            <a
              href="Venkata_Guravareddy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold shadow-[0_4px_16px_rgba(56,189,248,0.25)] transition-all hover:scale-[1.01]"
            >
              <Download className="w-4 h-4" />
              <span>Download Master Resume (2-Page PDF)</span>
            </a>

            <a href="mailto:bsrgsit@gmail.com" className="inline-block">
              <DrawablyButton
                variant="outline"
                stroke="#38bdf8"
                roughness={1.2}
                boil={1}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-foreground hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-brand-cyan inline-block mr-1.5" />
                bsrgsit@gmail.com
              </DrawablyButton>
            </a>

            <a
              href="https://linkedin.com/in/bvguravareddy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-blue-400/50 transition-colors shadow-sm"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/bsrgsit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-card hover:bg-card/80 border border-border text-xs font-semibold text-foreground hover:border-purple-400/50 transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-purple-400" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* Verified Scale & Production Impact Bento Grid */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5" aria-label="Scale Highlights">
          <div className="p-5 rounded-2xl bg-card/80 border border-border/80 shadow-sm space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              14+
            </div>
            <div className="text-xs font-bold font-mono text-brand-cyan uppercase tracking-wider">
              Years Systems
            </div>
            <p className="text-xs text-muted-foreground pt-0.5">
              Silicon to multi-cloud GPU fleets
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card/80 border border-border/80 shadow-sm space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              600+
            </div>
            <div className="text-xs font-bold font-mono text-brand-cyan uppercase tracking-wider">
              K8s Fleets
            </div>
            <p className="text-xs text-muted-foreground pt-0.5">
              Across 52 global data centers
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card/80 border border-border/80 shadow-sm space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400 tracking-tight">
              3.8x
            </div>
            <div className="text-xs font-bold font-mono text-emerald-400 uppercase tracking-wider">
              LLM Speedup
            </div>
            <p className="text-xs text-muted-foreground pt-0.5">
              vLLM & Triton serving throughput
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card/80 border border-border/80 shadow-sm space-y-1">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              2 US
            </div>
            <div className="text-xs font-bold font-mono text-brand-cyan uppercase tracking-wider">
              Granted Patents
            </div>
            <p className="text-xs text-muted-foreground pt-0.5">
              USPTO assigned to Verizon
            </p>
          </div>
        </section>

        {/* Visual Architecture Blueprint (Stripe / Apple Developer Quality) */}
        <section className="space-y-6" id="architecture">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818cf8]" />
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                  Architectural Blueprints & Topology
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                End-to-end distributed system blueprints for multi-node GPU supercomputers & capacity analytics.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {isArchExpanded && (
                <div className="flex items-center gap-1 p-1 rounded-xl bg-card border border-border">
                  <button
                    onClick={() => setActiveArchTab('inference')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeArchTab === 'inference'
                        ? 'bg-foreground text-background shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    LLM Serving Pipeline
                  </button>
                  <button
                    onClick={() => setActiveArchTab('capacity')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeArchTab === 'capacity'
                        ? 'bg-foreground text-background shadow-sm'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    CER Capacity Engine
                  </button>
                </div>
              )}

              <button
                onClick={() => setIsArchExpanded(!isArchExpanded)}
                className="px-3 py-1.5 rounded-xl border border-border text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-1 transition-colors"
              >
                {isArchExpanded ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Collapse</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>Expand Blueprint</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Diagram Canvas */}
          {isArchExpanded && (
            <div className="p-6 sm:p-8 rounded-3xl bg-card/80 border border-border/80 shadow-md space-y-6">
              {activeArchTab === 'inference' ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/40">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-foreground">
                      GenAI Model Serving Topology (3.8x Throughput Speedup)
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sub-15ms P99 Token Latency
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-400">01 INGRESS</span>
                        <Cloud className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">LiteLLM Gateway</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        High-concurrency routing, token-bucket rate limiting, and multi-model failover.
                      </p>
                      <div className="text-[11px] font-mono text-brand-cyan pt-2 border-t border-border/40">
                        15k+ req/sec
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-brand-cyan">02 RUNTIME</span>
                        <Zap className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">vLLM & Triton</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        PagedAttention KV-cache, continuous dynamic batching, and speculative decoding.
                      </p>
                      <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-border/40">
                        3.8x Speedup over Stock
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-indigo-400">03 FABRIC</span>
                        <Network className="w-4 h-4 text-indigo-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">400G InfiniBand</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Lossless RoCEv2 transport and 900 GB/s NVLink mesh for multi-node tensor parallelism.
                      </p>
                      <div className="text-[11px] font-mono text-indigo-400 pt-2 border-t border-border/40">
                        Zero Packet Drops
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-400">04 SILICON</span>
                        <Cpu className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">H100 SXM5 + DCGM</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Hardware bring-up, real-time thermal throttling monitoring, and auto-node remediation.
                      </p>
                      <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-border/40">
                        Sub-second Health Telemetry
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/40">
                    <h3 className="font-heading font-bold text-sm sm:text-base text-foreground">
                      CER Distributed Capacity & Forecasting Engine ($1.8M/Yr Cost Avoidance)
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 5M+ Metrics/Hour
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-400">01 SCRAPERS</span>
                        <Server className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">Telemetry Agents</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Continuous scraping agents across 52 DCs collecting CPU, memory, NVMe, and GPU metrics.
                      </p>
                      <div className="text-[11px] font-mono text-brand-cyan pt-2 border-t border-border/40">
                        600+ Clusters
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-brand-cyan">02 STORAGE</span>
                        <Activity className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">TimeSeries Engine</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        High-throughput time-series compaction with sub-second lookback queries across historical data.
                      </p>
                      <div className="text-[11px] font-mono text-brand-cyan pt-2 border-t border-border/40">
                        Sub-second Aggregation
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-indigo-400">03 PREDICTIVE</span>
                        <Zap className="w-4 h-4 text-indigo-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">Frontier Model</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Forecasts compute saturation windows 72 hours ahead to trigger automated capacity reservation.
                      </p>
                      <div className="text-[11px] font-mono text-indigo-400 pt-2 border-t border-border/40">
                        Zero Saturation Outages
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-400">04 OPTIMIZATION</span>
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground">Auto-Reservation</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Reclaims idle allocations and right-sizes cluster footprints automatically without application disruption.
                      </p>
                      <div className="text-[11px] font-mono text-emerald-400 pt-2 border-t border-border/40">
                        $1.8M Annual Savings
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </section>

        {/* Work Experience Section with Official Vector Brand Badges */}
        <section className="space-y-6" id="experience">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                  14 Years Across the Infrastructure Stack
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Career milestones mapped from physical silicon bring-up to enterprise GPU supercomputing.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-muted-foreground font-semibold shrink-0">
              Stack Layers 01 — 05
            </span>
          </div>

          <div className="space-y-4">
            {timelineData.map((item, idx) => {
              const isExpanded = expandedTimeline === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-card border-brand-cyan/40 shadow-md'
                      : 'bg-card/70 border-border/80 hover:border-border hover:bg-card'
                  }`}
                >
                  {/* Header Row */}
                  <button
                    onClick={() => setExpandedTimeline(isExpanded ? null : idx)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Authentic Company Logo Tile */}
                      <div className="w-28 sm:w-32 h-12 rounded-xl bg-secondary/80 border border-border/80 flex items-center justify-center shrink-0 p-2 shadow-sm">
                        {getCompanyLogo(item.company)}
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-heading font-bold text-base sm:text-lg text-foreground leading-snug">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-muted-foreground">
                          <span className="text-emerald-400 font-semibold">{item.layerBadge}</span>
                          <span>·</span>
                          <span>{item.period}</span>
                          <span>·</span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="shrink-0 w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:border-brand-cyan/50 transition-colors">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-brand-cyan" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 border-t border-border/40 space-y-3.5 text-xs sm:text-sm leading-relaxed text-muted-foreground animate-in fade-in-50 duration-200">
                      <p className="pt-2">{item.description}</p>
                      <div className="space-y-2 pt-1">
                        {item.keyAchievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2.5 text-foreground/90">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Featured Systems & Case Studies */}
        <section className="space-y-6" id="systems">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#38bdf8]" />
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                  Featured Systems & Production Case Studies
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Deep-dives into problem contexts, architectural designs, and verified production results.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {caseStudiesData.map((study) => {
              const isExpanded = expandedProject === study.id;

              return (
                <div
                  key={study.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? 'bg-card border-brand-cyan/40 shadow-md'
                      : 'bg-card/70 border-border/80 hover:border-border hover:bg-card'
                  }`}
                >
                  <button
                    onClick={() => setExpandedProject(isExpanded ? null : study.id)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-left transition-colors"
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-heading font-bold text-base sm:text-lg text-foreground group-hover:text-brand-cyan transition-colors">
                          {study.title}
                        </span>
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                          {study.impactBadge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-brand-cyan font-medium">
                        {study.subtitle}
                      </p>
                    </div>

                    <div className="shrink-0 w-8 h-8 rounded-xl bg-background border border-border flex items-center justify-center text-foreground hover:border-brand-cyan/50 transition-colors">
                      {isExpanded ? (
                        <Minus className="w-4 h-4 text-brand-cyan" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 border-t border-border/40 space-y-4 text-xs sm:text-sm leading-relaxed text-muted-foreground animate-in fade-in-50 duration-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-1.5">
                          <strong className="text-foreground font-semibold block text-xs uppercase font-mono">
                            The Challenge:
                          </strong>
                          <p>{study.problem}</p>
                        </div>

                        <div className="p-4 rounded-2xl bg-secondary/50 border border-border/60 space-y-1.5">
                          <strong className="text-foreground font-semibold block text-xs uppercase font-mono">
                            Architectural Solution:
                          </strong>
                          <p>{study.architecture}</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-foreground">
                        <strong className="text-emerald-400 font-bold block text-xs uppercase font-mono mb-1">
                          Verified Production Impact:
                        </strong>
                        <p>{study.impact}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {study.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs font-mono px-2.5 py-0.5 rounded-lg bg-secondary text-foreground/90 border border-border/50"
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

        {/* Granted US Patents Showcase */}
        <section className="space-y-6" id="patents">
          <div className="flex items-center gap-2 pb-3 border-b border-border/60">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
            <div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                Granted United States Patents
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Patented distributed validation engines assigned to Verizon Patent & Licensing Inc.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {patentsData.map((patent) => (
              <div
                key={patent.patentNumber}
                className="p-6 rounded-3xl bg-card/80 border border-border/80 shadow-sm flex flex-col justify-between space-y-4 hover:border-brand-cyan/40 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                      USPTO GRANTED
                    </span>
                    <a
                      href={patent.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs font-bold text-brand-cyan hover:underline"
                    >
                      <span>{patent.patentNumber}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="font-heading font-bold text-base text-foreground leading-snug">
                    {patent.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {patent.description}
                  </p>
                </div>

                <div className="text-xs font-mono text-muted-foreground pt-3 border-t border-border/40 flex items-center justify-between">
                  <span>Granted: {patent.grantDate}</span>
                  <span>{patent.assignee}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware Silicon & Cloud Stack Matrix */}
        <section className="space-y-6" id="stack">
          <div className="flex items-center gap-2 pb-3 border-b border-border/60">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818cf8]" />
            <div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                Production Hardware Silicon & Cloud Stack
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Hardware architectures, serving engines, and multi-cluster Kubernetes tooling operated in production.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stackData.map((group, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-card/80 border border-border/80 shadow-sm space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-border/40 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary/80 border border-border/80 flex items-center justify-center shrink-0 p-2 shadow-sm">
                      {getStackIcon(group.iconName)}
                    </div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-foreground leading-tight">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-mono px-2 py-0.5 rounded-lg bg-secondary text-foreground/90 border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Executive Contact & Collaboration */}
        <section className="space-y-6" id="contact">
          <div className="flex items-center gap-2 pb-3 border-b border-border/60">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-foreground tracking-tight">
                Executive Contact & Collaboration
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                Direct channels for Principal / Staff Infrastructure Architect & AI Systems Engineering leadership opportunities.
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-card/80 border border-border/80 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground">
                  Let's architect systems that scale.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Open to <strong>Principal Platform Architect</strong>, <strong>Director of Infrastructure</strong>, and <strong>Lead AI Systems Engineer</strong> opportunities worldwide.
                </p>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <a
                  href="mailto:bsrgsit@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/60 border border-border/60 hover:border-brand-cyan/50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted-foreground block">EMAIL</span>
                    <span className="font-bold text-foreground">bsrgsit@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/bvguravareddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/60 border border-border/60 hover:border-blue-400/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted-foreground block">LINKEDIN</span>
                    <span className="font-bold text-foreground">bvguravareddy ↗</span>
                  </div>
                </a>

                <a
                  href="https://github.com/bsrgsit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/60 border border-border/60 hover:border-purple-400/50 transition-colors"
                >
                  <Github className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-muted-foreground block">GITHUB</span>
                    <span className="font-bold text-foreground">bsrgsit ↗</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Email Inquiry */}
            <div className="p-6 rounded-2xl bg-secondary/40 border border-border/60 space-y-4">
              <h4 className="font-heading font-bold text-sm text-foreground">
                Direct Inquiry
              </h4>
              <p className="text-xs text-muted-foreground">
                Click below to launch your email client with pre-formatted inquiry details directly to Venkata Guravareddy.
              </p>
              <a
                href="mailto:bsrgsit@gmail.com?subject=Principal%20Platform%20%26%20AI%20Infrastructure%20Opportunity&body=Hello%20Venkata,%0D%0A%0D%0AWe%20are%20interested%20in%20discussing%20a%20Principal%20Infrastructure%20Architect%20role%20with%20you."
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-[1.01]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Direct Email Inquiry</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border/60 text-xs text-muted-foreground flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>© 2026 Venkata Guravareddy · Principal AI & Platform Infrastructure Architect</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/bvguravareddy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/bsrgsit" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="Venkata_Guravareddy_Resume.pdf" download className="hover:text-foreground transition-colors">
              Resume (PDF)
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};
