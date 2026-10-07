import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden flex items-center justify-center border-b border-white/10">
      {/* Background with measured contrast */}
      <div className="absolute inset-0 pointer-events-none">
        <SafeImage
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=85"
          alt="KINETIX Athletic Cadre"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-125 saturate-50"
          fallbackCategory="gym"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a3a19b] mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
          <span>JOIN THE PERFORMANCE CADRE</span>
        </motion.div>

        {/* Oversized Cinematic Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter text-[#f2f0ea] leading-[0.88] mb-8 font-heading"
        >
          READY TO <br />
          <span className="text-[#c6ff00]">LEVEL UP?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-[#a3a19b] max-w-2xl leading-relaxed mb-10 text-balance"
        >
          Your physiology adapts to the demands placed upon it. Step into an environment where standard effort is obsolete and excellence is engineered.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onOpenBooking}
            data-cursor="cta"
            data-cta="true"
            className="px-10 py-5 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-sm font-extrabold uppercase tracking-widest rounded-sm transition-all duration-200 flex items-center gap-3 shadow-xl shadow-[#c6ff00]/20 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c6ff00]"
          >
            <span>CLAIM YOUR DAY PASS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Security / Quality Assurance */}
        <div className="mt-12 flex items-center gap-4 text-xs font-mono uppercase text-[#6e6d68]">
          <span>CAPPED ROSTER</span>
          <span>&middot;</span>
          <span>NO MULTI-YEAR LOCKIN</span>
          <span>&middot;</span>
          <span>24/7 BIOMETRIC PRIVILEGES</span>
        </div>
      </div>
    </section>
  );
};
