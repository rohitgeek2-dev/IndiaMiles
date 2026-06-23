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
    <section className="relative overflow-hidden py-section-xl bg-white">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
            >
              Curated Itineraries
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
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
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-7 py-3 text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-300 shadow-sm"
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
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover shadow-card">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={itinerary.imageUrl}
                      alt={itinerary.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Days badge */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#111827] backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                      <Clock className="h-3 w-3" />
                      {itinerary.days} Days
                    </div>
                    {/* Price tag */}
                    <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-gold-DEFAULT backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                      {itinerary.price}
                    </div>
                  </div>

                  {/* Route markers */}
                  <div className="px-6 pt-6">
                    <div className="flex items-center gap-2 text-xs text-[#4B5563]">
                      <Route className="h-3.5 w-3.5 text-gold-DEFAULT/60" />
                      <span>The Route</span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      {itinerary.locations.map((loc, li) => (
                        <span key={loc} className="flex items-center gap-1">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-[#4B5563] border border-amber-100">
                            <MapPin className="h-3 w-3 text-gold-DEFAULT/60" />
                            {loc}
                          </span>
                          {li < itinerary.locations.length - 1 && (
                            <span className="text-[#E5E7EB]">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                    <h3 className="text-lg font-semibold text-[#111827]">{itinerary.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-DEFAULT transition-all duration-300 group-hover:gap-3">
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