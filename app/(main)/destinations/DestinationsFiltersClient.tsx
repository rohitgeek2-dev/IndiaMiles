'use client';

import { useEffect, useMemo, useState, useTransition } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { State } from '@/lib/types';

type City = {
  id: string;
  name: string;
  slug: string;
  stateId: string;
};

type Props = {
  states: State[];
  cities: City[];
  emptyMessage?: string;
};

export default function DestinationsFiltersClient({ states, cities }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, beginTransition] = useTransition();

  const initialQ = searchParams.get('q') ?? '';
  const initialState = searchParams.get('state') ?? '';
  const initialCity = searchParams.get('city') ?? '';

  const [q, setQ] = useState(initialQ);
  const [stateSlug, setStateSlug] = useState(initialState);
  const [citySlug, setCitySlug] = useState(initialCity);

  useEffect(() => {
    setQ(initialQ);
    setStateSlug(initialState);
    setCitySlug(initialCity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const visibleCities = useMemo(() => {
    if (!stateSlug) return cities;
    const selected = states.find((s) => s.slug === stateSlug);
    if (!selected) return cities;
    return cities.filter((c) => c.stateId === selected.id);
  }, [cities, states, stateSlug]);

  function updateParam(key: 'state' | 'city' | 'q', value: string) {
    const next = new URLSearchParams(searchParams);
    if (value) next.set(key, value);
    else next.delete(key);

    beginTransition(() => {
      router.replace(`/destinations?${next.toString()}`);
    });
  }

  function onChangeState(nextStateSlug: string) {
    setStateSlug(nextStateSlug);

    // If state changes, city should reset to keep dropdown logic correct.
    const next = new URLSearchParams(searchParams);
    if (nextStateSlug) next.set('state', nextStateSlug);
    else next.delete('state');

    next.delete('city');
    updateParam('city', '');

    beginTransition(() => {
      router.replace(`/destinations?${next.toString()}`);
    });
  }

  function onChangeCity(nextCitySlug: string) {
    setCitySlug(nextCitySlug);
    updateParam('city', nextCitySlug);
  }

  // q is debounced client-side to avoid URL churn.
  useEffect(() => {
    const t = window.setTimeout(() => {
      updateParam('q', q.trim());
    }, 250);

    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q]);

  return (
    <div className="rounded-3xl border bg-card p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-[1fr_220px_220px]">
        <div className="flex flex-col gap-2">
          <input
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search destinations, cities, states..."
            aria-label="Search"
          />
        </div>

        <select
          value={stateSlug}
          onChange={(e) => onChangeState(e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
          aria-label="Filter by state"
        >
          <option value="">All states</option>
          {states.map((s) => (
            <option key={s.id} value={s.slug}>
              {s.name}
            </option>
          ))}
        </select>

        <select
          value={citySlug}
          onChange={(e) => onChangeCity(e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm"
          aria-label="Filter by city"
        >
          <option value="">{stateSlug ? 'All cities' : 'All cities'}</option>
          {visibleCities.map((c) => (
            <option key={c.id} value={c.slug}>
              {c.name}
            </option>
          ))}
        </select>

        {isPending ? (
          <p className="text-xs text-muted-foreground md:col-span-3">
            Updating results...
          </p>
        ) : null}
      </div>
    </div>
  );
}
