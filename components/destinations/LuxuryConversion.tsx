'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';

type LuxuryConversionProps = {
  destinationName: string;
};

export function LuxuryConversion({ destinationName }: LuxuryConversionProps) {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F4]">
      {/* Gold top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      {/* Subtle ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-transparent to-teal-50/20 pointer-events-none" />

      {/* Decorative circle elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -bottom-32 h-64 w-64 rounded-full bg-teal/5 blur-3xl" />

      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-24">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
          >
            Plan Your Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
          >
            Ready To Experience{' '}
            <span className="text-gradient-gold">{destinationName}</span>?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280]"
          >
            Let our luxury travel specialists craft a bespoke {destinationName} itinerary tailored to your desires.
          </motion.p>
        </motion.div>

        {/* Two cards */}
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {/* Left card — Start Planning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-full flex-col rounded-[24px] border border-[#E5E7EB]/60 bg-white p-8 shadow-card sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC587]/20 to-amber-50">
                <Sparkles className="h-7 w-7 text-[#EAC587]" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#111827] sm:text-[28px]">
                Start planning your journey
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Tell us your preferences and let our experts design a personalized luxury experience in {destinationName}.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="/plan"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] px-8 py-4 text-base font-semibold text-[#111827] shadow-lg shadow-[#EAC587]/30 transition-all hover:shadow-xl hover:shadow-[#EAC587]/40"
                >
                  Start Planning
                  <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right card — Speak to Expert */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex h-full flex-col rounded-[24px] border border-[#E5E7EB]/60 bg-white p-8 shadow-card sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC587]/20 to-amber-50">
                <Phone className="h-7 w-7 text-[#EAC587]" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#111827] sm:text-[28px]">
                Speak to a travel expert
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Have questions about {destinationName}? Our specialists are available to help you plan every detail.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-4 text-base font-semibold text-[#4B5563] transition-all hover:border-[#EAC587] hover:text-[#111827] hover:bg-[#FAF8F4]"
                >
                  Speak To Travel Expert
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}