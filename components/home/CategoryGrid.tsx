'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { HomepageCategory } from '@/lib/homepage-data';

type CategorySectionProps = {
  categories: HomepageCategory[];
};

export function CategorySection({ categories }: CategorySectionProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Explore by category
          </p>
          <h2 className="mt-3 text-4xl font-bold text-foreground">
            Find your next curated travel theme.
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          Travel India with purpose: from iconic heritage sites to beachside
          retreats and wellness sanctuaries.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1"
          >
            <div
              className={`mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r ${category.accent}`}
            />
            <h3 className="text-2xl font-semibold text-foreground">
              {category.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {category.description}
            </p>
            <Link
              href={category.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
            >
              Explore
              <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
