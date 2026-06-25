'use client';

import {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import type { ExplorerPlace } from '@/services/travel-service';
import type { State } from '@/lib/types';
import { DestinationsDirectoryClient } from './DestinationsDirectoryClient';
import { useDebounce } from '@/lib/hooks/use-debounce';

type Category = { id: string; name: string; slug: string };
type Stats = {
  totalDestinations: number;
  totalStates: number;
  totalCities: number;
  totalCategories: number;
};

type Props = {
  states: State[];
  allPlaces: ExplorerPlace[];
  categories: Category[];
  stats: Stats;
  stateDestCounts: Record<string, number>;
};

// ─── Helpers ────────────────────────────────────────────────────────────
function categoryColor(name: string) {
  const colors = [
    'bg-amber-50 text-amber-700 border-amber-200',
    'bg-emerald-50 text-emerald-700 border-emerald-200',
    'bg-sky-50 text-sky-700 border-sky-200',
    'bg-rose-50 text-rose-700 border-rose-200',
    'bg-violet-50 text-violet-700 border-violet-200',
    'bg-teal-50 text-teal-700 border-teal-200',
    'bg-orange-50 text-orange-700 border-orange-200',
    'bg-indigo-50 text-indigo-700 border-indigo-200',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

function categoryIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes('beach')) return Palmtree;
  if (lower.includes('hill') || lower.includes('mountain')) return Mountain;
  if (lower.includes('luxury') || lower.includes('premium')) return Gem;
  if (lower.includes('trend') || lower.includes('popular')) return TrendingUp;
  return Sparkles;
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

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
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

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;

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
        <span className={`truncate ${value ? 'text-[#111827] font-medium' : 'text-muted-foreground'}`}>
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

// ─── State Card Component ───────────────────────────────────────────────
function StateCard({
  state,
  destCount,
  isActive,
  onSelect,
}: {
  state: State;
  destCount: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border text-left transition-all duration-300 ${
        isActive
          ? 'border-gold-DEFAULT ring-2 ring-gold-DEFAULT/20 shadow-lg shadow-gold-DEFAULT/5'
          : 'border-[#E5E7EB] shadow-sm hover:shadow-lg'
      }`}
    >
      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
        {state.imageUrl && !imgError ? (
          <img
            src={state.imageUrl}
            alt={state.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-end p-4">
            <span className="text-4xl font-black tracking-tight text-foreground/10">
              {state.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {isActive && (
          <div className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gold-DEFAULT shadow-md">
            <Check className="h-3.5 w-3.5 text-white" />
          </div>
        )}

        <div className="absolute bottom-2 left-3 right-3">
          <h3 className="text-base font-bold text-white drop-shadow-sm">
            {state.name}
          </h3>
          {state.description && (
            <p className="mt-0.5 text-[10px] leading-tight text-white/70 line-clamp-1">
              {state.description}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 py-2.5">
        <span className="text-xs text-muted-foreground">
          {destCount} {destCount === 1 ? 'destination' : 'destinations'}
        </span>
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold transition-colors ${
            isActive
              ? 'bg-gold-DEFAULT text-white'
              : 'bg-amber-50 text-amber-600 group-hover:bg-amber-100'
          }`}
        >
          {destCount}
        </span>
      </div>
    </motion.button>
  );
}

// ─── State Card Skeleton ────────────────────────────────────────────────
function StateCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
      <div className="h-32 skeleton" />
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="h-3 skeleton w-24" />
        <div className="h-6 w-6 rounded-full skeleton" />
      </div>
    </div>
  );
}

// ─── Search Suggestions ─────────────────────────────────────────────────
const POPULAR_SUGGESTIONS = [
  { label: 'Goa', icon: Palmtree, type: 'state' },
  { label: 'Kerala', icon: Palmtree, type: 'state' },
  { label: 'Rajasthan', icon: MapPin, type: 'state' },
  { label: 'Beach Destinations', icon: Palmtree, type: 'category' },
  { label: 'Hill Stations', icon: Mountain, type: 'category' },
  { label: 'Luxury Experiences', icon: Gem, type: 'category' },
];

// ─── Counter Animation ──────────────────────────────────────────────────
function AnimatedCounter({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 12 }}
      className="block text-2xl font-bold text-[#111827] md:text-3xl"
    >
      {value}
    </motion.span>
  );
}

