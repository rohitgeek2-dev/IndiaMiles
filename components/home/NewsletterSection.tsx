'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Full-bleed dark immersive background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030712] via-[#071228] to-[#030712]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,169,74,0.03)_0%,transparent_60%)]" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-teal/5 blur-3xl" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-1 backdrop-blur-sm shadow-luxury-xl">
            <div className="rounded-[1.9rem] bg-gradient-to-br from-white/[0.03] to-transparent p-10 sm:p-14">
              <div className="text-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
                >
                  Stay Connected
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="mt-6 text-heading-2 font-semibold text-white sm:text-display"
                >
                  Elevate your next{' '}
                  <span className="text-gradient-gold">India itinerary</span>.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/50"
                >
                  Subscribe for luxury travel stories, exclusive destination alerts, and handpicked trips designed for premium explorers.
                </motion.p>
              </div>

              {/* Form card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
                className="mx-auto mt-10 max-w-xl"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-[#071228]/60 p-6 backdrop-blur-xl">
                  <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold to-amber-500">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Insider access</p>
                      <p className="text-xs text-white/40">Receive premium destination ideas and exclusive offers.</p>
                    </div>
                  </div>
                  <form className="mt-6 flex flex-col gap-4 sm:flex-row">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      aria-label="Email address"
                      className="min-w-0 flex-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-gold/50"
                    />
                    <Button
                      type="submit"
                      className="rounded-full bg-gold px-8 py-6 text-sm font-semibold text-white shadow-lg shadow-gold/30 transition-all hover:bg-gold-light"
                    >
                      Subscribe
                      <Sparkles className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}