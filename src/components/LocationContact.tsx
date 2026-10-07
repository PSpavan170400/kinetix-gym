import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLUB_LOCATION } from '../data/mockData';
import { BookingFormData } from '../types';

export const LocationContact: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    visitType: 'day_pass',
    preferredDate: '',
    primaryGoal: 'strength',
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Partial<Record<keyof BookingFormData, string>> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) errs.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Valid phone number is required';
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">11</span>
              <span>&mdash;</span>
              <span>HEADQUARTERS &amp; INQUIRIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              LOCATE <br />
              THE LAB.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#a3a19b] leading-relaxed">
            Schedule your guided private walkthrough and claim your complimentary 1-day pass. Staffed consultations must be reserved in advance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Dossier & Architectural Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-[#141414] border border-white/10 rounded-sm">
              <h3 className="text-xl font-bold uppercase font-heading text-[#f2f0ea] mb-6">
                {CLUB_LOCATION.name}
              </h3>

              <div className="space-y-4 text-sm text-[#a3a19b]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#c6ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#f2f0ea] block">Physical Compound</span>
                    <span>{CLUB_LOCATION.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#c6ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#f2f0ea] block">Operational Schedule</span>
                    <span className="text-xs font-mono block">{CLUB_LOCATION.hours.weekdays}</span>
                    <span className="text-xs font-mono block">{CLUB_LOCATION.hours.weekends}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#c6ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#f2f0ea] block">Direct Concierge</span>
                    <a href={`tel:${CLUB_LOCATION.phone}`} className="hover:text-[#c6ff00] transition-colors">
                      {CLUB_LOCATION.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#c6ff00] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#f2f0ea] block">Private Desk</span>
                    <a href={`mailto:${CLUB_LOCATION.email}`} className="hover:text-[#c6ff00] transition-colors">
                      {CLUB_LOCATION.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Stylized Dark Architectural Map Canvas Preview */}
            <div className="p-6 bg-[#121212] border border-white/10 rounded-sm relative overflow-hidden h-64 flex flex-col justify-between">
              {/* Map grid lines */}
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#c6ff00_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="absolute inset-0 border border-white/5 pointer-events-none" />

              <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#a3a19b]">
                <span className="flex items-center gap-1.5 text-[#c6ff00]">
                  <span className="w-2 h-2 rounded-full bg-[#c6ff00] animate-ping" />
                  LIVE RADAR ACTIVE
                </span>
                <span>GEO: 37.7749° N, 122.4194° W</span>
              </div>

              {/* Pin Center */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                <div className="p-3 rounded-full bg-[#c6ff00]/10 border border-[#c6ff00] text-[#c6ff00] shadow-lg shadow-[#c6ff00]/20 mb-2">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <span className="text-xs font-bold font-heading uppercase text-[#f2f0ea] tracking-wider">
                  KINETIX HEADQUARTERS
                </span>
                <span className="text-[10px] font-mono text-[#a3a19b]">
                  Secure Valet &amp; Private Parking Underground
                </span>
              </div>

              <div className="relative z-10 text-[10px] font-mono text-[#6e6d68] text-right">
                DISTRICT 7 CORRIDOR
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Visit Booking Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-8 sm:p-10 rounded-sm">
            <h3 className="text-2xl font-bold uppercase font-heading text-[#f2f0ea] mb-2">
              RESERVE YOUR PRIVATE ADMISSION
            </h3>
            <p className="text-xs font-mono text-[#a3a19b] mb-8">
              Complete the intake to initiate your 1-day training pass and coach-led facility orientation.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-[#182015] border border-[#c6ff00]/40 rounded-sm text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#c6ff00] text-[#0a0a0a] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold uppercase font-heading text-[#f2f0ea]">
                  PASS PROVISIONED SUCCESSFULLY
                </h4>
                <p className="text-sm text-[#a3a19b] max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[#f2f0ea] font-bold">{formData.fullName}</span>. Your concierge voucher for <span className="text-[#c6ff00] font-mono">{formData.preferredDate}</span> has been dispatched to <span className="text-[#f2f0ea] font-bold">{formData.email}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      visitType: 'day_pass',
                      preferredDate: '',
                      primaryGoal: 'strength',
                      notes: '',
                    });
                  }}
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-xs font-mono uppercase text-[#f2f0ea] rounded-sm transition-colors cursor-pointer"
                >
                  SCHEDULE ANOTHER INQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-2">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Elena Rostova"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-2">
                      Electronic Mail *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. athlete@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-4 py-3 bg-[#181818] border rounded-sm text-sm text-[#f2f0ea] focus:outline-none transition-colors ${
                        errors.preferredDate ? 'border-red-500' : 'border-white/10 focus:border-[#c6ff00]'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.preferredDate}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Visit Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-2">
                      Admission Type
                    </label>
                    <select
                      value={formData.visitType}
                      onChange={(e) => setFormData({ ...formData, visitType: e.target.value as any })}
                      className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#c6ff00] rounded-sm text-sm text-[#f2f0ea] focus:outline-none"
                    >
                      <option value="day_pass">Complimentary 1-Day Training Pass</option>
                      <option value="facility_tour">Architectural Tour &amp; Facility Walk</option>
                      <option value="coach_consultation">1-on-1 Biomechanics Consultation</option>
                      <option value="membership_trial">Executive Membership Trial</option>
                    </select>
                  </div>

                  {/* Primary Goal */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a3a19b] mb-2">
                      Primary Objective
                    </label>
                    <select
                      value={formData.primaryGoal}
                      onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value as any })}
                      className="w-full px-4 py-3 bg-[#181818] border border-white/10 focus:border-[#c6ff00] rounded-sm text-sm text-[#f2f0ea] focus:outline-none"
                    >
                      <option value="strength">Olympic &amp; Absolute Strength</option>
                      <option value="athletic_performance">Athletic Power &amp; Speed</option>
                      <option value="fat_loss">Body Recomposition &amp; Hypertrophy</option>
                      <option value="longevity">Joint Health &amp; Contrast Recovery</option>
                      <option value="rehabilitation">Movement Dysfunction Re-education</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-cursor="cta"
                  className="w-full py-4 bg-[#c6ff00] hover:bg-[#b2e600] disabled:bg-[#c6ff00]/50 text-[#0a0a0a] font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#c6ff00]/10"
                >
                  {isSubmitting ? (
                    <span>AUTHORIZING INTAKE...</span>
                  ) : (
                    <>
                      <span>CONFIRM DAY PASS INTAKE</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
