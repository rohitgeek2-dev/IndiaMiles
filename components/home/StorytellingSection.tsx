'use client';

import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

import type { JournalStory } from '@/lib/homepage-data';
import { StoryFeatureCard } from '@/components/common/StoryFeatureCard';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Reveal } from '@/components/common/Reveal';

type StorytellingSectionProps = {
  stories: JournalStory[];
};

export function StorytellingSection({ stories }: StorytellingSectionProps) {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-950/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal variant="fadeLeft" delayMs={0}>
              <SectionHeading
                kicker="Travel Stories"
                title={
                  <>
                    Stories from{' '}
                    <span className="text-gradient-gold">the road</span>.
                  </>
                }
                align="left"
              />
            </Reveal>
          </div>

          <Reveal variant="fadeLeft" delayMs={80}>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Read all stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Editorial magazine spread */}
        <div className="grid gap-8 md:grid-cols-3 md:grid-rows-[auto_auto]">
          {stories.map((story, index) => {
            if (index === 0) {
              return (
                <div key={story.id} className="md:col-span-2 md:row-span-2">
                  <StoryFeatureCard
                    href={story.href}
                    imageUrl={story.imageUrl}
                    title={story.title}
                    excerpt={story.excerpt}
                    metaLeft={
                      <>
                        <Calendar className="h-3 w-3" />
                        {story.date}
                      </>
                    }
                    metaRight={
                      <>
                        <User className="h-3 w-3" />
                        {story.author}
                      </>
                    }
                    ctaLabel="Read the story"
                  />
                </div>
              );
            }

            return (
              <Reveal
                key={story.id}
                variant="fadeUp"
                delayMs={200 + index * 80}
              >
                <Link href={story.href} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-lg">
                    <div className="relative h-48 overflow-hidden">
                      {/* kept as <img> for now; next step will be LuxuryImage refactor pass */}
                      <img
                        src={story.imageUrl}
                        alt={story.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
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
                        <h3 className="mt-3 text-lg font-semibold text-white">
                          {story.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-white/50 line-clamp-2">
                          {story.excerpt}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
