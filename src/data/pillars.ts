export interface Pillar {
  id: string;
  iconName: string;
  title: string;
  badge: string;
  description: string;
  keyHighlights: string[];
}

export const pillarsData: Pillar[] = [
  {
    id: "gpu",
    iconName: "Cpu",
    title: "GPU Supercomputing & Silicon Bring-Up",
    badge: "Hardware & Fabric",
    description:
      "Full-stack multi-node GPU cluster architecture from bare-metal IPMI/BIOS tuning to NVIDIA GPU Operator, Fabric Manager, and InfiniBand NDR 400G interconnect.",
    keyHighlights: [
      "NVIDIA H100 SXM5 (80GB HBM3), L40S, and DGX/HGX multi-node clusters",
      "InfiniBand NDR 400G & RoCEv2 lossless fabrics with non-blocking full bisection",
      "Live DCGM telemetry profiling mitigating real-time 94% NVLink saturation bottlenecks",
    ],
  },
  {
    id: "inference",
    iconName: "Zap",
    title: "High-Throughput LLM Serving Runtimes",
    badge: "AI Runtimes",
    description:
      "Production LLM model serving using vLLM, LiteLLM proxy, and Triton Inference Server, maximizing GPU token throughput while locking in strict P99 latency SLOs.",
    keyHighlights: [
      "Continuous batching, custom KV-cache paging, and multi-tenant GPU slicing (MIG)",
      "3.8x throughput speedup on large language model inference pipelines",
      "Enterprise routing, fallback arbitration, and rate-limiting proxies",
    ],
  },
  {
    id: "kubernetes",
    iconName: "Boxes",
    title: "Planet-Scale Kubernetes Fleet Control",
    badge: "Cloud Control Plane",
    description:
      "Enterprise fleet governance across 600+ Kubernetes and OpenStack clusters in 52 global data centers with GitOps automation and custom admission controllers.",
    keyHighlights: [
      "Custom Kubernetes CRDs and dynamic validating/mutating admission webhooks",
      "Ceph all-flash NVMe distributed storage & NetApp Trident CSI orchestration",
      "Calico / Cilium CNI overlays with eBPF observability and SR-IOV high-speed networking",
    ],
  },
  {
    id: "sre",
    iconName: "Activity",
    title: "Capacity Engines & Lossless SRE",
    badge: "Distributed SRE",
    description:
      "Large-scale distributed telemetry analytics, predictive resource exhaustion forecasting, and automated self-healing remediation loops.",
    keyHighlights: [
      "Architected 'CER' capacity engine processing 5M+ telemetry records/hr in Python",
      "Delivered $1.8M/yr in compute over-provisioning cost avoidance",
      "Tier-1 Incident Commander for mission-critical carrier-grade infrastructure",
    ],
  },
];
