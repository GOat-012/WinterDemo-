/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PricingOptions {
  baseMonthly: number;
  billingCycle: 'monthly' | 'annual';
  annualDiscountPercent?: number;
}

export interface PricingResult {
  effectiveMonthly: number;
  billedAmount: number;
  annualSavings: number;
  periodLabel: string;
}

export function calculatePlanPricing({
  baseMonthly,
  billingCycle,
  annualDiscountPercent = 15,
}: PricingOptions): PricingResult {
  if (baseMonthly <= 0) {
    return {
      effectiveMonthly: 0,
      billedAmount: 0,
      annualSavings: 0,
      periodLabel: billingCycle === 'annual' ? '/ month (billed annually)' : '/ month',
    };
  }

  if (billingCycle === 'annual') {
    const discountedMonthly = Math.round(baseMonthly * (1 - annualDiscountPercent / 100));
    const annualTotal = discountedMonthly * 12;
    const fullYearCost = baseMonthly * 12;
    const annualSavings = fullYearCost - annualTotal;

    return {
      effectiveMonthly: discountedMonthly,
      billedAmount: annualTotal,
      annualSavings,
      periodLabel: '/ month (billed annually)',
    };
  }

  return {
    effectiveMonthly: baseMonthly,
    billedAmount: baseMonthly,
    annualSavings: 0,
    periodLabel: '/ month',
  };
}

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('en-US')}`;
}

export interface BookingFormInput {
  fullName: string;
  email: string;
  phone: string;
  tier: string;
  preferredTime?: string;
  trainingGoal?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateBookingForm(data: BookingFormInput): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailPattern.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  const digitsOnly = (data.phone || '').replace(/\D/g, '');
  if (!data.phone || digitsOnly.length < 8) {
    errors.phone = 'Please provide a valid phone number (minimum 8 digits).';
  }

  const validTiers = ['essential', 'performance', 'elite', 'day-pass', 'vip-tour'];
  if (!data.tier || !validTiers.includes(data.tier.toLowerCase())) {
    errors.tier = 'Please select a valid membership tier or visit pass.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
