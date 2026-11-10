import React from 'react';
import { ArrowRight, Compass, Globe, Sparkles, ExternalLink } from 'lucide-react';

interface CTASectionProps {
  onOpenPortalModal: () => void;
  onDiscoverOpportunities: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onOpenPortalModal,
  onDiscoverOpportunities,
}) => {
  return (
    <section className="py-24 bg-gradient-to-br from-bg-ice via-white to-bg-lavender relative overflow-hidden border-t border-brand-navy/5">
      {/* Abstract geometric lines and soft glow */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(49, 94, 255, 0.1) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl" />
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-violet/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Editorial Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-blue/20 shadow-subtle text-brand-navy text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span>JOIN ASIA’S LARGEST SCIENCE & TECHNOLOGY FESTIVAL</span>
        </div>

        {/* Main Heading */}
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-brand-navy leading-tight mb-6">
          THE FUTURE IS WAITING. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan">
            MAKE YOUR MOVE.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl text-brand-slate max-w-2xl mx-auto font-normal leading-relaxed mb-10">
          Explore ideas, discover opportunities and take your next step into the world of innovation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenPortalModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-navy shadow-glow-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <Globe className="w-4 h-4" />
            <span>Explore Official Techfest</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </button>

          <button
            onClick={onDiscoverOpportunities}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-brand-navy bg-white hover:bg-bg-ice border-2 border-brand-blue/20 hover:border-brand-blue/40 shadow-subtle hover:shadow transition-all duration-300 hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4 text-brand-blue" />
            <span>Discover Opportunities</span>
          </button>
        </div>

        {/* Disclose Independent Status Clearly */}
        <p className="text-xs text-brand-muted max-w-xl mx-auto">
          Independent student concept designed & developed by Omkar Hattali for the Techfest Campus Ambassador Program. Official registrations are managed directly on techfest.org.
        </p>
      </div>
    </section>
  );
};
