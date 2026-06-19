'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/common/Reveal';
import { LuxuryImage } from '@/components/common/LuxuryImage';

export interface StoryFeatureCardProps {
  href: string;
  imageUrl: string;
  title: string;
  excerpt: string;
  metaLeft?: React.ReactNode;
  metaRight?: React.ReactNode;
  ctaLabel?: string;
}

export function StoryFeatureCard({
  href,
  imageUrl,
  title,
  excerpt,
  metaLeft,
  metaRight,
  ctaLabel = 'Read the story',
}: StoryFeatureCardProps) {
  return (
    <Reveal variant="fadeUp" once={true}>
      <Link href={href} className="group block h-full">
        <div className="relative flex h-full min-h-[420px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:shadow-luxury-xl">
          <div className="relative w-full overflow-hidden md:w-3/5">
            <LuxuryImage
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 via-[#030712]/30 to-transparent" />
          </div>

          <div className="flex w-full flex-col justify-center p-8 md:w-2/5 md:p-10">
            {metaLeft || metaRight ? (
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
                {metaLeft ? <span className="flex items-center gap-1.5">{metaLeft}</span> : null}
                {metaRight ? <span className="flex items-center gap-1.5">{metaRight}</span> : null}
              </div>
            ) : null}

            <h3 className="mt-4 text-2xl font-semibold text-white sm:text-heading-4">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/50">{excerpt}</p>

            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

