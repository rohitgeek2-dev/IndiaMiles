'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToActionBanner() {
  return (
    <section className="container mx-auto px-4 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-[#0f766e] via-slate-950 to-[#0f766e] p-10 text-white shadow-[0_35px_120px_rgba(15,23,42,0.18)]"
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Plan your journey
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Craft a luxury India experience built for the modern traveller.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
              Join India Miles and access curated itineraries, expert travel
              planning, and exclusive destination recommendations.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 sm:items-end">
            <Button asChild className="rounded-full px-8 py-3 text-base">
              <Link href="/plan">Start planning</Link>
            </Button>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition hover:text-white"
            >
              Contact our travel specialists
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
