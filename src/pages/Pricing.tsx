
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SEO from '@/components/common/SEO';
import { Check, X, HelpCircle, ArrowRight, Sparkles, Shield, BarChart4, Users } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const { currentLang } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: "Tailored Solutions for Your Business",
      subtitle: "Transparent pricing designed to scale with your business needs",
      contactTitle: "Not sure which package is right for you?",
      contactText: "Our pricing is flexible and tailored to your specific requirements. Contact us for a custom quote.",
      contactCta: "Request Custom Quote",
      faqTitle: "Frequently Asked Questions",
      pricingFaqs: [
        {
          question: "How do you structure your pricing?",
          answer: "We offer flexible pricing based on project scope, complexity, and your specific business requirements. Our transparent approach ensures you only pay for what you need, with no hidden costs."
        },
        {
          question: "Do you offer ongoing support after project completion?",
          answer: "Yes, all of our packages include a dedicated support period after launch. For longer-term needs, we offer affordable maintenance plans to ensure your digital assets remain secure and up-to-date."
        },
        {
          question: "Can I upgrade my package as my business grows?",
          answer: "Absolutely! Our solutions are designed to scale with your business. You can easily upgrade your package or add additional services as your needs evolve."
        }
      ],
      plans: [
        {
          name: "Starter",
          description: "For small businesses getting started with digital solutions",
          priceDescription: "Affordable fixed pricing",
          valuePoints: [
            "Cost-effective digital presence",
            "Quick implementation",
            "Essential features only"
          ],
          features: [
            { name: "Responsive website design", included: true },
            { name: "Content Management System", included: true },
            { name: "Basic SEO optimization", included: true, tooltip: "On-page SEO and basic keyword optimization" },
            { name: "Social media integration", included: true },
            { name: "Mobile optimization", included: true },
            { name: "Advanced analytics", included: false },
            { name: "Custom integrations", included: false },
            { name: "Dedicated account manager", included: false }
          ],
          cta: "Get in Touch",
          popular: false,
          icon: BarChart4
        },
        {
          name: "Professional",
          description: "For growing businesses seeking comprehensive digital solutions",
          priceDescription: "Tailored to your requirements",
          valuePoints: [
            "Comprehensive digital strategy",
            "Custom design and development",
            "Ongoing optimization"
          ],
          features: [
            { name: "Advanced responsive design", included: true },
            { name: "Full-featured CMS", included: true },
            { name: "Advanced SEO optimization", included: true, tooltip: "Comprehensive SEO strategy including technical SEO and content optimization" },
            { name: "Social media strategy", included: true },
            { name: "Performance optimization", included: true },
            { name: "Custom analytics dashboard", included: true },
            { name: "Third-party integrations", included: true },
            { name: "Dedicated account manager", included: true }
          ],
          cta: "Request Quote",
          popular: true,
          icon: Sparkles
        },
        {
          name: "Enterprise",
          description: "For established businesses requiring premium digital strategies",
          priceDescription: "Custom enterprise pricing",
          valuePoints: [
            "End-to-end digital transformation",
            "Enterprise-grade solutions",
            "Dedicated strategy team"
          ],
          features: [
            { name: "Premium custom design", included: true },
            { name: "Enterprise-grade CMS", included: true },
            { name: "Premium SEO optimization", included: true, tooltip: "Enterprise-level SEO strategy with competitive analysis and custom reporting" },
            { name: "Comprehensive digital strategy", included: true },
            { name: "Advanced performance optimization", included: true },
            { name: "Custom business intelligence", included: true },
            { name: "Custom integrations & APIs", included: true },
            { name: "Dedicated strategy team", included: true }
          ],
          cta: "Contact Sales",
          popular: false,
          icon: Shield
        }
      ]
    },
    de: {
      title: "Maßgeschneiderte Lösungen für Ihr Unternehmen",
      subtitle: "Transparente Preisgestaltung, die mit den Anforderungen Ihres Unternehmens skaliert",
      contactTitle: "Nicht sicher, welches Paket das Richtige für Sie ist?",
      contactText: "Unsere Preisgestaltung ist flexibel und auf Ihre spezifischen Anforderungen zugeschnitten. Kontaktieren Sie uns für ein individuelles Angebot.",
      contactCta: "Individuelles Angebot anfordern",
      faqTitle: "Häufig gestellte Fragen",
      pricingFaqs: [
        {
          question: "Wie strukturieren Sie Ihre Preisgestaltung?",
          answer: "Wir bieten flexible Preise basierend auf Projektumfang, Komplexität und Ihren spezifischen Geschäftsanforderungen. Unser transparenter Ansatz stellt sicher, dass Sie nur für das bezahlen, was Sie benötigen, ohne versteckte Kosten."
        },
        {
          question: "Bieten Sie nach Projektabschluss fortlaufenden Support an?",
          answer: "Ja, alle unsere Pakete beinhalten einen dedizierten Supportzeitraum nach dem Launch. Für längerfristige Bedürfnisse bieten wir kostengünstige Wartungspläne an, um sicherzustellen, dass Ihre digitalen Assets sicher und aktuell bleiben."
        }
      ],
      plans: [
        {
          name: "Starter",
          description: "Für kleine Unternehmen, die mit digitalen Lösungen beginnen",
          priceDescription: "Erschwingliche Festpreise",
          valuePoints: [
            "Kosteneffektive digitale Präsenz",
            "Schnelle Implementierung",
            "Nur wesentliche Funktionen"
          ],
          features: [
            { name: "Responsives Website-Design", included: true },
            { name: "Content-Management-System", included: true },
            { name: "Basis-SEO-Optimierung", included: true, tooltip: "On-page SEO und grundlegende Keyword-Optimierung" },
            { name: "Social-Media-Integration", included: true },
            { name: "Mobile Optimierung", included: true },
            { name: "Erweiterte Analytik", included: false },
            { name: "Benutzerdefinierte Integrationen", included: false },
            { name: "Dedizierter Account-Manager", included: false }
          ],
          cta: "Kontakt aufnehmen",
          popular: false,
          icon: BarChart4
        }
      ]
    },
    // Add other languages as needed
  };

  const content = translations[currentLang as keyof typeof translations] || translations.en;

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${content.title} - Maxtize`}
        description={content.subtitle}
      />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Pricing
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700">
                {content.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {content.plans.map((plan, index) => {
              const Icon = plan.icon || BarChart4;
              
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div 
                    className={`h-full flex flex-col rounded-2xl overflow-hidden transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-b from-orange-50 via-white to-white dark:from-orange-900/20 dark:via-gray-800 dark:to-gray-800 shadow-xl border border-orange-200 dark:border-orange-900/50 scale-105 z-10' 
                        : 'bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700'
                    }`}
                    whileHover={{ translateY: -5 }}
                  >
                    {plan.popular && (
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-medium text-sm">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="p-8 flex-grow">
                      <div className="flex items-center mb-4">
                        <div className={`p-2 rounded-lg mr-3 ${
                          plan.popular 
                            ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' 
                            : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          <Icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                      
                      <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-700">
                        <p className="text-lg font-medium mb-1">{plan.priceDescription}</p>
                        <ul className="mt-4 space-y-2">
                          {plan.valuePoints.map((point, i) => (
                            <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                              <Check size={16} className="text-green-500 mr-2 flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <h4 className="font-semibold mb-4">Features include:</h4>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            {feature.included ? (
                              <Check size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                            ) : (
                              <X size={18} className="text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                            )}
                            <span className={feature.included ? 'text-gray-800 dark:text-gray-200' : 'text-gray-500 dark:text-gray-400'}>
                              {feature.name}
                              {feature.tooltip && (
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <HelpCircle size={14} className="inline-block ml-1 mb-0.5 text-gray-400" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs">{feature.tooltip}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="px-8 pb-8 mt-auto">
                      <Link to="/contact">
                        <Button 
                          className={`w-full py-6 ${
                            plan.popular 
                              ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' 
                              : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600'
                          }`}
                          size="lg"
                        >
                          {plan.cta}
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{content.contactTitle}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {content.contactText}
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                      {content.contactCta}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="hidden lg:flex justify-center">
                  <div className="relative">
                    <Users size={160} className="text-orange-100 dark:text-orange-900/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={120} className="text-orange-200 dark:text-orange-800/30" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={80} className="text-orange-300 dark:text-orange-700/40" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users size={40} className="text-orange-500 dark:text-orange-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">{content.faqTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {content.pricingFaqs.map((faq, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
