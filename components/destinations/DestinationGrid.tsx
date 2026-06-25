'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { DestinationCard } from './DestinationCard';
import type { ExplorerPlace } from '@/services/travel-service';

function DestinationCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white shadow-sm">
      <div className="h-56 skeleton sm:h-64" />
      <div className="space-y-3 p-5">
        <div className="h-3 skeleton w-3/4" />
        <div className="h-3 skeleton w-full" />
        <div className="h-3 skeleton w-1/2" />
        <div className="flex gap-1.5 pt-2">
          <div className="h-5 skeleton w-16 rounded-full" />
          <div className="h-5 skeleton w-20 rounded-full" />
        </div>
        <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-3">
          <div className="h-3 skeleton w-24" />
          <div className="h-4 skeleton w-16" />
        </div>
      </div>
    </div>
  );
}

function EmptyState({
  hasActiveFilters,
  onResetFilters,
  onExploreStates,
}: {
  hasActiveFilters: boolean;
  onResetFilters?: () => void;
  onExploreStates?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-gray-200 px-6 py-16 text-center"
    >
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50" />
        <svg
          className="relative h-10 w-10 text-gold-DEFAULT/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <h3 className="text-xl font-bold text-[#111827]">No destinations found</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#6B7280]">
        Try changing your filters or explore another region to discover
        incredible destinations across India.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {hasActiveFilters && onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-DEFAULT to-gold-dark px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-gold-DEFAULT/20 transition hover:shadow-lg hover:shadow-gold-DEFAULT/30"
          >
            Browse All
          </button>
        )}
        {onExploreStates && (
          <button
            onClick={onExploreStates}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-2.5 text-sm font-medium text-[#4B5563] shadow-sm transition hover:border-gold-DEFAULT/40 hover:bg-amber-50/40 hover:text-[#111827]"
          >
            Explore States
          </button>
        )}
      </div>
    </motion.div>
  );
}

export const DestinationGrid = memo(function DestinationGrid({
  places,
  isLoading,
  hasActiveFilters,
  onResetFilters,
  onExploreStates,
}: {
  places: ExplorerPlace[];
  isLoading: boolean;
  hasActiveFilters: boolean;
  onResetFilters?: () => void;
  onExploreStates?: () => void;
}) {
  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <DestinationCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (places.length === 0) {
    return (
      <EmptyState
        hasActiveFilters={hasActiveFilters}
        onResetFilters={onResetFilters}
        onExploreStates={onExploreStates}
      />
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {places.map((place, index) => (
        <DestinationCard key={place.id} place={place} index={index} />
      ))}
    </div>
  );
});