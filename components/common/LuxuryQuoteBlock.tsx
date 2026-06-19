'use client';

import * as React from 'react';
import { Quote, Shield, Star } from 'lucide-react';

export interface LuxuryQuoteBlockProps {
  quote: string;
  name: string;
  role: string;
  rating?: number;
  isVerified?: boolean;
  className?: string;
}

export function LuxuryQuoteBlock({
  quote,
  name,
  role,
  rating = 5,
  isVerified = false,
  className,
}: LuxuryQuoteBlockProps) {
  return (
    <article
      className={[
        'rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Quote className="h-8 w-8 text-gold/30" />
      <p className="mt-5 text-lg leading-relaxed text-white/82">{quote}</p>
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-white">{name}</p>
            {isVerified ? <Shield className="h-4 w-4 text-gold" /> : null}
          </div>
          <p className="text-sm text-white/45">{role}</p>
        </div>
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </article>
  );
}
