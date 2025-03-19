
import { useScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';
import HeroBackground from './hero/HeroBackground';
import HeroContent from './hero/HeroContent';
import HeroImage from './hero/HeroImage';

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <HeroBackground />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <motion.div style={{ opacity, scale }}>
            <HeroContent />
          </motion.div>
          
          {/* Image Column */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
