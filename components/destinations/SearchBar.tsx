'use client';

import {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, MapPin, Palmtree, Mountain, Gem, Sparkles } from 'lucide-react';
import { useDebounce } from '@/lib/hooks/use-debounce';
import type { ExplorerPlace } from '@/services/travel-service';

const POPULAR_SUGGESTIONS = [
  { label: 'Goa', icon: Palmtree, type: 'state' },
  { label: 'Kerala', icon: Palmtree, type: 'state' },
  { label: 'Rajasthan', icon: MapPin, type: 'state' },
  { label: 'Beach Destinations', icon: Palmtree, type: 'category' },
  { label: 'Hill Stations', icon: Mountain, type: 'category' },
  { label: 'Luxury Experiences', icon: Gem, type: 'category' },
];

type SearchBarProps = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  allPlaces: ExplorerPlace[];
  states: { name: string; slug: string }[];
  categories: { name: string; slug: string }[];
  onSuggestionSelect: (label: string, type: string) => void;
  onPlaceSelect: (placeName: string) => void;
};

export function SearchBar({
  searchQuery,
  onSearchChange,
  allPlaces,
  states,
  categories,
  onSuggestionSelect,
  onPlaceSelect,
}: SearchBarProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const debouncedSearch = useDebounce(searchQuery, 250);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Search-matched suggestions
  const searchSuggestions = useMemo(() => {
    if (!debouncedSearch) return [];
    const q = debouncedSearch.toLowerCase();
    return allPlaces.filter((place) => {
      const haystack = [
        place.name,
        place.city.name,
        place.city.state.name,
        ...place.categories.map((pc) => pc.category.name),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [allPlaces, debouncedSearch]);

  const handleSuggestionClick = useCallback(
    (label: string, type: string) => {
      onSuggestionSelect(label, type);
      setShowSuggestions(false);
    },
    [onSuggestionSelect],
  );

  const handlePlaceClick = useCallback(
    (name: string) => {
      onPlaceSelect(name);
      setShowSuggestions(false);
    },
    [onPlaceSelect],
  );

  const showDefaultSuggestions = showSuggestions && !debouncedSearch;
  const shouldShowTypedSuggestions = showSuggestions && !!debouncedSearch;

  return (
    <div ref={searchRef} className="w-full">
      <div className="group relative flex items-center rounded-full border border-[#E5E7EB] bg-white shadow-sm transition-all duration-300 focus-within:border-gold-DEFAULT/60 focus-within:shadow-md focus-within:shadow-gold-DEFAULT/5 hover:border-gold-DEFAULT/30">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
          <Search className="h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-gold-DEFAULT" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search destinations, cities, states..."
          aria-label="Search destinations"
          className="h-14 flex-1 bg-transparent pr-4 text-sm text-[#111827] outline-none placeholder:text-muted-foreground/60"
        />
        {searchQuery && (
          <button
            onClick={() => {
              onSearchChange('');
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

      {/* Search Suggestions */}
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

        {/* Typed search suggestions */}
        {shouldShowTypedSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="relative z-50 mt-2 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-lg"
          >
            <div className="p-3">
              <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Matching destinations
              </p>
              <div className="space-y-0.5">
                {searchSuggestions.length === 0 ? (
                  <div className="px-3 py-6 text-center">
                    <Search className="mx-auto h-6 w-6 text-muted-foreground/40" />
                    <p className="mt-2 text-sm font-medium text-[#4B5563]">
                      No matching destinations found.
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Try a different search term or explore categories below.
                    </p>
                  </div>
                ) : (
                  searchSuggestions.slice(0, 6).map((place) => (
                    <button
                      key={place.id}
                      onClick={() => handlePlaceClick(place.name)}
                      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-[#4B5563] transition hover:bg-amber-50 hover:text-[#111827]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-50">
                        <MapPin className="h-4 w-4 text-gold-DEFAULT" />
                      </span>
                      <div className="flex-1 text-left">
                        <span className="font-medium block">{place.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {place.city.name}, {place.city.state.name}
                        </span>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}