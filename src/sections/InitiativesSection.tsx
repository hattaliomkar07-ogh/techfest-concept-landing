import React from 'react';
import { initiativesData } from '../data/initiativesData';
import { HeartHandshake, CheckCircle2, ArrowUpRight, Globe2, ShieldCheck, Users } from 'lucide-react';

interface InitiativesSectionProps {
  onOpenPortalModal: () => void;
}

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({ onOpenPortalModal }) => {
  return (
    <section id="initiatives" className="py-24 bg-bg-soft relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
              <span>SECTION 08 // PURPOSE-DRIVEN IMPACT</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-brand-navy leading-tight mb-4">
              INNOVATION WITH A PURPOSE.
            </h2>
            <p className="text-base sm:text-lg text-brand-slate font-normal leading-relaxed">
              True engineering prowess creates enduring value. Beyond fierce competition, Techfest champions pan-India technical club ecosystems, student leadership networks, and social impact solutions.
            </p>
          </div>

          <div>
            <button
              onClick={onOpenPortalModal}
              className="px-5 py-2.5 rounded-full bg-white border border-brand-blue/20 text-xs font-bold text-brand-navy hover:bg-bg-ice transition-colors flex items-center gap-2 shadow-subtle"
            >
              <Globe2 className="w-4 h-4 text-brand-blue" />
              <span>Explore Official Initiatives</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-brand-muted" />
            </button>
          </div>
        </div>

        {/* 4 Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiativesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-brand-navy/10 hover:border-brand-blue/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Visual Banner */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-brand-navy shadow-subtle">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cyan">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-brand-blue mb-2.5">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-brand-slate">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact Statement Box */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-brand-muted font-medium italic">
                    {item.impactFocus}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

