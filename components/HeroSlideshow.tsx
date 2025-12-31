'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070',
    alt: 'Romantic pre-wedding photography in Chiang Mai',
  },
  {
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070',
    alt: 'Beautiful couple photography in Thailand',
  },
  {
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070',
    alt: 'Pre-wedding moments captured in nature',
  },
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070',
    alt: 'Enchanting wedding photography',
  },
];

export function HeroSlideshow() {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000',
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all',
              currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlapping Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <div className="text-4xl text-secondary mb-8 opacity-80 animate-fade-in drop-shadow-lg">✦</div>

        <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight animate-slide-up drop-shadow-2xl">
          {t('home.hero.title')}<br />
          <span className="text-secondary">{t('home.hero.titleHighlight')}</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed italic animate-slide-up backdrop-blur-sm bg-black/20 py-6 px-8 rounded-2xl border border-white/10" style={{ animationDelay: '0.2s' }}>
          <span className="text-secondary text-2xl mx-4">❝</span>
          {t('home.hero.quote')}
          <span className="text-secondary text-2xl mx-4">❞</span>
        </div>

        <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 drop-shadow-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {t('home.hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="/services"
            className="px-8 py-4 rounded-full bg-white text-primary font-medium text-base tracking-wide shadow-2xl hover:bg-secondary hover:text-white hover:shadow-3xl hover:-translate-y-1 transition-all"
          >
            {t('common.explorePackages')}
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-full border-2 border-white bg-white/10 backdrop-blur-sm text-white font-medium text-base tracking-wide hover:bg-white hover:text-primary hover:-translate-y-1 transition-all"
          >
            {t('common.viewPortfolio')}
          </Link>
        </div>

        <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <ChevronDown className="mx-auto text-white animate-float drop-shadow-lg" size={32} />
        </div>
      </div>
    </section>
  );
}
