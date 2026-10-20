/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, Target } from 'lucide-react';
import { IMAGES, handleImageError } from '../constants/images';

interface BrandStatementProps {
  onOpenConsultation: () => void;
}

export const BrandStatement: React.FC<BrandStatementProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-28 md:py-36 bg-[#0D0F0E] border-b border-[#252826] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Subtitle */}
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-6">
          <span>THE PHILOSOPHY</span>
          <span aria-hidden="true" className="text-[#A7AAA4]">/</span>
          <span className="text-[#A7AAA4]">ARCHITECTURE OF PERFORMANCE</span>
        </div>

        {/* Oversized Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-[0.95] max-w-5xl mb-16 text-balance">
          NOT JUST STRONGER. <br />
          <span className="text-[#D7B783]">DIFFERENT.</span>
        </h2>

        {/* Elegant Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Editorial Introduction & Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-[#F2F0E9] font-light leading-relaxed">
                THE WINTER GYM was conceived as an antidote to crowded, commercial fitness spaces.
                We believe that serious physical transformation demands an uncompromising environment:
                curated density, biomechanically superior machinery, and total freedom from distractions.
              </p>
              <p className="text-sm md:text-base text-[#A7AAA4] font-light leading-relaxed">
                Every rack, platform, and dumbbell was selected with purpose. Here, there are no queue lines,
                no recording tripods, and no superficial noise. Just pure focus, world-class iron, and members
                who honor the discipline.
              </p>
            </div>

            {/* Three Structural Principles */}
            <div className="space-y-6 pt-6 border-t border-[#252826]">
              <div className="group">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="font-mono-tabular text-sm font-semibold text-[#D7B783]">01.</span>
                  <h3 className="font-display text-lg uppercase tracking-wider text-[#F2F0E9]">
                    Engineered Precision
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#A7AAA4] pl-8 leading-normal font-light">
                  Competition-certified bars, calibrated steel plates, and custom ergonomics designed to eliminate joint strain and maximize target muscle engagement.
                </p>
              </div>

              <div className="group">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="font-mono-tabular text-sm font-semibold text-[#D7B783]">02.</span>
                  <h3 className="font-display text-lg uppercase tracking-wider text-[#F2F0E9]">
                    Curated Capacity
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#A7AAA4] pl-8 leading-normal font-light">
                  Membership is strictly capped to guarantee immediate equipment availability, uninterrupted training rhythm, and absolute privacy.
                </p>
              </div>

              <div className="group">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="font-mono-tabular text-sm font-semibold text-[#D7B783]">03.</span>
                  <h3 className="font-display text-lg uppercase tracking-wider text-[#F2F0E9]">
                    Holistic Recovery
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#A7AAA4] pl-8 leading-normal font-light">
                  Infrared thermotherapy, Scandinavian cold plunge tubs, and neuromuscular recovery suites to ensure your body repairs as intensely as it trains.
                </p>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] font-semibold text-[#D7B783] hover:text-[#F2F0E9] transition-colors py-2 group cursor-pointer"
              >
                <span>REQUEST PRIVATE CLUB ORIENTATION</span>
                <span className="w-8 h-[1px] bg-[#D7B783] group-hover:w-12 group-hover:bg-[#F2F0E9] transition-all" />
              </button>
            </div>
          </div>

          {/* Right Column: Large Supporting Photograph */}
          <div className="lg:col-span-7 relative group">
            <div className="relative h-full min-h-[460px] md:min-h-[580px] overflow-hidden border border-[#252826] bg-[#171918]">
              <img
                src={IMAGES.brandPhilosophy}
                onError={handleImageError}
                alt="Architectural strength training area with custom black power racks and ambient illumination"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient frame overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E]/90 via-transparent to-transparent opacity-80" />
              
              {/* Image Caption Marker */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#F2F0E9] border-t border-white/10 pt-4">
                <span className="font-display tracking-[0.14em] uppercase">STRENGTH SUITE // BAY 01</span>
                <span className="font-mono-tabular text-[#D7B783]">ELEIKO OLYMPIC CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
