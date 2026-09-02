import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Venkata Guravareddy — Principal Platform & AI Infrastructure Architect',
  description:
    '14+ Years Systems Experience · 600+ Kubernetes Clusters · NVIDIA H100 GPU Supercomputers · 3.8x LLM Inference Speedup · Granted US Patents US 12,028,213 & US 11,336,525 B1.',
  keywords: [
    'Platform Architect',
    'GPU Infrastructure',
    'NVIDIA H100',
    'vLLM',
    'Triton Inference Server',
    'Kubernetes',
    'OpenShift',
    'Ceph NVMe',
    'Venkata Guravareddy',
    'Principal Engineer',
  ],
  authors: [{ name: 'Venkata Guravareddy' }],
  openGraph: {
    type: 'website',
    url: 'https://bsrgsit.github.io/',
    title: 'Venkata Guravareddy — Principal Platform & AI Infrastructure Architect',
    description:
      '14+ Years Systems Experience · 600+ Kubernetes Clusters · NVIDIA H100 GPU Supercomputing · 3.8x LLM Inference Speedup · Granted US Patents.',
    siteName: 'Venkata Guravareddy Portfolio',
  },
  icons: {
    icon: 'favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-brand-cyan/20 selection:text-brand-cyan">
        {children}
      </body>
    </html>
  );
}
