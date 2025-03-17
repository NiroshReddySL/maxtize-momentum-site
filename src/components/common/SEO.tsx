
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
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.png', 
  ogType = 'website',
  canonical,
  hrefLangs = [],
  locale
}: SEOProps) => {
  const { currentLang } = useLanguage();
  
  // Use currentLang from context if locale is not provided
  const actualLocale = locale || (currentLang === 'en-GB' ? 'en_GB' : currentLang === 'en' ? 'en_US' : currentLang);
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:image', ogImage);
    updateMetaTag('og:type', ogType);
    updateMetaTag('og:locale', actualLocale);
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Update canonical link
    let canonicalUrl = canonical || window.location.href;
    // Ensure canonical URL doesn't include query parameters
    canonicalUrl = canonicalUrl.split('?')[0];
    updateLinkTag('canonical', canonicalUrl);
    
    // Update hreflang links
    updateHrefLangLinks(hrefLangs);
    
    // Add x-default hreflang if not present
    const hasXDefault = hrefLangs.some(link => link.lang === 'x-default');
    if (!hasXDefault && hrefLangs.length > 0) {
      updateLinkTag('alternate', canonicalUrl, 'x-default');
    }
  }, [title, description, keywords, ogImage, ogType, canonical, hrefLangs, actualLocale, currentLang]);

  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      const attr = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
      meta.setAttribute(attr, name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };
  
  const updateLinkTag = (rel: string, href?: string, hrefLang?: string) => {
    if (!href) return;
    
    // For hreflang, we need to find by both rel and hreflang
    const selector = hrefLang 
      ? `link[rel="${rel}"][hreflang="${hrefLang}"]`
      : `link[rel="${rel}"]`;
      
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
  
  const updateHrefLangLinks = (links: HrefLangLink[]) => {
    // Remove old hreflangs that are not in the new list
    const oldHrefLangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    oldHrefLangs.forEach(link => {
      const lang = link.getAttribute('hreflang');
      if (lang !== 'x-default' && !links.some(l => l.lang === lang)) {
        document.head.removeChild(link);
      }
    });
    
    // Add/update hreflangs
    links.forEach(link => {
      updateLinkTag('alternate', link.href, link.lang);
    });
  };

  return null; // This component doesn't render anything
};

export default SEO;
