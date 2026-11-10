import React, { useState } from 'react';
import { ShowcaseItem, showcaseData } from '../data/showcaseData';
import { Eye, Layers, Sparkles, Maximize2, Tag } from 'lucide-react';

interface ShowcaseSectionProps {
  onSelectShowcaseItem: (item: ShowcaseItem) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onSelectShowcaseItem }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTags = ['All', 'Robotics', 'Space', 'Hardware', 'CleanTech', 'Technoholix'];

  const filteredItems = activeFilter === 'All'
    ? showcaseData
    : showcaseData.filter((item) =>
        item.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <section id="showcase" className="py-24 bg-bg-soft relative overflow-hidden border-t border-brand-navy/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-cyan-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              <span>SECTION 06 // INNOVATION GALLERY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-brand-navy leading-tight mb-4">
              IDEAS THAT SHAPE TOMORROW.
            </h2>
            <p className="text-base sm:text-lg text-brand-slate font-normal leading-relaxed">
              An editorial gallery celebrating breakthroughs across robotics, aerospace exploration, deep tech hardware, and nighttime audiovisual engineering.
            </p>
          </div>

          {/* Quick Filter Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterTags.map((tag) => {
              const isActive = activeFilter === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-subtle'
                      : 'bg-white text-brand-slate hover:text-brand-navy border border-brand-navy/5'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Asymmetric Masonry / Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isWide = item.featured && index === 0;
            return (
              <div
                key={item.id}
                onClick={() => onSelectShowcaseItem(item)}
                className={`group relative rounded-3xl overflow-hidden bg-white border border-brand-navy/10 shadow-card hover:shadow-card-hover transition-all duration-500 cursor-pointer ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                {/* Visual Image Container */}
                <div className={`relative overflow-hidden bg-slate-900 ${isWide ? 'h-80 sm:h-96' : 'h-72'}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-white/95 text-brand-navy shadow-subtle">
                      {item.category}
                    </span>
                  </div>

                  {/* Expand Prompt Button */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Captions Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[11px] font-mono text-brand-cyan mb-1 flex items-center gap-1.5">
                      <Tag className="w-3 h-3" />
                      <span>{item.technicalSpecs}</span>
                    </p>
                    <h3 className="font-display font-bold text-lg sm:text-xl leading-snug group-hover:text-brand-cyan transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-200 line-clamp-2 font-normal">
                      {item.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/10">
                      {item.tags.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-200">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

