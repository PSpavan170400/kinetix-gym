import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500);
          }, 200);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 60 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 12) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-8 md:p-14 bg-[#0a0a0a] text-[#f2f0ea] select-none"
        >
          {/* Top Brand Tag */}
          <div className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00] animate-pulse" />
              SYSTEM PROTOCOL 01
            </span>
            <button
              onClick={() => {
                setIsDone(true);
                setTimeout(onComplete, 200);
              }}
              className="text-[#a3a19b] hover:text-[#c6ff00] transition-colors cursor-pointer text-xs"
            >
              SKIP [ESC]
            </button>
          </div>

          {/* Center Brand Wordmark */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-4xl md:text-7xl font-extrabold tracking-tighter text-[#f2f0ea] font-heading">
                KINETIX
              </span>
              <span className="text-sm md:text-base font-bold text-[#c6ff00] px-2 py-0.5 border border-[#c6ff00]/40 rounded-sm">
                LAB
              </span>
            </motion.div>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#a3a19b] font-mono">
              ARCHITECTURE OF HUMAN STRENGTH
            </p>
          </div>

          {/* Bottom Progress & Telemetry */}
          <div className="w-full max-w-md">
            <div className="flex items-center justify-between text-xs font-mono text-[#a3a19b] mb-3">
              <span>CALIBRATING BIOMECHANICS</span>
              <span className="text-[#c6ff00] tabular-nums font-semibold">{progress}%</span>
            </div>
            {/* Progress Track */}
            <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
              <motion.div
                className="h-full bg-[#c6ff00]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut', duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-[#6e6d68] uppercase">
              <span>LOC: DISTRICT 7</span>
              <span>24/7 BIOMETRIC READY</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
