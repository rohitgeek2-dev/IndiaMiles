'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Shield, Clock, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const conciergeFeatures = [
  {
    icon: MessageCircle,
    title: 'Personal Concierge',
    description: 'Dedicated travel specialist available 24/7 for your every need.',
  },
  {
    icon: Shield,
    title: 'White-Glove Service',
    description: 'Airport transfers, private guides, and VIP access everywhere.',
  },
  {
    icon: Clock,
    title: 'Real-Time Support',
    description: 'Instant assistance via WhatsApp, chat, or phone during your journey.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Bespoke Planning',
    description: 'Custom itineraries tailored to your preferences and schedule.',
  },
];

export function ConciergeSection() {
  return (
    <section className="relative overflow-hidden py-section-xl bg-[#030712]">
      {/* Section divider */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,169,74,0.04)_0%,transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(26,158,143,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#071228]/80 to-[#030712] backdrop-blur-sm overflow-hidden shadow-luxury-xl">
          {/* Inner decorative glow */}
          <div className="pointer-events-none absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-teal/5 blur-3xl" />

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-14">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block text-sm uppercase tracking-[0.3em] text-gold-light/60"
                >
                  Concierge Assistance
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className="mt-4 text-heading-2 font-semibold text-white sm:text-display"
                >
                  White-glove{' '}
                  <span className="text-gradient-gold">concierge service</span>.
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 }}
                  className="mt-4 text-lg text-white/50 max-w-2xl mx-auto"
                >
                  From the moment you inquire until your journey ends, our team ensures every detail exceeds expectations.
                </motion.p>
              </div>

              {/* Features grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {conciergeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group text-center"
                    >
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gold/20">
                        <Icon className="h-7 w-7 text-gold-light" />
                      </div>
                      <h3 className="text-base font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm text-white/50">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <Button asChild className="rounded-full px-8 py-5 bg-gold hover:bg-gold-light text-white shadow-lg shadow-gold/20 transition-all duration-300">
                  <Link href="/contact">
                    Speak to a Specialist
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="rounded-full px-8 py-5 text-white/60 hover:text-white border border-white/10">
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}