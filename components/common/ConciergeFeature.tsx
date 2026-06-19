'use client';

import * as React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface ConciergeFeatureProps {
  index: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ConciergeFeature({
  index,
  title,
  description,
  icon: Icon,
}: ConciergeFeatureProps) {
  return (
    <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-[0.28em] text-gold-light/55">
          {String(index).padStart(2, '0')}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
          <Icon className="h-5 w-5 text-gold-light" />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/55">{description}</p>
    </div>
  );
}
