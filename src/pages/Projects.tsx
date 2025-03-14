
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 'ecommerce-redesign',
    title: 'E-Commerce Redesign & SEO',
    category: 'Web Development & SEO',
    client: 'Fashion Retailer',
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&w=800&q=80',
    description: 'Complete redesign of an e-commerce platform with focus on user experience, conversion optimization, and SEO performance.',
    results: ['248% increase in organic traffic', '156% increase in conversion rate', '75% reduction in page load time'],
    tags: ['E-commerce', 'SEO', 'Web Development', 'UX Design']
  },
  {
    id: 'financial-app',
    title: 'Financial Services App',
    category: 'Mobile App Development',
    client: 'Banking Institution',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    description: 'A secure, user-friendly mobile application for financial services, featuring real-time transaction tracking, investment portfolio management, and advanced security protocols.',
    results: ['1M+ downloads', '4.8/5 app store rating', '35% increase in mobile banking users'],
    tags: ['Mobile App', 'FinTech', 'UI/UX', 'Security']
  },
  {
    id: 'healthcare-campaign',
    title: 'Healthcare Marketing Campaign',
    category: 'Digital Marketing',
    client: 'Medical Center',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    description: 'Comprehensive digital marketing campaign for a healthcare provider, including content strategy, social media management, and targeted advertising.',
    results: ['189% ROI on ad spend', '245% increase in appointment bookings', '58% increase in website traffic'],
    tags: ['Healthcare', 'Digital Marketing', 'Content Strategy', 'PPC']
  },
  {
    id: 'travel-platform',
    title: 'Travel Platform Optimization',
    category: 'SEO & Analytics',
    client: 'Travel Agency',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    description: 'SEO and performance optimization for a travel booking platform, focusing on improving search rankings, user experience, and conversion rates.',
    results: ['312% increase in organic search traffic', '28% increase in booking conversions', 'Top 3 rankings for 150+ keywords'],
    tags: ['SEO', 'Travel', 'Analytics', 'Conversion Optimization']
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
const categories = [
  'All',
  'Web Development',
  'Mobile App',
  'Digital Marketing',
  'SEO',
  'UI/UX Design',
  'Branding'
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Projects - Maxtize';
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => 
          project.category.includes(activeCategory) || 
          project.tags.some(tag => tag.includes(activeCategory))
        )
      );
    }
  }, [activeCategory]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
          </div>
          
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                Our Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
                Our <span className="text-gradient">Success Stories</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                Explore our portfolio of successful projects across various industries. We take pride in solving complex challenges and delivering exceptional results.
              </p>
            </div>
          </div>
        </section>

        {/* Project Filters */}
        <section className="py-12 border-b border-gray-200 dark:border-gray-800">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index}
                  className="glass-card overflow-hidden hover-card-effect"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Client: {project.client}</p>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3">Key Results:</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-4 h-4 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </div>
                            <span className="text-gray-700 dark:text-gray-200 text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={`#${project.id}`} 
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                    >
                      View Case Study <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-100 dark:bg-gray-900/50 py-20">
          <div className="container-custom">
            <div className="glass-card p-10 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-80 h-80 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
              </div>
              
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Build Your <span className="text-gradient">Success Story?</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                  Let's work together to create a solution that transforms your business and exceeds your expectations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary">
                    Start a Project
                  </Link>
                  <Link to="/services" className="btn-outline">
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
