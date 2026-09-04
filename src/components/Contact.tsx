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
    <section className="py-16" id="contact">
      <div className="space-y-8">
        <div className="flex items-center gap-2 pb-2 border-b border-border/40">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_8px_#38bdf8]" />
          <div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Executive Contact & Collaboration
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Direct channels for Principal / Staff Platform Infrastructure Architect & AI Systems Engineering leadership opportunities.
            </p>
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl neu-card grid grid-cols-1 md:grid-cols-2 gap-10 shadow-2xl">
          {/* Direct Channels */}
          <div className="space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-2xl text-foreground">
                Let's build systems that scale.
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to <strong>Principal / Staff Platform Infrastructure Architect</strong>, <strong>Lead GPU Systems Engineer</strong>, and <strong>Director of Platform Engineering</strong> roles worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <a
                href="mailto:bsrgsit@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset hover:border-brand-cyan/50 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px]">EMAIL</span>
                  <span className="font-bold text-foreground">bsrgsit@gmail.com</span>
                </div>
              </a>

              <a
                href="tel:+919884883957"
                className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset hover:border-emerald-400/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px]">PHONE</span>
                  <span className="font-bold text-foreground">+91 9884883957</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/bvguravareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset hover:border-blue-400/50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px]">LINKEDIN</span>
                  <span className="font-bold text-foreground">bvguravareddy ↗</span>
                </div>
              </a>

              <a
                href="https://github.com/bsrgsit"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl neu-inset hover:border-purple-400/50 transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400 shrink-0" />
                <div>
                  <span className="text-muted-foreground block text-[10px]">GITHUB</span>
                  <span className="font-bold text-foreground">bsrgsit ↗</span>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 p-6 sm:p-7 rounded-2xl neu-inset">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Vance"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-xs focus:border-brand-cyan focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1">
                YOUR EMAIL
              </label>
              <input
                type="email"
                required
                placeholder="e.g. alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-xs focus:border-brand-cyan focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground mb-1">
                MESSAGE / OPPORTUNITY SCOPE
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe the engineering challenge, scale, or leadership scope..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-card border border-border text-foreground text-xs focus:border-brand-cyan focus:outline-none transition-colors"
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
