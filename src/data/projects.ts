
import { ProjectType } from "@/types/project";

export const projects: ProjectType[] = [
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Redesign & SEO',
    category: 'Web Development & SEO',
    client: 'Fashion Retailer',
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&w=800&q=80',
    description: 'Complete redesign of an e-commerce platform with focus on user experience, conversion optimization, and SEO performance.',
    results: ['248% increase in organic traffic', '156% increase in conversion rate', '75% reduction in page load time'],
    tags: ['E-commerce', 'SEO', 'Web Development', 'UX Design'],
    link: '/projects/ecommerce-redesign'
  },
  {
    id: 'financial-app',
    title: 'Financial Services App',
    category: 'Mobile App Development',
    client: 'Banking Institution',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description: 'A secure, user-friendly mobile application for financial services, featuring real-time transaction tracking, investment portfolio management, and advanced security protocols.',
    results: ['1M+ downloads', '4.8/5 app store rating', '35% increase in mobile banking users'],
    tags: ['Mobile App', 'FinTech', 'UI/UX', 'Security'],
    link: '/projects/financial-app'
  },
  {
    id: 'healthcare-campaign',
    title: 'Healthcare Marketing Campaign',
    category: 'Digital Marketing',
    client: 'Medical Center',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive digital marketing campaign for a healthcare provider, including content strategy, social media management, and targeted advertising.',
    results: ['189% ROI on ad spend', '245% increase in appointment bookings', '58% increase in website traffic'],
    tags: ['Healthcare', 'Digital Marketing', 'Content Strategy', 'PPC'],
    link: '/projects/healthcare-campaign'
  },
  {
    id: 'travel-platform',
    title: 'Travel Platform Optimization',
    category: 'SEO & Analytics',
    client: 'Travel Agency',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    description: 'SEO and performance optimization for a travel booking platform, focusing on improving search rankings, user experience, and conversion rates.',
    results: ['312% increase in organic search traffic', '28% increase in booking conversions', 'Top 3 rankings for 150+ keywords'],
    tags: ['SEO', 'Travel', 'Analytics', 'Conversion Optimization'],
    link: '/projects/travel-platform'
  },
  {
    id: 'restaurant-ordering',
    title: 'Restaurant Online Ordering System',
    category: 'Web Application',
    client: 'Restaurant Chain',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    description: 'Custom online ordering system for a restaurant chain, featuring seamless menu management, order tracking, and kitchen integration.',
    results: ['45% increase in average order value', '30% reduction in order processing time', '24% increase in customer retention'],
    tags: ['Web App', 'Food & Beverage', 'E-commerce', 'UX Design']
  },
  {
    id: 'tech-startup',
    title: 'Tech Startup Brand Identity',
    category: 'Branding & Design',
    client: 'SaaS Startup',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    description: 'Complete brand identity development for a tech startup, including logo design, visual identity system, and brand guidelines.',
    results: ['Successfully secured Series A funding', 'Brand recognition improved by 78%', 'Positive feedback from 92% of users'],
    tags: ['Branding', 'Logo Design', 'SaaS', 'Identity Design']
  }
];

// Categories for filtering
export const projectCategories = [
  'All',
  'Web Development',
  'Mobile App',
  'Digital Marketing',
  'SEO',
  'UI/UX Design',
  'Branding'
];
