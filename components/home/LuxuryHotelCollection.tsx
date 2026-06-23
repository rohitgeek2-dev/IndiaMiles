'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import type { HotelListing } from '@/lib/homepage-data';

type LuxuryHotelCollectionProps = {
  hotels: HotelListing[];
};

export function LuxuryHotelCollection({ hotels }: LuxuryHotelCollectionProps) {
  if (hotels.length === 0) return null;

  const [featuredHotel, ...secondaryHotels] = hotels;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Light, airy hotel-inspired palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-teal-50/20 pointer-events-none" />

      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24">
        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
            >
              Luxury Hotel Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
            >
              India's finest{' '}
              <span className="text-gradient-gold">hotel collection</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/hotels"
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-2.5 text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-300 shadow-sm"
            >
              View all hotels
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Luxury hotel showcase */}
        <div className="space-y-8">
          {/* Featured hotel — full-width hero */}
          <motion.div
            key={featuredHotel.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Link href={featuredHotel.href} className="group block">
              <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:shadow-card-hover shadow-card">
                <div className="relative h-[320px] sm:h-[420px] md:h-[500px] lg:h-[560px]">
                  <img
                    src={featuredHotel.imageUrl}
                    alt={featuredHotel.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

                  {/* Gold accent bar */}
                  <div className="absolute top-0 left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-gold-DEFAULT/80 via-gold-DEFAULT/40 to-transparent" />

                  {/* Content on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="flex items-center gap-2">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1 text-sm text-white">
                        <Star className="h-3.5 w-3.5 fill-[#EAC587] text-[#EAC587]" />
                        <span className="font-semibold">{featuredHotel.rating}</span>
                      </div>
                    </div>

                    <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[36px] lg:text-[42px]">
                      {featuredHotel.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-sm text-white/70 sm:text-base">
                      <MapPin className="h-4 w-4" />
                      {featuredHotel.location}
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-6">
                      <span className="text-lg font-semibold text-white sm:text-xl">
                        {featuredHotel.price}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#EAC587] transition-all duration-300 group-hover:gap-3">
                        View details
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary hotels — equal card grid */}
          {secondaryHotels.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              {secondaryHotels.map((hotel, index) => (
                <motion.div
                  key={hotel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                >
                  <Link href={hotel.href} className="group block h-full">
                    <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:-translate-y-[3px] group-hover:shadow-card-hover shadow-card">
                      {/* Image */}
                      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                        <img
                          src={hotel.imageUrl}
                          alt={hotel.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        {/* Gold accent bar */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col justify-between gap-3 p-5 sm:p-6">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-[#EAC587] text-[#EAC587]" />
                            <span className="font-semibold text-[#111827]">
                              {hotel.rating}
                            </span>
                          </div>

                          <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-[#111827] sm:text-[22px] sm:leading-tight">
                            {hotel.name}
                          </h3>

                          <div className="mt-1.5 flex items-center gap-1.5 text-sm text-[#6B7280]">
                            <MapPin className="h-3.5 w-3.5" />
                            {hotel.location}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-base font-semibold text-[#EAC587]">
                            {hotel.price}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] transition-all duration-300 group-hover:gap-3">
                            View details
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}