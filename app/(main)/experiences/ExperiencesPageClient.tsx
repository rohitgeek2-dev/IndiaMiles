'use client';

import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  MapPin,
  ChevronDown,
  SlidersHorizontal,
  X,
  Compass,
  TrendingUp,
  Mountain,
  Palmtree,
  Gem,
  Sparkles,
  Check,
  ArrowRight,
  Clock,
} from 'lucide-react';
import type { ExplorerPlace } from '@/services/travel-service';
import { useDebounce } from '@/lib/hooks/use-debounce';
import { PlaceGrid } from '@/components/explorer/PlaceGrid';

type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
};
type Stats = {
  totalExperiences: number;
  totalCategories: number;
  totalStates: number;
};

type Props = {
  categories: Category[];
  allPlaces: ExplorerPlace[];
  trendingPlaces: ExplorerPlace[];
  stats: Stats;
  categoryPlaceCounts: Record<string, number>;
};

// ─── Helpers ────────────────────────────────────────────────────────────
function categoryIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes('beach')) return Palmtree;
  if (lower.includes('hill') || lower.includes('mountain')) return Mountain;
  if (
    lower.includes('luxury') ||
    lower.includes('premium') ||
    lower.includes('heritage')
  )
    return Gem;
  if (lower.includes('trend') || lower.includes('popular')) return TrendingUp;
  return Compass;
}

// ─── Animation Variants ─────────────────────────────────────────────────
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

