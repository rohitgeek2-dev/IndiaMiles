'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MapPin, Sparkles } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type BestTimeToVisitProps = {
  destination: Destination;
};

export function BestTimeToVisit({ destination }: BestTimeToVisitProps) {
  const currentMonth = new Date().getMonth();
  const [activeMonth, setActiveMonth] = useState(currentMonth);

  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-transparent to-sky-50/30 pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
          >
            Best Time To Visit
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
          >
            Plan your visit to{' '}
            <span className="text-gradient-gold-teal">{destination.name}</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-lg leading-relaxed text-[#4B5563] max-w-xl"
          >
            Choose the perfect season for your {destination.name} experience.
          </motion.p>
        </div>

        {/* Month timeline */}
        <div className="mb-12 overflow-x-auto pb-2 hide-scrollbar">
          <div className="flex gap-2 min-w-max">
            {destination.seasonalCalendar.map((item, index) => (
              <button
                key={item.month}
                onClick={() => setActiveMonth(index)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  index === activeMonth
                    ? 'bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] text-[#111827] border border-[rgba(212,175,106,0.4)] shadow-[0_8px_20px_rgba(212,175,106,0.25)]'
                    : 'bg-white text-[#4B5563] border border-[#E5E7EB] hover:bg-[#FAF8F4] hover:text-[#111827] hover:border-[#EAC587] hover:-translate-y-0.5 shadow-sm'
                }`}
              >
                {item.month}
              </button>
            ))}
          </div>
        </div>

        {/* Active month content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMonth}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-luxury"
          >
            <div className="grid gap-0 md:grid-cols-[1fr_1.5fr]">
              {/* Month visual panel */}
              <div className={`flex flex-col items-center justify-center bg-gradient-to-br ${destination.seasonalCalendar[activeMonth].color} p-10 text-white`}>
                <CalendarDays className="h-16 w-16 opacity-80" />
                <p className="mt-4 text-heading-3 font-bold">{destination.seasonalCalendar[activeMonth].month}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5" />
                  {destination.seasonalCalendar[activeMonth].rating}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="text-base leading-relaxed text-[#4B5563]">
                  {destination.seasonalCalendar[activeMonth].recommendation}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Sightseeing', 'Outdoor Activities', 'Photography'].map((activity) => (
                    <span
                      key={activity}
                      className="inline-flex items-center gap-1.5 rounded-full border border-gold-DEFAULT/20 bg-amber-50 px-4 py-2 text-xs font-medium text-gold-DEFAULT"
                    >
                      <MapPin className="h-3 w-3" />
                      {activity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}