'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Users, MapPin, Award, Heart } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations();

  const stats = [
    { icon: Users, number: '5+', label: t('about.stats.photographers') },
    { icon: Heart, number: '100+', label: t('about.stats.happyCouples') },
    { icon: MapPin, number: '20+', label: t('about.stats.locations') },
    { icon: Award, number: '2', label: t('about.stats.countriesServed') },
  ];

  const values = [
    {
      title: t('about.values.experience.title'),
      description: t('about.values.experience.description'),
      icon: '✦',
    },
    {
      title: t('about.values.courtesy.title'),
      description: t('about.values.courtesy.description'),
      icon: '❖',
    },
    {
      title: t('about.values.flexibility.title'),
      description: t('about.values.flexibility.description'),
      icon: '✧',
    },
  ];

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-32 pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-6 font-medium uppercase">
            {t('about.hero.label')}
          </div>

          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            {t('about.hero.title')}<br />
            <span className="text-secondary">{t('about.hero.titleHighlight')}</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            {t('about.hero.description')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-center">{t('about.story.title')}</h2>

          <div className="space-y-6 text-lg leading-relaxed opacity-85">
            <p>{t('about.story.paragraph1')}</p>
            <p>{t('about.story.paragraph2')}</p>
            <p>{t('about.story.paragraph3')}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-tertiary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="font-serif text-4xl text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-primary/70 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">{t('about.coreValues.title')}</h2>

          <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto mb-16">
            {t('about.coreValues.description')}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div key={i} className="p-8">
                <div className="text-5xl text-secondary mb-6">{value.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-base leading-relaxed opacity-80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
