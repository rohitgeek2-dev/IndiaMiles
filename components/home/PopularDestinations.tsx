'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ImageOff, Star, Clock, MapPin, Tag, Calendar } from 'lucide-react';
import type { HomepageDestination } from '@/lib/homepage-data';
import { Button } from '@/components/ui/button';

type PopularDestinationsProps = {
  destinations: HomepageDestination[];
};

function DestinationCard({ destination, index }: { destination: HomepageDestination; index: number }) {
  const [isError, setIsError] = useState(false);
  const handleError = useCallback(() => setIsError(true), []);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] bg-white dark:bg-[#0d1525] border border-[#E5E7EB] dark:border-white/10 transition-all duration-500 hover:-translate-y-2 shadow-card hover:shadow-card-hover"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        {isError ? (
          <div className="flex h-full w-full items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center gap-2 text-gray-300 dark:text-gray-600">
              <ImageOff className="h-10 w-10" />
              <span className="text-xs">Image unavailable</span>
            </div>
          </div>
        ) : (
          <img
            src={destination.imageUrl}
            alt={destination.name}
            loading="lazy"
            onError={handleError}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-[#111827] border border-[#E5E7EB] shadow-sm">
          <Star className="h-3.5 w-3.5 text-gold-DEFAULT" />
          {destination.rating}
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-light/90 font-medium">
            {destination.category}
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white">
            {destination.name}
          </h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
            <MapPin className="h-3.5 w-3.5" />
            {destination.location}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-5 p-6">
        {/* Quick Info Chips */}
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 dark:bg-teal-950/30 px-3 py-1.5 text-xs font-medium text-teal-DEFAULT dark:text-teal-light border border-teal-100 dark:border-teal-900/50">
            <Calendar className="h-3 w-3" />
            {destination.bestSeason}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 text-xs font-medium text-gold-DEFAULT dark:text-gold-light border border-amber-100 dark:border-amber-900/50">
            <Clock className="h-3 w-3" />
            {destination.duration}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50">
            <Tag className="h-3 w-3" />
            From {destination.startingPrice}
          </span>
        </div>

        <p className="text-sm leading-7 text-[#4B5563] dark:text-gray-400">
          {destination.description}
        </p>

        {/* Experience Tags */}
        <div className="flex flex-wrap gap-2">
          {destination.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-50 dark:bg-white/5 px-3 py-1 text-xs font-medium text-[#4B5563] dark:text-gray-300 border border-[#E5E7EB] dark:border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between border-t border-[#E5E7EB] dark:border-white/10 pt-4">
          <div className="flex items-center gap-1.5 text-sm text-[#4B5563] dark:text-gray-400">
            <Star className="h-4 w-4 text-gold-DEFAULT" />
            <span className="font-medium text-[#111827] dark:text-white">{destination.rating}</span>
            <span>({destination.reviews})</span>
          </div>
          <Link
            href={destination.href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-DEFAULT transition hover:text-gold-dark"
          >
            Explore destination
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function PopularDestinations({ destinations }: PopularDestinationsProps) {
  return (
    <section className="relative py-section-lg overflow-hidden bg-white dark:bg-[#0a1120]">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle background warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/20 to-transparent dark:from-gold-DEFAULT/[0.02] dark:to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
            >
              Curated Destinations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-3 text-heading-2 font-semibold text-[#111827] dark:text-white sm:text-display"
            >
              Discover handpicked
              <span className="block text-gradient-teal">luxury escapes</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="rounded-full px-7 py-6 text-sm border-[#E5E7EB] dark:border-white/20 text-[#4B5563] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/10 hover:text-[#111827] dark:hover:text-white transition-all duration-300">
              <Link href="/destinations">
                Explore all destinations
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Destination Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {destinations.slice(0, 4).map((destination, index) => (
            <DestinationCard key={destination.id} destination={destination} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}