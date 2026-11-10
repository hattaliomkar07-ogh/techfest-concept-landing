import React from 'react';
import { WorkshopItem } from '../data/workshopsData';
import { X, ExternalLink, Clock, Award, CheckCircle2, ShieldCheck, BookOpen } from 'lucide-react';

interface WorkshopModalProps {
  workshop: WorkshopItem | null;
  onClose: () => void;
}

export const WorkshopModal: React.FC<WorkshopModalProps> = ({ workshop, onClose }) => {
  if (!workshop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div
          className="p-6 sm:p-8 relative shrink-0 text-white"
          style={{
            background: `linear-gradient(135deg, #142A4C 0%, ${workshop.accentColor} 100%)`,
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white inline-block mb-2">
            {workshop.domain} • {workshop.badge}
          </span>
          <h2 className="font-display font-black text-xl sm:text-2xl text-white">
            {workshop.title}
          </h2>

          <div className="flex items-center gap-4 mt-3 text-xs text-slate-200 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{workshop.duration}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Level: {workshop.level}</span>
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-brand-slate text-sm">
          {/* Description */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2">
              Track Summary
            </h4>
            <p className="leading-relaxed text-brand-slate text-xs sm:text-sm">
              {workshop.description}
            </p>
          </div>

          {/* Curriculum */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-brand-blue" />
              <span>Syllabus & Core Modules</span>
            </h4>
            <div className="space-y-2.5">
              {workshop.curriculum.map((module, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-slate">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <span>{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaways & Credentials */}
          <div className="p-4 rounded-2xl bg-bg-ice/70 border border-brand-blue/20">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2.5">
              Key Credentials & Takeaways
            </h4>
            <div className="space-y-2">
              {workshop.takeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-brand-slate">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Prerequisites */}
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-1">
              Prerequisites
            </h4>
            <p className="text-xs text-brand-muted">
              {workshop.prerequisites}
            </p>
          </div>

          {/* Official Workshop Notice */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs leading-relaxed flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Official Registration Notice:</span> Workshop admissions, pass bookings, and schedule slots are coordinated directly on techfest.org.
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
            href="https://techfest.org/workshops"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-navy shadow-glow-blue transition-all"
          >
            <span>Check Schedule on Techfest.org</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

