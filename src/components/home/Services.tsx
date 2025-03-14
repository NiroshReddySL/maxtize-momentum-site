
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Search, 
  Code, 
  Smartphone, 
  Paintbrush, 
  BarChart3, 
  ChevronRight 
} from 'lucide-react';

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive traffic and convert prospects into loyal customers.',
    link: '/services#digital-marketing'
  },
  {
    icon: <Search size={24} />,
    title: 'SEO Optimization',
    description: 'Boost your online visibility and rank higher in search engine results.',
    link: '/services#seo'
  },
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technologies.',
    link: '/services#web-development'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications that engage users.',
    link: '/services#app-development'
  },
  {
    icon: <Paintbrush size={24} />,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and satisfaction.',
    link: '/services#design'
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Analytics & Reporting',
    description: 'Comprehensive insights to track performance and guide strategic decisions.',
    link: '/services#analytics'
  }
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            From marketing to development, we offer a full spectrum of services designed to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative overflow-hidden glass-card p-8 hover-card-effect"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 transform ${
                hoveredIndex === index ? 'scale-100' : 'scale-0'
              } transition-all duration-300 rounded-lg`}></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                >
                  Learn more <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
