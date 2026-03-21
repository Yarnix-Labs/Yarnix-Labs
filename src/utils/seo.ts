// SEO utility functions for Yarnix Labs

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
}

// Generate structured data for different content types
export const generateStructuredData = {
  // Organization structured data
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yarnix Labs',
    url: 'https://www.yarnix-labs.com',
    logo: 'https://www.yarnix-labs.com/favicon.png',
    description: 'Yarnix Labs builds cutting-edge AI and software solutions for modern businesses.',
    sameAs: [
      'https://twitter.com/yarnixlabs',
      'https://linkedin.com/company/yarnix-labs'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-0123',
      contactType: 'customer service',
      availableLanguage: ['English']
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    }
  },

  // Website structured data
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yarnix Labs',
    url: 'https://www.yarnix-labs.com',
    description: 'Yarnix Labs builds cutting-edge AI and software solutions for modern businesses.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.yarnix-labs.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  },

  // Service structured data
  service: (serviceName: string, description: string) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: description,
    provider: {
      '@type': 'Organization',
      name: 'Yarnix Labs',
      url: 'https://www.yarnix-labs.com'
    },
    areaServed: 'Worldwide',
    serviceType: 'Professional Service'
  }),

  // Article structured data
  article: (data: SEOData & { url: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    url: data.url,
    image: data.image,
    datePublished: data.publishedTime,
    dateModified: data.modifiedTime || data.publishedTime,
    author: {
      '@type': 'Organization',
      name: data.author || 'Yarnix Labs'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yarnix Labs',
      url: 'https://www.yarnix-labs.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yarnix-labs.com/favicon.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.url
    },
    ...(data.section && { articleSection: data.section }),
    ...(data.tags && data.tags.length > 0 && { keywords: data.tags.join(', ') })
  }),

  // Breadcrumb structured data
  breadcrumbs: (breadcrumbs: Array<{ name: string; url: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }),

  // FAQ structured data
  faq: (faqs: Array<{ question: string; answer: string }>) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  })
};

// SEO constants
export const SEO_CONSTANTS = {
  SITE_NAME: 'Yarnix Labs',
  SITE_URL: 'https://www.yarnix-labs.com',
  DEFAULT_IMAGE: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bd76f503-6b6a-41b0-abb2-f29906bb9fd0/id-preview-0f05dd65--138fc60e-0322-4585-a3a0-b9c57c01bf45.lovable.app-1771269943080.png',
  TWITTER_HANDLE: '@yarnixlabs',
  DEFAULT_KEYWORDS: [
    'AI development',
    'software solutions',
    'web development',
    'custom applications',
    'automation',
    'DevOps',
    'machine learning',
    'artificial intelligence',
    'business technology',
    'digital transformation'
  ].join(', '),
  DEFAULT_DESCRIPTION: 'Yarnix Labs builds cutting-edge AI and software solutions for modern businesses. Expert AI development, custom web applications, automation, and DevOps services.'
};

// Generate page-specific SEO data
export const generatePageSEO = {
  home: (): SEOData => ({
    title: 'Yarnix Labs - AI & Software Solutions | Custom Development Services',
    description: SEO_CONSTANTS.DEFAULT_DESCRIPTION,
    keywords: SEO_CONSTANTS.DEFAULT_KEYWORDS,
    type: 'website'
  }),

  about: (): SEOData => ({
    title: 'About Yarnix Labs | Our Story & Mission',
    description: 'Learn about Yarnix Labs - our mission, values, and the team behind cutting-edge AI and software solutions for modern businesses.',
    keywords: 'about yarnix labs, company story, mission, values, team',
    type: 'website'
  }),

  services: (): SEOData => ({
    title: 'AI Development & Software Solutions | Yarnix Labs Services',
    description: 'Discover our comprehensive AI development, software solutions, and DevOps services. Transform your business with cutting-edge technology.',
    keywords: 'AI development services, software solutions, DevOps, automation, machine learning services',
    type: 'website'
  }),

  projects: (): SEOData => ({
    title: 'Our Projects | Yarnix Labs Portfolio',
    description: 'Explore our portfolio of successful AI development projects, software solutions, and digital transformations for businesses worldwide.',
    keywords: 'projects portfolio, case studies, AI projects, software development examples',
    type: 'website'
  }),

  blog: (): SEOData => ({
    title: 'Yarnix Labs Blog | AI & Technology Insights',
    description: 'Stay updated with the latest trends in AI development, software solutions, and technology insights from our expert team.',
    keywords: 'AI blog, technology insights, software development trends, machine learning articles',
    type: 'website'
  }),

  contact: (): SEOData => ({
    title: 'Contact Yarnix Labs | Get in Touch',
    description: 'Ready to transform your business with AI and software solutions? Contact Yarnix Labs today for a consultation.',
    keywords: 'contact yarnix labs, get in touch, AI consultation, software development quote',
    type: 'website'
  }),

  blogPost: (title: string, excerpt: string, tags: string[], publishDate: string): SEOData => ({
    title: `${title} | Yarnix Labs Blog`,
    description: excerpt,
    keywords: tags.join(', '),
    type: 'article',
    publishedTime: publishDate,
    tags: tags,
    section: 'Technology'
  }),

  projectDetail: (title: string, description: string, technologies: string[]): SEOData => ({
    title: `${title} | Yarnix Labs Project`,
    description: description,
    keywords: technologies.join(', '),
    type: 'website',
    section: 'Portfolio'
  })
};

// Utility functions
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const formatReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};
