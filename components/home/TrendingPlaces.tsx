import Link from "next/link";
import { PlaceGrid } from "@/components/explorer/PlaceGrid";
import type { ExplorerPlace } from "@/services/travel-service";

type TrendingSectionProps = {
  places: ExplorerPlace[];
};

export function TrendingSection({ places }: TrendingSectionProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Trending
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Popular Destinations
          </h2>
        </div>

        <Link
          href="/search"
          className="rounded-full border px-5 py-3 backdrop-blur-xl"
        >
          View All
        </Link>
      </div>

      <PlaceGrid places={places} />
    </section>
  );
}