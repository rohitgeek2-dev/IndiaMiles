import Link from "next/link";

import { SmartSearch } from "@/components/discovery/SmartSearch";
import { PlaceGrid } from "@/components/explorer/PlaceGrid";
import {
  getCategories,
  getTopPlaces,
  getTrendingPlaces,
} from "@/services/travel-service";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [trendingPlaces, topPlaces, categories] = await Promise.all([
    getTrendingPlaces(3),
    getTopPlaces(3),
    getCategories(),
  ]);

  const featuredPlaces = trendingPlaces.length > 0 ? trendingPlaces : topPlaces;

  return (
    <div>
      <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          India Travel Discovery
        </p>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Explore India by states, cities, and unforgettable places.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          India Miles helps travellers discover destinations across India with a
          structured travel database built for scalable exploration.
        </p>
        <div className="mt-8 w-full max-w-2xl text-left">
          <SmartSearch />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Trending Now
            </p>
            <h2 className="mt-2 text-3xl font-bold">Popular discovery picks</h2>
          </div>
          <Link href="/search" className="text-sm font-medium text-primary">
            Explore all
          </Link>
        </div>
        <PlaceGrid
          places={featuredPlaces}
          emptyMessage="Connect and seed the database to show trending places."
        />
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Categories
          </p>
          <h2 className="mt-2 text-3xl font-bold">Filter by travel mood</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="rounded-full border bg-card px-5 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
