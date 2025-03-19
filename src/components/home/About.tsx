
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { currentLang } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const imageY = useTransform(scrollYProgress, [0.4, 0.7], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  
  // Get translated content based on language
  const getContent = () => {
    const content = {
      en: {
        badge: "About Us",
        title: "Young, Dynamic & Ready for Challenges",
        description: "We're a team of digital specialists who understand the unique challenges of growing businesses. With expertise in digital marketing, development, and design, we create tailored solutions that deliver measurable results.",
        values: [
          "Creative Problem-Solving",
          "Client-Focused Approach",
          "Continuous Innovation",
          "Transparent Communication"
        ],
        cta: "Learn More About Us"
      },
      de: {
        badge: "Über Uns",
        title: "Jung, Dynamisch & Bereit für Herausforderungen",
        description: "Wir sind ein Team von Digital-Spezialisten, die die einzigartigen Herausforderungen wachsender Unternehmen verstehen. Mit Expertise in digitalem Marketing, Entwicklung und Design erstellen wir maßgeschneiderte Lösungen, die messbare Ergebnisse liefern.",
        values: [
          "Kreative Problemlösung",
          "Kundenorientierter Ansatz",
          "Kontinuierliche Innovation",
          "Transparente Kommunikation"
        ],
        cta: "Mehr über uns erfahren"
      },
      zh: {
        badge: "关于我们",
        title: "年轻、充满活力，随时应对挑战",
        description: "我们是一支数字专家团队，了解成长型企业的独特挑战。凭借数字营销、开发和设计方面的专业知识，我们创建定制解决方案，提供可衡量的结果。",
        values: [
          "创造性解决问题",
          "以客户为中心的方法",
          "持续创新",
          "透明沟通"
        ],
        cta: "了解更多关于我们"
      },
      // Add other languages as needed
      'en-GB': {
        badge: "About Us",
        title: "Young, Dynamic & Ready for Challenges",
        description: "We're a team of digital specialists who understand the unique challenges of growing businesses. With expertise in digital marketing, development, and design, we create tailored solutions that deliver measurable results.",
        values: [
          "Creative Problem-Solving",
          "Client-Focused Approach",
          "Continuous Innovation",
          "Transparent Communication"
        ],
        cta: "Learn More About Us"
      }
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 50
      }
    }
  };

  return (
    <section id="about" className="relative py-20 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-100/30 to-pink-100/30 dark:from-orange-900/10 dark:to-pink-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column with animations */}
          <motion.div style={{ y: imageY }} className="order-2 lg:order-1">
            <ScrollReveal direction="left">
              <div className="relative">
                {/* Main image */}
                <motion.div 
                  className="overflow-hidden rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                    alt="Team working together"
                    className="w-full h-auto object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 rounded-2xl"></div>
                </motion.div>
                
                {/* Floating badges/decorative elements */}
                <motion.div 
                  className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="text-3xl">🚀</span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">50+ Experts</span>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 px-4 py-3 rounded-lg shadow-lg z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-sm font-medium text-gray-800 dark:text-white">
                    <span className="block text-orange-500 text-xl font-bold">200+</span>
                    <span>Projects Completed</span>
                  </div>
                </motion.div>
                
                {/* Animated shapes */}
                <motion.div 
                  className="hidden md:block absolute -top-10 left-20 w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full z-0"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut" 
                  }}
                />
                
                <motion.div 
                  className="hidden md:block absolute -bottom-8 right-20 w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-md rotate-12 z-0"
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [12, 0, 12]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                    delay: 1 
                  }}
                />
              </div>
            </ScrollReveal>
          </motion.div>
          
          {/* Content column */}
          <motion.div 
            className="order-1 lg:order-2"
            style={{ y: contentY }}
          >
            <ScrollReveal direction="right">
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
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {content.description}
              </p>
              
              <div className="space-y-4 mb-10">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Our Core Values:</h3>
                
                <motion.ul 
                  className="space-y-3"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { 
                      opacity: 1,
                      transition: { staggerChildren: 0.2 }
                    }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {content.values.map((value, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <div className="mr-3 mt-1 flex-shrink-0">
                        <div className="p-1 bg-orange-100 dark:bg-orange-900/30 text-orange-500 rounded-full">
                          <ChevronRight size={14} />
                        </div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{value}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <span>{content.cta}</span>
                  <ChevronRight size={16} />
                </Link>
              </motion.div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
