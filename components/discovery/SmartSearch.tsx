"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";

type SearchSuggestion = {
  id: string;
  label: string;
  type: "Place" | "City" | "State" | "Category";
  href: string;
  meta: string;
};

type SmartSearchProps = {
  initialQuery?: string;
};

export function SmartSearch({ initialQuery = "" }: SmartSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (query.trim().length < 2) {
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `/api/discovery/autocomplete?q=${encodeURIComponent(query)}`,
          { signal: controller.signal },
        );
        const payload = (await response.json()) as { data: SearchSuggestion[] };
        setSuggestions(payload.data);
      } catch (error) {
        if (!controller.signal.aborted) {
          console.error("Autocomplete failed:", error);
          setSuggestions([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }, 200);

    return () => {
      controller.abort();
      window.clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className="pl-9"
        placeholder="Try Taj Mahal, Kerala, forts..."
        aria-label="Smart travel search"
      />
      {query.trim().length >= 2 ? (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border bg-card shadow-xl">
          {isLoading ? (
            <p className="p-4 text-sm text-muted-foreground">Searching...</p>
          ) : suggestions.length > 0 ? (
            <div className="divide-y">
              {suggestions.map((suggestion) => (
                <Link
                  key={`${suggestion.type}-${suggestion.id}`}
                  href={suggestion.href}
                  className="grid gap-1 p-4 transition hover:bg-secondary"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium">{suggestion.label}</span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      {suggestion.type}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {suggestion.meta}
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <Link
              href={`/search?q=${encodeURIComponent(query.trim())}`}
              className="block p-4 text-sm text-muted-foreground transition hover:bg-secondary"
            >
              Search all places for &quot;{query.trim()}&quot;
            </Link>
          )}
        </div>
      ) : null}
    </div>
  );
}
