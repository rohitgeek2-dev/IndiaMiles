import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarDays, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { PlaceGrid } from '@/components/explorer/PlaceGrid';
import {
  getPlaceBySlug,
  getRecommendedPlaces,
} from '@/services/travel-service';

export const dynamic = 'force-dynamic';

type PlaceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PlaceDetailPage({
  params,
}: PlaceDetailPageProps) {
  const { slug } = await params;
  const [place, recommendations] = (await Promise.all([
    getPlaceBySlug(slug),
    getRecommendedPlaces(slug),
  ])) as any;

  if (!place) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {place.categories.map(({ category }: any) => (
              <Badge key={category.id} variant="secondary">
                {category.name}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {place.name}
          </h1>
          <p className="mt-5 flex items-center gap-2 text-lg text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <Link href={`/${place.city.state.slug}/${place.city.slug}`}>
              {place.city.name}, {place.city.state.name}
            </Link>
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            {place.description}
          </p>
        </div>

        <aside className="rounded-3xl border bg-card p-6 shadow-sm">
          <div className="h-56 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 via-amber-50 to-emerald-100 dark:from-orange-950 dark:via-stone-900 dark:to-emerald-950">
            {place.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={place.imageUrl}
                alt={place.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-end p-6 text-6xl font-black tracking-tight text-foreground/15">
                {place.name.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          {place.bestTimeToVisit ? (
            <div className="mt-6 flex gap-3 rounded-2xl bg-secondary p-4">
              <CalendarDays className="mt-0.5 h-5 w-5" />
              <div>
                <p className="font-medium">Best time to visit</p>
                <p className="text-sm text-muted-foreground">
                  {place.bestTimeToVisit}
                </p>
              </div>
            </div>
          ) : null}
        </aside>
      </div>
      <section className="mt-16">
        <div className="mb-6">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Recommended
          </p>
          <h2 className="mt-2 text-3xl font-bold">Similar places to explore</h2>
        </div>
        <PlaceGrid
          places={recommendations}
          emptyMessage="No recommendations available yet."
        />
      </section>
    </article>
  );
}
