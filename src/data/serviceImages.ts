
// This file contains service-specific image paths for section content
// These replace generic placeholders with high-quality, relevant images

export const ServiceImages: Record<string, Record<string, string>> = {
  'web-development': {
    'overview': '/images/services/web-development/overview.jpg',
    'frontend': '/images/services/web-development/frontend.jpg',
    'backend': '/images/services/web-development/backend.jpg',
    'responsive': '/images/services/web-development/responsive.jpg',
    'ecommerce': '/images/services/web-development/ecommerce.jpg',
    'cms': '/images/services/web-development/cms.jpg',
  },
  'digital-marketing': {
    'strategy': '/images/services/digital-marketing/strategy.jpg',
    'channels': '/images/services/digital-marketing/channels.jpg',
    'analytics': '/images/services/digital-marketing/analytics.jpg',
    'social': '/images/services/digital-marketing/social.jpg',
    'ppc': '/images/services/digital-marketing/ppc.jpg',
  },
  'seo': {
    'technical-seo': '/images/services/seo/technical-seo.jpg',
    'on-page-seo': '/images/services/seo/on-page-seo.jpg',
    'off-page-seo': '/images/services/seo/off-page-seo.jpg',
    'local-seo': '/images/services/seo/local-seo.jpg',
    'keyword-research': '/images/services/seo/keyword-research.jpg',
  },
  'app-development': {
    'native': '/images/services/app-development/native.jpg',
    'cross-platform': '/images/services/app-development/cross-platform.jpg',
    'ui-design': '/images/services/app-development/ui-design.jpg',
    'features': '/images/services/app-development/features.jpg',
    'testing': '/images/services/app-development/testing.jpg',
  },
  'design': {
    'ux-research': '/images/services/design/ux-research.jpg',
    'ui-design': '/images/services/design/ui-design.jpg',
    'branding': '/images/services/design/branding.jpg',
    'prototyping': '/images/services/design/prototyping.jpg',
    'design-system': '/images/services/design/design-system.jpg',
  },
  'analytics': {
    'data-analysis': '/images/services/analytics/data-analysis.jpg',
    'dashboards': '/images/services/analytics/dashboards.jpg',
    'reporting': '/images/services/analytics/reporting.jpg',
    'optimization': '/images/services/analytics/optimization.jpg',
    'insights': '/images/services/analytics/insights.jpg',
  },
  'tech-consulting': {
    'strategy': '/images/services/tech-consulting/strategy.jpg',
    'architecture': '/images/services/tech-consulting/architecture.jpg',
    'roadmap': '/images/services/tech-consulting/roadmap.jpg',
    'security': '/images/services/tech-consulting/security.jpg',
    'transformation': '/images/services/tech-consulting/transformation.jpg',
  },
  'maintenance': {
    'support': '/images/services/maintenance/support.jpg',
    'updates': '/images/services/maintenance/updates.jpg',
    'monitoring': '/images/services/maintenance/monitoring.jpg',
    'backups': '/images/services/maintenance/backups.jpg',
    'optimization': '/images/services/maintenance/optimization.jpg',
  },
  'training': {
    'workshops': '/images/services/training/workshops.jpg',
    'materials': '/images/services/training/materials.jpg',
    'coaching': '/images/services/training/coaching.jpg',
    'certification': '/images/services/training/certification.jpg',
    'team': '/images/services/training/team.jpg',
  }
};

// Default fallback images based on service type
export const ServiceDefaultImages = {
  'overview': '/images/services/default/overview.jpg',
  'features': '/images/services/default/features.jpg',
  'process': '/images/services/default/process.jpg',
  'benefits': '/images/services/default/benefits.jpg',
  'tools': '/images/services/default/tools.jpg',
};

// Function to get service image with fallback
export const getServiceSectionImage = (serviceId: string, sectionId: string): string => {
  // Try to get service-specific image
  if (ServiceImages[serviceId] && ServiceImages[serviceId][sectionId]) {
    return ServiceImages[serviceId][sectionId];
  }
  
  // Try to get generic section image
  if (ServiceDefaultImages[sectionId]) {
    return ServiceDefaultImages[sectionId];
  }
  
  // Fallback to placeholder
  return `/images/services/${serviceId}-${sectionId}.jpg`;
};
