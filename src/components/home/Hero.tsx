
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import TextReveal from '@/components/animations/TextReveal';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Hero = () => {
  const { currentLang } = useLanguage();
  const { scrollY } = useScroll();
  
  // Parallax effect values
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  // Translated content based on current language
  const getContent = () => {
    const content = {
      en: {
        badge: "Ready for Complex Challenges",
        title: "Transforming Ideas into Digital Excellence",
        description: "We're a young, dynamic team specializing in digital marketing, SEO, and full-stack development. No challenge is too complex for us.",
        cta1: "Get Started",
        cta2: "Explore Services",
        stat1: "200+",
        statLabel1: "Projects Completed",
        stat2: "95%",
        statLabel2: "Client Satisfaction",
        stat3: "50+",
        statLabel3: "Team Experts"
      },
      de: {
        badge: "Bereit für komplexe Herausforderungen",
        title: "Ideen in digitale Exzellenz verwandeln",
        description: "Wir sind ein junges, dynamisches Team, das sich auf digitales Marketing, SEO und Full-Stack-Entwicklung spezialisiert hat. Keine Herausforderung ist zu komplex für uns.",
        cta1: "Loslegen",
        cta2: "Services erkunden",
        stat1: "200+",
        statLabel1: "Abgeschlossene Projekte",
        stat2: "95%",
        statLabel2: "Kundenzufriedenheit",
        stat3: "50+",
        statLabel3: "Team-Experten"
      },
      zh: {
        badge: "准备迎接复杂挑战",
        title: "将创意转化为数字卓越",
        description: "我们是一个年轻、充满活力的团队，专注于数字营销、SEO和全栈开发。没有什么挑战对我们来说太复杂。",
        cta1: "开始使用",
        cta2: "探索服务",
        stat1: "200+",
        statLabel1: "已完成项目",
        stat2: "95%",
        statLabel2: "客户满意度",
        stat3: "50+",
        statLabel3: "团队专家"
      },
      // Add translations for other languages as needed
      hi: {
        badge: "जटिल चुनौतियों के लिए तैयार",
        title: "विचारों को डिजिटल उत्कृष्टता में बदलना",
        description: "हम एक युवा, गतिशील टीम हैं जो डिजिटल मार्केटिंग, SEO और फुल-स्टैक डेवलपमेंट में विशेषज्ञता रखती है। हमारे लिए कोई भी चुनौती बहुत जटिल नहीं है।",
        cta1: "शुरू करें",
        cta2: "सेवाएँ देखें",
        stat1: "200+",
        statLabel1: "पूरे किए गए प्रोजेक्ट",
        stat2: "95%",
        statLabel2: "ग्राहक संतुष्टि",
        stat3: "50+",
        statLabel3: "टीम विशेषज्ञ"
      },
      te: {
        badge: "క్లిష్టమైన సవాళ్లకు సిద్ధంగా ఉన్నాము",
        title: "ఆలోచనలను డిజిటల్ ఎక్సలెన్స్‌గా మార్చడం",
        description: "మేము డిజిటల్ మార్కెటింగ్, SEO మరియు ఫుల్-స్టాక్ డెవలప్‌మెంట్‌లో నిపుణులైన ఒక యువ, డైనమిక్ టీమ్. మాకు ఏ సవాలు కూడా చాలా క్లిష్టమైనది కాదు.",
        cta1: "ప్రారంభించండి",
        cta2: "సేవలను అన్వేషించండి",
        stat1: "200+",
        statLabel1: "పూర్తి చేసిన ప్రాజెక్టులు",
        stat2: "95%",
        statLabel2: "క్లయింట్ సంతృప్తి",
        stat3: "50+",
        statLabel3: "టీమ్ నిపుణులు"
      },
      kn: {
        badge: "ಸಂಕೀರ್ಣ ಸವಾಲುಗಳಿಗೆ ಸಿದ್ಧವಾಗಿದೆ",
        title: "ಕಲ್ಪನೆಗಳನ್ನು ಡಿಜಿಟಲ್ ಉತ್ಕೃಷ್ಟತೆಗೆ ಪರಿವರ್ತಿಸುವುದು",
        description: "ನಾವು ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್, ಎಸ್‌ಇಒ ಮತ್ತು ಫುಲ್-ಸ್ಟ್ಯಾಕ್ ಡೆವಲಪ್‌ಮೆಂಟ್‌ನಲ್ಲಿ ವಿಶೇಷತೆ ಹೊಂದಿರುವ ಯುವ, ಚಲನಶೀಲ ತಂಡ. ನಮಗೆ ಯಾವುದೇ ಸವಾಲು ತುಂಬಾ ಸಂಕೀರ್ಣವಾಗಿಲ್ಲ.",
        cta1: "ಪ್ರಾರಂಭಿಸಿ",
        cta2: "ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        stat1: "200+",
        statLabel1: "ಪೂರ್ಣಗೊಂಡ ಯೋಜನೆಗಳು",
        stat2: "95%",
        statLabel2: "ಕ್ಲೈಂಟ್ ತೃಪ್ತಿ",
        stat3: "50+",
        statLabel3: "ತಂಡದ ತಜ್ಞರು"
      },
      'en-GB': {
        badge: "Ready for Complex Challenges",
        title: "Transforming Ideas into Digital Excellence",
        description: "We're a young, dynamic team specialising in digital marketing, SEO, and full-stack development. No challenge is too complex for us.",
        cta1: "Get Started",
        cta2: "Explore Services",
        stat1: "200+",
        statLabel1: "Projects Completed",
        stat2: "95%",
        statLabel2: "Client Satisfaction",
        stat3: "50+",
        statLabel3: "Team Experts"
      },
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 opacity-80 dark:opacity-30"
          animate={{ 
            background: [
              'radial-gradient(circle at 30% 20%, rgba(255,153,51,0.15), rgba(255,153,51,0) 40%)',
              'radial-gradient(circle at 70% 60%, rgba(255,153,51,0.15), rgba(255,153,51,0) 40%)',
              'radial-gradient(circle at 40% 40%, rgba(255,153,51,0.15), rgba(255,153,51,0) 40%)',
            ]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div 
              style={{ y: y1, opacity, scale }}
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <ScrollReveal>
                <motion.div 
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800/30">
                    {content.badge}
                  </span>
                </motion.div>
              </ScrollReveal>
              
              <TextReveal
                tag="h1"
                text={content.title}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300"
                staggerChildren={0.02}
              />
              
              <ScrollReveal delay={0.2}>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  {content.description}
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="relative overflow-hidden group btn-primary flex items-center gap-2">
                    <span className="relative z-10">{content.cta1}</span>
                    <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                  <Link to="/services" className="btn-outline group flex items-center gap-2">
                    <span>{content.cta2}</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.4}>
                <motion.div 
                  className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7, type: "spring" }}
                    >
                      {content.stat1}
                    </motion.div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{content.statLabel1}</div>
                  </div>
                  
                  <div className="h-12 w-px bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: "spring" }}
                    >
                      {content.stat2}
                    </motion.div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{content.statLabel2}</div>
                  </div>
                  
                  <div className="h-12 w-px bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.9, type: "spring" }}
                    >
                      {content.stat3}
                    </motion.div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{content.statLabel3}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            </motion.div>
          </div>
          
          {/* Image Column */}
          <motion.div 
            className="lg:col-span-5"
            style={{ y: y2 }}
          >
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative">
                <motion.div 
                  className="relative z-10 glass-card p-4 overflow-hidden rounded-2xl shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" 
                      alt="Digital services showcase" 
                      className="w-full h-auto object-cover"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                    />
                  </div>
                  
                  <motion.div 
                    className="absolute -bottom-6 -right-6 w-36 h-36 bg-gradient-to-br from-orange-400/20 to-orange-600/20 rounded-full filter blur-2xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 0.9, 0.7] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      repeatType: "reverse" 
                    }}
                  />
                </motion.div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg z-0"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut" 
                  }}
                />
                <motion.div 
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full z-0"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                    delay: 1 
                  }}
                />
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute top-10 -left-16 glass-card px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">SEO Optimized</span>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 -right-14 glass-card px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-20"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-gray-800 dark:text-white">Responsive Design</span>
                </motion.div>
              </div>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
