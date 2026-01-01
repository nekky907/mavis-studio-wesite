-- Fix Supabase RLS permissions for bookings table
-- This script grants explicit permissions to the anon role and ensures policies work correctly

-- Step 1: Grant explicit INSERT permission to anon role
GRANT INSERT ON public.bookings TO anon;

-- Step 2: Grant SELECT, UPDATE, DELETE to authenticated role
GRANT SELECT ON public.bookings TO authenticated;
GRANT UPDATE ON public.bookings TO authenticated;
GRANT DELETE ON public.bookings TO authenticated;

-- Step 3: Grant USAGE on the sequence (for auto-incrementing IDs if applicable)
-- This is needed for INSERT operations
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Step 4: Verify the policies exist (these should already be created from previous script)
-- If not, they will be created here

-- Drop existing policies to recreate them
DROP POLICY IF EXISTS "bookings_insert_policy" ON public.bookings;
DROP POLICY IF EXISTS "bookings_select_policy" ON public.bookings;
DROP POLICY IF EXISTS "bookings_update_policy" ON public.bookings;
DROP POLICY IF EXISTS "bookings_delete_policy" ON public.bookings;

-- Create INSERT policy for anonymous and authenticated users
CREATE POLICY "bookings_insert_policy"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create SELECT policy for authenticated users only
CREATE POLICY "bookings_select_policy"
ON public.bookings
FOR SELECT
TO authenticated
USING (true);

-- Create UPDATE policy for authenticated users only
CREATE POLICY "bookings_update_policy"
ON public.bookings
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create DELETE policy for authenticated users only
CREATE POLICY "bookings_delete_policy"
ON public.bookings
FOR DELETE
TO authenticated
USING (true);

-- Step 5: Ensure RLS is enabled
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Step 6: Verify the setup (run these queries to check)
-- SELECT tablename, policyname, roles, cmd FROM pg_policies WHERE tablename = 'bookings';
-- SELECT grantee, privilege_type FROM information_schema.role_table_grants WHERE table_name = 'bookings';
