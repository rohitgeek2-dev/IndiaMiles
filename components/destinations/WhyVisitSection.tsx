'use client';

import { motion } from 'framer-motion';
import type { Destination } from '@/lib/destinations/destination-data';

type WhyVisitSectionProps = {
  destination: Destination;
};

export function WhyVisitSection({ destination }: WhyVisitSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
              Why Visit
            </p>
            <h2 className="mt-6 text-heading-2 font-semibold leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-display">
              {destination.whyVisitHeading}
            </h2>
          </motion.div>

          {/* Right: Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            {destination.whyVisitContent.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
                className="text-base leading-relaxed text-[#4B5563] sm:text-lg [&:not(:first-child)]:mt-6"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}