# Deployment Guide - Mavis Studio Website

This guide will walk you through deploying the Mavis Studio website to production.

## Prerequisites Checklist

Before deploying, ensure you have:

- [ ] Supabase account with a project created
- [ ] Cloudinary account for image hosting
- [ ] Resend account for email notifications
- [ ] GitHub account (for Vercel deployment)
- [ ] All environment variables ready

## Step 1: Set Up Supabase

### 1.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign in and click "New Project"
3. Choose organization and enter project details
4. Wait for project to be provisioned
5. Note your project URL and anon key from Settings > API

### 1.2 Run Database Schema

1. Open SQL Editor in Supabase dashboard
2. Copy contents of `supabase-schema.sql`
3. Paste and run the script
4. Verify tables are created in Table Editor

### 1.3 Create Admin User

1. Go to Authentication > Users
2. Click "Add user" > "Create new user"
3. Enter admin email and strong password
4. Save credentials securely

### 1.4 Configure Authentication

1. Go to Authentication > URL Configuration
2. Add your site URL (will update after Vercel deployment)
3. Add redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `https://yourdomain.com/auth/callback` (after deployment)

## Step 2: Set Up Cloudinary

### 2.1 Create Account

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Verify your email
3. Go to Dashboard

### 2.2 Get Credentials

1. Find Cloud Name, API Key, and API Secret
2. Create a folder called "mavis-studio" for organization
3. Set up upload presets if needed

## Step 3: Set Up Resend

### 3.1 Create Account

1. Sign up at [resend.com](https://resend.com)
2. Verify your email

### 3.2 Get API Key

1. Go to API Keys section
2. Create a new API key
3. Save it securely

### 3.3 Configure Domain (Optional)

For production emails:
1. Add your domain in Resend dashboard
2. Add DNS records (MX, TXT, CNAME)
3. Verify domain
4. Use domain email as RESEND_FROM_EMAIL

For testing, use Resend's default sending domain.

## Step 4: Prepare for Deployment

### 4.1 Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit - Mavis Studio website"

# Create main branch
git branch -M main

# Add your GitHub repository
git remote add origin https://github.com/yourusername/mavis-website.git

# Push to GitHub
git push -u origin main
```

### 4.2 Environment Variables

Prepare these values for Vercel:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_ROLE_KEY=eyJxxx...

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=123456789012345
CLOUDINARY_API_SECRET=abcdefghijklmnopqrstuvwx

# Resend
RESEND_API_KEY=re_xxx...
RESEND_FROM_EMAIL=noreply@yourdomain.com

# Admin
ADMIN_EMAIL=admin@mavisstudio.com

# App (update after deployment)
NEXT_PUBLIC_APP_URL=https://your-vercel-app.vercel.app
```

## Step 5: Deploy to Vercel

### 5.1 Connect GitHub

1. Go to [vercel.com](https://vercel.com)
2. Sign up/sign in with GitHub
3. Click "Add New..." > "Project"
4. Import your GitHub repository
5. Select the mavis-website repository

### 5.2 Configure Project

1. **Framework Preset:** Next.js (auto-detected)
2. **Root Directory:** ./
3. **Build Command:** `npm run build`
4. **Output Directory:** .next
5. **Install Command:** `npm install`

### 5.3 Add Environment Variables

1. Click "Environment Variables"
2. Add each variable from your .env.local:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: `https://xxx.supabase.co`
   - Environments: Production, Preview, Development

3. Add all variables from the list in Step 4.2

### 5.4 Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Note your deployment URL (e.g., `mavis-studio.vercel.app`)

## Step 6: Post-Deployment Configuration

### 6.1 Update Supabase URLs

1. Go to Supabase > Authentication > URL Configuration
2. Add production URLs:
   - Site URL: `https://your-app.vercel.app`
   - Redirect URL: `https://your-app.vercel.app/auth/callback`

### 6.2 Update Environment Variable

1. In Vercel, update `NEXT_PUBLIC_APP_URL`:
   - Old: `http://localhost:3000`
   - New: `https://your-app.vercel.app`
2. Redeploy to apply changes

### 6.3 Test Website

Visit your deployed website and test:
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] Email notifications are received
- [ ] Admin login works
- [ ] Admin dashboard displays data

## Step 7: Add Custom Domain (Optional)

### 7.1 Purchase Domain

Get a domain from:
- Namecheap
- GoDaddy
- Google Domains
- Cloudflare

### 7.2 Configure in Vercel

1. Go to your project in Vercel
2. Click "Settings" > "Domains"
3. Add your domain (e.g., `mavisstudio.com`)
4. Follow DNS configuration instructions

### 7.3 Update DNS

Add these records in your domain provider:

**For root domain:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 7.4 Update URLs

After domain is active:
1. Update `NEXT_PUBLIC_APP_URL` in Vercel
2. Update Supabase redirect URLs
3. Update Resend domain configuration

## Step 8: Set Up Email Domain (Production)

### 8.1 Configure Resend Domain

1. In Resend, add your domain
2. Add DNS records to your domain provider:

```
Type: TXT
Name: @
Value: [Resend verification value]

Type: MX
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10

Type: CNAME
Name: resend._domainkey
Value: [Resend DKIM value]
```

3. Wait for verification (can take 24-48 hours)
4. Update `RESEND_FROM_EMAIL` to use your domain

## Troubleshooting

### Build Errors

**Error:** "Module not found"
- Solution: Run `npm install` locally and commit package-lock.json

**Error:** "Environment variable missing"
- Solution: Check all env vars are set in Vercel

### Runtime Errors

**Error:** "Failed to fetch from Supabase"
- Check Supabase URL and keys
- Verify RLS policies allow public access where needed

**Error:** "Email not sending"
- Verify Resend API key
- Check email logs in Resend dashboard
- Ensure RESEND_FROM_EMAIL is verified

### Authentication Issues

**Error:** "Cannot sign in"
- Check Supabase auth is enabled
- Verify admin user exists
- Check redirect URLs match deployment URL

## Monitoring & Maintenance

### Regular Tasks

1. **Check Logs**
   - Vercel: Monitor function logs
   - Supabase: Check database queries
   - Resend: Review email delivery

2. **Database Backups**
   - Supabase provides automatic backups
   - Download periodic backups manually

3. **Update Dependencies**
   ```bash
   npm outdated
   npm update
   ```

4. **Security**
   - Rotate API keys regularly
   - Review Supabase RLS policies
   - Update admin passwords

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Supabase Docs:** https://supabase.com/docs
- **Resend Docs:** https://resend.com/docs
- **Cloudinary Docs:** https://cloudinary.com/documentation

## Rollback Procedure

If deployment has issues:

1. Go to Vercel deployment dashboard
2. Find previous working deployment
3. Click three dots > "Promote to Production"
4. Investigate issue before redeploying

---

🎉 **Congratulations!** Your Mavis Studio website is now live!

Remember to test thoroughly and monitor for the first few days.
