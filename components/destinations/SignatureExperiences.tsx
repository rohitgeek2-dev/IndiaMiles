'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import type { Destination } from '@/lib/destinations/destination-data';

type SignatureExperiencesProps = {
  destination: Destination;
};

export function SignatureExperiences({ destination }: SignatureExperiencesProps) {
  return (
    <section className="relative overflow-hidden bg-white py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Curated For You
          </p>
          <h2 className="mt-4 text-heading-2 font-semibold leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-display">
            Experiences Worth{' '}
            <span className="text-gradient-gold">Travelling For</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#4B5563]">
            Handpicked signature experiences that define the essence of {destination.name}.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destination.signatureExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="group relative h-full overflow-hidden rounded-[24px] border border-[#E5E7EB]/50 bg-white transition-all duration-500 hover:-translate-y-[3px] hover:shadow-card-hover shadow-card">
                {/* Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  {/* Gold accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-DEFAULT/70 via-gold-DEFAULT/30 to-transparent" />

                  {/* Duration badge */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Clock className="h-3 w-3" />
                    {experience.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-[#111827]">
                      {experience.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B7280] line-clamp-2">
                      {experience.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-base font-semibold text-[#EAC587]">
                      {experience.price}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#111827] transition-all duration-300 group-hover:gap-3">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}