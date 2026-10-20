/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CampaignBannerProps {
  onOpenJoinModal: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onOpenJoinModal }) => {
  return (
    <section
      aria-label="Campaign Statement"
      className="relative py-36 md:py-48 w-full overflow-hidden bg-[#0D0F0E] flex items-center justify-center text-center"
    >
      {/* Background Cinematic Photo with Chalk Dust & Dramatic Spotlight */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/campaign_chalk_athlete_1792468611299.jpg"
          alt="Athlete clapping chalked hands before heavy lift in dramatic spotlight"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.15]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        {/* Dark radial and gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F0E] via-[#0D0F0E]/60 to-[#0D0F0E]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-[#0D0F0E]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Clean Kicker */}
        <div className="inline-flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.3em] text-[#D7B783] mb-6 font-semibold">
          <span>THE WINTER GYM MANIFESTO</span>
          <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
          <span>DISCIPLINE OVER MOTIVATION</span>
        </div>

        {/* Master Campaign Headline: YOUR EXCUSES END HERE. */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.04em] text-[#F2F0E9] leading-[0.9] text-balance mb-8 drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]">
          YOUR EXCUSES <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D7B783] via-[#F2F0E9] to-[#D7B783]">
            END HERE.
          </span>
        </h2>

        {/* Supporting Copy */}
        <p className="max-w-xl text-base sm:text-lg text-[#A7AAA4] font-light leading-relaxed mb-10 text-balance">
          No gimmicks. No shortcuts. A private cathedral dedicated to those who hold themselves
          to a higher standard of physical and mental resilience.
        </p>

        {/* Clear Membership CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onOpenJoinModal}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D7B783] text-[#0D0F0E] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-[#e4c99c] hover:shadow-[0_0_35px_rgba(215,183,131,0.4)] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>CLAIM YOUR INVITATION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <span className="text-xs font-mono-tabular text-[#A7AAA4] tracking-wider uppercase">
            CAPPED ROSTER · VETTED ADMISSIONS
          </span>
        </div>
      </div>
    </section>
  );
};
