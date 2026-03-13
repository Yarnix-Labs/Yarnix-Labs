# 🎯 Accessing Your Sanity Dashboard

## Quick Access

### Local Development
**URL:** http://localhost:3333

Run the studio locally:
```bash
cd studio-yarnix-labs
npm run dev
```

Then open http://localhost:3333 in your browser.

---

## What is Sanity Studio?

Sanity Studio is your CMS dashboard where you can manage:
- ✍️ Blog Posts
- 🚀 Projects
- 👥 Team Members
- ⚙️ Services
- 💬 Testimonials
- 📞 Contact Information

---

## Deployment Options

### Option 1: Local Access (Current Setup)
- ✅ Already configured
- ✅ Run with `npm run dev` in studio folder
- ❌ Only accessible on your computer

### Option 2: Deploy to Vercel (Recommended for Production)

Deploy Sanity Studio as a separate app on Vercel:

```bash
cd studio-yarnix-labs
npx vercel --prod
```

This will give you a URL like: `https://yarnix-labs-studio.vercel.app`

Then update the Admin page link from `http://localhost:3333` to your deployed URL.

---

## Troubleshooting

### Port 3333 already in use
If you get "Port 3333 is already in use":
1. Check if Sanity is already running: http://localhost:3333
2. Or kill the process using port 3333
3. Or change the port in `studio-yarnix-labs/sanity.config.ts`

### Can't access localhost:3333
Make sure you've started the dev server:
```bash
cd studio-yarnix-labs
npm run dev
```

Wait for "Running on http://localhost:3333" message.

---

## Project Info

- **Project ID:** v7q2gijs
- **Dataset:** production
- **Admin Page:** https://yarnix.jeewantha.me/admin
