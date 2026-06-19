'use client';

import * as React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import type { RevealVariant } from '@/components/common/Reveal';
import { Reveal } from '@/components/common/Reveal';

export type EditorialSplitSectionProps = {
  kicker?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
  reversedOnMobile?: boolean;
  leftRevealVariant?: RevealVariant;
  rightRevealVariant?: RevealVariant;
  className?: string;
};

export function EditorialSplitSection({
  left,
  right,
  title,
  subtitle,
  kicker,
  reversedOnMobile = false,
  leftRevealVariant = 'fadeLeft',
  rightRevealVariant = 'fadeUp',
  className,
}: EditorialSplitSectionProps) {
  const reduce = useReducedMotion();

  return (
    <div
      className={[
        'relative grid gap-10 items-start',
        'lg:grid-cols-[1.03fr_0.97fr]',
        reversedOnMobile ? 'flex-col-reverse' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="lg:col-span-1">
        <Reveal variant={leftRevealVariant}>
          <div className="max-w-xl">
            {kicker ? (
              <p className="text-sm uppercase tracking-[0.32em] text-gold-light/60">{kicker}</p>
            ) : null}
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-[3.35rem]">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-5 text-base leading-8 text-white/55 sm:text-lg">{subtitle}</p>
            ) : null}
          </div>
        </Reveal>
      </div>

      <div className="lg:col-span-1">
        <div className="grid gap-10 lg:grid-cols-1">
          <div className="lg:hidden">{reversedOnMobile ? right : left}</div>
          <div className="lg:hidden">{reversedOnMobile ? left : right}</div>

          <div className="hidden lg:block">
            <div className={reduce ? '' : 'parallax'}>{left}</div>
          </div>
          <div className="hidden lg:block">{right}</div>
        </div>
      </div>

      {/* subtle editorial grain */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(212,169,74,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(26,158,143,0.08),transparent_28%)] opacity-60"
      />
    </div>
  );
}

