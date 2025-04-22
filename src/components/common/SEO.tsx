
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

interface HrefLangLink {
  lang: string;
  href: string;
}

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
  hrefLangs?: HrefLangLink[];
  locale?: string;
  jsonLd?: Record<string, any>;
  structuredData?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.png', 
  ogType = 'website',
  canonical,
  hrefLangs = [],
  locale,
  jsonLd,
  structuredData
}: SEOProps) => {
  const { currentLang } = useLanguage();
  
  // Use currentLang from context if locale is not provided
  const actualLocale = locale || (currentLang === 'en-GB' ? 'en_GB' : currentLang === 'en' ? 'en_US' : currentLang);
  
  // Create JSON-LD script
  const generateJsonLd = () => {
    if (!jsonLd) return null;
    return {
      __html: JSON.stringify(jsonLd)
    };
  };

  // Additional structured data if provided
  const generateStructuredData = () => {
    if (!structuredData) return null;
    return {
      __html: structuredData
    };
  };

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={actualLocale} />
      
      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical link */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Hreflang links */}
      {hrefLangs.map((link) => (
        <link 
          key={link.lang} 
          rel="alternate" 
          hrefLang={link.lang} 
          href={link.href} 
        />
      ))}
      
      {/* If multiple languages but no x-default, add it */}
      {hrefLangs.length > 0 && !hrefLangs.some(link => link.lang === 'x-default') && (
        <link 
          rel="alternate" 
          hrefLang="x-default" 
          href={canonical || window.location.href.split('?')[0]} 
        />
      )}
      
      {/* JSON-LD structured data */}
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={generateJsonLd()} />
      )}
      
      {/* Additional structured data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={generateStructuredData()} />
      )}
    </Helmet>
  );
};

export default SEO;
