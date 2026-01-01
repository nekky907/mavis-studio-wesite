# Mavis Studio Website - Technical Documentation

## Project Overview

Mavis Studio is a professional pre-wedding photography service website based in Chiang Mai, Thailand. The website serves as both a marketing platform for potential clients and an admin dashboard for managing bookings, portfolio, and team members.

## Tech Stack

### Core Framework
- **Next.js 15.1.0** - React-based full-stack framework with App Router architecture
- **React 18.3.1** - UI library for building interactive components
- **TypeScript 5.7.3** - Static type checking for enhanced code quality

### Styling & UI
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS 8.4.49** - CSS processing tool
- **Autoprefixer 10.4.20** - Automatic vendor prefixing
- **@tailwindcss/typography 0.5.15** - Beautiful typography defaults
- **Framer Motion 11.15.0** - Animation library for smooth transitions
- **Lucide React 0.460.0** - Icon library
- **clsx 2.1.1** - Conditional className utility
- **tailwind-merge 2.5.5** - Merge Tailwind CSS classes without conflicts

### Backend & Database
- **Supabase (@supabase/supabase-js 2.39.3)** - PostgreSQL database with real-time capabilities
- **@supabase/ssr 0.5.2** - Server-side rendering support for Supabase

### Form Handling & Validation
- **React Hook Form 7.54.0** - Performant form management
- **Zod 3.24.1** - TypeScript-first schema validation
- **@hookform/resolvers 3.9.1** - Validation resolver for React Hook Form

### Internationalization
- **next-intl 3.26.3** - Internationalization library for Next.js
- Supports 3 languages: English (en), Thai (th), Chinese (zh)

### Email & Media
- **Resend 4.0.1** - Email API for transactional emails
- **Cloudinary 2.5.1** - Image and media management
- **date-fns 4.1.0** - Date manipulation library

### Development Tools
- **ESLint 8.57.1** - Code linting
- **eslint-config-next 15.1.0** - Next.js-specific ESLint configuration

## Project Structure

```
mavis-website/
├── app/                          # Next.js App Router pages
│   ├── admin/                    # Admin dashboard section
│   │   ├── bookings/            # Booking management page
│   │   ├── dashboard/           # Admin overview dashboard
│   │   ├── login/               # Admin authentication page
│   │   ├── portfolio/           # Portfolio management page
│   │   └── team/                # Team member management page
│   ├── api/                      # API routes
│   │   └── bookings/            # Booking API endpoints (GET, POST)
│   ├── about/                    # About page
│   ├── contact/                  # Contact form page
│   ├── portfolio/               # Portfolio gallery page
│   │   └── PortfolioContent.tsx # Client-side portfolio component
│   ├── services/                # Services and packages page
│   ├── team/                    # Team members page
│   │   └── TeamContent.tsx      # Client-side team component
│   ├── layout.tsx               # Root layout with fonts and providers
│   ├── page.tsx                 # Homepage
│   ├── providers.tsx            # Client-side providers wrapper
│   └── globals.css              # Global styles
├── components/                   # Reusable React components
│   ├── Footer.tsx               # Site footer
│   ├── HeroSlideshow.tsx        # Homepage hero slideshow
│   ├── LanguageSwitcher.tsx     # Language selection dropdown
│   └── Navigation.tsx           # Main navigation bar
├── i18n/                        # Internationalization
│   ├── config.ts                # i18n configuration
│   ├── request.ts               # Request configuration
│   └── messages/                # Translation files
│       ├── en.json              # English translations
│       ├── th.json              # Thai translations
│       └── zh.json              # Chinese translations
├── lib/                         # Utility libraries
│   ├── supabase/
│   │   ├── client.ts            # Browser-side Supabase client
│   │   └── server.ts            # Server-side Supabase client
│   ├── utils.ts                 # Utility functions
│   └── validations.ts           # Zod validation schemas
├── types/                       # TypeScript type definitions
│   ├── index.ts                 # Application types
│   └── supabase.ts              # Supabase database types
├── public/                      # Static assets
│   └── mavis-logo.svg          # Company logo
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Project dependencies
```

## Database Architecture

### Supabase Tables

#### 1. bookings
Stores customer booking requests.

