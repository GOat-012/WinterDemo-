/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, ArrowRight, ShieldCheck, Clock, User, Mail, Phone } from 'lucide-react';
import { validateBookingForm } from '../utils/pricing';

interface MembershipModalProps {
  isOpen: boolean;
  initialTier?: string;
  initialMode?: 'join' | 'tour';
  onClose: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  initialTier = 'Performance',
  initialMode = 'join',
  onClose,
}) => {
  const [tier, setTier] = useState<string>('Performance');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning');
  const [trainingGoal, setTrainingGoal] = useState('Strength & Hypertrophy');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (initialTier) {
      setTier(initialTier);
    }
  }, [initialTier]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate using tested pure logic
    const validation = validateBookingForm({
      fullName,
      email,
      phone,
      tier: tier.toLowerCase().includes('essential')
        ? 'essential'
        : tier.toLowerCase().includes('elite')
        ? 'elite'
        : tier.toLowerCase().includes('tour')
        ? 'vip-tour'
        : 'performance',
      preferredTime,
      trainingGoal,
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate luxury concierge application processing
    setTimeout(() => {
      const code = `TWG-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`;
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
    >
      <div className="relative w-full max-w-xl bg-[#171918] border border-[#252826] shadow-2xl p-6 sm:p-10 text-[#F2F0E9] my-8 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 text-[#A7AAA4] hover:text-[#F2F0E9] hover:bg-[#252826] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Demo Notification Ribbon */}
        <div className="flex items-center gap-2 text-[11px] font-mono-tabular text-[#D7B783] bg-[#0D0F0E] px-3.5 py-2 border border-[#252826] mb-6">
          <ShieldCheck className="w-4 h-4 shrink-0 text-[#D7B783]" />
          <span>CLIENT DEMO MODE: Test application submission (no actual fees charged).</span>
        </div>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="font-mono-tabular text-xs uppercase tracking-widest text-[#D7B783]">
                ADMISSIONS DESK
              </span>
              <h2 id="modal-headline" className="font-display text-3xl sm:text-4xl uppercase tracking-wide text-[#F2F0E9] mt-1">
                {initialMode === 'tour' ? 'REQUEST PRIVATE TOUR' : 'MEMBERSHIP INVITATION'}
              </h2>
              <p className="text-xs sm:text-sm text-[#A7AAA4] font-light mt-2 leading-relaxed">
                Please complete your candidate brief. The Winter Gym concierge reviews each applicant to ensure alignment with our training standard.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Tier Selection */}
              <div>
                <label className="block text-xs font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-2">
                  SELECT INVITATION TIER / VISIT FORMAT
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Essential', 'Performance', 'Elite'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTier(t)}
                      className={`py-2.5 px-3 text-xs font-display tracking-wider uppercase transition-colors border cursor-pointer ${
                        tier.toLowerCase().includes(t.toLowerCase())
                          ? 'bg-[#D7B783] text-[#0D0F0E] font-bold border-[#D7B783]'
                          : 'bg-[#0D0F0E] text-[#A7AAA4] hover:text-[#F2F0E9] border-[#252826]'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {errors.tier && <p className="text-xs text-red-400 mt-1">{errors.tier}</p>}
              </div>

              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-1.5">
                  FULL LEGAL NAME *
                </label>
                <div className="relative">
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Julian Montgomery"
                    className="w-full bg-[#0D0F0E] border border-[#252826] focus:border-[#D7B783] px-4 py-3 text-sm text-[#F2F0E9] placeholder-[#A7AAA4]/40 focus:outline-none transition-colors"
                  />
                  <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#A7AAA4]" />
                </div>
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Phone Split */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-1.5">
                    EMAIL ADDRESS *
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="julian@domain.com"
                      className="w-full bg-[#0D0F0E] border border-[#252826] focus:border-[#D7B783] px-4 py-3 text-sm text-[#F2F0E9] placeholder-[#A7AAA4]/40 focus:outline-none transition-colors"
                    />
                    <Mail className="absolute right-3.5 top-3.5 w-4 h-4 text-[#A7AAA4]" />
                  </div>
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-1.5">
                    PHONE NUMBER *
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0D0F0E] border border-[#252826] focus:border-[#D7B783] px-4 py-3 text-sm text-[#F2F0E9] placeholder-[#A7AAA4]/40 focus:outline-none transition-colors"
                    />
                    <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-[#A7AAA4]" />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Preferred Time & Training Focus */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredTime" className="block text-xs font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-1.5">
                    PREFERRED TRAINING TIME
                  </label>
                  <select
                    id="preferredTime"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#0D0F0E] border border-[#252826] focus:border-[#D7B783] px-4 py-3 text-sm text-[#F2F0E9] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="early-morning">Early Morning (05:00 - 08:00)</option>
                    <option value="mid-morning">Mid-Morning (08:00 - 11:30)</option>
                    <option value="afternoon">Afternoon (12:00 - 16:30)</option>
                    <option value="evening">Evening Peak (17:00 - 21:00)</option>
                    <option value="night">Late Night / 24-Hour Access</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="trainingGoal" className="block text-xs font-mono-tabular uppercase tracking-wider text-[#A7AAA4] mb-1.5">
                    PRIMARY OBJECTIVE
                  </label>
                  <select
                    id="trainingGoal"
                    value={trainingGoal}
                    onChange={(e) => setTrainingGoal(e.target.value)}
                    className="w-full bg-[#0D0F0E] border border-[#252826] focus:border-[#D7B783] px-4 py-3 text-sm text-[#F2F0E9] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Strength & Hypertrophy">Strength & Hypertrophy</option>
                    <option value="Competitive Powerlifting">Competitive Powerlifting</option>
                    <option value="Athletic Speed & Conditioning">Athletic Speed & Conditioning</option>
                    <option value="Orthopedic Longevity & Joint Health">Orthopedic Longevity & Joint Health</option>
                    <option value="Executive Private Coaching">Executive Private Coaching</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-3 py-4 bg-[#D7B783] text-[#0D0F0E] text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] hover:bg-[#e4c99c] hover:shadow-[0_0_25px_rgba(215,183,131,0.3)] transition-all cursor-pointer disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'PROCESSING BRIEF...' : `TRANSMIT APPLICATION FOR ${tier.toUpperCase()}`}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <div className="text-[11px] font-mono-tabular text-[#A7AAA4] text-center">
                Concierge response guaranteed within 24 business hours.
              </div>
            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 bg-[#D7B783]/15 border border-[#D7B783] mx-auto flex items-center justify-center text-[#D7B783]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono-tabular text-xs uppercase tracking-widest text-[#D7B783]">
                APPLICATION REGISTERED
              </span>
              <h3 className="font-display text-3xl uppercase tracking-wide text-[#F2F0E9] mt-1">
                STAND BY FOR CONCIERGE DISPATCH
              </h3>
              <p className="text-sm text-[#A7AAA4] font-light max-w-md mx-auto mt-2 leading-relaxed">
                Thank you, <strong className="text-[#F2F0E9] font-medium">{fullName}</strong>. Your candidate brief for the <strong className="text-[#D7B783] font-medium">{tier}</strong> tier has been queued for admissions review.
              </p>
            </div>

            <div className="bg-[#0D0F0E] border border-[#252826] p-4 max-w-sm mx-auto text-left space-y-1.5 font-mono-tabular text-xs">
              <div className="text-[#A7AAA4]">CANDIDATE DOSSIER:</div>
              <div className="text-[#F2F0E9] font-semibold text-sm text-[#D7B783]">{confirmationCode}</div>
              <div className="text-[#A7AAA4]">DESIRED SLOT: {preferredTime}</div>
              <div className="text-[#A7AAA4]">FOCUS: {trainingGoal}</div>
            </div>

            <div className="p-3 bg-[#171918] border border-[#D7B783]/20 text-[11px] font-mono-tabular text-[#D7B783] max-w-sm mx-auto">
              [DEMO STATE NOTICE] In production, an SMS & email invitation link with membership orientation access is dispatched automatically.
            </div>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#D7B783] text-[#0D0F0E] text-xs font-semibold uppercase tracking-wider hover:bg-[#e4c99c] transition-colors cursor-pointer"
            >
              RETURN TO EXPLORATION
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
