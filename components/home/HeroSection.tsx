'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, TrendingUp, Sparkles, Star, MapPin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { popularSearchChips, trustIndicators } from '@/lib/homepage-data';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative overflow-hidden bg-[#030712] text-white pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center scale-105" />
      
      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712]/40 via-[#030712]/70 to-[#030712]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(212,169,74,0.12),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(26,158,143,0.1),_transparent_50%)]" />
      <div className="absolute inset-0 animate-gradient bg-[length:200%_200%] bg-[radial-gradient(circle_at_20%_50%,rgba(212,169,74,0.06)_0%,transparent_50%),radial-gradient(circle_at_80%_50%,rgba(26,158,143,0.06)_0%,transparent_50%)]" />

      {/* Content */}
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gradient-to-r from-gold/10 via-gold/5 to-transparent px-5 py-2 text-sm uppercase tracking-[0.32em] text-gold-light/90 backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Premium travel curation across India
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Discover the soul of
            <span className="block mt-4 text-gradient-gold font-semibold">Incredible India</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl font-light"
          >
            Curated luxury escapes, cultural expeditions, and seamless travel
            planning designed for modern explorers who seek unforgettable Indian experiences.
          </motion.p>

          {/* Premium Glassmorphism Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-3xl"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-2 shadow-[0_35px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl gold-ring">
              <div className="flex items-center gap-2 rounded-[1.5rem] bg-white/5 px-5 py-1">
                <Search className="h-5 w-5 shrink-0 text-gold/70" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, experiences, or cities..."
                  className="flex-1 bg-transparent py-4 text-base text-white placeholder-white/40 outline-none"
                />
                <Button className="rounded-full bg-gold px-6 py-2 text-sm font-semibold text-white hover:bg-gold-light shadow-lg shadow-gold/30">
                  Explore
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 px-5 pb-4 pt-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">Popular:</span>
                {popularSearchChips.map((chip) => (
                  <Link
                    key={chip.label}
                    href={chip.href}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 transition-all hover:border-gold/30 hover:bg-gold/10 hover:text-gold-light"
                  >
                    <TrendingUp className="h-3 w-3" />
                    {chip.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6"
          >
            {trustIndicators.map((indicator, i) => (
              <div key={indicator.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/10">
                  {i === 0 ? <MapPin className="h-5 w-5 text-gold" /> : i === 1 ? <Sparkles className="h-5 w-5 text-gold" /> : <Star className="h-5 w-5 text-gold" />}
                </div>
                <div className="text-left">
                  <p className="text-lg font-bold text-white">{indicator.value}</p>
                  <p className="text-xs text-white/50">{indicator.label}</p>
                </div>
                {i < trustIndicators.length - 1 && <div className="hidden h-8 w-px bg-white/10 sm:block" />}
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button asChild className="rounded-full px-8 py-6 text-base bg-gold hover:bg-gold-light border-0 shadow-xl shadow-gold/30">
              <Link href="/plan">
                Plan Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" className="rounded-full px-8 py-6 text-base border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 backdrop-blur-xl">
              <Link href="/destinations">View Destinations</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}