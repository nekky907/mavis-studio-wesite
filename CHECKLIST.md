# Mavis Studio - Launch Checklist

Use this checklist to ensure everything is set up correctly before launching your website.

## 📋 Pre-Launch Checklist

### 1. Account Setup

- [ ] **Supabase Account**
  - [ ] Project created
  - [ ] Project URL copied
  - [ ] Anon key copied
  - [ ] Service role key copied (keep secret!)

- [ ] **Resend Account**
  - [ ] Account verified
  - [ ] API key generated
  - [ ] Test email sent successfully

- [ ] **Cloudinary Account**
  - [ ] Account created
  - [ ] Cloud name copied
  - [ ] API key and secret copied

### 2. Local Development

- [ ] **Environment Setup**
  - [ ] `.env.local` file created
  - [ ] All environment variables added
  - [ ] No sensitive data committed to git

- [ ] **Database Setup**
  - [ ] `supabase-schema.sql` executed in Supabase
  - [ ] Tables created: bookings, portfolio_items, team_members
  - [ ] RLS policies enabled
  - [ ] Sample data added (optional)

- [ ] **Admin User**
  - [ ] Admin user created in Supabase Auth
  - [ ] Credentials saved securely
  - [ ] Can login at /admin/login

- [ ] **Dependencies**
  - [ ] `npm install` completed without errors
  - [ ] No major vulnerabilities reported

- [ ] **Development Server**
  - [ ] `npm run dev` runs successfully
  - [ ] Site loads at http://localhost:3000
  - [ ] No console errors

### 3. Functionality Testing

- [ ] **Navigation**
  - [ ] All menu links work
  - [ ] Mobile menu opens/closes
  - [ ] Logo links to home
  - [ ] Smooth scrolling works

- [ ] **Public Pages**
  - [ ] Home page loads and displays correctly
  - [ ] About page shows company info
  - [ ] Services page displays packages
  - [ ] Portfolio page ready (shows message or images)
  - [ ] Team page displays founders
  - [ ] Contact page shows form

- [ ] **Booking Form**
  - [ ] Form fields display correctly
  - [ ] Validation shows errors for invalid input
  - [ ] Form submits successfully
  - [ ] Success message appears after submission
  - [ ] Entry appears in Supabase database
  - [ ] Customer receives confirmation email
  - [ ] Admin receives notification email

- [ ] **Admin Dashboard**
  - [ ] Can access /admin/login
  - [ ] Login works with correct credentials
  - [ ] Login fails with incorrect credentials
  - [ ] Dashboard shows statistics
  - [ ] Recent bookings table displays
  - [ ] Can logout successfully
  - [ ] Protected routes redirect to login

- [ ] **Responsive Design**
  - [ ] Mobile view (< 640px) looks good
  - [ ] Tablet view (640px - 1024px) looks good
  - [ ] Desktop view (> 1024px) looks good
  - [ ] Images scale properly
  - [ ] Text is readable on all devices

### 4. Content & Customization

- [ ] **Company Information**
  - [ ] Company name correct everywhere
  - [ ] Contact information updated (when available)
  - [ ] About page story reviewed
  - [ ] Team member information accurate

- [ ] **Pricing**
  - [ ] Package prices are correct
  - [ ] Currency symbols display correctly
  - [ ] Package descriptions accurate

- [ ] **Images**
  - [ ] Logo/brand images added (if available)
  - [ ] Portfolio images uploaded to Supabase
  - [ ] Team photos added
  - [ ] All images optimized for web

- [ ] **Email Templates**
  - [ ] Confirmation email reviewed
  - [ ] Notification email reviewed
  - [ ] RESEND_FROM_EMAIL is appropriate
  - [ ] ADMIN_EMAIL is correct

### 5. Deployment Preparation

- [ ] **Code Quality**
  - [ ] `npm run build` completes successfully
  - [ ] No TypeScript errors
  - [ ] No ESLint errors
  - [ ] All console.logs removed from production code

- [ ] **Git Repository**
  - [ ] Code committed to git
  - [ ] `.env.local` in .gitignore
  - [ ] README.md reviewed
  - [ ] Repository pushed to GitHub

- [ ] **Vercel Setup**
  - [ ] Vercel account created
  - [ ] GitHub repository connected
  - [ ] Environment variables added in Vercel
  - [ ] All variables match .env.local

### 6. Deployment

- [ ] **Initial Deploy**
  - [ ] Deployed to Vercel
  - [ ] Deployment successful (no errors)
  - [ ] Production URL noted

- [ ] **Post-Deployment Config**
  - [ ] NEXT_PUBLIC_APP_URL updated to production URL
  - [ ] Supabase redirect URLs updated
  - [ ] Site tested at production URL

- [ ] **Production Testing**
  - [ ] All pages load on production
  - [ ] Booking form works on production
  - [ ] Emails send from production
  - [ ] Admin login works on production
  - [ ] No console errors in production

### 7. Optional Enhancements

- [ ] **Custom Domain**
  - [ ] Domain purchased
  - [ ] DNS configured in Vercel
  - [ ] SSL certificate active
  - [ ] www redirect configured

- [ ] **Email Domain**
  - [ ] Domain verified in Resend
  - [ ] DNS records added (MX, TXT, CNAME)
  - [ ] RESEND_FROM_EMAIL updated to custom domain

- [ ] **Analytics**
  - [ ] Google Analytics installed
  - [ ] Vercel Analytics enabled
  - [ ] Conversion tracking set up

- [ ] **SEO**
  - [ ] Meta descriptions added
  - [ ] Open Graph tags configured
  - [ ] Sitemap generated
  - [ ] robots.txt configured

### 8. Monitoring & Maintenance

- [ ] **Set up Monitoring**
  - [ ] Vercel deployment notifications enabled
  - [ ] Supabase usage monitored
  - [ ] Email delivery monitored in Resend

- [ ] **Backup Plan**
  - [ ] Supabase backup scheduled
  - [ ] Code backed up on GitHub
  - [ ] Environment variables documented securely

- [ ] **Update Schedule**
  - [ ] Dependencies update plan
  - [ ] Content update schedule
  - [ ] Security review schedule

## 🚨 Critical Items (Must Complete)

These items are absolutely required before going live:

1. ✅ Supabase database schema installed
2. ✅ Admin user created
3. ✅ All environment variables set
4. ✅ Booking form tested and working
5. ✅ Email notifications working
6. ✅ Site deployed successfully
7. ✅ No build errors
8. ✅ Responsive on mobile

## 📝 Notes

Use this space for important notes during setup:

```
Date:
Deployment URL:
Admin Email:
Issues Found:

Next Steps:

```

## ✅ Final Sign-Off

- [ ] All critical items completed
- [ ] Site reviewed by team
- [ ] Ready for production launch!

---

**Launch Date:** _______________

**Launched By:** _______________

🎉 **Congratulations on your launch!**
