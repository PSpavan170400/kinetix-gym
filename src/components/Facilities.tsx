import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Shield } from 'lucide-react';
import { FACILITIES } from '../data/mockData';
import { Facility } from '../types';
import { SafeImage } from './SafeImage';

export const Facilities: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : FACILITIES.length - 1));
  }, [lightboxIndex]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < FACILITIES.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  return (
    <section id="facilities" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">07</span>
              <span>&mdash;</span>
              <span>ARCHITECTURAL FOOTPRINT</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              IMMERSIVE <br />
              FACILITIES.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#a3a19b] leading-relaxed">
            30,000 square feet of acoustically isolated, climate-controlled, competition-calibrated training and contrast recovery environments.
          </p>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES.map((facility, index) => {
            const isFeatured = index === 0 || index === 3;
            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => handleOpenLightbox(index)}
                data-cursor="view"
                data-cursor-text="LIGHTBOX"
                className={`group relative rounded-sm overflow-hidden bg-[#141414] border border-white/10 hover:border-[#c6ff00]/60 transition-all duration-300 cursor-pointer ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Container */}
                <div className={`relative w-full ${isFeatured ? 'h-80 sm:h-96' : 'h-72 sm:h-80'} overflow-hidden`}>
                  <SafeImage
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] contrast-110 group-hover:brightness-95"
                    fallbackCategory="facility"
                    overlayGradient
                  />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-[#f2f0ea]">
                      {facility.category}
                    </span>
                  </div>

                  {/* Expand Icon Button */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-sm bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#f2f0ea] group-hover:bg-[#c6ff00] group-hover:text-[#0a0a0a] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <span className="text-[10px] font-mono text-[#c6ff00] uppercase tracking-wider block mb-1">
                      {facility.capacity}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading text-[#f2f0ea] group-hover:text-[#c6ff00] transition-colors">
                      {facility.name}
                    </h3>
                  </div>
                </div>

                {/* Sub-bar with specs */}
                <div className="p-4 bg-[#111111] border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#a3a19b]">
                  <p className="line-clamp-1 max-w-[80%] text-[11px]">
                    {facility.specifications.join(' · ')}
                  </p>
                  <span className="text-[#f2f0ea] font-semibold group-hover:text-[#c6ff00]">
                    VIEW &rarr;
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Facility Gallery Lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg p-4 sm:p-8"
            onClick={handleCloseLightbox}
          >
            {/* Top Close Bar */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
              <div className="text-xs font-mono text-[#a3a19b] uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
                <span>GALLERY &middot; {lightboxIndex + 1} OF {FACILITIES.length}</span>
              </div>
              <button
                onClick={handleCloseLightbox}
                aria-label="Close Lightbox (ESC)"
                className="p-2.5 rounded-sm bg-white/10 hover:bg-white/20 text-[#f2f0ea] transition-colors focus-visible:outline-[#c6ff00]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous Facility"
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-sm bg-black/70 border border-white/20 hover:border-[#c6ff00] text-[#f2f0ea] hover:text-[#c6ff00] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next Facility"
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-sm bg-black/70 border border-white/20 hover:border-[#c6ff00] text-[#f2f0ea] hover:text-[#c6ff00] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Center Content Box */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col rounded-sm overflow-hidden bg-[#111111] border border-white/15"
            >
              <div className="relative h-96 sm:h-[500px] w-full bg-black">
                <SafeImage
                  src={FACILITIES[lightboxIndex].image}
                  alt={FACILITIES[lightboxIndex].name}
                  className="w-full h-full object-cover"
                  fallbackCategory="facility"
                />
              </div>

              {/* Lightbox Metadata Drawer */}
              <div className="p-6 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff00] uppercase mb-1">
                    <span>{FACILITIES[lightboxIndex].category}</span>
                    <span>&middot;</span>
                    <span>{FACILITIES[lightboxIndex].capacity}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase font-heading text-[#f2f0ea]">
                    {FACILITIES[lightboxIndex].name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a3a19b] mt-1 max-w-2xl">
                    {FACILITIES[lightboxIndex].description}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase text-[#a3a19b] block mb-1">
                    KEY RIG &amp; SPECS
                  </span>
                  <div className="space-y-0.5 text-xs font-mono text-[#f2f0ea]">
                    {FACILITIES[lightboxIndex].specifications.map((s, idx) => (
                      <p key={idx}>{s}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
