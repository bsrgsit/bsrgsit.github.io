export interface StackSkill {
  name: string;
  isFlagship?: boolean;
  highlightBadge?: string;
}

export interface StackGroup {
  id: string;
  category: string;
  tagline: string;
  iconName: string;
  accent: 'emerald' | 'amber' | 'blue' | 'purple';
  stat: string;
  statLabel: string;
  badge: string;
  skills: string[];
  flagshipSkills: string[];
}

export interface StackHighlightMetric {
  label: string;
  value: string;
  subtitle: string;
  icon: string;
  color: string;
}

export const stackMetrics: StackHighlightMetric[] = [
  {
    label: "GPU Supercomputing",
    value: "H100 SXM5",
    subtitle: "80GB HBM3 · NVLink 900 GB/s",
    icon: "Cpu",
    color: "emerald",
  },
  {
    label: "LLM Serving Throughput",
    value: "3.8x Speedup",
    subtitle: "vLLM & Triton Continuous Batching",
    icon: "Zap",
    color: "amber",
  },
  {
    label: "Global Cloud Fleet",
    value: "600+ Clusters",
    subtitle: "52 Data Centers · 99.999% SLA",
    icon: "Boxes",
    color: "blue",
  },
  {
    label: "NVMe Storage Fabric",
    value: "All-Flash Ceph",
    subtitle: "eBPF Cilium · SR-IOV / DPDK",
    icon: "Database",
    color: "purple",
  },
];

export const stackData: StackGroup[] = [
  {
    id: "gpu-silicon",
    category: "GPU Silicon & Hardware Accelerators",
    tagline: "Bare-metal accelerator fabrics, high-bandwidth interconnects & NUMA-aware topology",
    iconName: "Cpu",
    accent: "emerald",
    stat: "900 GB/s",
    statLabel: "NVLink 4.0 Bidir Bandwidth",
    badge: "Silicon Level 01",
    flagshipSkills: [
      "NVIDIA H100 SXM5 (80GB HBM3)",
      "DGX / HGX Multi-Node Systems",
      "InfiniBand NDR 400G & RoCEv2",
    ],
    skills: [
      "NVIDIA H100 SXM5 (80GB HBM3)",
      "NVIDIA L40S / A100 Tensor Core",
      "DGX / HGX Multi-Node Superclusters",
      "NVIDIA GPU Operator on K8s",
      "NVIDIA Fabric Manager & Subnets",
      "DCGM Telemetry & Profiling",
      "CUDA 12.x & NVLink 900 GB/s",
      "InfiniBand NDR 400G Fabrics",
      "RoCEv2 / RDMA Direct Memory Access",
      "GPUDirect Storage (GDS)",
      "NUMA Node Affinity & PCIe Gen5",
    ],
  },
  {
    id: "ai-serving",
    category: "AI Inference Engines & Model Serving",
    tagline: "Low-latency distributed token generation, KV-cache management & serving proxies",
    iconName: "Zap",
    accent: "amber",
    stat: "3.8x",
    statLabel: "Token Generation Throughput",
    badge: "Inference Level 02",
    flagshipSkills: [
      "vLLM Serving Engine",
      "Triton Inference Server",
      "PagedAttention KV-Cache",
    ],
    skills: [
      "vLLM High-Throughput Engine",
      "LiteLLM Enterprise Gateway & Router",
      "Triton Inference Server Ensemble",
      "KV-Cache Paging & PagedAttention",
      "Continuous Dynamic Batching",
      "Multi-Instance GPU (MIG) Slicing",
      "HuggingFace Transformers Pipeline",
      "PyTorch 2.x & TorchScript",
      "Ray Distributed Cluster Framework",
      "TensorRT-LLM Optimizations",
      "Quantization (AWQ, GPTQ, FP8)",
    ],
  },
  {
    id: "k8s-cloud",
    category: "Kubernetes & Cloud Control Planes",
    tagline: "Ultra-scale fleet orchestration, custom CRD controllers & bare-metal provisioning",
    iconName: "Boxes",
    accent: "blue",
    stat: "600+",
    statLabel: "Production Kubernetes Clusters",
    badge: "Orchestration Level 03",
    flagshipSkills: [
      "Kubernetes Core & Custom Controllers",
      "Red Hat OpenShift Enterprise",
      "GitOps ArgoCD Fleet Workflows",
    ],
    skills: [
      "Kubernetes Core Architecture (v1.28+)",
      "Custom CRDs & Operator SDK",
      "Mutating & Validating Webhooks",
      "Red Hat OpenShift Enterprise (OCP)",
      "OpenStack (Ironic, Cinder, Nova, Neutron)",
      "Bare-Metal PXE, IPMI & Redfish",
      "Linux Kernel Tuning & cgroups v2",
      "Terraform & Ansible Infrastructure as Code",
      "ArgoCD Multi-Cluster GitOps",
      "Cluster API (CAPI) Lifecycle",
      "Helm Charts & Kustomize Packaging",
    ],
  },
  {
    id: "storage-network",
    category: "Distributed Storage, Networking & SRE",
    tagline: "Resilient NVMe block/object fabrics, eBPF routing & 5-Nines site reliability",
    iconName: "Database",
    accent: "purple",
    stat: "99.999%",
    statLabel: "Production Fleet Five-Nines SLA",
    badge: "Infrastructure Level 04",
    flagshipSkills: [
      "Ceph All-Flash NVMe Storage",
      "Cilium eBPF & Calico CNI",
      "Incident Commander Leadership",
    ],
    skills: [
      "Ceph All-Flash NVMe (RBD & RGW)",
      "NetApp Trident CSI Provisioner",
      "Cilium eBPF Datapath & Observability",
      "Calico CNI & WireGuard Encryption",
      "BGP Leaf/Spine Clos Fabric Routing",
      "SR-IOV & DPDK Kernel-Bypass I/O",
      "Prometheus, Thanos & Grafana Stacks",
      "Incident Commander Production Leadership",
      "Chaos Engineering & Disaster Recovery",
      "Zero-Trust Network Policies",
      "Kafka Distributed Event Streaming",
    ],
  },
];

