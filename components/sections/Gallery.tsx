'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { siteImages } from '@/src/lib/images';
import type { Locale } from '@/types';

interface GalleryProps {
  locale: Locale;
}

export default function Gallery({ locale }: GalleryProps) {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  const label = locale === 'en' ? 'The Experience' : 'La Experiencia';
  const hint  = locale === 'en' ? 'Tap any image to enlarge' : 'Toca cualquier imagen para ampliar';

  return (
    <section className="section-padding bg-soul">
      <div className="container-site">
        <div className="flex items-baseline justify-between mb-10">
          <p className="section-label">{label}</p>
          <p className="hidden sm:block font-body text-caption text-sage italic">{hint}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3">
          {siteImages.gallery.map((img, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(img)}
              className="relative aspect-[4/3] overflow-hidden rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={img.alt}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Subtle overlay on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-soul/20"
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-soul/95 p-4 lg:p-12"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Image
                src={selected.src.replace('w=900', 'w=1800')}
                alt={selected.alt}
                fill
                className="object-contain"
                priority
              />
              <p className="absolute bottom-4 left-0 right-0 text-center font-body text-caption text-linen/70">
                {selected.alt}
              </p>
            </motion.div>

            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-linen/70 hover:text-linen text-4xl leading-none"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
