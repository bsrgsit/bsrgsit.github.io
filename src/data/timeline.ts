export interface ProjectHighlight {
  title: string;
  roleTitle: string;
  period: string;
  tagline: string;
  achievements: string[];
  skills: string[];
}

export interface TimelineItem {
  layerBadge: string;
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
  keyAchievements: string[];
  projects?: ProjectHighlight[];
}

export const timelineData: TimelineItem[] = [
  {
    layerBadge: "STACK LAYER 05 · APPS, GPU SUPERCOMPUTING & MULTI-CLOUD FLEET",
    period: "2017 — PRESENT",
    location: "Hyderabad, India",
    role: "Principal Engineer — AI & Cloud Infrastructure",
    company: "Verizon Wireless",
    description:
      "Principal infrastructure architect leading 3 core multi-year platform programs: Enterprise GPU Inference Supercomputing, Fleet Kubernetes & Capacity Analytics, and the Atlas 5G Cloud-Native Edge Platform spanning 52 data centers and 42,000+ edge locations.",
    keyAchievements: [
      "Architected enterprise GPU inference platforms with NVIDIA H100 & L40S, boosting throughput by 3.8x with vLLM & Triton.",
      "Engineered the 'CER' capacity analytics engine in Python processing 5M+ records/hr across 500+ clusters ($1.8M/yr savings).",
      "Architected and scaled the Atlas 5G cloud-native deployment platform across 42,000+ edge nodes (99.999% availability).",
      "Awarded 2 Granted US Patents (US 12,028,213 & US 11,336,525 B1) and 20+ Verizon Spotlight Awards.",
    ],
    projects: [
      {
        title: "Enterprise GPU Supercomputing & GenAI Inference Platform",
        roleTitle: "Lead Architect — Enterprise GPU Infrastructure",
        period: "2023 — PRESENT",
        tagline: "Bare-Metal to Serving Runtimes · NVIDIA H100/L40S · InfiniBand NDR 400G",
        achievements: [
          "Bare-Metal to Model Serving Architecture: Designed and provisioned centralized multi-node GPU clusters (NVIDIA H100 SXM5 and L40S) utilizing NVIDIA GPU Operator, DCGM telemetry, and NVIDIA Fabric Manager across high-speed InfiniBand/RDMA fabric.",
          "High-Throughput Model Serving: Integrated vLLM, LiteLLM proxy, and Triton Inference Server with custom KV-cache optimization, continuous batching, and dynamic multi-tenant GPU slicing, achieving a 3.8x inference throughput boost under strict P99 latency SLOs.",
          "Hardware SRE & Live Bottleneck Resolution: Investigated and resolved PCIe Gen5 bus errors, XID exceptions, and inter-GPU fabric saturation; diagnosed and mitigated a live 94% NVLink saturation bottleneck in production via real-time DCGM telemetry.",
          "Observability & Platform Governance: Instituted full-stack Prometheus/Grafana monitoring tracking GPU SM utilization, tensor pipe stalls, and memory thermal throttling (99.99% uptime); authored org-wide GPU scheduling runbooks (taints/tolerations, priority classes) for 40+ engineering teams.",
        ],
        skills: ["NVIDIA H100", "L40S", "vLLM", "Triton", "LiteLLM", "InfiniBand / RDMA", "DCGM", "NVLink", "CUDA"],
      },
      {
        title: "Fleet Kubernetes & \"CER\" Distributed Capacity Analytics Engine",
        roleTitle: "Staff Platform Engineer — Fleet Infrastructure & Capacity Engine",
        period: "2021 — 2024",
        tagline: "600+ Multi-Tenant Clusters · 52 Data Centers · 5M+ Telemetry Events/Hour",
        achievements: [
          "Planet-Scale Multi-Site Fleet Operations: Governed infrastructure architecture and lifecycle automation for 600+ Kubernetes and OpenStack clusters across 52 geographic data centers supporting business-critical microservices and 5G network functions.",
          "Proprietary 'CER' Capacity Engine: Designed and built Verizon's distributed capacity analytics and real-time reservation engine in Python, processing 5,000,000+ telemetry records/hour across 500+ clusters and 60,000+ pods; eliminated compute exhaust outages and saved $1.8M annually in over-provisioning.",
          "Bare-Metal to Ingress Lifecycle: Automated firmware updates, IPMI/Redfish power cycling, CNI overlay network tuning (Calico/Cilium), and persistent distributed storage lifecycle using Ceph NVMe and NetApp Trident CSI plugins.",
          "Multi-Tenant Isolation & Tooling: Implemented fine-grained isolation via namespace quotas, pod disruption budgets, and custom admission webhooks; built Python, Go, and Terraform toolchains for automated OS patching and cluster health self-healing.",
        ],
        skills: ["Kubernetes Core", "Python", "Go", "Ceph NVMe", "NetApp Trident", "Calico / Cilium", "Terraform", "Prometheus"],
      },
      {
        title: "Atlas: 5G Cloud-Native Network Function (CNF) Deployment Platform",
        roleTitle: "Platform Lead — Atlas Edge Cloud Control Plane",
        period: "2017 — 2021",
        tagline: "Scaled from 2-Person Prototype to 42,000+ Edge Nodes · 10,000+ Ops/Hour",
        achievements: [
          "Architected & Scaled Atlas Platform: Spearheaded architectural design and implementation of Atlas, Verizon's enterprise 5G CNF deployment, admission control, and validation engine. Scaled the platform from an initial 2-person prototype to a distributed fleet operating across 42,000+ edge locations handling 10,000+ operations/hour.",
          "Granted US Patent (US11336525B1): Awarded US Patent for automated multi-stage CNF pre-flight validation, container security profiling, and Kubernetes admission webhooks; displaced legacy commercial vendor software enterprise-wide.",
          "Zero-Downtime Carrier Rollouts: Engineered automated canary rollout strategies and rollback gates for telco workloads, delivering 99.999% platform availability across nationwide edge nodes.",
          "Team Leadership & Mentorship: Scaled and mentored the cross-functional engineering team from 2 to 14 engineers, governing architectural RFC reviews, GitOps CI/CD pipelines, code quality standards, and SRE operational practices.",
        ],
        skills: ["Kubernetes", "Admission Webhooks", "Python / Go", "ArgoCD", "GitOps", "OpenShift", "Carrier-Grade SRE"],
      },
    ],
  },
  {
    layerBadge: "STACK LAYER 04 · SDN & NETWORK VIRTUALIZATION LAYER",
    period: "2016 — 2017",
    location: "Bangalore, India",
    role: "Senior Software Engineer",
    company: "Ericsson R&D",
    description:
      "Represented Ericsson in open-source OPNFV SDNVPN projects; built modular Python microservices and automated CI/CD validation harnesses for Virtualized Network Function (VNF) lifecycle orchestration integrated with OpenStack and OpenDaylight SDN controllers.",
    keyAchievements: [
      "Engineered automated VNF lifecycle pipelines integrated with OpenStack and SDN controllers.",
      "Contributed upstream to Linux Foundation OPNFV collaborative projects.",
    ],
  },
  {
    layerBadge: "STACK LAYER 03 · BARE-METAL HARDWARE & CLOUD LAYER",
    period: "2014 — 2016",
    location: "Bangalore, India",
    role: "Software Engineer",
    company: "Hewlett Packard Enterprise (HPE R&D)",
    description:
      "Automated server provisioning, BIOS/firmware injection, and configuration management for HPE ProLiant Gen8/Gen9 rack servers and Moonshot systems using Python, IPMI, and OpenStack TripleO.",
    keyAchievements: [
      "Developed single-click bare-metal server deployment automation reducing bring-up times by 70%.",
      "Successfully delivered on-site international US customer datacenter turn-ups for Bell Canada.",
    ],
  },
  {
    layerBadge: "STACK LAYER 02 · PHYSICAL NETWORKING & PROTOCOL FABRIC",
    period: "2012 — 2014",
    location: "Chennai, India",
    role: "Software Engineer",
    company: "HCL Technologies (Cisco Practice)",
    description:
      "Authored automated regression test suites in Python for Cisco IOS and IOS-XE network operating systems; investigated customer-reported defects with Cisco TAC and built physical router/switch testbed topologies.",
    keyAchievements: [
      "Engineered automated test harnesses for BGP, OSPF, and Layer 2/3 switching protocols.",
      "Partnered with Cisco TAC to root-cause and resolve complex customer-reported network OS bugs.",
    ],
  },
  {
    layerBadge: "STACK LAYER 01 · COMPUTER SCIENCE & SYSTEMS FOUNDATIONS",
    period: "2008 — 2012",
    location: "Visakhapatnam, India",
    role: "B.Tech in Computer Science & Engineering (Academic Gold Medalist)",
    company: "Andhra University",
    description:
      "Graduated as Department Valedictorian with Highest Distinction Academic Gold Medal. Specialized in Computer Networks, Operating System Internals, TCP/IP Protocol Stack, and Distributed Computing fundamentals.",
    keyAchievements: [
      "Awarded University Academic Gold Medal for Rank 1 Academic Distinction.",
      "Published research and built foundational mastery in distributed algorithms and network routing.",
    ],
  },
];
