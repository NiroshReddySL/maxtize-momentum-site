
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import ScrollReveal from '@/components/animations/ScrollReveal';

const HeroImage = () => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
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
  );
};

export default HeroImage;
