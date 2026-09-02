export interface StackGroup {
  category: string;
  iconName: string;
  skills: string[];
}

export const stackData: StackGroup[] = [
  {
    category: "GPU Silicon & Hardware Accelerators",
    iconName: "Cpu",
    skills: [
      "NVIDIA H100 SXM5 (80GB HBM3)",
      "NVIDIA L40S / A100",
      "DGX / HGX Multi-Node Systems",
      "NVIDIA GPU Operator",
      "NVIDIA Fabric Manager",
      "DCGM Telemetry Profiling",
      "CUDA & NVLink 900 GB/s",
      "InfiniBand NDR 400G",
      "RoCEv2 / RDMA",
    ],
  },
  {
    category: "AI Inference Engines & Model Serving",
    iconName: "Zap",
    skills: [
      "vLLM Serving Runtime",
      "LiteLLM High-Throughput Proxy",
      "Triton Inference Server",
      "KV-Cache Paging Optimization",
      "Continuous Dynamic Batching",
      "Multi-Instance GPU (MIG) Slicing",
      "HuggingFace Transformers",
      "PyTorch & Ray Distributed",
    ],
  },
  {
    category: "Kubernetes & Cloud Control Planes",
    iconName: "Boxes",
    skills: [
      "Kubernetes Core Architecture",
      "Custom CRDs & Controllers",
      "Mutating / Validating Webhooks",
      "Red Hat OpenShift",
      "OpenStack (Ironic, Cinder, Nova)",
      "Bare-Metal (PXE, IPMI, Redfish)",
      "Linux Kernel Optimization",
      "Terraform & Ansible IaC",
      "ArgoCD & GitOps Workflows",
    ],
  },
  {
    category: "Distributed Storage, Networking & SRE",
    iconName: "Database",
    skills: [
      "Ceph All-Flash NVMe (Block/Object)",
      "NetApp Trident CSI",
      "Calico / Cilium CNI (eBPF)",
      "BGP Leaf/Spine Routing",
      "SR-IOV / DPDK High-Speed I/O",
      "Prometheus & Grafana Alerting",
      "Incident Commander Leadership",
      "Site Reliability Engineering (SRE)",
    ],
  },
];
