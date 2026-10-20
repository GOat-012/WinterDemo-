/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenJoinModal: (tier?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Facilities', href: '#facilities' },
    { label: 'Training', href: '#training' },
    { label: 'Memberships', href: '#memberships' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0F0E]/95 backdrop-blur-md border-b border-[#252826] shadow-2xl py-3.5'
          : 'bg-gradient-to-b from-[#0D0F0E]/80 via-[#0D0F0E]/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex flex-col items-start whitespace-nowrap shrink-0"
        >
          <span className="font-display text-xl md:text-2xl font-bold tracking-[0.18em] text-[#F2F0E9] uppercase transition-colors group-hover:text-[#D7B783]">
            THE WINTER GYM
          </span>
          <span className="font-mono-tabular text-[9px] tracking-[0.3em] text-[#A7AAA4] uppercase">
            STRONGER EVERYDAY
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.08em] uppercase text-[#A7AAA4]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#F2F0E9] group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D7B783] transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => onOpenJoinModal()}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#D7B783] text-[#0D0F0E] text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-200 hover:bg-[#e4c99c] hover:shadow-[0_0_24px_rgba(215,183,131,0.3)] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>JOIN NOW</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F2F0E9] hover:text-[#D7B783] transition-colors focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0D0F0E]/98 backdrop-blur-xl border-b border-[#252826] px-6 py-8 shadow-2xl transition-all">
          <nav className="flex flex-col gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-display tracking-[0.15em] uppercase text-[#F2F0E9] hover:text-[#D7B783] py-2 border-b border-[#1E211F] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3 bg-[#D7B783] text-[#0D0F0E] font-display text-sm font-bold tracking-[0.18em] uppercase hover:bg-[#e4c99c] transition-colors cursor-pointer"
              >
                JOIN NOW — START MEMBERSHIP
              </button>
              <p className="text-[11px] font-mono-tabular text-[#A7AAA4] tracking-wider text-center">
                104 INDUSTRIAL BOULEVARD · DISTRICT 4
              </p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
