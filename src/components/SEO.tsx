import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noIndex?: boolean;
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
}

interface StructuredDataBase {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  image: string;
  publisher: {
    '@type': string;
    name: string;
    url: string;
    logo: {
      '@type': string;
      url: string;
    };
  };
  mainEntityOfPage: {
    '@type': string;
    '@id': string;
  };
  headline?: string;
  datePublished?: string;
  dateModified?: string;
  author?: {
    '@type': string;
    name: string;
  };
  articleSection?: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Yarnix Labs - AI & Software Solutions | Custom Development Services',
  description = 'Yarnix Labs builds cutting-edge AI and software solutions for modern businesses. Expert AI development, custom web applications, automation, and DevOps services. Transform your business with innovative technology.',
  keywords = 'AI development, software solutions, web development, custom applications, automation, DevOps, machine learning, artificial intelligence, business technology, digital transformation',
  image = 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bd76f503-6b6a-41b0-abb2-f29906bb9fd0/id-preview-0f05dd65--138fc60e-0322-4585-a3a0-b9c57c01bf45.lovable.app-1771269943080.png',
  imageAlt = 'Yarnix Labs - AI & Software Solutions',
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'Yarnix Labs',
  section,
  tags,
  noIndex = false,
  canonicalUrl,
  structuredData
}) => {
  const location = useLocation();
  const fullUrl = canonicalUrl || `https://www.yarnix-labs.com${location.pathname}${location.search}`;
  const siteName = 'Yarnix Labs';

  const robotsMeta = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const baseStructuredData: StructuredDataBase = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : 'WebPage',
    name: title,
    description: description,
    url: fullUrl,
    image: image,
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: 'https://www.yarnix-labs.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.yarnix-labs.com/favicon.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    }
  };

  // Add article-specific structured data
  if (type === 'article') {
    baseStructuredData['@type'] = 'Article';
    baseStructuredData.headline = title;
    baseStructuredData.datePublished = publishedTime;
    baseStructuredData.dateModified = modifiedTime || publishedTime;
    baseStructuredData.author = {
      '@type': 'Organization',
      name: author
    };
    if (section) baseStructuredData.articleSection = section;
    if (tags && tags.length > 0) baseStructuredData.keywords = tags.join(', ');
  }

  const finalStructuredData = structuredData ? { ...baseStructuredData, ...structuredData } : baseStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robotsMeta} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific Open Graph tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@yarnixlabs" />
      <meta name="twitter:creator" content="@yarnixlabs" />
      
      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="application-name" content={siteName} />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
