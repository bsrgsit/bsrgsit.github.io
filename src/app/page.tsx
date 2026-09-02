'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroConceptB } from '@/components/HeroConceptB';
import { MainDossierConceptB } from '@/components/MainDossierConceptB';
import { Timeline } from '@/components/Timeline';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-brand-cyan/20 selection:text-brand-cyan">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2">
        <HeroConceptB />
        <MainDossierConceptB />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
