import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { SafeImage } from './SafeImage';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0d0d0d] border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">08</span>
              <span>&mdash;</span>
              <span>MEASURABLE OUTCOMES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              ATHLETE <br />
              CASE AUDITS.
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3.5 rounded-sm bg-[#161616] border border-white/10 hover:border-[#c6ff00] text-[#f2f0ea] hover:text-[#c6ff00] transition-colors cursor-pointer focus-visible:outline-[#c6ff00]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3.5 rounded-sm bg-[#161616] border border-white/10 hover:border-[#c6ff00] text-[#f2f0ea] hover:text-[#c6ff00] transition-colors cursor-pointer focus-visible:outline-[#c6ff00]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Card */}
        <div className="relative bg-[#141414] border border-white/10 p-8 sm:p-14 rounded-sm overflow-hidden">
          {/* Subtle Quote Watermark Icon */}
          <Quote className="absolute top-8 right-8 w-20 h-20 text-white/5 pointer-events-none stroke-[1]" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Portrait & Verified Metric */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm overflow-hidden border-2 border-[#c6ff00] mb-4 bg-[#1e1e1e]">
                  <SafeImage
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover grayscale contrast-125"
                    fallbackCategory="coach"
                  />
                </div>

                <h3 className="text-xl font-bold uppercase font-heading text-[#f2f0ea]">
                  {current.name}
                </h3>
                <p className="text-xs font-mono text-[#a3a19b] mb-4">
                  {current.role}
                </p>

                {/* Concrete Attainment Metric */}
                <div className="p-3 bg-[#1c1c1c] border border-white/10 rounded-sm w-full">
                  <span className="text-[10px] font-mono uppercase text-[#a3a19b] block mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#c6ff00]" />
                    <span>VERIFIED ADAPTATION</span>
                  </span>
                  <p className="text-sm font-bold text-[#c6ff00] font-mono">
                    {current.metric}
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed Narrative */}
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 text-xs font-mono text-[#a3a19b] uppercase mb-6">
                  <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[#f2f0ea]">
                    {current.program}
                  </span>
                  <span>&middot;</span>
                  <span>{current.duration}</span>
                </div>

                <blockquote className="text-xl sm:text-2xl md:text-3xl text-[#f2f0ea] font-medium leading-relaxed mb-6 font-display">
                  "{current.quote}"
                </blockquote>

                <div className="flex items-center gap-2 text-xs font-mono text-[#a3a19b]">
                  <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
                  <span>BIOMECHANICAL SCAN LOGGED &amp; VERIFIED IN CADRE DATABASE</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10 pt-6 border-t border-white/10">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#c6ff00]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
