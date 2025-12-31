import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Users, MapPin, Award, Heart } from 'lucide-react';

export const metadata = {
  title: 'About Us - Mavis Studio',
  description: 'Learn about Mavis Studio, founded by Nonthawat Pinchai and Benyapa Varalert in Chiang Mai, Thailand.',
};

export default function AboutPage() {
  return (
    <div className="bg-tertiary text-primary">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-32 pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-6 font-medium uppercase">
            Our Story
          </div>

          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Memorial Creators<br />
            <span className="text-secondary">Since 2023</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            Every photograph tells a story, and we are honored to tell yours
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-center">Our Beginning</h2>

          <div className="space-y-6 text-lg leading-relaxed opacity-85">
            <p>
              Founded by Nonthawat Pinchai and Benyapa Varalert, Mavis Studio brings a fresh perspective
              to pre-wedding photography in Chiang Mai, Thailand. We specialize in serving international
              couples from China and Singapore who dream of capturing their love story against Thailand's
              stunning landscapes.
            </p>

            <p>
              Just as a songbird sings not because it has an answer but because it has a song, we create
              not just because we can, but because we have a vision. Every moment is decorated with
              beautiful details, every step in your journey crafted with care.
            </p>

            <p>
              With over 5 professional photographers on our team, we bring diverse perspectives and
              expertise to every shoot. Our international experience allows us to understand and cater
              to the unique preferences of couples from different cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-tertiary">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, number: '5+', label: 'Professional Photographers' },
              { icon: Heart, number: '100+', label: 'Happy Couples' },
              { icon: MapPin, number: '20+', label: 'Stunning Locations' },
              { icon: Award, number: '2', label: 'Countries Served' },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="font-serif text-4xl text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-primary/70 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Core Values</h2>

          <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto mb-16">
            Three pillars that guide our work and relationships with clients
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experience',
                description: 'We take pride in our craft and bring positive energy to every session, creating an atmosphere where authentic moments naturally unfold.',
                icon: '✦',
              },
              {
                title: 'Courtesy',
                description: 'Professionalism and respect form the foundation of our service, ensuring every step of your journey is handled with care.',
                icon: '❖',
              },
              {
                title: 'Flexibility',
                description: 'We adapt to changing circumstances and unique requirements, leveraging our skills to deliver exceptional results.',
                icon: '✧',
              },
            ].map((value, i) => (
              <div key={i} className="p-8">
                <div className="text-5xl text-secondary mb-6">{value.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{value.title}</h3>
                <p className="text-base leading-relaxed opacity-80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
