import Link from 'next/link';
import { ArrowRight, Compass, MapPin, Sparkles } from 'lucide-react';

type ExploreCTAProps = {
  states: Array<any>;
};

export function ExploreCTA({ states }: ExploreCTAProps) {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" /> Premium travel inspiration
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-foreground">
            Discover your next unforgettable India escape.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Explore curated state journeys, culture-rich itineraries, and iconic
            destinations designed to feel modern, luxurious, and effortless.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/states"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-primary/90"
            >
              Browse States <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
            >
              Explore Destinations <Compass className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {states.slice(0, 4).map((state) => (
            <Link
              key={state.id}
              href={`/states/${state.slug}`}
              className="group rounded-[1.75rem] border border-white/10 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Top destination
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">
                    {state.name}
                  </h3>
                </div>
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground line-clamp-3">
                {state.description ??
                  `Discover the best experiences in ${state.name}.`}
              </p>
            </Link>
          ))}

          <Link
            href="/states"
            className="rounded-[1.75rem] border border-dashed border-white/10 bg-transparent px-6 py-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-white/5"
          >
            View all states
          </Link>
        </div>
      </div>
    </section>
  );
}
