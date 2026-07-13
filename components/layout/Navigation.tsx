'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ui } from '@/src/components/ui.copy';
import type { Locale } from '@/types';

const NAV_LINKS = (locale: Locale) => {
  const n = ui.nav[locale];
  const isEs = locale === 'es';
  return [
    { label: n.experience, href: isEs ? '/es/experiencias' : '/en/experiences' },
    { label: n.dining,     href: isEs ? '/es/cocina'       : '/en/dining' },
    { label: n.winery,     href: isEs ? '/es/bodega'       : '/en/winery' },
    { label: n.about,      href: isEs ? '/es/nosotros'     : '/en/about' },
  ];
};

export default function Navigation({ locale }: { locale: Locale }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const pathname = usePathname();
  const nav      = ui.nav[locale];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const otherLocale = locale === 'en' ? 'es' : 'en';
  const bookHref = `/${locale}/book`;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-sticky transition-all duration-300 ease-brand',
          scrolled ? 'bg-linen/95 backdrop-blur-sm shadow-subtle' : 'bg-transparent'
        )}
      >
        <nav className="container-site h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="font-display text-xl font-light tracking-wider text-soul hover:text-gold transition-colors duration-150">
            Flowhaven
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS(locale).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'font-body text-caption font-medium uppercase tracking-[0.12em] transition-colors duration-150',
                    pathname === item.href ? 'text-gold' : 'text-soul hover:text-gold'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href={`/${otherLocale}`}
              className="font-body text-caption text-sage hover:text-soul transition-colors duration-150 uppercase tracking-widest"
            >
              {otherLocale.toUpperCase()}
            </Link>
            <Link href={bookHref} className="btn btn-primary py-2.5 px-6 text-xs">
              {nav.book}
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(true)}
            aria-label={ui.accessibility[locale].menuOpen}
          >
            <span className="w-6 h-px bg-soul block" />
            <span className="w-6 h-px bg-soul block" />
            <span className="w-4 h-px bg-soul block" />
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-modal bg-soul flex flex-col animate-fade-in">
          <div className="container-site h-20 flex items-center justify-between">
            <span className="font-display text-xl font-light text-linen">Flowhaven</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-linen font-body text-2xl leading-none"
              aria-label={ui.accessibility[locale].menuClose}
            >
              ×
            </button>
          </div>
          <ul className="flex flex-col gap-8 px-6 py-12 flex-1">
            {NAV_LINKS(locale).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-4xl text-linen font-light hover:text-gold transition-colors duration-150"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="container-site pb-12 flex items-center gap-6">
            <Link href={bookHref} onClick={() => setMenuOpen(false)} className="btn btn-primary flex-1 justify-center">
              {nav.book}
            </Link>
            <Link
              href={`/${otherLocale}`}
              className="font-body text-caption text-sage uppercase tracking-widest"
            >
              {otherLocale.toUpperCase()}
            </Link>
          </div>
        </div>
      )}

      {/* Mobile sticky book bar (hidden on /book) */}
      {!pathname.includes('/book') && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-sticky bg-linen border-t border-gold/20 p-4">
          <Link href={bookHref} className="btn btn-primary w-full justify-center">
            {nav.book}
          </Link>
        </div>
      )}
    </>
  );
}
