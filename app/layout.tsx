import type { Metadata } from 'next';
import { Poppins, Cinzel } from 'next/font/google';
import { cookies } from 'next/headers';
import { Providers } from './providers';
import { StructuredData } from '@/components/StructuredData';
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
  metadataBase: new URL('https://mavis-studio-website.vercel.app'),
  title: {
    default: 'Mavis Studio - Pre-Wedding Photography Chiang Mai, Thailand',
    template: '%s | Mavis Studio'
  },
  description: 'Professional pre-wedding photography in Chiang Mai, Thailand. Capturing love stories for international and local couples in stunning Thai landscapes. Expert photographers since 2023.',
  keywords: [
    'pre-wedding photography Chiang Mai',
    'wedding photography Thailand',
    'Chiang Mai photographer',
    'couple photography Thailand',
    'destination wedding photography',
    'Thailand pre-wedding shoot',
    'international wedding photographer',
    'Mavis Studio',
    'engagement photography Chiang Mai',
    'romantic photography Thailand'
  ],
  authors: [
    { name: 'Nonthawat Pinchai' },
    { name: 'Benyapa Varalert' }
  ],
  creator: 'Mavis Studio',
  publisher: 'Mavis Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/mavis-logo.svg',
    apple: '/mavis-logo.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['th_TH', 'zh_CN'],
    url: 'https://mavis-studio-website.vercel.app',
    siteName: 'Mavis Studio',
    title: 'Mavis Studio - Pre-Wedding Photography Chiang Mai, Thailand',
    description: 'Professional pre-wedding photography in Chiang Mai, Thailand. Capturing love stories for international and local couples in stunning Thai landscapes.',
    images: [
      {
        url: '/mavis-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Mavis Studio - Pre-Wedding Photography',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mavis Studio - Pre-Wedding Photography Chiang Mai',
    description: 'Professional pre-wedding photography in Chiang Mai, Thailand. Capturing love stories in stunning Thai landscapes.',
    images: ['/mavis-logo.svg'],
    creator: '@mavisstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
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
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
