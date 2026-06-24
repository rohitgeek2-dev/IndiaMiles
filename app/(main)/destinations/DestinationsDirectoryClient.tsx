'use client';

import { useMemo } from 'react';
import type { ExplorerPlace } from '@/services/travel-service';

type Props = {
  places: ExplorerPlace[];
  emptyMessage: string;
};

export function DestinationsDirectoryClient({ places, emptyMessage }: Props) {
  const sorted = useMemo(() => places, [places]);

  if (sorted.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed p-10 text-center text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {sorted.map((place) => {
        return (
          <article
            key={place.id}
            className="group overflow-hidden rounded-3xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-40 bg-gradient-to-br from-orange-100 via-amber-50 to-emerald-100">
              {place.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={place.imageUrl}
                  alt={place.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-end p-5 text-left">
                  <span className="text-5xl font-black tracking-tight text-foreground/15">
                    {place.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              {place.categories[0]?.category ? (
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#111827] shadow-sm">
                  {place.categories[0].category.name}
                </div>
              ) : null}
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold">{place.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {place.city.name}, {place.city.state.name}
              </p>
              <p className="mt-4 line-clamp-3 text-sm text-muted-foreground">
                {place.shortDescription ?? place.description}
              </p>
              <div className="mt-5 text-sm font-semibold text-gold-DEFAULT">
                <a
                  href={`/place/${place.slug}`}
                  className="inline-flex items-center gap-2 transition hover:text-gold-dark"
                >
                  View destination
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
