import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Clock, Flame, User, X, Check } from 'lucide-react';
import { PROGRAMS } from '../data/mockData';
import { Program } from '../types';
import { SafeImage } from './SafeImage';

interface ProgramsProps {
  onOpenBooking: (programName?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const categories = [
    { id: 'all', label: 'ALL PROTOCOLS' },
    { id: 'strength', label: 'STRENGTH' },
    { id: 'hypertrophy', label: 'HYPERTROPHY' },
    { id: 'functional', label: 'FUNCTIONAL' },
    { id: 'boxing', label: 'COMBAT' },
    { id: 'hiit', label: 'METABOLIC' },
    { id: 'mobility', label: 'MOBILITY' },
    { id: 'recovery', label: 'RECOVERY' },
  ];

  const filteredPrograms = activeCategory === 'all'
    ? PROGRAMS
    : PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="programs" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">02</span>
              <span>&mdash;</span>
              <span>TRAINING REGIMES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              PERFORMANCE <br />
              PROTOCOLS.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#a3a19b] leading-relaxed">
            Every regime is periodized and grounded in exercise physiology. Select a program designed for your targeted physiological adaptations.
          </p>
        </div>

        {/* Functional Category Filter (Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-sm transition-all duration-200 whitespace-nowrap cursor-pointer focus-visible:outline-[#c6ff00] ${
                activeCategory === cat.id
                  ? 'bg-[#c6ff00] text-[#0a0a0a] font-bold shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-[#a3a19b] hover:text-[#f2f0ea] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetric Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program, idx) => (
            <motion.div
              key={program.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedProgram(program)}
              data-cursor="view"
              data-cursor-text="EXPAND"
              className="group relative bg-[#121212] border border-white/10 hover:border-[#c6ff00]/50 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50 cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#181818]">
                <SafeImage
                  src={program.image}
                  alt={program.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.75] group-hover:brightness-90"
                  fallbackCategory={program.category === 'boxing' ? 'boxing' : program.category === 'recovery' ? 'recovery' : 'gym'}
                  overlayGradient
                />

                {/* Top Badge: Level */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 text-[#f2f0ea] font-medium">
                    {program.intensity} INTENSITY
                  </span>
                </div>

                {/* Top Right: Expand Arrow */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#f2f0ea] group-hover:text-[#0a0a0a] group-hover:bg-[#c6ff00] transition-colors duration-200">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                {/* Duration & Coach Bottom Bar */}
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-xs font-mono text-[#f2f0ea]/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c6ff00]" />
                    {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#a3a19b]" />
                    {program.coach}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-bold font-heading uppercase text-[#f2f0ea] mb-2 group-hover:text-[#c6ff00] transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-xs text-[#a3a19b] font-mono mb-3">
                    {program.tagline}
                  </p>
                  <p className="text-sm text-[#a3a19b] line-clamp-2 leading-relaxed mb-4">
                    {program.description}
                  </p>
                </div>

                {/* Bottom Card Metric */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#a3a19b]">
                  <span className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-[#c6ff00]" />
                    {program.metrics.caloriesBurn}
                  </span>
                  <span className="text-[#f2f0ea] font-medium group-hover:underline">
                    DETAILS &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Program Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-white/15 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-[#f2f0ea] shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-sm bg-white/5 hover:bg-white/15 text-[#a3a19b] hover:text-[#f2f0ea] transition-colors focus-visible:outline-[#c6ff00]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#c6ff00] uppercase mb-2">
                <span>{selectedProgram.category} PROTOCOL</span>
                <span>&middot;</span>
                <span>{selectedProgram.intensity} INTENSITY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase font-heading text-[#f2f0ea] mb-3">
                {selectedProgram.name}
              </h2>

              <p className="text-sm font-mono text-[#a3a19b] mb-6">
                {selectedProgram.tagline}
              </p>

              <div className="relative h-60 w-full mb-6 rounded-sm overflow-hidden">
                <SafeImage
                  src={selectedProgram.image}
                  alt={selectedProgram.name}
                  className="w-full h-full object-cover"
                  fallbackCategory="gym"
                />
              </div>

              <p className="text-sm sm:text-base text-[#a3a19b] leading-relaxed mb-6">
                {selectedProgram.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-3">
                  PROGRAM PILLARS &amp; HARDWARE
                </h4>
                <div className="space-y-2">
                  {selectedProgram.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#f2f0ea]">
                      <Check className="w-4 h-4 text-[#c6ff00] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-white/5 border border-white/10 rounded-sm mb-6 text-center text-xs font-mono">
                <div>
                  <span className="text-[#a3a19b] block mb-1">DURATION</span>
                  <span className="text-[#f2f0ea] font-bold">{selectedProgram.duration}</span>
                </div>
                <div>
                  <span className="text-[#a3a19b] block mb-1">ENERGY</span>
                  <span className="text-[#c6ff00] font-bold">{selectedProgram.metrics.caloriesBurn}</span>
                </div>
                <div>
                  <span className="text-[#a3a19b] block mb-1">LEAD COACH</span>
                  <span className="text-[#f2f0ea] font-bold truncate block">{selectedProgram.coach}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const prog = selectedProgram.name;
                    setSelectedProgram(null);
                    onOpenBooking(prog);
                  }}
                  className="w-full sm:flex-1 py-3.5 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors"
                >
                  RESERVE SPOT IN THIS PROTOCOL
                </button>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="w-full sm:w-auto px-6 py-3.5 border border-white/20 hover:border-white/40 text-xs font-mono uppercase text-[#a3a19b] hover:text-[#f2f0ea] rounded-sm transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
