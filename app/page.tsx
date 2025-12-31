import Link from 'next/link';
import { Camera, MapPin, Users, Award, ChevronDown } from 'lucide-react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="bg-tertiary text-primary overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="grain min-h-screen flex items-center justify-center relative bg-gradient-to-br from-tertiary via-tertiary-light to-tertiary overflow-hidden px-4 pt-20">
        {/* Decorative Elements */}
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] animate-float" />
        <div className="absolute bottom-[15%] left-[5%] w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[100px] animate-float" style={{ animationDelay: '2s' }} />

        <div className="max-w-5xl text-center z-10">
          <div className="text-4xl text-secondary mb-8 opacity-60 animate-fade-in">✦</div>

          <h1 className="font-serif text-5xl md:text-7xl mb-8 leading-tight animate-slide-up">
            Where Every Moment<br />
            <span className="text-accent">Has a Song</span>
          </h1>

          <div className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed opacity-80 italic animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-secondary text-2xl mx-4">❝</span>
            A bird doesn&apos;t sing because it has an answer.<br />
            It sings because it has a song.
            <span className="text-secondary text-2xl mx-4">❞</span>
          </div>

          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12 opacity-85 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Capturing your pre-wedding moments in the enchanting landscapes of Chiang Mai, Thailand.
            We create memories that resonate with beauty, just like a songbird&apos;s melody.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full bg-primary text-tertiary font-medium text-base tracking-wide shadow-2xl shadow-primary/30 hover:bg-primary-light hover:shadow-3xl hover:-translate-y-1 transition-all"
            >
              Explore Our Packages
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 rounded-full border-2 border-primary bg-transparent text-primary font-medium text-base tracking-wide hover:bg-primary hover:text-tertiary hover:-translate-y-1 transition-all"
            >
              View Portfolio
            </Link>
          </div>

          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <ChevronDown className="mx-auto text-accent animate-float opacity-60" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="text-xs tracking-[0.15em] text-secondary mb-4 font-medium uppercase">
              About Mavis Studio
            </div>

            <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
              Memorial Creators<br />
              <span className="text-accent">Since 2023</span>
            </h2>

            <p className="text-base leading-relaxed mb-6 opacity-85">
              Founded by Nonthawat Pinchai and Benyapa Varalert, Mavis Studio brings a fresh perspective
              to pre-wedding photography in Chiang Mai, Thailand. We specialize in serving international
              couples from China and Singapore who dream of capturing their love story against Thailand&apos;s
              stunning landscapes.
            </p>

            <p className="text-base leading-relaxed mb-8 opacity-85">
              Just as a songbird sings not because it has an answer but because it has a song, we create
              not just because we can, but because we have a vision. Every moment is decorated with
              beautiful details, every step in your journey crafted with care.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {[
                { icon: Users, label: '5 Professional Photographers', value: 'MavTeam' },
                { icon: MapPin, label: 'Based in Chiang Mai', value: 'Thailand' },
                { icon: Award, label: 'International Clients', value: 'China & Singapore' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider text-accent uppercase mb-1">
                      {item.label}
                    </div>
                    <div className="font-semibold text-lg">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-tertiary text-lg italic p-12 text-center">
              &quot;Your beautiful couple photography<br />will be displayed here&quot;
            </div>

            {/* Decorative Frames */}
            <div className="absolute -top-5 -right-5 w-36 h-36 border-3 border-secondary rounded-3xl opacity-50" />
            <div className="absolute -bottom-5 -left-5 w-36 h-36 border-3 border-secondary rounded-3xl opacity-50" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="grain py-24 px-4 bg-gradient-to-br from-primary to-primary-light text-tertiary relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs tracking-[0.15em] text-secondary mb-4 font-medium uppercase">
            Our Photography Packages
          </div>

          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            Create Your Perfect Memory
          </h2>

          <p className="text-lg leading-relaxed opacity-90 max-w-3xl mx-auto mb-16">
            From intimate half-day sessions to comprehensive full-day experiences,
            we offer tailored packages to capture your unique love story.
          </p>

          {/* Package Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Half Day Package */}
            <div className="bg-tertiary/5 backdrop-blur-lg border border-secondary/20 rounded-3xl p-10 text-left hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="text-xs tracking-[0.15em] text-secondary mb-4 font-medium uppercase">
                Half Day Experience
              </div>

              <h3 className="font-serif text-4xl mb-2">40,000 - 50,000 ฿</h3>

              <div className="h-0.5 w-16 bg-gradient-to-r from-secondary to-transparent my-6" />

              <ul className="space-y-3 text-base opacity-90 mb-8">
                <li>✦ 4 hours photographer service</li>
                <li>✦ 2 shooting locations</li>
                <li>✦ 1 gown & 1 suit styling</li>
                <li>✦ 10-15 edited photos</li>
                <li>✦ Hotel & transportation</li>
                <li>✦ Professional makeup artist</li>
              </ul>

              <Link
                href="/services"
                className="block w-full py-4 rounded-full border-2 border-secondary text-secondary text-center font-medium tracking-wide hover:bg-secondary hover:text-primary transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Full Day Package */}
            <div className="bg-gradient-to-br from-secondary to-accent rounded-3xl p-10 text-left relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="absolute top-4 right-4 bg-primary text-tertiary px-4 py-2 rounded-full text-[10px] tracking-wider font-semibold uppercase">
                Most Popular
              </div>

              <div className="text-xs tracking-[0.15em] text-primary mb-4 font-medium uppercase">
                Full Day Experience
              </div>

              <h3 className="font-serif text-4xl mb-2 text-primary">70,000 - 100,000 ฿</h3>

              <div className="h-0.5 w-16 bg-gradient-to-r from-primary to-transparent my-6" />

              <ul className="space-y-3 text-base text-primary mb-8">
                <li>✦ 8-10 hours photographer service</li>
                <li>✦ 2-4 shooting locations</li>
                <li>✦ 2-3 style gown & suit changes</li>
                <li>✦ 15+ edited photos</li>
                <li>✦ Hotel & transportation</li>
                <li>✦ Professional makeup artist</li>
                <li>✦ Dinner included</li>
                <li>✦ Physical albums & prints</li>
              </ul>

              <Link
                href="/services"
                className="block w-full py-4 rounded-full bg-primary text-tertiary text-center font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                Book This Package
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-4 bg-tertiary">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
            Our Keys to Excellence
          </h2>

          <p className="text-lg leading-relaxed opacity-80 max-w-3xl mx-auto mb-16">
            Three essential elements guide every step of your journey with us
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experience',
                description: 'Always take pride in your job and create positive energy to motivate everyone involved.',
                icon: '✦',
              },
              {
                title: 'Courtesy',
                description: 'Good manners and proper conduct support the completion of every step in the journey.',
                icon: '❖',
              },
              {
                title: 'Flexibility',
                description: 'Understand circumstances and quickly adapt skills to achieve efficiency and effectiveness.',
                icon: '✧',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all">
                <div className="text-5xl text-secondary mb-6">{item.icon}</div>
                <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
                <p className="text-base leading-relaxed opacity-80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
