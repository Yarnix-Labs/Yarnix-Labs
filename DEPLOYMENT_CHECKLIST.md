# 🚀 Deployment Checklist

## ✅ Phase 1: Vercel Configuration (COMPLETED)

### Files Created:
- [x] `vercel.json` - Vercel deployment configuration
- [x] `.env.production` - Production environment variables
- [x] `DEPLOYMENT.md` - Comprehensive deployment guide
- [x] Updated `package.json` with deployment scripts

### Build Test:
- [x] Frontend builds successfully (`npm run build` ✅)
- [x] All assets optimized and generated
- [x] No build errors or warnings

## 🔄 Phase 2: Sanity Studio Setup (IN PROGRESS)

### Sanity Configuration:
- [x] Project ID: `v7q2gijs`
- [x] Dataset: `production`
- [x] All schema types defined
- [x] Studio structure configured

### Next Steps for Sanity:
1. **Deploy Studio to Sanity Hosting:**
   ```bash
   cd studio-yarnix-labs
   npm run deploy
   ```

2. **Access Studio:**
   - URL: `https://v7q2gijs.sanity.studio`
   - Or custom URL if configured

## 📋 Phase 3: Vercel Deployment (READY)

### Option A: Vercel CLI (Recommended for first deployment)
```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
npm run deploy:vercel
```

### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import Git repository
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Environment Variables (Set in Vercel Dashboard):
```
VITE_SANITY_PROJECT_ID=v7q2gijs
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-03-19
```

## 🔍 Phase 4: Post-Deployment Testing

### Frontend Tests:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Blog posts display content from Sanity
- [ ] Projects load from Sanity
- [ ] Team members display correctly
- [ ] Testimonials show properly
- [ ] Contact info displays from Sanity
- [ ] Contact form (if implemented) works
- [ ] Responsive design on mobile/tablet
- [ ] No console errors

### Sanity Studio Tests:
- [ ] Studio accessible at deployed URL
- [ ] Can create new blog posts
- [ ] Can edit existing content
- [ ] Image uploads work
- [ ] Content publishes to frontend
- [ ] All schema types functional

## 🌐 Phase 5: Custom Domain (Optional)

### Vercel Domain Setup:
1. Go to Project Settings → Domains
2. Add custom domain (e.g., `yarnixlabs.com`)
3. Update DNS records:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### Sanity Custom Studio URL (Optional):
1. Go to [sanity.manage](https://sanity.manage)
2. Navigate to project settings
3. Configure custom studio URL

## 🔄 Phase 6: CI/CD Automation

### Automatic Deployments Setup:
- [ ] Connect Git repository to Vercel
- [ ] Configure main branch → production
- [ ] Configure feature branches → preview
- [ ] Set up deployment hooks

### Sanity Webhook (Optional):
- [ ] Create webhook in Sanity settings
- [ ] Point to Vercel deploy hook
- [ ] Configure content change triggers

## 📊 Phase 7: Monitoring & Analytics

### Vercel Analytics:
- [ ] Enable Vercel Analytics
- [ ] Set up Speed Insights
- [ ] Monitor Core Web Vitals

### Error Monitoring (Optional):
- [ ] Set up Sentry (recommended)
- [ ] Configure error reporting
- [ ] Set up performance monitoring

## 🚨 Troubleshooting

### Common Issues & Solutions:

#### Build Fails:
```bash
# Check locally first
npm run build

# Clear cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Content Not Loading:
- Verify environment variables in Vercel
- Check Sanity project ID and dataset
- Ensure CORS is configured

#### Routing Issues:
- Verify `vercel.json` configuration
- Check SPA fallback settings

#### Sanity Studio Access:
- Verify project deployment
- Check authentication settings
- Ensure proper permissions

## 📞 Support & Resources

### Documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Sanity Docs](https://www.sanity.io/docs)
- [React Router Docs](https://reactrouter.com/)

### Quick Commands:
```bash
# Deploy frontend
npm run deploy:vercel

# Deploy Sanity studio
npm run deploy:sanity

# Preview deployment
npm run deploy:preview

# Local production build test
npm run build && npm run preview
```

---

## 🎯 Deployment Priority:

1. **Immediate:** Deploy frontend to Vercel
2. **Immediate:** Deploy Sanity studio
3. **Optional:** Set up custom domain
4. **Optional:** Configure CI/CD
5. **Optional:** Set up monitoring

**Ready for deployment! ✅**
