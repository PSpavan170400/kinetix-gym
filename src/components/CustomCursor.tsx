import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'cta' | 'view'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch or prefers reduced motion
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setIsTouch(true);
      }
    };
    checkTouch();

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Inspect target to determine cursor state
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('button, a, input, select, textarea, [role="button"]');
      const isCta = target.closest('[data-cursor="cta"]') || (interactive && (interactive.classList.contains('bg-[#c6ff00]') || interactive.getAttribute('data-cta') === 'true'));
      const isView = target.closest('[data-cursor="view"]');

      if (isCta) {
        setCursorState('cta');
        setCursorText('');
      } else if (isView) {
        setCursorState('view');
        setCursorText(isView.getAttribute('data-cursor-text') || 'VIEW');
      } else if (interactive) {
        setCursorState('hover');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isTouch, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Primary Dot / Indicator */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none"
        animate={{
          x: mousePosition.x - (cursorState === 'cta' ? 24 : cursorState === 'view' ? 36 : cursorState === 'hover' ? 18 : 6),
          y: mousePosition.y - (cursorState === 'cta' ? 24 : cursorState === 'view' ? 36 : cursorState === 'hover' ? 18 : 6),
          width: cursorState === 'cta' ? 48 : cursorState === 'view' ? 72 : cursorState === 'hover' ? 36 : 12,
          height: cursorState === 'cta' ? 48 : cursorState === 'view' ? 72 : cursorState === 'hover' ? 36 : 12,
          backgroundColor:
            cursorState === 'cta'
              ? 'rgba(198, 255, 0, 0.9)'
              : cursorState === 'view'
              ? 'rgba(198, 255, 0, 0.95)'
              : cursorState === 'hover'
              ? 'rgba(242, 240, 234, 0.15)'
              : 'rgba(198, 255, 0, 0.85)',
          border: cursorState === 'hover' ? '1px solid rgba(242, 240, 234, 0.4)' : 'none',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4,
        }}
      >
        {cursorState === 'view' && (
          <span className="text-[10px] font-extrabold tracking-widest text-[#0a0a0a] uppercase font-mono">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
