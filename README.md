# Mavis Studio - Pre-Wedding Photography Website

A professional Next.js 15 website for Mavis Studio, a pre-wedding photography business based in Chiang Mai, Thailand. Built with TypeScript, Tailwind CSS, Supabase, and modern web technologies.

## Features

### Frontend
- ✨ Modern, responsive design with smooth animations
- 📱 Mobile-first approach with full responsive support
- 🎨 Custom color palette matching brand identity
- 🌍 Multi-language support (English, Chinese, Thai) - ready for implementation
- 💱 Multi-currency display (THB, CNY, SGD)
- 🖼️ Dynamic portfolio gallery
- 👥 Team member showcase
- 📧 Contact form with real-time validation

### Backend
- 🗄️ Supabase for database and authentication
- 📨 Resend for email notifications
- 🖼️ Cloudinary for image management
- 🔐 Secure admin dashboard
- 📊 Booking management system
- ✅ Form validation with Zod

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Email:** Resend
- **Images:** Cloudinary
- **Icons:** Lucide React
- **Form Validation:** React Hook Form + Zod
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Cloudinary account
- Resend account (for emails)

### Installation

1. **Clone or use this repository**
   ```bash
   cd mavis-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Fill in your credentials:
   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

   # Cloudinary
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret

   # Resend
   RESEND_API_KEY=your-resend-api-key
   RESEND_FROM_EMAIL=noreply@yourdomain.com

   # Admin
   ADMIN_EMAIL=admin@mavisstudio.com

   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up Supabase database**

   a. Go to your Supabase project's SQL Editor

   b. Copy the contents of `supabase-schema.sql`

   c. Run the SQL script to create tables and policies

5. **Create an admin user in Supabase**

   a. Go to Authentication > Users in Supabase dashboard

   b. Click "Add user" > "Create new user"

   c. Enter email and password for admin access

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
mavis-website/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── admin/               # Admin dashboard
│   │   ├── dashboard/       # Main dashboard
│   │   └── login/           # Admin login
│   ├── api/                 # API routes
│   │   └── bookings/        # Booking endpoints
│   ├── contact/             # Contact page with form
│   ├── portfolio/           # Portfolio gallery
│   ├── services/            # Services & packages
│   ├── team/                # Team members
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable components
│   ├── Footer.tsx
│   └── Navigation.tsx
├── lib/                     # Utility functions
│   ├── supabase/            # Supabase clients
│   ├── utils.ts             # Helper functions
│   └── validations.ts       # Zod schemas
├── types/                   # TypeScript types
│   ├── index.ts
│   └── supabase.ts
├── public/                  # Static assets
├── html-backup/             # Original HTML files
├── supabase-schema.sql      # Database schema
├── tailwind.config.ts       # Tailwind configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Dependencies
```

## Key Pages

### Public Pages
- **Home** (`/`) - Hero section, about preview, services, values
- **About** (`/about`) - Full story, statistics, values
- **Services** (`/services`) - Package details, booking process
- **Portfolio** (`/portfolio`) - Photo gallery
- **Team** (`/team`) - Team member profiles
- **Contact** (`/contact`) - Booking form with validation

### Admin Pages
- **Login** (`/admin/login`) - Admin authentication
- **Dashboard** (`/admin/dashboard`) - Overview and statistics
- **Bookings** - Manage customer bookings (to be implemented)
- **Portfolio** - Upload and manage photos (to be implemented)
- **Team** - Manage team members (to be implemented)

## Database Schema

### Tables

1. **bookings**
   - Customer booking requests
   - Fields: name, email, phone, package_type, status, etc.

2. **portfolio_items**
   - Photography portfolio images
   - Fields: title, description, image_url, category, featured

3. **team_members**
   - Team photographer profiles
   - Fields: name, role, bio, image_url

See `supabase-schema.sql` for complete schema with RLS policies.

## API Routes

### POST `/api/bookings`
Create a new booking request
- Validates input with Zod
- Stores in Supabase
- Sends email notifications via Resend

### GET `/api/bookings`
Fetch bookings (admin only)
- Requires authentication
- Supports filtering by status

## Styling

The website uses a custom color palette:
- **Primary:** #1F4045 (Deep teal)
- **Secondary:** #D0AE8A (Gold/beige)
- **Tertiary:** #EDE5D3 (Cream)
- **Accent:** #7F9492 (Sage green)

Typography:
- **Headings:** Cinzel (serif)
- **Body:** Poppins (sans-serif)

## Deployment

### Deploy to Vercel

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables (same as .env.local)
   - Deploy

3. **Update Supabase URLs**
   - Add your Vercel domain to Supabase Auth redirect URLs
   - Update NEXT_PUBLIC_APP_URL to your production URL

### Post-Deployment

1. Test all forms and features
2. Set up custom domain (if available)
3. Configure email DNS records for Resend
4. Test admin dashboard functionality
5. Add sample portfolio items and team members

## To-Do / Future Enhancements

### High Priority
- [ ] Implement full admin CRUD for bookings
- [ ] Add portfolio upload interface with Cloudinary
- [ ] Implement team member management
- [ ] Add multi-language support with next-intl
- [ ] Create email templates for better formatting

### Medium Priority
- [ ] Add image optimization and lazy loading
- [ ] Implement search and filters for admin
- [ ] Add analytics integration (Google Analytics)
- [ ] Create sitemap and SEO optimization
- [ ] Add loading states and error boundaries

### Nice to Have
- [ ] WhatsApp/LINE integration for bookings
- [ ] Customer portal to view their photos
- [ ] Calendar integration for availability
- [ ] Payment processing integration
- [ ] Blog/news section
- [ ] Review/testimonials system

## Support

For questions or issues:
- Check the documentation
- Review environment variables
- Check Supabase logs for database errors
- Check Vercel logs for deployment issues

## License

Private - Mavis Studio © 2025

---

Built with ❤️ for Mavis Studio - Where Every Moment Has a Song
