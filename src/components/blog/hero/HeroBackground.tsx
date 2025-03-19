
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <motion.div 
        className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.25, 0.2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-gradient-to-tr from-orange-300 to-yellow-200 rounded-full filter blur-3xl opacity-20"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.15, 0.2]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 7,
          delay: 2
        }}
      />
    </div>
  );
};

export default HeroBackground;
