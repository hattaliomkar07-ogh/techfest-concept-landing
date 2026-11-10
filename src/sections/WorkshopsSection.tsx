import React, { useState } from 'react';
import { WorkshopItem, workshopsData } from '../data/workshopsData';
import { BookOpen, CheckCircle2, Clock, Sparkles, ArrowRight, Cpu, BarChart3, Bot, ShieldCheck, Code2, Compass } from 'lucide-react';

interface WorkshopsSectionProps {
  onSelectWorkshop: (workshop: WorkshopItem) => void;
  onOpenPortalModal: () => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = ({
  onSelectWorkshop,
  onOpenPortalModal,
}) => {
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domainTabs = [
    'All',
    'Artificial Intelligence',
    'Data Science',
    'Robotics',
    'Emerging Technologies',
    'Programming',
    'Innovation & Design',
  ];

  const filteredWorkshops = selectedDomain === 'All'
    ? workshopsData
    : workshopsData.filter((w) => w.domain === selectedDomain);

  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'BarChart3': return BarChart3;
      case 'Bot': return Bot;
      case 'ShieldCheck': return ShieldCheck;
      case 'Code2': return Code2;
      default: return Compass;
    }
  };

  return (
    <section id="workshops" className="py-24 bg-white relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/10 text-brand-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>SECTION 05 // TECHNICAL WORKSHOPS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-brand-navy leading-tight mb-4">
              LEARN. EXPERIMENT. BUILD.
            </h2>
            <p className="text-base sm:text-lg text-brand-slate font-normal leading-relaxed">
              Explore specialized hands-on bootcamps and intensive laboratory tracks led by domain authorities, designed to accelerate practical engineering skills from theory to functional application.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPortalModal}
              className="px-4 py-2.5 rounded-full bg-bg-ice text-xs font-bold text-brand-blue hover:bg-brand-blue/10 border border-brand-blue/20 transition-all flex items-center gap-2 shadow-subtle"
            >
              <span>IIT Bombay Certification Pathway</span>
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {domainTabs.map((domain) => {
            const isActive = selectedDomain === domain;
            return (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-brand-blue text-white shadow-glow-blue'
                    : 'bg-bg-soft text-brand-slate hover:text-brand-navy hover:bg-slate-100 border border-brand-navy/5'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>

        {/* Workshop Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorkshops.map((workshop) => {
            const Icon = getDomainIcon(workshop.iconName);
            return (
              <div
                key={workshop.id}
                className="bg-bg-soft rounded-3xl p-6 sm:p-7 border border-brand-navy/10 hover:border-brand-blue/30 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundColor: `${workshop.accentColor}15`, color: workshop.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-white border border-brand-navy/5 text-brand-navy shadow-subtle">
                      {workshop.badge}
                    </span>
                  </div>

                  {/* Domain & Title */}
                  <p className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue mb-2">
                    {workshop.domain}
                  </p>
                  <h3 className="font-display font-bold text-xl text-brand-navy mb-3 group-hover:text-brand-blue transition-colors">
                    {workshop.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal mb-5">
                    {workshop.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-6">
                    {workshop.curriculum.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-brand-slate">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info & Action */}
                <div className="pt-5 border-t border-brand-navy/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-brand-muted font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{workshop.duration}</span>
                  </div>

                  <button
                    onClick={() => onSelectWorkshop(workshop)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-navy transition-colors group/btn"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

