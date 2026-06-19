'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Route } from 'lucide-react';

type CuratedItinerariesSectionProps = {
  itineraries: {
    id: string;
    title: string;
    days: number;
    locations: string[];
    price: string;
    imageUrl: string;
    href: string;
  }[];
};

export function CuratedItinerariesSection({ itineraries }: CuratedItinerariesSectionProps) {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Adventure-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
            >
              Curated Itineraries
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
            >
              Multi-day{' '}
              <span className="text-gradient-gold">luxury circuits</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              View all itineraries
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Road-map styled itinerary cards with route markers */}
        <div className="grid gap-8 md:grid-cols-3">
          {itineraries.map((itinerary, index) => (
            <motion.div
              key={itinerary.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={itinerary.href} className="group block h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={itinerary.imageUrl}
                      alt={itinerary.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
                    {/* Days badge */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[#030712]/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                      <Clock className="h-3 w-3" />
                      {itinerary.days} Days
                    </div>
                    {/* Price tag */}
                    <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-[#030712]/60 px-3 py-1.5 text-xs font-semibold text-gold-light backdrop-blur-sm border border-white/10">
                      {itinerary.price}
                    </div>
                  </div>

                  {/* Route markers */}
                  <div className="px-6 pt-6">
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <Route className="h-3.5 w-3.5 text-gold/60" />
                      <span>The Route</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {itinerary.locations.map((loc, li) => (
                        <span key={loc} className="flex items-center gap-1">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/5 px-3 py-1.5 text-xs font-medium text-white/60 border border-gold/10">
                            <MapPin className="h-3 w-3 text-gold/60" />
                            {loc}
                          </span>
                          {li < itinerary.locations.length - 1 && (
                            <span className="text-white/20">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                    <h3 className="text-lg font-semibold text-white">{itinerary.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
                      View itinerary details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}