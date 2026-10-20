/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Maximize2 } from 'lucide-react';

export interface GalleryImage {
  src: string;
  title: string;
  zone: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    src: '/src/assets/images/hero_winter_gym_1792468609580.jpg',
    title: 'Twilight Lifting Bay',
    zone: 'BAY 01 · ELEIKO PLATFORM',
    caption: 'Architectural twilight view overlooking the city skyline with competition power cages and calibrated steel plates.',
  },
  {
    src: '/src/assets/images/facility_strength_1792468610696.jpg',
    title: 'Custom Modular Steel Racks',
    zone: 'BAY 02 · STRENGTH SUITE',
    caption: 'Heavy-gauge 4x3-inch commercial power racks with integrated deadlift platforms and matte amber backlighting.',
  },
  {
    src: '/src/assets/images/facility_cardio_functional_1792468611669.jpg',
    title: 'Sprint Turf & Sled Track',
    zone: 'ZONE 04 · TURF CONDITIONING',
    caption: '30-meter indoor sprint turf, Rogue dog sleds, and curved Woodway self-powered treadmills.',
  },
  {
    src: '/src/assets/images/campaign_chalk_athlete_1792468611299.jpg',
    title: 'Pre-Lift Chalk Dispersion',
    zone: 'PLATFORM 03 · DISCIPLINE',
    caption: 'Athlete chalking hands before a maximal effort deadlift under directional warm champagne spotlighting.',
  },
  {
    src: '/src/assets/images/trainer_portrait_1792468610400.jpg',
    title: 'Master Coach Instruction',
    zone: 'CONSULTATION & ASSESSMENT',
    caption: 'One-on-one kinematic evaluation and movement trajectory analysis with Head of Performance.',
  },
  {
    src: '/src/assets/images/hero_winter_gym_1792468609580.jpg',
    title: 'Free Weight Dumbbell Gallery',
    zone: 'ZONE 02 · RESISTANCE FLOOR',
    caption: 'Polyurethane dumbbell arrays from 5kg to 70kg alongside multi-angle ergonomic zero-wobble benches.',
  },
];

interface GalleryProps {
  onOpenLightbox: (index: number) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#0D0F0E] border-b border-[#252826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-3">
              <span>VISUAL ARCHIVE</span>
              <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
              <span>CINEMATIC CLUB PHOTOGRAPHY</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-tight">
              INSIDE THE WINTER GYM.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A7AAA4] font-light leading-relaxed">
            Click any frame to launch the full-screen architectural gallery with specifications.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Wide 7-col */}
          <div
            onClick={() => onOpenLightbox(0)}
            className="md:col-span-7 group relative aspect-[16/10] overflow-hidden border border-[#252826] bg-[#171918] cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[0].src}
              alt={GALLERY_ITEMS[0].title}
              className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-transparent opacity-80" />
            <div className="absolute top-4 right-4 p-2 bg-[#0D0F0E]/80 border border-[#252826] text-[#D7B783] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono-tabular text-[10px] tracking-widest uppercase text-[#D7B783]">
                {GALLERY_ITEMS[0].zone}
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#F2F0E9]">
                {GALLERY_ITEMS[0].title}
              </h3>
            </div>
          </div>

          {/* Card 2: 5-col */}
          <div
            onClick={() => onOpenLightbox(1)}
            className="md:col-span-5 group relative aspect-[4/3] md:aspect-auto overflow-hidden border border-[#252826] bg-[#171918] cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[1].src}
              alt={GALLERY_ITEMS[1].title}
              className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-transparent opacity-80" />
            <div className="absolute top-4 right-4 p-2 bg-[#0D0F0E]/80 border border-[#252826] text-[#D7B783] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono-tabular text-[10px] tracking-widest uppercase text-[#D7B783]">
                {GALLERY_ITEMS[1].zone}
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#F2F0E9]">
                {GALLERY_ITEMS[1].title}
              </h3>
            </div>
          </div>

          {/* Card 3: 4-col */}
          <div
            onClick={() => onOpenLightbox(2)}
            className="md:col-span-4 group relative aspect-[4/3] overflow-hidden border border-[#252826] bg-[#171918] cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[2].src}
              alt={GALLERY_ITEMS[2].title}
              className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-transparent opacity-80" />
            <div className="absolute top-4 right-4 p-2 bg-[#0D0F0E]/80 border border-[#252826] text-[#D7B783] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono-tabular text-[10px] tracking-widest uppercase text-[#D7B783]">
                {GALLERY_ITEMS[2].zone}
              </span>
              <h3 className="font-display text-xl uppercase tracking-wide text-[#F2F0E9]">
                {GALLERY_ITEMS[2].title}
              </h3>
            </div>
          </div>

          {/* Card 4: 8-col */}
          <div
            onClick={() => onOpenLightbox(3)}
            className="md:col-span-8 group relative aspect-[16/9] md:aspect-auto overflow-hidden border border-[#252826] bg-[#171918] cursor-pointer"
          >
            <img
              src={GALLERY_ITEMS[3].src}
              alt={GALLERY_ITEMS[3].title}
              className="w-full h-full object-cover filter brightness-[0.8] contrast-[1.15] transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-transparent opacity-80" />
            <div className="absolute top-4 right-4 p-2 bg-[#0D0F0E]/80 border border-[#252826] text-[#D7B783] opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono-tabular text-[10px] tracking-widest uppercase text-[#D7B783]">
                {GALLERY_ITEMS[3].zone}
              </span>
              <h3 className="font-display text-2xl uppercase tracking-wide text-[#F2F0E9]">
                {GALLERY_ITEMS[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
