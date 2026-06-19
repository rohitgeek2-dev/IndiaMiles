'use client';

import { motion } from 'framer-motion';

export interface SectionDividerProps {
  className?: string;
  variant?: 'gold' | 'teal' | 'subtle';
}

export function SectionDivider({ className, variant = 'gold' }: SectionDividerProps) {
  const gradientMap = {
    gold: 'from-transparent via-gold-DEFAULT/20 to-transparent',
    teal: 'from-transparent via-teal-DEFAULT/20 to-transparent',
    subtle: 'from-transparent via-white/10 to-transparent',
  };

  return (
    <div className={className}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px w-full origin-left bg-gradient-to-r"
        style={{ backgroundImage: `linear-gradient(to right, transparent, rgba(212,169,74,0.2), transparent)` }}
      />
    </div>
  );
}

export function GoldLine({ className }: { className?: string }) {
  return (
    <div
      className={[
        'h-px w-16 bg-gradient-to-r from-gold-DEFAULT/60 to-transparent',
        className,
      ].join(' ')}
    />
  );
}