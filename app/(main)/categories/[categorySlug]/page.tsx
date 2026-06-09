import { notFound } from 'next/navigation';

import { PlaceGrid } from '@/components/explorer/PlaceGrid';
import { getCategoryBySlug, getPlaces } from '@/services/travel-service';

export const dynamic = 'force-dynamic';

type CategoryDetailPageProps = {
  params: Promise<{
    categorySlug: string;
  }>;
};

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { categorySlug } = await params;

  const category = (await getCategoryBySlug(categorySlug)) as any;
  const places = (await getPlaces({ categorySlug })) as any;

  if (!category) {
    notFound();
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Category Filter
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          {category.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {category.description ?? 'Places matched to this discovery category.'}
        </p>
      </div>
      <PlaceGrid places={places} />
    </section>
  );
}
