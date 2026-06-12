'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SmartSearch } from '@/components/discovery/SmartSearch';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.35),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.25),_transparent_28%)]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/80 to-slate-950/95" />

      <div className="container relative mx-auto px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm uppercase tracking-[0.32em] text-white/80 backdrop-blur-xl"
          >
            Premium travel curation across India
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          >
            Discover the soul of India,
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-teal-400 bg-clip-text text-transparent">
              one journey at a time.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg"
          >
            Curated luxury escapes, cultural expeditions, and seamless travel planning designed for modern explorers who want unforgettable Indian experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild className="rounded-full px-8 py-3 text-base">
              <Link href="/plan">Plan Your Trip</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-full px-8 py-3 text-base text-white/90"
            >
              <Link href="/destinations">Explore Destinations</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-12 max-w-3xl rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_35px_120px_rgba(15,23,42,0.2)] backdrop-blur-xl"
          >
            <SmartSearch />
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { value: '28', label: 'States & UTs' },
              { value: '520+', label: 'Destinations' },
              { value: '95k+', label: 'Travellers served' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 + index * 0.08 }}
                className="rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-5 text-left shadow-xl"
              >
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-300">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
