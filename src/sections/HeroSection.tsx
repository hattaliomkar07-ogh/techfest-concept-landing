import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Terminal, Activity, Layers, Cpu } from 'lucide-react';

interface HeroSectionProps {
  onExploreExperience: () => void;
  onDiscoverCompetitions: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreExperience,
  onDiscoverCompetitions,
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-bg-soft">
      {/* Background Engineering Grids & Subtle Atmospheric Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(49, 94, 255, 0.08) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-bg-ice rounded-full blur-3xl opacity-70 -z-10" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-bg-lavender rounded-full blur-3xl opacity-60 -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Top Metadata Ribbon */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-blue/20 shadow-subtle text-brand-navy text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span>Independent Student Website Design</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-bg-ice/80 border border-brand-cyan/20 text-brand-navy text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Techfest Campus Ambassador Program</span>
          </div>

          <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 border border-brand-navy/5 text-brand-muted text-xs">
            <span>By Omkar Hattali</span>
          </div>
        </div>

        {/* Two-Column Grid: Editorial Narrative + Layered 2D Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & Action Controls */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Editorial Category Pill */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-brand-blue font-bold mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE FUTURE IN MOTION • ASIA'S LARGEST TECH FESTIVAL SUBJECT</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-brand-navy leading-[1.08] mb-6">
              WHERE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan">INNOVATION</span> MEETS <span className="underline decoration-brand-blue/30 decoration-wavy decoration-2">IMAGINATION.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-brand-slate max-w-2xl font-normal leading-relaxed mb-8">
              Discover a world of technology, creativity, competition and ideas shaping tomorrow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onExploreExperience}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-brand-blue to-brand-navy hover:from-brand-blue hover:to-brand-violet shadow-glow-blue hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>EXPLORE THE EXPERIENCE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onDiscoverCompetitions}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-bold text-brand-navy bg-white hover:bg-bg-ice border-2 border-brand-blue/20 hover:border-brand-blue/40 shadow-subtle hover:shadow transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Compass className="w-4 h-4 text-brand-blue" />
                <span>DISCOVER COMPETITIONS</span>
              </button>
            </div>

            {/* Live Fact Bar / Quick Anchors */}
            <div className="pt-6 border-t border-brand-navy/10 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">Core Focus</p>
                <p className="font-display font-bold text-base sm:text-lg text-brand-navy mt-0.5">Engineering & AI</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">Campus Venue</p>
                <p className="font-display font-bold text-base sm:text-lg text-brand-navy mt-0.5">IIT Bombay</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-brand-muted">Concept By</p>
                <p className="font-display font-bold text-base sm:text-lg text-brand-navy mt-0.5">Omkar Hattali</p>
              </div>
            </div>
          </div>

          {/* Right Column: Layered 2D Visual Photographic Collage & Abstract Engineering Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Featured Card: Autonomous Robotics */}
              <div className="relative rounded-3xl overflow-hidden bg-white p-2.5 shadow-card border border-brand-navy/10 transition-transform duration-500 hover:scale-[1.01]">
                <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80"
                    alt="Autonomous Robotic Interface"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-brand-navy/80 text-white backdrop-blur-md border border-white/20">
                      REF // ROBOTICS & AI
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-medium text-brand-cyan mb-1 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>Next-Gen Autonomy & Hardware</span>
                    </p>
                    <p className="font-display font-bold text-base sm:text-lg">
                      Pioneering student innovation on the international stage
                    </p>
                  </div>
                </div>

                <div className="p-3.5 flex items-center justify-between text-xs text-brand-muted font-medium">
                  <span className="flex items-center gap-1.5 text-brand-navy font-semibold">
                    <Cpu className="w-4 h-4 text-brand-blue" />
                    <span>IIT Bombay Techfest Inspiration</span>
                  </span>
                  <span className="font-mono text-[11px] text-brand-blue font-bold">2026 EDITION</span>
                </div>
              </div>

              {/* Floating Layered Card 1: Student Collaboration / Hackathon */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white rounded-2xl p-4 shadow-card-hover border border-brand-navy/10 max-w-[260px] hidden sm:block animate-float-slow">
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=150&q=80"
                    alt="Team of student builders"
                    className="w-12 h-12 rounded-xl object-cover border border-brand-blue/20"
                  />
                  <div>
                    <p className="text-[11px] font-bold text-brand-navy leading-tight">Student-Led Spirit</p>
                    <p className="text-[10px] text-brand-muted">National Collegiate Teams</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-brand-slate pt-2 border-t border-slate-100">
                  <span className="text-brand-blue font-semibold">COLLABORATION</span>
                  <span className="text-emerald-600 font-bold">ACTIVE</span>
                </div>
              </div>

              {/* Floating Layered Card 2: Competitions Badge */}
              <div className="absolute -top-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card-hover border border-brand-blue/20 max-w-[220px] hidden sm:block">
                <div className="flex items-center gap-2 text-brand-blue mb-1">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">Multi-Track</span>
                </div>
                <p className="text-xs font-bold text-brand-navy">Robowars to Generative AI</p>
                <p className="text-[11px] text-brand-muted mt-0.5">High-stakes student arenas</p>
              </div>

              {/* Engineering Coordinate SVG Badge */}
              <div className="absolute -top-12 left-10 text-[10px] font-mono text-brand-muted/70 tracking-widest hidden lg:block">
                [GRID_LOC: 19.1334° N, 72.9133° E // IITB_POWAI]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
