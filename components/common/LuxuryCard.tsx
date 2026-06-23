'use client';

import * as React from 'react';
import Link from 'next/link';
import { LuxuryImage } from './LuxuryImage';
import { cn } from '@/lib/utils';

export interface LuxuryCardProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'minimal';
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait' | 'cinema';
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
  onClick?: () => void;
}

export function LuxuryCard({
  children,
  className,
  href,
  variant = 'default',
  aspectRatio = 'auto',
  imageSrc,
  imageAlt = '',
  overlay = false,
  onClick,
}: LuxuryCardProps) {
  const variantStyles = {
    default: 'bg-white border border-[#E5E7EB] shadow-card',
    glass: 'glass-card',
    elevated: 'bg-white border border-[#E5E7EB] shadow-luxury',
    minimal: 'bg-transparent',
  };

  const aspectStyles = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    cinema: 'aspect-[21/9]',
  };

  const inner = (
    <>
      {imageSrc && (
        <div className="absolute inset-0 overflow-hidden">
          <LuxuryImage
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
          )}
        </div>
      )}
      {children && (
        <div
          className={cn(
            'relative z-10',
            imageSrc ? 'flex flex-col justify-end h-full p-6' : 'p-6',
          )}
        >
          {children}
        </div>
      )}
    </>
  );

  const baseClasses = cn(
    'group relative overflow-hidden rounded-2xl transition-all duration-500',
    variantStyles[variant],
    aspectStyles[aspectRatio],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, 'cursor-pointer')}>
        {inner}
      </Link>
    );
  }

  if (onClick) {
    return (
      <div
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClick();
        }}
        className={cn(baseClasses, 'cursor-pointer')}
      >
        {inner}
      </div>
    );
  }

  return <div className={baseClasses}>{inner}</div>;
}

export function CardEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'text-xs uppercase tracking-[0.2em] text-gold-light/70',
        className,
      )}
    >
      {children}
    </span>
  );
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        'text-xl font-semibold text-white group-hover:text-gold-light transition-colors duration-300',
        className,
      )}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-sm leading-relaxed text-white/50', className)}>
      {children}
    </p>
  );
}

export function CardPrice({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn('text-lg font-semibold text-gold-light', className)}>
      {children}
    </p>
  );
}

export function CardBadge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
        'bg-gold-DEFAULT/10 text-gold-light border border-gold-DEFAULT/20',
        className,
      )}
    >
      {children}
    </span>
  );
}