import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { PERFORMANCE_STATS } from '../data/mockData';

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={containerRef}
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#0d0d0d] border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-12 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
          <span className="text-[#c6ff00] font-bold">03</span>
          <span>&mdash;</span>
          <span>QUANTITATIVE RIGOR</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {PERFORMANCE_STATS.map((stat, idx) => (
            <StatCard key={idx} stat={stat} isInView={isInView} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: {
    value: number;
    suffix: string;
    label: string;
    context: string;
  };
  isInView: boolean;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, isInView, delay }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const target = stat.value;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = progress === 1 ? target : Math.round((easeOut * target) * 10) / 10;

      setCurrentValue(val);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCounter);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, stat.value, delay]);

  const displayVal = stat.value % 1 === 0 ? Math.round(currentValue) : currentValue.toFixed(1);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="p-6 bg-[#141414] border-l-2 border-l-[#c6ff00] border-y border-r border-white/5 flex flex-col justify-between"
    >
      <div>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-[#f2f0ea] tracking-tight tabular-nums mb-2 flex items-baseline">
          <span>{displayVal}</span>
          <span className="text-[#c6ff00] text-3xl sm:text-4xl ml-1">{stat.suffix}</span>
        </div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-[#f2f0ea] mb-1 font-mono">
          {stat.label}
        </h4>
      </div>
      <p className="text-xs text-[#a3a19b] font-mono mt-4 pt-3 border-t border-white/5">
        {stat.context}
      </p>
    </motion.div>
  );
};