// ─── Main Client Component ──────────────────────────────────────────────
export function DestinationsPageClient({
  states,
  allPlaces,
  categories,
  stats,
  stateDestCounts,
}: Props) {
  // ── Filter state ──────────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

  // ── Compute cities ────────────────────────────────────────────────────
  const citiesInSelectedState = useMemo(() => {
    if (!selectedState) return [];
    return Array.from(
      new Map(
        allPlaces
          .filter(
            (p) =>
              p.city.state.slug.toLowerCase() === selectedState.toLowerCase(),
          )
          .map((p) => [p.city.id, p.city]),
      ).values(),
    );
  }, [allPlaces, selectedState]);

  const allCities = useMemo(
    () =>
      Array.from(new Map(allPlaces.map((p) => [p.city.id, p.city])).values()),
    [allPlaces],
  );

  const visibleCities = useMemo(
    () => (selectedState ? citiesInSelectedState : allCities),
    [selectedState, citiesInSelectedState, allCities],
  );

  // ── Filtered places ───────────────────────────────────────────────────
  const filteredPlaces = useMemo(() => {
    const q = debouncedSearch.trim().toLowerCase();
    const st = selectedState.toLowerCase();
    const ct = selectedCity.toLowerCase();
    const cat = selectedCategory.toLowerCase();

    return allPlaces.filter((place) => {
      if (st) {
        const ps = place.city.state.slug.toLowerCase();
        const pn = place.city.state.name.toLowerCase();
        if (ps !== st && pn !== st) return false;
      }

      if (ct) {
        const cs = place.city.slug.toLowerCase();
        const cn = place.city.name.toLowerCase();
        if (cs !== ct && cn !== ct) return false;
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
  }, [allPlaces, debouncedSearch, selectedState, selectedCity, selectedCategory]);

  // ── Category counts ───────────────────────────────────────────────────
  const categoryCounts = useMemo(() => {
    const map = new Map<
      string,
      { id: string; slug: string; name: string; count: number }
    >();
    for (const place of allPlaces) {
      for (const pc of place.categories) {
        const existing = map.get(pc.category.id);
        if (existing) {
          existing.count++;
        } else {
          map.set(pc.category.id, {
            id: pc.category.id,
            slug: pc.category.slug,
            name: pc.category.name,
            count: 1,
          });
        }
      }
    }
    return Array.from(map.values()).sort((a, b) => b.count - a.count);
  }, [allPlaces]);

  // ── Reset filters ─────────────────────────────────────────────────────
  const resetFilters = useCallback(() => {
    setSearchQuery('');
    setSelectedState('');
    setSelectedCity('');
    setSelectedCategory('');
  }, []);

  const isActiveFilter = useCallback(
    (type: string) => {
      switch (type) {
        case 'search':
          return !!searchQuery;
        case 'state':
          return !!selectedState;
        case 'city':
          return !!selectedCity;
        case 'category':
          return !!selectedCategory;
        default:
          return false;
      }
    },
    [searchQuery, selectedState, selectedCity, selectedCategory],
  );

  const hasActiveFilters = !!(
    searchQuery ||
    selectedState ||
    selectedCity ||
    selectedCategory
  );

  const getSelectedLabel = useCallback(
    (type: string) => {
      switch (type) {
        case 'state':
          return states.find((s) => s.slug === selectedState)?.name ?? '';
        case 'city':
          return visibleCities.find((c) => c.slug === selectedCity)?.name ?? '';
        case 'category':
          return (
            categories.find((c) => c.slug === selectedCategory)?.name ?? ''
          );
        default:
          return '';
      }
    },
    [states, visibleCities, categories, selectedState, selectedCity, selectedCategory],
  );

  const removeFilter = useCallback((type: string) => {
    switch (type) {
      case 'search':
        setSearchQuery('');
        break;
      case 'state':
        setSelectedState('');
        setSelectedCity('');
        break;
      case 'city':
        setSelectedCity('');
        break;
      case 'category':
        setSelectedCategory('');
        break;
    }
  }, []);

  const scrollToGrid = useCallback(() => {
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleSuggestionClick = useCallback(
    (label: string, type: string) => {
      setSearchQuery(label);
      setShowSuggestions(false);

      if (type === 'state') {
        const found = states.find(
          (s) => s.name.toLowerCase() === label.toLowerCase(),
        );
        if (found) {
          setSelectedState(found.slug);
          setSelectedCity('');
        }
      } else if (type === 'category') {
        const categoryMap: Record<string, string> = {
          'beach destinations': 'beaches',
          'hill stations': 'hill-stations',
          'luxury experiences': 'luxury',
        };
        const slug =
          categoryMap[label.toLowerCase()] ??
          categories.find(
            (c) => c.name.toLowerCase() === label.toLowerCase(),
          )?.slug;
        if (slug) setSelectedCategory(slug);
      }

      scrollToGrid();
    },
    [states, categories, scrollToGrid],
  );

  // ── Dropdown options ──────────────────────────────────────────────────
  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.name.localeCompare(b.name)),
    [categories],
  );

  const stateOptions = useMemo(
    () => [
      { value: '', label: 'All states' },
      ...states.map((s) => ({ value: s.slug, label: s.name })),
    ],
    [states],
  );

  const cityOptions = useMemo(
    () => [
      { value: '', label: 'All cities' },
      ...visibleCities.map((c) => ({ value: c.slug, label: c.name })),
    ],
    [visibleCities],
  );

  const categoryOptions = useMemo(
    () => [
      { value: '', label: 'All categories' },
      ...sortedCategories.map((c) => ({ value: c.slug, label: c.name })),
    ],
    [sortedCategories],
  );

  // Determine which suggestions to show
  const showDefaultSuggestions = showSuggestions && !debouncedSearch;

  // Results summary text
  const resultsSummary = !hasActiveFilters
    ? `Showing ${filteredPlaces.length} destination${filteredPlaces.length === 1 ? '' : 's'}`
    : `Showing ${filteredPlaces.length} result${filteredPlaces.length === 1 ? '' : 's'}${debouncedSearch ? ` for "${debouncedSearch}"` : ''}`;

  return (
    <>
      {/* ─── HERO SECTION ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/80 via-white to-white pt-28 md:pt-32">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-gold-DEFAULT/8 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-teal-DEFAULT/8 to-transparent blur-3xl" />

        <div className="container mx-auto px-4 pb-12 md:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-sm font-medium uppercase tracking-[0.3em] text-gold-DEFAULT/70"
            >
              India Travel Guide
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-4 text-4xl font-bold tracking-tight text-[#111827] md:text-6xl lg:text-7xl"
            >
              Explore India's
              <span className="block text-gradient-gold">finest destinations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#4B5563] md:text-lg"
            >
              From the Himalayan peaks to Goa's golden beaches — browse
              handpicked destinations curated for the discerning traveller.
            </motion.p>

            {/* ── Premium Search Bar with Conditional Suggestions ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mx-auto mt-8 w-full max-w-2xl"
              ref={searchRef}
            >
              <div className="group relative flex items-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 focus-within:border-gold-DEFAULT/60 focus-within:shadow-md focus-within:shadow-gold-DEFAULT/5 hover:border-gold-DEFAULT/30">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                  <Search className="h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-gold-DEFAULT" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!e.target.value) {
                      setShowSuggestions(true);
                    }
                  }}
                  onFocus={() => {
                    if (!searchQuery) setShowSuggestions(true);
                  }}
                  placeholder="Search destinations, cities, states..."
                  aria-label="Search destinations"
                  className="h-14 flex-1 bg-transparent pr-4 text-sm text-[#111827] outline-none placeholder:text-muted-foreground/60"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowSuggestions(true);
                    }}
                    className="mr-3 flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground"
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <div className="mr-2 hidden items-center gap-1.5 md:flex">
                  <kbd className="rounded-md border border-[#E5E7EB] bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground/60">
                    ⌘K
                  </kbd>
                </div>
              </div>

              {/* Search Suggestions - Only when input is empty */}
              <AnimatePresence>
                {showDefaultSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="relative z-50 mt-2 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-lg"
                  >
                    <div className="p-3">
                      <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Popular destinations
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
                              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#4B5563] transition hover:bg-amber-50 hover:text-[#111827]"
                            >
                              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
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

            {/* ── Stats ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-4 rounded-2xl border border-amber-100/60 bg-white/80 px-6 py-5 backdrop-blur-sm md:grid-cols-4 md:gap-6 md:px-8"
            >
              {[
                { label: 'Destinations', value: stats.totalDestinations },
                { label: 'States & UTs', value: stats.totalStates },
                { label: 'Cities', value: stats.totalCities },
                { label: 'Categories', value: stats.totalCategories },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <AnimatedCounter value={stat.value} />
                  <span className="mt-0.5 block text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:text-xs">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

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
              label="State"
              icon={MapPin}
              value={selectedState}
              options={stateOptions}
              placeholder="All states"
              onChange={(val) => {
                setSelectedState(val);
                setSelectedCity('');
              }}
            />

            <PremiumSelect
              label="City"
              icon={MapPin}
              value={selectedCity}
              options={cityOptions}
              placeholder="All cities"
              onChange={setSelectedCity}
            />

            <PremiumSelect
              label="Category"
              icon={Compass}
              value={selectedCategory}
              options={categoryOptions}
              placeholder="All categories"
              onChange={setSelectedCategory}
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
                    {[searchQuery, selectedState, selectedCity, selectedCategory].filter(Boolean).length}
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
                    value={selectedState}
                    onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(''); }}
                    aria-label="Filter by state"
                    className="h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] outline-none"
                  >
                    <option value="">All states</option>
                    {states.map((s) => (
                      <option key={s.id} value={s.slug}>{s.name}</option>
                    ))}
                  </select>

                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    aria-label="Filter by city"
                    className="h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] outline-none"
                  >
                    <option value="">All cities</option>
                    {visibleCities.map((c) => (
                      <option key={c.id} value={c.slug}>{c.name}</option>
                    ))}
                  </select>

                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    aria-label="Filter by category"
                    className="h-11 w-full appearance-none rounded-xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#111827] outline-none"
                  >
                    <option value="">All categories</option>
                    {sortedCategories.map((c) => (
                      <option key={c.id} value={c.slug}>{c.name}</option>
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

          {/* ── Active Filters Summary Chips + Results Count ── */}
          <div className="mt-4 space-y-2">
            {/* Results summary */}
            <p className="text-sm font-medium text-[#111827]">
              {resultsSummary}
            </p>

            {/* Active filter chips */}
            <AnimatePresence>
              {hasActiveFilters && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-wrap items-center gap-2"
                >
                  {isActiveFilter('search') && searchQuery && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50/60 px-3 py-1 text-xs font-medium text-gold-dark">
                      <Search className="h-3 w-3" />
                      {searchQuery}
                      <button onClick={() => removeFilter('search')} className="ml-0.5 rounded-full p-0.5 transition hover:bg-amber-100">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}

                  {isActiveFilter('state') && selectedState && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/60 px-3 py-1 text-xs font-medium text-emerald-700">
                      <MapPin className="h-3 w-3" />
                      {getSelectedLabel('state')}
                      <button onClick={() => removeFilter('state')} className="ml-0.5 rounded-full p-0.5 transition hover:bg-emerald-100">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}

                  {isActiveFilter('city') && selectedCity && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-sky-50/60 px-3 py-1 text-xs font-medium text-sky-700">
                      <MapPin className="h-3 w-3" />
                      {getSelectedLabel('city')}
                      <button onClick={() => removeFilter('city')} className="ml-0.5 rounded-full p-0.5 transition hover:bg-sky-100">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}

                  {isActiveFilter('category') && selectedCategory && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50/60 px-3 py-1 text-xs font-medium text-violet-700">
                      <Compass className="h-3 w-3" />
                      {getSelectedLabel('category')}
                      <button onClick={() => removeFilter('category')} className="ml-0.5 rounded-full p-0.5 transition hover:bg-violet-100">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Directory Grid ── */}
        <DestinationsDirectoryClient
          places={filteredPlaces}
          emptyMessage="No destinations match your search."
          hasActiveFilters={hasActiveFilters}
          onResetFilters={resetFilters}
          onExploreStates={() => {
            const stateSection = document.getElementById('explore-by-state');
            if (stateSection) {
              stateSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          isLoading={!hasRealData && filteredPlaces.length === 0}
        />
      </section>

      {/* ─── BROWSE BY CATEGORY ────────────────────────────────────────── */}
      {categoryCounts.length > 0 && (
        <motion.section
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="container mx-auto px-4 pb-16 md:pb-20"
        >
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
              Curated Collections
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#111827] md:text-3xl">
              Browse by category
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#4B5563]">
              Explore destinations by your travel interest.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categoryCounts.map((cat) => {
              const Icon = categoryIcon(cat.name);
              return (
                <motion.button
                  key={cat.id}
                  onClick={() =>
                    setSelectedCategory(
                      selectedCategory === cat.slug ? '' : cat.slug,
                    )
                  }
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -3 }}
                  className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat.slug
                      ? 'border-gold-DEFAULT bg-gold-DEFAULT/10 text-gold-dark shadow-md shadow-gold-DEFAULT/5'
                      : 'border-[#E5E7EB] bg-white text-[#4B5563] shadow-sm hover:border-gold-DEFAULT/40 hover:bg-amber-50/40 hover:text-[#111827] hover:shadow-md'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.name}
                  <span className={`ml-1 rounded-full px-2 py-0.5 text-xs tabular-nums ${
                    selectedCategory === cat.slug ? 'bg-gold-DEFAULT/15' : 'bg-[#111827]/5'
                  }`}>
                    {cat.count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.section>
      )}

      {/* ─── EXPLORE BY STATE ──────────────────────────────────────────── */}
      <motion.section
        id="explore-by-state"
        custom={2}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
        className="border-t border-[#E5E7EB] bg-gradient-to-b from-white to-amber-50/20 py-16 md:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
              Regional Guide
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#111827] md:text-3xl">
              Explore by state
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-[#4B5563]">
              Pick a state or union territory to discover its unique destinations.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4"
          >
            {states.map((state) => {
              const destCount = stateDestCounts[state.id] ?? 0;
              return (
                <StateCard
                  key={state.id}
                  state={state}
                  destCount={destCount}
                  isActive={selectedState === state.slug}
                  onSelect={() => {
                    setSelectedState(
                      selectedState === state.slug ? '' : state.slug,
                    );
                    setSelectedCity('');
                    scrollToGrid();
                  }}
                />
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}