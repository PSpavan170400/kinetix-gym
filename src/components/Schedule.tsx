import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, User, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { WEEKLY_SCHEDULE } from '../data/mockData';
import { ClassSession } from '../types';

interface ScheduleProps {
  onReserveClass: (classSession: ClassSession, day: string) => void;
}

export const Schedule: React.FC<ScheduleProps> = ({ onReserveClass }) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL SESSIONS' },
    { id: 'strength', label: 'STRENGTH' },
    { id: 'hiit', label: 'METABOLIC' },
    { id: 'cardio', label: 'ENDURANCE' },
    { id: 'boxing', label: 'COMBAT' },
    { id: 'mobility', label: 'MOBILITY' },
  ];

  const currentDaySchedule = WEEKLY_SCHEDULE[selectedDayIndex];

  const filteredClasses = selectedCategory === 'all'
    ? currentDaySchedule.classes
    : currentDaySchedule.classes.filter((c) => c.category === selectedCategory);

  return (
    <section id="schedule" className="relative w-full py-28 md:py-36 px-6 md:px-12 bg-[#0a0a0a] border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4 text-xs font-mono uppercase tracking-widest text-[#a3a19b]">
              <span className="text-[#c6ff00] font-bold">09</span>
              <span>&mdash;</span>
              <span>WEEKLY ROSTER</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#f2f0ea] font-heading">
              SESSION <br />
              TIMETABLE.
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#a3a19b] leading-relaxed">
            All group regimes are capped at 16 athletes per pod to ensure coach attention and biomechanical feedback. Reserve your platform up to 7 days in advance.
          </p>
        </div>

        {/* Day Selector (Mon - Sun) */}
        <div className="grid grid-cols-7 gap-2 mb-8 bg-[#141414] p-1.5 border border-white/10 rounded-sm overflow-x-auto">
          {WEEKLY_SCHEDULE.map((item, idx) => (
            <button
              key={item.day}
              onClick={() => setSelectedDayIndex(idx)}
              className={`py-3 px-2 text-center rounded-sm transition-all duration-200 cursor-pointer focus-visible:outline-[#c6ff00] ${
                selectedDayIndex === idx
                  ? 'bg-[#c6ff00] text-[#0a0a0a] font-bold shadow-md'
                  : 'text-[#a3a19b] hover:text-[#f2f0ea] hover:bg-white/5'
              }`}
            >
              <span className="block text-xs sm:text-sm font-mono font-bold">{item.shortDay}</span>
              <span className="hidden sm:block text-[10px] uppercase opacity-75 font-mono">
                {item.day.slice(0, 3)}
              </span>
            </button>
          ))}
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-mono tracking-wider uppercase rounded-sm transition-colors cursor-pointer focus-visible:outline-[#c6ff00] ${
                selectedCategory === cat.id
                  ? 'bg-white/20 text-[#f2f0ea] border border-white/30 font-semibold'
                  : 'bg-white/5 text-[#a3a19b] hover:text-[#f2f0ea] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Schedule List */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {filteredClasses.length > 0 ? (
              filteredClasses.map((session, idx) => {
                const spotsLow = session.spotsLeft <= 3;
                return (
                  <motion.div
                    key={`${currentDaySchedule.day}-${session.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className="p-5 sm:p-6 bg-[#121212] hover:bg-[#161616] border border-white/10 hover:border-[#c6ff00]/50 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-200"
                  >
                    {/* Time & Title */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                      <div className="w-28 shrink-0">
                        <span className="text-xl sm:text-2xl font-bold font-mono text-[#c6ff00] tabular-nums block">
                          {session.time}
                        </span>
                        <span className="text-xs font-mono text-[#a3a19b] flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" />
                          {session.duration}
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-white/5 text-[#a3a19b] rounded">
                            {session.category}
                          </span>
                          {spotsLow && (
                            <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-red-950/60 text-red-400 border border-red-800/40 rounded">
                              Only {session.spotsLeft} Spots Left
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold font-heading uppercase text-[#f2f0ea]">
                          {session.name}
                        </h4>
                      </div>
                    </div>

                    {/* Room, Coach & Action */}
                    <div className="flex flex-wrap sm:flex-nowrap items-center justify-between md:justify-end gap-6 pt-4 md:pt-0 border-t md:border-t-0 border-white/5">
                      <div className="text-xs font-mono text-[#a3a19b] space-y-1">
                        <div className="flex items-center gap-1.5 text-[#f2f0ea]">
                          <User className="w-3.5 h-3.5 text-[#c6ff00]" />
                          <span>{session.coach}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#a3a19b]" />
                          <span>{session.room}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => onReserveClass(session, currentDaySchedule.day)}
                        data-cursor="cta"
                        className="px-5 py-2.5 bg-white/10 hover:bg-[#c6ff00] text-[#f2f0ea] hover:text-[#0a0a0a] text-xs font-bold uppercase tracking-wider font-mono rounded-sm transition-all duration-200 flex items-center gap-2 group cursor-pointer focus-visible:outline-[#c6ff00]"
                      >
                        <span>RESERVE SPOT</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <div className="p-12 text-center bg-[#121212] border border-white/10 rounded-sm text-[#a3a19b] font-mono text-sm">
                No sessions match the selected filter on {currentDaySchedule.day}. Please select another category.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
