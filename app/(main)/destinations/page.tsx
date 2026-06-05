import { PlaceGrid } from "@/components/explorer/PlaceGrid";
import { getPlaces } from "@/services/travel-service";

export const dynamic = "force-dynamic";

export default async function DestinationsPage() {
  const places = await getPlaces();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Places
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Discover India&apos;s standout places
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Browse forts, ghats, parks, lakes, and cultural landmarks from the
          IndiaMiles travel database.
        </p>
      </div>
      <PlaceGrid places={places} />
    </section>
  );
}
