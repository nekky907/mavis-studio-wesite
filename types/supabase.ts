export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bookings: {
        Row: {
          id: string
          created_at: string
          name: string
          email: string
          phone: string | null
          preferred_date: string | null
          package_type: 'half_day' | 'full_day' | 'custom'
          message: string | null
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          currency: string
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          email: string
          phone?: string | null
          preferred_date?: string | null
          package_type: 'half_day' | 'full_day' | 'custom'
          message?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          currency?: string
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          email?: string
          phone?: string | null
          preferred_date?: string | null
          package_type?: 'half_day' | 'full_day' | 'custom'
          message?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          currency?: string
          notes?: string | null
        }
      }
      portfolio_items: {
        Row: {
          id: string
          created_at: string
          title: string
          description: string | null
          image_url: string
          cloudinary_id: string
          category: string
          featured: boolean
          order: number
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          description?: string | null
          image_url: string
          cloudinary_id: string
          category?: string
          featured?: boolean
          order?: number
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          description?: string | null
          image_url?: string
          cloudinary_id?: string
          category?: string
          featured?: boolean
          order?: number
        }
      }
      team_members: {
        Row: {
          id: string
          created_at: string
          name: string
          role: string
          bio: string | null
          image_url: string | null
          order: number
        }
        Insert: {
          id?: string
          created_at?: string
          name: string
          role: string
          bio?: string | null
          image_url?: string | null
          order?: number
        }
        Update: {
          id?: string
          created_at?: string
          name?: string
          role?: string
          bio?: string | null
          image_url?: string | null
          order?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
