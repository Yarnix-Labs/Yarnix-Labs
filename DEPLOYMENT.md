# Yarnix Labs Deployment Guide

## Overview
This guide covers deploying the Yarnix Labs website to Vercel with Sanity CMS integration.

## Prerequisites
- Vercel account
- Sanity account
- Git repository (GitHub/GitLab/Bitbucket)
- Node.js 18+

## Environment Variables

### Production Environment Variables
Set these in Vercel dashboard under Project Settings → Environment Variables:

```
VITE_SANITY_PROJECT_ID=v7q2gijs
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-03-19
NODE_ENV=production
```

## Deployment Steps

### 1. Frontend Deployment (Vercel)

#### Option A: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
npm run deploy:vercel

# Deploy preview
npm run deploy:preview
```

#### Option B: Via Vercel Dashboard
1. Connect your Git repository to Vercel
2. Import the project
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Add environment variables
5. Deploy

### 2. Sanity Studio Deployment

#### Deploy Studio to Sanity Managed Hosting
```bash
cd studio-yarnix-labs
npm run deploy
```

This will deploy your Sanity studio to `https://your-project-id.sanity.studio`

## Configuration Files

### Vercel Configuration (`vercel.json`)
- Configures build settings for Vite
- Sets up SPA routing
- Defines environment variables

### Production Environment (`.env.production`)
- Contains production environment variables
- Used during local production builds

## Post-Deployment Checklist

### Frontend (Vercel)
- [ ] Website loads correctly
- [ ] All pages render without errors
- [ ] Sanity content is displayed
- [ ] Contact form works (if implemented)
- [ ] Images and assets load properly
- [ ] Responsive design works

### Sanity CMS
- [ ] Studio is accessible
- [ ] Can create/edit content
- [ ] Content syncs with frontend
- [ ] Media uploads work
- [ ] All schema types function correctly

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate issuance

### Sanity Studio (Optional)
1. Go to `sanity.manage`
2. Navigate to your project
3. Configure custom studio URL if needed

## CI/CD Pipeline

### Automatic Deployments
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployments
- Pull requests → Preview deployments

### Webhooks (Optional)
Set up Sanity webhook to trigger Vercel deployment when content changes:
1. Go to Sanity project settings
2. Create webhook pointing to Vercel deploy hook
3. Configure triggers for create/update/delete operations

## Monitoring

### Vercel Analytics
- Enable in Vercel dashboard
- Monitor page views, performance
- Track Core Web Vitals

### Error Tracking
Consider integrating:
- Vercel Speed Insights
- Sentry for error tracking
- Custom logging

## Troubleshooting

### Common Issues

#### Build Fails
- Check `npm run build` locally
- Verify all dependencies are installed
- Check TypeScript errors

#### Content Not Loading
- Verify environment variables
- Check Sanity project ID and dataset
- Ensure CORS is configured correctly

#### Routing Issues
- Verify `vercel.json` routing configuration
- Check SPA fallback to `index.html`

## Security Considerations

- Environment variables are not exposed to frontend
- Sanity API keys are read-only
- Enable HTTPS (automatic on Vercel)
- Review Sanity permissions and access control

## Performance Optimization

- Enable Vercel Edge Functions if needed
- Optimize images and assets
- Implement caching strategies
- Monitor Core Web Vitals

## Support

- Vercel Documentation: https://vercel.com/docs
- Sanity Documentation: https://www.sanity.io/docs
- Issue Tracker: Create issues in project repository
