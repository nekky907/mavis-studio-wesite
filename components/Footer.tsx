import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-primary text-tertiary py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="font-serif text-3xl font-semibold tracking-wider mb-2">
            MAVIS STUDIO
          </div>
          <div className="text-sm text-secondary tracking-[0.2em]">
            Chiang Mai, Thailand • Est. 2023
          </div>
        </div>

        <div className="text-lg italic mb-8 opacity-80">
          Where Every Moment Has a Song
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/" className="hover:text-secondary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-secondary transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-secondary transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-secondary transition-colors">
            Portfolio
          </Link>
          <Link href="/team" className="hover:text-secondary transition-colors">
            Team
          </Link>
          <Link href="/contact" className="hover:text-secondary transition-colors">
            Contact
          </Link>
        </div>

        <div className="border-t border-secondary/20 pt-8 text-sm opacity-60">
          © {new Date().getFullYear()} Mavis Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
