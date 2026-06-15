'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { HomepageExperience } from '@/lib/homepage-data';
import { Button } from '@/components/ui/button';

type LuxuryExperienceSectionProps = {
  experiences: HomepageExperience[];
};

export function LuxuryExperienceSection({ experiences }: LuxuryExperienceSectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Soft ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/[0.02] via-transparent to-slate-950/[0.03]" />

      <div className="container mx-auto px-4">
        {/* Editorial header */}
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground"
          >
            Signature Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-4xl font-bold text-foreground sm:text-5xl sm:leading-tight"
          >
            Editorial-worthy{' '}
            <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">travel stories</span>.
          </motion.h2>
        </div>

        {/* Stacked editorial layout — each entry is a magazine spread */}
        <div className="space-y-10">
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition-all duration-500 hover:shadow-[0_40px_100px_rgba(15,23,42,0.15)]"
              >
                <div className={`flex flex-col lg:flex-row ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Image side — taller, more prominent */}
                  <div className="relative min-h-[350px] flex-[1.3] overflow-hidden lg:min-h-[500px]">
                    <img
                      src={experience.imageUrl}
                      alt={experience.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent" />

                    {/* Floating tag */}
                    <div className="absolute left-6 top-6 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                      {experience.tag}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="flex flex-1 flex-col justify-center space-y-6 p-8 sm:p-10 lg:px-14">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {experience.location}
                    </p>
                    <div>
                      <h3 className="text-3xl font-semibold text-foreground sm:text-4xl">
                        {experience.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        {experience.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                      <p className="text-lg font-semibold text-foreground">{experience.price}</p>
                      <Button asChild variant="ghost" className="rounded-full px-6 py-5 group/btn">
                        <Link href={experience.href}>
                          <span>Discover experience</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}