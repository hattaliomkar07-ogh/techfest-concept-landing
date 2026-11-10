import React from 'react';
import { CompetitionItem } from '../data/competitionsData';
import { X, ExternalLink, Users, Calendar, Trophy, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CompetitionModalProps {
  competition: CompetitionItem | null;
  onClose: () => void;
}

export const CompetitionModal: React.FC<CompetitionModalProps> = ({ competition, onClose }) => {
  if (!competition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Visual Image */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden shrink-0">
          <img
            src={competition.imageUrl}
            alt={competition.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Metadata */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-brand-blue text-white inline-block mb-1">
              {competition.category}
            </span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-white">
              {competition.title}
            </h2>
            <p className="text-xs text-brand-cyan mt-0.5">
              {competition.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-brand-slate text-sm">
          {/* Overview */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2">
              Track Overview
            </h4>
            <p className="leading-relaxed text-brand-slate text-xs sm:text-sm">
              {competition.details}
            </p>
          </div>

          {/* Format & Eligibility Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-bg-soft border border-brand-navy/5">
            <div>
              <p className="text-[11px] font-mono uppercase text-brand-muted font-bold">Team Composition</p>
              <p className="font-display font-bold text-sm text-brand-navy mt-0.5 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-blue" />
                <span>{competition.teamSize}</span>
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase text-brand-muted font-bold">Eligibility</p>
              <p className="font-display font-bold text-sm text-brand-navy mt-0.5">
                {competition.eligibility}
              </p>
            </div>
            <div className="sm:col-span-2">
              <p className="text-[11px] font-mono uppercase text-brand-muted font-bold">Competition Format</p>
              <p className="text-xs text-brand-slate mt-0.5">
                {competition.format}
              </p>
            </div>
          </div>

          {/* Key Skills Evaluated */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2.5">
              Core Technical Competencies Tested
            </h4>
            <div className="flex flex-wrap gap-2">
              {competition.keySkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-bg-ice text-brand-blue border border-brand-blue/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Important Registration Note */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Official Registration Notice:</span> This concept website does not process registrations. Official team registrations, problem statements, and rulebook downloads occur exclusively on the verified Techfest portal.
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 sm:px-8 border-t border-brand-navy/10 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-brand-slate hover:text-brand-navy transition-colors"
          >
            Close Details
          </button>

          <a
            href={competition.officialRefUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-navy shadow-glow-blue transition-all"
          >
            <span>View on Official Techfest Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

