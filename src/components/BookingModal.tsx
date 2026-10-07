import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Shield, Calendar, Clock, MapPin, AlertCircle, ArrowRight } from 'lucide-react';
import { ClassSession } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  reservedClass?: {
    session: ClassSession;
    day: string;
  } | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialType = 'day_pass',
  reservedClass = null,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    new Date(Date.now() + 86400000).toISOString().split('T')[0]
  );
  const [goal, setGoal] = useState('strength');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset state when closed or opened
  useEffect(() => {
    if (isOpen) {
      setIsConfirmed(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full legal name is required';
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Valid email is required';
    if (!phone.trim() || phone.length < 7) errs.phone = 'Valid phone is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const code = 'KTX-' + Math.random().toString(36).substring(2, 8).toUpperCase();
      setConfirmationCode(code);
      setIsConfirmed(true);
    }, 700);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#121212] border border-white/15 rounded-sm p-6 sm:p-8 text-[#f2f0ea] shadow-2xl overflow-y-auto max-h-[92vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-sm bg-white/5 hover:bg-white/15 text-[#a3a19b] hover:text-[#f2f0ea] transition-colors focus-visible:outline-[#c6ff00]"
        >
          <X className="w-5 h-5" />
        </button>

        {isConfirmed ? (
          /* Confirmation Receipt State */
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#c6ff00] text-[#0a0a0a] mx-auto flex items-center justify-center shadow-lg shadow-[#c6ff00]/25">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#c6ff00] block mb-1">
                ADMISSION PASS PROVISIONED
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#f2f0ea]">
                YOU ARE ON THE CADRE ROSTER
              </h3>
            </div>

            {/* Voucher Card */}
            <div className="p-6 bg-[#161616] border border-white/10 rounded-sm text-left font-mono space-y-3">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <span className="text-xs text-[#a3a19b]">ACCESS ID</span>
                <span className="text-sm font-bold text-[#c6ff00]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-[#a3a19b]">ATHLETE</span>
                <span className="text-[#f2f0ea] font-medium">{fullName}</span>
              </div>
              {reservedClass ? (
                <div className="space-y-1 text-xs pt-1 border-t border-white/5">
                  <div className="flex justify-between">
                    <span className="text-[#a3a19b]">SESSION</span>
                    <span className="text-[#f2f0ea]">{reservedClass.session.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a3a19b]">TIME &amp; DAY</span>
                    <span className="text-[#c6ff00]">{reservedClass.day} &middot; {reservedClass.session.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#a3a19b]">COACH / ROOM</span>
                    <span className="text-[#f2f0ea]">{reservedClass.session.coach} ({reservedClass.session.room})</span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#a3a19b]">RESERVATION TYPE</span>
                  <span className="text-[#f2f0ea]">{initialType}</span>
                </div>
              )}
              <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                <span className="text-[#a3a19b]">VENUE</span>
                <span className="text-[#f2f0ea]">KINETIX Flagship &middot; District 7</span>
              </div>
            </div>

            <p className="text-xs text-[#a3a19b] leading-relaxed max-w-md mx-auto">
              Please present this voucher or provide your name at the front concierge on arrival. Towel service, lockers, and pre-workout hydration are complimentary.
            </p>

            <button
              onClick={onClose}
              className="w-full py-4 bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
            >
              DONE &amp; RETURN TO SITE
            </button>
          </div>
        ) : (
          /* Intake Form */
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c6ff00] mb-2">
              <Shield className="w-3.5 h-3.5" />
              <span>OFFICIAL REGISTRATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#f2f0ea] mb-2">
              {reservedClass ? 'RESERVE SESSION SPOT' : 'SECURE ADMISSION'}
            </h3>

            {reservedClass ? (
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm mb-6 flex flex-col gap-1.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-[#f2f0ea] font-bold text-sm uppercase">{reservedClass.session.name}</span>
                  <span className="text-[#c6ff00] font-bold">{reservedClass.session.time}</span>
                </div>
                <div className="flex items-center justify-between text-[#a3a19b]">
                  <span>{reservedClass.day} &middot; {reservedClass.session.duration}</span>
                  <span>{reservedClass.session.coach} &middot; {reservedClass.session.room}</span>
                </div>
              </div>
            ) : (
              <p className="text-xs font-mono text-[#a3a19b] mb-6">
                Active Protocol: <span className="text-[#f2f0ea] font-bold">{initialType}</span>
              </p>
            )}

            <form onSubmit={handleConfirm} noValidate className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-1.5">
                  Full Legal Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Alexander Vance"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-4 py-3 bg-[#181818] border rounded-sm text-sm text-[#f2f0ea] placeholder-[#6e6d68] focus:outline-none transition-colors ${
                    errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#c6ff00]'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="athlete@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 bg-[#181818] border rounded-sm text-sm text-[#f2f0ea] placeholder-[#6e6d68] focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500' : 'border-white/10 focus:border-[#c6ff00]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-1.5">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-4 py-3 bg-[#181818] border rounded-sm text-sm text-[#f2f0ea] placeholder-[#6e6d68] focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-500' : 'border-white/10 focus:border-[#c6ff00]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {!reservedClass && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-1.5">
                      Target Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#c6ff00] rounded-sm text-sm text-[#f2f0ea] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-1.5">
                      Training Focus
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#c6ff00] rounded-sm text-sm text-[#f2f0ea] focus:outline-none"
                    >
                      <option value="strength">Barbell &amp; Absolute Strength</option>
                      <option value="hypertrophy">Mechanical Hypertrophy</option>
                      <option value="athletic">Sprint Turf &amp; Metabolic</option>
                      <option value="combat">Boxing &amp; Rotary Power</option>
                      <option value="recovery">Thermal Contrast Therapy</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#c6ff00] hover:bg-[#b2e600] disabled:bg-[#c6ff00]/50 text-[#0a0a0a] text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c6ff00]/15"
                >
                  {isSubmitting ? (
                    <span>CONFIRMING RESERVATION...</span>
                  ) : (
                    <>
                      <span>CONFIRM RESERVATION</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[10px] text-center text-[#6e6d68] font-mono uppercase">
                Zero spam policy &middot; Biometric credential issued on check-in
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};
