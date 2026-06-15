'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Star, Calendar, User } from 'lucide-react';
import type { JournalStory } from '@/lib/homepage-data';

type StorytellingSectionProps = {
  stories: JournalStory[];
};

export function StorytellingSection({ stories }: StorytellingSectionProps) {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Editorial light background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
            >
              Travel Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
            >
              Stories from{' '}
              <span className="text-gradient-gold">the road</span>.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Read all stories
              <ArrowRight className="h-4 w-4" />
            </Link>
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
                    <div className="relative flex h-full min-h-[400px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#071228]/60 transition-all duration-500 hover:shadow-luxury-xl md:min-h-[500px]">
                      <div className="relative w-full overflow-hidden md:w-3/5">
                        <img
                          src={story.imageUrl}
                          alt={story.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-[#030712]/30 to-transparent" />
                      </div>
                      <div className="flex w-full flex-col justify-center p-8 md:w-2/5 md:p-10">
                        <div className="flex items-center gap-4 text-xs text-white/40">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {story.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="h-3 w-3" />
                            {story.author}
                          </span>
                        </div>
                        <h3 className="mt-4 text-2xl font-semibold text-white sm:text-heading-4">{story.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/50">{story.excerpt}</p>
                        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
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
                  <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-lg">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
                      {/* Decorative top bar */}
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold/40 to-gold/10" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between space-y-4 p-6">
                      <div>
                        <div className="flex items-center gap-4 text-xs text-white/40">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            {story.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <User className="h-3 w-3" />
                            {story.author}
                          </span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-white">{story.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">{story.excerpt}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
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