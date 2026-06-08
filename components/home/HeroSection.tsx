import { SmartSearch } from "@/components/discovery/SmartSearch";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-24 md:py-36">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm backdrop-blur-xl">
            🇮🇳 Discover Incredible India
          </span>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Explore India
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Discover hidden gems, iconic landmarks, mountain escapes,
            spiritual journeys, beaches and unforgettable experiences.
          </p>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-2xl">
            <SmartSearch />
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="glass-card rounded-2xl px-6 py-4">
              <p className="text-2xl font-bold">28+</p>
              <p className="text-sm text-muted-foreground">States</p>
            </div>

            <div className="glass-card rounded-2xl px-6 py-4">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Places</p>
            </div>

            <div className="glass-card rounded-2xl px-6 py-4">
              <p className="text-2xl font-bold">100+</p>
              <p className="text-sm text-muted-foreground">Experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}