/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, PhoneCall, Calendar } from 'lucide-react';
import { IMAGES, handleImageError } from '../constants/images';

interface FinalCtaProps {
  onOpenJoinModal: () => void;
  onOpenTourModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenJoinModal, onOpenTourModal }) => {
  return (
    <section className="relative py-36 md:py-48 w-full overflow-hidden bg-[#0D0F0E] border-b border-[#252826] flex items-center justify-center text-center">
      {/* Background High-Impact Photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.finalCta}
          onError={handleImageError}
          alt="The Winter Gym training hall at twilight"
          className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.15]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-[#0D0F0E]/70 to-[#0D0F0E]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0F0E] via-transparent to-[#0D0F0E]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D7B783] mb-6 font-semibold">
          <span>THE DECISION</span>
          <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
          <span>INITIATE MEMBERSHIP</span>
        </div>

        {/* Master Headline */}
        <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-[0.92] text-balance mb-8">
          THE NEXT VERSION <br />
          <span className="text-[#D7B783]">OF YOU</span> <br />
          STARTS HERE.
        </h2>

        <p className="max-w-xl text-base sm:text-lg text-[#A7AAA4] font-light leading-relaxed mb-10 text-balance">
          Step into a room where compromise does not exist. Apply for member admission or book an exclusive private club walk-through with our concierge.
        </p>

        {/* Two Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenJoinModal}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#D7B783] text-[#0D0F0E] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-[#e4c99c] hover:shadow-[0_0_35px_rgba(215,183,131,0.4)] transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>JOIN NOW — APPLY FOR ADMISSION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onOpenTourModal}
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent text-[#F2F0E9] border border-[#A7AAA4]/40 hover:border-[#D7B783] hover:text-[#D7B783] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer whitespace-nowrap hover:bg-white/[0.04]"
          >
            <Calendar className="w-4 h-4 text-[#D7B783]" />
            <span>SCHEDULE PRIVATE TOUR</span>
          </button>
        </div>

        <div className="mt-8 text-xs font-mono-tabular text-[#A7AAA4] tracking-wider uppercase">
          MEMBER ADMISSIONS COMMITTEE REVIEWS ALL APPLICATIONS WITHIN 24 HOURS
        </div>
      </div>
    </section>
  );
};
