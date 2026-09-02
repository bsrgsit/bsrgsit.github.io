'use client';

import React from 'react';

// Exact Official Vector SVGs with Tight Bounding Boxes for Large Prominent Display

export const VerizonLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <img
    src="/logos/verizon_2024.svg"
    alt="Verizon"
    className={`${className} object-contain`}
  />
);

export const EricssonLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <img
    src="/logos/ericsson.svg"
    alt="Ericsson"
    className={`${className} object-contain`}
  />
);

export const HPELogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <img
    src="/logos/hpe.svg"
    alt="Hewlett Packard Enterprise"
    className={`${className} object-contain`}
  />
);

export const HCLLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <img
    src="/logos/hcl.svg"
    alt="HCL Technologies"
    className={`${className} object-contain`}
  />
);

export const AndhraLogo: React.FC<{ className?: string }> = ({ className = 'h-7 w-auto' }) => (
  <img
    src="/logos/andhra.svg"
    alt="Andhra University"
    className={`${className} object-contain`}
  />
);

export const NVIDIALogo: React.FC<{ className?: string }> = ({ className = 'h-6 w-auto' }) => (
  <img
    src="/logos/nvidia.svg"
    alt="NVIDIA"
    className={`${className} object-contain`}
  />
);

export const KubernetesLogo: React.FC<{ className?: string }> = ({ className = 'h-6 w-auto' }) => (
  <img
    src="/logos/kubernetes.svg"
    alt="Kubernetes"
    className={`${className} object-contain`}
  />
);

export const PythonLogo: React.FC<{ className?: string }> = ({ className = 'h-6 w-auto' }) => (
  <img
    src="/logos/python.svg"
    alt="Python"
    className={`${className} object-contain`}
  />
);
