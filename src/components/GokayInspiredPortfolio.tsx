'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Download,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Cpu,
  Server,
  Network,
  Zap,
  ShieldCheck,
  Activity,
  Layers,
  Cloud,
  ChevronDown,
  ChevronUp,
  Phone,
  Send,
  ArrowLeft,
  Home,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { DrawablyButton } from 'drawably/react';
import { timelineData } from '@/data/timeline';
import { caseStudiesData } from '@/data/case-studies';
import { patentsData } from '@/data/patents';
import { stackData, stackMetrics } from '@/data/stack';
import {
  VerizonBrandLogo,
  EricssonBrandLogo,
  HPEBrandLogo,
  HCLBrandLogo,
  AndhraBrandLogo,
  NVIDIALogo,
  KubernetesLogo,
  PythonLogo,
  CephLogo,
  AnsibleLogo,
} from '@/components/CompanyLogos';

type SectionId = 'overview' | 'systems' | 'experience' | 'patents' | 'stack' | 'contact';

export const GokayInspiredPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SectionId>('overview');
  const [expandedProject, setExpandedProject] = useState<string | null>('gpu-inference-platform');
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(0);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [stringPulled, setStringPulled] = useState<boolean>(false);
  const [selectedStackCategory, setSelectedStackCategory] = useState<string>('all');
  const [activeLayer, setActiveLayer] = useState<string | null>('layer-05-llm-serving');

  const toggleLayer = (layerId: string) => {
    setActiveLayer((prev) => (prev === layerId ? null : layerId));
  };

  useEffect(() => {
    const saved = localStorage.getItem('vg_theme_pref');
    const darkMode = saved ? saved === 'dark' : true;
    setIsDark(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setStringPulled(true);
    setTimeout(() => setStringPulled(false), 300);

    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('vg_theme_pref', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('vg_theme_pref', 'light');
    }
  };

  const handleOpenSection = (section: SectionId) => {
    setActiveTab(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCompanyLogo = (company: string) => {
    if (company.includes('Verizon')) return <VerizonBrandLogo className="h-5 sm:h-6 max-w-[100px] w-auto" />;
    if (company.includes('Ericsson')) return <EricssonBrandLogo className="h-8 sm:h-9 max-w-[80px] w-auto" />;
    if (company.includes('Hewlett Packard')) return <HPEBrandLogo className="h-6 sm:h-7 max-w-[105px] w-auto" />;
    if (company.includes('HCL')) return <HCLBrandLogo className="h-5 sm:h-6 max-w-[100px] w-auto" />;
    return <AndhraBrandLogo className="h-10 sm:h-11 max-w-[90px] w-auto" />;
  };

  const getStackIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <NVIDIALogo className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500 fill-amber-500" />;
      case 'Boxes':
        return <KubernetesLogo className="w-5 h-5" />;
      case 'Database':
        return <CephLogo className="w-5 h-5" />;
      case 'Ansible':
        return <AnsibleLogo className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5 text-brand-cyan" />;
    }
  };

  const navCards: { id: SectionId; label: string; icon: string; badge: string; desc: string }[] = [
    { id: 'systems', label: 'Systems', icon: '🚀', badge: '3.8x Speedup', desc: 'GPU & LLM Platforms' },
    { id: 'experience', label: 'Experience', icon: '⏱️', badge: '14 Years', desc: 'Stack Layers 01—05' },
    { id: 'patents', label: 'Patents', icon: '📜', badge: '2 US Granted', desc: 'USPTO Inventions' },
    { id: 'stack', label: 'Stack', icon: '⚙️', badge: 'H100 & K8s', desc: 'Silicon & Cloud' },
    { id: 'contact', label: 'Contact', icon: '📬', badge: 'Say Hello', desc: 'Get in Touch' },
  ];

  const allNavItems = navCards;

  return (
    <div
      className="min-h-screen transition-colors duration-300 py-3 sm:py-6 px-2.5 sm:px-6 relative bg-[#f1f8f4] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100"
    >
      {/* Dangling Pull-Cord Light Switch (Gokay.biz signature feature) */}
      <div
        onClick={toggleTheme}
        className="fixed top-0 right-2 sm:right-10 lg:right-16 z-50 flex flex-col items-center cursor-pointer group select-none"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        <div
          className="border-l-2 border-dotted border-emerald-500 transition-all duration-300"
          style={{ height: stringPulled ? '110px' : '75px' }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleTheme();
          }}
          aria-label="Toggle theme"
          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-lg transition-transform duration-200 group-hover:scale-110 active:scale-90 cursor-pointer -mt-1 flex items-center justify-center text-xs sm:text-sm border ${
            isDark
              ? 'bg-slate-800 border-slate-600 text-yellow-300 shadow-slate-900/80'
              : 'bg-amber-300 border-amber-400 text-slate-900 shadow-amber-200 ring-2 ring-amber-400/40'
          }`}
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>

      <main className="max-w-6xl mx-auto pt-1 sm:pt-2 space-y-4 sm:space-y-6">
        {/* ======================================================== */}
        {/* TOP NAVIGATION BAR: HIDDEN ON OVERVIEW, VISIBLE ON SECTIONS */}
        {/* ======================================================== */}
        <AnimatePresence>
          {activeTab !== 'overview' && (
            <motion.header
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-2 z-40"
            >
              <div className="bg-emerald-100/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl doodle-border px-3 sm:px-6 py-2 sm:py-2.5 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 md:gap-4">
                {/* Top Row on Mobile: Brand Badge + Mobile Resume Button */}
                <div className="flex items-center justify-between gap-2 shrink-0">
                  <button
                    onClick={() => handleOpenSection('overview')}
                    className="flex items-center gap-2 group cursor-pointer"
                    title="Return to Overview"
                  >
                    <div className="rounded-lg bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 font-georama font-bold px-2.5 py-1 text-xs sm:text-base shadow-sm group-hover:-rotate-3 transition-transform flex items-center gap-1.5 border border-emerald-300 dark:border-emerald-700">
                      <span>Venkata</span>
                      <span className="text-gray-900 dark:text-stone-100 font-extrabold">Guravareddy</span>
                    </div>
                  </button>

                  <div className="md:hidden flex items-center gap-2">
                    <a
                      href="Venkata_Guravareddy_Resume.pdf"
                      download
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-transform active:scale-95"
                    >
                      <Download className="w-3 h-3" />
                      <span>Resume</span>
                    </a>
                  </div>
                </div>

                {/* Center Navigation Links: Horizontally scrollable on mobile */}
                <nav aria-label="Main Navigation" className="overflow-x-auto no-scrollbar -mx-1 px-1 py-0.5">
                  <ul className="flex items-center gap-1 sm:gap-3 md:gap-5 text-xs sm:text-sm font-medium whitespace-nowrap min-w-max">
                    {allNavItems.map((item) => {
                      const isActive = activeTab === item.id;

                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => handleOpenSection(item.id)}
                            className={`group flex items-center gap-1 sm:gap-1.5 px-2 py-1 rounded-lg transition-all cursor-pointer ${
                              isActive
                                ? 'bg-emerald-600/15 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-500/30'
                                : 'text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400'
                            }`}
                          >
                            <span className="text-sm sm:text-base group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-200">
                              {item.icon}
                            </span>
                            <span className={`flow-underline ${isActive ? 'flow-active' : ''}`}>
                              {item.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                {/* Right Quick Action: Resume Download Button on Desktop */}
                <div className="hidden md:flex items-center gap-2 shrink-0">
                  <a
                    href="Venkata_Guravareddy_Resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-transform hover:scale-105"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Resume</span>
                  </a>
                </div>
              </div>
            </motion.header>
          )}
        </AnimatePresence>

        {/* ======================================================== */}
        {/* MAIN CONTENT AREA WITH SMOOTH FADE & SLIDE ANIMATIONS    */}
        {/* ======================================================== */}
        <AnimatePresence mode="wait">
          {activeTab === 'overview' ? (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-8"
            >
              {/* Centered Greeting Banner - Clean, Crisp & Ultra-Readable */}
              <div className="text-center space-y-2 mb-4 pt-2">
                <motion.h1
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-stone-100"
                >
                  Welcome!
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-800 dark:text-stone-200"
                >
                  I'm{' '}
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold flow-underline flow-underline-thick cursor-pointer">
                    Venkata Guravareddy
                  </span>
                  .
                </motion.h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
                  Principal AI & Platform Infrastructure Architect at{' '}
                  <span className="text-[#ED1C24] font-bold flow-underline cursor-pointer">Verizon</span>.
                </p>
                <hr className="border-emerald-200 dark:border-gray-700 max-w-xl mx-auto my-3" />
              </div>

              {/* Two-Column Grid: Left Profile Card + Right 5 Tilted Doodle Tiles */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Left Profile Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="md:col-span-5 flex justify-center"
                >
                  <div className="doodle-border-another p-6 bg-white dark:bg-slate-900/90 rounded-2xl shadow-lg space-y-5 text-center w-full max-w-sm">
                    {/* Monogram Avatar */}
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-emerald-400 via-teal-600 to-sky-700 p-1 shadow-md flex items-center justify-center">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-heading font-extrabold text-3xl text-white tracking-tight">
                        VG
                      </div>
                    </div>

                    <div className="space-y-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 text-left pl-2">
                      <p className="flex items-center gap-2">
                        <span>🏢</span>
                        <span className="font-semibold text-foreground">
                          Principal Platform Engineer @ Verizon
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📍</span>
                        <span>Hyderabad, India</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>⚡</span>
                        <span>14+ Years Infrastructure & GPU Systems</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>📜</span>
                        <span>2 Granted US Patents (USPTO)</span>
                      </p>
                    </div>

                    {/* Resume & Social Links */}
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-center gap-2">
                      <a
                        href="Venkata_Guravareddy_Resume.pdf"
                        download
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-transform hover:scale-105"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Resume (PDF)</span>
                      </a>

                      <a
                        href="mailto:bsrgsit@gmail.com"
                        className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition-colors"
                        title="Email Venkata"
                      >
                        <Mail className="w-4 h-4" />
                      </a>

                      <a
                        href="https://linkedin.com/in/bvguravareddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>

                      <a
                        href="https://github.com/bsrgsit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors"
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Right 5 Tilted Doodle Tiles */}
                <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
                  {navCards.map((item, idx) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * idx }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleOpenSection(item.id)}
                      className={`bg-white dark:bg-slate-900/90 p-3.5 sm:p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group md:odd:rotate-2 md:even:-rotate-2 doodle-border flex flex-col items-center justify-center space-y-1 sm:space-y-1.5 cursor-pointer w-full text-left ${
                        idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                      }`}
                    >
                      <div className="text-2xl sm:text-3xl group-hover:scale-125 group-hover:-translate-y-1 transition-transform duration-200 mb-0.5 sm:mb-1">
                        {item.icon}
                      </div>
                      <div className="font-bold text-base sm:text-lg text-gray-900 dark:text-gray-100 tracking-tight flow-underline">
                        {item.label}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold group-hover:tracking-wider transition-all duration-200">
                        {item.badge}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1">
                        {item.desc}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* "Currently" Card (Gokay.biz Signature Section) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-7 shadow-sm doodle-border-another space-y-3 sm:space-y-4"
              >
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-stone-100 tracking-tight flex items-center gap-2">
                    <span className="text-emerald-600 dark:text-emerald-400">●</span> Currently
                  </h3>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                    Active Production Focus
                  </span>
                </div>
                <div className="space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p className="flex items-start gap-2.5">
                    <span className="text-lg mt-0.5">⚡</span>
                    <span>
                      Architecting multi-node <strong>NVIDIA H100 SXM5 GPU supercomputers</strong> with vLLM & Triton serving (3.8x token throughput speedup).
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="text-lg mt-0.5">🌐</span>
                    <span>
                      Orchestrating <strong>600+ Kubernetes clusters</strong> across 52 global data centers with 99.999% SLA.
                    </span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="text-lg mt-0.5">💡</span>
                    <span>
                      Filing next-generation distributed systems, capacity forecasting, and container validation patents with the USPTO.
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            /* ======================================================== */
            /* STATE B: SECTION DETAIL VIEW (With Top Breadcrumb & Return) */
            /* ======================================================== */
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
              className="space-y-6 pt-2"
            >
              {/* Detail Content */}
              <div>
              {/* SECTION: SYSTEMS & CASE STUDIES */}
              {activeTab === 'systems' && (
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-7 shadow-sm doodle-border-another space-y-4 sm:space-y-6 animate-in fade-in-50 duration-300">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-stone-100 tracking-tight">
                      Featured Systems & Case Studies
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      Click any project below to expand the complete technical breakdown
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {caseStudiesData.map((study) => {
                      const isExpanded = expandedProject === study.id;

                      return (
                        <div
                          key={study.id}
                          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-slate-800/60 overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => setExpandedProject(isExpanded ? null : study.id)}
                            className="group w-full p-3.5 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer"
                            aria-expanded={isExpanded}
                          >
                            <div className="space-y-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                                <span className="font-heading font-bold text-sm sm:text-lg text-foreground leading-snug">
                                  <span className="flow-underline group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {study.title}
                                  </span>
                                </span>
                                <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                                  {study.impactBadge}
                                </span>
                              </div>
                              <p className="text-xs sm:text-sm text-brand-cyan font-medium line-clamp-1 sm:line-clamp-none">
                                {study.subtitle}
                              </p>
                            </div>

                            <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-white dark:bg-slate-700 border border-border flex items-center justify-center text-foreground group-hover:border-emerald-500 transition-colors">
                              {isExpanded ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-emerald-600 transition-colors" />}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="px-3.5 pb-4 sm:px-5 sm:pb-5 pt-1 border-t border-gray-200 dark:border-gray-700 space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
                                <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-border space-y-1">
                                  <strong className="text-foreground font-semibold block text-[11px] sm:text-xs uppercase font-mono">
                                    The Challenge:
                                  </strong>
                                  <p>{study.problem}</p>
                                </div>
                                <div className="p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-border space-y-1">
                                  <strong className="text-foreground font-semibold block text-[11px] sm:text-xs uppercase font-mono">
                                    Architectural Solution:
                                  </strong>
                                  <p>{study.architecture}</p>
                                </div>
                              </div>

                              <div className="p-3 sm:p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800 text-foreground">
                                <strong className="text-emerald-600 dark:text-emerald-400 font-bold block text-[11px] sm:text-xs uppercase font-mono mb-1">
                                  Verified Production Impact:
                                </strong>
                                <p>{study.impact}</p>
                              </div>

                              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                {study.techStack.map((tech, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-lg bg-gray-200 dark:bg-slate-700 text-foreground"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SECTION: WORK EXPERIENCE TIMELINE */}
              {activeTab === 'experience' && (
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-7 shadow-sm doodle-border-another space-y-4 sm:space-y-6 animate-in fade-in-50 duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-stone-100 tracking-tight">
                      14 Years Across the Stack
                    </h3>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
                      Stack Layers 01 — 05
                    </span>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {timelineData.map((item, idx) => {
                      const isExpanded = expandedTimeline === idx;

                      return (
                        <div
                          key={idx}
                          className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50/60 dark:bg-slate-800/60 overflow-hidden transition-colors"
                        >
                          <button
                            onClick={() => setExpandedTimeline(isExpanded ? null : idx)}
                            className="group w-full p-3.5 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 text-left cursor-pointer"
                            aria-expanded={isExpanded}
                          >
                            <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                              <div className="w-16 sm:w-28 h-10 sm:h-12 flex items-center justify-start shrink-0 group-hover:scale-105 transition-transform duration-200">
                                {getCompanyLogo(item.company)}
                              </div>

                              <div className="space-y-1 min-w-0">
                                <h4 className="font-heading font-bold text-sm sm:text-lg text-foreground leading-snug">
                                  <span className="flow-underline group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                    {item.role}
                                  </span>
                                </h4>
                                <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 text-[11px] sm:text-xs font-mono text-muted-foreground">
                                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{item.layerBadge}</span>
                                  <span>·</span>
                                  <span>{item.period}</span>
                                  <span className="hidden sm:inline">·</span>
                                  <span className="hidden sm:inline">{item.location}</span>
                                </div>
                              </div>
                            </div>

                            <div className="shrink-0 w-8 h-8 rounded-xl bg-white dark:bg-slate-700 border border-border flex items-center justify-center text-foreground group-hover:border-emerald-500 transition-colors">
                              {isExpanded ? <Minus className="w-4 h-4 text-emerald-600" /> : <Plus className="w-4 h-4 text-gray-500 group-hover:text-emerald-600 transition-colors" />}
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="px-3.5 pb-4 sm:px-6 sm:pb-6 pt-2 border-t border-gray-200 dark:border-gray-700 space-y-4 sm:space-y-5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                              <p className="font-medium text-gray-800 dark:text-gray-200 text-xs sm:text-sm">{item.description}</p>
                              
                              {/* Sub-Projects / Major Initiatives (if available) */}
                              {item.projects && item.projects.length > 0 ? (
                                <div className="space-y-3 sm:space-y-4 pt-1">
                                  <div className="flex items-center gap-2">
                                    <span className="text-[11px] sm:text-xs uppercase font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                                      Flagship Programs & Architectural Projects
                                    </span>
                                    <div className="h-px bg-gray-200 dark:bg-gray-700 flex-1"></div>
                                  </div>

                                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                    {item.projects.map((proj, pIdx) => (
                                      <div
                                        key={pIdx}
                                        className="group p-3.5 sm:p-5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700/80 hover:border-emerald-500/40 shadow-xs space-y-2.5 sm:space-y-3 transition-colors"
                                      >
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-1.5 border-b border-gray-100 dark:border-gray-800 pb-2">
                                          <div>
                                            <h5 className="font-bold text-gray-900 dark:text-stone-100 text-sm sm:text-base leading-snug">
                                              <span className="flow-underline group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                {proj.title}
                                              </span>
                                            </h5>
                                            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
                                              {proj.roleTitle}
                                            </p>
                                          </div>
                                          <div className="text-left sm:text-right shrink-0">
                                            <span className="inline-block text-[10px] sm:text-[11px] font-mono font-bold px-1.5 sm:px-2 py-0.5 rounded-md bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                              {proj.period}
                                            </span>
                                          </div>
                                        </div>

                                        <p className="text-xs font-mono text-gray-500 dark:text-gray-400 leading-normal">
                                          {proj.tagline}
                                        </p>

                                        <ul className="space-y-1.5 sm:space-y-2 pt-0.5">
                                          {proj.achievements.map((ach, aIdx) => (
                                            <li key={aIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300 leading-normal">
                                              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                              <span>{ach}</span>
                                            </li>
                                          ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-1.5 pt-1.5 border-t border-gray-100 dark:border-gray-800">
                                          {proj.skills.map((skill, sIdx) => (
                                            <span
                                              key={sIdx}
                                              className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                                            >
                                              {skill}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="space-y-2 pt-1">
                                  {item.keyAchievements.map((ach, aIdx) => (
                                    <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm">
                                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                                      <span>{ach}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* SECTION: GRANTED US PATENTS */}
              {activeTab === 'patents' && (
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-7 shadow-sm doodle-border-another space-y-4 sm:space-y-6 animate-in fade-in-50 duration-300">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-stone-100 tracking-tight">
                      Granted United States Patents
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      Patented distributed validation engines assigned to Verizon Patent & Licensing Inc.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-3.5 sm:gap-5">
                    {patentsData.map((patent) => (
                      <div
                        key={patent.patentNumber}
                        className="p-4 sm:p-6 rounded-2xl bg-gray-50/70 dark:bg-slate-800/70 border border-gray-200 dark:border-gray-700 space-y-2.5 sm:space-y-3 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shrink-0">
                              USPTO GRANTED
                            </span>
                            <a
                              href={patent.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-1 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400"
                            >
                              <span className="flow-underline">{patent.patentNumber}</span>
                              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            </a>
                          </div>

                          <h4 className="font-heading font-bold text-sm sm:text-base text-foreground leading-snug">
                            {patent.title}
                          </h4>

                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            {patent.description}
                          </p>
                        </div>

                        <div className="text-[11px] sm:text-xs font-mono text-muted-foreground pt-2.5 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                          <span>Granted: {patent.grantDate}</span>
                          <span className="truncate ml-2">{patent.assignee}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SECTION: HARDWARE & CLOUD STACK */}
              {activeTab === 'stack' && (
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-3.5 sm:p-6 md:p-8 shadow-sm doodle-border-another space-y-4 sm:space-y-6 animate-in fade-in-50 duration-300">
                  {/* Header with Title & Summary */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 border-b border-gray-200 dark:border-gray-700 pb-3 sm:pb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-stone-100 tracking-tight flex items-center gap-2 sm:gap-2.5">
                        <span className="p-1 sm:p-1.5 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                          <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
                        </span>
                        <span>Multi-Layered Systems & AI Architecture</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">
                        End-to-end full-stack systems engineering: Physical Silicon → Baremetal → Cloud Platform → GitOps → LLM Serving
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="hidden sm:inline">5 Infrastructure Layers · 45+ Production Capabilities</span>
                        <span className="sm:hidden">5 Layers · 45+ Capabilities</span>
                      </span>
                    </div>
                  </div>

                  {/* Top Key Architectural Metrics Ribbon - 2x2 Grid on Mobile */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
                    {stackMetrics.map((metric, mIdx) => {
                      const accentColorClasses = {
                        emerald: 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/60',
                        amber: 'border-amber-500/30 bg-amber-500/5 hover:border-amber-500/60',
                        blue: 'border-blue-500/30 bg-blue-500/5 hover:border-blue-500/60',
                        purple: 'border-purple-500/30 bg-purple-500/5 hover:border-purple-500/60',
                      }[metric.color] || 'border-border bg-gray-50/50';

                      const textAccent = {
                        emerald: 'text-emerald-600 dark:text-emerald-400',
                        amber: 'text-amber-600 dark:text-amber-400',
                        blue: 'text-blue-600 dark:text-blue-400',
                        purple: 'text-purple-600 dark:text-purple-400',
                      }[metric.color];

                      return (
                        <div
                          key={mIdx}
                          className={`p-2.5 sm:p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${accentColorClasses} space-y-1 sm:space-y-1.5`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider text-muted-foreground truncate">
                              {metric.label}
                            </span>
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white dark:bg-slate-900 border border-border flex items-center justify-center p-0.5 sm:p-1 shadow-2xs shrink-0">
                              {getStackIcon(metric.icon)}
                            </div>
                          </div>
                          <div className={`text-base sm:text-xl font-heading font-extrabold tracking-tight ${textAccent}`}>
                            {metric.value}
                          </div>
                          <p className="text-[10px] sm:text-[11px] font-mono text-gray-600 dark:text-gray-400 leading-tight line-clamp-1 sm:line-clamp-none">
                            {metric.subtitle}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Datacenter Server Rack Chassis Stack */}
                  <div className="rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/60 p-2 sm:p-4 md:p-5 shadow-xs space-y-2 sm:space-y-3">
                    {/* Server Rack Status Rail */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span className="font-bold text-foreground tracking-wide text-[11px] sm:text-xs">
                          Production Infrastructure & AI Server Stack
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-muted-foreground font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span>5 Layers · 45+ Production Capabilities</span>
                      </div>
                    </div>

                    {/* Server Rack Blades */}
                    <div className="space-y-2 sm:space-y-3">
                      {stackData.map((layer) => {
                        const isExpanded = activeLayer === layer.id;

                        const accentConfig = {
                          emerald: {
                            badge: 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
                            border: 'hover:border-emerald-500/50',
                            activeBorder: 'border-emerald-500/60 dark:border-emerald-500/50',
                            dot: 'bg-emerald-500',
                            numBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
                            led: 'bg-emerald-500 shadow-emerald-500/50',
                          },
                          amber: {
                            badge: 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30',
                            border: 'hover:border-amber-500/50',
                            activeBorder: 'border-amber-500/60 dark:border-amber-500/50',
                            dot: 'bg-amber-500',
                            numBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
                            led: 'bg-amber-500 shadow-amber-500/50',
                          },
                          blue: {
                            badge: 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30',
                            border: 'hover:border-blue-500/50',
                            activeBorder: 'border-blue-500/60 dark:border-blue-500/50',
                            dot: 'bg-blue-500',
                            numBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
                            led: 'bg-blue-500 shadow-blue-500/50',
                          },
                          indigo: {
                            badge: 'bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30',
                            border: 'hover:border-red-500/50',
                            activeBorder: 'border-red-500/60 dark:border-red-500/50',
                            dot: 'bg-red-500',
                            numBg: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/30',
                            led: 'bg-red-500 shadow-red-500/50',
                          },
                          purple: {
                            badge: 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30',
                            border: 'hover:border-purple-500/50',
                            activeBorder: 'border-purple-500/60 dark:border-purple-500/50',
                            dot: 'bg-purple-500',
                            numBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
                            led: 'bg-purple-500 shadow-purple-500/50',
                          },
                        }[layer.accent] || {
                          badge: 'bg-emerald-500/15 text-emerald-600 border-emerald-500/30',
                          border: 'hover:border-emerald-500/50',
                          activeBorder: 'border-emerald-500/60',
                          dot: 'bg-emerald-500',
                          numBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/30',
                          led: 'bg-emerald-500 shadow-emerald-500/50',
                        };

                        return (
                          <div
                            key={layer.id}
                            className={`rounded-2xl border bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 shadow-xs ${
                              isExpanded
                                ? `${accentConfig.activeBorder} shadow-md`
                                : `border-gray-200 dark:border-slate-800 ${accentConfig.border}`
                            }`}
                          >
                            {/* Server Blade Faceplate */}
                            <button
                              onClick={() => toggleLayer(layer.id)}
                              className="group w-full p-3 sm:p-5 flex items-center justify-between gap-2 sm:gap-4 text-left cursor-pointer transition-colors"
                              aria-expanded={isExpanded}
                            >
                              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                                {/* Brand Hardware Logo with Corner Layer Tag */}
                                <div className="relative shrink-0">
                                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gray-50 dark:bg-slate-800 border border-border flex items-center justify-center p-1.5 sm:p-2 shadow-2xs group-hover:scale-105 transition-transform duration-200">
                                    {getStackIcon(layer.iconName)}
                                  </div>
                                  <span className={`absolute -top-1.5 -left-1.5 text-[9px] sm:text-[10px] font-mono font-extrabold px-1 py-0.2 rounded border shadow-2xs ${accentConfig.numBg}`}>
                                    L{layer.layerNumber}
                                  </span>
                                </div>

                                <div className="space-y-0.5 min-w-0 flex-1">
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                    <h4 className="font-heading font-bold text-xs sm:text-sm md:text-base text-foreground leading-snug">
                                      <span className="flow-underline group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {layer.name}
                                      </span>
                                    </h4>
                                    <span className={`inline-flex self-start sm:self-auto text-[9px] sm:text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-md border mt-0.5 sm:mt-0 shrink-0 ${accentConfig.badge}`}>
                                      {layer.badge}
                                    </span>
                                  </div>
                                  <p className="text-[11px] sm:text-xs text-muted-foreground line-clamp-1">
                                    {layer.tagline}
                                  </p>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                                <div className="hidden sm:block text-right">
                                  <span className="text-sm font-heading font-black text-foreground block">
                                    {layer.stat}
                                  </span>
                                  <span className="text-[10px] font-mono text-muted-foreground block">
                                    {layer.statLabel}
                                  </span>
                                </div>

                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-100 dark:bg-slate-800 border border-border flex items-center justify-center text-foreground group-hover:border-emerald-500 transition-colors shadow-2xs shrink-0">
                                  {isExpanded ? (
                                    <Minus className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                  ) : (
                                    <Plus className="w-3.5 h-3.5 text-gray-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" />
                                  )}
                                </div>
                              </div>
                            </button>

                            {/* Expanded Technical Sub-Groups */}
                            {isExpanded && (
                              <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-2 border-t border-gray-200/80 dark:border-gray-700/80 space-y-3.5 sm:space-y-6 animate-in fade-in-50 duration-200">
                                {/* Mobile Stat View */}
                                <div className="sm:hidden flex items-center justify-between p-2 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-gray-200 dark:border-gray-700">
                                  <div className="flex items-center gap-1.5">
                                    <span className={`w-1.5 h-1.5 rounded-full ${accentConfig.dot}`} />
                                    <span className="text-[10px] font-mono text-muted-foreground">{layer.statLabel}</span>
                                  </div>
                                  <span className="text-xs font-heading font-bold text-foreground">{layer.stat}</span>
                                </div>

                                {/* Flagship Architectural Specializations */}
                                <div className="space-y-2">
                                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Core Architectural Focus</span>
                                  </span>
                                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {layer.flagshipSkills.map((flagship, fIdx) => (
                                      <span
                                        key={fIdx}
                                        className="text-[11px] sm:text-xs font-mono font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 shadow-xs flex items-center gap-1.5 hover:scale-102 transition-transform"
                                      >
                                        <span className="text-emerald-500">★</span>
                                        <span>{flagship}</span>
                                      </span>
                                    ))}
                                  </div>
                                </div>

                                {/* Grouped Architecture Modules */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-0.5 sm:pt-1">
                                  {layer.subGroups.map((sub, sIdx) => (
                                    <div
                                      key={sIdx}
                                      className="p-3 sm:p-4 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700/80 space-y-2 shadow-2xs"
                                    >
                                      <div className="flex items-center gap-2 border-b border-gray-100 dark:border-gray-800 pb-1.5">
                                        <span className={`w-1.5 h-1.5 rounded-full ${accentConfig.dot}`} />
                                        <h5 className="text-xs font-mono font-bold text-gray-800 dark:text-gray-200">
                                          {sub.title}
                                        </h5>
                                      </div>
                                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                                        {sub.skills.map((skill, kIdx) => {
                                          const isFlagship = layer.flagshipSkills.includes(skill);
                                          return (
                                            <span
                                              key={kIdx}
                                              className={`text-[11px] sm:text-xs font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md border transition-all duration-150 ${
                                                isFlagship
                                                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700 font-semibold'
                                                  : 'bg-gray-50 dark:bg-slate-800 text-foreground border-gray-200 dark:border-gray-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400'
                                              }`}
                                            >
                                              {skill}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* SECTION: CONTACT */}
              {activeTab === 'contact' && (
                <div className="bg-white dark:bg-slate-900/90 rounded-2xl p-4 sm:p-8 shadow-sm doodle-border-another space-y-4 sm:space-y-6 animate-in fade-in-50 duration-300">
                  <div className="border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-stone-100 tracking-tight">
                      Say Hello!
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      Open to Principal / Staff Infrastructure Architect & AI Systems Engineering leadership opportunities.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                      <p>
                        Want to collaborate on high-scale GPU infrastructure, LLM inference platforms, or distributed systems?
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 font-mono text-xs pt-1">
                      <a
                        href="mailto:bsrgsit@gmail.com"
                        className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Mail className="w-4 h-4 text-emerald-600 group-hover:scale-125 transition-transform duration-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-[9px] sm:text-[10px] text-muted-foreground block">EMAIL</span>
                          <span className="font-bold text-foreground flow-underline truncate block">bsrgsit@gmail.com</span>
                        </div>
                      </a>

                      <a
                        href="tel:+919884883957"
                        className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-emerald-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4 text-emerald-600 group-hover:scale-125 transition-transform duration-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-[9px] sm:text-[10px] text-muted-foreground block">PHONE</span>
                          <span className="font-bold text-foreground flow-underline truncate block">+91 9884883957</span>
                        </div>
                      </a>

                      <a
                        href="https://linkedin.com/in/bvguravareddy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Linkedin className="w-4 h-4 text-blue-500 group-hover:scale-125 transition-transform duration-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-[9px] sm:text-[10px] text-muted-foreground block">LINKEDIN</span>
                          <span className="font-bold text-foreground flow-underline truncate block">bvguravareddy ↗</span>
                        </div>
                      </a>

                      <a
                        href="https://github.com/bsrgsit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <Github className="w-4 h-4 text-purple-500 group-hover:scale-125 transition-transform duration-200 shrink-0" />
                        <div className="min-w-0">
                          <span className="text-[9px] sm:text-[10px] text-muted-foreground block">GITHUB</span>
                          <span className="font-bold text-foreground flow-underline truncate block">bsrgsit ↗</span>
                        </div>
                      </a>
                    </div>

                    <div className="pt-2 sm:pt-4 text-center">
                      <a
                        href="mailto:bsrgsit@gmail.com?subject=Principal%20Platform%20%26%20AI%20Infrastructure%20Opportunity&body=Hello%20Venkata,%0D%0A%0D%0AWe%20are%20interested%20in%20discussing%20a%20Principal%20Infrastructure%20Architect%20role%20with%20you."
                        className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-transform hover:scale-105 active:scale-95"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Direct Email to Venkata</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-600 dark:text-gray-400 space-y-2 pt-10 pb-6">
          <p>© 2026 Venkata Guravareddy · Principal AI & Platform Infrastructure Architect</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Crafted with passion using Next.js, Tailwind CSS & hand-drawn doodle craft.
          </p>
        </footer>
      </main>
    </div>
  );
};
