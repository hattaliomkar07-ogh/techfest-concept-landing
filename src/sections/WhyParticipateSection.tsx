import React from 'react';
import { whyParticipateData } from '../data/whyParticipateData';
import { Trophy, Sparkles, Users, Wrench, Lightbulb, Zap, CheckCircle2 } from 'lucide-react';

export const WhyParticipateSection: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Trophy': return Trophy;
      case 'Sparkles': return Sparkles;
      case 'Users': return Users;
      case 'Wrench': return Wrench;
      case 'Lightbulb': return Lightbulb;
      default: return Zap;
    }
  };

  return (
    <section id="why-participate" className="py-24 bg-white relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>SECTION 07 // PARTICIPATION VALUE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-brand-navy leading-tight mb-4">
            YOUR NEXT OPPORTUNITY <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral via-brand-orange to-brand-violet">
              STARTS HERE.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate font-normal leading-relaxed">
            Participating in Techfest offers a rare blend of real-world pressure, cross-disciplinary collaboration, and access to industry and research leaders. Here is what makes the experience transformative.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyParticipateData.map((item) => {
            const Icon = getIcon(item.iconName);
            return (
              <div
                key={item.id}
                className="bg-bg-soft rounded-3xl p-7 border border-brand-navy/10 hover:border-brand-blue/30 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-brand-navy/20 group-hover:text-brand-blue/40 transition-colors">
                      {item.number}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white border border-brand-navy/5 text-brand-slate">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: `${item.accent}15`, color: item.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-brand-navy group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm font-semibold text-brand-navy mb-2">
                    {item.shortDesc}
                  </p>

                  {/* Full Narrative */}
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                    {item.fullDesc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-navy/5 flex items-center gap-2 text-xs font-semibold text-brand-blue">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Student Growth Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
