'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
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
      <div className="flex h-full w-full items-center justify-center bg-gray-50">
        <ImageOff className="h-8 w-8 text-gray-300" />
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
    <section className="relative py-section-lg bg-[#FAF8F4]">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Centered editorial header */}
        <div className="mb-14 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
          >
            Curated Picks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
          >
            Designed around{' '}
            <span className="text-gradient-teal">you</span>.
          </motion.h2>
        </div>

        {/* Tab bar — premium sliding pill */}
        <div className="mb-12 flex items-center justify-center">
          <LayoutGroup>
            <div className="relative inline-flex rounded-full border border-[#E5E7EB] bg-white p-[5px] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="relative z-10 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-colors duration-300"
                    style={{
                      color: isActive ? '#111827' : '#6B7280',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#111827';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#6B7280';
                      }
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full bg-[#EAC587] shadow-[0_2px_12px_rgba(234,197,135,0.35)]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35, mass: 0.9 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
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
                  <div className="overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover shadow-card">
                    {/* Image container */}
                    <div className="relative h-52 overflow-hidden">
                      <RecImage src={item.imageUrl} alt={item.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      {/* Price tag */}
                      <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#111827] backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                        From {item.price}
                      </div>
                      {/* Rating */}
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-[#111827] backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                        <Star className="h-3 w-3 text-gold-DEFAULT" />
                        {item.rating}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3 p-5">
                      <div>
                        <h3 className="text-base font-semibold text-[#111827] transition-colors group-hover:text-gold-DEFAULT">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-[#4B5563]">{item.location}</p>
                      </div>

                      {/* Reason chip */}
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-amber-50 px-3 py-2 border border-amber-100">
                        <Sparkles className="h-3 w-3 text-gold-DEFAULT" />
                        <span className="text-xs font-medium text-[#4B5563]">{item.reason}</span>
                      </div>

                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold-DEFAULT transition-all duration-300 group-hover:gap-2">
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