'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, MapPin, Sparkles } from 'lucide-react';

type SeasonalCalendarSectionProps = {
  calendar: { month: string; destinations: string[]; color: string }[];
};

export function SeasonalCalendarSection({ calendar }: SeasonalCalendarSectionProps) {
  const currentMonth = new Date().getMonth();
  const [activeMonth, setActiveMonth] = useState(currentMonth);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Clean, bright seasonal background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/[0.03] via-transparent to-sky-950/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            Travel Calendar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-4xl font-bold text-foreground sm:text-5xl sm:leading-tight"
          >
            Best time to visit{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">every destination</span>.
          </motion.h2>
        </div>

        {/* Horizontal timeline scroll — months as interactive markers */}
        <div className="mb-12 overflow-x-auto pb-2">
          <div className="flex gap-2 min-w-max">
            {calendar.map((item, index) => (
              <button
                key={item.month}
                onClick={() => setActiveMonth(index)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  index === activeMonth
                    ? 'bg-foreground text-background shadow-lg'
                    : 'bg-white/[0.04] text-muted-foreground border border-white/10 hover:bg-white/[0.08]'
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
            className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm"
          >
            <div className="grid gap-0 md:grid-cols-[1fr_1.5fr]">
              {/* Month visual panel */}
              <div className={`flex flex-col items-center justify-center bg-gradient-to-br ${calendar[activeMonth].color} p-10 text-white`}>
                <CalendarDays className="h-12 w-12 opacity-80" />
                <p className="mt-4 text-3xl font-bold">{calendar[activeMonth].month}</p>
                <p className="mt-2 text-sm text-white/80">Recommended destinations</p>
              </div>

              {/* Destinations */}
              <div className="flex flex-col justify-center space-y-4 p-8 md:p-10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Sparkles className="h-4 w-4 text-emerald-500" />
                  <span>Best places to visit in {calendar[activeMonth].month}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {calendar[activeMonth].destinations.map((dest) => (
                    <span
                      key={dest}
                      className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-sm font-medium text-emerald-600 dark:text-emerald-400 transition-all hover:bg-emerald-500/20"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {dest}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {calendar[activeMonth].month} offers ideal weather for exploring these incredible destinations.
                  Plan your luxury journey during this prime travel window.
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}