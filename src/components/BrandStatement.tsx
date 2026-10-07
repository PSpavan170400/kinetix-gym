import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const BrandStatement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  });

  const statementWords = [
    'WE', 'DO', 'NOT', 'ACCOMMODATE', 'EXCUSES.',
    'WE', 'ENGINEER', 'RESILIENCE,', 'RAW', 'FORCE,',
    'AND', 'UNBREAKABLE', 'MOMENTUM.'
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full py-28 md:py-40 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
          <span className="text-[#c6ff00] font-bold">01</span>
          <span>&mdash;</span>
          <span>THE KINETIX CREED</span>
        </div>

        {/* Oversized Dynamic Typography */}
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight leading-[1.08] font-heading flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2">
          {statementWords.map((word, index) => {
            const start = index / statementWords.length;
            const end = start + 1 / statementWords.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const color = useTransform(
              scrollYProgress,
              [start, end],
              ['#6e6d68', word === 'ENGINEER' || word === 'RESILIENCE,' ? '#c6ff00' : '#f2f0ea']
            );

            return (
              <motion.span
                key={index}
                style={{ opacity, color }}
                className="transition-colors duration-150 inline-block"
              >
                {word}
              </motion.span>
            );
          })}
        </div>

        {/* Supporting Editorial Paragraph */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              BIOMECHANICAL STANDARD
            </span>
          </div>
          <div className="md:col-span-8">
            <p className="text-base sm:text-lg text-[#a3a19b] font-normal leading-relaxed text-balance">
              Conventional fitness centers build environments around distraction and casual effort. KINETIX is calibrated for singular athletic purpose: competition-calibrated steel, scientific recovery modalities, and coaching grounded in real human mechanics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
