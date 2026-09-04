'use client';

import React, { useState } from 'react';
import { Cpu, Server, Network, ShieldCheck, Database, Layers, ArrowRight, Gauge, Activity, Cloud, Zap, ChevronDown, ChevronUp } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inference' | 'capacity'>('inference');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <section className="py-16 border-b border-border/50" id="architecture">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-border/40">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818cf8]" />
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
                Architectural Blueprints & Topology
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              End-to-end distributed system blueprints proving multi-node GPU interconnects, lossless mesh, and capacity forecasting.
            </p>
          </div>

          {/* Diagram Toggle Tabs & Collapse Button */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {isExpanded && (
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-card border border-border">
                <button
                  onClick={() => setActiveTab('inference')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'inference'
                      ? 'bg-brand-cyan text-slate-950 shadow-md'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  LLM Inference Serving
                </button>
                <button
                  onClick={() => setActiveTab('capacity')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'capacity'
                      ? 'bg-brand-cyan text-slate-950 shadow-md'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  CER Capacity Engine
                </button>
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-4 py-2 rounded-xl neu-button text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-all"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-4 h-4 text-brand-cyan" />
                  <span>Collapse Blueprint</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 text-brand-cyan" />
                  <span>Expand System Blueprint</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Diagram Surface */}
        {isExpanded && (
          <div className="p-6 sm:p-8 rounded-3xl neu-card relative overflow-hidden animate-in fade-in-50 duration-300 shadow-xl">
            {activeTab === 'inference' ? (
              /* LLM Serving Pipeline Architecture */
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border/40">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      High-Throughput GenAI Serving Architecture (3.8x Throughput)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      End-to-end model serving topology with continuous batching, KV-cache optimization, and live DCGM hardware profiling.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sub-15ms P99 Token Latency
                  </span>
                </div>

                {/* Node Flow Visualizer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Step 1: Ingress & Proxy */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">
                          01
                        </span>
                        <Cloud className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        LiteLLM Gateway
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        High-concurrency routing, token bucket rate-limiting, and multi-model failover arbitration.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-brand-cyan font-semibold">
                      Ingress: 15k+ req/sec
                    </div>
                  </div>

                  {/* Step 2: vLLM & KV-Cache */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-brand-cyan/15 text-brand-cyan font-mono font-bold text-xs flex items-center justify-center">
                          02
                        </span>
                        <Zap className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        vLLM / Triton Runtimes
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        PagedAttention KV-cache management, continuous dynamic batching, and speculative decoding.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-brand-cyan font-semibold">
                      3.8x Speedup over Stock
                    </div>
                  </div>

                  {/* Step 3: InfiniBand Fabric */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center">
                          03
                        </span>
                        <Network className="w-4 h-4 text-indigo-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        400G InfiniBand Fabric
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Lossless RoCEv2 transport, adaptive routing, and zero packet-drop multi-node tensor parallelism.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-indigo-400 font-semibold">
                      900 GB/s NVLink Mesh
                    </div>
                  </div>

                  {/* Step 4: Silicon & Telemetry */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                          04
                        </span>
                        <Cpu className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        H100 SXM5 + DCGM
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Hardware bring-up, real-time thermal/clock throttling sensors, and automated node remediation.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-emerald-400 font-semibold">
                      Zero Hardware Silent Failures
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* CER Distributed Capacity Architecture */
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-border/40">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-foreground">
                      CER Distributed Capacity & Forecasting Engine ($1.8M/yr Savings)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Autonomous telemetry ingestion pipeline analyzing 5M+ metrics/hr across 600+ Kubernetes clusters for proactive exhaustion prevention.
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> 5M+ Records / Hour Analyzed
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                  {/* Step 1 */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">
                          01
                        </span>
                        <Server className="w-4 h-4 text-blue-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        Telemetry Scrapers
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Continuous scraping agents across 52 DCs collecting CPU, memory, NVMe, and GPU utilization metrics.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-brand-cyan font-semibold">
                      600+ Clusters Tracked
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-brand-cyan/15 text-brand-cyan font-mono font-bold text-xs flex items-center justify-center">
                          02
                        </span>
                        <Database className="w-4 h-4 text-brand-cyan" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        TimeSeries Storage & Aggregation
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        High-throughput time-series compaction with sub-second lookback queries across historical footprints.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-brand-cyan font-semibold">
                      Sub-second Aggregations
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center">
                          03
                        </span>
                        <Gauge className="w-4 h-4 text-indigo-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        Predictive Frontier Model
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Forecasts compute saturation windows 72 hours ahead to trigger automated capacity reservation.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-indigo-400 font-semibold">
                      Zero Exhaustion Outages
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-5 rounded-2xl neu-inset flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                          04
                        </span>
                        <Activity className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                        Auto-Reservation & Savings
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Reclaims idle allocations and right-sizes cluster footprints automatically without application disruption.
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-emerald-400 font-semibold">
                      $1.8M Annual Savings
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
