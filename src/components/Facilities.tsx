/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface FacilitiesProps {
  onSelectFacilityImage: (imageIndex: number) => void;
}

interface FacilityItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  specs: string[];
}

export const Facilities: React.FC<FacilitiesProps> = ({ onSelectFacilityImage }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const facilities: FacilityItem[] = [
    {
      id: 'strength',
      category: 'ZONE 01 · POWER',
      title: 'Strength Training',
      description:
        'Custom 4x3-inch commercial steel power cages, calibrated Eleiko IPF plates, integrated deadlift drop platforms, and specialized specialty bars.',
      image: '/src/assets/images/facility_strength_1792468610696.jpg',
      specs: ['Eleiko IPF Competition Bars', 'Dual Adjustable Pulley Towers', 'Band-Tension Pegs & Chains', 'Belt Squat & Glute Ham Developers'],
    },
    {
      id: 'free-weights',
      category: 'ZONE 02 · RESISTANCE',
      title: 'Free Weights',
      description:
        'Solid polyurethane dumbbells extending from 5kg to 70kg in 2.5kg increments, paired with heavy-duty ergonomic multi-angle incline and decline benches.',
      image: '/src/assets/images/hero_winter_gym_1792468609580.jpg',
      specs: ['Custom Matte Urethane Dumbbells (5–70kg)', 'Zero-Wobble Locking Benches', 'Precision EZ-Curl & Hex Bars', 'Cast-Iron Calibrated Microplates'],
    },
    {
      id: 'cardio',
      category: 'ZONE 03 · CONDITIONING',
      title: 'Cardio Suite',
      description:
        'Non-motorized Woodway curved treadmills, Concept2 PM5 Rowers, and SkiErgs engineered for natural gait mechanics and self-regulated energy expenditure.',
      image: '/src/assets/images/facility_cardio_functional_1792468611669.jpg',
      specs: ['Woodway Curve Slatted Runners', 'Concept2 RowErg & SkiErg Stations', 'Wattbike AtomX Smart Trainers', 'Real-time Telemetry Monitors'],
    },
    {
      id: 'functional',
      category: 'ZONE 04 · ATHLETICS',
      title: 'Functional Training',
      description:
        'High-density 30-meter indoor sprint turf, competition kettlebells, sled push lanes, battle ropes, and ceiling-anchored gymnastics suspension rings.',
      image: '/src/assets/images/campaign_chalk_athlete_1792468611299.jpg',
      specs: ['30m Heavy Turf Sled Lane', 'Competition Cast Kettlebells (8–48kg)', 'Rogue Dog Sleds & Prowlers', 'Gymnastic Rings & Plyometric Vaults'],
    },
  ];

  return (
    <section id="facilities" className="py-28 md:py-36 bg-[#0D0F0E] border-b border-[#252826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-3">
              <span>THE SPACES</span>
              <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
              <span className="text-[#A7AAA4]">ZONE ARCHITECTURE · PURPOSE-BUILT STANDARDS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-tight">
              PRECISION FACILITIES.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-[#A7AAA4] font-light leading-relaxed">
            Every square foot is engineered with intentional acoustic dampening, custom-directed lighting, and premium anti-fatigue flooring.
          </p>
        </div>

        {/* Editorial 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {facilities.map((fac, idx) => (
            <div
              key={fac.id}
              className="group relative bg-[#171918] border border-[#252826] hover:border-[#D7B783]/60 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Frame with Subtle Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0F0E]">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.82] group-hover:brightness-[0.92]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171918] via-transparent to-transparent opacity-90" />
                
                {/* Category Label */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono-tabular text-[11px] font-medium tracking-[0.18em] uppercase text-[#D7B783] bg-[#0D0F0E]/80 backdrop-blur-sm px-3 py-1 border border-[#252826]">
                    {fac.category}
                  </span>
                </div>

                {/* Inspect specs trigger */}
                <button
                  type="button"
                  aria-label={`View full photography for ${fac.title}`}
                  onClick={() => onSelectFacilityImage(idx)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 bg-[#0D0F0E]/80 backdrop-blur-sm border border-[#252826] text-[#F2F0E9] hover:text-[#D7B783] hover:border-[#D7B783] flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              {/* Text Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-[#F2F0E9] group-hover:text-[#D7B783] transition-colors mb-3">
                    {fac.title}
                  </h3>
                  <p className="text-sm text-[#A7AAA4] font-light leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                {/* Hardware Spec Tags */}
                <div className="pt-4 border-t border-[#252826]">
                  <div className="text-[11px] font-mono-tabular tracking-wider uppercase text-[#D7B783] mb-3">
                    EQUIPMENT SPECIFICATIONS
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#F2F0E9]/80 font-light">
                    {fac.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#D7B783] shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
