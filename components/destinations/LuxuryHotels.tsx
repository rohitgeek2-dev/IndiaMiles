'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type LuxuryHotelsProps = {
  destination: Destination;
};

export function LuxuryHotels({ destination }: LuxuryHotelsProps) {
  const featuredHotel = destination.hotels.find((h) => h.isFeatured);
  const secondaryHotels = destination.hotels.filter((h) => !h.isFeatured);

  if (destination.hotels.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Light ambient */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 via-transparent to-teal-50/20 pointer-events-none" />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Where To Stay
          </p>
          <h2 className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display">
            {destination.name}'s finest{' '}
            <span className="text-gradient-gold">hotel collection</span>.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* Featured hotel */}
          {featuredHotel && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={featuredHotel.href} className="group block">
                <div className="relative overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:shadow-card-hover shadow-card">
                  <div className="relative h-[320px] sm:h-[420px] md:h-[500px]">
                    <img
                      src={featuredHotel.imageUrl}
                      alt={featuredHotel.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
                    <div className="absolute top-0 left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-gold-DEFAULT/80 via-gold-DEFAULT/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 lg:p-12">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-sm text-white backdrop-blur-sm">
                        <Star className="h-3.5 w-3.5 fill-[#EAC587] text-[#EAC587]" />
                        <span className="font-semibold">{featuredHotel.rating}</span>
                      </div>

                      <h3 className="mt-4 font-serif text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[36px]">
                        {featuredHotel.name}
                      </h3>

                      <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
                        <MapPin className="h-4 w-4" />
                        {featuredHotel.location}
                      </div>

                      {featuredHotel.description && (
                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60 line-clamp-2">
                          {featuredHotel.description}
                        </p>
                      )}

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
          )}

          {/* Secondary hotels */}
          {secondaryHotels.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      <div className="relative h-48 sm:h-52 overflow-hidden">
                        <img
                          src={hotel.imageUrl}
                          alt={hotel.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-3 p-5 sm:p-6">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <Star className="h-4 w-4 fill-[#EAC587] text-[#EAC587]" />
                            <span className="font-semibold text-[#111827]">{hotel.rating}</span>
                          </div>
                          <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#111827] sm:text-xl">
                            {hotel.name}
                          </h3>
                          <div className="mt-1.5 flex items-center gap-1.5 text-sm text-[#6B7280]">
                            <MapPin className="h-3.5 w-3.5" />
                            {hotel.location}
                          </div>
                          {hotel.description && (
                            <p className="mt-2 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                              {hotel.description}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-2">
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