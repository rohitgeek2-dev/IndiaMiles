'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, CalendarDays, ArrowRight, Sparkles } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type CuratedItinerariesProps = {
  destination: Destination;
};

export function CuratedItineraries({ destination }: CuratedItinerariesProps) {
  return (
    <section
      id="itineraries"
      className="relative overflow-hidden bg-[#FAF8F4] py-section-xl"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-teal-50/20 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Curated Itineraries
          </p>
          <h2 className="mt-4 text-heading-2 font-semibold leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-display">
            Planned to{' '}
            <span className="text-gradient-gold-teal">perfection</span>.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
            Expertly crafted journeys that showcase the finest of {destination.name}.
          </p>
        </motion.div>

        {/* Itinerary Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {destination.itineraries.map((itinerary, index) => (
            <motion.div
              key={itinerary.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={itinerary.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:-translate-y-[3px] group-hover:shadow-card-hover shadow-card">
                  {/* Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img
                      src={itinerary.imageUrl}
                      alt={itinerary.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Gold accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />

                    {/* Day count badge */}
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      <CalendarDays className="h-3 w-3" />
                      {itinerary.days} Days
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between gap-3 p-6">
                    <div>
                      <h3 className="text-xl font-bold leading-snug tracking-tight text-[#111827]">
                        {itinerary.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                        {itinerary.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Locations */}
                      <div className="flex flex-wrap gap-1.5">
                        {itinerary.locations.map((loc) => (
                          <span
                            key={loc}
                            className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-gold-DEFAULT"
                          >
                            <MapPin className="h-3 w-3" />
                            {loc}
                          </span>
                        ))}
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-lg font-semibold text-[#EAC587]">
                          {itinerary.price}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] transition-all duration-300 group-hover:gap-3">
                          View itinerary
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            href="/itineraries"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] px-8 py-3.5 text-base font-semibold text-[#111827] shadow-lg shadow-[#EAC587]/30 transition-all hover:shadow-xl hover:shadow-[#EAC587]/40"
          >
            View all itineraries
            <Sparkles className="ml-1 h-5 w-5 transition-transform group-hover:rotate-12" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}