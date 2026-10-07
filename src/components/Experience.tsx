import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ShieldCheck, Flame, Activity, ArrowRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 'biomechanics',
      title: 'Biomechanical Precision',
      subtitle: 'Force Curves & Structural Integrity',
      description: 'We do not believe in arbitrary sweat. Every movement pattern is calibrated against human joint architecture. Utilizing Eleiko IPF-certified barbells, Keiser pneumatic systems, and force-plate feedback, we eliminate compensatory patterns while scaling absolute strength.',
      metrics: ['IPF Competition Spec', 'Zero Inertia Pneumatic Resistance', 'Velocity-Based Velocity Transducers'],
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80',
      icon: ShieldCheck,
    },
    {
      id: 'metabolic',
      title: 'High-Velocity Conditioning',
      subtitle: '40-Meter Turf & Anaerobic Threshold',
      description: 'Engineered for athletes who demand rapid power-to-weight transfer. Our 40-meter indoor turf is outfitted with torque prowler sleds, Concept2 fleets, and Woodway motorless curve treadmills that force your posterior chain to generate 100% of the kinetic drive.',
      metrics: ['40m High-Traction Sprint Deck', 'Woodway Curve Treadmills (30% More Caloric Load)', 'Sub-10s Anaerobic Sprints'],
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      icon: Flame,
    },
    {
      id: 'recovery',
      title: 'Autonomic Contrast Recovery',
      subtitle: 'Cold Plunge & Full-Spectrum Infrared',
      description: 'Training breaks tissue down; adaptation occurs exclusively during parasympathetic rest. Transition between 4°C chilled immersion pools, 90°C Finnish cedar infrared saunas, and pneumatic NormaTec lymphatic flush suites to compress recovery timelines.',
      metrics: ['4°C Sub-Zero Immersion Pool', '90°C Full-Spectrum Infrared Sauna', 'Clinical Compression Sleeves'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      icon: Activity,
    },
  ];

  return (
    <section id="philosophy" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">04</span>
              <span>&mdash;</span>
              <span>THE PERFORMANCE TRIAD</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              DESIGNED FOR <br />
              ADAPTATION.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#a3a19b] leading-relaxed">
            Three interconnected pillars forming an unbroken athletic loop: mechanical force production, metabolic conditioning, and autonomic nervous system restoration.
          </p>
        </div>

        {/* Interactive Pillar Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`p-6 text-left border rounded-sm transition-all duration-300 relative overflow-hidden cursor-pointer focus-visible:outline-[#c6ff00] ${
                  isActive
                    ? 'bg-[#161616] border-[#c6ff00] shadow-lg shadow-black/50'
                    : 'bg-[#101010] border-white/10 hover:border-white/20'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#c6ff00]" />
                )}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#c6ff00]">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? 'text-[#c6ff00]' : 'text-[#a3a19b]'}`} />
                </div>
                <h3 className="text-lg font-bold font-heading uppercase text-[#f2f0ea] mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-[#a3a19b]">
                  {pillar.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121212] border border-white/10 p-6 sm:p-10 rounded-sm"
          >
            {/* Visual Media Carrier */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-sm overflow-hidden bg-[#181818]">
              <SafeImage
                src={pillars[activeTab].image}
                alt={pillars[activeTab].title}
                className="w-full h-full object-cover filter brightness-90 contrast-110"
                fallbackCategory="facility"
                overlayGradient
              />
              <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 text-[11px] font-mono uppercase text-[#c6ff00]">
                FACILITY PROTOCOL SPEC 0{activeTab + 1}
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#c6ff00] mb-2 block">
                  {pillars[activeTab].subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-[#f2f0ea] mb-4">
                  {pillars[activeTab].title}
                </h3>
                <p className="text-sm sm:text-base text-[#a3a19b] leading-relaxed mb-6">
                  {pillars[activeTab].description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {pillars[activeTab].metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-[#f2f0ea] font-mono">
                      <Check className="w-4 h-4 text-[#c6ff00] shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c6ff00] hover:text-[#b2e600] font-bold group"
                >
                  <span>VIEW TIMETABLE FOR THIS FACILITY</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
