import type { ExplorerPlace } from "@/services/travel-service";
import { PlaceCard } from "@/components/explorer/PlaceCard";

type PlaceGridProps = {
  places: ExplorerPlace[];
  emptyMessage?: string;
};

export function PlaceGrid({
  places,
  emptyMessage = "No places found for this selection.",
}: PlaceGridProps) {
  if (places.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed p-10 text-center text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}
