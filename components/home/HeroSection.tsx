'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  MapPin,
  Search,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Button } from '@/components/ui/button';
import { popularSearchChips, trustIndicators } from '@/lib/homepage-data';

const stateBackgrounds: Record<string, string> = {
  Rajasthan:
    'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=80',
  Kerala:
    'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=80',
  Goa: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
  Himalayas:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
  'Luxury Trains': '/images/luxury trains.jpg',
};

const DEFAULT_BG = '/images/main-hero.png';

function useCounter(target: number, suffix: string, duration = 2000) {
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
      { threshold: 0.3 },
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
      step += 1;

      if (step >= steps) {
        setLabel(
          isDecimal
            ? `${target.toFixed(1)}${suffix}`
            : `${Math.round(target)}${suffix}`,
        );
        clearInterval(timer);
        return;
      }

      const current = increment * step;
      setLabel(
        isDecimal
          ? `${current.toFixed(1)}${suffix}`
          : `${Math.round(current)}${suffix}`,
      );
    }, 16);

    return () => clearInterval(timer);
  }, [duration, inView, suffix, target]);

  return { label, ref };
}

function parseIndicatorValue(value: string): {
  target: number;
  suffix: string;
} {
  const normalizedValue = value.replace(/,/g, '');

  if (normalizedValue.endsWith('K+')) {
    return { target: Number(normalizedValue.replace('K+', '')), suffix: 'K+' };
  }

  if (normalizedValue.endsWith('+')) {
    return { target: Number(normalizedValue.replace('+', '')), suffix: '+' };
  }

  return { target: Number(normalizedValue), suffix: '' };
}

function CounterDisplay({
  value,
  label: indicatorLabel,
}: {
  value: string;
  label: string;
}) {
  const { target, suffix } = parseIndicatorValue(value);
  const { label, ref } = useCounter(target, suffix);
  const IconComponent =
    indicatorLabel === 'Travelers'
      ? MapPin
      : indicatorLabel === 'Years of Experience'
        ? Clock
        : Star;

  return (
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-[rgba(7,20,34,0.42)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <IconComponent className="h-5 w-5 text-gold-light" />
      </div>
      <div className="text-left">
        <p className="text-3xl font-semibold tracking-tight text-white">
          <span ref={ref}>{label}</span>
        </p>
        <p className="mt-1 text-sm text-white/72">{indicatorLabel}</p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBg, setActiveBg] = useState(DEFAULT_BG);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const handleStateClick = (
    stateName: string,
    e: MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    const imageUrl = stateBackgrounds[stateName];
    if (!imageUrl || imageUrl === activeBg) return;

    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }

    setIsTransitioning(true);
    transitionTimeoutRef.current = setTimeout(() => {
      setActiveBg(imageUrl);
      setIsTransitioning(false);
    }, 220);
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden max-md:overflow-visible bg-[#07131f] text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.65, ease: 'easeInOut' }}
          className="absolute inset-0 scale-105 bg-cover bg-center max-md:fixed max-md:inset-0"
          style={{ backgroundImage: `url('${activeBg}')` }}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0 max-md:fixed max-md:inset-0 max-md:bg-[rgba(4,14,24,0.88)]"
        style={{
          background:
            'linear-gradient(90deg, rgba(4,14,24,0.97) 0%, rgba(4,14,24,0.94) 18%, rgba(6,18,29,0.85) 38%, rgba(8,20,31,0.62) 56%, rgba(8,20,31,0.24) 75%, rgba(8,20,31,0.05) 100%)',
        }}
      />
      <div
        className="absolute inset-0 max-md:hidden"
        style={{
          background:
            'radial-gradient(circle at 16% 34%, rgba(1,10,18,0.72), transparent 42%)',
        }}
      />
      <div
        className="absolute inset-0 max-md:hidden"
        style={{
          background:
            'radial-gradient(circle at 78% 28%, rgba(255,221,187,0.52), rgba(255,215,166,0.15) 22%, transparent 48%)',
        }}
      />
      <div
        className="absolute inset-0 max-md:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(5,14,23,0.04) 0%, rgba(5,14,23,0.08) 56%, rgba(4,12,20,0.52) 100%)',
        }}
      />

      <div className="container relative mx-auto px-4 pb-20 pt-32 sm:px-6 md:px-8 lg:px-12 lg:pb-24 lg:pt-36">
        <div className="w-full max-w-[860px]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.34em] text-gold-light/95 sm:text-xs"
          >
            <span className="h-px w-7 bg-gold/90 sm:w-10" />
            <span className="inline-flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Premium travel curation across India
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-[820px] text-[clamp(3.5rem,8vw,7rem)] font-light leading-[0.98] tracking-[-0.05em] text-white"
          >
            Discover the soul of
            <span className="mt-3 block text-gradient-gold font-medium tracking-[-0.055em]">
              Incredible India
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-8 h-px w-14 origin-left bg-gradient-to-r from-gold/95 to-gold/10"
          />

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 max-w-[620px] text-base font-light leading-8 text-white/84 sm:text-lg"
          >
            Curated luxury escapes, cultural expeditions, and seamless travel
            planning designed for modern explorers who seek unforgettable Indian
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 max-w-[760px]"
          >
            <div className="rounded-[2.25rem] border border-white/12 bg-[rgba(255,255,255,0.06)] p-2 shadow-[0_35px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
              <div className="flex flex-col gap-3 rounded-[1.75rem] bg-white px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:py-3">
                <Search className="h-5 w-5 shrink-0 text-[#16202d]/55" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search destinations, experiences, or cities..."
                  className="min-w-0 flex-1 bg-transparent text-base text-[#16202d] placeholder:text-[#16202d]/45 outline-none"
                />
                <Button className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-gold/20 hover:bg-gold-light sm:px-9">
                  Explore
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-2 px-4 pb-3 pt-4 sm:px-5">
                <span className="mr-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
                  Popular:
                </span>
                {popularSearchChips.map((chip) => (
                  <button
                    key={chip.label}
                    onClick={(e) => handleStateClick(chip.label, e)}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-xs font-medium text-white/88 transition-all hover:border-gold/30 hover:bg-white/14 hover:text-gold-light"
                  >
                    <TrendingUp className="h-3 w-3" />
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-[740px]"
          >
            <div className="h-px w-full bg-gradient-to-r from-gold/45 via-white/10 to-transparent" />
            <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10 lg:flex-nowrap">
              {trustIndicators
                .filter(
                  (indicator) => indicator.label !== 'Curated Experiences',
                )
                .map((indicator, index, items) => (
                  <div
                    key={indicator.label}
                    className="flex items-center gap-6"
                  >
                    <CounterDisplay
                      value={indicator.value}
                      label={indicator.label}
                    />
                    {index < items.length - 1 && (
                      <div className="hidden h-16 w-px bg-white/12 lg:block" />
                    )}
                  </div>
                ))}
              <div className="hidden h-16 w-px bg-white/12 lg:block" />
              <CounterDisplay value="12+" label="Years of Experience" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col items-start gap-4 sm:flex-row"
          >
            <Button
              asChild
              className="rounded-full border-0 bg-gold px-9 py-6 text-base text-white shadow-xl shadow-gold/25 hover:bg-gold-light"
            >
              <Link href="/plan">
                Plan Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              className="rounded-full border border-gold/35 bg-[rgba(5,18,31,0.32)] px-9 py-6 text-base text-white/92 backdrop-blur-xl hover:bg-[rgba(255,255,255,0.08)]"
            >
              <Link href="/destinations">View Destinations</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
