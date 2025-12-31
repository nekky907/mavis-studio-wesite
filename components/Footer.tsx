'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary text-tertiary py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="font-serif text-3xl font-semibold tracking-wider mb-2">
            MAVIS STUDIO
          </div>
          <div className="text-sm text-secondary tracking-[0.2em]">
            {t('footer.location')}
          </div>
        </div>

        <div className="text-lg italic mb-8 opacity-80">
          {t('footer.tagline')}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/" className="hover:text-secondary transition-colors">
            {t('nav.home')}
          </Link>
          <Link href="/about" className="hover:text-secondary transition-colors">
            {t('nav.about')}
          </Link>
          <Link href="/services" className="hover:text-secondary transition-colors">
            {t('nav.services')}
          </Link>
          <Link href="/portfolio" className="hover:text-secondary transition-colors">
            {t('nav.portfolio')}
          </Link>
          <Link href="/team" className="hover:text-secondary transition-colors">
            {t('nav.team')}
          </Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">
            {t('nav.contact')}
          </Link>
        </div>

        <div className="border-t border-secondary/20 pt-8 text-sm opacity-60">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
