'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations();

  const packages = [
    {
      name: t('services.packages.halfDay.name'),
      price: '40,000 - 50,000 ฿',
      features: [
        t('services.packages.halfDay.feature1'),
        t('services.packages.halfDay.feature2'),
        t('services.packages.halfDay.feature3'),
        t('services.packages.halfDay.feature4'),
        t('services.packages.halfDay.feature5'),
        t('services.packages.halfDay.feature6'),
        t('services.packages.halfDay.feature7'),
        t('services.packages.halfDay.feature8'),
      ],
      featured: false,
    },
    {
      name: t('services.packages.fullDay.name'),
      price: '70,000 - 100,000 ฿',
      features: [
        t('services.packages.fullDay.feature1'),
        t('services.packages.fullDay.feature2'),
        t('services.packages.fullDay.feature3'),
        t('services.packages.fullDay.feature4'),
        t('services.packages.fullDay.feature5'),
        t('services.packages.fullDay.feature6'),
        t('services.packages.fullDay.feature7'),
        t('services.packages.fullDay.feature8'),
        t('services.packages.fullDay.feature9'),
        t('services.packages.fullDay.feature10'),
      ],
      featured: true,
    },
  ];

  const bookingProcess = [
    { step: '01', title: t('services.booking.step1.title'), description: t('services.booking.step1.description') },
    { step: '02', title: t('services.booking.step2.title'), description: t('services.booking.step2.description') },
    { step: '03', title: t('services.booking.step3.title'), description: t('services.booking.step3.description') },
    { step: '04', title: t('services.booking.step4.title'), description: t('services.booking.step4.description') },
    { step: '05', title: t('services.booking.step5.title'), description: t('services.booking.step5.description') },
  ];

  const importantInfo = [
    { title: t('services.info.timeline.title'), content: t('services.info.timeline.content') },
    { title: t('services.info.payment.title'), content: t('services.info.payment.content') },
    { title: t('services.info.cancellation.title'), content: t('services.info.cancellation.content') },
    { title: t('services.info.weather.title'), content: t('services.info.weather.content') },
    { title: t('services.info.delivery.title'), content: t('services.info.delivery.content') },
    { title: t('services.info.copyright.title'), content: t('services.info.copyright.content') },
  ];

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-24 sm:pt-32 pb-12 sm:pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-4 sm:mb-6 font-medium uppercase">
            {t('services.hero.label')}
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl mb-4 sm:mb-8 leading-tight">
            {t('services.hero.title')}<br />
            <span className="text-secondary">{t('services.hero.titleHighlight')}</span>
          </h1>

          <p className="text-base sm:text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            {t('services.hero.description')}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:-translate-y-2 transition-all ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-primary to-primary-light text-tertiary relative overflow-hidden shadow-2xl'
                    : 'bg-tertiary border-2 border-secondary'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-secondary text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase">
                    {t('services.packages.mostPopular')}
                  </div>
                )}

                <div
                  className={`text-xs tracking-[0.15em] mb-3 sm:mb-4 font-medium uppercase ${
                    pkg.featured ? 'text-secondary' : 'text-accent'
                  }`}
                >
                  {pkg.name}
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2">{pkg.price}</h3>

                <div
                  className={`h-0.5 w-16 my-4 sm:my-6 ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-secondary to-transparent'
                      : 'bg-gradient-to-r from-accent to-transparent'
                  }`}
                />

                <h4 className="font-serif text-base sm:text-lg mb-4 sm:mb-6">{t('services.packages.includes')}</h4>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <Check className={`flex-shrink-0 ${pkg.featured ? 'text-secondary' : 'text-accent'}`} size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 sm:py-4 rounded-full text-center font-medium text-sm sm:text-base tracking-wide transition-all ${
                    pkg.featured
                      ? 'bg-secondary text-primary shadow-lg hover:shadow-xl hover:-translate-y-1'
                      : 'bg-primary text-tertiary hover:bg-primary-light'
                  }`}
                >
                  {t('services.packages.choosePackage')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-tertiary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">{t('services.booking.title')}</h2>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-85 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
            {t('services.booking.description')}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {bookingProcess.map((item, i) => (
              <div key={i} className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg">
                <div className="font-serif text-3xl sm:text-4xl md:text-5xl text-secondary mb-2 sm:mb-4 font-semibold">
                  {item.step}
                </div>
                <h4 className="font-serif text-base sm:text-lg md:text-xl mb-1 sm:mb-2">{item.title}</h4>
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-center">
            {t('services.info.title')}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {importantInfo.map((item, i) => (
              <div key={i} className="p-4 sm:p-6 bg-tertiary rounded-xl sm:rounded-2xl border-l-4 border-secondary">
                <h4 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3">{item.title}</h4>
                <p className="text-xs sm:text-sm opacity-85 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-accent to-primary text-tertiary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6">{t('services.cta.title')}</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-10 opacity-90 leading-relaxed">
            {t('services.cta.description')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-secondary text-primary font-medium text-sm sm:text-base tracking-wide shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all"
          >
            {t('services.cta.button')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