**Columns:**
- id: string (UUID, primary key)
- created_at: string (timestamp)
- name: string (required)
- email: string (required)
- phone: string (optional)
- preferred_date: string (optional)
- package_type: enum ('half_day' | 'full_day' | 'custom')
- message: string (optional)
- status: enum ('pending' | 'confirmed' | 'cancelled' | 'completed')
- currency: string (THB, CNY, SGD)
- notes: string (optional, admin notes)

#### 2. portfolio_items
Stores photography portfolio images.

**Columns:**
- id: string (UUID, primary key)
- created_at: string (timestamp)
- title: string (required)
- description: string (optional)
- image_url: string (required, Cloudinary URL)
- cloudinary_id: string (required)
- category: string
- featured: boolean (default: false)
- order: number (for sorting)

#### 3. team_members
Stores team member information.

**Columns:**
- id: string (UUID, primary key)
- created_at: string (timestamp)
- name: string (required)
- role: string (required)
- bio: string (optional)
- image_url: string (optional)
- order: number (for sorting)

## Key Features & Functionality

### 1. Public Website

#### Homepage (app/page.tsx)
- Hero slideshow with 4 rotating images
- About section with company introduction
- Service preview with half-day and full-day packages
- Core values section
- Auto-playing slideshow with manual navigation controls
- Responsive design for mobile, tablet, and desktop

#### Navigation (components/Navigation.tsx)
- Fixed navigation bar with scroll detection
- Dynamic color scheme based on page background
- Mobile-responsive hamburger menu
- Language switcher integration
- Logo with SVG support
- Links: Home, About, Services, Portfolio, Team, Contact
- Call-to-action "Book Now" button

#### Hero Slideshow (components/HeroSlideshow.tsx)
- 4 high-quality images from Unsplash
- Auto-play every 5 seconds
- Previous/Next navigation arrows
- Dot indicators for manual slide selection
- Gradient overlay for text readability
- Animated text with fade-in and slide-up effects
- CTA buttons to Services and Portfolio pages

#### About Page (app/about/page.tsx)
- Company story and history
- Statistics showcase (5+ photographers, 100+ couples, 20+ locations, 2 countries)
- Core values: Experience, Courtesy, Flexibility
- Hero section with gradient background

#### Services Page (app/services/page.tsx)
- Two main photography packages:
  - Half Day Package (40,000 - 50,000 THB)
  - Full Day Package (70,000 - 100,000 THB, marked as "Most Popular")
- 5-step booking process visualization
- Important information section covering:
  - Timeline expectations
  - Payment terms
  - Cancellation policy
  - Weather contingency
  - Delivery schedule
  - Copyright information
- Call-to-action section

#### Portfolio Page (app/portfolio/page.tsx)
- Server-side data fetching from Supabase
- Revalidation every 3600 seconds (1 hour)
- Client-side PortfolioContent component for interactivity
- Gallery of photography work
- Fetches from portfolio_items table ordered by 'order' field

#### Team Page (app/team/page.tsx)
- Server-side data fetching from Supabase
- Revalidation every 3600 seconds (1 hour)
- Client-side TeamContent component for interactivity
- Team member profiles
- Fetches from team_members table ordered by 'order' field

#### Contact Page (app/contact/page.tsx)
- Contact form with React Hook Form and Zod validation
- Form fields:
  - Name (required)
  - Email (required)
  - Phone (optional)
  - Preferred Date (optional)
  - Package Type (required: half_day, full_day, custom)
  - Currency (THB, CNY, SGD)
  - Message (optional)
- Contact information display:
  - Location: Chiang Mai, Thailand
  - Email address
  - Phone number
  - Business hours
- Social media links (Instagram, Facebook)
- Map placeholder section
- Success/error message handling

#### Footer (components/Footer.tsx)
- Company name and tagline
- Navigation links
- Copyright notice with dynamic year
- Location information: Chiang Mai, Thailand

#### Language Switcher (components/LanguageSwitcher.tsx)
- Cookie-based language persistence (NEXT_LOCALE)
- Dropdown menu with 3 languages:
  - English (en)
  - Thai (th - ไทย)
  - Chinese (zh - 中文)
- Globe icon from Lucide
- Page refresh on language change

### 2. Admin Dashboard

#### Authentication Flow
- Login page at /admin/login
- Email/password authentication via Supabase Auth
- Protected routes redirect to login if not authenticated
- Sign out functionality

