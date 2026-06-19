'use client';

import * as React from 'react';
import { motion, type Variants, useReducedMotion } from 'framer-motion';

export type RevealVariant = 'fadeUp' | 'fadeIn' | 'fadeLeft';

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationSec?: number;
  variant?: RevealVariant;
  once?: boolean;
}

const variants: Record<RevealVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  className,
  delayMs = 0,
  durationSec = 0.55,
  variant = 'fadeUp',
  once = true,
}: RevealProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: durationSec, delay: delayMs / 1000, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

