import type { ExplorerPlace } from '@/services/travel-service';
import { getPlaces, getStates } from '@/services/travel-service';
import type { State } from '@prisma/client';
import { DestinationsDirectoryClient } from './DestinationsDirectoryClient';
import DestinationsFiltersClient from './DestinationsFiltersClient';

export const dynamic = 'force-dynamic';

type DestinationsPageProps = {
  searchParams: Promise<{
    state?: string;
    city?: string;
    q?: string;
  }>;
};

export default async function DestinationsPage({
  searchParams,
}: DestinationsPageProps) {
  const params = await searchParams;
  const [rawStates, allPlaces] = await Promise.all([getStates(), getPlaces()]);

  const states = rawStates.map((s) => ({
    ...s,
    description: s.description ?? undefined,
    imageUrl: s.imageUrl ?? undefined,
  }));

  const stateQuery = params.state?.trim() ?? '';
  const cityQuery = params.city?.trim() ?? '';
  const qQuery = params.q?.trim() ?? '';

  const filteredPlaces: ExplorerPlace[] = allPlaces.filter((place) => {
    const matchesState = !stateQuery
      ? true
      : place.city.state.slug.toLowerCase() === stateQuery.toLowerCase() ||
        place.city.state.name.toLowerCase() === stateQuery.toLowerCase();

    if (!matchesState) return false;

    const matchesCity = !cityQuery
      ? true
      : place.city.slug.toLowerCase() === cityQuery.toLowerCase() ||
        place.city.name.toLowerCase() === cityQuery.toLowerCase();

    if (!matchesCity) return false;

    if (!qQuery) return true;

    const haystack = [
      place.name,
      place.city.name,
      place.city.state.name,
      place.description,
      place.shortDescription,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return haystack.includes(qQuery.toLowerCase());
  });

  const citiesForDropdown =
    stateQuery &&
    allPlaces.some(
      (p) => p.city.state.slug.toLowerCase() === stateQuery.toLowerCase(),
    )
      ? Array.from(
          new Map(
            allPlaces
              .filter((p) => {
                const s = p.city.state.slug.toLowerCase();
                return s === stateQuery.toLowerCase();
              })
              .map((p) => [p.city.id, p.city]),
          ).values(),
        )
      : Array.from(new Map(allPlaces.map((p) => [p.city.id, p.city])).values());

  const emptyMessage = 'No destinations found.';

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Destinations
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Discover India&apos;s standout places
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse destinations across states and cities using filters, or search
          by name.
        </p>
      </div>

      <div className="space-y-6">
        <DestinationsFiltersClient states={states} cities={citiesForDropdown} />
        <DestinationsDirectoryClient
          places={filteredPlaces}
          emptyMessage={emptyMessage}
        />
      </div>
    </section>
  );
}
