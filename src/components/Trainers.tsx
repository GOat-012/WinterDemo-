/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { IMAGES, handleImageError } from '../constants/images';

interface TrainersProps {
  onOpenConsultation: (coachName: string) => void;
}

interface Coach {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  credentialsStatus: 'Pending Owner Verification' | 'Verified Client Placeholder';
  credentials: string[];
  specialties: string[];
  image: string;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenConsultation }) => {
  const [selectedCoachId, setSelectedCoachId] = useState<string>('marcus');

  const coaches: Coach[] = [
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Head of Strength & Performance',
      experience: '12 Years Coaching Experience',
      bio: 'Former collegiate strength and conditioning specialist. Marcus leads the performance programming at The Winter Gym with an uncompromising adherence to biomechanical efficiency and periodized strength development.',
      credentialsStatus: 'Pending Owner Verification',
      credentials: [
        'CSCS (Certified Strength & Conditioning Specialist - Sample)',
        'USAW Level 2 Weightlifting Coach (Sample)',
        'B.S. Exercise Physiology (Sample)',
      ],
      specialties: ['Competitive Powerlifting', 'Hypertrophy Periodization', 'CNS Fatigue Management'],
      image: IMAGES.trainers.marcus,
    },
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'Director of Biomechanics & Joint Longevity',
      experience: '9 Years Clinical & Athletic Training',
      bio: 'Elena bridges the gap between high-output resistance training and physical longevity. Specializing in shoulder and hip capsule restoration, she enables lifters to handle heavier loads without joint wear.',
      credentialsStatus: 'Pending Owner Verification',
      credentials: [
        'M.Sc. Human Kinetics (Sample)',
        'FMS Level 2 Functional Movement Specialist (Sample)',
        'FRC Certified Mobility Specialist (Sample)',
      ],
      specialties: ['Joint Capsule Health', 'Kinematic Assessment', 'Metabolic Reconditioning'],
      image: IMAGES.trainers.elena,
    },
    {
      id: 'david',
      name: 'David Chen',
      role: 'Master Functional Coach & Sled Specialist',
      experience: '10 Years Elite Athlete Prep',
      bio: 'David directs the functional training turf and sprint lanes. His training methodology emphasizes raw anaerobic endurance, explosive deceleration, and mental fortitude under maximal lactic strain.',
      credentialsStatus: 'Pending Owner Verification',
      credentials: [
        'EXOS Performance Specialist (Sample)',
        'NSCA-CPT Certified Personal Trainer (Sample)',
        'Precision Nutrition Level 1 (Sample)',
      ],
      specialties: ['Sprint & Deceleration Mechanics', 'Turf Conditioning', 'Kettlebell Ballistics'],
      image: IMAGES.trainers.david,
    },
  ];

  const currentCoach = coaches.find((c) => c.id === selectedCoachId) || coaches[0];

  return (
    <section id="trainers" className="py-28 md:py-36 bg-[#171918] border-b border-[#252826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-3">
              <span>ELITE INSTRUCTION</span>
              <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
              <span>VERIFIED CREDENTIALS STANDARD</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] leading-tight">
              MASTER COACHES.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#A7AAA4] font-light leading-relaxed">
            Coaches at The Winter Gym do not supervise; they sculpt. Every movement is scrutinized, every load calculated.
          </p>
        </div>

        {/* Coach Selector Pill-free Segmented Bar */}
        <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-[#252826]">
          {coaches.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCoachId(c.id)}
              className={`px-5 py-3 text-xs font-display tracking-wider uppercase transition-colors cursor-pointer ${
                c.id === selectedCoachId
                  ? 'bg-[#D7B783] text-[#0D0F0E] font-semibold'
                  : 'bg-[#0D0F0E] text-[#A7AAA4] hover:text-[#F2F0E9] border border-[#252826]'
              }`}
            >
              {c.name} — {c.role.split('&')[0]}
            </button>
          ))}
        </div>

        {/* Featured Coach Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch bg-[#0D0F0E] border border-[#252826] p-8 md:p-12">
          {/* Coach Portrait Frame */}
          <div className="lg:col-span-5 relative min-h-[420px] overflow-hidden border border-[#252826] bg-[#171918]">
            <img
              src={currentCoach.image}
              onError={handleImageError}
              alt={currentCoach.name}
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.1] transition-transform duration-700 hover:scale-105"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F0E] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-mono-tabular text-[10px] tracking-[0.2em] uppercase text-[#D7B783] bg-[#0D0F0E]/90 px-3 py-1 border border-[#252826]">
                {currentCoach.experience}
              </span>
            </div>
          </div>

          {/* Coach Bio & Credentials Box */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <div className="font-mono-tabular text-xs uppercase tracking-wider text-[#D7B783] mb-2">
                {currentCoach.role}
              </div>
              <h3 className="font-display text-4xl sm:text-5xl uppercase tracking-wide text-[#F2F0E9] mb-4">
                {currentCoach.name}
              </h3>
              <p className="text-sm sm:text-base text-[#A7AAA4] font-light leading-relaxed mb-8">
                {currentCoach.bio}
              </p>

              {/* Verified Credentials Section (Reserved space as requested) */}
              <div className="bg-[#171918] border border-[#252826] p-6 mb-6">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#252826]">
                  <div className="flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#D7B783]">
                    <Award className="w-4 h-4 text-[#D7B783]" />
                    <span>PROFESSIONAL ACCREDITATIONS</span>
                  </div>
                  <span className="text-[10px] font-mono-tabular text-[#A7AAA4] bg-[#0D0F0E] px-2 py-0.5 border border-[#252826]">
                    OWNER VERIFICATION PENDING
                  </span>
                </div>

                <ul className="space-y-2 text-xs text-[#F2F0E9]/90 font-light mb-4">
                  {currentCoach.credentials.map((cred, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D7B783] shrink-0" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] font-mono-tabular text-[#A7AAA4] leading-normal italic">
                  Note for Gym Owner: Actual certifications, board licenses, and competition records will be updated upon final roster verification.
                </p>
              </div>

              {/* Specialties */}
              <div>
                <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-3">
                  PRIMARY SPECIALTIES
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-[#F2F0E9] font-mono-tabular">
                  {currentCoach.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="bg-[#171918] border border-[#252826] px-3 py-1.5 text-xs text-[#F2F0E9]/90"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-4">
              <button
                onClick={() => onOpenConsultation(`Session with ${currentCoach.name}`)}
                className="group inline-flex items-center gap-3 px-6 py-3.5 bg-[#D7B783] text-[#0D0F0E] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#e4c99c] transition-all cursor-pointer whitespace-nowrap"
              >
                <span>BOOK ASSESSMENT WITH {currentCoach.name.toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
