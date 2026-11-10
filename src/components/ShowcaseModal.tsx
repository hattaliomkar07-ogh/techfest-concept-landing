import React from 'react';
import { ShowcaseItem } from '../data/showcaseData';
import { X, Tag, Cpu, ShieldCheck } from 'lucide-react';

interface ShowcaseModalProps {
  item: ShowcaseItem | null;
  onClose: () => void;
}

export const ShowcaseModal: React.FC<ShowcaseModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-navy/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-brand-navy/10 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Full Image */}
        <div className="relative h-64 sm:h-80 bg-slate-900 shrink-0 overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/30 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-brand-navy inline-block mb-1 shadow-subtle">
              {item.category}
            </span>
            <h2 className="font-display font-black text-xl sm:text-2xl text-white">
              {item.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1 text-brand-slate text-sm">
          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-brand-blue" />
              <span>Technical Specification</span>
            </h4>
            <p className="font-mono text-xs text-brand-blue bg-bg-ice p-3 rounded-xl border border-brand-blue/20">
              {item.technicalSpecs}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2">
              Domain Narrative
            </h4>
            <p className="leading-relaxed text-brand-slate text-xs sm:text-sm">
              {item.description}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-navy mb-2 flex items-center gap-1.5">
              <Tag className="w-4 h-4 text-brand-muted" />
              <span>Research & Exhibition Domains</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-bg-soft text-brand-slate border border-slate-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-brand-muted text-xs flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
            <span>
              Curated conceptual illustration highlighting frontier technical domains showcased at Techfest, IIT Bombay.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:px-8 border-t border-brand-navy/10 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-brand-navy hover:bg-brand-blue transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
};

