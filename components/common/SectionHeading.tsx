'use client';

import * as React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={['space-y-4', alignClass, className].filter(Boolean).join(' ')}>
      {kicker ? (
        <p className="text-sm uppercase tracking-[0.3em] text-gold-light/60">{kicker}</p>
      ) : null}
      <h2
        className={[
          'text-heading-2 font-semibold text-white sm:text-display',
          'leading-[1.15] tracking-[-0.02em]',
        ].join(' ')}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="text-lg leading-relaxed text-white/50">{subtitle}</p>
      ) : null}
    </div>
  );
}

