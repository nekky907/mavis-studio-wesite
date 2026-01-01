export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://mavis-studio-website.vercel.app/#organization',
    name: 'Mavis Studio',
    alternateName: 'Mavis Photography Studio',
    url: 'https://mavis-studio-website.vercel.app',
    logo: 'https://mavis-studio-website.vercel.app/mavis-logo.svg',
    description: 'Professional pre-wedding photography studio in Chiang Mai, Thailand, specializing in capturing love stories for international and local couples.',
    foundingDate: '2023',
    founders: [
      {
        '@type': 'Person',
        name: 'Nonthawat Pinchai',
      },
      {
        '@type': 'Person',
        name: 'Benyapa Varalert',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chiang Mai',
      addressRegion: 'Chiang Mai',
      addressCountry: 'Thailand',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.7883,
      longitude: 98.9853,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'Thailand',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Chiang Mai',
      },
    ],
    serviceType: [
      'Pre-Wedding Photography',
      'Wedding Photography',
      'Couple Photography',
      'Engagement Photography',
      'Destination Wedding Photography',
    ],
    priceRange: '฿฿฿',
    image: 'https://mavis-studio-website.vercel.app/mavis-logo.svg',
    telephone: '+66-XX-XXX-XXXX',
    email: 'info@mavisstudio.com',
    sameAs: [
      'https://www.facebook.com/mavisstudio',
      'https://www.instagram.com/mavisstudio',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mavis-studio-website.vercel.app/#localbusiness',
    name: 'Mavis Studio',
    image: 'https://mavis-studio-website.vercel.app/mavis-logo.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '',
      addressLocality: 'Chiang Mai',
      addressRegion: 'Chiang Mai Province',
      postalCode: '',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.7883,
      longitude: 98.9853,
    },
    url: 'https://mavis-studio-website.vercel.app',
    telephone: '+66-XX-XXX-XXXX',
    priceRange: '฿฿฿',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '09:00',
      closes: '18:00',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://mavis-studio-website.vercel.app/#website',
    url: 'https://mavis-studio-website.vercel.app',
    name: 'Mavis Studio',
    description: 'Professional pre-wedding photography in Chiang Mai, Thailand',
    publisher: {
      '@id': 'https://mavis-studio-website.vercel.app/#organization',
    },
    inLanguage: ['en', 'th', 'zh'],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://mavis-studio-website.vercel.app',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: 'https://mavis-studio-website.vercel.app/about',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Services',
        item: 'https://mavis-studio-website.vercel.app/services',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Portfolio',
        item: 'https://mavis-studio-website.vercel.app/portfolio',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Team',
        item: 'https://mavis-studio-website.vercel.app/team',
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Contact',
        item: 'https://mavis-studio-website.vercel.app/contact',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
