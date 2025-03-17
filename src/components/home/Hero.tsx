
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextReveal from '@/components/animations/TextReveal';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-300 rounded-full filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <ScrollReveal>
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                  Ready for Complex Challenges
                </span>
              </div>
            </ScrollReveal>
            
            <TextReveal
              tag="h1"
              text="Transforming Ideas into Digital Excellence"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            />
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                We're a young, dynamic team specializing in digital marketing, SEO, and full-stack development. No challenge is too complex for us.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary flex items-center gap-2">
                  Get Started
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex items-center gap-6 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gradient">200+</div>
                  <div className="text-sm text-gray-500">Projects Completed</div>
                </div>
                <div className="h-12 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <div className="text-3xl font-bold text-gradient">95%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div className="h-12 w-px bg-gray-200 dark:bg-gray-700"></div>
                <div>
                  <div className="text-3xl font-bold text-gradient">50+</div>
                  <div className="text-sm text-gray-500">Team Experts</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="relative z-10 glass-card p-4 overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" 
                  alt="Digital services showcase" 
                  className="w-full h-auto rounded-xl object-cover transform transition-transform hover:scale-105 duration-700"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-orange-500 rounded-lg z-0 animate-float"></div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-full z-0 animate-float animation-delay-1000"></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
