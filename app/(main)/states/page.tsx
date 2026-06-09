import Link from 'next/link';

import { getStates } from '@/services/travel-service';

export const dynamic = 'force-dynamic';

export default async function StatesPage() {
  const states = (await getStates()) as any[];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Browse India
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Explore travel by state
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Start with a state, then drill into cities and places using a clean
          travel hierarchy.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {states.map((state: any) => (
          <Link
            key={state.id}
            href={`/${state.slug}`}
            className="rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{state.name}</h2>
            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
              {state.description ?? 'Discover cities and places in this state.'}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
