/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Youtube, Twitter, MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenJoinModal: () => void;
  onOpenTourModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenJoinModal, onOpenTourModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0F0E] text-[#F2F0E9] pt-20 pb-12 border-t border-[#252826]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#252826]">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl md:text-3xl font-bold tracking-[0.16em] uppercase text-[#F2F0E9]">
                THE WINTER GYM
              </span>
              <span className="font-mono-tabular text-[10px] tracking-[0.3em] uppercase text-[#D7B783] mt-1">
                STRONGER EVERYDAY
              </span>
            </div>
            <p className="text-sm text-[#A7AAA4] font-light leading-relaxed max-w-sm">
              A private luxury athletic club forged for individuals who prioritize physical discipline, biomechanical precision, and an uncompromising atmosphere.
            </p>
            <div className="flex items-center gap-4 text-[#A7AAA4]">
              <a
                href="#instagram"
                aria-label="Instagram profile"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 border border-[#252826] flex items-center justify-center hover:border-[#D7B783] hover:text-[#D7B783] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                aria-label="YouTube channel"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 border border-[#252826] flex items-center justify-center hover:border-[#D7B783] hover:text-[#D7B783] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter X profile"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 border border-[#252826] flex items-center justify-center hover:border-[#D7B783] hover:text-[#D7B783] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div className="text-xs font-mono-tabular uppercase tracking-[0.2em] text-[#D7B783] mb-5">
              EXPLORE
            </div>
            <ul className="space-y-3 text-xs uppercase tracking-wider text-[#A7AAA4] font-medium">
              <li>
                <button onClick={() => scrollTo('#facilities')} className="hover:text-[#F2F0E9] transition-colors cursor-pointer">
                  Facilities & Equipment
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#training')} className="hover:text-[#F2F0E9] transition-colors cursor-pointer">
                  Training Programs
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#memberships')} className="hover:text-[#F2F0E9] transition-colors cursor-pointer">
                  Membership Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#trainers')} className="hover:text-[#F2F0E9] transition-colors cursor-pointer">
                  Master Coaches
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#gallery')} className="hover:text-[#F2F0E9] transition-colors cursor-pointer">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('#about')} className="hover:text-[#F2F0E9] transition-colors cursor-pointer">
                  Our Philosophy
                </button>
              </li>
            </ul>
          </div>

          {/* Operating Hours (Clearly labeled placeholder) */}
          <div>
            <div className="text-xs font-mono-tabular uppercase tracking-[0.2em] text-[#D7B783] mb-5 flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>HOURS OF OPERATION</span>
            </div>
            <div className="space-y-3 text-xs text-[#A7AAA4] font-light">
              <div>
                <div className="text-[#F2F0E9] font-medium font-mono-tabular">MONDAY — FRIDAY</div>
                <div className="font-mono-tabular">05:00 — 23:00 EST</div>
              </div>
              <div>
                <div className="text-[#F2F0E9] font-medium font-mono-tabular">SATURDAY — SUNDAY</div>
                <div className="font-mono-tabular">06:00 — 21:00 EST</div>
              </div>
              <div className="pt-2 text-[11px] font-mono-tabular text-[#D7B783]">
                * 24/7 Biometric Key Access for Elite members
              </div>
              <div className="text-[10px] text-[#A7AAA4]/70 italic">
                (Operating schedule sample for demo)
              </div>
            </div>
          </div>

          {/* Contact & Location Placeholder */}
          <div>
            <div className="text-xs font-mono-tabular uppercase tracking-[0.2em] text-[#D7B783] mb-5">
              CLUB QUARTERS
            </div>
            <div className="space-y-3 text-xs text-[#A7AAA4] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D7B783] shrink-0 mt-0.5" />
                <span>
                  104 Industrial Boulevard, District 4<br />
                  Metropolitan Area, NY 10014
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D7B783] shrink-0" />
                <span className="font-mono-tabular">+1 (800) 946-8374</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D7B783] shrink-0" />
                <span>concierge@thewintergym.com</span>
              </div>
              <div className="pt-3">
                <button
                  onClick={onOpenTourModal}
                  className="text-xs uppercase tracking-wider font-semibold text-[#D7B783] hover:text-[#F2F0E9] underline decoration-[#D7B783] underline-offset-4 cursor-pointer"
                >
                  Book In-Person Tour →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tabular text-[#A7AAA4]">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} THE WINTER GYM. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#D7B783] bg-[#171918] px-3 py-1.5 border border-[#252826]">
            <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
            <span>CLIENT DEMO PROTOTYPE · PENDING OWNER SIGN-OFF ON FEES & HOURS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
