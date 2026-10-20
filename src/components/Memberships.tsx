/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Check, Star, Info, ArrowRight } from 'lucide-react';
import { calculatePlanPricing, formatCurrency } from '../utils/pricing';

interface MembershipsProps {
  onSelectTier: (tierName: string) => void;
}

interface PlanTier {
  id: string;
  name: string;
  baseMonthly: number;
  highlighted?: boolean;
  tagline: string;
  badge?: string;
  features: string[];
  access: string;
}

export const Memberships: React.FC<MembershipsProps> = ({ onSelectTier }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans: PlanTier[] = [
    {
      id: 'essential',
      name: 'Essential',
      baseMonthly: 165,
      tagline: 'Standard access for the autonomous disciplined lifter.',
      access: 'Full training floor access 7 days a week',
      features: [
        'Unrestricted strength & functional floor access',
        'Locker rooms with rain showers & Malin+Goetz amenities',
        'Fresh eucalyptus towel service on every visit',
        '2 Complimentary guest day passes per month',
        'Access to member lounge & espresso bar',
      ],
    },
    {
      id: 'performance',
      name: 'Performance',
      baseMonthly: 235,
      highlighted: true,
      badge: 'RECOMMENDED SELECTION',
      tagline: 'Comprehensive athletic development with biometric monitoring.',
      access: 'Priority peak floor access & full recovery quarters',
      features: [
        'All Essential privileges included',
        'Quarterly 3D InBody & DEXA body composition scan',
        'Full access to Infrared Sauna & Cold Plunge suite',
        'Personal programming review every 8 weeks',
        'Complimentary workout fuel & recovery smoothie per session',
        '4 Complimentary guest passes per month',
      ],
    },
    {
      id: 'elite',
      name: 'Elite',
      baseMonthly: 360,
      badge: 'APEX PRIVATE TIER',
      tagline: 'The ultimate private club tier with dedicated coaching integration.',
      access: '24/7 Biometric keycard access + Private Coaching suite',
      features: [
        'All Performance & Essential privileges',
        '4 Dedicated 1-on-1 coaching sessions each month',
        'Bespoke clinical nutrition & macronutrient blueprint',
        'Private locker assignment with laundry & gear refresh',
        '24/7 direct encrypted messaging with Head of Performance',
        'Unlimited VIP guest invitations with prior notice',
      ],
    },
  ];

  return (
    <section id="memberships" className="py-28 md:py-36 bg-[#0D0F0E] border-b border-[#252826] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D7B783] font-medium mb-3">
            <span>MEMBERSHIP INVITATIONS</span>
            <span aria-hidden="true" className="text-[#A7AAA4]">·</span>
            <span>CAPPED MEMBERSHIP</span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-[0.03em] text-[#F2F0E9] mb-4">
            CHOOSE YOUR STANDARD.
          </h2>

          <p className="text-sm sm:text-base text-[#A7AAA4] font-light leading-relaxed mb-8">
            Admissions are maintained at a strict ratio to ensure complete floor availability.
            Select the tier that aligns with your competitive and personal objectives.
          </p>

          {/* Interactive Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 bg-[#171918] border border-[#252826] rounded-none mb-6">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 text-xs font-mono-tabular tracking-wider uppercase transition-colors cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-[#D7B783] text-[#0D0F0E] font-semibold'
                  : 'text-[#A7AAA4] hover:text-[#F2F0E9]'
              }`}
            >
              MONTHLY BILLING
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 text-xs font-mono-tabular tracking-wider uppercase transition-colors cursor-pointer flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#D7B783] text-[#0D0F0E] font-semibold'
                  : 'text-[#A7AAA4] hover:text-[#F2F0E9]'
              }`}
            >
              <span>ANNUAL PRIVILEGE</span>
              <span className="text-[10px] bg-[#0D0F0E] text-[#D7B783] px-1.5 py-0.5 border border-[#D7B783]/30">
                SAVE 15%
              </span>
            </button>
          </div>

          {/* Demo Content Disclaimer Banner */}
          <div className="flex items-center gap-2 text-xs text-[#D7B783] bg-[#D7B783]/10 border border-[#D7B783]/30 px-4 py-2 font-mono-tabular">
            <Info className="w-3.5 h-3.5 shrink-0" />
            <span>
              Illustrative demo content: Pricing and specific tier privileges are subject to gym owner verification.
            </span>
          </div>
        </div>

        {/* 3-Column Plan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const pricing = calculatePlanPricing({
              baseMonthly: plan.baseMonthly,
              billingCycle,
              annualDiscountPercent: 15,
            });

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between p-8 md:p-10 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#171918] border-2 border-[#D7B783] shadow-[0_0_35px_rgba(215,183,131,0.15)] lg:-translate-y-2'
                    : 'bg-[#131514] border border-[#252826] hover:border-[#D7B783]/50'
                }`}
              >
                {/* Highlight Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="font-mono-tabular text-[10px] font-semibold tracking-[0.2em] uppercase bg-[#D7B783] text-[#0D0F0E] px-3 py-1">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wider text-[#F2F0E9] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#A7AAA4] font-light leading-relaxed mb-6 min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="pb-6 mb-6 border-b border-[#252826]">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-5xl md:text-6xl font-bold tracking-tight text-[#F2F0E9]">
                        {formatCurrency(pricing.effectiveMonthly)}
                      </span>
                      <span className="font-mono-tabular text-xs text-[#A7AAA4]">
                        {pricing.periodLabel}
                      </span>
                    </div>

                    {billingCycle === 'annual' && pricing.annualSavings > 0 && (
                      <div className="mt-2 text-xs font-mono-tabular text-[#D7B783]">
                        Billed annually at {formatCurrency(pricing.billedAmount)} (Saves {formatCurrency(pricing.annualSavings)}/yr)
                      </div>
                    )}
                  </div>

                  {/* Access Level */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#D7B783] mb-1">
                      ACCESS LEVEL
                    </div>
                    <div className="text-xs text-[#F2F0E9] font-medium">
                      {plan.access}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-2">
                      INCLUDED PRIVILEGES
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F2F0E9]/90 font-light">
                        <Check className="w-3.5 h-3.5 text-[#D7B783] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div>
                  <button
                    onClick={() => onSelectTier(plan.name)}
                    className={`w-full py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? 'bg-[#D7B783] text-[#0D0F0E] hover:bg-[#e4c99c] hover:shadow-[0_0_24px_rgba(215,183,131,0.3)]'
                        : 'bg-transparent text-[#F2F0E9] border border-[#A7AAA4]/40 hover:border-[#D7B783] hover:text-[#D7B783]'
                    }`}
                  >
                    <span>REQUEST {plan.name.toUpperCase()} INVITATION</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <p className="text-[10px] font-mono-tabular text-[#A7AAA4] text-center mt-2.5 tracking-wider">
                    NO LOCK-IN CONTRACT · 30-DAY NOTICE
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
