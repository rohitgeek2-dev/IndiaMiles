import { getPlaces, getStates, getCategories } from '@/services/travel-service';
import { DestinationsPageClient } from './DestinationsPageClient';

export const dynamic = 'force-dynamic';

export default async function DestinationsPage() {
  const [rawStates, allPlaces, categories] = await Promise.all([
    getStates(),
    getPlaces(),
    getCategories(),
  ]);

  const states = rawStates.map((s) => ({
    ...s,
    description: s.description ?? undefined,
    imageUrl: s.imageUrl ?? undefined,
  }));

  const totalDestinations = allPlaces.length;
  const totalStates = states.length;
  const totalCities = new Set(allPlaces.map((p) => p.city.id)).size;
  const totalCategories = categories.length;

  // Compute per-state destination counts for Explore by State
  const stateDestCounts: Record<string, number> = {};
  for (const place of allPlaces) {
    const sid = place.city.state.id;
    stateDestCounts[sid] = (stateDestCounts[sid] ?? 0) + 1;
  }

  return (
    <DestinationsPageClient
      states={states}
      allPlaces={allPlaces}
      categories={categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
      }))}
      stats={{
        totalDestinations,
        totalStates,
        totalCities,
        totalCategories,
      }}
      stateDestCounts={stateDestCounts}
    />
  );
}
