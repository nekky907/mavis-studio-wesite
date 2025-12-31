import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import Image from 'next/image';

export const metadata = {
  title: 'Portfolio - Mavis Studio',
  description: 'View our stunning pre-wedding photography portfolio from Chiang Mai, Thailand.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function PortfolioPage() {
  const supabase = await createClient();

  const { data: portfolioItems } = await supabase
    .from('portfolio_items')
    .select('*')
    .order('order', { ascending: true });

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-32 pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-6 font-medium uppercase">
            Our Work
          </div>

          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Portfolio<br />
            <span className="text-secondary">Love Stories We've Captured</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            Every photograph is a testament to the unique beauty of each couple's journey
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {portfolioItems && portfolioItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
                >
                  <Image
                    src={item.image_url}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="text-tertiary">
                      <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                      {item.description && (
                        <p className="text-sm opacity-90">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">📸</div>
              <h3 className="font-serif text-3xl mb-4">Portfolio Coming Soon</h3>
              <p className="text-lg opacity-70">
                We're currently curating our best work to showcase here.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
