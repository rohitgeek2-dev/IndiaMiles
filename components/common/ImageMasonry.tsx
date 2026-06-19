'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { LuxuryImage } from './LuxuryImage';
import { cn } from '@/lib/utils';

export interface MasonryItem {
  id: string;
  src: string;
  alt: string;
  span?: 'tall' | 'wide' | 'large' | 'small';
  title?: string;
  subtitle?: string;
  href?: string;
}

export interface ImageMasonryProps {
  items: MasonryItem[];
  className?: string;
  columns?: 2 | 3 | 4;
}

const spanClasses: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  large: 'col-span-2 row-span-2',
  small: '',
};

export function ImageMasonry({ items, className, columns = 3 }: ImageMasonryProps) {
  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4',
  };

  return (
    <div
      className={cn(
        'grid gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[280px]',
        gridCols[columns],
        className,
      )}
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.6 }}
          className={cn(
            'group relative overflow-hidden rounded-2xl',
            spanClasses[item.span || 'small'],
          )}
        >
          <LuxuryImage
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {(item.title || item.subtitle) && (
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              {item.title && (
                <p className="text-white font-semibold text-sm">{item.title}</p>
              )}
              {item.subtitle && (
                <p className="text-white/60 text-xs mt-1">{item.subtitle}</p>
              )}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}