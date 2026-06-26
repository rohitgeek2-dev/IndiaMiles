'use client';
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Gem,
  Landmark,
  Binoculars,
  Heart,
  Mountain,
  ChefHat,
  Camera,
  CircleDot,
  ArrowRight,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from '@/components/ui/carousel';
import type { TravelTheme } from '@/lib/homepage-data';

type TravelThemesProps = {
  themes: TravelTheme[];
};

const iconMap: Record<string, React.ElementType> = {
  Gem,
  Landmark,
  Binoculars,
  Heart,
  Mountain,
  ChefHat,
  Camera,
  CircleDot,
};

export function TravelThemes({ themes }: TravelThemesProps) {
  return (
    <section className="relative py-section-xl bg-white">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Light ambiance */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,169,74,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section header — left-aligned, editorial */}
        <div className="mb-14 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
          >
            Ways to Travel
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
          >
            Every journey has a{' '}
            <span className="text-gradient-gold">unique story</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-lg leading-relaxed text-[#4B5563] max-w-xl"
          >
            From royal heritage to Himalayan adventures — find the India
            experience that speaks to you.
          </motion.p>
        </div>
        {/* Carousel with autoplay */}
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          autoplay={false}
          autoplayInterval={4000}
          className="w-full"
        >
          <CarouselContent className="-ml-6 pt-5">
            {themes.map((theme, index) => {
              const IconComponent = iconMap[theme.icon] || Gem;
              return (
                <CarouselItem
                  key={theme.id}
                  className="pl-0 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group h-full"
                  >
                    <Link href={theme.href} className="block h-full">
                      <div className="relative flex h-[420px] w-full flex-col justify-end overflow-hidden rounded-[2rem] border border-[#E5E7EB] transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover shadow-card">
                        {/* Background image */}
                        <div className="absolute inset-0">
                          <img
                            src={theme.imageUrl}
                            alt={theme.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                          />
                        </div>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 space-y-4 p-8">
                          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
                            <IconComponent className="h-7 w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {theme.name}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/70">
                              {theme.description}
                            </p>
                          </div>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition-all duration-300 group-hover:gap-3">
                            Explore {theme.name}
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>

                        {/* Hover ring */}
                        <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 ring-1 ring-gold-DEFAULT/40 transition-opacity duration-500 group-hover:opacity-100" />
                      </div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
