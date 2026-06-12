'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import type { HomepageDestination } from '@/lib/homepage-data';
import { Button } from '@/components/ui/button';

type PopularDestinationsProps = {
  destinations: HomepageDestination[];
};

export function PopularDestinations({
  destinations,
}: PopularDestinationsProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Popular Destinations
          </p>
          <h2 className="mt-3 text-4xl font-bold text-foreground">
            Luxury travel stories for every explorer.
          </h2>
        </div>
        <Button asChild variant="secondary" className="rounded-full px-7 py-3">
          <Link href="/destinations">See all destinations</Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {destinations.map((destination, index) => (
          <motion.article
            key={destination.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={destination.imageUrl}
                alt={destination.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                  {destination.category}
                </p>
                <h3 className="mt-3 text-3xl font-semibold">
                  {destination.name}
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  {destination.location}
                </p>
              </div>
            </div>
            <div className="space-y-5 p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90">
                  <Star className="h-4 w-4 text-amber-300" />
                  {destination.rating} · {destination.reviews}
                </div>
                <Link
                  href={destination.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm leading-7 text-muted-foreground">
                {destination.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
