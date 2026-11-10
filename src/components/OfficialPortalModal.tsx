import React from 'react';
import { X, ExternalLink, ShieldCheck, Globe, Trophy, BookOpen, Users, Sparkles } from 'lucide-react';

interface OfficialPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OfficialPortalModal: React.FC<OfficialPortalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const officialLinks = [
    {
      title: 'Official Techfest Portal',
      url: 'https://techfest.org',
      description: 'Official schedule, passes, accommodation, and festival guidelines.',
      icon: Globe,
      badge: 'Main Portal',
    },
    {
      title: 'Official Competitions Portal',
      url: 'https://techfest.org/competitions',
      description: 'Team registrations, official rulebooks, and competition submission tracks.',
      icon: Trophy,
      badge: 'Registrations',
    },
    {
      title: 'Official Workshops Portal',
      url: 'https://techfest.org/workshops',
      description: 'Workshop admissions, hands-on syllabus, and certificate passes.',
      icon: BookOpen,
      badge: 'Bootcamps',
    },
    {
      title: 'Campus Ambassador Portal',
      url: 'https://techfest.org/ca',
      description: 'National student outreach, college ambassador portal, and tasks.',
      icon: Users,
      badge: 'Ambassadors',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-navy via-brand-navy to-brand-blue text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Independent Student Project Information</span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
            Official Techfest Portal Reference
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-lg">
            Direct navigation to official portals hosted by Techfest, IIT Bombay.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-brand-slate text-sm">
          {/* Transparency Disclaimer Box */}
          <div className="p-4 rounded-2xl bg-bg-ice border border-brand-blue/20 text-xs leading-relaxed">
            <div className="flex items-center gap-2 text-brand-navy font-bold mb-1">
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
              <span>Project Transparency & Ownership</span>
            </div>
            <p className="text-brand-slate">
              This website is an independent concept designed and developed by <span className="font-bold text-brand-navy">Omkar Hattali</span> as part of the Techfest Campus Ambassador Program's Ideate Landing Page task. It is not an official site, nor does it process official registrations. All trademarks and identities belong to their respective owners.
            </p>
          </div>

          {/* Official Portals List */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-3">
              Official Verified Destinations
            </h4>
            <div className="space-y-3">
              {officialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-bg-soft hover:bg-white border border-brand-navy/5 hover:border-brand-blue/40 hover:shadow-card transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-brand-navy/10 flex items-center justify-center text-brand-blue shadow-subtle group-hover:bg-brand-blue group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-display font-bold text-sm text-brand-navy group-hover:text-brand-blue transition-colors">
                            {link.title}
                          </p>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-brand-muted">
                            {link.badge}
                          </span>
                        </div>
                        <p className="text-xs text-brand-muted mt-0.5">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-brand-muted group-hover:text-brand-blue transition-colors shrink-0 ml-3" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-8 border-t border-brand-navy/10 bg-slate-50 flex items-center justify-between">
          <span className="text-[11px] text-brand-muted">
            Independent student concept by Omkar Hattali
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-bold text-white bg-brand-navy hover:bg-brand-blue transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

