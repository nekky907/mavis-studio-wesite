import Link from 'next/link';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Services & Packages - Mavis Studio',
  description: 'Explore our pre-wedding photography packages in Chiang Mai. Half-day and full-day experiences available.',
};

export default function ServicesPage() {
  const packages = [
    {
      name: 'Half Day Experience',
      price: '40,000 - 50,000 ฿',
      features: [
        '4 hours of photographer service',
        '2 shooting locations',
        '1 gown & 1 suit styling',
        '10-15 specially edited photos',
        'Hotel accommodation',
        'Transportation included',
        'Professional makeup artist',
        'Digital file delivery',
      ],
      featured: false,
    },
    {
      name: 'Full Day Experience',
      price: '70,000 - 100,000 ฿',
      features: [
        '8-10 hours of photographer service',
        '2-4 shooting locations',
        '2-3 style gown & suit changes',
        '15+ specially edited photos',
        'Hotel accommodation',
        'Transportation included',
        'Professional makeup artist',
        'Dinner included',
        'Physical albums & prints',
        'Digital file delivery',
      ],
      featured: true,
    },
  ];

  const bookingProcess = [
    { step: '01', title: 'Inquiry', description: 'Contact us through your preferred channel' },
    { step: '02', title: 'Consultation', description: 'Discuss your vision and preferences' },
    { step: '03', title: 'Booking', description: 'Confirm your package and date' },
    { step: '04', title: 'Photo Session', description: 'Experience your dream photoshoot' },
    { step: '05', title: 'Delivery', description: 'Receive your photos within 1 week' },
  ];

  const importantInfo = [
    { title: 'Booking Timeline', content: '1-12 months in advance recommended' },
    { title: 'Payment', content: '50% deposit upon booking, 50% after completion' },
    { title: 'Cancellation', content: 'Deposit is non-refundable upon cancellation' },
    { title: 'Weather Policy', content: 'We continue shooting or find indoor locations' },
    { title: 'Delivery Time', content: 'Maximum 1 week or as discussed' },
    { title: 'Copyright', content: 'Photos are owned by customers' },
  ];

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-32 pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-6 font-medium uppercase">
            Our Services
          </div>

          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Pre-Wedding Photography<br />
            <span className="text-secondary">Packages</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            Choose the perfect package to capture your love story in Chiang Mai
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-3xl p-10 hover:-translate-y-2 transition-all ${
                  pkg.featured
                    ? 'bg-gradient-to-br from-primary to-primary-light text-tertiary relative overflow-hidden shadow-2xl'
                    : 'bg-tertiary border-2 border-secondary'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute top-4 right-4 bg-secondary text-primary px-4 py-2 rounded-full text-[10px] tracking-wider font-semibold uppercase">
                    Most Popular
                  </div>
                )}

                <div
                  className={`text-xs tracking-[0.15em] mb-4 font-medium uppercase ${
                    pkg.featured ? 'text-secondary' : 'text-accent'
                  }`}
                >
                  {pkg.name}
                </div>

                <h3 className="font-serif text-4xl mb-2">{pkg.price}</h3>

                <div
                  className={`h-0.5 w-16 my-6 ${
                    pkg.featured
                      ? 'bg-gradient-to-r from-secondary to-transparent'
                      : 'bg-gradient-to-r from-accent to-transparent'
                  }`}
                />

                <h4 className="font-serif text-lg mb-6">Package Includes:</h4>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className={pkg.featured ? 'text-secondary' : 'text-accent'} size={20} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-4 rounded-full text-center font-medium tracking-wide transition-all ${
                    pkg.featured
                      ? 'bg-secondary text-primary shadow-lg hover:shadow-xl hover:-translate-y-1'
                      : 'bg-primary text-tertiary hover:bg-primary-light'
                  }`}
                >
                  Choose This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-24 px-4 bg-tertiary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">How to Book with Us</h2>

          <p className="text-lg leading-relaxed opacity-85 max-w-3xl mx-auto mb-16">
            Our simple 5-step booking process
          </p>

          <div className="grid md:grid-cols-5 gap-6">
            {bookingProcess.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="font-serif text-5xl text-secondary mb-4 font-semibold">
                  {item.step}
                </div>
                <h4 className="font-serif text-xl mb-2">{item.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">
            Important Information
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {importantInfo.map((item, i) => (
              <div key={i} className="p-6 bg-tertiary rounded-2xl border-l-4 border-secondary">
                <h4 className="font-serif text-xl mb-3">{item.title}</h4>
                <p className="text-sm opacity-85 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent to-primary text-tertiary text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Ready to Book?</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Let's create beautiful memories together in Chiang Mai
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-full bg-secondary text-primary font-medium tracking-wide shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
