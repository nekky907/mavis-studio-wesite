# Mavis Studio Website - Quick Start

## ✅ What's Been Built

A complete, professional Next.js website with:
- 6 public pages (Home, About, Services, Portfolio, Team, Contact)
- Admin dashboard with authentication
- Functional booking form with email notifications
- Database integration with Supabase
- Responsive design with Tailwind CSS
- Professional icons (no emojis)
- Multi-currency support (THB, CNY, SGD)

## 🚀 Start Development (3 Steps)

### Step 1: Install
```bash
npm install
```

### Step 2: Configure

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
SUPABASE_SERVICE_ROLE_KEY=your-key
RESEND_API_KEY=your-key
RESEND_FROM_EMAIL=noreply@example.com
ADMIN_EMAIL=admin@mavisstudio.com
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 3: Database Setup
1. Open Supabase SQL Editor
2. Run `supabase-schema.sql`
3. Create admin user in Authentication

### Step 4: Run
```bash
npm run dev
```

Visit: http://localhost:3000

## 📂 Key Files

### Pages
- `app/page.tsx` - Home page
- `app/contact/page.tsx` - Booking form
- `app/admin/dashboard/page.tsx` - Admin panel

### API
- `app/api/bookings/route.ts` - Booking endpoint

### Config
- `tailwind.config.ts` - Custom theme
- `lib/supabase/` - Database clients
- `lib/validations.ts` - Form schemas

## 🎯 Key Features

### Frontend
✓ Responsive navigation with mobile menu
✓ Animated hero sections
✓ Package comparison cards
✓ Contact form with validation
✓ Portfolio grid (dynamic from DB)
✓ Team showcase (dynamic from DB)

### Backend
✓ Supabase PostgreSQL database
✓ Row Level Security (RLS) policies
✓ Admin authentication
✓ Email notifications via Resend
✓ Form validation with Zod

### Admin
✓ Login page (`/admin/login`)
✓ Dashboard with stats (`/admin/dashboard`)
✓ View recent bookings
✓ Protected routes

## 🎨 Color Palette

```css
Primary:   #1F4045 (Deep Teal)
Secondary: #D0AE8A (Gold)
Tertiary:  #EDE5D3 (Cream)
Accent:    #7F9492 (Sage)
```

## 📋 To-Do Items

### Required Before Launch
- [ ] Set up Supabase project
- [ ] Set up Resend account
- [ ] Set up Cloudinary account
- [ ] Add environment variables
- [ ] Run database schema
- [ ] Create admin user
- [ ] Test booking form
- [ ] Add portfolio images
- [ ] Update team information

### Optional Enhancements
- [ ] Implement multi-language (i18n setup ready)
- [ ] Add portfolio upload UI in admin
- [ ] Add booking management CRUD in admin
- [ ] Add team member management in admin
- [ ] Integrate Google Maps
- [ ] Add analytics
- [ ] Add SEO metadata

## 🔧 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Email | Resend |
| Images | Cloudinary |
| Icons | Lucide React |
| Forms | React Hook Form |
| Validation | Zod |
| Hosting | Vercel |

## 📱 Pages Overview

### Public Pages
1. **Home** - Hero, about preview, packages, values
2. **About** - Company story, stats, values
3. **Services** - Package details, booking process
4. **Portfolio** - Photo gallery (from database)
5. **Team** - Photographer profiles (from database)
6. **Contact** - Booking form with validation

### Admin Pages
1. **Login** - Authentication page
2. **Dashboard** - Stats and recent bookings

## 🗄️ Database Tables

1. **bookings** - Customer booking requests
   - Fields: name, email, phone, package_type, status, etc.

2. **portfolio_items** - Portfolio photos
   - Fields: title, description, image_url, category, featured

3. **team_members** - Team information
   - Fields: name, role, bio, image_url

## 📧 Email System

When a booking is submitted:
1. Customer receives confirmation email
2. Admin receives notification email
3. Booking saved to database

## 🔒 Security Features

- Row Level Security (RLS) on all tables
- Admin authentication required for dashboard
- Form validation on client and server
- Environment variables for sensitive data
- HTTPS enforced in production

## 🚢 Deployment

See `DEPLOYMENT.md` for full guide.

Quick deploy to Vercel:
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

## 📞 Support

- **Documentation:** README.md (detailed)
- **Setup Guide:** SETUP.md (step-by-step)
- **Deployment:** DEPLOYMENT.md (production)

## 🎉 You're Ready!

Everything is set up and ready to go. Just follow the steps above and your website will be live!

---

Built for Mavis Studio - Where Every Moment Has a Song ✨
