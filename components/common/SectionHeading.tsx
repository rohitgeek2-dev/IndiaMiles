'use client';

import * as React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  className,
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={['space-y-4', alignClass, className].filter(Boolean).join(' ')}>
      {kicker ? (
        <p className={[
          'text-sm uppercase tracking-[0.3em]',
          light ? 'text-gold-DEFAULT/70' : 'text-gold-light/60',
        ].join(' ')}>
          {kicker}
        </p>
      ) : null}
      <h2
        className={[
          'text-heading-2 font-semibold sm:text-display',
          'leading-[1.15] tracking-[-0.02em]',
          light ? 'text-[#111827]' : 'text-white',
        ].join(' ')}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className={[
          'text-lg leading-relaxed',
          light ? 'text-[#4B5563]' : 'text-white/50',
        ].join(' ')}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}