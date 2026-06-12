'use client';

import { motion } from 'framer-motion';
import { homepageStats } from '@/lib/homepage-data';

export function StatsSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_35px_120px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Travel statistics
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-foreground">
            A premium platform built for unforgettable journeys.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
            India Miles brings together curated itineraries, iconic
            destinations, and trusted travel insights for every kind of
            explorer.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {homepageStats.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 px-8 py-10 text-center text-white"
            >
              <p className="text-5xl font-semibold tracking-tight">
                {item.value}
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">
                {item.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
