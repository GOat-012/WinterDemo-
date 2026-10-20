/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Standardized public root-relative image paths.
 * These files reside in /public/images and are copied directly into /dist/images
 * during Vite production builds (`npm run build`), ensuring seamless asset delivery
 * on Netlify, Cloud Run, and all static hosts without 404 broken image errors.
 */
export const IMAGES = {
  hero: '/images/hero-winter-gym.jpg',
  brandPhilosophy: '/images/facility-strength.jpg',
  facilities: {
    strength: '/images/facility-strength.jpg',
    freeWeights: '/images/facility-free-weights.jpg',
    cardio: '/images/facility-cardio-functional.jpg',
    functional: '/images/facility-turf.jpg',
  },
  programs: {
    hypertrophy: '/images/facility-free-weights.jpg',
    conditioning: '/images/facility-turf.jpg',
    strength: '/images/facility-strength.jpg',
    coaching: '/images/trainer-portrait.jpg',
  },
  campaign: '/images/campaign-chalk-athlete.jpg',
  trainers: {
    marcus: '/images/trainer-portrait.jpg',
    elena: '/images/trainer-elena.jpg',
    david: '/images/trainer-david.jpg',
  },
  finalCta: '/images/hero-winter-gym.jpg',
} as const;

export const FALLBACK_IMAGE = '/images/hero-winter-gym.jpg';

/**
 * Safe image error fallback handler to ensure no broken image icons appear
 */
export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc: string = FALLBACK_IMAGE
) => {
  const target = e.currentTarget;
  if (target.src !== fallbackSrc && !target.src.endsWith(fallbackSrc)) {
    target.src = fallbackSrc;
  }
};
