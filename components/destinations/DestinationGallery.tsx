'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Destination } from '@/lib/destinations/destination-data';

type DestinationGalleryProps = {
  destination: Destination;
};

const categoryLabels: Record<string, string> = {
  architecture: 'Architecture',
  nature: 'Nature',
  food: 'Food',
  culture: 'Culture',
  luxury: 'Luxury Hotels',
};

export function DestinationGallery({ destination }: DestinationGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const categories = [...new Set(destination.gallery.map((img) => img.category))];
  const filteredImages = activeFilter
    ? destination.gallery.filter((img) => img.category === activeFilter)
    : destination.gallery;

  return (
    <section className="relative overflow-hidden bg-[#FAF8F4] py-section-xl">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70">
            Gallery
          </p>
          <h2 className="mt-4 text-heading-2 font-semibold leading-[1.1] tracking-[-0.02em] text-[#111827] sm:text-display">
            A visual journey through{' '}
            <span className="text-gradient-gold">{destination.name}</span>.
          </h2>
        </motion.div>

        {/* Filter chips */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap gap-2"
        >
          <button
            onClick={() => setActiveFilter(null)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
              activeFilter === null
                ? 'bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] text-[#111827] shadow-md shadow-[#EAC587]/20'
                : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-gray-50'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(activeFilter === cat ? null : cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium capitalize transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#EAC587] to-[#D4AF6A] text-[#111827] shadow-md shadow-[#EAC587]/20'
                  : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:bg-gray-50'
              }`}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter || 'all'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-1 gap-4 sm:columns-2 lg:columns-3"
          >
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full object-cover transition-all duration-700 group-hover:scale-105"
                  style={{
                    aspectRatio: `${image.width}/${image.height}`,
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {categoryLabels[image.category] || image.category}
                    </span>
                    <p className="mt-1 text-sm font-medium text-white">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}