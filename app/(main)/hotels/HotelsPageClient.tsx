'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  MapPin,
  ChevronDown,
  X,
  Star,
  ArrowRight,
  Sparkles,
  Gem,
  Building,
  Waves,
  Trees,
  Mountain,
} from 'lucide-react';
import type { HotelListing } from './page';

type Props = {
  hotels: HotelListing[];
  featuredHotels: HotelListing[];
};

// ─── Animation Variants ─────────────────────────────────────────────────
const heroFadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

// ─── Hotel Card ─────────────────────────────────────────────────────────
function HotelCard({ hotel, index }: { hotel: HotelListing; index: number }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
    >
      <Link
        href={hotel.href}
        className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative h-52 overflow-hidden">
          {hotel.imageUrl && !imgError ? (
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
              <Building className="h-12 w-12 text-foreground/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Rating badge */}
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-[#111827] shadow-sm backdrop-blur-sm">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {hotel.rating}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold text-[#111827] transition-colors group-hover:text-teal-600">
            {hotel.name}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {hotel.location}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-bold text-gold-DEFAULT">
              {hotel.price}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-teal-600 transition-all group-hover:gap-1.5">
              View details
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Featured Hotel Card (Horizontal) ───────────────────────────────────
function FeaturedHotelCard({ hotel }: { hotel: HotelListing }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group shrink-0"
    >
      <Link
        href={hotel.href}
        className="flex w-[360px] overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative h-44 w-44 shrink-0 overflow-hidden">
          {hotel.imageUrl && !imgError ? (
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
              <Building className="h-8 w-8 text-foreground/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
          <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-[#111827] shadow-sm">
            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
            {hotel.rating}
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center p-4">
          <h3 className="text-sm font-semibold text-[#111827] line-clamp-2 group-hover:text-teal-600 transition-colors">
            {hotel.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3 shrink-0" />
            {hotel.location}
          </p>
          <p className="mt-2 text-sm font-bold text-gold-DEFAULT">
            {hotel.price}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Client Component ──────────────────────────────────────────────
export function HotelsPageClient({ hotels, featuredHotels }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // ── Parallax effect for hero ──────────────────────────────────────────
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroContentY = useTransform(scrollY, [0, 400], [0, 80]);

  // ── Close suggestions on outside click ────────────────────────────────
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // ── Filter hotels by search ───────────────────────────────────────────
  const filteredHotels = hotels.filter((hotel) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      hotel.name.toLowerCase().includes(q) ||
      hotel.location.toLowerCase().includes(q)
    );
  });

  const POPULAR_SUGGESTIONS = [
    { label: 'Palace Hotels', icon: Gem },
    { label: 'Beach Resorts', icon: Waves },
    { label: 'Mountain Retreats', icon: Mountain },
    { label: 'Heritage Stays', icon: Building },
    { label: 'Wellness Resorts', icon: Trees },
    { label: 'Boutique Hotels', icon: Sparkles },
  ];

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION — Dark Cinematic Premium Banner
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center overflow-hidden bg-[#050a14]"
      >
        {/* Background Image with Parallax */}
        <motion.div
          style={{ y: heroParallaxY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&w=1920&q=85)',
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(5,10,20,0.55)] via-[rgba(5,10,20,0.70)] to-[rgba(5,10,20,0.85)]" />
          {/* Subtle gradient orbs for depth */}
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold-DEFAULT/[0.03] blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-DEFAULT/[0.02] blur-[100px]" />
        </motion.div>

        {/* Ambient light effect */}
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[800px] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-DEFAULT/[0.04] to-transparent blur-[80px]" />

        {/* Hero Content */}
        <motion.div
          style={{ y: heroContentY, opacity: heroOpacity }}
          className="container relative z-10 mx-auto px-4 pb-20 pt-32 md:pt-36"
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-px w-8 bg-gold-DEFAULT/60" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-DEFAULT">
                Luxury Stays
              </span>
              <span className="h-px w-8 bg-gold-DEFAULT/60" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
            >
              <h1 className="font-serif text-5xl font-light leading-[1.08] tracking-tight text-white md:text-7xl lg:text-8xl">
                India's Finest
                <span className="mt-2 block bg-gradient-to-r from-gold-DEFAULT via-gold-light to-gold-DEFAULT bg-clip-text text-transparent">
                  luxury hotels
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              custom={0.6}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              From heritage palace hotels to contemporary beachfront resorts —
              discover the most extraordinary places to stay across India.
            </motion.p>

            {/* ── Glassmorphism Search Bar ── */}
            <motion.div
              custom={0.8}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mx-auto mt-10 w-full max-w-xl"
              ref={searchRef}
            >
              <div className="group relative flex items-center rounded-full border border-white/15 bg-white/10 shadow-lg shadow-black/10 backdrop-blur-2xl transition-all duration-500 focus-within:border-gold-DEFAULT/40 focus-within:bg-white/15 hover:border-white/25">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center">
                  <Search className="h-5 w-5 text-white/50 transition-colors duration-300 group-focus-within:text-gold-DEFAULT" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!e.target.value) setShowSuggestions(true);
                  }}
                  onFocus={() => {
                    if (!searchQuery) setShowSuggestions(true);
                  }}
                  placeholder="Search hotels, destinations..."
                  aria-label="Search hotels"
                  className="h-14 flex-1 bg-transparent pr-4 text-sm text-white/90 outline-none placeholder:text-white/40"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowSuggestions(true);
                    }}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-white/50 transition hover:bg-white/10 hover:text-white"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <div className="mr-3 hidden items-center gap-1.5 md:flex">
                  <kbd className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 text-[10px] font-medium text-white/50">
                    ⌘K
                  </kbd>
                </div>
              </div>

              {/* Search Suggestions */}
              <AnimatePresence>
                {showSuggestions && !searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,18,35,0.95)] shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="p-3">
                      <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        Browse by style
                      </p>
                      <div className="space-y-0.5">
                        {POPULAR_SUGGESTIONS.map((suggestion) => {
                          const Icon = suggestion.icon;
                          return (
                            <button
                              key={suggestion.label}
                              onClick={() => {
                                setSearchQuery(suggestion.label);
                                setShowSuggestions(false);
                              }}
                              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-DEFAULT/10">
                                <Icon className="h-4 w-4 text-gold-DEFAULT" />
                              </span>
                              <span className="font-medium">
                                {suggestion.label}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ── Floating Stats Cards ── */}
            <motion.div
              custom={1.0}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 md:gap-5"
            >
              {[
                { label: 'Hotels', value: hotels.length },
                { label: 'Destinations', value: new Set(hotels.map((h) => h.location.split(',')[1]?.trim() ?? h.location)).size },
                { label: 'Avg Rating', value: 4.8 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.06] px-3 py-4 text-center backdrop-blur-xl transition-all duration-500 hover:border-gold-DEFAULT/20 hover:bg-white/[0.10] hover:shadow-lg hover:shadow-gold-DEFAULT/[0.03] md:px-5 md:py-5"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-DEFAULT/[0.03] to-transparent" />
                  </div>
                  <motion.span
                    key={stat.value}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="block text-2xl font-bold text-white md:text-3xl"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-white/50 md:text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              custom={1.2}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mt-12 flex flex-col items-center gap-2"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                Scroll to explore
              </span>
              <div className="flex flex-col items-center gap-1">
                <span className="h-8 w-px bg-gradient-to-b from-gold-DEFAULT/40 to-transparent" />
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronDown className="h-4 w-4 text-gold-DEFAULT/40" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURED HOTELS ────────────────────────────────────────────── */}
      {featuredHotels.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          custom={0}
          className="container mx-auto px-4 pb-8 pt-10 md:pb-12 md:pt-16"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-DEFAULT/70">
                Curated Collection
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
                Iconic luxury hotels
              </h2>
            </div>
          </div>

          <div className="flex gap-4 overflow-x-auto py-4 scrollbar-none">
            {featuredHotels.map((hotel) => (
              <FeaturedHotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </motion.section>
      )}

      {/* ─── ALL HOTELS GRID ────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Browse All
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : 'All luxury hotels'}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {filteredHotels.length}{' '}
            {filteredHotels.length === 1 ? 'hotel' : 'hotels'} found
          </p>
        </div>

        {filteredHotels.length === 0 ? (
          <div className="rounded-3xl border border-dashed p-16 text-center">
            <Building className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <p className="mt-4 text-lg font-medium text-muted-foreground">
              No hotels match your search
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-sm text-gold-DEFAULT underline underline-offset-4 hover:text-gold-dark"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredHotels.map((hotel, index) => (
              <HotelCard key={hotel.id} hotel={hotel} index={index} />
            ))}
          </div>
        )}
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────────── */}
      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50/40 to-teal-50/40 px-8 py-14 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-gold-DEFAULT/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-teal-DEFAULT/5 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-DEFAULT/70">
              Curated just for you
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827] md:text-4xl">
              Looking for something specific?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Our travel concierge team can recommend the perfect hotel for your
              journey — from private villas to heritage palaces.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:shadow-xl hover:from-amber-600 hover:to-orange-600"
              >
                Get Recommendations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/experiences"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition hover:shadow-md hover:border-gold-DEFAULT/30"
              >
                Explore Experiences
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}