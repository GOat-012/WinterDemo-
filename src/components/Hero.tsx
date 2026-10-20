/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

import { IMAGES, handleImageError } from '../constants/images';

interface HeroProps {
  onOpenJoinModal: (tier?: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenJoinModal, onExploreClick }) => {
  return (
    <section
      aria-label="Welcome to The Winter Gym"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0D0F0E]"
    >
      {/* Background Image Container with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={IMAGES.hero}
          onError={handleImageError}
          alt="The Winter Gym interior featuring custom strength training equipment and twilight skyline"
          className="w-full h-full object-cover object-center scale-105 animate-[pulse_14s_ease-in-out_infinite] transition-transform duration-[12000ms] hover:scale-110 filter brightness-[0.78] contrast-[1.12]"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        {/* Cinematic Vignette and Dark Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-[#0D0F0E]/40 to-[#0D0F0E]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(13,15,14,0.6)_100%)]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20 text-center flex flex-col items-center">
        {/* Quiet Brand Kicker - clean unboxed metadata */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#D7B783] mb-6 font-medium">
          <span>THE WINTER GYM</span>
          <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
          <span className="text-[#A7AAA4]">PRIVATE ATHLETIC CLUB</span>
          <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
          <span>EST. 2026</span>
        </div>

        {/* Master Headline: BUILT BY DISCIPLINE. */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.04em] text-[#F2F0E9] uppercase leading-[0.92] text-balance mb-8 max-w-4xl drop-shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
          BUILT BY <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2F0E9] via-[#D7B783] to-[#F2F0E9]">
            DISCIPLINE.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl text-[#A7AAA4] font-light tracking-wide leading-relaxed mb-10 text-balance">
          More than a workout. A standard you set for yourself.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => onOpenJoinModal()}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D7B783] text-[#0D0F0E] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-[#e4c99c] hover:shadow-[0_0_30px_rgba(215,183,131,0.35)] active:scale-[0.98] cursor-pointer"
          >
            <span>START YOUR JOURNEY</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#F2F0E9] border border-[#A7AAA4]/40 hover:border-[#D7B783] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-300 hover:bg-white/[0.04] cursor-pointer"
          >
            <span>EXPLORE THE GYM</span>
          </button>
        </div>

        {/* Subdued Metrics Strip */}
        <div className="mt-16 pt-10 border-t border-white/10 w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <div className="font-mono-tabular text-2xl md:text-3xl font-semibold text-[#F2F0E9]">12,000<span className="text-[#D7B783] text-lg">ft²</span></div>
            <div className="text-[11px] uppercase tracking-wider text-[#A7AAA4] mt-1">Dedicated Training Floor</div>
          </div>
          <div>
            <div className="font-mono-tabular text-2xl md:text-3xl font-semibold text-[#F2F0E9]">150<span className="text-[#D7B783] text-lg">Cap</span></div>
            <div className="text-[11px] uppercase tracking-wider text-[#A7AAA4] mt-1">Strict Member Roster</div>
          </div>
          <div>
            <div className="font-mono-tabular text-2xl md:text-3xl font-semibold text-[#F2F0E9]">1 : 1</div>
            <div className="text-[11px] uppercase tracking-wider text-[#A7AAA4] mt-1">Bespoke Coaching Standard</div>
          </div>
          <div>
            <div className="font-mono-tabular text-2xl md:text-3xl font-semibold text-[#F2F0E9]">24 / 7</div>
            <div className="text-[11px] uppercase tracking-wider text-[#A7AAA4] mt-1">Biometric Key Access</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={onExploreClick}
        aria-label="Scroll to facilities and brand introduction"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-[#A7AAA4] hover:text-[#D7B783] transition-colors group cursor-pointer focus:outline-none"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-mono-tabular opacity-80">SCROLL</span>
        <ArrowDown className="w-4 h-4 animate-bounce text-[#D7B783]" />
      </button>
    </section>
  );
};
