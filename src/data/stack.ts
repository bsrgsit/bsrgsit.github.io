export interface SkillSubGroup {
  title: string;
  skills: string[];
}

export interface StackLayer {
  layerNumber: string; // e.g. "01", "02", "03", "04", "05"
  rackUnit: string;    // e.g. "U42-U36", "U35-U28", "U27-U18", "U17-U09", "U08-U01"
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  iconName: string;
  accent: 'emerald' | 'amber' | 'blue' | 'indigo' | 'purple';
  stat: string;
  statLabel: string;
  badge: string;
  flagshipSkills: string[];
  subGroups: SkillSubGroup[];
  // Backward compatibility fields
  category?: string;
  skills?: string[];
}

// Backward compatibility type alias
export type StackGroup = StackLayer;

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

export const stackLayers: StackLayer[] = [
  {
    layerNumber: "05",
    rackUnit: "U36 - U42",
    id: "layer-05-llm-serving",
    name: "LLM Inference & AI Serving Runtimes",
    subtitle: "Distributed Token Generation & Serving Proxies",
    tagline: "Ultra low-latency token generation, continuous batching engines & high-concurrency LLM routing",
    iconName: "Zap",
    accent: "amber",
    stat: "3.8x",
    statLabel: "Token Throughput Speedup",
    badge: "Layer 05 · AI Serving",
    flagshipSkills: [
      "vLLM High-Throughput Engine",
      "Triton Inference Server",
      "PagedAttention KV-Cache",
    ],
    subGroups: [
      {
        title: "High-Throughput Serving Runtimes",
        skills: [
          "vLLM Serving Engine",
          "Triton Inference Server",
          "LiteLLM Gateway & Router",
          "TensorRT-LLM Optimizations",
        ],
      },
      {
        title: "Memory & Batching Optimizations",
        skills: [
          "Continuous Dynamic Batching",
          "KV-Cache Paging & PagedAttention",
          "FP8 / AWQ / GPTQ Quantization",
          "Multi-Instance GPU (MIG) Slicing",
        ],
      },
      {
        title: "Distributed AI Frameworks",
        skills: [
          "PyTorch 2.x & TorchScript",
          "HuggingFace Transformers",
          "Ray Distributed Cluster Framework",
          "CUDA C Kernel Acceleration",
        ],
      },
    ],
  },
  {
    layerNumber: "04",
    rackUnit: "U28 - U35",
    id: "layer-04-app-orchestration",
    name: "Workload Orchestration & GitOps Automation",
    subtitle: "Declarative Infrastructure as Code & Continuous Delivery",
    tagline: "Zero-drift multi-cluster release pipelines, declarative GitOps and fleet-wide configuration management",
    iconName: "Ansible",
    accent: "indigo",
    stat: "Zero-Drift",
    statLabel: "GitOps Declarative State",
    badge: "Layer 04 · Automation",
    flagshipSkills: [
      "Ansible Fleet Automation",
      "ArgoCD Multi-Cluster GitOps",
      "Terraform Infrastructure as Code",
    ],
    subGroups: [
      {
        title: "Configuration Management & IaC",
        skills: [
          "Ansible Automation & Playbooks",
          "Terraform Infrastructure as Code",
          "Helm 3 & Kustomize Packaging",
          "Ansible Tower / AWX Workflows",
        ],
      },
      {
        title: "GitOps & Multi-Cluster Delivery",
        skills: [
          "ArgoCD ApplicationSets",
          "GitHub Actions & GitLab CI",
          "Policy Enforcement (OPA Gatekeeper)",
          "Image Scanning & Trivy / Cosign",
        ],
      },
      {
        title: "Observability & Telemetry",
        skills: [
          "Prometheus & Thanos Federation",
          "Grafana Telemetry Dashboards",
          "DCGM GPU Telemetry Exporters",
          "Alertmanager & PagerDuty On-Call",
        ],
      },
    ],
  },
  {
    layerNumber: "03",
    rackUnit: "U19 - U27",
    id: "layer-03-cloud-control",
    name: "Cloud Control Planes & Container Platforms",
    subtitle: "Enterprise Kubernetes & Bare-Metal Cloud Control",
    tagline: "Mission-critical container orchestration across 600+ enterprise clusters with custom operator lifecycles",
    iconName: "Boxes",
    accent: "blue",
    stat: "600+",
    statLabel: "Production K8s Clusters",
    badge: "Layer 03 · Cloud Platform",
    flagshipSkills: [
      "Kubernetes Core & Custom Controllers",
      "Red Hat OpenShift Enterprise (OCP)",
      "Operator SDK & Custom CRDs",
    ],
    subGroups: [
      {
        title: "Fleet Orchestration & Control",
        skills: [
          "Kubernetes Core Architecture (v1.28+)",
          "Red Hat OpenShift Enterprise (OCP)",
          "Custom CRDs & Operator SDK",
          "Mutating & Validating Webhooks",
        ],
      },
      {
        title: "Cloud Infrastructure Planes",
        skills: [
          "OpenStack (Nova, Cinder, Neutron)",
          "Cluster API (CAPI) Machine Lifecycles",
          "etcd Multi-Node Raft Consensus",
          "CoreDNS & Ingress-NGINX / Envoy",
        ],
      },
      {
        title: "Production SRE & Governance",
        skills: [
          "Incident Commander Production Leadership",
          "99.999% Five-Nines Fleet SLA",
          "Disaster Recovery & Cluster Failover",
          "Zero-Trust Network Policies",
        ],
      },
    ],
  },
  {
    layerNumber: "02",
    rackUnit: "U09 - U18",
    id: "layer-02-baremetal-storage",
    name: "Bare-Metal, Virtualization & Storage Fabrics",
    subtitle: "All-Flash NVMe Storage & Kernel-Bypass Networking",
    tagline: "Direct-to-metal automated node provisioning, high-throughput Ceph storage and eBPF network datapaths",
    iconName: "Database",
    accent: "purple",
    stat: "99.999%",
    statLabel: "Storage Fabric Reliability",
    badge: "Layer 02 · Baremetal & Fabrics",
    flagshipSkills: [
      "Ceph All-Flash NVMe Storage",
      "OpenStack Ironic Bare-Metal PXE",
      "Cilium eBPF & Calico SDN",
    ],
    subGroups: [
      {
        title: "Bare-Metal Provisioning",
        skills: [
          "OpenStack Ironic Bare-Metal Engine",
          "PXE Booting, IPMI & Redfish APIs",
          "Linux Kernel Tuning & cgroups v2",
          "GRUB, Hugepages & CPU Pinning",
        ],
      },
      {
        title: "Distributed Storage Fabrics",
        skills: [
          "Ceph All-Flash NVMe (RBD & RGW)",
          "NetApp Trident CSI Provisioner",
          "GPUDirect Storage (GDS)",
          "Kafka Distributed Event Streaming",
        ],
      },
      {
        title: "Cloud-Native SDN & Routing",
        skills: [
          "Cilium eBPF Datapath & Observability",
          "Calico CNI & WireGuard Encryption",
          "BGP Leaf/Spine Clos Fabric Routing",
          "SR-IOV & DPDK Kernel-Bypass I/O",
        ],
      },
    ],
  },
  {
    layerNumber: "01",
    rackUnit: "U01 - U08",
    id: "layer-01-physical-silicon",
    name: "Physical Silicon, Hardware Accelerators & Datacenter Networking",
    subtitle: "Multi-Node GPU Superclusters, Optical Fabrics & InfiniBand Networks",
    tagline: "High-density GPU accelerators, 400G/800G optical networking fabrics, leaf-spine Clos topologies & NUMA architecture",
    iconName: "Cpu",
    accent: "emerald",
    stat: "900 GB/s & 400G",
    statLabel: "NVLink 4.0 & InfiniBand NDR",
    badge: "Layer 01 · Physical & Network",
    flagshipSkills: [
      "NVIDIA H100 SXM5 (80GB HBM3)",
      "InfiniBand NDR 400G / 800G Fabrics",
      "DGX / HGX Multi-Node Systems",
    ],
    subGroups: [
      {
        title: "Silicon & Node Architecture",
        skills: [
          "NVIDIA H100 SXM5 (80GB HBM3)",
          "NVIDIA L40S & A100 Tensor Core",
          "DGX / HGX Multi-Node Superclusters",
          "NUMA Node Affinity & PCIe Gen5",
        ],
      },
      {
        title: "Physical Networking & Optical Fabrics",
        skills: [
          "InfiniBand NDR 400G / 800G Fabrics",
          "BGP EVPN / VXLAN Leaf-Spine Clos",
          "RoCEv2 / RDMA Direct Memory Access",
          "ConnectX-7 / BlueField-3 SmartNICs",
          "Optical Transceivers & Fiber Topologies",
        ],
      },
      {
        title: "Accelerator Interconnects & Telemetry",
        skills: [
          "CUDA 12.x & NVLink 900 GB/s",
          "InfiniBand Subnet Managers (OpenSM)",
          "NVIDIA GPU Operator & Fabric Manager",
          "DCGM Telemetry & Link Flap Diagnostics",
        ],
      },
    ],
  },
];

// Alias for backward-compatibility with existing imports
export const stackData: StackLayer[] = stackLayers.map((layer) => ({
  ...layer,
  category: layer.name,
  skills: layer.subGroups.flatMap((s) => s.skills),
}));


