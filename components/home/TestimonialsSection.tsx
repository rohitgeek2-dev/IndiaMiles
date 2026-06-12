'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/homepage-data';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          Testimonials
        </p>
        <h2 className="mt-3 text-4xl font-bold text-foreground">
          Trusted by travellers who value luxury and authenticity.
        </h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
          >
            <div className="mb-6 flex items-center gap-4">
              <img
                src={testimonial.avatarUrl}
                alt={testimonial.name}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <p className="text-lg leading-8 text-foreground/90">
              “{testimonial.quote}”
            </p>
            <div className="mt-6 flex items-center gap-1 text-amber-300">
              {Array.from({ length: testimonial.rating }).map(
                (_, starIndex) => (
                  <Star key={starIndex} className="h-4 w-4" />
                ),
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
