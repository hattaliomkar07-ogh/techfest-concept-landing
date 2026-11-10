import React from 'react';
import { ArrowUp, ExternalLink, Sparkles, Heart } from 'lucide-react';

interface FooterSectionProps {
  onOpenPortalModal: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenPortalModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About the Festival', href: '#about' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Workshops & Learning', href: '#workshops' },
    { name: 'Innovation Showcase', href: '#showcase' },
    { name: 'Why Participate', href: '#why-participate' },
    { name: 'Community Initiatives', href: '#initiatives' },
  ];

  const festivalDomains = [
    { name: 'Robotics & Autonomy', href: '#competitions' },
    { name: 'Artificial Intelligence', href: '#workshops' },
    { name: 'Coding & Algorithms', href: '#competitions' },
    { name: 'Space & Deep Tech', href: '#showcase' },
    { name: 'Technoholix Nights', href: '#showcase' },
    { name: 'Ignite Accreditation', href: '#initiatives' },
  ];

  return (
    <footer className="bg-white border-t border-brand-navy/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-brand-navy/10">
          {/* Brand & Creator Credit Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white font-display font-extrabold text-xl shadow-glow-blue">
                  T
                </div>
                <div>
                  <span className="font-display font-extrabold text-2xl tracking-tight text-brand-navy">
                    TECHFEST
                  </span>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-brand-blue font-bold">
                    Independent Concept Design
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal mb-6 max-w-sm">
                An independent website concept designed and developed by Omkar Hattali for the Techfest Campus Ambassador Program’s Ideate Landing Page task.
              </p>

              {/* Creator Card */}
              <div className="p-4 rounded-2xl bg-bg-soft border border-brand-navy/10 max-w-sm">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-navy mb-1">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  <span>Creator Attribution</span>
                </div>
                <p className="text-xs font-semibold text-brand-blue">
                  Designed and Developed by Omkar Hattali
                </p>
                <p className="text-[11px] text-brand-muted mt-0.5">
                  Created as an independent project for the Techfest Campus Ambassador Program.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <p className="font-display font-bold text-sm text-brand-navy uppercase tracking-wider mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-brand-slate hover:text-brand-blue transition-colors font-normal inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillars & Domains Column */}
          <div className="lg:col-span-2">
            <p className="font-display font-bold text-sm text-brand-navy uppercase tracking-wider mb-4">
              Focus Tracks
            </p>
            <ul className="space-y-2.5">
              {festivalDomains.map((domain) => (
                <li key={domain.name}>
                  <a
                    href={domain.href}
                    className="text-xs sm:text-sm text-brand-slate hover:text-brand-blue transition-colors font-normal inline-block"
                  >
                    {domain.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Verification Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <p className="font-display font-bold text-sm text-brand-navy uppercase tracking-wider mb-4">
                Official Portal
              </p>
              <p className="text-xs text-brand-slate leading-relaxed mb-4">
                For official registrations, rules, and schedules, visit the verified portal.
              </p>
              <button
                onClick={onOpenPortalModal}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-brand-navy bg-bg-ice hover:bg-brand-blue/10 border border-brand-blue/20 transition-all flex items-center justify-center gap-1.5"
              >
                <span>techfest.org</span>
                <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
              </button>
            </div>

            {/* Back to Top */}
            <div className="mt-6 pt-4">
              <button
                onClick={scrollToTop}
                className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-brand-slate hover:text-brand-navy flex items-center justify-center gap-2 transition-colors"
                aria-label="Back to top"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright Sub-Footer */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-brand-muted">
          <div className="max-w-3xl leading-relaxed">
            <p className="font-medium text-brand-slate">
              <span className="font-bold text-brand-navy">Independent Student Website Concept:</span> This project is designed and developed independently by <span className="font-bold text-brand-navy">Omkar Hattali</span> for the Techfest Campus Ambassador Program. It is not an official Techfest website, nor is it endorsed or operated by Techfest, IIT Bombay. Techfest and IIT Bombay are used solely as educational and design references.
            </p>
          </div>

          <div className="shrink-0 text-right">
            <p className="text-[11px] font-mono">
              © {new Date().getFullYear()} Omkar Hattali. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
