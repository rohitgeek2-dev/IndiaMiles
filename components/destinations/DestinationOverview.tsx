'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Clock, Plane, Star, MessageSquare, Compass } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type DestinationOverviewProps = {
  destination: Destination;
};

const iconComponents: Record<string, React.ElementType> = {
  Calendar: CalendarDays,
  Clock: Clock,
  Plane: Plane,
  Star: Star,
  MessageSquare: MessageSquare,
  Compass: Compass,
};

export function DestinationOverview({ destination }: DestinationOverviewProps) {
  return (
    <section className="relative overflow-hidden bg-white py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {destination.infoCards.map((card, index) => {
            const IconComponent = iconComponents[card.icon];
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-luxury transition-all duration-300 hover:-translate-y-1 hover:shadow-luxury-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#EAC587]/20 to-amber-50">
                  {IconComponent && (
                    <IconComponent className="h-6 w-6 text-[#EAC587]" />
                  )}
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9CA3AF]">
                  {card.label}
                </h3>
                <p className="mt-2 text-lg font-semibold leading-snug text-[#111827]">
                  {card.value}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}