import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Award, ArrowUpRight, X, Calendar } from 'lucide-react';
import { TRAINERS } from '../data/mockData';
import { Trainer } from '../types';
import { SafeImage } from './SafeImage';

interface TrainersProps {
  onOpenBooking: (coachName?: string) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onOpenBooking }) => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section id="coaches" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0d0d0d] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">05</span>
              <span>&mdash;</span>
              <span>HUMAN CAPITAL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              MASTER <br />
              COACHES.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#a3a19b] leading-relaxed">
            Our directors do not supervise; they diagnose and calibrate. Collegiate strength coaches, biomechanists, and former Olympic athletes.
          </p>
        </div>

        {/* Editorial Trainer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              onClick={() => setSelectedTrainer(trainer)}
              data-cursor="view"
              data-cursor-text="DOSSIER"
              className="group relative bg-[#141414] border border-white/10 hover:border-[#c6ff00]/60 rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer"
            >
              {/* Portrait Container */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#1a1a1a]">
                <SafeImage
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100"
                  fallbackCategory="coach"
                  overlayGradient
                />

                {/* Experience Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-[#f2f0ea]">
                    {trainer.experience}
                  </span>
                </div>

                {/* Quick Action Icon */}
                <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-sm bg-black/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#f2f0ea] group-hover:bg-[#c6ff00] group-hover:text-[#0a0a0a] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="h-[2px] w-0 bg-[#c6ff00] transition-all duration-300 group-hover:w-full mb-3" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#c6ff00] block mb-1">
                    {trainer.specialization}
                  </span>
                  <h3 className="text-xl font-bold uppercase font-heading text-[#f2f0ea]">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-5 border-t border-white/10 bg-[#121212]">
                <p className="text-xs text-[#a3a19b] font-mono uppercase tracking-wider mb-2">
                  {trainer.role}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-[#a3a19b]">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#c6ff00]" />
                    {trainer.credentials[0]}
                  </span>
                  <span className="text-[#f2f0ea] font-medium group-hover:text-[#c6ff00] transition-colors">
                    PROFILE &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trainer Profile Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedTrainer(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#121212] border border-white/15 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative text-[#f2f0ea] shadow-2xl"
            >
              <button
                onClick={() => setSelectedTrainer(null)}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-sm bg-white/5 hover:bg-white/15 text-[#a3a19b] hover:text-[#f2f0ea] transition-colors focus-visible:outline-[#c6ff00]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row gap-6 mb-6 items-start">
                <div className="w-28 h-36 rounded-sm overflow-hidden shrink-0 border border-white/10">
                  <SafeImage
                    src={selectedTrainer.image}
                    alt={selectedTrainer.name}
                    className="w-full h-full object-cover object-top"
                    fallbackCategory="coach"
                  />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#c6ff00] uppercase tracking-wider block mb-1">
                    {selectedTrainer.role}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#f2f0ea] mb-2">
                    {selectedTrainer.name}
                  </h2>
                  <p className="text-xs font-mono text-[#a3a19b] mb-3">
                    {selectedTrainer.specialization} &middot; {selectedTrainer.experience}
                  </p>
                  <blockquote className="text-xs italic text-[#f2f0ea]/80 border-l-2 border-[#c6ff00] pl-3 py-1 bg-white/5">
                    "{selectedTrainer.quote}"
                  </blockquote>
                </div>
              </div>

              <div className="space-y-4 mb-6 text-sm text-[#a3a19b] leading-relaxed">
                <p>{selectedTrainer.bio}</p>
              </div>

              {/* Verified Credentials */}
              <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-sm">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c6ff00]" />
                  <span>VERIFIED ACCREDITATIONS</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#f2f0ea]">
                  {selectedTrainer.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    const coachName = selectedTrainer.name;
                    setSelectedTrainer(null);
                    onOpenBooking(`Private Consultation with ${coachName}`);
                  }}
                  className="w-full sm:flex-1 py-3.5 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>BOOK 1-ON-1 CONSULTATION</span>
                </button>
                <button
                  onClick={() => setSelectedTrainer(null)}
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
