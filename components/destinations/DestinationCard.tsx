'use client';

import { memo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, CalendarDays, Tag, ImageOff, ArrowRight } from 'lucide-react';
import type { ExplorerPlace } from '@/services/travel-service';

const categoryColor = (name: string) => {
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
};

export const DestinationCard = memo(function DestinationCard({
  place,
  index,
}: {
  place: ExplorerPlace;
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const bestSeasonText = place.bestTimeToVisit ?? 'All seasons';
  const primaryCategory = place.categories[0]?.category;

  return (
    <Link href={`/place/${place.slug}`} className="group block">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.04,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="relative overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
      >
        {/* Image Section */}
        <div className="relative h-56 overflow-hidden sm:h-64">
          {imgError || !place.imageUrl ? (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
              <div className="flex flex-col items-center gap-2 text-gray-300">
                <ImageOff className="h-10 w-10" />
                <span className="text-xs font-medium">Image unavailable</span>
              </div>
            </div>
          ) : (
            <img
              src={place.imageUrl}
              alt={place.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          )}

          {/* Luxury Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Category Badge */}
          {primaryCategory && (
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#111827] shadow-sm backdrop-blur-sm">
                <Tag className="h-3 w-3" />
                {primaryCategory.name}
              </span>
            </div>
          )}

          {/* Best Season Badge */}
          <div className="absolute right-4 top-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
              <CalendarDays className="h-3 w-3" />
              {bestSeasonText}
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-2xl font-bold text-white drop-shadow-sm">
              {place.name}
            </h3>
            <div className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">
                {place.city.name}, {place.city.state.name}
              </span>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-3 p-5">
          <p className="line-clamp-2 text-sm leading-relaxed text-[#4B5563]">
            {place.shortDescription ?? place.description}
          </p>

          {/* Category Chips */}
          {place.categories.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {place.categories.slice(0, 3).map((pc) => (
                <span
                  key={pc.category.id}
                  className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${categoryColor(pc.category.name)}`}
                >
                  {pc.category.name}
                </span>
              ))}
              {place.categories.length > 3 && (
                <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-gray-500">
                  +{place.categories.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-[#E5E7EB] pt-3">
            <div className="flex items-center gap-2 text-xs text-[#6B7280]">
              <span>Luxury destination</span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-DEFAULT transition-colors group-hover:text-gold-dark">
              Explore
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  );
});