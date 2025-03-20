
import { useLanguage } from '@/contexts/LanguageContext';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';
import { ServiceContentType } from '@/types/serviceContent';

interface ServiceTestimonialsProps {
  testimonials: ServiceContentType['testimonials'];
}

const ServiceTestimonials = ({ testimonials }: ServiceTestimonialsProps) => {
  const { currentLang } = useLanguage();

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const getTranslatedComment = (testimonial: (typeof testimonials)[0]) => {
    if (testimonial.translations && testimonial.translations[currentLang]?.comment) {
      return testimonial.translations[currentLang].comment;
    }
    return testimonial.comment;
  };

  const getTitle = () => {
    const titles = {
      en: "What Our Clients Say",
      de: "Was unsere Kunden sagen",
      zh: "客户评价",
      hi: "हमारे ग्राहक क्या कहते हैं",
      te: "మా క్లయింట్లు ఏమి చెబుతున్నారు",
      kn: "ನಮ್ಮ ಗ್ರಾಹಕರು ಏನು ಹೇಳುತ್ತಾರೆ",
      'en-GB': "What Our Clients Say"
    };
    
    return titles[currentLang as keyof typeof titles] || titles.en;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-950 rounded-2xl mb-16">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">{getTitle()}</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div 
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start mb-4">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full mr-4 object-cover"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full mr-4 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xl font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.company}</div>
                    
                    {testimonial.rating && (
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            xmlns="http://www.w3.org/2000/svg" 
                            className={`h-4 w-4 ${i < testimonial.rating! ? 'text-yellow-400' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 italic">"{getTranslatedComment(testimonial)}"</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
