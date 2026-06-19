'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface LuxuryCTAProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export function LuxuryCTA({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  icon,
}: LuxuryCTAProps) {
  const baseClasses = cn(
    'inline-flex items-center gap-2 font-semibold transition-all duration-500',
    'group relative overflow-hidden',
    {
      'bg-gradient-to-r from-gold-DEFAULT to-gold-light text-[#030712] hover:shadow-gold':
        variant === 'primary',
      'border border-gold-DEFAULT/40 text-gold-light hover:bg-gold-DEFAULT/10 hover:border-gold-DEFAULT':
        variant === 'outline',
      'text-white/70 hover:text-gold-light': variant === 'ghost',
      'bg-gradient-to-r from-gold-DEFAULT via-gold-light to-gold-DEFAULT text-[#030712] shadow-lg shadow-gold-DEFAULT/20':
        variant === 'gold',
    },
    {
      'px-5 py-2 text-sm rounded-full': size === 'sm',
      'px-8 py-3.5 text-sm rounded-full': size === 'md',
      'px-10 py-4 text-base rounded-full': size === 'lg',
    },
    className,
  );

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {icon || (variant !== 'ghost' && (
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      ))}
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-gold-light via-gold-DEFAULT to-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}

export function SectionCTA({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className={cn('mt-12 text-center', className)}
    >
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-gold-light hover:text-gold transition-colors duration-300"
      >
        {label}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}