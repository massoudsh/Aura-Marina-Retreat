'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { bookingContent } from '@/src/pages/booking.content';
import { ui } from '@/src/components/ui.copy';
import type { Locale } from '@/types';

const schema = z.object({
  name:       z.string().min(2, 'Required'),
  email:      z.string().email('Invalid email'),
  phone:      z.string().optional(),
  date:       z.string().min(1, 'Please select a date'),
  experience: z.string().min(1, 'Please select an experience'),
  groupSize:  z.string().min(1, 'Please select group size'),
  dietary:    z.string().optional(),
  message:    z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface BookPageProps {
  params: { locale: Locale };
  searchParams: { type?: string };
}

export default function BookPage({ params: { locale }, searchParams }: BookPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const content  = bookingContent;
  const formCopy = ui.form[locale];
  const hero     = content.hero[locale];
  const note     = content.prebookingNote[locale];
  const contact  = content.contact[locale];
  const gift     = content.giftVoucher[locale];

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch {
      setError(locale === 'en'
        ? 'Something went wrong. Please try again or contact us directly.'
        : 'Algo salió mal. Inténtalo de nuevo o contáctanos directamente.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const conf = content.confirmation[locale];
    return (
      <div className="min-h-screen bg-linen flex items-center justify-center px-6">
        <div className="max-w-lg text-center py-32">
          <p className="section-label mb-6">{locale === 'en' ? 'Confirmed' : 'Confirmado'}</p>
          <h1 className="font-display text-display-xl text-soul font-light mb-6 max-w-none">{conf.heading}</h1>
          <p className="font-body text-body-lg text-soul/70 mb-12">{conf.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {conf.exploreLinks.map((link) => (
              <a key={link.href} href={link.href} className="btn btn-secondary">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linen">
      {/* Hero */}
      <div className="bg-soul pt-32 pb-20 px-6">
        <div className="container-site max-w-2xl">
          <p className="section-label mb-4">{hero.label}</p>
          <h1 className="font-display text-display-xl text-linen font-light mb-4 max-w-none">{hero.h1}</h1>
          <p className="font-body text-body-lg text-linen/70">{hero.sub}</p>
        </div>
      </div>

      <div className="container-site py-20">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* Form */}
          <div className="lg:col-span-2">
            {/* Pre-booking note */}
            <div className="border-l-2 border-gold pl-6 mb-12 space-y-4">
              <p className="section-label">{note.label}</p>
              {note.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-body-lg text-soul/80">{p}</p>
              ))}
            </div>

            <h2 className="font-display text-display-md text-soul font-light mb-10 max-w-none">{formCopy.title}</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label={formCopy.fields.name.label} error={errors.name?.message}>
                  <input {...register('name')} placeholder={formCopy.fields.name.placeholder} className="input" />
                </Field>
                <Field label={formCopy.fields.email.label} error={errors.email?.message}>
                  <input {...register('email')} type="email" placeholder={formCopy.fields.email.placeholder} className="input" />
                </Field>
              </div>

              {/* Phone */}
              <Field label={formCopy.fields.phone.label}>
                <input {...register('phone')} placeholder={formCopy.fields.phone.placeholder} className="input" />
              </Field>

              {/* Date + Experience */}
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label={formCopy.fields.date.label} error={errors.date?.message}>
                  <input {...register('date')} type="date" min={new Date().toISOString().split('T')[0]} className="input" />
                </Field>
                <Field label={formCopy.fields.experience.label} error={errors.experience?.message}>
                  <select {...register('experience')} className="input">
                    <option value="">—</option>
                    {formCopy.fields.experience.options.map((opt: string) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </Field>
              </div>

              {/* Group size */}
              <Field label={formCopy.fields.groupSize.label} error={errors.groupSize?.message}>
                <select {...register('groupSize')} className="input">
                  <option value="">—</option>
                  {formCopy.fields.groupSize.options.map((opt: string) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </Field>

              {/* Dietary */}
              <Field label={formCopy.fields.dietary.label}>
                <input {...register('dietary')} placeholder={formCopy.fields.dietary.placeholder} className="input" />
              </Field>

              {/* Message */}
              <Field label={formCopy.fields.message.label}>
                <textarea {...register('message')} placeholder={formCopy.fields.message.placeholder} rows={4} className="input resize-none" />
              </Field>

              {error && <p className="font-body text-caption text-terra">{error}</p>}

              <div className="pt-4">
                <button type="submit" disabled={loading} className="btn btn-primary w-full justify-center">
                  {loading ? '...' : formCopy.submit}
                </button>
                <p className="font-body text-caption text-sage text-center mt-4">{formCopy.trustLine}</p>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-10">
            {/* Contact */}
            <div className="bg-soul p-8 rounded-sm">
              <p className="section-label mb-4">{contact.label}</p>
              <p className="font-body text-body-lg text-linen/80 mb-6">{contact.body}</p>
              <div className="space-y-2 font-body text-caption text-sage">
                <p>WhatsApp: <a href={`https://wa.me/${contact.whatsapp.replace(/\s/g, '')}`} className="text-gold">{contact.whatsapp}</a></p>
                <p>Email: <a href={`mailto:${contact.email}`} className="text-gold">{contact.email}</a></p>
                <p>{contact.hours}</p>
              </div>
            </div>

            {/* Gift vouchers */}
            <div className="border border-gold/30 p-8 rounded-sm">
              <p className="section-label mb-4">{gift.label}</p>
              <p className="font-body text-body-lg text-soul mb-3">{gift.body}</p>
              <p className="font-body text-caption text-sage mb-6 italic">{gift.note}</p>
              <a href={gift.ctaHref} className="btn btn-secondary w-full justify-center text-xs">
                {gift.cta}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-body text-caption font-medium text-soul/70 uppercase tracking-widest">{label}</label>
      {children}
      {error && <p className="font-body text-caption text-terra">{error}</p>}
    </div>
  );
}
