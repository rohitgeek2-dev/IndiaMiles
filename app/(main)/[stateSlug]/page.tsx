import Link from "next/link";
import { notFound } from "next/navigation";

import { PlaceGrid } from "@/components/explorer/PlaceGrid";
import { getStateBySlug } from "@/services/travel-service";

export const dynamic = "force-dynamic";

type StateExplorerPageProps = {
  params: Promise<{
    stateSlug: string;
  }>;
};

export default async function StateExplorerPage({
  params,
}: StateExplorerPageProps) {
  const { stateSlug } = await params;
  const state = await getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const places = state.cities.flatMap((city) =>
    city.places.map((place) => ({
      ...place,
      city: {
        ...city,
        state,
      },
    })),
  );

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            State Explorer
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
            {state.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            {state.description ?? "Browse cities and places across this state."}
          </p>
        </div>
        <div className="rounded-3xl border bg-card p-5 shadow-sm">
          <p className="text-sm font-medium text-muted-foreground">Cities</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {state.cities.map((city) => (
              <Link
                key={city.id}
                href={`/${state.slug}/${city.slug}`}
                className="rounded-full bg-secondary px-3 py-1 text-sm transition hover:bg-secondary/80"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <PlaceGrid places={places} />
    </section>
  );
}
