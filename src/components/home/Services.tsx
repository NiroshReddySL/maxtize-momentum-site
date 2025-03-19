
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Search, 
  Code, 
  Smartphone, 
  Paintbrush, 
  BarChart3, 
  ChevronRight 
} from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { currentLang } = useLanguage();

  // Translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "Our Expertise",
        title: "Comprehensive Digital Solutions",
        description: "From marketing to development, we offer a full spectrum of services designed to help your business thrive in the digital landscape.",
        viewAll: "View All Services",
        services: [
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
        ]
      },
      de: {
        badge: "Unsere Expertise",
        title: "Umfassende digitale Lösungen",
        description: "Von Marketing bis zur Entwicklung bieten wir ein breites Spektrum an Dienstleistungen, die Ihrem Unternehmen helfen, in der digitalen Landschaft zu gedeihen.",
        viewAll: "Alle Dienstleistungen anzeigen",
        services: [
          {
            icon: <Globe size={24} />,
            title: 'Digitales Marketing',
            description: 'Strategische Kampagnen, die Traffic generieren und Interessenten in treue Kunden verwandeln.',
            link: '/services#digital-marketing'
          },
          {
            icon: <Search size={24} />,
            title: 'SEO-Optimierung',
            description: 'Steigern Sie Ihre Online-Sichtbarkeit und erreichen Sie höhere Positionen in Suchmaschinenergebnissen.',
            link: '/services#seo'
          },
          {
            icon: <Code size={24} />,
            title: 'Webentwicklung',
            description: 'Maßgeschneiderte Websites und Webanwendungen, die mit modernsten Technologien entwickelt werden.',
            link: '/services#web-development'
          },
          {
            icon: <Smartphone size={24} />,
            title: 'App-Entwicklung',
            description: 'Native und plattformübergreifende mobile Anwendungen, die Benutzer ansprechen.',
            link: '/services#app-development'
          },
          {
            icon: <Paintbrush size={24} />,
            title: 'UI/UX-Design',
            description: 'Schöne, intuitive Benutzeroberflächen, die die Benutzererfahrung und Zufriedenheit verbessern.',
            link: '/services#design'
          },
          {
            icon: <BarChart3 size={24} />,
            title: 'Analytik & Reporting',
            description: 'Umfassende Einblicke zur Leistungsverfolgung und zur Unterstützung strategischer Entscheidungen.',
            link: '/services#analytics'
          }
        ]
      },
      zh: {
        badge: "我们的专长",
        title: "全面的数字解决方案",
        description: "从营销到开发，我们提供全方位的服务，帮助您的企业在数字环境中蓬勃发展。",
        viewAll: "查看所有服务",
        services: [
          {
            icon: <Globe size={24} />,
            title: '数字营销',
            description: '战略性活动，吸引流量并将潜在客户转化为忠实客户。',
            link: '/services#digital-marketing'
          },
          {
            icon: <Search size={24} />,
            title: 'SEO优化',
            description: '提高您的在线可见度，在搜索引擎结果中排名更高。',
            link: '/services#seo'
          },
          {
            icon: <Code size={24} />,
            title: '网站开发',
            description: '使用前沿技术构建的定制网站和网络应用程序。',
            link: '/services#web-development'
          },
          {
            icon: <Smartphone size={24} />,
            title: '应用开发',
            description: '吸引用户的原生和跨平台移动应用程序。',
            link: '/services#app-development'
          },
          {
            icon: <Paintbrush size={24} />,
            title: 'UI/UX设计',
            description: '美观、直观的界面，提升用户体验和满意度。',
            link: '/services#design'
          },
          {
            icon: <BarChart3 size={24} />,
            title: '分析与报告',
            description: '全面的见解，跟踪性能并指导战略决策。',
            link: '/services#analytics'
          }
        ]
      },
      // Add other language translations with same structure
      'en-GB': {
        badge: "Our Expertise",
        title: "Comprehensive Digital Solutions",
        description: "From marketing to development, we offer a full spectrum of services designed to help your business thrive in the digital landscape.",
        viewAll: "View All Services",
        services: [
          {
            icon: <Globe size={24} />,
            title: 'Digital Marketing',
            description: 'Strategic campaigns that drive traffic and convert prospects into loyal customers.',
            link: '/services#digital-marketing'
          },
          {
            icon: <Search size={24} />,
            title: 'SEO Optimisation',
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
        ]
      }
      // Can add more languages as needed
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-40 -right-20 w-96 h-96 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span 
              className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {content.badge}
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
              {content.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {content.description}
            </p>
          </div>
        </ScrollReveal>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {content.services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div 
                className="relative overflow-hidden glass-card p-8 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                variants={itemVariants}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="w-14 h-14 flex items-center justify-center bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-lg mb-6"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium transition-colors"
                  >
                    Learn more 
                    <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
        
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/services" 
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full group"
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                <span className="relative">{content.viewAll}</span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
