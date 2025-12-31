-- Mavis Studio Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  preferred_date DATE,
  package_type TEXT NOT NULL CHECK (package_type IN ('half_day', 'full_day', 'custom')),
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled', 'completed')),
  currency TEXT NOT NULL DEFAULT 'THB' CHECK (currency IN ('THB', 'CNY', 'SGD')),
  notes TEXT
);

-- Portfolio items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  cloudinary_id TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'general',
  featured BOOLEAN DEFAULT false,
  "order" INTEGER DEFAULT 0
);

-- Team members table
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  "order" INTEGER DEFAULT 0
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON portfolio_items(featured) WHERE featured = true;
CREATE INDEX IF NOT EXISTS idx_portfolio_order ON portfolio_items("order");
CREATE INDEX IF NOT EXISTS idx_team_order ON team_members("order");

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Public read access for portfolio and team
CREATE POLICY "Public can view portfolio items" ON portfolio_items
  FOR SELECT USING (true);

CREATE POLICY "Public can view team members" ON team_members
  FOR SELECT USING (true);

-- Public can insert bookings
CREATE POLICY "Public can create bookings" ON bookings
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can update/delete
CREATE POLICY "Authenticated can manage bookings" ON bookings
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated can manage portfolio" ON portfolio_items
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated can manage team" ON team_members
  FOR ALL USING (auth.role() = 'authenticated');

-- Insert sample team members
INSERT INTO team_members (name, role, bio, "order") VALUES
('Nonthawat Pinchai', 'Co-Founder & Lead Photographer', 'Passionate about capturing authentic moments and beautiful landscapes.', 1),
('Benyapa Varalert', 'Co-Founder & Creative Director', 'Specializes in creative direction and styling for memorable photoshoots.', 2)
ON CONFLICT DO NOTHING;

-- Comments for documentation
COMMENT ON TABLE bookings IS 'Stores customer booking requests for photo sessions';
COMMENT ON TABLE portfolio_items IS 'Stores portfolio photos displayed on the website';
COMMENT ON TABLE team_members IS 'Stores information about team members';