#### Admin Login (app/admin/login/page.tsx)
- Email and password input fields
- Supabase authentication integration
- Error handling and loading states
- Redirects to dashboard on success

#### Dashboard (app/admin/dashboard/page.tsx)
- Statistics overview:
  - Total bookings count
  - Pending bookings count
  - Portfolio items count
  - Team members count
- Quick action cards:
  - Manage Bookings
  - Manage Portfolio
  - Manage Team
- Recent bookings table with:
  - Name, Email, Package, Date, Status
  - Color-coded status badges
- Header with logo and sign-out button

#### Bookings Management (app/admin/bookings/page.tsx)
- View all booking requests
- Update booking status
- Filter by status
- View customer details
- Add admin notes

#### Portfolio Management (app/admin/portfolio/page.tsx)
- Upload new portfolio images to Cloudinary
- Edit portfolio item details
- Reorder portfolio items
- Mark items as featured
- Delete portfolio items

#### Team Management (app/admin/team/page.tsx)
- Add new team members
- Edit team member information
- Upload team member photos
- Reorder team members
- Remove team members

### 3. API Routes

#### POST /api/bookings
- Accepts booking form data
- Validates input with Zod schema
- Inserts booking into Supabase
- Sends two emails via Resend:
  1. Admin notification email with booking details
  2. Customer confirmation email
- Returns booking object with success status
- Error handling for validation and database errors

#### GET /api/bookings
- Requires authentication
- Fetches all bookings from database
- Supports status filtering via query parameter
- Returns array of booking objects
- Used by admin dashboard

## Styling & Design System

### Color Palette
Defined in tailwind.config.ts and globals.css:

