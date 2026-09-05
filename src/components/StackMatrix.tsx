'use client';

import React from 'react';
import { stackData } from '@/data/stack';
import { Cpu, Zap, Boxes, Database } from 'lucide-react';
import { NVIDIALogo, KubernetesLogo, PythonLogo, CephLogo } from '@/components/CompanyLogos';

export const StackMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <NVIDIALogo className="w-5 h-5" />;
      case 'Zap':
        return <PythonLogo className="w-5 h-5" />;
      case 'Boxes':
        return <KubernetesLogo className="w-5 h-5" />;
      case 'Database':
        return <CephLogo className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
    }
  };

  return (
    <section className="py-16 border-b border-border/50" id="stack">
      <div className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-border/40">
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#818cf8]" />
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Production Hardware Silicon & Cloud Stack
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Enterprise hardware platforms, inference runtimes, container orchestrators, and SRE tooling operated in production.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackData.map((group, idx) => (
            <div key={idx} className="p-6 rounded-3xl neu-card space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 pb-3 border-b border-border/40 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-secondary/80 light:bg-slate-100 border border-border/80 flex items-center justify-center shrink-0 p-2 shadow-sm">
                    {getIcon(group.iconName)}
                  </div>
                  <h3 className="font-heading font-bold text-sm text-foreground leading-tight">
                    {group.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.subGroups.flatMap((s) => s.skills).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-secondary text-foreground/90 border border-border/60 hover:border-brand-cyan/40 hover:text-brand-cyan transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
