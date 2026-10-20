/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GalleryImage } from './Gallery';
import { handleImageError } from '../constants/images';

interface LightboxModalProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
    >
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-20 border-b border-[#252826] bg-[#0D0F0E]/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-display uppercase tracking-widest text-sm text-[#F2F0E9]">
            THE WINTER GYM
          </span>
          <span className="text-[#A7AAA4] text-xs font-mono-tabular">/ ARCHIVE</span>
        </div>

        {/* Counter & Close */}
        <div className="flex items-center gap-6">
          <span className="font-mono-tabular text-xs tracking-widest text-[#D7B783]">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 text-[#A7AAA4] hover:text-[#F2F0E9] transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative max-w-6xl max-h-[75vh] w-full flex items-center justify-center my-auto">
        <img
          src={current.src}
          onError={handleImageError}
          alt={current.title}
          className="max-h-[72vh] max-w-full object-contain filter brightness-[0.92] contrast-[1.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[#252826]"
          referrerPolicy="no-referrer"
        />

        {/* Previous Button */}
        <button
          onClick={onPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 bg-[#0D0F0E]/80 border border-[#252826] text-[#F2F0E9] hover:text-[#D7B783] hover:border-[#D7B783] transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          aria-label="Next image"
          className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 bg-[#0D0F0E]/80 border border-[#252826] text-[#F2F0E9] hover:text-[#D7B783] hover:border-[#D7B783] transition-all cursor-pointer backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-0 inset-x-0 p-6 z-20 border-t border-[#252826] bg-[#0D0F0E]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left">
          <div>
            <div className="font-mono-tabular text-xs uppercase tracking-wider text-[#D7B783]">
              {current.zone}
            </div>
            <h3 className="font-display text-xl uppercase tracking-wide text-[#F2F0E9]">
              {current.title}
            </h3>
          </div>
          <p className="text-xs text-[#A7AAA4] max-w-md font-light leading-relaxed">
            {current.caption}
          </p>
        </div>
      </div>
    </div>
  );
};
