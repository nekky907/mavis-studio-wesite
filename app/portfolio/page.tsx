import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import Image from 'next/image';
import { PortfolioItem } from '@/types';
import { PortfolioContent } from './PortfolioContent';

export const metadata = {
  title: 'Portfolio - Mavis Studio',
  description: 'View our stunning pre-wedding photography portfolio from Chiang Mai, Thailand.',
};

export const revalidate = 3600;

export default async function PortfolioPage() {
  const supabase = await createClient();

  const { data: portfolioItems } = await supabase
    .from('portfolio_items')
    .select('*')
    .order('order', { ascending: true }) as { data: PortfolioItem[] | null };

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />
      <PortfolioContent portfolioItems={portfolioItems} />
      <Footer />
    </div>
  );
}
