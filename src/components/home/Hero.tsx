
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { currentLang } = useLanguage();

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
      // Add other languages as needed
    };
    
    return content[currentLang as keyof typeof content] || content.en;
  };

  const content = getContent();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/80">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-orange-200 to-purple-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-gradient-to-tr from-blue-200 to-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-orange-300 to-pink-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-1000"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-block">
                <motion.span 
                  className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {content.badge}
                </motion.span>
              </div>
            </ScrollReveal>
            
            <TextReveal
              tag="h1"
              text={content.title}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
            />
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
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
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">{content.stat1}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{content.statLabel1}</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">{content.stat2}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{content.statLabel2}</div>
                </div>
                <div className="h-12 w-px bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">{content.stat3}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{content.statLabel3}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <motion.div 
                className="relative z-10 glass-card p-4 overflow-hidden rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Digital services showcase" 
                  className="w-full h-auto rounded-xl object-cover transform transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute -bottom-1 -right-1 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full filter blur-2xl opacity-20 animate-pulse-slow"></div>
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
