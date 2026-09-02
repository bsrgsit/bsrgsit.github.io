export interface TimelineItem {
  layerBadge: string;
  period: string;
  location: string;
  role: string;
  company: string;
  description: string;
  keyAchievements: string[];
}

export const timelineData: TimelineItem[] = [
  {
    layerBadge: "STACK LAYER 05 · APPS, GPU SUPERCOMPUTING & MULTI-CLOUD FLEET",
    period: "2017 — PRESENT",
    location: "Hyderabad, India",
    role: "Principal Engineer — AI & Cloud Infrastructure",
    company: "Verizon Wireless",
    description:
      "Lead architect for enterprise centralized GPU inference compute platforms (NVIDIA H100 SXM5 / L40S, vLLM, Triton, 3.8x throughput speedup) and multi-cluster fleet infrastructure for 600+ Kubernetes clusters across 52 global data centers.",
    keyAchievements: [
      "Architected the 'CER' capacity analytics engine processing 5M+ records/hr in Python ($1.8M/yr savings).",
      "Architected the Atlas 5G cloud-native deployment platform across 42,000+ edge nodes (99.999% SLA).",
      "Awarded 2 Granted US Patents (US 12,028,213 and US 11,336,525 B1) and 20+ Verizon Spotlight Awards.",
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
