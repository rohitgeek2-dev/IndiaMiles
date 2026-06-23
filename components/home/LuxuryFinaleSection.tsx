'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function LuxuryFinaleSection() {
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
            The Grand Finale
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
          >
            Your extraordinary{' '}
            <span className="text-gradient-gold">India journey</span> starts here.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B7280]"
          >
            Whether you are ready to plan or simply seeking inspiration, let us guide you to the India you have always dreamed of.
          </motion.p>
        </motion.div>

        {/* Two cards — plan + subscribe */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          {/* Left card — Start Planning */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex h-full flex-col rounded-[24px] border border-[#E5E7EB]/60 bg-white p-8 shadow-card sm:p-10">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC587]/20 to-amber-50">
                <Sparkles className="h-7 w-7 text-[#EAC587]" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#111827] sm:text-[28px]">
                Craft your perfect India journey
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Luxury travel experiences designed around your interests, pace, and travel style. 
                Let our specialists create a bespoke itinerary just for you.
              </p>

              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Button
                  asChild
                  className="group rounded-full bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] px-8 py-6 text-base font-semibold text-[#111827] shadow-lg shadow-[#EAC587]/30 transition-all hover:shadow-xl hover:shadow-[#EAC587]/40"
                >
                  <Link href="/plan">
                    Start planning
                    <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                  </Link>
                </Button>
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-8 py-3.5 text-sm font-semibold text-[#4B5563] transition-all hover:border-[#EAC587] hover:text-[#111827] hover:bg-[#FAF8F4]"
                >
                  Speak to an expert
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right card — Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex h-full flex-col rounded-[24px] border border-[#E5E7EB]/60 bg-white p-8 shadow-card sm:p-10">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC587]/20 to-amber-50">
                <Mail className="h-7 w-7 text-[#EAC587]" />
              </div>

              <h3 className="mt-5 font-serif text-2xl font-bold leading-tight tracking-tight text-[#111827] sm:text-[28px]">
                Stay inspired
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">
                Subscribe for destination guides, curated itineraries, and luxury travel insights delivered to your inbox.
              </p>

              <div className="mt-auto pt-6">
                <form className="flex flex-col gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    className="min-w-0 flex-1 rounded-full border border-[#E5E7EB] bg-white px-5 py-3 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:border-[#EAC587] focus:ring-[#EAC587]/20"
                  />
                  <Button
                    type="submit"
                    className="group rounded-full bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] px-8 py-6 text-sm font-semibold text-[#111827] shadow-lg shadow-[#EAC587]/30 transition-all hover:shadow-xl hover:shadow-[#EAC587]/40"
                  >
                    Subscribe
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </form>
                <p className="mt-3 text-xs text-[#9CA3AF]">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}