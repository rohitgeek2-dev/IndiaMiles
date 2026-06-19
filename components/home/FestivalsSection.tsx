'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import type { Festival } from '@/lib/homepage-data';

type FestivalsSectionProps = {
  festivals: Festival[];
};

export function FestivalsSection({ festivals }: FestivalsSectionProps) {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Warm, earthy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-amber-950/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(212,169,74,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
          >
            Festivals & Events
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
          >
            India&apos;s cultural{' '}
            <span className="text-gradient-gold">heartbeat</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-lg leading-relaxed text-white/50 max-w-xl"
          >
            Plan your journey around India&apos;s most vibrant celebrations,
            from dazzling festivals to ancient rituals.
          </motion.p>
        </div>

        {/* Festival cards — warm, layered */}
        <div className="grid gap-6 md:grid-cols-3">
          {festivals.map((festival, index) => (
            <motion.article
              key={festival.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/festivals/${festival.id}`} className="block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-gold/10 bg-gradient-to-br from-gold/[0.03] to-white/[0.01] transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-lg">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={festival.imageUrl}
                      alt={festival.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
                    {/* Month badge */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1.5 text-xs font-medium text-gold-light backdrop-blur-sm border border-gold/30">
                      <CalendarDays className="h-3 w-3" />
                      {festival.month}
                    </div>
                    {/* Decorative top gradient bar */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold to-amber-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                    <div>
                      <div className="flex items-center gap-1.5 text-sm text-gold-light">
                        <MapPin className="h-3.5 w-3.5" />
                        {festival.location}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {festival.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {festival.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
                      Explore festival
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
