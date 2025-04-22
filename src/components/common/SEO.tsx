
import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

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
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to create and set meta tags
    const setMetaTag = (name: string, content: string, property?: string) => {
      let meta = document.querySelector(`meta[${property ? 'property' : 'name'}="${property || name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', property);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };
    
    // Helper function to create and set link tags
    const setLinkTag = (rel: string, href: string, hrefLang?: string) => {
      let selector = `link[rel="${rel}"]${hrefLang ? `[hreflang="${hrefLang}"]` : ''}`;
      let link = document.querySelector(selector);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (hrefLang) {
          link.setAttribute('hreflang', hrefLang);
        }
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };
    
    // Set meta tags
    setMetaTag('description', description);
    if (keywords) setMetaTag('keywords', keywords);
    
    // Set Open Graph tags
    setMetaTag('og:title', title, 'og:title');
    setMetaTag('og:description', description, 'og:description');
    setMetaTag('og:image', ogImage, 'og:image');
    setMetaTag('og:type', ogType, 'og:type');
    setMetaTag('og:locale', actualLocale, 'og:locale');
    
    // Set Twitter tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);
    
    // Set canonical link if provided
    if (canonical) {
      setLinkTag('canonical', canonical);
    }
    
    // Set hreflang links
    hrefLangs.forEach(link => {
      setLinkTag('alternate', link.href, link.lang);
    });
    
    // Add x-default if multiple languages but no x-default
    if (hrefLangs.length > 0 && !hrefLangs.some(link => link.lang === 'x-default')) {
      setLinkTag('alternate', canonical || window.location.href.split('?')[0], 'x-default');
    }
    
    // Handle JSON-LD structured data
    let jsonLdScript = document.querySelector('script[type="application/ld+json"].jsonld-main');
    if (jsonLd) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement('script');
        jsonLdScript.setAttribute('type', 'application/ld+json');
        jsonLdScript.classList.add('jsonld-main');
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(jsonLd);
    } else if (jsonLdScript) {
      jsonLdScript.remove();
    }
    
    // Handle additional structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"].structured-data');
    if (structuredData) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.classList.add('structured-data');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = structuredData;
    } else if (structuredDataScript) {
      structuredDataScript.remove();
    }
    
    // Cleanup function to remove tags when component unmounts
    return () => {
      // We don't remove meta tags here to prevent flickering
      // They will be overwritten by the next SEO component
    };
  }, [title, description, keywords, ogImage, ogType, canonical, hrefLangs, actualLocale, jsonLd, structuredData]);
  
  // This component doesn't render anything visible
  return null;
};

export default SEO;
