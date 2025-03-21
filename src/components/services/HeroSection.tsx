
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';

interface HeroSectionProps {
  openContactForm: (purpose: string) => void;
}

const HeroSection = ({ openContactForm }: HeroSectionProps) => {
  const { currentLang } = useLanguage();
  
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-list');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const title = currentLang === 'en' ? 'Our Services' : 
               currentLang === 'de' ? 'Unsere Dienstleistungen' : 
               currentLang === 'zh' ? '我们的服务' : 
               currentLang === 'hi' ? 'हमारी सेवाएँ' : 
               currentLang === 'kn' ? 'ನಮ್ಮ ಸೇವೆಗಳು' : 
               currentLang === 'te' ? 'మా సేవలు' : 'Our Services';
               
  const subtitle = currentLang === 'en' ? 'Comprehensive digital solutions tailored to your business needs' : 
                  currentLang === 'de' ? 'Umfassende digitale Lösungen, maßgeschneidert für Ihre Geschäftsanforderungen' : 
                  currentLang === 'zh' ? '根据您的业务需求量身定制的全面数字解决方案' : 
                  currentLang === 'hi' ? 'आपकी व्यावसायिक जरूरतों के अनुसार व्यापक डिजिटल समाधान' : 
                  currentLang === 'kn' ? 'ನಿಮ್ಮ ವ್ಯಾಪಾರದ ಅಗತ್ಯಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ಸಮಗ್ರ ಡಿಜಿಟಲ್ ಪರಿಹಾರಗಳು' : 
                  currentLang === 'te' ? 'మీ వ్యాపార అవసరాలకు అనుగుణంగా సమగ్ర డిజిటల్ పరిష్కారాలు' : 'Comprehensive digital solutions tailored to your business needs';
  
  const ctaText = currentLang === 'en' ? 'Discuss Your Project' : 
                 currentLang === 'de' ? 'Besprechen Sie Ihr Projekt' : 
                 currentLang === 'zh' ? '讨论您的项目' : 
                 currentLang === 'hi' ? 'अपने प्रोजेक्ट पर चर्चा करें' : 
                 currentLang === 'kn' ? 'ನಿಮ್ಮ ಯೋಜನೆಯನ್ನು ಚರ್ಚಿಸಿ' : 
                 currentLang === 'te' ? 'మీ ప్రాజెక్ట్‌ని చర్చించండి' : 'Discuss Your Project';
  
  const exploreText = currentLang === 'en' ? 'Explore Services' : 
                     currentLang === 'de' ? 'Dienstleistungen erkunden' : 
                     currentLang === 'zh' ? '探索服务' : 
                     currentLang === 'hi' ? 'सेवाएँ देखें' : 
                     currentLang === 'kn' ? 'ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ' : 
                     currentLang === 'te' ? 'సేవలను అన్వేషించండి' : 'Explore Services';

  return (
    <section className="pt-36 pb-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-orange-200/30 to-pink-300/30 dark:from-orange-900/20 dark:to-pink-900/20 rounded-full filter blur-[100px] transform translate-x-1/4 -translate-y-1/4"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-200/30 to-purple-300/30 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full filter blur-[100px] transform -translate-x-1/4 translate-y-1/4"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <TextReveal>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                {title}
              </h1>
            </TextReveal>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                onClick={() => openContactForm('General Services')}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {ctaText}
              </motion.button>
              
              <motion.button
                onClick={scrollToServices}
                className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-medium rounded-lg shadow border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {exploreText}
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
        
        <motion.div 
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.button
            onClick={scrollToServices}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 transition-all"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              scale: { type: "spring", stiffness: 300 }
            }}
            whileHover={{ scale: 1.1 }}
          >
            <ChevronDown size={24} className="text-orange-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
