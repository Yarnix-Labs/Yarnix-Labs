#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOMAIN = 'https://www.yarnix-labs.com';
const PUBLIC_DIR = path.join(__dirname, 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Static routes from your React app
const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/projects', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'yearly' }
];

// Dynamic routes (real blog posts and projects)
const dynamicRoutes = [
  // Real blog posts
  { path: '/blog/agentic-ai-in-software-development-2026-what-every-tech-company-needs-to-know', priority: '0.8', changefreq: 'monthly' },
  { path: '/blog/how-ai-is-changing-devops-in-2026', priority: '0.8', changefreq: 'monthly' },
  
  // Real project details
  { path: '/projects/ravlanka-travels-tourism-website', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/crystal-ceylon-tours-tourism-website', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/nss-fitness-centre-gym-website', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/cinema-hub-subtitle-download-website', priority: '0.8', changefreq: 'monthly' },
  { path: '/projects/helamart-lk-ecommerce-website', priority: '0.8', changefreq: 'monthly' }
];

// Combine all routes
const allRoutes = [...staticRoutes, ...dynamicRoutes];

// Function to generate sitemap XML
function generateSitemap(routes) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  routes.forEach(route => {
    xml += `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>

`;
  });

  xml += `</urlset>`;
  return xml;
}

// Generate and write sitemap
const sitemapXML = generateSitemap(allRoutes);

try {
  fs.writeFileSync(SITEMAP_PATH, sitemapXML, 'utf8');
  console.log('✅ Sitemap generated successfully!');
  console.log(`📍 Location: ${SITEMAP_PATH}`);
  console.log(`🌐 Domain: ${DOMAIN}`);
  console.log(`📄 Routes included: ${allRoutes.length}`);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
