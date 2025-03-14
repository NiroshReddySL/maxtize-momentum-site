
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const About = () => {
  const advantages = [
    'Quick turnaround on complex projects',
    'Dedicated team of young experts',
    'Cutting-edge technology solutions',
    'Transparent communication',
    'Focus on measurable results',
    'Agile development methodology'
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative animate-slide-in order-2 lg:order-1">
            <div className="relative z-10">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Maxtize team" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 right-10 glass-card p-6 max-w-xs animate-float shadow-xl">
                <div className="text-4xl font-bold text-gradient mb-2">5+ Years</div>
                <p className="text-gray-600 dark:text-gray-300">Solving complex digital challenges</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-200 rounded-full z-0 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full z-0 animate-pulse-slow"></div>
          </div>
          
          <div className="space-y-8 animate-fade-in order-1 lg:order-2">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                About Maxtize
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Young, Dynamic Team <span className="text-gradient">Ready for Any Challenge</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300">
              At Maxtize, we're not just another digital agency. We're a team of passionate young professionals who thrive on tackling complex problems and delivering exceptional results. Our fresh perspective, combined with technical expertise, allows us to approach challenges with innovative solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">{advantage}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <Link to="/about" className="btn-primary">
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
