import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/mockData';

interface MembershipProps {
  onOpenBooking: (planName?: string) => void;
}

export const Membership: React.FC<MembershipProps> = ({ onOpenBooking }) => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="membership" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">06</span>
              <span>&mdash;</span>
              <span>MEMBERSHIP TIERS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              INVESTMENT IN <br />
              LONGEVITY.
            </h2>
          </div>

          {/* Billing Switch (Monthly / Annual) */}
          <div className="flex items-center gap-2 p-1.5 bg-[#141414] border border-white/10 rounded-sm">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer focus-visible:outline-[#c6ff00] ${
                billingPeriod === 'monthly'
                  ? 'bg-white/10 text-[#f2f0ea] font-semibold'
                  : 'text-[#a3a19b] hover:text-[#f2f0ea]'
              }`}
            >
              MONTH-TO-MONTH
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`px-4 py-2 text-xs font-mono tracking-wider uppercase rounded-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 focus-visible:outline-[#c6ff00] ${
                billingPeriod === 'annual'
                  ? 'bg-[#c6ff00] text-[#0a0a0a] font-bold'
                  : 'text-[#a3a19b] hover:text-[#f2f0ea]'
              }`}
            >
              <span>ANNUAL COMMITMENT</span>
              <span className="text-[10px] px-1 py-0.2 bg-black/20 rounded">SAVE 18%</span>
            </button>
          </div>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isPerformance = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative flex flex-col justify-between p-8 sm:p-10 rounded-sm transition-all duration-300 ${
                  isPerformance
                    ? 'bg-[#141414] border-2 border-[#c6ff00] shadow-2xl shadow-[#c6ff00]/10 lg:-translate-y-2'
                    : 'bg-[#111111] border border-white/10 hover:border-white/25'
                }`}
              >
                {/* Popular Accent Ribbon */}
                {isPerformance && (
                  <div className="absolute -top-3.5 left-8 px-3 py-1 bg-[#c6ff00] text-[#0a0a0a] text-[10px] font-extrabold uppercase tracking-widest font-mono rounded-sm flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>MARQUEE ATHLETE TIER</span>
                  </div>
                )}

                <div>
                  {/* Tier Title */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
                      {plan.badge}
                    </span>
                    <span className="text-xs font-mono text-[#c6ff00]">
                      NO HIDDEN FEES
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-[#f2f0ea] mb-3">
                    {plan.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a3a19b] leading-relaxed mb-8">
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-white/10">
                    <span className="text-2xl font-mono text-[#a3a19b]">$</span>
                    <span className="text-5xl sm:text-6xl font-black font-heading text-[#f2f0ea] tracking-tight tabular-nums">
                      {price}
                    </span>
                    <span className="text-xs font-mono text-[#a3a19b] uppercase ml-2">
                      / month &middot; billed {billingPeriod}
                    </span>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#a3a19b] block mb-2">
                      TIER ENTITLEMENTS:
                    </span>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#f2f0ea]">
                        <Check className="w-4 h-4 text-[#c6ff00] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Exclusive Tier Perks */}
                  {plan.exclusivePerks.length > 0 && (
                    <div className="pt-4 border-t border-white/5 mb-8">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#c6ff00] block mb-2">
                        SPECIAL PRIVILEGES:
                      </span>
                      {plan.exclusivePerks.map((perk, idx) => (
                        <p key={idx} className="text-xs text-[#a3a19b] font-mono leading-relaxed">
                          + {perk}
                        </p>
                      ))}
                    </div>
                  )}
                </div>

                {/* Plan Action Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onOpenBooking(`Membership Plan: ${plan.name} (${billingPeriod})`)}
                    data-cursor="cta"
                    data-cta={isPerformance ? 'true' : 'false'}
                    className={`w-full py-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 group ${
                      isPerformance
                        ? 'bg-[#c6ff00] hover:bg-[#b2e600] text-[#0a0a0a] shadow-lg shadow-[#c6ff00]/15'
                        : 'bg-white/10 hover:bg-white/20 text-[#f2f0ea] border border-white/10'
                    }`}
                  >
                    <span>SELECT {plan.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  <p className="text-[10px] text-center text-[#6e6d68] font-mono mt-3 uppercase">
                    Includes initial movement screen &amp; orientation
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
