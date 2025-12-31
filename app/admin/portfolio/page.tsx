import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Image as ImageIcon, Star } from 'lucide-react';
import { PortfolioItem } from '@/types';

export const metadata = {
  title: 'Manage Portfolio - Admin',
  description: 'Manage portfolio items',
};

export const dynamic = 'force-dynamic';

export default async function ManagePortfolioPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch all portfolio items
  const { data: portfolioItems } = await supabase
    .from('portfolio_items')
    .select('*')
    .order('order', { ascending: true }) as { data: PortfolioItem[] | null };

  return (
    <div className="min-h-screen bg-tertiary">
      {/* Header */}
      <nav className="bg-primary text-tertiary py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Image
            src="/mavis-logo.svg"
            alt="Mavis Studio"
            width={32}
            height={38}
            className="brightness-0 invert"
          />
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="font-serif text-2xl ml-auto">Manage Portfolio</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-primary/60 mb-1">Total Items</div>
            <div className="text-3xl font-bold text-blue-800">{portfolioItems?.length || 0}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-primary/60 mb-1">Featured</div>
            <div className="text-3xl font-bold text-yellow-800">
              {portfolioItems?.filter(p => p.featured).length || 0}
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-primary/60 mb-1">Categories</div>
            <div className="text-3xl font-bold text-green-800">
              {new Set(portfolioItems?.map(p => p.category)).size || 0}
            </div>
          </div>
        </div>

        {/* Add New Button */}
        <div className="mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800">
            <p className="text-sm">
              <strong>Note:</strong> To add new portfolio items, use the Supabase dashboard or API.
              You can upload images to Cloudinary and then insert the records directly into the database.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-tertiary">
            <h2 className="font-serif text-2xl">Portfolio Items</h2>
          </div>

          {portfolioItems && portfolioItems.length > 0 ? (
            <div className="p-6">
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {portfolioItems.map((item) => (
                  <div
                    key={item.id}
                    className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                  >
                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                        <ImageIcon className="text-white" size={48} />
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-serif text-lg">{item.title}</h3>
                          {item.featured && (
                            <Star size={20} className="text-yellow-400 fill-yellow-400 flex-shrink-0" />
                          )}
                        </div>
                        {item.description && (
                          <p className="text-sm text-white/80 line-clamp-2">{item.description}</p>
                        )}
                        <div className="mt-2 flex items-center justify-between text-xs text-white/60">
                          <span className="capitalize">{item.category}</span>
                          <span>Order: {item.order}</span>
                        </div>
                      </div>
                    </div>

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-3 right-3">
                        <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Star size={12} className="fill-yellow-900" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-primary/60">
              <ImageIcon size={64} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg mb-2">No portfolio items yet</p>
              <p className="text-sm">Add items through Supabase dashboard</p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-serif text-xl mb-4">How to Add Portfolio Items</h3>
          <ol className="space-y-3 text-primary/80">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">1</span>
              <span>Upload your image to Cloudinary and get the image URL</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">2</span>
              <span>Go to your Supabase Dashboard → Table Editor → portfolio_items</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">3</span>
              <span>Click &quot;Insert row&quot; and fill in: title, description, image_url, cloudinary_id, category, featured, order</span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">4</span>
              <span>Save and refresh this page to see your new portfolio item</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
