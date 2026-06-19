'use client';

import * as React from 'react';
import Image, { type ImageProps } from 'next/image';

export interface LuxuryImageProps
  extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  className?: string;
  quality?: number;
}

export function LuxuryImage({
  src,
  alt,
  className,
  quality = 85,
  sizes,
  fill,
  width,
  height,
  ...rest
}: LuxuryImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      quality={quality}
      sizes={sizes}
      fill={fill}
      width={width}
      height={height}
      loading={rest.loading ?? 'lazy'}
      {...rest}
      className={[
        'transition-transform duration-700 group-hover:scale-[1.06]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  );
}

