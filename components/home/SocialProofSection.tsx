'use client';

import { useState } from 'react';
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

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Moody, warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#071228] to-[#030712] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,169,74,0.03)_0%,transparent_60%)] pointer-events-none" />

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
                className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
              >
                Trust & Reviews
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
              >
                Loved by{' '}
                <span className="text-gradient-gold">travellers worldwide</span>.
              </motion.h2>
            </div>

            {/* Big stat card */}
            <div className="rounded-[2rem] border border-white/10 bg-[#071228]/60 p-8 backdrop-blur-sm shadow-luxury">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-6xl font-bold text-white">{reviewStats.averageRating}</p>
                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < Math.floor(reviewStats.averageRating) ? 'fill-gold text-gold' : 'text-white/20'}`} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-white/40">Based on {reviewStats.totalReviews} verified reviews</p>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber-500 shadow-xl shadow-gold/30">
                  <span className="text-3xl text-white">★</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {reviewStats.distribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3">
                    <span className="w-12 text-sm text-white/40">{item.stars} ★</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-gold to-amber-500"
                      />
                    </div>
                    <span className="w-10 text-right text-sm text-white/40">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {['Verified Reviews', 'Secure Booking', 'Price Guarantee', '24/7 Support'].map((badge) => (
                <span key={badge} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/60 backdrop-blur-sm">
                  <Shield className="h-3.5 w-3.5 text-gold" />
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
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#071228]/60 backdrop-blur-sm shadow-luxury">
              <AnimatePresence mode="wait">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      y: index === activeIndex ? 0 : 20,
                      display: index === activeIndex ? 'block' : 'none',
                    }}
                    transition={{ duration: 0.4 }}
                    className="p-8 sm:p-10"
                  >
                    {/* Decorative quote */}
                    <Quote className="mb-6 h-10 w-10 text-gold/20" />

                    <p className="text-xl leading-relaxed text-white/80 sm:text-2xl sm:leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                      <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-gold/30">
                        <img src={testimonial.avatarUrl} alt={testimonial.name} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white">{testimonial.name}</p>
                          {testimonial.isVerified && <Shield className="h-4 w-4 text-gold" />}
                        </div>
                        <p className="text-sm text-white/40">{testimonial.role}</p>
                        <div className="mt-1 flex items-center gap-1">
                          {Array.from({ length: testimonial.rating }).map((_, si) => (
                            <Star key={si} className="h-3.5 w-3.5 fill-gold text-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between border-t border-white/10 px-8 py-4">
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex ? 'w-8 bg-gold' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={prev} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/40 transition hover:bg-white/10 hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button onClick={next} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/40 transition hover:bg-white/10 hover:text-white">
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