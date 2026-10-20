/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Check, Activity, Flame, ShieldAlert, Award } from 'lucide-react';
import { IMAGES, handleImageError } from '../constants/images';

interface TrainingProgramsProps {
  onOpenConsultation: (programName?: string) => void;
}

interface Program {
  id: string;
  number: string;
  title: string;
  tagline: string;
  focus: string;
  duration: string;
  description: string;
  curriculum: string[];
  metrics: string;
  image: string;
}

export const TrainingPrograms: React.FC<TrainingProgramsProps> = ({ onOpenConsultation }) => {
  const [selectedProgramId, setSelectedProgramId] = useState<string>('muscle-building');

  const programs: Program[] = [
    {
      id: 'muscle-building',
      number: 'PROGRAM 01',
      title: 'Hypertrophy & Muscle Building',
      tagline: 'SCIENTIFIC VOLUME · PROGRESSIVE OVERLOAD · PEAK SYMMETRY',
      focus: 'Mechanical tension, metabolic fatigue management, periodized hypertrophic blocks',
      duration: '12-Week Mesocycle Blocks',
      description:
        'Engineered for maximum lean contractile tissue accretion without joint burnout. Utilizes intelligent rep range variation (5–15 reps), tempo control, and customized exercise selection based on personal leverage mechanics.',
      curriculum: [
        'Multi-angle chest and posterior chain development',
        'Direct arm & shoulder specialization micro-cycles',
        'Intra-workout recovery and myofibrillar protein synthesis pacing',
        'De-load sequencing every 5th training week',
      ],
      metrics: 'Standard outcome: +4–7kg lean mass over 24 weeks with biometric DEXA tracking',
      image: IMAGES.programs.hypertrophy,
    },
    {
      id: 'fat-loss',
      number: 'PROGRAM 02',
      title: 'Athletic Conditioning & Fat Loss',
      tagline: 'METABOLIC ACCELERATION · ZERO MUSCLE SACRIFICE',
      focus: 'High-density peripheral heart action, sprint intervals, systemic oxidative capacity',
      duration: '8 to 16 Weeks',
      description:
        'A potent combination of heavy compound compound strength work and high-power density circuits. Designed to incinerate visceral and subcutaneous fat while fiercely preserving hard-earned muscular volume and hormonal balance.',
      curriculum: [
        'Turf sled pushing & heavy kettlebell ballistic complexes',
        'Zone 2 / Zone 5 cardiovascular polarization',
        'Glycogen-depleting supersets with strictly monitored rest periods',
        'Nutritional caloric titration & sleep hygiene optimization',
      ],
      metrics: 'Average metabolic baseline increase of 14% with sustained body composition recomp',
      image: IMAGES.programs.conditioning,
    },
    {
      id: 'strength-training',
      number: 'PROGRAM 03',
      title: 'Maximum Strength & Powerlifting',
      tagline: 'RAW BARBELL VELOCITY · TENDON DENSITY · 1RM SUPREMACY',
      focus: 'Neurological force production, rate of force development (RFD), technical mastery',
      duration: '16-Week Periodized Peaking',
      description:
        'Strictly for athletes driven by absolute numerical superiority. Focused on perfecting the squat, bench press, deadlift, and overhead press through RPE autoregulation, accommodating resistance, and velocity-based tracking.',
      curriculum: [
        'VBT (Velocity-Based Training) linear transducer feedback',
        'Posterior chain reinforcement (RDLs, Good Mornings, Reverse Hypers)',
        'Heavy eccentric overload and CNS adaptation protocols',
        'Competition taper and attempt selection strategy',
      ],
      metrics: 'Documented 15–30% increase on total platform lifts across complete cycles',
      image: IMAGES.programs.strength,
    },
    {
      id: 'personal-training',
      number: 'PROGRAM 04',
      title: 'Private Bespoke Coaching',
      tagline: 'ONE-ON-ONE DEDICATED COACHING · FULL PHYSIOLOGICAL TAILORING',
      focus: 'Individual biomechanics screening, lifestyle integration, daily accountability',
      duration: 'Continuous Bespoke Retainer',
      description:
        'The apex tier of athletic development. You are paired with a dedicated master trainer who constructs every set, rep, warm-up, and recovery protocol specifically for your body structure, past injuries, and schedule constraints.',
      curriculum: [
        'Complete 3D joint range of motion and orthopedic assessment',
        'Private lifting suite reservation with dedicated equipment set',
        'Custom nutrition macronutrient blueprint and weekly bloodwork consultation',
        'Direct 24/7 coach messaging via encrypted concierge channel',
      ],
      metrics: 'Uncompromising 100% adherence architecture tailored strictly for high-performing executives',
      image: IMAGES.programs.coaching,
    },
  ];

  const currentProgram = programs.find((p) => p.id === selectedProgramId) || programs[0];

  return (
    <section id="training" className="py-28 md:py-36 bg-[#171918] border-b border-[#252826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-3">
            <span>TRAINING METHODOLOGY</span>
            <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
            <span className="text-[#A7AAA4]">PURPOSE-DRIVEN PROTOCOLS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-tight max-w-3xl">
            PROGRAMS FORGED IN EVIDENCE.
          </h2>
        </div>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#252826]">
          {programs.map((p) => {
            const isSelected = p.id === selectedProgramId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProgramId(p.id)}
                className={`px-4 sm:px-6 py-3 text-xs sm:text-sm font-display tracking-[0.12em] uppercase transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#D7B783] text-[#0D0F0E] font-semibold shadow-[0_0_20px_rgba(215,183,131,0.2)]'
                    : 'bg-[#0D0F0E] text-[#A7AAA4] hover:text-[#F2F0E9] hover:bg-[#252826] border border-[#252826]'
                }`}
              >
                {p.title.split('&')[0].trim()}
              </button>
            );
          })}
        </div>

        {/* Active Program Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch bg-[#0D0F0E] border border-[#252826] p-8 md:p-12">
          {/* Program Details */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center gap-4 text-xs font-mono-tabular text-[#D7B783] mb-3">
                <span className="font-semibold">{currentProgram.number}</span>
                <span>·</span>
                <span>{currentProgram.duration}</span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#F2F0E9] mb-3">
                {currentProgram.title}
              </h3>

              <div className="font-mono-tabular text-xs text-[#A7AAA4] uppercase tracking-wider mb-6 pb-4 border-b border-[#252826]">
                {currentProgram.tagline}
              </div>

              <p className="text-sm sm:text-base text-[#F2F0E9]/90 font-light leading-relaxed mb-6">
                {currentProgram.description}
              </p>

              {/* Curriculum Breakdown */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono-tabular text-[#D7B783] uppercase tracking-wider">
                  KEY METHODOLOGICAL PILLARS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#A7AAA4]">
                  {currentProgram.curriculum.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-[#D7B783] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Proven Metric Box */}
              <div className="bg-[#171918] border border-[#252826] p-4 text-xs text-[#F2F0E9] font-mono-tabular">
                <span className="text-[#D7B783] font-semibold">METRIC BENCHMARK: </span>
                {currentProgram.metrics}
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <button
                onClick={() => onOpenConsultation(currentProgram.title)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#D7B783] text-[#0D0F0E] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#e4c99c] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>APPLY FOR {currentProgram.title.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Program Visual Asset */}
          <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full overflow-hidden border border-[#252826] bg-[#171918]">
            <img
              src={currentProgram.image}
              onError={handleImageError}
              alt={currentProgram.title}
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.1] transition-transform duration-700 hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 text-[11px] font-mono-tabular text-[#A7AAA4] uppercase">
              THE WINTER GYM · PROGRAMMING DEPARTMENT
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
