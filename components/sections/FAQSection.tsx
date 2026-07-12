'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ui } from '@/src/components/ui.copy.js';
import type { Locale } from '@/types';

interface FAQSectionProps {
  locale: Locale;
}

export default function FAQSection({ locale }: FAQSectionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = ui.faq[locale];
  const label = locale === 'en' ? 'Frequently Asked' : 'Preguntas Frecuentes';

  return (
    <section className="section-padding bg-linen">
      <div className="container-site max-w-3xl mx-auto">
        <p className="section-label mb-16 text-center">{label}</p>

        <dl className="space-y-2">
          {faqs.map((faq: { question: string; answer: string }, i: number) => (
            <div key={i} className="border-b border-soul/10">
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left py-6 flex items-center justify-between gap-6 group"
                  aria-expanded={open === i}
                >
                  <span className="font-body text-body-lg text-soul group-hover:text-soul/70 transition-colors">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-gold text-2xl leading-none shrink-0 select-none"
                  >
                    +
                  </motion.span>
                </button>
              </dt>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.dd
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-body-lg text-soul/70 leading-relaxed pb-8">
                      {faq.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
