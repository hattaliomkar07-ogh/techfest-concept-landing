import React, { useState, useMemo } from 'react';
import { CompetitionItem, competitionsData } from '../data/competitionsData';
import { Search, Filter, ArrowRight, Trophy, Users, ShieldCheck } from 'lucide-react';

interface CompetitionsSectionProps {
  onSelectCompetition: (competition: CompetitionItem) => void;
  onOpenPortalModal: () => void;
}

export const CompetitionsSection: React.FC<CompetitionsSectionProps> = ({
  onSelectCompetition,
  onOpenPortalModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Robotics',
    'Artificial Intelligence',
    'Coding',
    'Engineering',
    'Innovation',
    'Science & Tech',
  ];

  const filteredCompetitions = useMemo(() => {
    return competitionsData.filter((comp) => {
      const matchesCategory =
        activeCategory === 'All' || comp.category === activeCategory;
      const matchesSearch =
        comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comp.keySkills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="competitions" className="py-24 bg-bg-soft relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>SECTION 04 // COMPETITIVE ARENAS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-brand-navy leading-tight mb-4">
              CHALLENGE WHAT’S POSSIBLE.
            </h2>
            <p className="text-base sm:text-lg text-brand-slate font-normal leading-relaxed">
              Explore national and international competition tracks designed to test your technical engineering, algorithmic mastery, and collaborative problem-solving under real-world constraints.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={onOpenPortalModal}
              className="px-4 py-2.5 rounded-full bg-white border border-brand-blue/20 text-xs font-bold text-brand-navy hover:bg-bg-ice transition-colors flex items-center gap-2 shadow-subtle"
            >
              <span>Verified Techfest Tracks</span>
              <ShieldCheck className="w-4 h-4 text-brand-blue" />
            </button>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-brand-navy/5">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-subtle'
                      : 'bg-white text-brand-slate hover:text-brand-navy hover:bg-slate-100 border border-brand-navy/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tracks, skills..."
              className="w-full pl-10 pr-4 py-2 text-xs rounded-full bg-white border border-brand-navy/10 text-brand-navy placeholder:text-brand-muted focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
            />
          </div>
        </div>

        {/* Competitions Card Grid */}
        {filteredCompetitions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompetitions.map((competition) => (
              <div
                key={competition.id}
                className="bg-white rounded-3xl overflow-hidden border border-brand-navy/10 hover:border-brand-blue/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
              >
                {/* Visual Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={competition.imageUrl}
                    alt={competition.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-brand-navy shadow-subtle">
                      {competition.category}
                    </span>
                  </div>

                  {/* Team Size Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-[11px] font-medium">
                    <Users className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>{competition.teamSize}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-1.5 group-hover:text-brand-blue transition-colors line-clamp-1">
                      {competition.title}
                    </h3>
                    <p className="text-xs font-medium text-brand-blue mb-2.5">
                      {competition.tagline}
                    </p>
                    <p className="text-xs text-brand-slate leading-relaxed font-normal mb-4 line-clamp-3">
                      {competition.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {competition.keySkills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-bg-soft text-brand-slate border border-slate-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <button
                    onClick={() => onSelectCompetition(competition)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-brand-navy bg-bg-ice hover:bg-brand-blue hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Explore Track Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-navy/5 p-8">
            <p className="font-display font-bold text-lg text-brand-navy mb-2">No competition tracks found</p>
            <p className="text-xs text-brand-muted mb-4">Try clearing your search query or selecting a different category filter.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full text-xs font-bold text-brand-blue bg-bg-ice"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

