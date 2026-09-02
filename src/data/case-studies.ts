export interface CaseStudy {
  id: string;
  category: 'gpu' | 'k8s' | 'capacity' | 'telecom';
  title: string;
  subtitle: string;
  impactBadge: string;
  categoryBadge: string;
  problem: string;
  architecture: string;
  impact: string;
  techStack: string[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "gpu-inference-platform",
    category: "gpu",
    title: "Enterprise GPU & GenAI Inference Platform",
    subtitle: "Centralized Multi-Node GPU Supercomputer from Bare Metal to Serving Runtimes",
    impactBadge: "3.8x Speedup",
    categoryBadge: "GPU & AI Infrastructure",
    problem:
      "Enterprise LLM workloads suffered from fragmented GPU allocation, severe inter-GPU communication stalls, and high P99 token latency under concurrent traffic spikes.",
    architecture:
      "Architected a centralized GPU compute platform spanning NVIDIA H100 SXM5 and L40S nodes. Implemented vLLM, LiteLLM proxy, and Triton Inference Server with continuous batching, custom KV-cache paging, and InfiniBand NDR 400G fabric. Integrated live DCGM telemetry streams to dynamically diagnose PCIe bus errors.",
    impact:
      "Delivered 3.8x LLM serving throughput speedup; diagnosed and eliminated a live 94% NVLink saturation bottleneck in production, protecting sub-20ms token latency under peak loads.",
    techStack: ["NVIDIA H100 SXM5", "vLLM", "Triton", "LiteLLM", "InfiniBand NDR 400G", "DCGM", "KV-Cache"],
  },
  {
    id: "cer-capacity-engine",
    category: "capacity",
    title: "\"CER\" Distributed Capacity Analytics Engine",
    subtitle: "Real-Time Telemetry Processing & Predictive Cluster Reservation Platform",
    impactBadge: "$1.8M/Yr Saved",
    categoryBadge: "Capacity Analytics & SRE",
    problem:
      "Operating 500+ clusters led to frequent compute over-provisioning and unpredictable resource exhaustion frontiers during seasonal traffic surges.",
    architecture:
      "Engineered 'CER', a distributed capacity analytics platform in Python processing 5,000,000+ telemetry records/hour across 60,000+ active pods. Implemented time-series anomaly detection algorithms in Redis and Prometheus to calculate real-time reservation frontiers.",
    impact:
      "Saved $1.8M annually by optimizing resource allocation and preventing compute exhaust outages before applications were impacted.",
    techStack: ["Python", "Kubernetes API", "Time-Series Analytics", "Redis", "Prometheus", "FastAPI"],
  },
  {
    id: "atlas-5g-platform",
    category: "telecom",
    title: "Atlas: Cloud-Native Deployment & Validation Engine",
    subtitle: "Carrier-Grade Deployment Fleet Across 42,000+ Edge Locations",
    impactBadge: "2 Granted Patents",
    categoryBadge: "Edge Cloud Control Plane",
    problem:
      "Deploying complex Containerized Network Functions (CNFs) across 42,000+ distributed edge nodes caused frequent runtime configuration crashes and package security drift.",
    architecture:
      "Spearheaded the design of Atlas, scaling it from a 2-person prototype to an enterprise deployment engine handling 10,000+ ops/hour. Built automated multi-stage pre-flight verification, connectivity probing, container security profiling, and Kubernetes admission controllers.",
    impact:
      "Eliminated deployment crashes across 42,000+ edge nodes (99.999% platform availability). Awarded 2 Granted US Patents (US 12,028,213 and US 11,336,525 B1).",
    techStack: ["Kubernetes", "Admission Webhooks", "Python / Go", "ArgoCD", "GitOps", "OpenShift"],
  },
  {
    id: "fleet-kubernetes",
    category: "k8s",
    title: "Fleet Kubernetes & Multi-Cluster Control Plane",
    subtitle: "Lifecycle Operations & Storage Fabric Across 52 Global Data Centers",
    impactBadge: "600+ Clusters · 99.999% SLA",
    categoryBadge: "Distributed Orchestration",
    problem:
      "Managing heterogeneous bare-metal servers, network overlays, and persistent storage lifecycles across 52 enterprise data centers without drift or operational downtime.",
    architecture:
      "Governed infrastructure architecture and automated lifecycle for 600+ Kubernetes and OpenStack clusters. Built automated PXE/IPMI server bring-up, Linux kernel tuning, Calico/Cilium CNI overlays, and multi-petabyte Ceph NVMe block/object storage pools with NetApp Trident CSI.",
    impact:
      "Standardized multi-tenant cluster management, achieving 99.999% service availability across Tier-1 enterprise telecommunications workloads.",
    techStack: ["Kubernetes Core", "OpenShift", "Ceph All-Flash NVMe", "NetApp Trident CSI", "Calico / Cilium", "Terraform"],
  },
  {
    id: "dcgm-nvlink-sre",
    category: "gpu",
    title: "Real-Time Hardware Telemetry & DCGM Auto-Remediation",
    subtitle: "Hardware-Aware Observability for Lossless Multi-GPU Fabrics",
    impactBadge: "Zero Packet Loss",
    categoryBadge: "Hardware SRE & Fabric",
    problem:
      "Silent GPU hardware faults (thermal throttling, PCIe bus degraded speeds, memory ECC errors) caused distributed training and inference jobs to hang without clear software stack traces.",
    architecture:
      "Engineered real-time GPU telemetry pipelines leveraging NVIDIA DCGM exporter and Prometheus. Built automated arbitration controllers that detect thermal anomalies and memory degradations, dynamically cordoning nodes and draining pods before unrecoverable kernel panics occur.",
    impact:
      "Maintained zero packet loss fabric and prevented multi-node GPU cascade failures across high-throughput model serving clusters.",
    techStack: ["NVIDIA DCGM", "NVLink 900 GB/s", "PCIe Gen5", "Fabric Manager", "Prometheus", "Grafana"],
  },
  {
    id: "bare-metal-hpe-ericsson",
    category: "telecom",
    title: "Bare-Metal Automation & Global Carrier Deployment",
    subtitle: "Single-Click Server Provisioning & SDN Virtualization",
    impactBadge: "HPE & Ericsson R&D",
    categoryBadge: "Bare-Metal Infrastructure",
    problem:
      "Manual bare-metal server provisioning and BIOS/firmware injection for tier-1 international telecom customers was slow, error-prone, and labor-intensive.",
    architecture:
      "Developed single-click bare-metal server installation solutions for HPE ProLiant Gen8/Gen9 and Moonshot systems using Python, IPMI, and OpenStack TripleO. Authored automated regression harnesses and upstream SDN plugins for OpenDaylight and OPNFV working groups.",
    impact:
      "Reduced datacenter server bring-up time by 70% and successfully delivered on-site international US customer datacenter turn-ups for Bell Canada.",
    techStack: ["Bare Metal", "IPMI / Redfish", "TripleO", "OpenDaylight SDN", "BGP / Cisco IOS", "Python"],
  },
];
