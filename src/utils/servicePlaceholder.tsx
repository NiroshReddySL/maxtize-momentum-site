
import React from 'react';

// This function generates a placeholder SVG for service images when they're not available
export const generateServicePlaceholder = (serviceId: string, type: 'hero' | 'card' | 'section' = 'card') => {
  const colors: Record<string, { bg: string, accent: string, text: string }> = {
    'digital-marketing': { bg: '#FEF3C7', accent: '#F59E0B', text: '#92400E' },
    'seo': { bg: '#E0E7FF', accent: '#6366F1', text: '#3730A3' },
    'web-development': { bg: '#DBEAFE', accent: '#3B82F6', text: '#1E40AF' },
    'app-development': { bg: '#FCE7F3', accent: '#EC4899', text: '#9D174D' },
    'design': { bg: '#ECFDF5', accent: '#10B981', text: '#065F46' },
    'analytics': { bg: '#EDE9FE', accent: '#8B5CF6', text: '#5B21B6' },
    'tech-consulting': { bg: '#FEE2E2', accent: '#EF4444', text: '#991B1B' },
    'maintenance': { bg: '#FEF3C7', accent: '#F59E0B', text: '#92400E' },
    'training': { bg: '#FEF3C7', accent: '#F59E0B', text: '#92400E' },
    'default': { bg: '#F3F4F6', accent: '#6B7280', text: '#1F2937' }
  };

  const colorSet = colors[serviceId] || colors.default;
  const title = serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  let width = 800;
  let height = 400;
  
  if (type === 'hero') {
    height = 600;
  } else if (type === 'card') {
    height = 200;
  }

  const svgString = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="${colorSet.bg}"/>
      <rect x="0" y="0" width="${width}" height="${height}" fill="url(#pattern)"/>
      <defs>
        <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="20" cy="20" r="2" fill="${colorSet.accent}" opacity="0.3"/>
        </pattern>
      </defs>
      <rect x="${width/2 - 180}" y="${height/2 - 50}" width="360" height="100" rx="10" fill="${colorSet.accent}" opacity="0.8"/>
      <text x="${width/2}" y="${height/2 + 10}" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="${colorSet.text}" text-anchor="middle">${title}</text>
      <text x="${width/2}" y="${height/2 + 40}" font-family="Arial, sans-serif" font-size="16" fill="${colorSet.text}" text-anchor="middle">Professional ${title} Services</text>
    </svg>
  `;

  const encodedSvg = encodeURIComponent(svgString);
  return `data:image/svg+xml,${encodedSvg}`;
};

// React component that renders the service placeholder
interface ServicePlaceholderProps {
  serviceId: string;
  type?: 'hero' | 'card' | 'section';
  className?: string;
}

export const ServicePlaceholder: React.FC<ServicePlaceholderProps> = ({ serviceId, type = 'card', className }) => {
  const placeholderSrc = generateServicePlaceholder(serviceId, type);
  
  return (
    <img 
      src={placeholderSrc} 
      alt={`${serviceId} placeholder`} 
      className={className || 'w-full h-full object-cover'} 
    />
  );
};

export default ServicePlaceholder;
