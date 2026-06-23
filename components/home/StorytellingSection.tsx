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
  if (stories.length === 0) return null;

  const [featuredStory, ...remainingStories] = stories;

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      {/* Gold top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/20 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24">
        {/* Section header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal variant="fadeLeft" delayMs={0}>
              <SectionHeading
                kicker="Travel Stories"
                light
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
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-6 py-2.5 text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-300 shadow-sm"
            >
              Read all stories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        {/* Editorial magazine spread - 3-column layout */}
        {remainingStories.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6 lg:gap-8">
            {/* Featured Story — spans 2 columns (~50%) */}
            <div className="md:col-span-2">
              <Reveal variant="fadeUp" delayMs={100}>
                <Link href={featuredStory.href} className="group block h-full">
                  <div className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:shadow-card-hover shadow-card sm:min-h-[480px] md:min-h-[500px]">
                    {/* Large immersive image */}
                    <div className="absolute inset-0">
                      <img
                        src={featuredStory.imageUrl}
                        alt={featuredStory.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      {/* Dark gradient overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
                    </div>

                    {/* Gold accent bar */}
                    <div className="absolute top-0 left-0 right-0 z-10 h-[3px] bg-gradient-to-r from-gold-DEFAULT/80 via-gold-DEFAULT/40 to-transparent" />

                    {/* Content overlay */}
                    <div className="relative mt-auto flex flex-col p-6 sm:p-8 md:p-10">
                      <div className="flex flex-wrap items-center gap-4 text-[11px] uppercase tracking-[0.15em] text-white/80">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {featuredStory.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="h-3.5 w-3.5" />
                          {featuredStory.author}
                        </span>
                      </div>

                      <h3 className="mt-3 font-serif text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-[36px] lg:text-[42px]">
                        {featuredStory.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base line-clamp-2">
                        {featuredStory.excerpt}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#EAC587] transition-all duration-300 group-hover:gap-3">
                        Read the story
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>

            {/* Secondary Stories — each spans 1 column (~25%) */}
            {remainingStories.map((story, index) => (
              <div key={story.id} className="md:col-span-1">
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
}