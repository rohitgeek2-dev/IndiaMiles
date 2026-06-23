'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type TravelStoriesProps = {
  destination: Destination;
};

export function TravelStories({ destination }: TravelStoriesProps) {
  const featuredStory = destination.travelStories.find((s) => s.isFeatured);
  const supportingStories = destination.travelStories.filter((s) => !s.isFeatured);

  if (destination.travelStories.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-white py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Stories From The Road
          </p>
          <h2 className="mt-4 text-heading-2 font-semibold leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-display">
            Discover{' '}
            <span className="text-gradient-gold-teal">{destination.name}</span> through our lens.
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-5">
          {/* Featured Story — spans 3 cols */}
          {featuredStory && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-3"
            >
              <Link href={featuredStory.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:-translate-y-[3px] group-hover:shadow-card-hover shadow-card">
                  <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                    <img
                      src={featuredStory.imageUrl}
                      alt={featuredStory.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Calendar className="h-3 w-3" />
                        {featuredStory.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-3 p-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF]">
                        Featured Story
                      </p>
                      <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-[#111827] sm:text-2xl">
                        {featuredStory.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                        {featuredStory.excerpt}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#6B7280]">
                        By {featuredStory.author}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#EAC587] transition-all duration-300 group-hover:gap-3">
                        Read the story
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Supporting stories — spans 2 cols */}
          <div className="flex flex-col gap-6 md:col-span-2">
            {supportingStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-1"
              >
                <Link href={story.href} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:-translate-y-[3px] group-hover:shadow-card-hover shadow-card sm:flex-row">
                    <div className="relative h-40 sm:h-auto sm:w-48 shrink-0 overflow-hidden">
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent sm:bg-gradient-to-r" />
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent sm:h-full sm:w-[3px] sm:bg-gradient-to-b" />
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-2 p-5">
                      <div>
                        <h3 className="text-base font-bold leading-snug tracking-tight text-[#111827] sm:text-lg">
                          {story.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                          {story.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#9CA3AF]">
                          {story.date} · By {story.author}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#EAC587] transition-all duration-300 group-hover:gap-2">
                          Read
                          <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}