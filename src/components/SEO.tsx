import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import {
  SITE_URL,
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  ROUTES_SEO,
  RouteSEOConfig,
  generateStructuredData
} from '../config/seo';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  breadcrumbItems?: Array<{ name: string; path: string }>;
  services?: Array<{ name: string; description: string; price?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  articleMeta?: {
    publishedTime?: string;
    author?: string;
  };
}

const SEO: React.FC<SEOProps> = (props) => {
  let pathname = '/';
  try {
    const location = useLocation();
    pathname = location.pathname;
  } catch {
    // If rendered outside router context
    pathname = '/';
  }

  // Normalize path (remove trailing slash except for root)
  const normalizedPath = pathname !== '/' && pathname.endsWith('/')
    ? pathname.slice(0, -1)
    : pathname;

  const routeConfig = ROUTES_SEO[normalizedPath] || ROUTES_SEO['/'] || {};

  const title = props.title || routeConfig.title || `${BRAND_NAME} | Numerology & Vastu Consultant`;
  const description = props.description || routeConfig.description || 'Consult Hari Ram Beekrwar for authentic Vedic Numerology and Vastu consultations. Call or WhatsApp +91 9509610711.';
  const keywords = props.keywords || routeConfig.keywords;
  const noindex = props.noindex ?? routeConfig.noindex ?? false;
  const ogType = props.ogType || routeConfig.ogType || 'website';
  const ogImage = props.image || routeConfig.ogImage || DEFAULT_OG_IMAGE;
  const ogImageAlt = props.imageAlt || routeConfig.ogImageAlt || `${BRAND_NAME} — Numerology & Vastu Consultant`;
  const imageWidth = props.imageWidth || (ogImage === DEFAULT_OG_IMAGE ? 1200 : 800);
  const imageHeight = props.imageHeight || (ogImage === DEFAULT_OG_IMAGE ? 630 : 800);

  const targetPath = props.canonicalPath || routeConfig.canonicalPath || normalizedPath;
  const canonicalUrl = `${SITE_URL}${targetPath === '/' ? '' : targetPath}`;

  // Assemble full config for JSON-LD generation
  const fullConfig: RouteSEOConfig = {
    title,
    description,
    keywords,
    canonicalPath: targetPath,
    noindex,
    ogType,
    ogImage,
    ogImageAlt,
    articleMeta: props.articleMeta || routeConfig.articleMeta,
    breadcrumbItems: props.breadcrumbItems || routeConfig.breadcrumbItems,
    services: props.services || routeConfig.services,
    faqs: props.faqs || routeConfig.faqs
  };

  const schemas = noindex ? [] : generateStructuredData(fullConfig);

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots Control */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
      <meta property="og:site_name" content={BRAND_NAME} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content={String(imageWidth)} />
      <meta property="og:image:height" content={String(imageHeight)} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards - Name attributes used exclusively, twitter:url omitted */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Structured Data (JSON-LD) */}
      {schemas.map((schema, index) => (
        <script key={`jsonld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
