'use client';

import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServicesPage() {
  const t = useTranslations();

  const halfDayPackages = [
    {
      name: t('services.packages.essential.name'),
      tagline: t('services.packages.essential.tagline'),
      price: '฿42,000',
      features: [
        t('services.packages.essential.feature1'),
        t('services.packages.essential.feature2'),
        t('services.packages.essential.feature3'),
        t('services.packages.essential.feature4'),
        t('services.packages.essential.feature5'),
        t('services.packages.essential.feature6'),
        t('services.packages.essential.feature7'),
        t('services.packages.essential.feature8'),
      ],
      benefits: [
        t('services.packages.essential.benefit1'),
        t('services.packages.essential.benefit2'),
        t('services.packages.essential.benefit3'),
        t('services.packages.essential.benefit4'),
        t('services.packages.essential.benefit5'),
        t('services.packages.essential.benefit6'),
        t('services.packages.essential.benefit7'),
      ],
      bestFor: t('services.packages.essential.bestFor'),
      featured: false,
    },
    {
      name: t('services.packages.signature.name'),
      tagline: t('services.packages.signature.tagline'),
      price: '฿52,000',
      features: [
        t('services.packages.signature.feature1'),
        t('services.packages.signature.feature2'),
        t('services.packages.signature.feature3'),
        t('services.packages.signature.feature4'),
        t('services.packages.signature.feature5'),
        t('services.packages.signature.feature6'),
        t('services.packages.signature.feature7'),
      ],
      benefits: [
        t('services.packages.signature.benefit1'),
        t('services.packages.signature.benefit2'),
        t('services.packages.signature.benefit3'),
        t('services.packages.signature.benefit4'),
        t('services.packages.signature.benefit5'),
        t('services.packages.signature.benefit6'),
        t('services.packages.signature.benefit7'),
      ],
      bestFor: t('services.packages.signature.bestFor'),
      featured: false,
    },
  ];

  const fullDayPackages = [
    {
      name: t('services.packages.deluxe.name'),
      tagline: t('services.packages.deluxe.tagline'),
      price: '฿78,000',
      features: [
        t('services.packages.deluxe.feature1'),
        t('services.packages.deluxe.feature2'),
        t('services.packages.deluxe.feature3'),
        t('services.packages.deluxe.feature4'),
        t('services.packages.deluxe.feature5'),
        t('services.packages.deluxe.feature6'),
        t('services.packages.deluxe.feature7'),
        t('services.packages.deluxe.feature8'),
        t('services.packages.deluxe.feature9'),
        t('services.packages.deluxe.feature10'),
      ],
      benefits: [
        t('services.packages.deluxe.benefit1'),
        t('services.packages.deluxe.benefit2'),
        t('services.packages.deluxe.benefit3'),
        t('services.packages.deluxe.benefit4'),
        t('services.packages.deluxe.benefit5'),
        t('services.packages.deluxe.benefit6'),
        t('services.packages.deluxe.benefit7'),
        t('services.packages.deluxe.benefit8'),
      ],
      bestFor: t('services.packages.deluxe.bestFor'),
      featured: false,
    },
    {
      name: t('services.packages.luxury.name'),
      tagline: t('services.packages.luxury.tagline'),
      price: '฿98,000',
      features: [
        t('services.packages.luxury.feature1'),
        t('services.packages.luxury.feature2'),
        t('services.packages.luxury.feature3'),
        t('services.packages.luxury.feature4'),
        t('services.packages.luxury.feature5'),
        t('services.packages.luxury.feature6'),
        t('services.packages.luxury.feature7'),
        t('services.packages.luxury.feature8'),
        t('services.packages.luxury.feature9'),
        t('services.packages.luxury.feature10'),
      ],
      benefits: [
        t('services.packages.luxury.benefit1'),
        t('services.packages.luxury.benefit2'),
        t('services.packages.luxury.benefit3'),
        t('services.packages.luxury.benefit4'),
        t('services.packages.luxury.benefit5'),
        t('services.packages.luxury.benefit6'),
        t('services.packages.luxury.benefit7'),
        t('services.packages.luxury.benefit8'),
        t('services.packages.luxury.benefit9'),
      ],
      bestFor: t('services.packages.luxury.bestFor'),
      featured: true,
    },
    {
      name: t('services.packages.platinum.name'),
      tagline: t('services.packages.platinum.tagline'),
      price: '฿138,000',
      features: [
        t('services.packages.platinum.feature1'),
        t('services.packages.platinum.feature2'),
        t('services.packages.platinum.feature3'),
        t('services.packages.platinum.feature4'),
        t('services.packages.platinum.feature5'),
        t('services.packages.platinum.feature6'),
        t('services.packages.platinum.feature7'),
        t('services.packages.platinum.feature8'),
        t('services.packages.platinum.feature9'),
        t('services.packages.platinum.feature10'),
        t('services.packages.platinum.feature11'),
        t('services.packages.platinum.feature12'),
      ],
      benefits: [
        t('services.packages.platinum.benefit1'),
        t('services.packages.platinum.benefit2'),
        t('services.packages.platinum.benefit3'),
        t('services.packages.platinum.benefit4'),
        t('services.packages.platinum.benefit5'),
        t('services.packages.platinum.benefit6'),
        t('services.packages.platinum.benefit7'),
        t('services.packages.platinum.benefit8'),
        t('services.packages.platinum.benefit9'),
        t('services.packages.platinum.benefit10'),
        t('services.packages.platinum.benefit11'),
      ],
      bestFor: t('services.packages.platinum.bestFor'),
      featured: false,
    },
  ];

  const customPackage = {
    name: t('services.packages.custom.name'),
    tagline: t('services.packages.custom.tagline'),
    description: t('services.packages.custom.description'),
    price: t('services.packages.custom.priceNote'),
    features: [
      t('services.packages.custom.feature1'),
      t('services.packages.custom.feature2'),
      t('services.packages.custom.feature3'),
      t('services.packages.custom.feature4'),
      t('services.packages.custom.feature5'),
      t('services.packages.custom.feature6'),
      t('services.packages.custom.feature7'),
      t('services.packages.custom.feature8'),
    ],
    benefits: [
      t('services.packages.custom.benefit1'),
      t('services.packages.custom.benefit2'),
      t('services.packages.custom.benefit3'),
      t('services.packages.custom.benefit4'),
      t('services.packages.custom.benefit5'),
      t('services.packages.custom.benefit6'),
      t('services.packages.custom.benefit7'),
    ],
    bestFor: t('services.packages.custom.bestFor'),
    ctaButton: t('services.packages.custom.ctaButton'),
  };

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

      {/* Half Day Packages */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] text-accent mb-4 font-medium uppercase">
              {t('services.packages.halfDayTitle')}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
              {t('services.packages.halfDaySubtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {halfDayPackages.map((pkg, i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:-translate-y-2 transition-all bg-tertiary border-2 border-secondary flex flex-col"
              >
                <div className="text-xs tracking-[0.15em] mb-2 font-medium uppercase text-accent">
                  {pkg.name}
                </div>

                <p className="text-sm text-primary/70 mb-4 italic">{pkg.tagline}</p>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2">{pkg.price}</h3>

                <div className="h-0.5 w-16 my-4 sm:my-6 bg-gradient-to-r from-accent to-transparent" />

                <h4 className="font-serif text-base sm:text-lg mb-4">{t('services.packages.includes')}</h4>

                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <Check className="flex-shrink-0 text-accent" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-serif text-base sm:text-lg mb-4 mt-6">{t('services.packages.benefits')}</h4>

                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {pkg.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <Check className="flex-shrink-0 text-secondary" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm mb-6 p-4 bg-white rounded-lg border-l-4 border-accent">
                  <span className="font-semibold">{t('services.packages.bestForLabel')}</span> {pkg.bestFor}
                </p>

                <Link
                  href="/contact"
                  className="block w-full py-3 sm:py-4 rounded-full text-center font-medium text-sm sm:text-base tracking-wide transition-all bg-primary text-tertiary hover:bg-primary-light mt-auto"
                >
                  {t('services.packages.choosePackage')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Day Packages */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.15em] text-accent mb-4 font-medium uppercase">
              {t('services.packages.fullDayTitle')}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
              {t('services.packages.fullDaySubtitle')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {fullDayPackages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:-translate-y-2 transition-all flex flex-col ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-primary to-primary-light text-tertiary relative overflow-hidden shadow-2xl md:scale-105'
                    : 'bg-tertiary border-2 border-secondary'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-secondary text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[9px] sm:text-[10px] tracking-wider font-semibold uppercase">
                    {t('services.packages.mostPopular')}
                  </div>
                )}

                <div
                  className={`text-xs tracking-[0.15em] mb-2 font-medium uppercase ${
                    pkg.featured ? 'text-secondary' : 'text-accent'
                  }`}
                >
                  {pkg.name}
                </div>

                <p className={`text-sm mb-4 italic ${pkg.featured ? 'text-tertiary/80' : 'text-primary/70'}`}>
                  {pkg.tagline}
                </p>

                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2">{pkg.price}</h3>

                <div
                  className={`h-0.5 w-16 my-4 sm:my-6 ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-secondary to-transparent'
                      : 'bg-gradient-to-r from-accent to-transparent'
                  }`}
                />

                <h4 className="font-serif text-base sm:text-lg mb-4">{t('services.packages.includes')}</h4>

                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <Check className={`flex-shrink-0 ${pkg.featured ? 'text-secondary' : 'text-accent'}`} size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <h4 className="font-serif text-base sm:text-lg mb-4 mt-6">{t('services.packages.benefits')}</h4>

                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {pkg.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                      <Check className={`flex-shrink-0 ${pkg.featured ? 'text-secondary' : 'text-secondary'}`} size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <p className={`text-sm mb-6 p-4 rounded-lg border-l-4 ${
                  pkg.featured
                    ? 'bg-white/10 border-secondary'
                    : 'bg-white border-accent'
                }`}>
                  <span className="font-semibold">{t('services.packages.bestForLabel')}</span> {pkg.bestFor}
                </p>

                <Link
                  href="/contact"
                  className={`block w-full py-3 sm:py-4 rounded-full text-center font-medium text-sm sm:text-base tracking-wide transition-all mt-auto ${
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

      {/* Custom Package */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.15em] text-accent mb-4 font-medium uppercase">
              {t('services.packages.custom.name')}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-4">
              {customPackage.tagline}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto opacity-85">
              {customPackage.description}
            </p>
          </div>

          <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 bg-gradient-to-br from-accent/5 via-secondary/5 to-primary/5 border-2 border-accent/20 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2 text-accent">
                {customPackage.price}
              </h3>
              <div className="h-0.5 w-16 mx-auto my-6 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-10 mb-8">
              <div>
                <h4 className="font-serif text-lg sm:text-xl mb-4 text-center md:text-left">
                  {t('services.packages.includes')}
                </h4>
                <ul className="space-y-3">
                  {customPackage.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm sm:text-base">
                      <Check className="flex-shrink-0 text-accent mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-serif text-lg sm:text-xl mb-4 text-center md:text-left">
                  {t('services.packages.benefits')}
                </h4>
                <ul className="space-y-3">
                  {customPackage.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm sm:text-base">
                      <Check className="flex-shrink-0 text-secondary mt-0.5" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-sm mb-6 p-4 bg-white/80 rounded-lg border-l-4 border-accent">
              <span className="font-semibold">{t('services.packages.bestForLabel')}</span> {customPackage.bestFor}
            </p>

            <Link
              href="/contact"
              className="block w-full sm:w-auto sm:mx-auto sm:max-w-md py-4 rounded-full text-center font-medium text-base tracking-wide transition-all bg-gradient-to-r from-accent to-primary text-tertiary hover:shadow-xl hover:-translate-y-1"
            >
              {customPackage.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      {/* All Packages Include */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-center">
            {t('services.packages.allIncludeTitle')}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              t('services.packages.guarantee1'),
              t('services.packages.guarantee2'),
              t('services.packages.guarantee3'),
              t('services.packages.guarantee4'),
              t('services.packages.guarantee5'),
              t('services.packages.guarantee6'),
              t('services.packages.guarantee7'),
              t('services.packages.guarantee8'),
            ].map((guarantee, i) => (
              <div key={i} className="p-4 sm:p-6 bg-tertiary rounded-xl text-center">
                <Check className="mx-auto text-accent mb-3" size={24} />
                <p className="text-sm">{guarantee}</p>
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

      {/* Q&A Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 text-center">
            {t('services.faq.title')}
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {/* Q1: What to expect */}
            <div className="bg-tertiary rounded-2xl p-6 sm:p-8 border-l-4 border-accent">
              <h3 className="font-serif text-xl sm:text-2xl mb-4 text-primary">
                {t('services.faq.q1.question')}
              </h3>
              <div className="text-sm sm:text-base leading-relaxed space-y-4 text-primary/85">
                <p>{t('services.faq.q1.answer')}</p>

                <div>
                  <p className="font-semibold mb-2 text-primary">{t('services.faq.q1.needFromYou')}</p>
                  <ul className="space-y-1.5 ml-4">
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-accent mt-0.5" size={16} />
                      <span>{t('services.faq.q1.need1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-accent mt-0.5" size={16} />
                      <span>{t('services.faq.q1.need2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-accent mt-0.5" size={16} />
                      <span>{t('services.faq.q1.need3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-accent mt-0.5" size={16} />
                      <span>{t('services.faq.q1.need4')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-accent mt-0.5" size={16} />
                      <span>{t('services.faq.q1.need5')}</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-2 text-primary">{t('services.faq.q1.wePromise')}</p>
                  <ul className="space-y-1.5 ml-4">
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-secondary mt-0.5" size={16} />
                      <span>{t('services.faq.q1.promise1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-secondary mt-0.5" size={16} />
                      <span>{t('services.faq.q1.promise2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-secondary mt-0.5" size={16} />
                      <span>{t('services.faq.q1.promise3')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-secondary mt-0.5" size={16} />
                      <span>{t('services.faq.q1.promise4')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="flex-shrink-0 text-secondary mt-0.5" size={16} />
                      <span>{t('services.faq.q1.promise5')}</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm italic bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
                  <span className="font-semibold text-primary">{t('services.faq.q1.importantLabel')}</span> {t('services.faq.q1.important')}
                </p>
              </div>
            </div>

            {/* Q2: Weather */}
            <div className="bg-tertiary rounded-2xl p-6 sm:p-8 border-l-4 border-secondary">
              <h3 className="font-serif text-xl sm:text-2xl mb-4 text-primary">
                {t('services.faq.q2.question')}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-primary/85">
                {t('services.faq.q2.answer')}
              </p>
            </div>

            {/* Q3: Photo satisfaction */}
            <div className="bg-tertiary rounded-2xl p-6 sm:p-8 border-l-4 border-accent">
              <h3 className="font-serif text-xl sm:text-2xl mb-4 text-primary">
                {t('services.faq.q3.question')}
              </h3>
              <div className="text-sm sm:text-base leading-relaxed space-y-4 text-primary/85">
                <p>{t('services.faq.q3.answer')}</p>

                <ul className="space-y-1.5 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{t('services.faq.q3.point1')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{t('services.faq.q3.point2')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{t('services.faq.q3.point3')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{t('services.faq.q3.point4')}</span>
                  </li>
                </ul>

                <p>{t('services.faq.q3.conclusion')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
