import { PlaceGrid } from "@/components/explorer/PlaceGrid";
import { SearchFilters } from "@/components/explorer/SearchFilters";
import { getCategories, getPlaces, getStates } from "@/services/travel-service";

export const dynamic = "force-dynamic";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    state?: string;
    category?: string;
  }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const [states, categories, places] = await Promise.all([
    getStates(),
    getCategories(),
    getPlaces({
      query: params.q,
      stateSlug: params.state,
      categorySlug: params.category,
    }),
  ]);

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Search
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Find your next India travel idea
        </h1>
      </div>
      <div className="space-y-8">
        <SearchFilters states={states} categories={categories} />
        <PlaceGrid places={places} />
      </div>
    </section>
  );
}
