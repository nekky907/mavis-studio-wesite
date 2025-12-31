'use client';

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema, type BookingInput } from '@/lib/validations';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      package_type: 'full_day',
      currency: 'THB',
    },
  });

  const onSubmit = async (data: BookingInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit booking');

      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Booking submission error:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary to-primary-light text-tertiary px-4 pt-32 pb-24 text-center">
        <div>
          <div className="text-xs tracking-[0.15em] text-secondary mb-6 font-medium uppercase">
            Get in Touch
          </div>

          <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">
            Let&apos;s Create<br />
            <span className="text-secondary">Beautiful Memories</span>
          </h1>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
            We&apos;re excited to hear from you and discuss your pre-wedding photography
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Send Us a Message</h2>
            <p className="text-base opacity-80 mb-8">
              Fill out the form and we&apos;ll get back to you within 24 hours
            </p>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you! Your booking request has been submitted successfully. We&apos;ll contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-medium">Your Name *</label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Email Address *</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Phone Number</label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors"
                  placeholder="+66 XX XXX XXXX"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Preferred Date</label>
                <input
                  {...register('preferred_date')}
                  type="date"
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Package Interest *</label>
                <select
                  {...register('package_type')}
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors bg-white"
                >
                  <option value="half_day">Half Day Package</option>
                  <option value="full_day">Full Day Package</option>
                  <option value="custom">Custom Package</option>
                </select>
                {errors.package_type && (
                  <p className="mt-1 text-sm text-red-600">{errors.package_type.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Currency Preference</label>
                <select
                  {...register('currency')}
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors bg-white"
                >
                  <option value="THB">Thai Baht (฿)</option>
                  <option value="CNY">Chinese Yuan (¥)</option>
                  <option value="SGD">Singapore Dollar (S$)</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-tertiary rounded-xl focus:border-secondary outline-none transition-colors resize-y"
                  placeholder="Tell us about your vision..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-tertiary font-medium tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">Contact Information</h2>
            <p className="text-base opacity-80 mb-8">
              We&apos;re here to answer any questions you may have
            </p>

            <div className="space-y-6">
              {[
                { icon: MapPin, title: 'Location', info: 'Chiang Mai, Thailand' },
                { icon: Mail, title: 'Email', info: 'Coming Soon' },
                { icon: Phone, title: 'Phone', info: 'Coming Soon' },
                { icon: Clock, title: 'Business Hours', info: 'To be announced' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-tertiary rounded-2xl border-l-4 border-secondary flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg mb-1">{item.title}</h4>
                    <p className="text-sm opacity-80">{item.info}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-10 p-8 bg-gradient-to-br from-accent to-primary rounded-2xl text-tertiary text-center">
              <h4 className="font-serif text-2xl mb-4">Follow Us</h4>
              <p className="text-sm opacity-90 mb-6">
                Stay connected with us on social media
              </p>
              <div className="flex gap-4 justify-center">
                {[
                  { icon: Instagram, label: 'Instagram' },
                  { icon: Facebook, label: 'Facebook' },
                ].map((platform, i) => (
                  <button
                    key={i}
                    className="w-12 h-12 rounded-full bg-tertiary/20 hover:bg-secondary flex items-center justify-center transition-all hover:-translate-y-1"
                    aria-label={platform.label}
                  >
                    <platform.icon size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-primary text-xl italic">
        &quot;Map of Chiang Mai will be displayed here&quot;
      </section>

      <Footer />
    </div>
  );
}
