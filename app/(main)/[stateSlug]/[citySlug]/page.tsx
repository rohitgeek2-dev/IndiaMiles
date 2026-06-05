import { notFound } from "next/navigation";

import { PlaceGrid } from "@/components/explorer/PlaceGrid";
import { getCityByStateAndCitySlug } from "@/services/travel-service";

export const dynamic = "force-dynamic";

type CityExplorerPageProps = {
  params: Promise<{
    stateSlug: string;
    citySlug: string;
  }>;
};

export default async function CityExplorerPage({ params }: CityExplorerPageProps) {
  const { stateSlug, citySlug } = await params;
  const city = await getCityByStateAndCitySlug(stateSlug, citySlug);

  if (!city) {
    notFound();
  }

  const places = city.places.map((place) => ({
    ...place,
    city,
  }));

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          City Explorer
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
          {city.name}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          {city.description ?? `Explore places in ${city.name}, ${city.state.name}.`}
        </p>
      </div>
      <PlaceGrid places={places} />
    </section>
  );
}
