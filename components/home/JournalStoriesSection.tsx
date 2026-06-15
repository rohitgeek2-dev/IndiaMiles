'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, BookOpen } from 'lucide-react';
import type { JournalStory } from '@/lib/homepage-data';
import { Button } from '@/components/ui/button';

type JournalStoriesSectionProps = {
  stories: JournalStory[];
};

export function JournalStoriesSection({ stories }: JournalStoriesSectionProps) {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Editorial light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-muted-foreground"
            >
              Travel Journal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-4xl font-bold text-foreground sm:text-5xl sm:leading-tight"
            >
              Stories from{' '}
              <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">the road</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button asChild variant="outline" className="rounded-full border-white/10 px-7 py-6 text-sm">
              <Link href="/journal">
                Read all stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Editorial magazine spread */}
        <div className="grid gap-8 md:grid-cols-3 md:grid-rows-[auto_auto]">
          {stories.map((story, index) => {
            // First story — hero editorial feature spanning 2 columns
            if (index === 0) {
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="md:col-span-2 md:row-span-2"
                >
                  <Link href={story.href} className="group block h-full">
                    <div className="relative flex h-full min-h-[400px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(15,23,42,0.12)] md:min-h-[500px]">
                      <div className="relative w-full overflow-hidden md:w-3/5">
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
                      </div>
                      <div className="flex w-full flex-col justify-center p-8 md:w-2/5 md:p-10">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {story.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="h-3 w-3" />
                            {story.author}
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-foreground sm:text-3xl">{story.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{story.excerpt}</p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary/80 transition-all duration-300 group-hover:gap-3">
                          Read the story
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            }

            // Other stories — compact editorial cards
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              >
                <Link href={story.href} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.1)]">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Decorative top bar */}
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {story.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="h-3 w-3" />
                            {story.author}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-foreground">{story.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{story.excerpt}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 transition-all duration-300 group-hover:gap-3">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}