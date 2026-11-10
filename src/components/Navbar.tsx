import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Compass } from 'lucide-react';

interface NavbarProps {
  onOpenPortalModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPortalModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Competitions', href: '#competitions', id: 'competitions' },
    { name: 'Workshops', href: '#workshops', id: 'workshops' },
    { name: 'Showcase', href: '#showcase', id: 'showcase' },
    { name: 'Why Join', href: '#why-participate', id: 'why-participate' },
    { name: 'Initiatives', href: '#initiatives', id: 'initiatives' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = ['home', 'about', 'competitions', 'workshops', 'showcase', 'why-participate', 'initiatives'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-subtle border-b border-brand-navy/5 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-violet flex items-center justify-center text-white font-display font-extrabold text-xl shadow-glow-blue transition-transform duration-300 group-hover:scale-105">
                T
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-brand-navy group-hover:text-brand-blue transition-colors">
                    TECHFEST
                  </span>
                  <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue">
                    Concept
                  </span>
                </div>
                <span className="text-[10px] text-brand-muted font-medium tracking-wide hidden sm:block">
                  Design by Omkar Hattali
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-navy/5 shadow-subtle">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-brand-blue bg-brand-blue/10 font-bold'
                        : 'text-brand-slate hover:text-brand-navy hover:bg-slate-100/70'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenPortalModal}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-brand-navy bg-bg-ice hover:bg-brand-blue/10 border border-brand-blue/20 transition-all duration-200"
                title="View Official Portal Information"
              >
                <span>Official Site</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue" />
              </button>

              <a
                href="#competitions"
                onClick={(e) => handleNavClick(e, '#competitions')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-violet hover:from-brand-blue hover:to-brand-blue shadow-glow-blue hover:shadow-lg transition-all duration-300 active:scale-95"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Explore Events</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenPortalModal}
                className="text-xs px-2.5 py-1.5 rounded-lg bg-bg-ice text-brand-blue font-semibold sm:hidden"
              >
                Portal
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white/80 border border-brand-navy/10 text-brand-navy hover:text-brand-blue focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-brand-navy/10 px-4 pt-3 pb-6 mt-2 shadow-card transition-all">
            <div className="flex flex-col space-y-1">
              <div className="px-3 py-2 mb-2 bg-bg-ice rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-brand-navy">Independent Student Concept</p>
                  <p className="text-[11px] text-brand-muted">Designed & Developed by Omkar Hattali</p>
                </div>
                <Sparkles className="w-4 h-4 text-brand-blue" />
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-blue/10 text-brand-blue font-bold'
                        : 'text-brand-slate hover:bg-slate-50'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />}
                  </a>
                );
              })}

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPortalModal();
                  }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-brand-navy bg-bg-ice hover:bg-slate-100 border border-brand-blue/20 flex items-center justify-center gap-1.5"
                >
                  <span>Official Techfest Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-blue" />
                </button>

                <a
                  href="#competitions"
                  onClick={(e) => handleNavClick(e, '#competitions')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-blue to-brand-violet flex items-center justify-center gap-1.5 shadow-glow-blue"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>Explore Competitions</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
