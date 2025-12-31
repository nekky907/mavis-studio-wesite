import type { Metadata } from 'next';
import { Poppins, Cinzel } from 'next/font/google';
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${cinzel.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
