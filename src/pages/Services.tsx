import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Globe, Search, Code, Smartphone, Paintbrush, BarChart3, Zap, Server, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
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
    description: 'Knowledge transfer and skill-building for your team's digital capabilities.',
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

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Services - Maxtize';
  }, []);

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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6">
                Comprehensive <span className="text-gradient">Digital Solutions</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                From strategic marketing to complex development challenges, we offer a full spectrum of services designed to solve even the most difficult digital problems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  Start a Project
                </Link>
                <a href="#services-list" className="btn-outline">
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section id="services-list" className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  id={service.id}
                  className="glass-card p-8 hover-card-effect"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg mb-6">
                    {service.icon}
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Request Service <ArrowRight size={16} className="ml-2" />
                  </Link>
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
                  Ready to Solve Your <span className="text-gradient">Digital Challenges?</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                  Get in touch with our expert team. We're eager to help you navigate even the most complex digital landscape.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary">
                    Contact Us
                  </Link>
                  <Link to="/projects" className="btn-outline">
                    View Our Work
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

export default Services;
