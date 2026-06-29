import { getCategories, getPlaces, getTrendingPlaces } from '@/services/travel-service';
import { ExperiencesPageClient } from './ExperiencesPageClient';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Experiences | India Miles — Curated Travel Experiences Across India',
  description:
    'Browse handpicked luxury experiences across India — from heritage tours and wildlife safaris to wellness retreats and culinary trails.',
};

export default async function ExperiencesPage() {
  const [categories, allPlaces, trendingPlaces] = await Promise.all([
    getCategories(),
    getPlaces(),
    getTrendingPlaces(8),
  ]);

  const totalExperiences = allPlaces.length;
  const totalCategories = categories.length;
  const totalStates = new Set(allPlaces.map((p) => p.city.state.id)).size;

  // Compute per-category place counts
  const categoryPlaceCounts: Record<string, number> = {};
  for (const place of allPlaces) {
    for (const pc of place.categories) {
      const cid = pc.category.id;
      categoryPlaceCounts[cid] = (categoryPlaceCounts[cid] ?? 0) + 1;
    }
  }

  return (
    <ExperiencesPageClient
      categories={categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        description: c.description ?? undefined,
        imageUrl: c.imageUrl ?? undefined,
      }))}
      allPlaces={allPlaces}
      trendingPlaces={trendingPlaces}
      stats={{
        totalExperiences,
        totalCategories,
        totalStates,
      }}
      categoryPlaceCounts={categoryPlaceCounts}
    />
  );
}