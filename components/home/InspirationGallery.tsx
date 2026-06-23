'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ImageOff, X } from 'lucide-react';

const galleryImages = [
  { id: '1', src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80', alt: 'Rajasthan Palace', tag: 'Heritage' },
  { id: '2', src: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80', alt: 'Kerala Backwaters', tag: 'Wellness' },
  { id: '3', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80', alt: 'Himalayan Peaks', tag: 'Adventure' },
  { id: '4', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80', alt: 'Goa Beach', tag: 'Beach' },
  { id: '5', src: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80', alt: 'Tiger Safari', tag: 'Wildlife' },
  { id: '6', src: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80', alt: 'Varanasi Ghats', tag: 'Spiritual' },
];

export function InspirationGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  const handleImageError = (id: string) => {
    setErrorImages((prev) => new Set(prev).add(id));
  };

  return (
    <section className="relative overflow-hidden py-section-xl bg-white">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm uppercase tracking-[0.3em] text-gold-DEFAULT/70"
          >
            Inspiration Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="mt-4 text-heading-2 font-semibold text-[#111827] sm:text-display"
          >
            A visual journey through{' '}
            <span className="text-gradient-gold-teal">Incredible India</span>.
          </motion.h2>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(image.src)}
              className={`group relative overflow-hidden rounded-[1.5rem] border border-[#E5E7EB] transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover shadow-card ${
                index === 0 ? 'row-span-2 col-span-2 md:col-span-1' : ''
              } ${index === 3 ? 'col-span-2' : ''}`}
            >
              <div className={`relative ${index === 0 ? 'h-80 md:h-96' : 'h-48'} overflow-hidden`}>
                {errorImages.has(image.id) ? (
                  <div className="flex h-full w-full items-center justify-center bg-gray-50">
                    <ImageOff className="h-8 w-8 text-gray-300" />
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    onError={() => handleImageError(image.id)}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gold-DEFAULT backdrop-blur-sm border border-[#E5E7EB] shadow-sm">
                    {image.tag}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-7 py-3 text-sm font-medium text-[#4B5563] hover:bg-gray-50 hover:text-[#111827] transition-all duration-300 shadow-sm"
          >
            View full gallery
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-luxury-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}