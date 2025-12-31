import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { createClient } from '@/lib/supabase/server';
import { TeamMember } from '@/types';
import { TeamContent } from './TeamContent';

export const metadata = {
  title: 'Our Team - Mavis Studio',
  description: 'Meet the talented photographers behind Mavis Studio in Chiang Mai, Thailand.',
};

export const revalidate = 3600;

export default async function TeamPage() {
  const supabase = await createClient();

  const { data: teamMembers } = await supabase
    .from('team_members')
    .select('*')
    .order('order', { ascending: true }) as { data: TeamMember[] | null };

  return (
    <div className="bg-tertiary text-primary">
      <Navigation />
      <TeamContent teamMembers={teamMembers} />
      <Footer />
    </div>
  );
}
