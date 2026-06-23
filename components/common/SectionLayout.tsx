'use client';

import * as React from 'react';

export interface SectionLayoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'cream' | 'gray';
}

export function SectionLayout({
  children,
  className,
  variant = 'light',
}: SectionLayoutProps) {
  const variantStyles = {
    dark: 'bg-[#030712] text-white',
    light: 'bg-white text-foreground',
    cream: 'bg-[#FAF8F4] text-foreground',
    gray: 'bg-[#F8FAFC] text-foreground',
  };

  return (
    <section
      className={[
        'relative overflow-hidden',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </section>
  );
}

