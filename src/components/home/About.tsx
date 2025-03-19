
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { currentLang } = useLanguage();
  const { scrollYProgress } = useScroll();
  
  // Parallax effect for images
  const y1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  
  // Get translated content
  const getContent = () => {
    const translations = {
      en: {
        sectionTitle: "About Maxtize",
        title: "Young, Dynamic Team Ready for Any Challenge",
        description: "At Maxtize, we're not just another digital agency. We're a team of passionate young professionals who thrive on tackling complex problems and delivering exceptional results. Our fresh perspective, combined with technical expertise, allows us to approach challenges with innovative solutions.",
        cta: "More About Us",
        years: "5+ Years",
        yearsSubtext: "Solving complex digital challenges",
        advantages: [
          'Quick turnaround on complex projects',
          'Dedicated team of young experts',
          'Cutting-edge technology solutions',
          'Transparent communication',
          'Focus on measurable results',
          'Agile development methodology'
        ]
      },
      de: {
        sectionTitle: "Über Maxtize",
        title: "Junges, dynamisches Team bereit für jede Herausforderung",
        description: "Bei Maxtize sind wir nicht nur eine weitere Digitalagentur. Wir sind ein Team junger, leidenschaftlicher Fachleute, die komplexe Probleme angehen und außergewöhnliche Ergebnisse liefern. Unsere frische Perspektive, kombiniert mit technischem Fachwissen, ermöglicht es uns, Herausforderungen mit innovativen Lösungen zu begegnen.",
        cta: "Mehr über uns",
        years: "5+ Jahre",
        yearsSubtext: "Lösung komplexer digitaler Herausforderungen",
        advantages: [
          'Schnelle Bearbeitung komplexer Projekte',
          'Engagiertes Team junger Experten',
          'Innovative Technologielösungen',
          'Transparente Kommunikation',
          'Fokus auf messbare Ergebnisse',
          'Agile Entwicklungsmethodik'
        ]
      },
      zh: {
        sectionTitle: "关于迈克斯泰兹",
        title: "年轻、充满活力的团队准备迎接任何挑战",
        description: "在迈克斯泰兹，我们不仅仅是另一家数字代理机构。我们是一支充满热情的年轻专业团队，擅长解决复杂问题并提供卓越的结果。我们的全新视角，结合技术专长，使我们能够以创新的解决方案应对挑战。",
        cta: "了解更多关于我们",
        years: "5+年",
        yearsSubtext: "解决复杂的数字挑战",
        advantages: [
          '快速完成复杂项目',
          '专业的年轻专家团队',
          '尖端技术解决方案',
          '透明沟通',
          '注重可衡量的结果',
          '敏捷开发方法'
        ]
      },
      // Add other translations as needed
      hi: {
        sectionTitle: "मैक्सटाइज़ के बारे में",
        title: "किसी भी चुनौती के लिए तैयार युवा, गतिशील टीम",
        description: "मैक्सटाइज़ में, हम सिर्फ एक और डिजिटल एजेंसी नहीं हैं। हम उत्साही युवा पेशेवरों की एक टीम हैं जो जटिल समस्याओं को सुलझाने और असाधारण परिणाम देने में माहिर हैं। हमारा ताज़ा दृष्टिकोण, तकनीकी विशेषज्ञता के साथ, हमें चुनौतियों को नवीन समाधानों के साथ सुलझाने की अनुमति देता है।",
        cta: "हमारे बारे में अधिक जानें",
        years: "5+ वर्ष",
        yearsSubtext: "जटिल डिजिटल चुनौतियों का समाधान",
        advantages: [
          'जटिल परियोजनाओं पर त्वरित कार्रवाई',
          'युवा विशेषज्ञों की समर्पित टीम',
          'अत्याधुनिक तकनीकी समाधान',
          'पारदर्शी संचार',
          'मापने योग्य परिणामों पर ध्यान',
          'एजाइल डेवलपमेंट मेथोडोलॉजी'
        ]
      },
      // Add other languages
    };
    
    return translations[currentLang as keyof typeof translations] || translations.en;
  };

  const content = getContent();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="about" className="section-padding overflow-hidden bg-white/50 dark:bg-gray-900/50 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-0 w-full h-full bg-gradient-to-br from-orange-50 to-white dark:from-gray-900 dark:to-gray-900/0 opacity-60"></div>
        <motion.div 
          className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-pink-200/30 dark:from-orange-900/10 dark:to-pink-900/10 rounded-full filter blur-3xl"
          style={{ y: y2, opacity }}
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <ScrollReveal direction="left">
              <motion.div className="relative">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                    alt="Maxtize team" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                <motion.div 
                  className="absolute -bottom-6 right-10 glass-card p-6 max-w-xs shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl font-bold text-gradient mb-2">{content.years}</div>
                  <p className="text-gray-600 dark:text-gray-300">{content.yearsSubtext}</p>
                </motion.div>
                
                {/* Floating shapes */}
                <motion.div 
                  className="absolute -top-8 -right-8 w-24 h-24 bg-orange-200 dark:bg-orange-900/30 rounded-full z-0"
                  style={{ y: y1 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 dark:bg-blue-900/30 rounded-full z-0"
                  style={{ y: y2 }}
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ 
                    duration: 5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
            </ScrollReveal>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <ScrollReveal>
              <div className="inline-block">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                  {content.sectionTitle}
                </span>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gray-900 dark:text-white">{content.title.split(',')[0]},</span> <span className="text-gradient bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">{content.title.split(',')[1]}</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {content.description}
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {content.advantages.map((advantage, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-2"
                    variants={itemVariants}
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200">{advantage}</span>
                  </motion.div>
                ))}
              </motion.div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="btn-primary group inline-flex items-center gap-2 relative overflow-hidden"
                >
                  <span className="relative z-10">{content.cta}</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
