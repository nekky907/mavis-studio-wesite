'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-primary text-tertiary py-10 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <div className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider mb-2">
            MAVIS STUDIO
          </div>
          <div className="text-xs sm:text-sm text-secondary tracking-[0.15em] sm:tracking-[0.2em]">
            {t('footer.location')}
          </div>
        </div>

        <div className="text-sm sm:text-base md:text-lg italic mb-6 sm:mb-8 opacity-80">
          {t('footer.tagline')}
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm">
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

        <div className="border-t border-secondary/20 pt-6 sm:pt-8 text-xs sm:text-sm opacity-60">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
