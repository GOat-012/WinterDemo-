/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Quote, AlertCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'The atmosphere here is singular. No influencers recording videos, no waiting for benches. You walk in, the Eleiko bars are loaded, and the standard of effort in the room pulls another 10% out of you automatically.',
      author: 'Julian M.',
      role: 'Private Equity Director · Powerlifting Focus',
      tenure: 'Founding Member (Sample)',
      benchmark: 'Deadlift +35kg in 6 months',
    },
    {
      id: 2,
      quote:
        'Having trained at luxury hotel clubs across London and New York, The Winter Gym is the first facility that marries true luxury finishes with hardcore, uncompromising strength machinery. The cold plunge and sauna after heavy squats are unmatched.',
      author: 'Sophia K.',
      role: 'Architecture Principal · Functional Hypertrophy',
      tenure: 'Performance Member (Sample)',
      benchmark: 'Consistent 5-day training rhythm',
    },
    {
      id: 3,
      quote:
        'The coaching precision under Marcus changed how my shoulders and spine handle load. Every exercise prescription is biomechanically justified. If you are serious about longevity and real strength, this is the only room in town.',
      author: 'Dr. Henrik V.',
      role: 'Orthopedic Surgeon · Longevity & Strength',
      tenure: 'Elite Retainer Member (Sample)',
      benchmark: 'Complete lumbar rehab & squat mastery',
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#171918] border-b border-[#252826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-3">
              <span>MEMBER DISPATCHES</span>
              <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
              <span>CULTURE OF DISCIPLINE</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-tight">
              VOICES OF THE STANDARD.
            </h2>
          </div>

          {/* Explicit client demo note */}
          <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#D7B783] bg-[#0D0F0E] px-4 py-2 border border-[#252826] shrink-0">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Illustrative member testimonials pending verified client quotes</span>
          </div>
        </div>

        {/* 3-Column Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#0D0F0E] border border-[#252826] p-8 md:p-10 flex flex-col justify-between relative group hover:border-[#D7B783]/50 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#D7B783]/30 mb-6 group-hover:text-[#D7B783] transition-colors" />
                <p className="text-sm md:text-base text-[#F2F0E9] font-light leading-relaxed mb-8 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-[#252826]">
                <div className="font-display text-lg uppercase tracking-wide text-[#F2F0E9]">
                  {t.author}
                </div>
                <div className="text-xs text-[#A7AAA4] font-light mb-2">
                  {t.role}
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono-tabular text-[#D7B783]">
                  <span>{t.tenure}</span>
                  <span className="text-[#A7AAA4]">· {t.benchmark}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
