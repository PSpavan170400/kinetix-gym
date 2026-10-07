import React, { useState } from 'react';
import { ArrowUpRight, Check, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !/^\S+@\S+\.\S+$/.test(newsletterEmail)) return;
    setSubscribed(true);
  };

  return (
    <footer className="relative w-full bg-[#0a0a0a] text-[#f2f0ea] pt-20 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Navigation Columns & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-2xl font-black tracking-tighter font-heading text-[#f2f0ea] flex items-center gap-1.5">
              <span>KINETIX</span>
              <span className="w-2 h-2 rounded-full bg-[#c6ff00]" />
            </a>
            <p className="text-xs sm:text-sm text-[#a3a19b] max-w-sm leading-relaxed">
              An elite athletic performance center and training club. Dedicated to force plate diagnostics, barbell biomechanics, and contrast therapy recovery.
            </p>
            <div className="text-xs font-mono text-[#6e6d68]">
              480 PERFORMANCE BLVD &middot; DISTRICT 7
            </div>
          </div>

          {/* Programs Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#f2f0ea] font-bold">
              PROTOCOLS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#a3a19b]">
              <li><a href="#programs" className="hover:text-[#c6ff00] transition-colors">Barbell Strength</a></li>
              <li><a href="#programs" className="hover:text-[#c6ff00] transition-colors">Mechanical Hypertrophy</a></li>
              <li><a href="#programs" className="hover:text-[#c6ff00] transition-colors">Athletic Turf Sprint</a></li>
              <li><a href="#programs" className="hover:text-[#c6ff00] transition-colors">Combat Conditioning</a></li>
              <li><a href="#programs" className="hover:text-[#c6ff00] transition-colors">Thermal Contrast Suite</a></li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#f2f0ea] font-bold">
              FACILITY
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#a3a19b]">
              <li><a href="#philosophy" className="hover:text-[#c6ff00] transition-colors">The Triad Philosophy</a></li>
              <li><a href="#coaches" className="hover:text-[#c6ff00] transition-colors">Master Coaches</a></li>
              <li><a href="#facilities" className="hover:text-[#c6ff00] transition-colors">Floor Blueprint</a></li>
              <li><a href="#membership" className="hover:text-[#c6ff00] transition-colors">Membership Tiers</a></li>
              <li><a href="#schedule" className="hover:text-[#c6ff00] transition-colors">Weekly Timetable</a></li>
            </ul>
          </div>

          {/* Research & Dispatch Newsletter */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#f2f0ea] font-bold">
              THE PERFORMANCE DISPATCH
            </h4>
            <p className="text-xs text-[#a3a19b] leading-relaxed">
              Bi-weekly scientific briefs on neuromuscular adaptation, hypertrophy mechanics, and contrast recovery.
            </p>

            {subscribed ? (
              <div className="p-3 bg-white/5 border border-[#c6ff00]/40 rounded-sm text-xs font-mono text-[#c6ff00] flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>Subscribed to research briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter athlete email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#141414] border border-white/10 rounded-sm text-xs font-mono text-[#f2f0ea] placeholder-[#6e6d68] focus:border-[#c6ff00] focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-xs font-bold rounded-sm transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Big Brand Statement Banner */}
        <div className="py-12 border-b border-white/10 flex flex-col items-center justify-center text-center">
          <span className="text-4xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-white/[0.07] font-heading select-none pointer-events-none">
            TRAIN WITH PURPOSE.
          </span>
        </div>

        {/* Bottom Legal & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6e6d68]">
          <p>&copy; {new Date().getFullYear()} KINETIX Performance Club. All athletic rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#a3a19b] transition-colors cursor-pointer">PRIVACY PROTOCOL</span>
            <span className="hover:text-[#a3a19b] transition-colors cursor-pointer">TERMS OF ADMISSION</span>
            <span className="hover:text-[#a3a19b] transition-colors cursor-pointer">BIOMETRIC SECURITY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
