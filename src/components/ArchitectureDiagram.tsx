'use client';

import React, { useState } from 'react';
import { Cpu, Server, Network, ShieldCheck, Database, Layers, ArrowRight, Gauge, Activity, Cloud, Zap } from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'inference' | 'capacity'>('inference');

  return (
    <section className="py-16 bg-card/10 border-y border-border/30" id="architecture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
              Interactive System Topology
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Architectural Blueprints.
            </h2>
          </div>

          {/* Diagram Toggle Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-card border border-border">
            <button
              onClick={() => setActiveTab('inference')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'inference'
                  ? 'bg-brand-cyan text-slate-950 shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              LLM Inference Serving Runtime
            </button>
            <button
              onClick={() => setActiveTab('capacity')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'capacity'
                  ? 'bg-brand-cyan text-slate-950 shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              CER Distributed Capacity Engine
            </button>
          </div>
        </div>

        {/* Diagram Surface */}
        <div className="p-6 sm:p-8 rounded-3xl neu-card relative overflow-hidden">
          {activeTab === 'inference' ? (
            /* LLM Serving Pipeline Architecture */
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    High-Throughput GenAI Serving Architecture (3.8x Throughput)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    End-to-end model serving topology with continuous batching, KV-cache optimization, and live DCGM hardware profiling.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Sub-15ms P99 Token Latency
                </span>
              </div>

              {/* Node Flow Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {/* Step 1: Ingress & Proxy */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">
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
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-brand-cyan">
                    Ingress: 15k+ req/sec
                  </div>
                </div>

                {/* Step 2: vLLM & KV-Cache */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-brand-cyan/10 text-brand-cyan font-mono font-bold text-xs flex items-center justify-center">
                        02
                      </span>
                      <Zap className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                      vLLM / Triton Runtimes
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Continuous dynamic batching, PagedAttention KV-cache management, and multi-tenant GPU slicing.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-emerald-400">
                    3.8x Throughput Speedup
                  </div>
                </div>

                {/* Step 3: InfiniBand & NVLink Fabric */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center">
                        03
                      </span>
                      <Network className="w-4 h-4 text-indigo-400" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                      InfiniBand & NVLink Fabric
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      400 Gb/s NDR InfiniBand interconnect and 900 GB/s NVLink non-blocking GPU-to-GPU mesh.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-indigo-400">
                    Lossless RoCEv2 / RDMA
                  </div>
                </div>

                {/* Step 4: Silicon & DCGM */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
                        04
                      </span>
                      <Cpu className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                      NVIDIA H100 SXM5 + DCGM
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      80GB HBM3 physical silicon with live DCGM telemetry catching NVLink saturation & PCIe errors.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-emerald-400">
                    Proactive Node Quarantine
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* CER Distributed Capacity Architecture */
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    "CER" Distributed Capacity & Telemetry Engine ($1.8M/Yr Cost Avoidance)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Real-time distributed telemetry processing across 600+ Kubernetes clusters and 60,000+ active pods.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold">
                  5,000,000+ Records / Hour
                </span>
              </div>

              {/* Node Flow Visualizer */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {/* Step 1 */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">
                        01
                      </span>
                      <Server className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                      Fleet Telemetry Ingest
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Streaming CPU, memory, GPU SM, and persistent storage metrics from 600+ Kubernetes clusters.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-brand-cyan">
                    52 Global Data Centers
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-brand-cyan/10 text-brand-cyan font-mono font-bold text-xs flex items-center justify-center">
                        02
                      </span>
                      <Database className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <h4 className="font-heading font-bold text-sm text-foreground mb-1">
                      Time-Series Analytics
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Redis and Prometheus pipelines calculating moving resource exhaustion frontiers and anomaly spikes.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-emerald-400">
                    Real-Time Pipeline (Python)
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono font-bold text-xs flex items-center justify-center">
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
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-indigo-400">
                    Zero Exhaustion Outages
                  </div>
                </div>

                {/* Step 4 */}
                <div className="p-5 rounded-2xl bg-card/90 border border-border flex flex-col justify-between group hover:border-brand-cyan/60 transition-colors">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs flex items-center justify-center">
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
                  <div className="mt-4 pt-3 border-t border-border/30 text-[11px] font-mono text-emerald-400">
                    $1.8M Annual Savings
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
