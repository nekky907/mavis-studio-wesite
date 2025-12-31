export interface Booking {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  package_type: 'half_day' | 'full_day' | 'custom';
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  currency: string;
  notes?: string;
}

export interface PortfolioItem {
  id: string;
  created_at: string;
  title: string;
  description?: string;
  image_url: string;
  cloudinary_id: string;
  category: string;
  featured: boolean;
  order: number;
}

export interface TeamMember {
  id: string;
  created_at: string;
  name: string;
  role: string;
  bio?: string;
  image_url?: string;
  order: number;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone?: string;
  preferred_date?: string;
  package_type: 'half_day' | 'full_day' | 'custom';
  message?: string;
  currency?: string;
}

export type Locale = 'en' | 'zh' | 'th';

export type Currency = 'THB' | 'CNY' | 'SGD';
