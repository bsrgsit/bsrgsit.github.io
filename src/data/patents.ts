export interface Patent {
  patentNumber: string;
  grantDate: string;
  title: string;
  assignee: string;
  inventors: string[];
  description: string;
  url: string;
}

export const patentsData: Patent[] = [
  {
    patentNumber: "US 12,028,213 B2",
    grantDate: "July 2, 2024",
    title: "Systems and Methods for Validating a Container Network Function (CNF) for Deployment",
    assignee: "Verizon Patent and Licensing Inc.",
    inventors: [
      "Arun K. Chivukula",
      "Vishal Awasthy",
      "Harish Dhandapani",
      "Raghavender Parigi",
      "Sathyam Bollini",
      "Venkata Guravareddy Butukuri",
      "Abhishek Kumar",
    ],
    description:
      "A distributed validation framework executing multi-phase pre-flight verification, connectivity analysis, container security profiling, and automated admission control for containerized network functions prior to cluster deployment.",
    url: "https://patents.justia.com/patent/12028213",
  },
  {
    patentNumber: "US 11,336,525 B1",
    grantDate: "May 17, 2022",
    title: "Automated Containerized Network Function Validation, Security Profiling, and Policy-Enforced Deployment System",
    assignee: "Verizon Patent and Licensing Inc.",
    inventors: [
      "Arun K. Chivukula",
      "Vishal Awasthy",
      "Harish Dhandapani",
      "Raghavender Parigi",
      "Sathyam Bollini",
      "Venkata Guravareddy Butukuri",
      "Abhishek Kumar",
    ],
    description:
      "A comprehensive multi-stage validation and admission control engine executing package integrity, connectivity simulation, container vulnerability scanning, and infrastructure verification before deployment, eliminating runtime crashes across 42,000+ edge nodes.",
    url: "https://patents.google.com/patent/US11336525B1",
  },
];
