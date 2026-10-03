/**
 * Centralized Technical SEO Configuration for Hari Ram Beekrwar
 * Primary Domain: https://harirambeekrwar.com
 */

export const SITE_URL = (
  (typeof process !== 'undefined' && process.env?.VITE_SITE_URL) ||
  (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SITE_URL) ||
  'https://harirambeekrwar.com'
).replace(/\/$/, '');

export const BRAND_NAME = 'Hari Ram Beekrwar';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const DEFAULT_PHONE = '+919509610711';
export const DISPLAY_PHONE = '+91 9509610711';

export interface RouteSEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath: string;
  noindex?: boolean;
  ogType?: 'website' | 'article' | 'profile';
  ogImage?: string;
  ogImageAlt?: string;
  articleMeta?: {
    publishedTime?: string;
    author?: string;
  };
  breadcrumbItems?: Array<{ name: string; path: string }>;
  services?: Array<{ name: string; description: string; price?: string }>;
  faqs?: Array<{ question: string; answer: string }>;
}

export const ROUTES_SEO: Record<string, RouteSEOConfig> = {
  '/': {
    title: 'Numerology & Vastu Consultant | Hari Ram Beekrwar',
    description: 'Consult trusted Numerology and Vastu expert Hari Ram Beekrwar. Get personalized guidance for career, home & prosperity. Call or WhatsApp +91 9509610711.',
    keywords: 'Numerology Consultant, Vastu Consultant India, Hari Ram Beekrwar, Vedic Numerology, Name Correction, Vastu Shastra',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Hari Ram Beekrwar — Numerology & Vastu Consultant',
    faqs: [
      {
        question: 'What is the duration of a consultation session?',
        answer: 'Each one-on-one numerology consultation session typically lasts 45 to 60 minutes over a private voice or video call. Vastu consultations range from 60 to 90 minutes depending on property size.'
      },
      {
        question: 'What information do I need to provide for a consultation?',
        answer: 'You will need to provide your full legal name, date of birth, time of birth (if known), and city of birth. For Vastu consultations, a basic floor plan or compass directions of your space are helpful.'
      },
      {
        question: 'Are the Vastu remedies practical or do they require demolition?',
        answer: 'All our Vastu remedies are strictly non-destructive and practical. We focus on elemental balance, color therapy, and direction adjustments without requiring expensive architectural demolition.'
      },
      {
        question: 'How does name spelling correction work?',
        answer: 'Every alphabet carries a distinct numerical vibration. By making slight adjustments to your name spelling, we harmonize your compound name number with your life path and destiny numbers to eliminate friction.'
      },
      {
        question: 'How soon can I schedule my consultation after payment?',
        answer: 'Slots are usually confirmed within 2 to 4 hours of payment. Priority slots are scheduled within 24 hours, while standard consultations are scheduled within 1 to 2 business days.'
      },
      {
        question: 'Is my personal information kept confidential?',
        answer: 'Yes, 100%. All personal details, birth charts, and consultation discussions are strictly confidential and protected with enterprise SSL encryption.'
      }
    ]
  },
  '/about': {
    title: 'About Hari Ram Beekrwar | Numerology & Vastu Consultant',
    description: 'About Hari Ram Beekrwar: Numerology Consultation at ₹3,200 and Vastu Consultation from ₹20,000+. Call +91 9509610711 to book your session.',
    keywords: 'About Hari Ram Beekrwar, Vedic Numerology Expert, Vastu Consultant Profile, Energy Alignment',
    canonicalPath: '/about',
    ogType: 'profile',
    ogImage: `${SITE_URL}/Resource/1.png`,
    ogImageAlt: 'Hari Ram Beekrwar Profile and Experience',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ]
  },
  '/services': {
    title: 'Numerology & Vastu Services | Hari Ram Beekrwar',
    description: 'Explore Numerology Consultation (₹3,200) and Vastu services (₹20,000+) by Hari Ram Beekrwar. Call +91 9509610711 to schedule your appointment.',
    keywords: 'Numerology Services, Vastu Consultation Services, Life Path Analysis, Home Vastu, Business Vastu',
    canonicalPath: '/services',
    ogType: 'website',
    ogImage: `${SITE_URL}/Resource/3.png`,
    ogImageAlt: 'Numerology and Vastu Consultation Services',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' }
    ]
  },
  '/services/advanced-numerology': {
    title: 'Advanced Numerology Consultation | Hari Ram Beekrwar',
    description: 'Book advanced Numerology Consultation (₹3,200) with Hari Ram Beekrwar. Get detailed personal guidance. Call +91 9509610711 for availability.',
    keywords: 'Advanced Numerology Consultation, Name Correction, Destiny Number Analysis, Lucky Numbers, Wristwatch Numerology',
    canonicalPath: '/services/advanced-numerology',
    ogType: 'website',
    ogImage: `${SITE_URL}/Resource/image_9e22c5.jpg`,
    ogImageAlt: 'Advanced Numerology Consultation Session',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Advanced Numerology', path: '/services/advanced-numerology' }
    ],
    services: [
      {
        name: 'Advanced Numerology Consultation',
        description: 'Comprehensive 1-on-1 personalized analysis of birth date, name correction, destiny vibration, and career cycles.',
        price: '3200 INR'
      }
    ]
  },
  '/services/vastu-consultation': {
    title: 'Scientific Vastu Consultation | Hari Ram Beekrwar',
    description: 'Book Vastu Consultation with Hari Ram Beekrwar from ₹20,000+. Get personalized remedies for home & office. Call +91 9509610711 today.',
    keywords: 'Scientific Vastu Consultation, Residential Vastu, Commercial Vastu, Non-destructive Vastu Remedies, Office Vastu',
    canonicalPath: '/services/vastu-consultation',
    ogType: 'website',
    ogImage: `${SITE_URL}/Resource/2.png`,
    ogImageAlt: 'Scientific and Traditional Vastu Consultation',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Vastu Consultation', path: '/services/vastu-consultation' }
    ],
    services: [
      {
        name: 'Scientific & Traditional Vastu Consultation',
        description: 'Detailed evaluation of residential or commercial properties with non-destructive elemental remedies.',
        price: '20000 INR'
      }
    ]
  },
  '/urgent-love-plan': {
    title: 'Urgent Love Plan Consultation | Hari Ram Beekrwar',
    description: 'Need urgent relationship solutions? Get the Urgent Love Plan for ₹3,200 with Hari Ram Beekrwar. Call +91 9509610711 for immediate guidance.',
    keywords: 'Urgent Love Plan, Relationship Numerology, Marriage Compatibility Consultation, Priority Numerology Slot',
    canonicalPath: '/urgent-love-plan',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Urgent Love and Relationship Numerology Plan',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Urgent Love Plan', path: '/urgent-love-plan' }
    ],
    services: [
      {
        name: 'Urgent Love & Relationship Priority Plan',
        description: 'Fast-tracked 24-hour priority consultation focusing on relationship alignment and compatibility.',
        price: '3200 INR'
      }
    ]
  },
  '/reports': {
    title: 'Personal Numerology Reports | Hari Ram Beekrwar',
    description: 'Get detailed Numerology Reports from ₹3,999+ by Hari Ram Beekrwar. Marriage & Career blueprints available. Call +91 9509610711 to order.',
    keywords: 'Numerology Reports PDF, Marriage Compatibility Blueprint, Career and Wealth Matrix, Manual Numerology Chart',
    canonicalPath: '/reports',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Handcrafted Personal Numerology Reports',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Reports', path: '/reports' }
    ]
  },
  '/tools': {
    title: 'Free Numerology Calculator | Hari Ram Beekrwar',
    description: 'Use the Free Numerology Calculator by Hari Ram Beekrwar to reveal your core numbers. Get instant insights rooted in numerology. Try it now.',
    keywords: 'Free Numerology Calculator, Destiny Number Calculator, Name Numerology Online, Vedic Number Vibration',
    canonicalPath: '/tools',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Free Vedic Numerology Calculator Tool',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Free Tools', path: '/tools' }
    ]
  },
  '/blog': {
    title: 'Cosmic Wisdom Blog | Hari Ram Beekrwar',
    description: 'Explore the Cosmic Blog by Hari Ram Beekrwar for numerology insights, Vastu tips, and zodiac wisdom. Read our latest authentic articles.',
    keywords: 'Numerology Blog, Vastu Shastra Articles, Planetary Transits, Name Correction Tips, Cosmic Wisdom',
    canonicalPath: '/blog',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Cosmic Wisdom Blog by Hari Ram Beekrwar',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' }
    ]
  },
  '/blog/saturn-transit': {
    title: 'Saturn Transit Effects & Remedies | Hari Ram Beekrwar',
    description: "Learn Saturn transit effects on your numbers and life. Practical Vastu & numerology remedies to reduce hurdles. Consult Hari Ram Beekrwar.",
    keywords: 'Saturn Transit Numerology, Shani Transit Effects, Saturn Remedies, Planetary Transit Alignment',
    canonicalPath: '/blog/saturn-transit',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Saturn Transit Effects and Numerology Remedies',
    articleMeta: {
      publishedTime: '2026-10-01',
      author: 'Hari Ram Beekrwar'
    },
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Saturn Transit', path: '/blog/saturn-transit' }
    ]
  },
  '/blog/vastu-office': {
    title: 'Office Vastu Tips for Business Growth | Hari Ram Beekrwar',
    description: 'Improve workplace energy with practical Office Vastu tips for growth and prosperity. Get personalised guidance from expert Hari Ram Beekrwar.',
    keywords: 'Office Vastu Tips, Commercial Vastu, Workplace Energy, Business Growth Vastu, Cash Flow Vastu',
    canonicalPath: '/blog/vastu-office',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Office Vastu Tips for Business Success',
    articleMeta: {
      publishedTime: '2026-09-15',
      author: 'Hari Ram Beekrwar'
    },
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Office Vastu', path: '/blog/vastu-office' }
    ]
  },
  '/blog/name-correction-science': {
    title: 'Name Correction in Numerology | Hari Ram Beekrwar',
    description: 'Discover how name correction in numerology aligns vibrations with your life goals. Learn the science. Consult Hari Ram Beekrwar for guidance.',
    keywords: 'Name Correction Numerology, Alphabet Vibrations, Destiny Alignment, Name Spelling Change',
    canonicalPath: '/blog/name-correction-science',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'The Science of Name Correction in Numerology',
    articleMeta: {
      publishedTime: '2026-08-20',
      author: 'Hari Ram Beekrwar'
    },
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Name Correction', path: '/blog/name-correction-science' }
    ]
  },
  '/blog/wristwatch-numerology': {
    title: 'Wristwatch Numerology Guide | Hari Ram Beekrwar',
    description: 'Learn wristwatch numerology to pick a lucky timepiece that attracts clarity and authority. Expert guidance by Hari Ram Beekrwar. Call now.',
    keywords: 'Wristwatch Numerology, Dial Color Numerology, Lucky Wristwatch, Energy Alignment Clock',
    canonicalPath: '/blog/wristwatch-numerology',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Wristwatch Numerology and Dial Colors Guide',
    articleMeta: {
      publishedTime: '2026-07-10',
      author: 'Hari Ram Beekrwar'
    },
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Wristwatch Numerology', path: '/blog/wristwatch-numerology' }
    ]
  },
  '/contact': {
    title: 'Contact Us | Hari Ram Beekrwar Support',
    description: 'Reach Hari Ram Beekrwar in Bharatpur, Rajasthan for numerology support and consultation bookings. Call +91 9509610711. Get in touch today.',
    keywords: 'Contact Hari Ram Beekrwar, Numerologist Phone Number, Consultation WhatsApp, Bharatpur Rajasthan Office',
    canonicalPath: '/contact',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Contact Hari Ram Beekrwar Support',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ]
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Hari Ram Beekrwar',
    description: 'Read the Privacy Policy of Hari Ram Beekrwar to understand how personal information is collected, used and protected. Call +91 9509610711.',
    canonicalPath: '/privacy-policy',
    ogType: 'website',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' }
    ]
  },
  '/refund-policy': {
    title: 'Refund & Cancellation Policy | Hari Ram Beekrwar',
    description: 'Understand the refund and cancellation policy for consultation fees and services offered by Hari Ram Beekrwar. Call +91 9509610711 for help.',
    canonicalPath: '/refund-policy',
    ogType: 'website',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Refund Policy', path: '/refund-policy' }
    ]
  },
  '/terms': {
    title: 'Terms & Conditions | Hari Ram Beekrwar',
    description: 'Review the Terms & Conditions for consultations, bookings and website use with Hari Ram Beekrwar. Call +91 9509610711 for questions.',
    canonicalPath: '/terms',
    ogType: 'website',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms' }
    ]
  },
  // Private / Client-Only Routes
  '/booking': {
    title: 'Book Consultation | Hari Ram Beekrwar',
    description: 'Book your private 1-on-1 Numerology consultation session securely.',
    canonicalPath: '/booking',
    noindex: true
  },
  '/dashboard': {
    title: 'Client Portal | Hari Ram Beekrwar',
    description: 'Access your consultation notes, reports, and resources.',
    canonicalPath: '/dashboard',
    noindex: true
  }
};

