'use client';

import React, { useState, useEffect } from 'react';
import { Download, Moon, Sun, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    // Check saved theme
    const saved = localStorage.getItem('vg_theme_pref');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'light' || (!saved && !prefersDark)) {
      document.body.classList.add('light-mode');
      setIsLightMode(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isLightMode;
    setIsLightMode(next);
    if (next) {
      document.body.classList.add('light-mode');
      localStorage.setItem('vg_theme_pref', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('vg_theme_pref', 'dark');
    }
  };

  const navLinks = [
    { label: 'Overview', href: '#top' },
    { label: 'Specializations', href: '#specializations' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Patents', href: '#patents' },
    { label: 'Stack', href: '#stack' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070b14]/90 dark:bg-[#070b14]/90 light:bg-white/90 backdrop-blur-xl border-b border-border/60 py-3 shadow-lg'
          : 'bg-transparent py-4 border-b border-border/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-cyan to-blue-600 flex items-center justify-center font-heading font-extrabold text-slate-950 text-base shadow-[0_0_15px_rgba(56,189,248,0.35)] group-hover:scale-105 transition-transform">
              VG
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-foreground group-hover:text-brand-cyan transition-colors">
                Venkata Guravareddy
              </span>
              <span className="text-xs text-muted-foreground font-medium hidden sm:inline">
                Principal Platform & AI Systems Architect
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-card/40 p-1.5 rounded-full border border-border/50 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-card/80 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2.5">
            <a
              href="Venkata_Guravareddy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-card/80 hover:bg-card border border-border hover:border-brand-cyan/60 text-xs font-semibold text-foreground shadow-sm transition-all hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Resume (PDF)</span>
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="w-9 h-9 rounded-lg bg-card/80 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand-cyan/40 transition-colors"
            >
              {isLightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
              className="lg:hidden w-9 h-9 rounded-lg bg-card/80 border border-border flex items-center justify-center text-foreground"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-card border border-border shadow-2xl space-y-2 animate-in fade-in-50 slide-in-from-top-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
