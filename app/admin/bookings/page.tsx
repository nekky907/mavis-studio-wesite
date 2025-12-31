import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail, Phone, Calendar, Package } from 'lucide-react';
import { Booking } from '@/types';

export const metadata = {
  title: 'Manage Bookings - Admin',
  description: 'Manage customer bookings',
};

export const dynamic = 'force-dynamic';

export default async function ManageBookingsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch all bookings
  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false }) as { data: Booking[] | null };

  return (
    <div className="min-h-screen bg-tertiary">
      {/* Header */}
      <nav className="bg-primary text-tertiary py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Image
            src="/mavis-logo.svg"
            alt="Mavis Studio"
            width={50}
            height={60}
            className="brightness-0 invert"
          />
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="font-serif text-2xl ml-auto">Manage Bookings</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total', count: bookings?.length || 0, color: 'bg-blue-100 text-blue-800' },
            { label: 'Pending', count: bookings?.filter(b => b.status === 'pending').length || 0, color: 'bg-yellow-100 text-yellow-800' },
            { label: 'Confirmed', count: bookings?.filter(b => b.status === 'confirmed').length || 0, color: 'bg-green-100 text-green-800' },
            { label: 'Completed', count: bookings?.filter(b => b.status === 'completed').length || 0, color: 'bg-purple-100 text-purple-800' },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow">
              <div className="text-sm text-primary/60 mb-1">{stat.label}</div>
              <div className={`text-3xl font-bold ${stat.color.split(' ')[1]}`}>{stat.count}</div>
            </div>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-tertiary">
            <h2 className="font-serif text-2xl">All Bookings</h2>
          </div>

          {bookings && bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-tertiary/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Date</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Name</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Package</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Preferred Date</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-medium text-primary/70">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-tertiary/50 hover:bg-tertiary/20">
                      <td className="py-4 px-6 text-sm">
                        {new Date(booking.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6">
                        <div className="font-medium">{booking.name}</div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail size={14} className="text-primary/50" />
                            {booking.email}
                          </div>
                          {booking.phone && (
                            <div className="flex items-center gap-2">
                              <Phone size={14} className="text-primary/50" />
                              {booking.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <Package size={16} className="text-accent" />
                          <span className="capitalize">{booking.package_type.replace('_', ' ')}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm">
                        {booking.preferred_date ? (
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-primary/50" />
                            {new Date(booking.preferred_date).toLocaleDateString()}
                          </div>
                        ) : (
                          <span className="text-primary/40">Not specified</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'pending'
                              ? 'bg-yellow-100 text-yellow-800'
                              : booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'completed'
                              ? 'bg-purple-100 text-purple-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium">{booking.currency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-primary/60">
              <p className="text-lg">No bookings yet</p>
            </div>
          )}
        </div>

        {/* Notes Section */}
        {bookings && bookings.some(b => b.message) && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-serif text-xl mb-4">Booking Messages</h3>
            <div className="space-y-4">
              {bookings
                .filter(b => b.message)
                .map((booking) => (
                  <div key={booking.id} className="border-l-4 border-accent pl-4 py-2">
                    <div className="font-medium text-sm text-primary/70 mb-1">
                      {booking.name} - {new Date(booking.created_at).toLocaleDateString()}
                    </div>
                    <p className="text-primary/80">{booking.message}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