/**
 * Generate sitewide and per-page JSON-LD schemas
 */
export function generateStructuredData(config: RouteSEOConfig) {
  const schemas: any[] = [];
  const canonicalUrl = `${SITE_URL}${config.canonicalPath === '/' ? '' : config.canonicalPath}`;

  // 1. Sitewide WebSite Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND_NAME,
    description: 'Vedic Numerology & Scientific Vastu Consultations by Hari Ram Beekrwar',
    inLanguage: 'en-IN'
  });

  // 2. Sitewide ProfessionalService / LocalBusiness Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/Resource/logo.jpeg`,
    image: `${SITE_URL}/Resource/2.png`,
    telephone: DEFAULT_PHONE,
    priceRange: '₹3,200 - ₹20,000',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bharatpur',
      addressRegion: 'Rajasthan',
      postalCode: '321001',
      addressCountry: 'IN'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    sameAs: [
      'https://www.instagram.com/harirambeekrwar/',
      'https://facebook.com/profile.php?id=61571128232956',
      'https://www.youtube.com/@HariRamBeekrwar'
    ]
  });

  // 3. BreadcrumbList Schema (for inner pages)
  if (config.breadcrumbItems && config.breadcrumbItems.length > 1) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: config.breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${SITE_URL}${item.path === '/' ? '' : item.path}`
      }))
    });
  }

  // 4. FAQPage Schema (only where genuine FAQs exist)
  if (config.faqs && config.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  // 5. Service Schema
  if (config.services && config.services.length > 0) {
    config.services.forEach(service => {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.name,
        description: service.description,
        provider: {
          '@id': `${SITE_URL}/#business`
        },
        areaServed: {
          '@type': 'Country',
          name: 'India'
        },
        offers: service.price ? {
          '@type': 'Offer',
          price: service.price.replace(/[^\d]/g, ''),
          priceCurrency: 'INR'
        } : undefined
      });
    });
  }

  // 6. Article Schema (for blog detail pages)
  if (config.ogType === 'article') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: config.title,
      description: config.description,
      image: config.ogImage || DEFAULT_OG_IMAGE,
      url: canonicalUrl,
      datePublished: config.articleMeta?.publishedTime || '2026-10-01',
      author: {
        '@type': 'Person',
        name: config.articleMeta?.author || BRAND_NAME,
        url: `${SITE_URL}/about`
      },
      publisher: {
        '@type': 'Organization',
        name: BRAND_NAME,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/Resource/logo.jpeg`
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl
      }
    });
  }

  return schemas;
}
