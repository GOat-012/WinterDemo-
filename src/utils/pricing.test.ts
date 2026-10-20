import test from 'node:test';
import assert from 'node:assert/strict';
import { calculatePlanPricing, formatCurrency, validateBookingForm } from './pricing.ts';

test('calculatePlanPricing calculates monthly rate properly without discount', () => {
  const result = calculatePlanPricing({
    baseMonthly: 200,
    billingCycle: 'monthly',
  });
  assert.equal(result.effectiveMonthly, 200);
  assert.equal(result.billedAmount, 200);
  assert.equal(result.annualSavings, 0);
  assert.equal(result.periodLabel, '/ month');
});

test('calculatePlanPricing calculates annual discount and savings correctly', () => {
  const result = calculatePlanPricing({
    baseMonthly: 200,
    billingCycle: 'annual',
    annualDiscountPercent: 15,
  });
  // 200 * 0.85 = 170
  assert.equal(result.effectiveMonthly, 170);
  assert.equal(result.billedAmount, 170 * 12); // 2040
  assert.equal(result.annualSavings, (200 * 12) - (170 * 12)); // 360
  assert.equal(result.periodLabel, '/ month (billed annually)');
});

test('calculatePlanPricing gracefully handles zero or negative values', () => {
  const result = calculatePlanPricing({
    baseMonthly: 0,
    billingCycle: 'monthly',
  });
  assert.equal(result.effectiveMonthly, 0);
  assert.equal(result.billedAmount, 0);
});

test('formatCurrency formats integer values into dollar amounts', () => {
  assert.equal(formatCurrency(195), '$195');
  assert.equal(formatCurrency(2450), '$2,450');
});

test('validateBookingForm returns errors on empty or invalid inputs', () => {
  const emptyRes = validateBookingForm({
    fullName: '',
    email: 'invalid-email',
    phone: '123',
    tier: 'invalid-tier',
  });
  assert.equal(emptyRes.isValid, false);
  assert.ok(emptyRes.errors.fullName);
  assert.ok(emptyRes.errors.email);
  assert.ok(emptyRes.errors.phone);
  assert.ok(emptyRes.errors.tier);
});

test('validateBookingForm succeeds on valid inputs', () => {
  const validRes = validateBookingForm({
    fullName: 'Alexander Vance',
    email: 'alex@example.com',
    phone: '+1 (555) 234-5678',
    tier: 'performance',
    preferredTime: 'morning',
    trainingGoal: 'Strength & Hypertrophy',
  });
  assert.equal(validRes.isValid, true);
  assert.equal(Object.keys(validRes.errors).length, 0);
});
