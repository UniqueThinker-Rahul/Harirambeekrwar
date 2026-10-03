import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const templatePath = path.join(distDir, 'index.html');
const ssrModulePath = path.join(rootDir, 'dist-ssr', 'entry-server.js');

async function prerender() {
  console.log('--- Starting Build-time SSG Prerendering ---');
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client template not found at ${templatePath}. Run vite build first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render, ROUTES_SEO, SITE_URL, BRAND_NAME, DEFAULT_OG_IMAGE, generateStructuredData } = await import(
    `file://${ssrModulePath}`
  );

  const publicRoutes = [
    '/',
    '/about',
    '/services',
    '/services/advanced-numerology',
    '/services/vastu-consultation',
    '/urgent-love-plan',
    '/reports',
    '/tools',
    '/blog',
    '/blog/saturn-transit',
    '/blog/vastu-office',
    '/blog/name-correction-science',
    '/blog/wristwatch-numerology',
    '/contact',
    '/privacy-policy',
    '/refund-policy',
    '/terms'
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  for (const route of publicRoutes) {
    console.log(`Prerendering route: ${route}`);
    const { appHtml } = render(route);
    const config = ROUTES_SEO[route] || ROUTES_SEO['/'];

    const canonicalUrl = `${SITE_URL}${config.canonicalPath === '/' ? '' : config.canonicalPath}`;
    const ogImage = config.ogImage || DEFAULT_OG_IMAGE;
    const ogImageAlt = config.ogImageAlt || `${BRAND_NAME} — Numerology & Vastu Consultant`;
    const imageWidth = ogImage === DEFAULT_OG_IMAGE ? 1200 : 800;
    const imageHeight = ogImage === DEFAULT_OG_IMAGE ? 630 : 800;

    const schemas = config.noindex ? [] : generateStructuredData(config);
    const jsonLdTags = schemas
      .map(s => `    <script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n');

    const metaTags = `
    <!-- Per-Route SEO Metadata -->
    <title>${config.title}</title>
    <meta name="description" content="${config.description}" />
    ${config.keywords ? `<meta name="keywords" content="${config.keywords}" />` : ''}
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="robots" content="${config.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}" />

    <!-- Open Graph (Facebook, WhatsApp, LinkedIn) -->
    <meta property="og:site_name" content="${BRAND_NAME}" />
    <meta property="og:type" content="${config.ogType || 'website'}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:secure_url" content="${ogImage}" />
    <meta property="og:image:width" content="${imageWidth}" />
    <meta property="og:image:height" content="${imageHeight}" />
    <meta property="og:image:alt" content="${ogImageAlt}" />
    <meta property="og:locale" content="en_IN" />

    <!-- Twitter Cards (name attribute only) -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${config.title}" />
    <meta name="twitter:description" content="${config.description}" />
    <meta name="twitter:image" content="${ogImage}" />
    <meta name="twitter:image:alt" content="${ogImageAlt}" />

    <!-- Structured Data (JSON-LD) -->
${jsonLdTags}
`;

    // Replace fallback title/meta in template head
    let pageHtml = template;

    // Clean out existing default title, meta description, and og/twitter tags
    pageHtml = pageHtml.replace(/<title>[\s\S]*?<\/title>/i, '');
    pageHtml = pageHtml.replace(/<meta\s+name=["']description["'][\s\S]*?>/i, '');
    pageHtml = pageHtml.replace(/<!-- Fallback Title and Description -->[\s\S]*?<!-- Favicon/i, '<!-- Favicon');
    pageHtml = pageHtml.replace(/<!-- Open Graph Default Fallback -->[\s\S]*?<\/head>/i, '</head>');

    // Inject route-specific meta tags before </head>
    pageHtml = pageHtml.replace('</head>', `${metaTags}\n  </head>`);

    // Inject rendered application markup inside #root
    pageHtml = pageHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`
    );

    // Save to appropriate path
    if (route === '/') {
      fs.writeFileSync(path.join(distDir, 'index.html'), pageHtml, 'utf-8');
    } else {
      const routeDir = path.join(distDir, route.replace(/^\//, ''));
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf-8');
    }
  }

  // Prerender 404 page
  console.log('Prerendering 404.html');
  const { appHtml: notFoundHtml } = render('/404-not-found');
  const notFoundMeta = `
    <title>404 - Page Not Found | ${BRAND_NAME}</title>
    <meta name="description" content="The page you are looking for does not exist on Hari Ram Beekrwar's website." />
    <meta name="robots" content="noindex, nofollow" />
`;
  let notFoundPage = template;
  notFoundPage = notFoundPage.replace(/<title>[\s\S]*?<\/title>/i, '');
  notFoundPage = notFoundPage.replace(/<meta\s+name=["']description["'][\s\S]*?>/i, '');
  notFoundPage = notFoundPage.replace(/<!-- Fallback Title and Description -->[\s\S]*?<!-- Favicon/i, '<!-- Favicon');
  notFoundPage = notFoundPage.replace(/<!-- Open Graph Default Fallback -->[\s\S]*?<\/head>/i, '</head>');
  notFoundPage = notFoundPage.replace('</head>', `${notFoundMeta}\n  </head>`);
  notFoundPage = notFoundPage.replace(
    '<div id="root"></div>',
    `<div id="root">${notFoundHtml}</div>`
  );
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundPage, 'utf-8');

  // Generate sitemap.xml with proper priorities & change frequencies
  console.log('Generating sitemap.xml');
  const getPriority = (r) => {
    if (r === '/') return '1.0';
    if (r === '/services') return '0.9';
    if (r.startsWith('/services/') || r === '/about') return '0.8';
    if (r.startsWith('/blog/') || r === '/reports') return '0.7';
    if (r === '/tools' || r === '/contact' || r === '/urgent-love-plan') return '0.6';
    return '0.3';
  };

  const getChangefreq = (r) => {
    if (r === '/' || r === '/services' || r === '/blog') return 'weekly';
    if (r.startsWith('/blog/')) return 'monthly';
    return 'monthly';
  };

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
  .map(
    r => `  <url>
    <loc>${SITE_URL}${r === '/' ? '/' : r}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${getChangefreq(r)}</changefreq>
    <priority>${getPriority(r)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf-8');

  // Cleanup temporary dist-ssr
  const ssrDir = path.join(rootDir, 'dist-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log(`✓ SSG Prerendering completed successfully! Rendered ${publicRoutes.length} public pages + 404.html + sitemap.xml.`);
}

prerender().catch(err => {
  console.error('SSG Prerendering failed:', err);
  process.exit(1);
});
