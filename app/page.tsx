'use client';

import Link from 'next/link';
import { Camera, MapPin, Users, Award } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSlideshow } from '@/components/HeroSlideshow';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="bg-tertiary text-primary overflow-hidden">
      <Navigation />

      {/* Hero Slideshow Section */}
      <HeroSlideshow />

      {/* About Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="text-xs tracking-[0.15em] text-secondary mb-4 font-medium uppercase">
              {t('home.about.label')}
            </div>

            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              {t('home.about.title')}<br />
              <span className="text-accent">{t('home.about.titleYear')}</span>
            </h2>

            <p className="text-base leading-relaxed mb-6 opacity-85">
              {t('home.about.paragraph1')}
            </p>

            <p className="text-base leading-relaxed mb-8 opacity-85">
              {t('home.about.paragraph2')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Users, label: t('home.about.stat1Label'), value: t('home.about.stat1Value') },
                { icon: MapPin, label: t('home.about.stat2Label'), value: t('home.about.stat2Value') },
                { icon: Award, label: t('home.about.stat3Label'), value: t('home.about.stat3Value') },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider text-accent uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="font-semibold text-lg">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-tertiary text-lg italic p-12 text-center">
              &quot;{t('home.about.imagePlaceholder')}&quot;
            </div>

            {/* Decorative Frames */}
            <div className="absolute -top-5 -right-5 w-36 h-36 border-3 border-secondary rounded-3xl opacity-50" />
            <div className="absolute -bottom-5 -left-5 w-36 h-36 border-3 border-secondary rounded-3xl opacity-50" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="grain py-24 px-4 bg-gradient-to-br from-primary to-primary-light text-tertiary relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs tracking-[0.15em] text-secondary mb-4 font-medium uppercase">
            {t('home.services.label')}
          </div>

          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            {t('home.services.title')}
          </h2>

          <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto mb-16">
            {t('home.services.description')}
          </p>

          {/* Package Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Half Day Package */}
            <div className="bg-tertiary/5 backdrop-blur-lg border border-secondary/20 rounded-3xl p-10 text-left hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="text-xs tracking-[0.15em] text-secondary mb-4 font-medium uppercase">
                {t('home.services.halfDay.label')}
              </div>

              <h3 className="font-serif text-4xl mb-2">{t('home.services.halfDay.price')}</h3>

              <div className="h-0.5 w-16 bg-gradient-to-r from-secondary to-transparent my-6" />

              <ul className="space-y-3 text-base opacity-90 mb-8">
                <li>✦ {t('home.services.halfDay.feature1')}</li>
                <li>✦ {t('home.services.halfDay.feature2')}</li>
                <li>✦ {t('home.services.halfDay.feature3')}</li>
                <li>✦ {t('home.services.halfDay.feature4')}</li>
                <li>✦ {t('home.services.halfDay.feature5')}</li>
                <li>✦ {t('home.services.halfDay.feature6')}</li>
              </ul>

              <Link
                href="/services"
                className="block w-full py-4 rounded-full border-2 border-secondary text-secondary text-center font-medium tracking-wide hover:bg-secondary hover:text-primary transition-all"
              >
                {t('common.learnMore')}
              </Link>
            </div>

            {/* Full Day Package */}
            <div className="bg-gradient-to-br from-secondary to-accent rounded-3xl p-10 text-left relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="absolute top-4 right-4 bg-primary text-tertiary px-4 py-2 rounded-full text-[10px] tracking-wider font-semibold uppercase">
                {t('home.services.fullDay.badge')}
              </div>

              <div className="text-xs tracking-[0.15em] text-primary mb-4 font-medium uppercase">
                {t('home.services.fullDay.label')}
              </div>

              <h3 className="font-serif text-4xl mb-2 text-primary">{t('home.services.fullDay.price')}</h3>

              <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-transparent my-6" />

              <ul className="space-y-3 text-base text-primary mb-8">
                <li>✦ {t('home.services.fullDay.feature1')}</li>
                <li>✦ {t('home.services.fullDay.feature2')}</li>
                <li>✦ {t('home.services.fullDay.feature3')}</li>
                <li>✦ {t('home.services.fullDay.feature4')}</li>
                <li>✦ {t('home.services.fullDay.feature5')}</li>
                <li>✦ {t('home.services.fullDay.feature6')}</li>
                <li>✦ {t('home.services.fullDay.feature7')}</li>
                <li>✦ {t('home.services.fullDay.feature8')}</li>
              </ul>

              <Link
                href="/services"
                className="block w-full py-4 rounded-full bg-primary text-tertiary text-center font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                {t('common.bookThisPackage')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-tertiary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            {t('home.values.title')}
          </h2>

          <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto mb-16">
            {t('home.values.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('home.values.experience.title'),
                description: t('home.values.experience.description'),
                icon: '✦',
              },
              {
                title: t('home.values.courtesy.title'),
                description: t('home.values.courtesy.description'),
                icon: '❖',
              },
              {
                title: t('home.values.flexibility.title'),
                description: t('home.values.flexibility.description'),
                icon: '✧',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all">
                <div className="text-5xl text-secondary mb-6">{item.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-base leading-relaxed opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
