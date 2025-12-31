import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Image as ImageIcon, Users, LogOut, Mail } from 'lucide-react';
import { Booking } from '@/types';

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch statistics
  const { count: totalBookings } = await supabase
    .from('bookings')
    .select('*', { count: 'exact', head: true });

  const { count: pendingBookings } = await supabase
    .from('bookings')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'pending');

  const { count: portfolioCount } = await supabase
    .from('portfolio_items')
    .select('*', { count: 'exact', head: true });

  const { count: teamCount } = await supabase
    .from('team_members')
    .select('*', { count: 'exact', head: true });

  // Fetch recent bookings
  const { data: recentBookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5) as { data: Booking[] | null };

  return (
    <div className="min-h-screen bg-tertiary">
      {/* Header */}
      <nav className="bg-primary text-tertiary py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-4">
          <Image
            src="/mavis-logo.svg"
            alt="Mavis Studio"
            width={40}
            height={48}
            className="brightness-0 invert"
          />
          <div>
            <h1 className="font-serif text-2xl">Mavis Studio Admin</h1>
            <p className="text-xs text-secondary">Welcome, {user.email}</p>
          </div>
        </div>
        <form action="/api/auth/signout" method="post">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary/10 hover:bg-tertiary/20 transition-colors"
          >
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </form>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Calendar className="text-secondary" size={24} />
              </div>
              <div>
                <p className="text-sm text-primary/60">Total Bookings</p>
                <p className="text-3xl font-serif text-primary">{totalBookings || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Mail className="text-accent" size={24} />
              </div>
              <div>
                <p className="text-sm text-primary/60">Pending</p>
                <p className="text-3xl font-serif text-primary">{pendingBookings || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <ImageIcon className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-sm text-primary/60">Portfolio Items</p>
                <p className="text-3xl font-serif text-primary">{portfolioCount || 0}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Users className="text-secondary" size={24} />
              </div>
              <div>
                <p className="text-sm text-primary/60">Team Members</p>
                <p className="text-3xl font-serif text-primary">{teamCount || 0}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/admin/bookings"
            className="bg-gradient-to-br from-primary to-primary-light text-tertiary p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
          >
            <Calendar className="mx-auto mb-4" size={40} />
            <h3 className="font-serif text-2xl mb-2">Manage Bookings</h3>
            <p className="text-sm opacity-90">View and update booking requests</p>
          </Link>

          <Link
            href="/admin/portfolio"
            className="bg-gradient-to-br from-secondary to-accent text-primary p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
          >
            <ImageIcon className="mx-auto mb-4" size={40} />
            <h3 className="font-serif text-2xl mb-2">Manage Portfolio</h3>
            <p className="text-sm opacity-90">Upload and organize portfolio images</p>
          </Link>

          <Link
            href="/admin/team"
            className="bg-gradient-to-br from-accent to-primary text-tertiary p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all text-center"
          >
            <Users className="mx-auto mb-4" size={40} />
            <h3 className="font-serif text-2xl mb-2">Manage Team</h3>
            <p className="text-sm opacity-90">Update team member information</p>
          </Link>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="font-serif text-2xl mb-6">Recent Bookings</h2>
          {recentBookings && recentBookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-tertiary">
                    <th className="text-left py-3 px-4 text-sm font-medium text-primary/70">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-primary/70">Email</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-primary/70">Package</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-primary/70">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-primary/70">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map((booking) => (
                    <tr key={booking.id} className="border-b border-tertiary/50 hover:bg-tertiary/30">
                      <td className="py-4 px-4">{booking.name}</td>
                      <td className="py-4 px-4 text-sm">{booking.email}</td>
                      <td className="py-4 px-4 text-sm">{booking.package_type.replace('_', ' ')}</td>
                      <td className="py-4 px-4 text-sm">
                        {booking.preferred_date || 'Not specified'}
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            booking.status === 'pending'
                              ? 'bg-accent/20 text-accent'
                              : booking.status === 'confirmed'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'completed'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-red-100 text-red-800'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-center py-8 text-primary/60">No bookings yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
