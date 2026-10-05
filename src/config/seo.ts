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
    title: 'Vedic Numerology Consultant | Hari Ram Beekrwar',
    description: 'Consult trusted Vedic Numerology expert Hari Ram Beekrwar. Get personalized guidance for career, relationships & personal growth. Call or WhatsApp +91 9509610711.',
    keywords: 'Numerology Consultant, Numerology Consultant India, Hari Ram Beekrwar, Vedic Numerology, Name Correction, Destiny Numbers',
    canonicalPath: '/',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Hari Ram Beekrwar — Vedic Numerology Consultant',
    faqs: [
      {
        question: 'What is the duration of a consultation session?',
        answer: 'Each one-on-one numerology consultation session typically lasts 45 to 60 minutes over a private voice or video call.'
      },
      {
        question: 'What information do I need to provide for a consultation?',
        answer: 'You will need to provide your full legal name, date of birth, time of birth (if known), and city of birth.'
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
  '/vastu-consultation': {
    title: 'Vastu Consultation Services | Hari Ram Beekrwar',
    description: 'Authentic Scientific & Traditional Vastu consultation for home, office & plot. Practical remedies without structural demolition. Enquire via WhatsApp.',
    keywords: 'Vastu Consultation, Scientific Vastu, Traditional Vastu Shastra, Residential Vastu, Commercial Vastu, Hari Ram Beekrwar, No Demolition Vastu Remedies',
    canonicalPath: '/vastu-consultation',
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Scientific and Traditional Vastu Consultation by Hari Ram Beekrwar',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Vastu Consultation', path: '/vastu-consultation' }
    ],
    faqs: [
      {
        question: 'Do I need to break walls or demolish structures for Vastu corrections?',
        answer: 'No. Hari Ram Beekrwar specializes strictly in non-invasive, no-demolition remedies through energy balancing and directional alignment.'
      },
      {
        question: 'Can Vastu consultation be conducted online using floor plans?',
        answer: 'Yes, online consultations are seamlessly conducted using detailed layout maps, cardinal directions, and property photos or videos.'
      },
      {
        question: 'What types of properties are covered in Vastu consultation?',
        answer: 'Consultations cover residential homes, apartments, commercial offices, retail shops, factories, industrial plants, and plot/land evaluation.'
      }
    ]
  },
  '/about': {
    title: 'About Hari Ram Beekrwar | Vedic Numerology Consultant',
    description: 'About Hari Ram Beekrwar: 1-on-1 Numerology Consultation at ₹3,200. Call +91 9509610711 to book your session.',
    keywords: 'About Hari Ram Beekrwar, Vedic Numerology Expert, Numerologist Profile, Energy Alignment',
    canonicalPath: '/about',
    ogType: 'profile',
    ogImage: `${SITE_URL}/Resource/1.png`,
    ogImageAlt: 'Hari Ram Beekrwar Profile and Experience',
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' }
    ]
  },
  '/blog': {
    title: 'Cosmic Wisdom Blog | Hari Ram Beekrwar',
    description: 'Explore the Cosmic Blog by Hari Ram Beekrwar for numerology insights, name correction tips, and zodiac wisdom. Read our latest authentic articles.',
    keywords: 'Numerology Blog, Planetary Transits, Name Correction Tips, Cosmic Wisdom',
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
    description: "Learn Saturn transit effects on your numbers and life. Practical numerology remedies to reduce hurdles. Consult Hari Ram Beekrwar.",
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
  '/blog/business-numerology-growth': {
    title: 'Business Numerology Tips for Growth | Hari Ram Beekrwar',
    description: 'Improve business energy with practical numerology strategies for growth and prosperity. Get personalised guidance from expert Hari Ram Beekrwar.',
    keywords: 'Business Numerology, Commercial Prosperity, Workplace Energy, Business Growth Numerology, Cash Flow Numbers',
    canonicalPath: '/blog/business-numerology-growth',
    ogType: 'article',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: 'Business Numerology Tips for Success',
    articleMeta: {
      publishedTime: '2026-09-15',
      author: 'Hari Ram Beekrwar'
    },
    breadcrumbItems: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Business Numerology', path: '/blog/business-numerology-growth' }
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
    description: 'Vedic Numerology Consultations by Hari Ram Beekrwar',
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
    priceRange: '₹3,200',
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
