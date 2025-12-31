'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PortfolioItem } from '@/types';

interface PortfolioContentProps {
  portfolioItems: PortfolioItem[] | null;
}

export function PortfolioContent({ portfolioItems }: PortfolioContentProps) {
  const t = useTranslations();

  return (
    <>
      {/* Hero */}
      <section className="min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-24 sm:pt-32 pb-12 sm:pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-4 sm:mb-6 font-medium uppercase">
            {t('portfolio.hero.label')}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-8 leading-tight">
            {t('portfolio.hero.title')}<br />
            <span className="text-secondary">{t('portfolio.hero.titleHighlight')}</span>
          </h1>

          <p className="text-base sm:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            {t('portfolio.hero.description')}
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {portfolioItems && portfolioItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 sm:p-4 md:p-6">
                    <div className="text-tertiary">
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-xs sm:text-sm opacity-90 hidden sm:block">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">📸</div>
              <h3 className="font-serif text-2xl sm:text-3xl mb-3 sm:mb-4">{t('portfolio.empty.title')}</h3>
              <p className="text-sm sm:text-base md:text-lg opacity-70">
                {t('portfolio.empty.description')}
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
