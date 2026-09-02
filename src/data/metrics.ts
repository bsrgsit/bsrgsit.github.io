export interface Metric {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
  highlight?: boolean;
}

export const metricsData: Metric[] = [
  {
    value: "14+",
    suffix: "Years",
    label: "Systems Leadership",
    sublabel: "Physical Silicon lifecycle to Distributed LLM Serving",
    highlight: true,
  },
  {
    value: "600+",
    suffix: "Clusters",
    label: "Kubernetes Fleet",
    sublabel: "Multi-tenant control planes across 52 global data centers",
  },
  {
    value: "42k+",
    suffix: "Nodes",
    label: "Edge Cloud Footprint",
    sublabel: "Distributed nodes governed with 99.999% platform availability",
  },
  {
    value: "3.8x",
    suffix: "Speedup",
    label: "LLM Serving Throughput",
    sublabel: "Continuous batching & custom KV-cache optimization",
    highlight: true,
  },
  {
    value: "$1.8M",
    suffix: "/ Year",
    label: "Operational Savings",
    sublabel: "Engineered via CER distributed predictive capacity engine",
    highlight: true,
  },
  {
    value: "2",
    suffix: "US Patents",
    label: "Granted Inventions",
    sublabel: "USPTO granted for distributed container validation engines",
  },
];
