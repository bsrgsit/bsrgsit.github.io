export interface Patent {
  patentNumber: string;
  grantDate: string;
  filingDate: string;
  applicationNumber: string;
  patentType: string;
  jurisdiction: string;
  title: string;
  assignee: string;
  inventors: string[];
  leadRole: string;
  description: string;
  keyPillars: string[];
  productionImpact: string;
  url: string;
  googlePatentsUrl: string;
}

export const patentHighlights = [
  {
    label: "USPTO Grants",
    value: "2 Issued",
    detail: "US Utility Patents",
  },
  {
    label: "Fleet Protection",
    value: "42,000+",
    detail: "Edge & Cloud Nodes",
  },
  {
    label: "Admission SLA",
    value: "100%",
    detail: "Pre-Flight Validation",
  },
  {
    label: "Runtime Failures",
    value: "Zero-Downtime",
    detail: "Automated Policy Gates",
  },
];

export const patentsData: Patent[] = [
  {
    patentNumber: "US 12,028,213 B2",
    grantDate: "July 2, 2024",
    filingDate: "February 23, 2022",
    applicationNumber: "US 17/678,610",
    patentType: "US Utility Patent",
    jurisdiction: "United States (USPTO)",
    title: "Systems and Methods for Validating a Container Network Function (CNF) for Deployment",
    assignee: "Verizon Patent and Licensing Inc.",
    leadRole: "Co-Inventor & Systems Infrastructure Architect",
    inventors: [
      "Venkata Guravareddy Butukuri",
      "Arun K. Chivukula",
      "Vishal Awasthy",
      "Harish Dhandapani",
      "Raghavender Parigi",
      "Sathyam Bollini",
      "Abhishek Kumar",
    ],
    description:
      "A distributed pre-flight admission and validation architecture executing multi-phase container verification, live network topology simulation, runtime vulnerability profiling, and automated admission control for mission-critical containerized network functions prior to cluster deployment.",
    keyPillars: [
      "Multi-Phase Pre-Flight Verification & Synthetic Probing",
      "Real-Time Container Network Topology & Connectivity Analysis",
      "Automated Admission Control & Security Policy Enforcement",
    ],
    productionImpact:
      "Prevents misconfigurations, kernel incompatibility, and network isolation failures across multi-tenant container fleets before workload scheduling.",
    url: "https://patents.justia.com/patent/12028213",
    googlePatentsUrl: "https://patents.google.com/patent/US12028213B2",
  },
  {
    patentNumber: "US 11,336,525 B1",
    grantDate: "May 17, 2022",
    filingDate: "September 15, 2020",
    applicationNumber: "US 17/021,432",
    patentType: "US Utility Patent",
    jurisdiction: "United States (USPTO)",
    title: "Automated Containerized Network Function Validation, Security Profiling, and Policy-Enforced Deployment System",
    assignee: "Verizon Patent and Licensing Inc.",
    leadRole: "Co-Inventor & Cloud Platform Architect",
    inventors: [
      "Venkata Guravareddy Butukuri",
      "Arun K. Chivukula",
      "Vishal Awasthy",
      "Harish Dhandapani",
      "Raghavender Parigi",
      "Sathyam Bollini",
      "Abhishek Kumar",
    ],
    description:
      "A comprehensive multi-stage validation and admission control engine executing package integrity verification, SR-IOV/DPDK connectivity simulation, CVE vulnerability scanning, and baremetal infrastructure compliance before rollout across edge sites.",
    keyPillars: [
      "Autonomous Admission Engine with Automated Rollback",
      "Deep Container CVE Vulnerability Scanning & Compliance Scoring",
      "High-Throughput Datapath Verification (SR-IOV / DPDK / eBPF)",
    ],
    productionImpact:
      "Eliminated deployment-induced node outages across 42,000+ edge telco cloud instances, providing deterministic container reliability at nationwide scale.",
    url: "https://patents.google.com/patent/US11336525B1",
    googlePatentsUrl: "https://patents.google.com/patent/US11336525B1",
  },
];
