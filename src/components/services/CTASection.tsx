
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';

interface CTASectionProps {
  openContactForm: (purpose: string) => void;
}

const CTASection = ({ openContactForm }: CTASectionProps) => {
  const { currentLang } = useLanguage();
  
  const content = {
    en: {
      title: "Ready to Transform Your Digital Presence?",
      description: "Our team of experts is ready to help you achieve your digital goals. Get in touch to discuss your project.",
      buttonText: "Get Started"
    },
    de: {
      title: "Bereit, Ihre digitale Präsenz zu transformieren?",
      description: "Unser Expertenteam steht bereit, um Ihnen bei der Erreichung Ihrer digitalen Ziele zu helfen. Kontaktieren Sie uns, um Ihr Projekt zu besprechen.",
      buttonText: "Jetzt starten"
    },
    zh: {
      title: "准备好改变您的数字形象？",
      description: "我们的专家团队已准备好帮助您实现数字目标。联系我们讨论您的项目。",
      buttonText: "开始"
    }
    // Add other languages as needed
  };
  
  const selectedContent = content[currentLang as keyof typeof content] || content.en;

  return (
    <section className="py-20 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 text-orange-200 dark:text-orange-900/20 opacity-20">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="currentColor" />
          <path d="M0,0 L100,0 L50,100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {selectedContent.title}
            </h2>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {selectedContent.description}
            </p>
            
            <motion.button
              onClick={() => openContactForm('Digital Services')}
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {selectedContent.buttonText}
              <ArrowRight size={16} className="ml-2" />
            </motion.button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
