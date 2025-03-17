
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  canonical?: string;
}

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.png', 
  ogType = 'website',
  canonical
}: SEOProps) => {
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
    
    // Update Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Update canonical link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }
  }, [title, description, keywords, ogImage, ogType, canonical]);

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

  return null; // This component doesn't render anything
};

export default SEO;
