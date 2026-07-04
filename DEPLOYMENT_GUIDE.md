# 🚀 Deployment Guide

Complete step-by-step guide for deploying your portfolio website to various platforms.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Deploy to Netlify](#deploy-to-netlify)
3. [Deploy to Vercel](#deploy-to-vercel)
4. [Deploy to GitHub Pages](#deploy-to-github-pages)
5. [Custom Domain Setup](#custom-domain-setup)
6. [SSL/HTTPS Configuration](#ssltls-configuration)
7. [Continuous Deployment (CI/CD)](#continuous-deployment-cicd)
8. [Monitoring & Analytics](#monitoring--analytics)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Git installed and repository initialized
- ✅ GitHub account (for CI/CD pipelines)
- ✅ Code pushed to GitHub repository
- ✅ Production build tested locally (`npm run build && npm run preview`)
- ✅ All environment variables set (if any)

---

## Deploy to Netlify

### Method 1: Using Git Integration (Recommended)

**Step 1: Connect GitHub to Netlify**
```bash
# Ensure your code is pushed to GitHub
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

**Step 2: Create Netlify Account**
- Go to https://netlify.com
- Sign up or log in with GitHub account

**Step 3: Create New Site**
1. Click "Add new site" → "Import an existing project"
2. Select GitHub repository
3. Authorize Netlify access to your GitHub account
4. Select your `portfolio_website` repository

**Step 4: Configure Build Settings**
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: (leave empty)
- Click "Deploy site"

**Step 5: Verify Deployment**
- Netlify auto-generates site URL (e.g., `https://your-portfolio-abc123.netlify.app`)
- Site is automatically deployed on every push to `main` branch
- All pull requests get preview deployments

### Method 2: Using Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify (opens browser)
netlify login

# Deploy from dist folder
netlify deploy --prod --dir=dist

# Or let Netlify build and deploy
netlify deploy --prod
```

### Post-Deployment Configuration

```bash
# Check deployment status
netlify status

# View site information
netlify sites:list

# Update environment variables
netlify env:set KEY VALUE
```

### Netlify Security Headers (Already in netlify.toml)
```toml
[[headers]]
  for = "/"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

---

## Deploy to Vercel

### Method 1: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (follows prompts)
vercel

# Deploy to production
vercel --prod
```

### Method 2: Using Git Integration (Recommended)

**Step 1: Create Vercel Account**
- Go to https://vercel.com
- Sign up with GitHub account

**Step 2: Import Project**
1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Connect your GitHub account
4. Select `portfolio_website` repository
5. Click "Import"

**Step 3: Configure Project**
- Framework: `Vite` (auto-detected)
- Build command: `npm run build` (auto-filled)
- Output directory: `dist` (auto-filled)
- Install command: `npm install` (auto-filled)
- Click "Deploy"

**Step 4: Verify Deployment**
- Vercel provides a unique URL
- Automatic deployments on every push
- Preview URLs for pull requests

### Vercel Configuration (Already in vercel.json)
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "nodeVersion": "18",
  "outputDirectory": "dist"
}
```

---

## Deploy to GitHub Pages

### Setup GitHub Repository

```bash
# Add GitHub Pages configuration to vite.config.js
# Change the base path in your vite.config.js:
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio_website/',  // Replace with your repo name
  plugins: [react()],
})
```

### Deploy via GitHub Actions

**Step 1: Create Deployment Workflow**
Already created in `.github/workflows/deploy.yml`

**Step 2: Push to GitHub**
```bash
git add .
git commit -m "Add GitHub Pages deployment"
git push origin main
```

**Step 3: Enable GitHub Pages**
1. Go to repository Settings
2. Select "Pages" from left sidebar
3. Under "Source", select "GitHub Actions"
4. Choose workflow (deploy.yml)
5. Click "Save"

**Step 4: Access Your Site**
- Site URL: `https://yourusername.github.io/portfolio_website`
- Deployment status visible in Actions tab

### Manual GitHub Pages Deployment

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

---

## Custom Domain Setup

### For Netlify

**Step 1: Purchase Domain**
- Use domain registrar (GoDaddy, Namecheap, Google Domains, etc.)

**Step 2: Connect Domain to Netlify**
1. Go to Netlify site settings
2. Navigate to "Domain management"
3. Click "Add custom domain"
4. Enter your domain name
5. Follow DNS setup instructions

**Step 3: Configure DNS**
Option A: Use Netlify nameservers (Recommended)
- Netlify provides 4 nameservers
- Update your domain registrar nameservers
- Takes 24-48 hours to propagate

Option B: Use CNAME record
- Point CNAME to `your-site.netlify.app`
- Better if you have other subdomains

**Step 4: Verify SSL Certificate**
- Netlify auto-provisions Let's Encrypt certificate
- Takes 5-15 minutes
- Check domain settings for "Certificate status"

### For Vercel

**Step 1: Connect Domain**
1. Go to Vercel project settings
2. Select "Domains"
3. Click "Add"
4. Enter domain name

**Step 2: Update DNS Records**
Vercel provides DNS records to add:
- A records
- CNAME records
- TXT records (for verification)

Update in your domain registrar's DNS settings.

**Step 3: Enable SSL**
- Automatic with Vercel
- Usually available within 1 hour

### For GitHub Pages with Custom Domain

**Step 1: Update CNAME File**
```bash
# Create CNAME file in repository root
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push origin main
```

**Step 2: Update Domain DNS**
Add CNAME record pointing to `yourusername.github.io`

**Step 3: Enable HTTPS**
1. Go to repository Settings → Pages
2. Enable "Enforce HTTPS"

---

## SSL/TLS Configuration

### Automatic SSL (Recommended)

All major hosting platforms provide free SSL:
- **Netlify**: Let's Encrypt (automatic)
- **Vercel**: Let's Encrypt (automatic)
- **GitHub Pages**: Let's Encrypt (automatic)

### Enforce HTTPS

In your hosting settings:
- Enable "Force HTTPS" or "Automatic HTTPS redirect"
- Update all links in your site to use `https://`
- Configure security headers (already in netlify.toml)

### Security Headers Example
```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Content-Security-Policy: default-src 'self'
```

---

## Continuous Deployment (CI/CD)

### GitHub Actions Workflows

Two workflows already configured:

**1. Deploy Workflow** (`.github/workflows/deploy.yml`)
- Runs on push to main/develop
- Lints code
- Builds project
- Deploys to Netlify

**2. Test Workflow** (`.github/workflows/test.yml`)
- Runs on all pushes and PRs
- Tests on Node 18 and 20
- Lints code
- Builds project
- Checks bundle size

### Setting Up GitHub Secrets

For automated Netlify deployment:

1. Go to repository Settings → Secrets and variables → Actions
2. Add new repository secret:
   - Name: `NETLIFY_AUTH_TOKEN`
   - Value: Your Netlify personal access token
3. Add another secret:
   - Name: `NETLIFY_SITE_ID`
   - Value: Your site ID from Netlify

**To get these values:**
```bash
# Using Netlify CLI
netlify api getAccessTokens
netlify sites:list  # Find your site ID
```

Or via Netlify UI:
- Netlify → User menu → Integrations → Personal access tokens

### Deployment Flow

```
Push to GitHub
      ↓
GitHub Actions runs (lint, build, test)
      ↓
If successful and on main branch:
      ↓
Deploy to Netlify/Vercel
      ↓
Site updated at production URL
      ↓
On pull requests: Preview deployment created
```

---

## Monitoring & Analytics

### Performance Monitoring

**Using Netlify Analytics**
1. In Netlify site settings
2. Go to "Analytics"
3. Enable analytics (premium feature)
4. View visitor statistics and performance

**Using Google Analytics**
1. Create Google Analytics account
2. Add this to `src/main.jsx`:
```javascript
// Add Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'GA_MEASUREMENT_ID');
```
3. Replace `GA_MEASUREMENT_ID` with your ID

### Uptime Monitoring

**Using UptimeRobot (Free)**
1. Go to uptimerobot.com
2. Sign up for free account
3. Create new monitor
4. Enter your site URL
5. Alerts sent if site goes down

**Using Pingdom**
1. Go to pingdom.com
2. Sign up
3. Add monitor
4. Choose check frequency
5. Get alerts on downtime

### Error Tracking

**Using Sentry**
1. Create Sentry account at sentry.io
2. Install Sentry package:
```bash
npm install @sentry/react @sentry/tracing
```
3. Initialize in `src/main.jsx`:
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production"
});
```

### Build Size Monitoring

**Using Bundlephobia**
- Go to bundlephobia.com
- Search your dependencies
- Monitor for new major versions

**Using GitHub Size Bot**
- Automatic size reports on PRs
- Shows bundle size changes
- Warns if size increases significantly

---

## Deployment Checklist

Before deploying to production:

### Code Quality
- [ ] Run `npm run lint` - no errors
- [ ] Test all sections: About, Projects, Skills, Resume, Contact
- [ ] Test contact form submission
- [ ] Test navigation and scroll behavior
- [ ] Run `npm run build` successfully

### Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] Test on ultra-wide (2560px width)
- [ ] Test orientation changes
- [ ] Test hamburger menu on mobile

### Cross-Browser Testing
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Chrome Mobile

### Performance
- [ ] Build time < 1 second
- [ ] Bundle size acceptable
- [ ] Lighthouse score > 90
- [ ] Test on slow network (DevTools)
- [ ] Test on throttled CPU

### Security
- [ ] No console errors/warnings
- [ ] No hardcoded secrets
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Form validation working

### SEO & Metadata
- [ ] Meta tags in index.html
- [ ] Open Graph tags for sharing
- [ ] Favicon configured
- [ ] Semantic HTML used
- [ ] Robots.txt present

### Analytics & Monitoring
- [ ] Analytics script added (optional)
- [ ] Error tracking configured (optional)
- [ ] Uptime monitoring set up (optional)
- [ ] Custom domain working
- [ ] SSL certificate active

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deployment Fails on Platform
1. Check build logs in platform dashboard
2. Verify `npm run build` works locally
3. Check environment variables
4. Verify Node version (should be 18+)
5. Clear platform cache and redeploy

### Site Shows Blank Page
1. Check browser console for errors
2. Verify dist/index.html exists
3. Check if base path is correct in vite.config.js
4. Clear browser cache and hard refresh
5. Check network tab for failed requests

### CSS/Images Not Loading
1. Verify asset paths are relative
2. Check base path in vite.config.js
3. Clear platform cache
4. Verify dist folder contains assets
5. Check network tab for 404 errors

---

## Maintenance

### Regular Updates
```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update specific package
npm install package-name@latest

# Test after updates
npm run build
npm run preview
```

### Monitoring
- Check deployment logs regularly
- Monitor performance metrics
- Review error tracking logs
- Check uptime monitoring alerts

### Backup
```bash
# Always keep code in version control
git push origin main

# Tag releases
git tag -a v1.0.0 -m "Version 1.0.0"
git push origin v1.0.0
```

---

## Next Steps

After successful deployment:

1. **Share Your Portfolio**
   - Add link to resume
   - Share on LinkedIn
   - Share on Twitter
   - Submit to portfolio directories

2. **Drive Traffic**
   - Write blog posts
   - Engage on social media
   - Network with other developers
   - Contribute to open source

3. **Continuous Improvement**
   - Monitor analytics
   - Gather feedback
   - Update projects regularly
   - Improve performance

4. **Security Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Update contact information
   - Refresh content periodically

---

## Support & Resources

- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://pages.github.com)
- [Vite Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Best Practices](https://react.dev)

---

**Happy Deploying! 🚀**
