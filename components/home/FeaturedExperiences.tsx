'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { HomepageExperience } from '@/lib/homepage-data';
import { Button } from '@/components/ui/button';

type FeaturedExperiencesProps = {
  experiences: HomepageExperience[];
};

export function FeaturedExperiences({ experiences }: FeaturedExperiencesProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Featured Experiences
          </p>
          <h2 className="mt-3 text-4xl font-bold text-foreground">
            Curated journeys with a premium perspective.
          </h2>
        </div>
        <Button asChild variant="secondary" className="rounded-full px-7 py-3">
          <Link href="/experiences">See curated trips</Link>
        </Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={experience.imageUrl}
                alt={experience.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
            <div className="space-y-4 p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                {experience.tag}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {experience.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {experience.location}
                </p>
              </div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-foreground">
                  {experience.price}
                </p>
                <Link
                  href={experience.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
                >
                  Book now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
