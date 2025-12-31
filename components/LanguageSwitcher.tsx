'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { locales, localeNames, defaultLocale, type Locale } from '@/i18n/config';

export function LanguageSwitcher({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>(defaultLocale);
  const router = useRouter();

  // Read locale from cookie on mount
  useEffect(() => {
    const getCookie = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return undefined;
    };

    const savedLocale = getCookie('NEXT_LOCALE') as Locale;
    if (savedLocale && locales.includes(savedLocale)) {
      setCurrentLocale(savedLocale);
    }
  }, []);

  const switchLanguage = async (locale: Locale) => {
    // Set cookie
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    setCurrentLocale(locale);
    setIsOpen(false);

    // Refresh the page to apply new locale
    router.refresh();
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-2 px-3 py-2 rounded-full transition-colors',
          className
        )}
        aria-label="Switch language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium">{localeNames[currentLocale]}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-tertiary/10 overflow-hidden z-50">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => switchLanguage(locale)}
                className={cn(
                  'w-full text-left px-4 py-3 hover:bg-tertiary/30 transition-colors',
                  currentLocale === locale && 'bg-secondary/10 text-secondary font-medium'
                )}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
