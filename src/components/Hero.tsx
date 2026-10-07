import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, ShieldCheck, Zap, Activity } from 'lucide-react';
import { SafeImage } from './SafeImage';

interface HeroProps {
  onOpenBooking: (type?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax offset (-10px to +10px)
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };

    if (window.matchMedia('(min-width: 1024px)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPrograms = () => {
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 overflow-hidden bg-[#0a0a0a]">
      {/* Dynamic Background Image with Depth & Measured Scrim */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0) scale(1.05)`,
          transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <SafeImage
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="KINETIX Athletic Performance Training"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-125 saturate-90"
          fallbackCategory="gym"
        />
        {/* Measured dark scrims for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#0a0a0a]/90" />
      </motion.div>

      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-4 md:grid-cols-6 border-x border-white/10">
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10 hidden md:block" />
          <div className="border-r border-white/10" />
          <div className="border-r border-white/10 hidden md:block" />
          <div className="border-r border-white/10" />
        </div>
      </div>

      {/* Top Tagline / Domain Anchor */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#a3a19b] uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-pulse" />
          <span>HUMAN PERFORMANCE LAB &middot; DISTRICT 7</span>
        </motion.div>
      </div>

      {/* Main Asymmetric Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8">
        <div className="max-w-4xl">
          {/* Main Cinematic Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter text-[#f2f0ea] leading-[0.88] mb-6 font-heading">
              FORGE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2f0ea] via-[#f2f0ea] to-[#a3a19b]">
                YOUR LIMITS.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[#a3a19b] font-normal leading-relaxed max-w-2xl mb-10 text-balance"
          >
            High-performance strength conditioning, sports biomechanics, and contrast recovery for individuals who refuse the ordinary.
          </motion.p>

          {/* CTA Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => onOpenBooking('day_pass')}
              data-cursor="cta"
              data-cta="true"
              className="px-8 py-4 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-sm font-extrabold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center gap-3 shadow-lg shadow-[#c6ff00]/10 hover:shadow-[#c6ff00]/25 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c6ff00] focus-visible:outline-none"
            >
              <span>CLAIM 1-DAY PASS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToPrograms}
              className="px-8 py-4 bg-transparent hover:bg-white/5 text-[#f2f0ea] text-sm font-semibold uppercase tracking-wider border border-white/20 hover:border-white/50 rounded-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#f2f0ea] focus-visible:outline-none"
            >
              EXPLORE PROTOCOLS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Metadata & Scroll Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Zero-Pill Clean Typographic Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#a3a19b]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c6ff00]" />
            <span>24/7 Biometric Access</span>
          </div>
          <span className="text-white/20">&middot;</span>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#c6ff00]" />
            <span>Olympic Grade Eleiko Hardware</span>
          </div>
          <span className="text-white/20">&middot;</span>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#c6ff00]" />
            <span>Contrast Therapy Suite</span>
          </div>
        </div>

        {/* Scroll Prompt */}
        <button
          onClick={scrollToPrograms}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a3a19b] hover:text-[#c6ff00] transition-colors group cursor-pointer focus-visible:outline-[#c6ff00]"
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-[#c6ff00]" />
        </button>
      </div>
    </section>
  );
};
