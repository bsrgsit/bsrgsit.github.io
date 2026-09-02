'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Download, Send, Sparkles } from 'lucide-react';
import { DrawablyButton } from 'drawably/react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || 'Principal Infrastructure Opportunity');
    const mailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AInquiry:%0D%0A${encodeURIComponent(
      formData.message
    )}`;
    window.location.href = `mailto:bsrgsit@gmail.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <section className="py-12" id="contact">
      <div className="space-y-6">
        <div className="flex items-center gap-2 pb-3 border-b border-border/40">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <h2 className="font-heading font-extrabold text-lg text-foreground tracking-tight">
            Contact & Collaboration
          </h2>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-card/80 border border-border/80 grid grid-cols-1 md:grid-cols-2 gap-8 shadow-xl">
          {/* Direct Channels */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-2xl text-foreground">
              Let's build systems that scale.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Open to Principal / Staff Platform Infrastructure Architect, Lead GPU Systems Engineer, and AI Compute Leadership opportunities worldwide.
            </p>

            <div className="space-y-2.5 pt-2 text-xs font-mono">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <a href="mailto:bsrgsit@gmail.com" className="font-bold text-foreground hover:text-brand-cyan">
                  bsrgsit@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+919884883957" className="font-bold text-foreground hover:text-emerald-400">
                  +91 9884883957
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="https://linkedin.com/in/bvguravareddy" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-blue-400">
                  linkedin.com/in/bvguravareddy ↗
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="https://github.com/bsrgsit" target="_blank" rel="noopener noreferrer" className="font-bold text-foreground hover:text-purple-400">
                  github.com/bsrgsit ↗
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-xs focus:border-brand-cyan focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                required
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-xs focus:border-brand-cyan focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                required
                placeholder="Inquiry / Scope..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-xs focus:border-brand-cyan focus:outline-none transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-md transition-all hover:scale-[1.01]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Dispatch Message via Email</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
