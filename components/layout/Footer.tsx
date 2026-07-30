import Image from 'next/image';
import Link from 'next/link';
import { ui } from '@/src/components/ui.copy';
import type { Locale } from '@/types';

export default function Footer({ locale }: { locale: Locale }) {
  const f = ui.footer[locale];
  const otherLocale = locale === 'en' ? 'es' : 'en';
  const cols = [
    { title: locale === 'en' ? 'Experience' : 'Experiencia', items: f.columns.experiences, hrefs: ['experiences','dining','winery','retreats'] },
    { title: locale === 'en' ? 'Company' : 'Empresa',       items: f.columns.company,     hrefs: ['about','#press','book?type=gift','#sustainability'] },
    { title: locale === 'en' ? 'Contact' : 'Contacto',      items: f.columns.contact,     hrefs: ['book','#whatsapp','#privacy','#terms'] },
  ];

  return (
    <footer className="bg-soul text-linen">
      <div className="container-site py-20">
        <div className="grid lg:grid-cols-4 gap-12 pb-16 border-b border-linen/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/flowhaven-mark.svg" alt="" width={36} height={36} className="rounded-full" />
              <p className="font-display text-2xl font-light text-linen">Heaven Flow</p>
            </div>
            <p className="font-body text-caption text-sage leading-relaxed mb-6 max-w-xs">{f.brand}</p>
            <p className="font-body text-caption text-gold">{f.socialProof}</p>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <p className="section-label mb-6">{col.title}</p>
              <ul className="space-y-3">
                {col.items.map((item: string, i: number) => (
                  <li key={item}>
                    <Link
                      href={`/${locale}/${col.hrefs[i]}`}
                      className="font-body text-caption text-sage hover:text-linen transition-colors duration-150"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display text-sm italic text-sage">{f.tagline}</p>
            <p className="font-body text-caption text-sage/60 mt-1">{f.copyright}</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href={f.links.privacy} className="font-body text-caption text-sage hover:text-linen transition-colors duration-150">
              {f.links.privacy}
            </Link>
            <Link
              href={`/${otherLocale}`}
              className="font-body text-caption text-sage hover:text-linen transition-colors duration-150 uppercase tracking-widest"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
