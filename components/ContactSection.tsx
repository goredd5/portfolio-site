'use client';

import { useState } from 'react';
import ContactModal from '@/components/ContactModal';

export function HeroContactButton() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsContactOpen(true)}
        className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 rounded-lg font-semibold hover:bg-white/20 hover:border-white transition-colors"
      >
        Get In Touch
      </button>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}

export function PageContactButton() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsContactOpen(true)}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
      >
        Get In Touch
      </button>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
