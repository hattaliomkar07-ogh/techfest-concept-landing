import React from 'react';
import { Cpu, Microscope, Lightbulb, GraduationCap, Users2, Rocket, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const highlights = [
    {
      icon: Cpu,
      title: 'Technology',
      description: 'Pushing the frontiers of computation, microelectronics, autonomous systems, and modern software architectures.',
      color: 'from-brand-blue/20 to-brand-blue/5',
      iconColor: 'text-brand-blue',
    },
    {
      icon: Microscope,
      title: 'Scientific Exploration',
      description: 'Fostering deep inquiry across pure sciences, aerospace avionics, quantum principles, and sustainable engineering.',
      color: 'from-brand-violet/20 to-brand-violet/5',
      iconColor: 'text-brand-violet',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Transforming abstract concepts and academic research into validated, working prototypes that address real human needs.',
      color: 'from-brand-cyan/20 to-brand-cyan/5',
      iconColor: 'text-cyan-600',
    },
    {
      icon: GraduationCap,
      title: 'Learning',
      description: 'Delivering practical, industry-aligned technical workshops and masterclasses led by visionary practitioners.',
      color: 'from-brand-coral/20 to-brand-coral/5',
      iconColor: 'text-brand-coral',
    },
    {
      icon: Users2,
      title: 'Collaboration',
      description: 'Uniting passionate engineering and science minds across universities, disciplines, and geographic borders.',
      color: 'from-brand-orange/20 to-brand-orange/5',
      iconColor: 'text-amber-600',
    },
    {
      icon: Rocket,
      title: 'Student Participation',
      description: 'An open, merit-driven stage designed by students, built for students, and empowering future technological leaders.',
      color: 'from-brand-blue/20 to-brand-violet/5',
      iconColor: 'text-brand-blue',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden border-t border-brand-navy/5">
      {/* Decorative clean background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bg-ice/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-ice text-brand-blue text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <span>SECTION 03 // FESTIVAL IDENTITY</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-brand-navy leading-tight mb-5">
            MORE THAN A FESTIVAL. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-violet">
              A PLATFORM FOR IDEAS.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
            Techfest, hosted annually at the Indian Institute of Technology Bombay, serves as an open crucible where academic rigor, groundbreaking engineering, and audacious imagination intersect. It is dedicated to nurturing technical curiosity and providing a launchpad for ideas that shape tomorrow.
          </p>
        </div>

        {/* Split Layout: Narrative & 6 Pillars Grid + Photographic Mosaic */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: 6 Pillars Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-bg-soft border border-brand-navy/5 hover:border-brand-blue/30 hover:bg-white hover:shadow-card transition-all duration-300 group"
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Credibility / Independent Notice Box */}
            <div className="mt-8 p-4 rounded-2xl bg-bg-ice/70 border border-brand-blue/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-brand-navy">
                <span className="font-bold">Student Concept Exploration:</span> Crafted independently by Omkar Hattali to celebrate Techfest’s legacy and envision an elevated digital presentation.
              </div>
              <a
                href="#competitions"
                className="shrink-0 text-xs font-bold text-brand-blue hover:text-brand-navy flex items-center gap-1 group"
              >
                <span>Discover Tracks</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Photography Mosaic */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Top Large Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-brand-navy/10 group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"
                alt="Student engineering laboratory"
                className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-blue text-white inline-block mb-1">
                  Practical Prototyping
                </span>
                <p className="font-display font-bold text-sm sm:text-base leading-snug">
                  Transforming theoretical physics and algorithm design into functional hardware
                </p>
              </div>
            </div>

            {/* Bottom Two Photos Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-subtle border border-brand-navy/10 group">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80"
                  alt="Algorithmic coding session"
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="font-display font-bold text-xs">High-Speed Coding</p>
                  <p className="text-[10px] text-slate-300">Algorithmic rigor</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-subtle border border-brand-navy/10 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80"
                  alt="Student team ideation"
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="font-display font-bold text-xs">Collegiate Unity</p>
                  <p className="text-[10px] text-slate-300">Cross-campus synergy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

