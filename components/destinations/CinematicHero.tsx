'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CalendarDays, Clock, MapPin, Sparkles } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type CinematicHeroProps = {
  destination: Destination;
};

export function CinematicHero({ destination }: CinematicHeroProps) {
  const iconMap: Record<string, React.ReactNode> = {
    'Best Time': <CalendarDays className="h-4 w-4" />,
    'Ideal Duration': <Clock className="h-4 w-4" />,
    'State': <MapPin className="h-4 w-4" />,
    'Luxury Rating': <Sparkles className="h-4 w-4" />,
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-gradient-to-r from-gold-DEFAULT/80 via-gold-DEFAULT/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="container mx-auto px-4 pb-16 sm:pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-3xl"
          >
            {/* Destination Name */}
            <h1 className="font-serif text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl">
              {destination.name}
            </h1>

            {/* Subtitle */}
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
              {destination.subtitle}
            </p>

            {/* Quick Facts */}
            <div className="mt-8 flex flex-wrap gap-3">
              {destination.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
                >
                  {iconMap[fact.label]}
                  <span className="font-medium">{fact.label}:</span>
                  <span>{fact.value}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/plan"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] px-8 py-3.5 text-base font-semibold text-[#111827] shadow-lg shadow-[#EAC587]/30 transition-all hover:shadow-xl hover:shadow-[#EAC587]/40"
              >
                <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Plan This Journey
              </Link>
              <Link
                href="#itineraries"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                View Itineraries
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/40">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}