- **Primary (#1F4045)** - Dark teal, used for headers and primary text
- **Primary Light (#2A5359)** - Lighter teal variant
- **Secondary (#D0AE8A)** - Gold/beige, used for accents and highlights
- **Secondary Light (#E5C9A6)** - Lighter gold variant
- **Tertiary (#EDE5D3)** - Cream/off-white, used for backgrounds
- **Tertiary Light (#F5F0E8)** - Lighter cream variant
- **Accent (#7F9492)** - Sage green, used for secondary accents
- **Accent Light (#9BB0AE)** - Lighter sage variant

### Typography
- **Sans-serif:** Poppins (weights: 300, 400, 500, 600, 700)
- **Serif:** Cinzel (weights: 400, 600, 700)
- Font variables: --font-poppins, --font-cinzel

### Custom Animations
- **float** - 6s ease-in-out infinite (vertical floating motion)
- **slide-up** - 1s ease-out forwards (upward entrance animation)
- **fade-in** - 1.2s ease-out forwards (opacity transition)

### Custom Utilities
- **grain** - Adds subtle noise texture overlay (3% opacity)
- **text-gradient** - Gradient text from secondary to accent colors

## Data Flow & Connections

### Client-Side Flow
1. User visits website → Next.js serves static/dynamic pages
2. Language selection → Cookie stored → Page refreshes with new locale
3. Navigation → Client-side routing via Next.js Link components
4. Form submission → React Hook Form validates → API call to /api/bookings

### Server-Side Flow
1. Homepage/Portfolio/Team pages → Server component fetches from Supabase
2. Data cached with revalidation (3600s for portfolio/team)
3. Admin pages check authentication → Supabase Auth verifies user
4. API routes process requests → Validate → Database operations → Email notifications

### Database Connections
- **Server components:** Use lib/supabase/server.ts (SSR client)
- **Client components:** Use lib/supabase/client.ts (browser client)
- **API routes:** Use lib/supabase/server.ts (server client)
- All clients connect to NEXT_PUBLIC_SUPABASE_URL with NEXT_PUBLIC_SUPABASE_ANON_KEY

### Email Flow
1. Booking form submitted → /api/bookings receives data
2. Data validated with Zod schema
3. Inserted into Supabase bookings table
4. Resend API sends two emails:
   - Admin notification (to ADMIN_EMAIL)
   - Customer confirmation (to customer email)
5. Email failures logged but don't fail the request

### Image Management
- Portfolio images hosted on Cloudinary
- Cloudinary IDs stored in database
- Image URLs configured in next.config.ts remote patterns
- Supports images from:
  - res.cloudinary.com
  - images.unsplash.com

## Internationalization (i18n)

### Configuration
- Default locale: English (en)
- Supported locales: en, th, zh
- Translation files in i18n/messages/
- Cookie-based locale persistence (NEXT_LOCALE)

### Implementation
1. RootLayout reads NEXT_LOCALE cookie
2. Loads corresponding messages JSON file
3. Wraps app in NextIntlClientProvider
4. Components use useTranslations() hook
5. Translation keys follow dot notation (e.g., 'home.hero.title')

### Translation Scope
All text content is internationalized:
- Navigation labels
- Page headings and descriptions
- Form labels and placeholders
- Service package details
- Footer content
- Admin dashboard (English only)

### Client Base Messaging
The website messaging has been updated to reflect Mavis Studio's inclusive client base:
- **Client Base**: "International & Local" (previously "China & Singapore")
- **Target Audience**: Both international and local couples from around the world
- **Updated in all languages**: English, Thai (ต่างชาติ และ คนไทย), Chinese (国际 & 本地)
- Reflects the studio's capability to serve diverse cultural backgrounds and nationalities

## Environment Variables

Required environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=<Supabase project URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<Supabase anonymous key>
SUPABASE_SERVICE_ROLE_KEY=<Supabase service role key (optional, for bypassing RLS on public bookings)>
RESEND_API_KEY=<Resend API key>
RESEND_FROM_EMAIL=<Sender email address>
ADMIN_EMAIL=<Admin notification email>
```

Note: The `SUPABASE_SERVICE_ROLE_KEY` is optional but recommended for production. If not provided, the API will fall back to using the anon key, which requires proper RLS policies to be configured.

## Build & Deployment

### Scripts
- `npm run dev` - Start development server (Next.js 15 dev)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Configuration Notes
- ESLint errors ignored during builds (ignoreDuringBuilds: true)
- TypeScript strict mode enabled
- Module resolution: bundler
- JSX preserved for Next.js processing

## Security Features

1. **Authentication:** Supabase Auth for admin access
2. **Route Protection:** Server-side authentication checks redirect unauthorized users
3. **Input Validation:** Zod schemas validate all form inputs
4. **SQL Injection Prevention:** Supabase client handles parameterization
5. **Environment Variables:** Sensitive keys stored in .env files
6. **CORS:** Next.js API routes handle CORS automatically

## Performance Optimizations

1. **Static Generation:** Homepage and static pages pre-rendered
2. **Incremental Static Regeneration:** Portfolio/team pages revalidate every hour
3. **Image Optimization:** Next.js Image component with priority loading
4. **Code Splitting:** Automatic code splitting via Next.js
5. **Font Optimization:** Google Fonts loaded with display: swap
6. **CSS Purging:** Tailwind CSS removes unused styles in production

## Responsive Design

All pages fully responsive with breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (sm to lg)
- Desktop: > 1024px (lg+)

Mobile-specific features:
- Hamburger menu in navigation
- Stacked layouts for cards and grids
- Adjusted font sizes and spacing
- Touch-friendly button sizes

## SEO Optimization

### Sitemap (app/sitemap.ts)
- Automatically generated XML sitemap at `/sitemap.xml`
- Includes all public pages (home, about, services, portfolio, team, contact)
- Multi-language support with alternate language tags
- Dynamic lastModified dates
- Priority and changeFrequency settings:
  - Homepage: priority 1.0, weekly updates
  - Other pages: priority 0.8, monthly updates

### Robots.txt (app/robots.ts)
- Automatically generated at `/robots.txt`
- Allows all search engines to crawl public pages
- Blocks admin and API routes from indexing
- References sitemap location

### Metadata
Each page should include proper meta tags for:
- Title tags (unique per page and language)
- Meta descriptions
- Open Graph tags for social sharing
- Canonical URLs
- Language alternates (hreflang tags)

## Git Repository

Current branch: master
Clean working directory
Recent commits include:
- Responsive design fixes
- Favicon addition
- Multi-language support
- Admin page fixes
- Vercel deployment configurations

## Deployment Platform

Configured for Vercel deployment with:
- Automatic builds on push
- Environment variable management
- Edge network CDN
- Serverless API routes
