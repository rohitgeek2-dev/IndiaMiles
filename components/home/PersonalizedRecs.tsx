'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ImageOff, Star, Sparkles, TrendingUp } from 'lucide-react';
import type { Recommendation } from '@/lib/homepage-data';

type PersonalizedRecsProps = {
  recommendedForYou: Recommendation[];
  trendingThisMonth: Recommendation[];
};

function RecImage({ src, alt }: { src: string; alt: string }) {
  const [isError, setIsError] = useState(false);
  const handleError = useCallback(() => setIsError(true), []);
  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#071228]">
        <ImageOff className="h-8 w-8 text-white/20" />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={handleError}
      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
    />
  );
}

type TabType = 'recommended' | 'trending';

export function PersonalizedRecs({ recommendedForYou, trendingThisMonth }: PersonalizedRecsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('recommended');

  const currentItems = activeTab === 'recommended' ? recommendedForYou : trendingThisMonth;
  const tabs: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: 'recommended', label: 'Recommended for You', icon: Sparkles },
    { id: 'trending', label: 'Trending This Month', icon: TrendingUp },
  ];

  return (
    <section className="relative py-section-lg bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Clean, minimal background with subtle depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Centered editorial header */}
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
          >
            Curated Picks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
          >
            Designed around{' '}
            <span className="text-gradient-teal">you</span>.
          </motion.h2>
        </div>

        {/* Tab bar — centered, pill-style */}
        <div className="mb-12 flex items-center justify-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1.5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gold text-white shadow-lg shadow-gold/20'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards with staggered masonry-like layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link href={item.href} className="group block">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury-lg">
                    {/* Image container */}
                    <div className="relative h-52 overflow-hidden">
                      <RecImage src={item.imageUrl} alt={item.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
                      {/* Price tag */}
                      <div className="absolute bottom-3 left-3 rounded-full bg-[#030712]/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm border border-white/10">
                        From {item.price}
                      </div>
                      {/* Rating */}
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-[#030712]/50 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        <Star className="h-3 w-3 text-gold" />
                        {item.rating}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 p-5">
                      <div>
                        <h3 className="text-base font-semibold text-white transition-colors group-hover:text-gold-light">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-white/40">{item.location}</p>
                      </div>

                      {/* Reason chip */}
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-gold/5 px-3 py-2 border border-gold/10">
                        <Sparkles className="h-3 w-3 text-gold/60" />
                        <span className="text-xs font-medium text-white/50">{item.reason}</span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-light transition-all duration-300 group-hover:gap-2">
                        View details
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}