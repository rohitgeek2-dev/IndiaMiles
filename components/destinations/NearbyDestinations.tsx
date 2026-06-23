'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type NearbyDestinationsProps = {
  destination: Destination;
};

export function NearbyDestinations({ destination }: NearbyDestinationsProps) {
  return (
    <section className="relative overflow-hidden bg-white py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Continue Exploring
          </p>
          <h2 className="mt-4 text-heading-2 font-semibold leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-display">
            More destinations to{' '}
            <span className="text-gradient-gold-teal">discover</span>.
          </h2>
        </motion.div>

        {/* Nearby Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destination.nearbyDestinations.map((nearby, index) => (
            <motion.div
              key={nearby.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={nearby.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:-translate-y-[3px] group-hover:shadow-card-hover shadow-card">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={nearby.imageUrl}
                      alt={nearby.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Gold accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between gap-2 p-5">
                    <div>
                      <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                        <MapPin className="h-3.5 w-3.5" />
                        {nearby.location}
                      </div>
                      <h3 className="mt-1.5 text-xl font-bold leading-snug tracking-tight text-[#111827]">
                        {nearby.name}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                        {nearby.description}
                      </p>
                    </div>

                    <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#EAC587] transition-all duration-300 group-hover:gap-3">
                      Explore {nearby.name}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
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