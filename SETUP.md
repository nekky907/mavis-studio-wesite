# Quick Setup Guide - Mavis Studio Website

## Getting Started in 5 Minutes

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create `.env.local` in the root directory:

```env
# Supabase (Get these from https://app.supabase.com/project/YOUR_PROJECT/settings/api)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Cloudinary (Get these from https://console.cloudinary.com/)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Resend (Get from https://resend.com/api-keys)
RESEND_API_KEY=re_your-api-key-here
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Admin
ADMIN_EMAIL=admin@mavisstudio.com

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Set Up Supabase Database

1. Go to your Supabase project's SQL Editor
2. Copy the entire content of `supabase-schema.sql`
3. Paste and execute it in the SQL Editor
4. Verify tables are created in the Table Editor

### 4. Create Admin User

In Supabase Dashboard:
1. Go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter email and password
4. Save credentials (you'll use these to login at `/admin/login`)

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Test Your Setup

### Test Public Website
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Contact form displays

### Test Admin
1. Go to http://localhost:3000/admin/login
2. Login with your Supabase admin credentials
3. Verify dashboard loads

### Test Booking Form
1. Go to http://localhost:3000/contact
2. Fill out the booking form
3. Submit (you should see success message)
4. Check Supabase dashboard to see the booking entry
5. Check Resend logs for email sent

## Common Issues

### "Module not found" error
**Solution:** Run `npm install` again

### Supabase connection error
**Solution:**
- Double-check your Supabase URL and keys
- Make sure they're in `.env.local` (not `.env.example`)
- Restart dev server after changing env vars

### Email not sending
**Solution:**
- For development, use any email in RESEND_FROM_EMAIL
- Resend allows sending from their domain in development
- For production, you need to verify your domain

### Build errors
**Solution:**
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

## Next Steps

1. **Add Content:**
   - Add portfolio items via Supabase Table Editor
   - Add team member info

2. **Customize:**
   - Update company info in components/Footer.tsx
   - Modify package pricing in app/services/page.tsx
   - Add your own images

3. **Deploy:**
   - Follow instructions in DEPLOYMENT.md
   - Deploy to Vercel for production

## Project Structure

```
mavis-website/
├── app/                  # All pages and routes
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── services/        # Services page
│   ├── portfolio/       # Portfolio gallery
│   ├── team/            # Team page
│   ├── contact/         # Contact form
│   ├── admin/           # Admin dashboard
│   └── api/             # API routes
├── components/          # Reusable components
├── lib/                 # Utilities and configs
├── types/               # TypeScript types
└── public/              # Static files
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Support

- Check README.md for detailed documentation
- Check DEPLOYMENT.md for deployment guide
- Review Supabase/Resend/Cloudinary docs for API issues

---

Happy coding! 🎉
