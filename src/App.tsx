/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStatement } from './components/BrandStatement';
import { Facilities } from './components/Facilities';
import { TrainingPrograms } from './components/TrainingPrograms';
import { CampaignBanner } from './components/CampaignBanner';
import { Memberships } from './components/Memberships';
import { Trainers } from './components/Trainers';
import { Gallery, GALLERY_ITEMS } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { MembershipModal } from './components/MembershipModal';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTier, setModalTier] = useState<string>('Performance');
  const [modalMode, setModalMode] = useState<'join' | 'tour'>('join');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenJoinModal = (tier: string = 'Performance') => {
    setModalTier(tier);
    setModalMode('join');
    setIsModalOpen(true);
  };

  const handleOpenTourModal = () => {
    setModalTier('VIP Tour');
    setModalMode('tour');
    setIsModalOpen(true);
  };

  const handleOpenConsultation = (titleOrCoach?: string) => {
    setModalTier(titleOrCoach || 'Elite');
    setModalMode('tour');
    setIsModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.querySelector('#facilities');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - topOffset,
        behavior: 'smooth',
      });
    }
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <div className="min-h-screen bg-[#0D0F0E] text-[#F2F0E9] selection:bg-[#D7B783] selection:text-[#0D0F0E] flex flex-col font-sans">
      {/* Top Navigation */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero */}
        <Hero
          onOpenJoinModal={() => handleOpenJoinModal('Performance')}
          onExploreClick={handleExploreClick}
        />

        {/* 2. Brand Statement */}
        <BrandStatement onOpenConsultation={() => handleOpenConsultation('Private Club Orientation')} />

        {/* 3. Facilities */}
        <Facilities onSelectFacilityImage={handleOpenLightbox} />

        {/* 4. Training Programs */}
        <TrainingPrograms onOpenConsultation={handleOpenConsultation} />

        {/* 5. Campaign Banner */}
        <CampaignBanner onOpenJoinModal={() => handleOpenJoinModal('Performance')} />

        {/* 6. Memberships */}
        <Memberships onSelectTier={(tierName) => handleOpenJoinModal(tierName)} />

        {/* 7. Trainers */}
        <Trainers onOpenConsultation={handleOpenConsultation} />

        {/* 8. Gallery */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Final CTA */}
        <FinalCta
          onOpenJoinModal={() => handleOpenJoinModal('Performance')}
          onOpenTourModal={handleOpenTourModal}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenJoinModal={() => handleOpenJoinModal('Performance')}
        onOpenTourModal={handleOpenTourModal}
      />

      {/* Interactive Membership & Tour Modal */}
      <MembershipModal
        isOpen={isModalOpen}
        initialTier={modalTier}
        initialMode={modalMode}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Fullscreen Architectural Image Lightbox */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
      />
    </div>
  );
}
