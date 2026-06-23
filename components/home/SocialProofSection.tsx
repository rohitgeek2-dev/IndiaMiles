'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Shield, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Testimonial } from '@/lib/homepage-data';

type SocialProofSectionProps = {
  testimonials: Testimonial[];
  reviewStats: {
    totalReviews: string;
    averageRating: number;
    distribution: { stars: number; percentage: number }[];
  };
};

export function SocialProofSection({ testimonials, reviewStats }: SocialProofSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden py-section-xl bg-white">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle warm mood */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/30 via-transparent to-white pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          {/* Left — Rating Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
              >
                Trust & Reviews
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
              >
                Loved by{' '}
                <span className="text-gradient-gold">travellers worldwide</span>.
              </motion.h2>
            </div>

            {/* Big stat card */}
            <div className="rounded-[2rem] border border-[#E5E7EB] bg-white p-8 shadow-luxury">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-6xl font-bold text-[#111827]">{reviewStats.averageRating}</p>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(reviewStats.averageRating) ? 'fill-gold-DEFAULT text-gold-DEFAULT' : 'text-gray-200'}`} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-[#4B5563]">Based on {reviewStats.totalReviews} verified reviews</p>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-DEFAULT to-amber-500 shadow-xl shadow-gold-DEFAULT/20">
                  <span className="text-3xl text-white">★</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {reviewStats.distribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="w-12 text-sm text-[#4B5563]">{item.stars} ★</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-gold-DEFAULT to-amber-500"
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-[#4B5563]">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['Verified Reviews', 'Secure Booking', 'Price Guarantee', '24/7 Support'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-gray-50 px-4 py-2 text-xs font-medium text-[#4B5563]">
                  <Shield className="h-3.5 w-3.5 text-gold-DEFAULT" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Testimonial Wall */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white shadow-luxury">
              {/* Fixed height container to prevent layout shift */}
              <div className="relative min-h-[320px] sm:min-h-[300px]">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeTestimonial.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="p-8 sm:p-10"
                  >
                    {/* Decorative quote */}
                    <Quote className="mb-6 h-10 w-10 text-gold-DEFAULT/20" />

                    <p className="text-xl leading-relaxed text-[#4B5563] sm:text-2xl sm:leading-relaxed">
                      &ldquo;{activeTestimonial.quote}&rdquo;
                    </p>

                    <div className="mt-8 flex items-center gap-4 border-t border-[#E5E7EB] pt-6">
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold-DEFAULT/30">
                        <img
                          src={activeTestimonial.avatarUrl}
                          alt={activeTestimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-[#111827] truncate">{activeTestimonial.name}</p>
                          {activeTestimonial.isVerified && <Shield className="h-4 w-4 shrink-0 text-gold-DEFAULT" />}
                        </div>
                        <p className="text-sm text-[#4B5563] truncate">{activeTestimonial.role}</p>
                        <div className="mt-1 flex items-center gap-1">
                          {Array.from({ length: activeTestimonial.rating }).map((_, si) => (
                            <Star key={si} className="h-3.5 w-3.5 fill-gold-DEFAULT text-gold-DEFAULT" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between border-t border-[#E5E7EB] px-8 py-4">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'w-8 bg-gold-DEFAULT' : 'w-2 bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#4B5563] transition hover:bg-gray-50 hover:text-[#111827]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={next}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E7EB] text-[#4B5563] transition hover:bg-gray-50 hover:text-[#111827]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}