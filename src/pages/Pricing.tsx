
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SEO from '@/components/common/SEO';
import { Check, X, HelpCircle, ArrowRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const { currentLang } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: "Flexible Solutions for Your Business",
      subtitle: "Choose the perfect plan for your needs with our transparent pricing options",
      monthly: "Monthly",
      annual: "Annual",
      yearlyDiscount: "Save 20%",
      contactTitle: "Need a custom solution?",
      contactText: "Contact us for a tailored plan that fits your specific requirements",
      contactCta: "Contact Us",
      faqTitle: "Frequently Asked Questions",
      pricingFaqs: [
        {
          question: "Can I upgrade or downgrade my plan later?",
          answer: "Yes, you can easily upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, the changes will take effect at the start of your next billing cycle."
        },
        {
          question: "Are there any long-term contracts?",
          answer: "No, we don't require long-term contracts. You can choose between monthly or annual billing, with the flexibility to cancel at any time. Annual plans offer a 20% discount compared to monthly billing."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, bank transfers, and PayPal. For enterprise plans, we can also accommodate invoicing according to your company's procurement process."
        }
      ],
      plans: [
        {
          name: "Starter",
          description: "For small businesses getting started with digital marketing",
          monthlyPrice: 999,
          annualPrice: 9590,
          currency: "$",
          features: [
            { name: "Basic SEO optimization", included: true, tooltip: "On-page SEO and basic keyword optimization" },
            { name: "Social media management (2 platforms)", included: true },
            { name: "Monthly performance reports", included: true },
            { name: "Content creation (2 posts/week)", included: true },
            { name: "Email marketing setup", included: true },
            { name: "Advanced analytics", included: false },
            { name: "Dedicated account manager", included: false },
            { name: "PPC campaign management", included: false }
          ],
          cta: "Get Started",
          popular: false
        },
        {
          name: "Professional",
          description: "For growing businesses seeking comprehensive digital presence",
          monthlyPrice: 1999,
          annualPrice: 19190,
          currency: "$",
          features: [
            { name: "Advanced SEO optimization", included: true, tooltip: "Comprehensive SEO strategy including technical SEO, content optimization, and backlink monitoring" },
            { name: "Social media management (4 platforms)", included: true },
            { name: "Weekly performance reports", included: true },
            { name: "Content creation (5 posts/week)", included: true },
            { name: "Email marketing automation", included: true },
            { name: "Advanced analytics", included: true },
            { name: "Dedicated account manager", included: true },
            { name: "PPC campaign management", included: false }
          ],
          cta: "Get Started",
          popular: true
        },
        {
          name: "Enterprise",
          description: "For established businesses requiring premium digital strategy",
          monthlyPrice: 3999,
          annualPrice: 38390,
          currency: "$",
          features: [
            { name: "Premium SEO optimization", included: true, tooltip: "Enterprise-level SEO strategy with competitive analysis, local SEO, and custom reporting" },
            { name: "Social media management (all platforms)", included: true },
            { name: "Real-time performance dashboard", included: true },
            { name: "Content creation (daily posts)", included: true },
            { name: "Advanced email marketing campaigns", included: true },
            { name: "Custom analytics & business intelligence", included: true },
            { name: "Dedicated strategy team", included: true },
            { name: "PPC campaign management", included: true }
          ],
          cta: "Contact Sales",
          popular: false
        }
      ]
    },
    de: {
      title: "Flexible Lösungen für Ihr Unternehmen",
      subtitle: "Wählen Sie den perfekten Plan für Ihre Bedürfnisse mit unseren transparenten Preisoptionen",
      monthly: "Monatlich",
      annual: "Jährlich",
      yearlyDiscount: "20% sparen",
      contactTitle: "Benötigen Sie eine individuelle Lösung?",
      contactText: "Kontaktieren Sie uns für einen maßgeschneiderten Plan, der Ihren spezifischen Anforderungen entspricht",
      contactCta: "Kontaktieren Sie uns",
      faqTitle: "Häufig gestellte Fragen",
      pricingFaqs: [
        {
          question: "Kann ich meinen Plan später upgraden oder downgraden?",
          answer: "Ja, Sie können Ihren Plan jederzeit einfach upgraden oder downgraden. Bei einem Upgrade werden Sie für den Rest Ihres Abrechnungszyklus anteilig berechnet. Bei einem Downgrade werden die Änderungen zu Beginn Ihres nächsten Abrechnungszyklus wirksam."
        },
        {
          question: "Gibt es langfristige Verträge?",
          answer: "Nein, wir verlangen keine langfristigen Verträge. Sie können zwischen monatlicher oder jährlicher Abrechnung wählen, mit der Flexibilität, jederzeit zu kündigen. Jahrespläne bieten einen Rabatt von 20% im Vergleich zur monatlichen Abrechnung."
        }
      ],
      plans: [
        {
          name: "Starter",
          description: "Für kleine Unternehmen, die mit digitalem Marketing beginnen",
          monthlyPrice: 999,
          annualPrice: 9590,
          currency: "€",
          features: [
            { name: "Basis-SEO-Optimierung", included: true, tooltip: "On-page SEO und grundlegende Keyword-Optimierung" },
            { name: "Social-Media-Management (2 Plattformen)", included: true },
            { name: "Monatliche Leistungsberichte", included: true },
            { name: "Content-Erstellung (2 Beiträge/Woche)", included: true },
            { name: "E-Mail-Marketing-Setup", included: true },
            { name: "Erweiterte Analytik", included: false },
            { name: "Dedizierter Account-Manager", included: false },
            { name: "PPC-Kampagnenmanagement", included: false }
          ],
          cta: "Loslegen",
          popular: false
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
              
              <div className="flex justify-center mb-12">
                <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-lg inline-flex">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-md transition-all ${
                      billingCycle === 'monthly' 
                        ? 'bg-white dark:bg-gray-700 shadow-sm' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {content.monthly}
                  </button>
                  <button
                    onClick={() => setBillingCycle('annual')}
                    className={`px-6 py-2 rounded-md transition-all flex items-center ${
                      billingCycle === 'annual' 
                        ? 'bg-white dark:bg-gray-700 shadow-sm' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {content.annual}
                    <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-400 px-2 py-0.5 rounded-full">
                      {content.yearlyDiscount}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {content.plans.map((plan, index) => (
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
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{plan.description}</p>
                    
                    <div className="mb-8">
                      <div className="flex items-end">
                        <span className="text-4xl font-bold">
                          {plan.currency}{billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 ml-2 mb-1">
                          {billingCycle === 'monthly' ? '/month' : '/year'}
                        </span>
                      </div>
                      {billingCycle === 'annual' && (
                        <p className="text-green-600 dark:text-green-400 text-sm mt-1">
                          {content.yearlyDiscount}
                        </p>
                      )}
                    </div>
                    
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
                  
                  <div className="px-8 pb-8">
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
            ))}
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
                <div className="hidden lg:block">
                  <img 
                    src="/images/pricing-illustration.svg" 
                    alt="Custom solution illustration" 
                    className="max-w-full"
                  />
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
