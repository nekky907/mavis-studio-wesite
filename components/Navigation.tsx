'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Pages with dark hero sections that need light navbar initially
  const darkHeroPages = ['/about', '/services', '/portfolio', '/team', '/contact'];
  const isDarkHero = darkHeroPages.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Determine if we should use light colors (either scrolled OR on dark hero page)
  const useLightColors = scrolled || isDarkHero;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6',
        scrolled
          ? 'bg-primary/95 backdrop-blur-lg border-b border-secondary/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center',
                'border-2 border-secondary/30 backdrop-blur-lg transition-all',
                'font-serif text-xl font-semibold',
                useLightColors
                  ? 'bg-tertiary/10 text-tertiary'
                  : 'bg-primary/80 text-secondary'
              )}
            >
              M
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  'font-serif text-xl font-semibold tracking-wider transition-colors',
                  useLightColors ? 'text-tertiary' : 'text-primary'
                )}
              >
                MAVIS
              </span>
              <span
                className={cn(
                  'text-[10px] tracking-[0.2em] transition-colors',
                  useLightColors ? 'text-secondary' : 'text-accent'
                )}
              >
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide transition-colors',
                  'after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]',
                  'after:bg-secondary after:transition-all hover:after:w-full',
                  useLightColors ? 'text-tertiary' : 'text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={cn(
                'px-6 py-3 rounded-full font-medium text-sm tracking-wide',
                'bg-gradient-to-r from-secondary to-accent text-primary',
                'shadow-lg shadow-secondary/30 transition-all',
                'hover:shadow-xl hover:-translate-y-0.5'
              )}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  'block h-0.5 w-full transition-all',
                  useLightColors ? 'bg-tertiary' : 'bg-primary',
                  mobileMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-full transition-all',
                  useLightColors ? 'bg-tertiary' : 'bg-primary',
                  mobileMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'block h-0.5 w-full transition-all',
                  useLightColors ? 'bg-tertiary' : 'bg-primary',
                  mobileMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'block text-base font-medium transition-colors',
                  useLightColors ? 'text-tertiary' : 'text-primary'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-6 py-3 rounded-full font-medium text-sm tracking-wide text-center bg-gradient-to-r from-secondary to-accent text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