// ─── Premium Select Component ───────────────────────────────────────────
function PremiumSelect({
  label,
  icon: Icon,
  value,
  options,
  placeholder,
  onChange,
}: {
  label: string;
  icon: typeof MapPin;
  value: string;
  options: { value: string; label: string }[];
  placeholder: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? placeholder;

  const filteredOptions = useMemo(
    () =>
      searchTerm
        ? options.filter((o) =>
            o.label.toLowerCase().includes(searchTerm.toLowerCase()),
          )
        : options,
    [options, searchTerm],
  );

  return (
    <div ref={ref} className="relative flex-1 max-w-[220px]">
      <button
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchTerm('');
        }}
        className={`flex h-11 w-full items-center gap-2.5 rounded-xl border bg-white pl-3.5 pr-9 text-sm outline-none transition-all duration-200 ${
          isOpen
            ? 'border-gold-DEFAULT/50 ring-1 ring-gold-DEFAULT/20 shadow-md'
            : 'border-[#E5E7EB] hover:border-gold-DEFAULT/30 shadow-sm hover:shadow-md'
        }`}
      >
        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span
          className={`truncate ${value ? 'text-[#111827] font-medium' : 'text-muted-foreground'}`}
        >
          {selectedLabel}
        </span>
        <ChevronDown
          className={`absolute right-3 h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute left-0 right-0 z-50 mt-1.5 overflow-hidden rounded-xl border border-[#E5E7EB] bg-white shadow-lg"
          >
            {options.length > 8 && (
              <div className="border-b border-[#E5E7EB] px-3 py-2">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={`Search ${label.toLowerCase()}...`}
                  className="w-full rounded-lg border border-[#E5E7EB] bg-gray-50 px-2.5 py-1.5 text-xs outline-none focus:border-gold-DEFAULT/50"
                />
              </div>
            )}

            <div className="max-h-52 overflow-y-auto py-1">
              {filteredOptions.length === 0 ? (
                <div className="px-4 py-3 text-xs text-muted-foreground text-center">
                  No {label.toLowerCase()} found
                </div>
              ) : (
                filteredOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`flex w-full items-center gap-2 px-4 py-2.5 text-left text-sm transition-colors ${
                      value === opt.value
                        ? 'bg-amber-50 text-gold-dark font-medium'
                        : 'text-[#4B5563] hover:bg-amber-50/50 hover:text-[#111827]'
                    }`}
                  >
                    <span className="flex-1 truncate">{opt.label}</span>
                    {value === opt.value && (
                      <Check className="h-3.5 w-3.5 text-gold-DEFAULT shrink-0" />
                    )}
                  </button>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Animated Counter ───────────────────────────────────────────────────
function AnimatedCounter({
  value,
  className = '',
}: {
  value: number;
  className?: string;
}) {
  return (
    <motion.span
      key={value}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className={`block text-2xl font-bold md:text-3xl ${className}`}
    >
      {value}
    </motion.span>
  );
}

// ─── Trending Experience Card ───────────────────────────────────────────
function TrendingCard({ place }: { place: ExplorerPlace }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group shrink-0"
    >
      <Link
        href={`/place/${place.slug}`}
        className="flex w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        <div className="relative h-44 w-40 shrink-0 overflow-hidden">
          {place.imageUrl && !imgError ? (
            <img
              src={place.imageUrl}
              alt={place.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
              <Compass className="h-8 w-8 text-foreground/10" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col justify-center p-4">
          <p className="text-xs font-medium uppercase tracking-wider text-gold-DEFAULT">
            {place.categories[0]?.category.name ?? 'Experience'}
          </p>
          <h3 className="mt-1 text-sm font-semibold text-[#111827] line-clamp-2 group-hover:text-teal-600 transition-colors">
            {place.name}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3 shrink-0" />
            {place.city.name}, {place.city.state.name}
          </p>
          <div className="mt-2 flex items-center gap-3 text-[10px] text-muted-foreground">
            {place.bestTimeToVisit && (
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {place.bestTimeToVisit}
              </span>
            )}
            {place.trendingScore > 0 && (
              <span className="flex items-center gap-1 text-amber-600">
                <TrendingUp className="h-3 w-3" />
                Trending
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main Client Component ──────────────────────────────────────────────
export function ExperiencesPageClient({
  categories,
  allPlaces,
  trendingPlaces,
  stats,
  categoryPlaceCounts,
}: Props) {
  // ── Filter state ──────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const categorySectionRef = useRef<HTMLElement>(null);

  // ── Parallax effect for hero ──────────────────────────────────────────
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.3]);
  const heroContentY = useTransform(scrollY, [0, 400], [0, 80]);

  // ── Data availability check ───────────────────────────────────────────
  const hasRealData = allPlaces.length > 0;

  // ── Debounced search ──────────────────────────────────────────────────
  const debouncedSearch = useDebounce(searchQuery, 250);

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

  // ── Compute available states from places ──────────────────────────────
  const availableStates = useMemo(() => {
    const map = new Map<string, { id: string; name: string; slug: string }>();
    for (const place of allPlaces) {
      const s = place.city.state;
      if (!map.has(s.id)) {
        map.set(s.id, { id: s.id, name: s.name, slug: s.slug });
      }
    }
    return Array.from(map.values()).sort((a, b) =>
      a.name.localeCompare(b.name),
    );
  }, [allPlaces]);

  // ── Filtered places ───────────────────────────────────────────────────
  const filteredPlaces = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    const cat = selectedCategory.toLowerCase();
    const st = selectedState.toLowerCase();

    return allPlaces.filter((place) => {
      if (st) {
        const ps = place.city.state.slug.toLowerCase();
        const pn = place.city.state.name.toLowerCase();
        if (ps !== st && pn !== st) return false;
      }

      if (cat) {
        const hasCat = place.categories.some(
          (pc) =>
            pc.category.slug.toLowerCase() === cat ||
            pc.category.name.toLowerCase() === cat,
        );
        if (!hasCat) return false;
      }

      if (q) {
        const haystack = [
          place.name,
          place.city.name,
          place.city.state.name,
          place.description,
          place.shortDescription,
          ...place.categories.map((pc) => pc.category.name),
          place.bestTimeToVisit,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });
  }, [allPlaces, debouncedSearch, selectedCategory, selectedState]);

  // ── Reset filters ─────────────────────────────────────────────────────
  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedState('');
  }, []);

  const hasActiveFilters = !!(searchQuery || selectedCategory || selectedState);

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.name.localeCompare(b.name)),
    [categories],
  );

  const categoryOptions = useMemo(
    () => [
      { value: '', label: 'All categories' },
      ...sortedCategories.map((c) => ({ value: c.slug, label: c.name })),
    ],
    [sortedCategories],
  );

  const stateOptions = useMemo(
    () => [
      { value: '', label: 'All states' },
      ...availableStates.map((s) => ({ value: s.slug, label: s.name })),
    ],
    [availableStates],
  );

  const resultsSummary = !hasActiveFilters
    ? `Showing ${filteredPlaces.length} experience${filteredPlaces.length === 1 ? '' : 's'}`
    : `Showing ${filteredPlaces.length} result${filteredPlaces.length === 1 ? '' : 's'}${debouncedSearch ? ` for "${debouncedSearch}"` : ''}`;

  const POPULAR_SUGGESTIONS = [
    { label: 'Heritage Tours', icon: Gem, type: 'category' },
    { label: 'Wildlife Safaris', icon: Mountain, type: 'category' },
    { label: 'Beach Escapes', icon: Palmtree, type: 'category' },
    { label: 'Wellness Retreats', icon: Sparkles, type: 'category' },
    { label: 'Culinary Trails', icon: Compass, type: 'category' },
    { label: 'Adventure', icon: TrendingUp, type: 'category' },
  ];

  const handleSuggestionClick = useCallback(
    (label: string, type: string) => {
      setSearchQuery(label);
      setShowSuggestions(false);

      if (type === 'category') {
        const found = sortedCategories.find(
          (c) => c.name.toLowerCase() === label.toLowerCase(),
        );
        if (found) setSelectedCategory(found.slug);
      }

      gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    [sortedCategories],
  );

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
        <motion.div style={{ y: heroParallaxY }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1920&q=85)',
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
            {/* Eyebrow - Section label */}
            <motion.div
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mb-6 flex items-center justify-center gap-4"
            >
              <span className="h-px w-8 bg-gold-DEFAULT/60" />
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-gold-DEFAULT">
                Curated Experiences
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
                Discover Signature
                <span className="mt-2 block bg-gradient-to-r from-gold-DEFAULT via-gold-light to-gold-DEFAULT bg-clip-text text-transparent">
                  travel moments
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
              Immerse yourself in handpicked luxury experiences — from heritage
              palace stays and wildlife encounters to wellness retreats and
              gourmet culinary journeys across India.
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
                  placeholder="Search experiences, categories, states..."
                  aria-label="Search experiences"
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

              {/* Search Suggestions - Glassmorphism theme */}
              <AnimatePresence>
                {showSuggestions && !debouncedSearch && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-50 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[rgba(10,18,35,0.95)] shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="p-3">
                      <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        Popular experiences
                      </p>
                      <div className="space-y-0.5">
                        {POPULAR_SUGGESTIONS.map((suggestion) => {
                          const Icon = suggestion.icon;
                          return (
                            <button
                              key={suggestion.label}
                              onClick={() =>
                                handleSuggestionClick(
                                  suggestion.label,
                                  suggestion.type,
                                )
                              }
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

            {/* ── Floating Stats Cards (Glassmorphism) ── */}
            <motion.div
              custom={1.0}
              initial="hidden"
              animate="visible"
              variants={heroFadeUp}
              className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-3 md:gap-5"
            >
              {[
                { label: 'Experiences', value: stats.totalExperiences },
                { label: 'Categories', value: stats.totalCategories },
                { label: 'States & UTs', value: stats.totalStates },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.06] px-3 py-4 text-center backdrop-blur-xl transition-all duration-500 hover:border-gold-DEFAULT/20 hover:bg-white/[0.10] hover:shadow-lg hover:shadow-gold-DEFAULT/[0.03] md:px-5 md:py-5"
                >
                  {/* Glow effect on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-DEFAULT/[0.03] to-transparent" />
                  </div>
                  <AnimatedCounter value={stat.value} className="text-white" />
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

      {/* ─── TRENDING EXPERIENCES ──────────────────────────────────────── */}
      {trendingPlaces.length > 0 && (
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
                Trending Now
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
                Most sought-after experiences
              </h2>
            </div>
            <Link
              href="/destinations"
              className="hidden items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm transition hover:border-gold-DEFAULT/30 hover:text-gold-DEFAULT sm:flex"
            >
              View all
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="flex w-full gap-4 flex-wrap py-4 pl-1 pr-1 md:pr-8 scrollbar-none">
            {trendingPlaces.map((place) => (
              <TrendingCard key={place.id} place={place} />
            ))}
          </div>
        </motion.section>
      )}

      {/* ─── BROWSE BY CATEGORY ────────────────────────────────────────── */}
      {sortedCategories.length > 0 && (
        <motion.section
          ref={categorySectionRef}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="container mx-auto px-4 pb-8 md:pb-12"
        >
          <div className="mb-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-gold-DEFAULT/70">
              Browse by category
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">
              Find your perfect experience
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
              Explore India through curated categories — from heritage and
              wildlife to culinary and wellness.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sortedCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(
                    selectedCategory === category.slug ? '' : category.slug,
                  );
                  gridRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? 'border-gold-DEFAULT ring-2 ring-gold-DEFAULT/20 shadow-lg shadow-gold-DEFAULT/5'
                    : 'border-[#E5E7EB] shadow-sm hover:shadow-lg hover:-translate-y-1'
                }`}
              >
                <div className="relative h-36 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
                  {category.imageUrl ? (
                    <img
                      src={category.imageUrl}
                      alt={category.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      {React.createElement(categoryIcon(category.name), {
                        className: 'h-14 w-14 text-foreground/10',
                      })}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  {selectedCategory === category.slug && (
                    <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-DEFAULT shadow-md">
                      <Check className="h-3.5 w-3.5 text-white" />
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold text-white drop-shadow-sm">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="mt-0.5 text-xs leading-tight text-white/70 line-clamp-1">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-xs text-muted-foreground">
                    {categoryPlaceCounts[category.id] ?? 0}{' '}
                    {(categoryPlaceCounts[category.id] ?? 0) === 1
                      ? 'experience'
                      : 'experiences'}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-50 text-xs font-bold text-amber-600 transition-colors group-hover:bg-amber-100">
                    {categoryPlaceCounts[category.id] ?? 0}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.section>
      )}

      {/* ─── FILTERS + RESULTS ─────────────────────────────────────────── */}
      <section ref={gridRef} className="container mx-auto px-4 py-8 md:py-10">
        {/* ── Filter Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-6"
        >
          <div className="hidden items-center gap-3 md:flex">
            <PremiumSelect
              label="Category"
              icon={Compass}
              value={selectedCategory}
              options={categoryOptions}
              placeholder="All categories"
              onChange={setSelectedCategory}
            />

            <PremiumSelect
              label="State"
              icon={MapPin}
              value={selectedState}
              options={stateOptions}
              placeholder="All states"
              onChange={setSelectedState}
            />

            <AnimatePresence>
              {hasActiveFilters && (
                <motion.button
                  initial={{ opacity: 0, width: 0, scale: 0.8 }}
                  animate={{ opacity: 1, width: 'auto', scale: 1 }}
                  exit={{ opacity: 0, width: 0, scale: 0.8 }}
                  onClick={resetFilters}
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-[#E5E7EB] bg-white px-4 py-2.5 text-xs font-medium text-muted-foreground shadow-sm transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                >
                  <X className="h-3.5 w-3.5" />
                  Reset Filters
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* ── Mobile Filters ── */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="flex w-full items-center justify-between rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-medium text-[#111827] shadow-sm"
            >
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-gold-DEFAULT" />
                Filters
                {hasActiveFilters && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-DEFAULT text-[10px] font-bold text-white">
                    {
                      [searchQuery, selectedCategory, selectedState].filter(
                        Boolean,
                      ).length
                    }
                  </span>
                )}
              </div>
              <ChevronDown
                className={`h-4 w-4 transition ${showMobileFilters ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {showMobileFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 space-y-3 overflow-hidden"
                >
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Filter by category"
                    className="h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] outline-none"
                  >
                    <option value="">All categories</option>
                    {sortedCategories.map((c) => (
                      <option key={c.id} value={c.slug}>
                        {c.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={selectedState}
                    onChange={(e) => setSelectedState(e.target.value)}
                    aria-label="Filter by state"
                    className="h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] outline-none"
                  >
                    <option value="">All states</option>
                    {availableStates.map((s) => (
                      <option key={s.id} value={s.slug}>
                        {s.name}
                      </option>
                    ))}
                  </select>

                  <AnimatePresence>
                    {hasActiveFilters && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={resetFilters}
                        className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-[#E5E7EB] py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-muted"
                      >
                        <X className="h-3.5 w-3.5" />
                        Reset Filters
                      </motion.button>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Results Count ── */}
          <div className="mt-4">
            <p className="text-sm font-medium text-[#111827]">
              {resultsSummary}
            </p>
          </div>
        </motion.div>

        {/* ── Place Grid ── */}
        <div>
          {!hasRealData && filteredPlaces.length === 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm"
                >
                  <div className="h-48 skeleton" />
                  <div className="space-y-2 p-5">
                    <div className="skeleton h-4 w-20" />
                    <div className="skeleton h-5 w-3/4" />
                    <div className="skeleton h-4 w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <PlaceGrid
              places={filteredPlaces}
              emptyMessage="No experiences match your search criteria. Try adjusting your filters."
            />
          )}
        </div>
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
              Can't find what you're looking for?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Our travel concierge team can craft a bespoke experience tailored
              to your preferences. From private heritage dinners to custom
              wellness journeys — let us design your perfect India escape.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber-500/20 transition hover:shadow-xl hover:from-amber-600 hover:to-orange-600"
              >
                Plan My Experience
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/destinations"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition hover:shadow-md hover:border-gold-DEFAULT/30"
              >
                Browse All Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
