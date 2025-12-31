import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import { ArrowLeft, Users, Camera } from 'lucide-react';
import Image from 'next/image';
import { TeamMember } from '@/types';

export const metadata = {
  title: 'Manage Team - Admin',
  description: 'Manage team members',
};

export const dynamic = 'force-dynamic';

export default async function ManageTeamPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

  // Fetch all team members
  const { data: teamMembers } = await supabase
    .from('team_members')
    .select('*')
    .order('order', { ascending: true }) as { data: TeamMember[] | null };

  return (
    <div className="min-h-screen bg-tertiary">
      {/* Header */}
      <nav className="bg-primary text-tertiary py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 hover:text-secondary transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="font-serif text-2xl ml-auto">Manage Team</h1>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-primary/60 mb-1">Total Members</div>
            <div className="text-3xl font-bold text-blue-800">{teamMembers?.length || 0}</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow">
            <div className="text-sm text-primary/60 mb-1">With Photos</div>
            <div className="text-3xl font-bold text-green-800">
              {teamMembers?.filter(m => m.image_url).length || 0}
            </div>
          </div>
        </div>

        {/* Add New Button */}
        <div className="mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-blue-800">
            <p className="text-sm">
              <strong>Note:</strong> To add or edit team members, use the Supabase dashboard.
              You can upload member photos to Cloudinary and update the records in the database.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-tertiary">
            <h2 className="font-serif text-2xl">Team Members</h2>
          </div>

          {teamMembers && teamMembers.length > 0 ? (
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="bg-tertiary rounded-xl overflow-hidden shadow hover:shadow-xl transition-all"
                  >
                    {/* Photo */}
                    <div className="relative aspect-square bg-gradient-to-br from-accent to-primary">
                      {member.image_url ? (
                        <Image
                          src={member.image_url}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Camera className="text-white/50" size={64} />
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2">{member.name}</h3>
                      <p className="text-accent font-medium text-sm mb-3">{member.role}</p>
                      {member.bio && (
                        <p className="text-primary/70 text-sm leading-relaxed">{member.bio}</p>
                      )}
                      <div className="mt-4 pt-4 border-t border-tertiary/50">
                        <div className="flex items-center justify-between text-xs text-primary/50">
                          <span>Order: {member.order}</span>
                          <span>{new Date(member.created_at).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center text-primary/60">
              <Users size={64} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg mb-2">No team members yet</p>
              <p className="text-sm">Add members through Supabase dashboard</p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-serif text-xl mb-4">How to Manage Team Members</h3>

          <div className="mb-6">
            <h4 className="font-medium text-primary mb-3">Add New Member:</h4>
            <ol className="space-y-3 text-primary/80">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">1</span>
                <span>Upload member photo to Cloudinary (optional)</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">2</span>
                <span>Go to Supabase Dashboard → Table Editor → team_members</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">3</span>
                <span>Click &quot;Insert row&quot; and fill in: name, role, bio, image_url (optional), order</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white text-sm flex items-center justify-center">4</span>
                <span>Save and refresh this page to see the new team member</span>
              </li>
            </ol>
          </div>

          <div>
            <h4 className="font-medium text-primary mb-3">Edit or Delete:</h4>
            <ul className="space-y-2 text-primary/80">
              <li className="flex gap-2">
                <span>•</span>
                <span>Go to Supabase Dashboard → Table Editor → team_members</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Click on any row to edit the details or delete the member</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Changes will appear immediately after refreshing this page</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Current Team Preview */}
        {teamMembers && teamMembers.length > 0 && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-serif text-xl mb-4">Team Overview</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-tertiary/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-sm font-medium">Order</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Name</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Role</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Photo</th>
                    <th className="text-left py-3 px-4 text-sm font-medium">Added</th>
                  </tr>
                </thead>
                <tbody>
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="border-b border-tertiary/50">
                      <td className="py-3 px-4 font-medium">{member.order}</td>
                      <td className="py-3 px-4">{member.name}</td>
                      <td className="py-3 px-4 text-sm text-primary/70">{member.role}</td>
                      <td className="py-3 px-4">
                        {member.image_url ? (
                          <span className="text-green-600 text-sm">✓ Yes</span>
                        ) : (
                          <span className="text-red-600 text-sm">✗ No</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-primary/60">
                        {new Date(member.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
