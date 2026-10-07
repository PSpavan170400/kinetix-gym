import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: (type?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Membership', href: '#membership' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Schedule', href: '#schedule' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/40'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl md:text-2xl font-black tracking-tighter text-[#f2f0ea] font-heading flex items-center gap-1.5 focus-visible:outline-[#c6ff00] focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            <span>KINETIX</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c6ff00]" />
          </a>

          {/* Zone 2: Clean text navigation links with sophisticated hover */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#a3a19b]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative py-1 transition-colors duration-200 hover:text-[#f2f0ea] group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c6ff00] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenBooking('membership_trial')}
              data-cursor="cta"
              data-cta="true"
              className="relative overflow-hidden group px-5 py-2.5 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#c6ff00] focus-visible:outline-none"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 text-[#f2f0ea] hover:text-[#c6ff00] transition-colors focus-visible:outline-[#c6ff00]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Minimal Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-white/5 pointer-events-none">
          <div
            className="h-full bg-[#c6ff00] transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#0a0a0a] flex flex-col justify-between px-8 py-24 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#a3a19b]/60">
                NAVIGATION INDEX
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className="text-2xl font-bold font-heading text-[#f2f0ea] hover:text-[#c6ff00] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#a3a19b]">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
              <div className="text-xs font-mono text-[#a3a19b] space-y-1">
                <p>480 PERFORMANCE BLVD · DISTRICT 7</p>
                <p>24/7 BIOMETRIC ACCESS ACTIVE</p>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('membership_trial');
                }}
                className="w-full py-3.5 bg-[#c6ff00] text-[#0a0a0a] font-bold text-center text-sm uppercase tracking-wider rounded-sm hover:bg-[#b2e600] transition-colors"
              >
                CLAIM 1-DAY PASS &amp; TOUR
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
