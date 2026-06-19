'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import type { HotelListing } from '@/lib/homepage-data';

type LuxuryHotelCollectionProps = {
  hotels: HotelListing[];
};

export function LuxuryHotelCollection({ hotels }: LuxuryHotelCollectionProps) {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Deep, rich hotel-inspired palette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#071228] to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(212,169,74,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
            >
              Luxury Hotel Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
            >
              India&apos;s finest{' '}
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
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              View all hotels
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Feature-first layout — first hotel as hero, rest as secondary */}
        <div className="space-y-6">
          {/* Hero hotel — full-width */}
          {hotels.slice(0, 1).map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link href={hotel.href} className="group block">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 transition-all duration-500 hover:shadow-luxury-xl gold-ring">
                  <div className="relative h-[300px] sm:h-[400px]">
                    <img
                      src={hotel.imageUrl}
                      alt={hotel.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/30 to-transparent" />

                    {/* Content on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">
                      <div className="flex items-center gap-2 text-sm text-gold">
                        <Star className="h-4 w-4 fill-gold" />
                        <span className="font-medium">{hotel.rating}</span>
                      </div>
                      <h3 className="mt-3 text-heading-4 font-bold text-white">
                        {hotel.name}
                      </h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
                        <MapPin className="h-4 w-4" />
                        {hotel.location}
                      </div>
                      <div className="mt-4 flex items-center gap-6">
                        <span className="text-lg font-semibold text-white">
                          {hotel.price}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
                          View details
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Secondary hotels */}
          <div className="grid gap-6 sm:grid-cols-2">
            {hotels.slice(1).map((hotel, index) => (
              <motion.div
                key={hotel.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.08 }}
              >
                <Link href={hotel.href} className="group block h-full">
                  <div className="flex h-full overflow-hidden rounded-[2rem] border border-white/10 bg-[#071228]/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-lg">
                    <div className="relative w-1/2 min-h-[200px] overflow-hidden">
                      <img
                        src={hotel.imageUrl}
                        alt={hotel.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/50 to-transparent" />
                    </div>
                    <div className="flex w-1/2 flex-col justify-center space-y-2 p-5">
                      <div className="flex items-center gap-1 text-sm text-gold">
                        <Star className="h-3.5 w-3.5 fill-gold" />
                        <span className="font-medium text-white">
                          {hotel.rating}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-white">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-white/40">{hotel.location}</p>
                      <p className="text-sm font-semibold text-white">
                        {hotel.price}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
