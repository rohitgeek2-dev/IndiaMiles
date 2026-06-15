'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CallToActionBanner() {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Dramatic dark editorial footer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#071228] to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,169,74,0.04)_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(26,158,143,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm shadow-luxury-xl">
            {/* Inner glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />

            <div className="relative px-8 py-14 sm:px-14 sm:py-20">
              <div className="mx-auto max-w-3xl text-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
                >
                  Begin Your Journey
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="mt-6 text-heading-2 font-semibold text-white sm:text-display"
                >
                  Craft a luxury India experience{' '}
                  <span className="text-gradient-gold">built for you</span>.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/50"
                >
                  Join India Miles and access curated itineraries, expert travel planning, and exclusive recommendations
                  crafted for the modern luxury traveller.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 }}
                  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <Button
                    asChild
                    className="group rounded-full bg-gold px-10 py-7 text-base font-semibold text-white shadow-xl shadow-gold/30 transition-all hover:bg-gold-light"
                  >
                    <Link href="/plan">
                      Start planning
                      <Sparkles className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                    </Link>
                  </Button>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 hover:text-white"
                  >
                    Talk to a travel specialist
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}