'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { startTransition, useEffect, useState, useTransition } from 'react';
type State = {
  id: string;
  name: string;
  slug: string;
};

type Category = {
  id: string;
  name: string;
  slug: string;
};

import { Input } from '@/components/ui/input';
import { SmartSearch } from '@/components/discovery/SmartSearch';

type SearchFiltersProps = {
  states: State[];
  categories: Category[];
};

export function SearchFilters({ states, categories }: SearchFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, beginTransition] = useTransition();
  const [query, setQuery] = useState(searchParams.get('q') ?? '');
  const stateSlug = searchParams.get('state') ?? '';
  const categorySlug = searchParams.get('category') ?? '';

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const nextParams = new URLSearchParams(searchParams);

      if (query.trim()) {
        nextParams.set('q', query.trim());
      } else {
        nextParams.delete('q');
      }

      beginTransition(() => {
        router.replace(`/search?${nextParams.toString()}`);
      });
    }, 250);

    return () => window.clearTimeout(timeoutId);
  }, [beginTransition, query, router, searchParams]);

  function updateFilter(key: string, value: string) {
    const nextParams = new URLSearchParams(searchParams);

    if (value) {
      nextParams.set(key, value);
    } else {
      nextParams.delete(key);
    }

    startTransition(() => {
      router.replace(`/search?${nextParams.toString()}`);
    });
  }

  return (
    <div className="grid gap-3 rounded-3xl border bg-card p-4 shadow-sm md:grid-cols-[1fr_220px_220px]">
      <div className="space-y-2">
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search places, cities, states..."
          aria-label="Search places"
        />
        <SmartSearch initialQuery={query} />
      </div>
      <select
        value={stateSlug}
        onChange={(event) => updateFilter('state', event.target.value)}
        className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        aria-label="Filter by state"
      >
        <option value="">All states</option>
        {states.map((state) => (
          <option key={state.id} value={state.slug}>
            {state.name}
          </option>
        ))}
      </select>
      <select
        value={categorySlug}
        onChange={(event) => updateFilter('category', event.target.value)}
        className="h-9 rounded-md border border-input bg-background px-3 text-sm"
        aria-label="Filter by category"
      >
        <option value="">All categories</option>
        {categories.map((category) => (
          <option key={category.id} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
      {isPending ? (
        <p className="text-xs text-muted-foreground md:col-span-3">
          Updating results...
        </p>
      ) : null}
    </div>
  );
}
