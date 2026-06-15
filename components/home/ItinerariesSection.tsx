'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, Route } from 'lucide-react';
import { Button } from '@/components/ui/button';

type ItinerariesSectionProps = {
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

export function ItinerariesSection({ itineraries }: ItinerariesSectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Adventure-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/[0.02] via-transparent to-slate-50/[0.01] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground"
            >
              Curated Itineraries
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-4xl font-bold text-foreground sm:text-5xl sm:leading-tight"
            >
              Multi-day{' '}
              <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">luxury circuits</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="rounded-full border-white/10 px-7 py-6 text-sm">
              <Link href="/itineraries">
                View all itineraries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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
                <div className="relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
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
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm border border-white/20">
                      <Clock className="h-3 w-3" />
                      {itinerary.days} Days
                    </div>
                    {/* Price tag */}
                    <div className="absolute right-4 top-4 inline-flex items-center rounded-full bg-black/40 px-3 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur-sm border border-white/10">
                      {itinerary.price}
                    </div>
                  </div>

                  {/* Route markers */}
                  <div className="px-6 pt-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Route className="h-3.5 w-3.5 text-primary/60" />
                      <span>The Route</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      {itinerary.locations.map((loc, li) => (
                        <span key={loc} className="flex items-center gap-1">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                            <MapPin className="h-3 w-3 text-primary/60" />
                            {loc}
                          </span>
                          {li < itinerary.locations.length - 1 && (
                            <span className="text-muted-foreground/30">→</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                    <h3 className="text-lg font-semibold text-foreground">{itinerary.title}</h3>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 transition-all duration-300 group-hover:gap-3">
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