'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-10 shadow-[0_45px_140px_rgba(15,23,42,0.15)]"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-primary">
              Newsletter
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Elevate your next India itinerary with insider inspiration.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-400">
              Subscribe for luxury travel stories, exclusive destination alerts,
              and handpicked trips designed for premium explorers.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Stay inspired
                </p>
                <p className="text-sm text-white/80">
                  Receive premium destination ideas.
                </p>
              </div>
            </div>
            <form className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="min-w-0"
              />
              <Button type="submit" className="rounded-full px-6 py-3">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
