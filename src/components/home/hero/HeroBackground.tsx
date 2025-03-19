
import { motion } from 'framer-motion';

const HeroBackground = () => {
  return (
    <>
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
    </>
  );
};

export default HeroBackground;
