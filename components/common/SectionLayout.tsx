'use client';

import * as React from 'react';

export interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light';
}

export function SectionLayout({
  children,
  className,
  variant = 'dark',
}: SectionLayoutProps) {
  return (
    <section
      className={[
        'relative overflow-hidden',
        variant === 'dark' ? 'bg-[#030712] text-white' : 'bg-white text-foreground',
        className,
      ].join(' ')}
    >
      {children}
    </section>
  );
}

