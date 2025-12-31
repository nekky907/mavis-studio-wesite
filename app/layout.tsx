import type { Metadata } from 'next';
import { Poppins, Cinzel } from 'next/font/google';
import { cookies } from 'next/headers';
import { Providers } from './providers';
import { defaultLocale, type Locale } from '@/i18n/config';
import './globals.css';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const cinzel = Cinzel({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mavis Studio - Pre-Wedding Photography Chiang Mai',
  description: 'Capturing your pre-wedding moments in the enchanting landscapes of Chiang Mai, Thailand. Professional photography services for international couples.',
  keywords: ['pre-wedding photography', 'Chiang Mai', 'Thailand', 'wedding photography', 'couple photography'],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || defaultLocale;

  // Load messages for the current locale
  const messages = (await import(`@/i18n/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={`${poppins.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
