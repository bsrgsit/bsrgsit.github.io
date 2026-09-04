'use client';

import React from 'react';

// Official Vector Brand Logos that adapt seamlessly to Dark & Light High-Craft Surfaces

export const VerizonBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-6 sm:h-7 w-auto' }) => (
  <img
    src="/logos/verizon_official.svg"
    alt="Verizon"
    className={`${className} object-contain`}
  />
);

export const EricssonBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-8 sm:h-9 w-auto' }) => (
  <img
    src="/logos/ericsson_official.svg"
    alt="Ericsson"
    className={`${className} object-contain dark:invert`}
  />
);

export const HPEBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-7 sm:h-8 w-auto' }) => (
  <img
    src="/logos/hpe_official.svg"
    alt="Hewlett Packard Enterprise"
    className={`${className} object-contain dark:brightness-0 dark:invert`}
  />
);

export const HCLBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-6 sm:h-7 w-auto' }) => (
  <img
    src="/logos/hcl_official.svg"
    alt="HCL Technologies"
    className={`${className} object-contain`}
  />
);

export const AndhraBrandLogo: React.FC<{ className?: string }> = ({ className = 'h-11 sm:h-12 w-auto' }) => (
  <img
    src="/logos/andhra_official.png"
    alt="Andhra University"
    className={`${className} object-contain drop-shadow-xs`}
  />
);

// Inline Icon Glyphs
export const VerizonIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4L12 20L20 4H15L12 14L9 4H4Z" fill="#ED1C24" />
  </svg>
);

export const EricssonIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 17L10 5H13L7 17H4Z" fill="#0082F0" />
    <path d="M9 19L15 7H18L12 19H9Z" fill="#002561" />
    <path d="M3 14L7 6H10L6 14H3Z" fill="#00A9F4" />
  </svg>
);

export const HPEIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="5" width="20" height="14" rx="2" stroke="#01A982" strokeWidth="2.5" fill="none" />
  </svg>
);

export const HCLIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="12" rx="3" fill="#0082C8" fillOpacity="0.2" stroke="#0082C8" strokeWidth="1.5" />
    <text x="12" y="15" textAnchor="middle" fill="#0082C8" fontSize="8" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif">HCL</text>
  </svg>
);

export const AndhraIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#F59E0B" strokeWidth="1.5" fill="#F59E0B" fillOpacity="0.15" />
    <path d="M12 7L16 11L12 15L8 11L12 7Z" fill="#F59E0B" />
  </svg>
);

// Backward-compatible exports
export const VerizonLogo = VerizonBrandLogo;
export const EricssonLogo = EricssonBrandLogo;
export const HPELogo = HPEBrandLogo;
export const HCLLogo = HCLBrandLogo;
export const AndhraLogo = AndhraBrandLogo;

export const NVIDIALogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <img src="/logos/nvidia.svg" alt="NVIDIA" className={`${className} object-contain`} />
);
export const KubernetesLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <img src="/logos/kubernetes.svg" alt="Kubernetes" className={`${className} object-contain`} />
);
export const PythonLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <img src="/logos/python.svg" alt="Python" className={`${className} object-contain`} />
);
export const CephLogo: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <img src="https://cdn.simpleicons.org/ceph/EF3A38" alt="Ceph" className={`${className} object-contain`} />
);
