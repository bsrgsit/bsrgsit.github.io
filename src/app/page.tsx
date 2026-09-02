'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Metrics } from '@/components/Metrics';
import { Pillars } from '@/components/Pillars';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { CaseStudies } from '@/components/CaseStudies';
import { Patents } from '@/components/Patents';
import { StackMatrix } from '@/components/StackMatrix';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Metrics />
        <Pillars />
        <ArchitectureDiagram />
        <CaseStudies />
        <Patents />
        <StackMatrix />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
