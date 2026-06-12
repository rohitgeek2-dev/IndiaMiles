import type { ExplorerPlace } from '@/services/travel-service';
import { PlaceGrid } from '@/components/explorer/PlaceGrid';

type FeaturedDestinationsProps = {
  places: ExplorerPlace[];
};

export function FeaturedDestinations({ places }: FeaturedDestinationsProps) {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Featured Experiences
          </p>
          <h2 className="mt-3 text-4xl font-bold text-foreground">
            Handpicked places for your India adventure
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          Explore a refined selection of iconic destinations, serene escapes,
          and cultural landmarks chosen for premium travellers.
        </p>
      </div>

      <PlaceGrid places={places} />
    </section>
  );
}
