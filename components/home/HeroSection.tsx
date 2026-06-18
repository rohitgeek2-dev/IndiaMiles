'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  TrendingUp,
  Sparkles,
  Star,
  MapPin,
  ArrowRight,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { popularSearchChips, trustIndicators } from '@/lib/homepage-data';

// --- State-specific background images for popular states ---
const stateBackgrounds: Record<string, string> = {
  Rajasthan:
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80',
  Kerala:
    'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=80',
  Goa: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
  Himalayas:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
  'Luxury Trains':
    'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1920&q=80',
};

const DEFAULT_BG = '/images/main-hero.png';

// --- Counter hook ---
function useCounter(target: number, suffix: string, duration = 2000) {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState(`0${suffix}`);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    const isDecimal = target % 1 !== 0;
    const steps = Math.min(Math.floor(duration / 16), 120);
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        if (isDecimal) {
          setLabel(`${target.toFixed(1)}${suffix}`);
        } else {
          setLabel(`${Math.round(target)}${suffix}`);
        }
        clearInterval(timer);
      } else {
        const current = increment * step;
        if (isDecimal) {
          setLabel(`${current.toFixed(1)}${suffix}`);
        } else {
          setLabel(`${Math.round(current)}${suffix}`);
        }
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, suffix, duration]);

  return { label, ref };
}

// --- Parse trust indicator values ---
function parseIndicatorValue(value: string): { target: number; suffix: string } {
  if (value.endsWith('K+')) return { target: Number(value.replace('K+', '')), suffix: 'K+' };
  if (value.endsWith('+')) return { target: Number(value.replace('+', '')), suffix: '+' };
  return { target: Number(value), suffix: '' };
}

// --- Individual counter display ---
function CounterDisplay({ value, label: indicatorLabel }: { value: string; label: string }) {
  const { target, suffix } = parseIndicatorValue(value);
  const { label, ref } = useCounter(target, suffix);
  const IconComponent =
    indicatorLabel === 'Travelers'
      ? MapPin
      : indicatorLabel === 'Curated Experiences'
        ? Sparkles
        : indicatorLabel === 'Years of Experience'
          ? Clock
          : Star;
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/10">
        <IconComponent className="h-4 w-4 text-gold" />
      </div>
      <div className="text-left">
        <p className="text-base font-bold text-white">
          <span ref={ref}>{label}</span>
        </p>
        <p className="text-[11px] text-white/50">{indicatorLabel}</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBg, setActiveBg] = useState(DEFAULT_BG);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStateClick = (stateName: string, e: React.MouseEvent) => {
    e.preventDefault();
    const imageUrl = stateBackgrounds[stateName];
    if (!imageUrl || imageUrl === activeBg) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveBg(imageUrl);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] text-white flex items-center">
      {/* Fade-transitioning Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${activeBg}')` }}
        />
      </AnimatePresence>

      {/* Layer 1: Dark Navy Gradient — Left to Right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,15,25,0.95) 0%, rgba(4,15,25,0.92) 15%, rgba(4,15,25,0.82) 35%, rgba(4,15,25,0.55) 55%, rgba(4,15,25,0.15) 75%, rgba(4,15,25,0) 100%)',
        }}
      />

      {/* Layer 2: Warm Gold Glow — Luxury editorial feel */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, rgba(212,175,55,0.18), transparent 45%)',
        }}
      />

      {/* Layer 3: Bottom Depth Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, transparent 60%, rgba(4,15,25,0.35) 100%)',
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>

      {/* Content - Left aligned 50% */}
      <div className="container relative mx-auto px-4 md:px-8 lg:px-12 py-24 md:py-32">
        <div className="w-full lg:w-[55%] xl:w-[50%]">
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
            className="text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Discover the soul of
            <span className="block mt-4 text-gradient-gold font-semibold">
              Incredible India
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:text-lg font-light"
          >
            Curated luxury escapes, cultural expeditions, and seamless travel
            planning designed for modern explorers who seek unforgettable Indian
            experiences.
          </motion.p>

          {/* Premium Glassmorphism Search Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 max-w-2xl"
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

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 px-5 pb-4 pt-3">
                <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                  Popular:
                </span>
                {popularSearchChips.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={(e) => handleStateClick(chip.label, e)}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 transition-all hover:border-gold/30 hover:bg-gold/10 hover:text-gold-light"
                  >
                    <TrendingUp className="h-3 w-3" />
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats - Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {trustIndicators
              .filter((indicator) => indicator.label !== 'Curated Experiences')
              .map((indicator, i, arr) => (
                <div key={indicator.label} className="flex items-center gap-3">
                  <CounterDisplay value={indicator.value} label={indicator.label} />
                  {i < arr.length - 1 && (
                    <div className="hidden h-8 w-px bg-white/10 sm:block" />
                  )}
                </div>
              ))}
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            {/* Years of Experience */}
            <CounterDisplay value="12+" label="Years of Experience" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Button
              asChild
              className="rounded-full px-8 py-6 text-base bg-gold hover:bg-gold-light border-0 shadow-xl shadow-gold/30"
            >
              <Link href="/plan">
                Plan Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-full px-8 py-6 text-base border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 backdrop-blur-xl"
            >
              <Link href="/destinations">View Destinations</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}