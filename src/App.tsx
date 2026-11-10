import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { CompetitionsSection } from './sections/CompetitionsSection';
import { WorkshopsSection } from './sections/WorkshopsSection';
import { ShowcaseSection } from './sections/ShowcaseSection';
import { WhyParticipateSection } from './sections/WhyParticipateSection';
import { InitiativesSection } from './sections/InitiativesSection';
import { CTASection } from './sections/CTASection';
import { FooterSection } from './sections/FooterSection';

import { CompetitionModal } from './components/CompetitionModal';
import { WorkshopModal } from './components/WorkshopModal';
import { ShowcaseModal } from './components/ShowcaseModal';
import { OfficialPortalModal } from './components/OfficialPortalModal';

import { CompetitionItem } from './data/competitionsData';
import { WorkshopItem } from './data/workshopsData';
import { ShowcaseItem } from './data/showcaseData';
import { ArrowUp, Compass } from 'lucide-react';

export function App() {
  const [selectedCompetition, setSelectedCompetition] = useState<CompetitionItem | null>(null);
  const [selectedWorkshop, setSelectedWorkshop] = useState<WorkshopItem | null>(null);
  const [selectedShowcaseItem, setSelectedShowcaseItem] = useState<ShowcaseItem | null>(null);
  const [isPortalModalOpen, setIsPortalModalOpen] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-bg-soft text-brand-navy font-sans selection:bg-brand-blue/20 selection:text-brand-blue">
      {/* Section 1: Modern Sticky Navigation Bar */}
      <Navbar onOpenPortalModal={() => setIsPortalModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Section 2: Hero Section */}
        <HeroSection
          onExploreExperience={() => scrollToSection('#about')}
          onDiscoverCompetitions={() => scrollToSection('#competitions')}
        />

        {/* Section 3: About the Festival */}
        <AboutSection
          onLearnMoreClick={() => scrollToSection('#competitions')}
        />

        {/* Section 4: Explore the Competitions */}
        <CompetitionsSection
          onSelectCompetition={(comp) => setSelectedCompetition(comp)}
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
        />

        {/* Section 5: Workshops and Learning */}
        <WorkshopsSection
          onSelectWorkshop={(workshop) => setSelectedWorkshop(workshop)}
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
        />

        {/* Section 6: Technology and Innovation Showcase */}
        <ShowcaseSection
          onSelectShowcaseItem={(item) => setSelectedShowcaseItem(item)}
        />

        {/* Section 7: Why Participate? */}
        <WhyParticipateSection />

        {/* Section 8: Community and Initiatives */}
        <InitiativesSection
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
        />

        {/* Section 9: Final Call to Action */}
        <CTASection
          onOpenPortalModal={() => setIsPortalModalOpen(true)}
          onDiscoverOpportunities={() => scrollToSection('#competitions')}
        />
      </main>

      {/* Section 10: Professional Footer */}
      <FooterSection onOpenPortalModal={() => setIsPortalModalOpen(true)} />

      {/* Interactive Detail Modals */}
      <CompetitionModal
        competition={selectedCompetition}
        onClose={() => setSelectedCompetition(null)}
      />

      <WorkshopModal
        workshop={selectedWorkshop}
        onClose={() => setSelectedWorkshop(null)}
      />

      <ShowcaseModal
        item={selectedShowcaseItem}
        onClose={() => setSelectedShowcaseItem(null)}
      />

      <OfficialPortalModal
        isOpen={isPortalModalOpen}
        onClose={() => setIsPortalModalOpen(false)}
      />

      {/* Quick Action Floating Controls */}
      {showScrollTop && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          <button
            onClick={() => scrollToSection('#competitions')}
            className="px-3.5 py-2.5 rounded-full bg-white text-brand-navy text-xs font-bold shadow-card border border-brand-navy/10 hover:bg-bg-ice transition-all flex items-center gap-1.5"
            aria-label="Jump to competitions"
          >
            <Compass className="w-3.5 h-3.5 text-brand-blue" />
            <span className="hidden sm:inline">Tracks</span>
          </button>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-brand-navy hover:bg-brand-blue text-white shadow-card flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
