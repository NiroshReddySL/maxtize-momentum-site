
import React from 'react';
import { Globe, Search, Code, Smartphone, Paintbrush, BarChart3, Zap, Server, Award } from 'lucide-react';
import { ServiceType } from '@/types/service';

export const services: ServiceType[] = [
  {
    id: 'digital-marketing',
    icon: <Globe size={32} />,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive traffic and convert prospects into loyal customers.',
    features: [
      'Social Media Marketing',
      'Content Strategy',
      'Email Marketing Campaigns',
      'PPC Advertising',
      'Conversion Optimization',
      'Marketing Automation'
    ]
  },
  {
    id: 'seo',
    icon: <Search size={32} />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and rank higher in search engine results.',
    features: [
      'On-Page SEO',
      'Off-Page SEO',
      'Technical SEO',
      'Local SEO',
      'Keyword Research',
      'SEO Audit & Strategy'
    ]
  },
  {
    id: 'web-development',
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    features: [
      'Responsive Website Design',
      'E-commerce Development',
      'CMS Development',
      'Progressive Web Apps',
      'Frontend & Backend Development',
      'API Integration'
    ]
  },
  {
    id: 'app-development',
    icon: <Smartphone size={32} />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that engage users.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform Solutions',
      'App Design & UX',
      'App Maintenance & Support',
      'App Store Optimization'
    ]
  },
  {
    id: 'design',
    icon: <Paintbrush size={32} />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and satisfaction.',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Interface Design',
      'Design Systems',
      'User Testing',
      'Interaction Design'
    ]
  },
  {
    id: 'analytics',
    icon: <BarChart3 size={32} />,
    title: 'Analytics & Reporting',
    description: 'Comprehensive insights to track performance and guide strategic decisions.',
    features: [
      'Data Analysis',
      'Custom Dashboard Setup',
      'Performance Tracking',
      'Conversion Funnel Analysis',
      'User Behavior Analysis',
      'Regular Reporting'
    ]
  },
  {
    id: 'tech-consulting',
    icon: <Zap size={32} />,
    title: 'Technology Consulting',
    description: 'Expert guidance on technology decisions and digital transformation.',
    features: [
      'Digital Transformation Strategy',
      'Technology Stack Selection',
      'Product Roadmap Planning',
      'Legacy System Modernization',
      'IT Infrastructure Planning',
      'Security Assessment'
    ]
  },
  {
    id: 'maintenance',
    icon: <Server size={32} />,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance and support to keep your digital assets running smoothly.',
    features: [
      '24/7 Technical Support',
      'Regular Updates & Patches',
      'Performance Optimization',
      'Security Monitoring',
      'Backup & Recovery',
      'Service Level Agreements'
    ]
  },
  {
    id: 'training',
    icon: <Award size={32} />,
    title: 'Training & Workshops',
    description: "Knowledge transfer and skill-building for your team's digital capabilities.",
    features: [
      'Digital Marketing Training',
      'CMS Management',
      'SEO Best Practices',
      'Analytics Interpretation',
      'Content Creation',
      'Technical Skills Development'
    ]
  }
];
