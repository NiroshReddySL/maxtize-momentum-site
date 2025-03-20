
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight, Clock, Tag } from 'lucide-react';
import { blogPosts as posts } from '@/data/blog'; // Fixed import
import ScrollReveal from '@/components/animations/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { formatDate } from '@/utils/formatDate';

const BlogSection = () => {
  const { currentLang } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Display only the latest 3 blog posts
  const latestPosts = posts.slice(0, 3);

  // Get translated content
  const getContent = () => {
    const content = {
      en: {
        badge: "Latest Insights",
        title: "Articles & Resources",
        description: "Stay ahead of the curve with our latest insights, tips, and industry updates.",
        viewAll: "View All Posts",
        readMore: "Read More",
        minuteRead: "min read"
      },
      de: {
        badge: "Neueste Einblicke",
        title: "Artikel & Ressourcen",
        description: "Bleiben Sie der Zeit voraus mit unseren neuesten Einblicken, Tipps und Branchenupdates.",
        viewAll: "Alle Beiträge anzeigen",
        readMore: "Weiterlesen",
        minuteRead: "Min. Lesezeit"
      },
      zh: {
        badge: "最新洞察",
        title: "文章和资源",
        description: "通过我们的最新见解、提示和行业更新，保持领先地位。",
        viewAll: "查看所有文章",
        readMore: "阅读更多",
        minuteRead: "分钟阅读"
      },
      'en-GB': {
        badge: "Latest Insights",
        title: "Articles & Resources",
        description: "Stay ahead of the curve with our latest insights, tips, and industry updates.",
        viewAll: "View All Posts",
        readMore: "Read More",
        minuteRead: "min read"
      }
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
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  return (
    <section id="blog" className="relative py-20 md:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-40 left-1/5 w-72 h-72 bg-orange-100/20 dark:bg-orange-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 right-1/5 w-96 h-96 bg-blue-100/20 dark:bg-blue-900/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <ScrollReveal>
            <div className="md:max-w-2xl mb-6 md:mb-0">
              <motion.span 
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800/30"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {content.badge}
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                {content.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {content.description}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                to="/blog" 
                className="btn-outline self-start md:self-auto group flex items-center gap-2"
              >
                <span>{content.viewAll}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {latestPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <ScrollReveal delay={index * 0.15}>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="group block relative overflow-hidden rounded-2xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <motion.img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                      animate={{ 
                        scale: hoveredIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent opacity-70"
                      animate={{ opacity: hoveredIndex === index ? 0.4 : 0.7 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        <span>{formatDate(post.publishDate)}</span> {/* Fixed here - only pass one argument */}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{post.readTime || '5'} {content.minuteRead}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Tag size={12} className="mr-1" />
                          {tag}
                        </div>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="flex items-center text-blue-600 dark:text-blue-400 font-medium mt-2 group-hover:translate-x-2 transition-transform duration-300"
                      animate={{ 
                        x: hoveredIndex === index ? 8 : 0 
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>{content.readMore}</span>
                      <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </div>
                </Link>
              </ScrollReveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
