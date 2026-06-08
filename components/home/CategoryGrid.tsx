import Link from 'next/link';

export function CategorySection({ categories }: any) {
  return (
    <section className="container mx-auto px-4 pb-24">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Explore
        </p>

        <h2 className="mt-3 text-4xl font-bold">Travel By Category</h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {categories.map((category: any) => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
            className="rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl transition-all duration-300 hover:scale-105"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
