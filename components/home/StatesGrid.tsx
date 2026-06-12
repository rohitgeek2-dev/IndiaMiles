'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { HomepageState } from '@/lib/homepage-data';

type ExploreStatesProps = {
  states: HomepageState[];
};

export function ExploreStates({ states }: ExploreStatesProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Explore by State
          </p>
          <h2 className="mt-3 text-4xl font-bold text-foreground">
            Discover India’s most iconic regions.
          </h2>
        </div>
        <Link
          href="/states"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-5 py-3 text-sm font-semibold transition hover:bg-white/5"
        >
          View all states
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {states.map((state, index) => (
          <motion.div
            key={state.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={state.imageUrl}
                alt={state.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/75">
                  {state.name}
                </p>
                <h3 className="mt-2 text-3xl font-semibold">{state.name}</h3>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{state.description}</span>
              </div>
              <Link
                href={state.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Explore the region
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
