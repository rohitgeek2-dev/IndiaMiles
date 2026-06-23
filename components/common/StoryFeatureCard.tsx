'use client';

import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/common/Reveal';

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
        <div className="flex h-full flex-col overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 group-hover:-translate-y-[3px] group-hover:shadow-card-hover shadow-card">
          {/* Image */}
          <div className="relative h-44 sm:h-48 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            {/* Gold accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between gap-2 p-5">
            <div>
              {metaLeft || metaRight ? (
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.12em] text-[#6B7280]">
                  {metaLeft ? (
                    <span className="flex items-center gap-1.5">{metaLeft}</span>
                  ) : null}
                  {metaRight ? (
                    <span className="flex items-center gap-1.5">{metaRight}</span>
                  ) : null}
                </div>
              ) : null}

              <h3 className="mt-2 text-lg font-bold leading-snug tracking-tight text-[#111827] sm:text-xl">
                {title}
              </h3>

              <p className="mt-1.5 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                {excerpt}
              </p>
            </div>

            <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#EAC587] transition-all duration-300 group-hover:gap-3">
              {ctaLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}