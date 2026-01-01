import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mavis-studio-website.vercel.app';
  const locales = ['en', 'th', 'zh'];

  // Define all routes
  const routes = [
    '',           // home
    '/about',
    '/services',
    '/portfolio',
    '/team',
    '/contact',
  ];

  // Generate sitemap entries for each route and locale
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            en: `${baseUrl}${route}`,
            th: `${baseUrl}${route}`,
            zh: `${baseUrl}${route}`,
          },
        },
      });
    });
  });

  // Remove duplicates (since routes are the same for all locales)
  const uniqueEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}${route}`,
        th: `${baseUrl}${route}`,
        zh: `${baseUrl}${route}`,
      },
    },
  }));

  return uniqueEntries;
}
