'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, Download, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(formData.subject || 'Engineering Leadership Opportunity');
    const mailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AInquiry:%0D%0A${encodeURIComponent(
      formData.message
    )}`;
    window.location.href = `mailto:bsrgsit@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setFormSubmitted(true);
  };

  return (
    <section className="py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl neu-card grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Direct Info */}
          <div className="space-y-6">
            <div>
              <span className="inline-block text-xs font-bold text-brand-cyan uppercase tracking-wider mb-2">
                Executive Inquiries
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-4">
                Let's Build Systems That Scale.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Open to <strong>Principal Platform / AI Infrastructure Architect</strong>, <strong>Lead GPU Systems Engineer</strong>, and <strong>Director of Platform Infrastructure</strong> opportunities worldwide.
              </p>
            </div>

            {/* Direct Channel Specifications */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-brand-cyan shrink-0 shadow-inner">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">Direct Email</span>
                  <a href="mailto:bsrgsit@gmail.com" className="font-semibold text-foreground hover:text-brand-cyan transition-colors">
                    bsrgsit@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-brand-cyan shrink-0 shadow-inner">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">Direct Phone</span>
                  <a href="tel:+919884883957" className="font-semibold text-foreground hover:text-brand-cyan transition-colors">
                    +91 9884883957
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-brand-cyan shrink-0 shadow-inner">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">LinkedIn Profile</span>
                  <a
                    href="https://linkedin.com/in/bvguravareddy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-brand-cyan transition-colors"
                  >
                    linkedin.com/in/bvguravareddy ↗
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-brand-cyan shrink-0 shadow-inner">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">GitHub Repositories</span>
                  <a
                    href="https://github.com/bsrgsit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:text-brand-cyan transition-colors"
                  >
                    github.com/bsrgsit ↗
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-brand-cyan shrink-0 shadow-inner">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-muted-foreground block font-medium">Location</span>
                  <span className="font-semibold text-foreground">
                    Hyderabad, India (Open to Global Relocation & Remote)
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Resume Download */}
            <div className="pt-4">
              <a
                href="Venkata_Guravareddy_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card hover:bg-card/80 border border-border hover:border-brand-cyan/60 text-xs font-bold text-foreground shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download Master 2-Page ATS Resume (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-6 sm:p-8 rounded-2xl bg-card/60 border border-border/60">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                  SUBJECT
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Principal GPU Infrastructure Role"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-muted-foreground mb-1.5">
                  MESSAGE / INQUIRY
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the engineering challenge, scale, or leadership scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm focus:border-brand-cyan focus:outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
