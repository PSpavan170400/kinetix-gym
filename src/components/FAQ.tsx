import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0d0d0d] border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">10</span>
              <span>&mdash;</span>
              <span>CLARIFICATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              FREQUENTLY <br />
              ASKED.
            </h2>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#a3a19b]" />
            <input
              type="text"
              placeholder="Search protocol queries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#141414] border border-white/10 rounded-sm text-xs font-mono text-[#f2f0ea] placeholder-[#6e6d68] focus:border-[#c6ff00] focus:outline-none"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-sm transition-colors duration-200 overflow-hidden ${
                    isOpen ? 'border-[#c6ff00]/60 bg-[#141414]' : 'border-white/10 bg-[#111111] hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-[#c6ff00]"
                  >
                    <span className="text-base sm:text-lg font-bold font-heading uppercase text-[#f2f0ea]">
                      {faq.question}
                    </span>
                    <span
                      className={`p-1.5 rounded-sm border transition-colors shrink-0 ${
                        isOpen
                          ? 'bg-[#c6ff00] text-[#0a0a0a] border-[#c6ff00]'
                          : 'bg-white/5 text-[#a3a19b] border-white/10'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#a3a19b] leading-relaxed border-t border-white/5">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center bg-[#111111] border border-white/10 rounded-sm text-xs font-mono text-[#a3a19b]">
              No questions found matching "{searchQuery}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
