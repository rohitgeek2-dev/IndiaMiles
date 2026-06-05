import Link from "next/link";

import { getCategories } from "@/services/travel-service";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Discovery Categories
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Explore by travel interest
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Filter IndiaMiles places by heritage, nature, pilgrimage, and future
          discovery categories.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="rounded-3xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold">{category.name}</h2>
            <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
              {category.description ?? "Browse places in this category."}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
