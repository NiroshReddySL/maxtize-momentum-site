
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from '@/components/animations/ScrollReveal';
import SEO from '@/components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const FAQs = () => {
  const { currentLang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("general");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqTranslations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Find answers to common questions about our services",
      contactText: "Can't find what you're looking for?",
      contactCta: "Contact our team",
      categories: [
        { id: "general", label: "General" },
        { id: "services", label: "Services" },
        { id: "pricing", label: "Pricing" },
        { id: "support", label: "Support" }
      ],
      faqs: {
        general: [
          {
            q: "What makes Maxtize different from other digital agencies?",
            a: "Maxtize stands out through our holistic approach to digital solutions. We combine strategic expertise, technical excellence, and creative innovation to deliver results-driven solutions tailored to each client's unique needs. Our multidisciplinary team collaborates seamlessly across specialties, offering truly integrated services that drive measurable business growth."
          },
          {
            q: "How long has Maxtize been in business?",
            a: "Maxtize has been delivering exceptional digital solutions for over 8 years. During this time, we've helped hundreds of clients across diverse industries achieve their digital transformation goals and grow their online presence."
          },
          {
            q: "Do you work with clients internationally?",
            a: "Yes, we work with clients globally. Our team is experienced in collaborating remotely, and we've successfully delivered projects for clients across North America, Europe, Asia, and Australia. We use efficient communication and project management tools to ensure smooth collaboration regardless of geographic location."
          }
        ],
        services: [
          {
            q: "What services do you offer?",
            a: "We offer a comprehensive range of digital services including web development, mobile app development, digital marketing, SEO optimization, UI/UX design, analytics & reporting, technology consulting, maintenance & support, and training workshops. Each service is customizable to fit your specific business needs."
          },
          {
            q: "How quickly can you deliver a website or app?",
            a: "Project timelines vary depending on complexity, scope, and requirements. A basic website might take 4-6 weeks, while complex web applications or mobile apps typically require 3-6 months for proper planning, design, development, and testing. During our initial consultation, we'll provide you with a detailed timeline based on your specific project needs."
          },
          {
            q: "Do you offer ongoing maintenance for websites and applications?",
            a: "Yes, we offer comprehensive maintenance and support packages to ensure your digital assets remain secure, up-to-date, and performing optimally. Our maintenance services include regular updates, security monitoring, performance optimization, content updates, and technical support with flexible SLAs to meet your needs."
          }
        ],
        pricing: [
          {
            q: "How do you structure your pricing?",
            a: "We offer flexible pricing structures tailored to the needs of each project. For well-defined projects, we typically work with fixed-price quotes based on detailed requirements. For ongoing services or projects with evolving scopes, we offer retainer models or time-and-materials pricing. We're transparent about costs and provide detailed proposals before any project begins."
          },
          {
            q: "Do you require a minimum budget or contract length?",
            a: "While we don't have strict minimum requirements, most of our clients invest at least $5,000 for small projects and $15,000+ for comprehensive digital solutions. For maintenance and ongoing services, we typically recommend minimum 3-month engagements to achieve meaningful results. We're happy to discuss your budget constraints and find a solution that works for you."
          },
          {
            q: "What payment methods do you accept?",
            a: "We accept multiple payment methods including credit cards, bank transfers, and digital payment platforms. For large projects, we typically structure payments in milestones: an initial deposit, progress payments at key delivery points, and a final payment upon project completion."
          }
        ],
        support: [
          {
            q: "How can I get support if I encounter issues?",
            a: "We provide multiple support channels for our clients. Depending on your service agreement, you can reach our support team via email, phone, or through our dedicated client portal. For urgent matters, we offer emergency support with guaranteed response times based on your service level agreement."
          },
          {
            q: "What are your standard support hours?",
            a: "Our standard support hours are Monday through Friday, 9am to 6pm Eastern Time. For clients with premium support packages, we offer extended hours and weekend support. Emergency support for critical issues is available 24/7 for clients with appropriate service level agreements."
          },
          {
            q: "Do you provide training for my team?",
            a: "Yes, we offer comprehensive training services to ensure your team can effectively manage and utilize the digital solutions we create. Training can be delivered in-person or virtually, and we provide custom documentation tailored to your specific implementation. We also offer ongoing education through webinars and workshop sessions."
          }
        ]
      }
    },
    de: {
      title: "Häufig gestellte Fragen",
      subtitle: "Finden Sie Antworten auf häufige Fragen zu unseren Dienstleistungen",
      contactText: "Nicht gefunden, wonach Sie suchen?",
      contactCta: "Kontaktieren Sie unser Team",
      categories: [
        { id: "general", label: "Allgemein" },
        { id: "services", label: "Dienstleistungen" },
        { id: "pricing", label: "Preisgestaltung" },
        { id: "support", label: "Support" }
      ],
      faqs: {
        general: [
          {
            q: "Was unterscheidet Maxtize von anderen Digitalagenturen?",
            a: "Maxtize zeichnet sich durch unseren ganzheitlichen Ansatz für digitale Lösungen aus. Wir kombinieren strategische Expertise, technische Exzellenz und kreative Innovation, um ergebnisorientierte Lösungen zu liefern, die auf die einzigartigen Bedürfnisse jedes Kunden zugeschnitten sind. Unser multidisziplinäres Team arbeitet nahtlos über Fachgebiete hinweg zusammen und bietet wirklich integrierte Dienstleistungen, die messbares Geschäftswachstum fördern."
          },
          {
            q: "Wie lange ist Maxtize schon im Geschäft?",
            a: "Maxtize liefert seit über 8 Jahren außergewöhnliche digitale Lösungen. In dieser Zeit haben wir Hunderten von Kunden in verschiedenen Branchen geholfen, ihre Ziele der digitalen Transformation zu erreichen und ihre Online-Präsenz zu stärken."
          }
        ],
        services: [
          {
            q: "Welche Dienstleistungen bieten Sie an?",
            a: "Wir bieten ein umfassendes Spektrum an digitalen Dienstleistungen, darunter Webentwicklung, mobile App-Entwicklung, digitales Marketing, SEO-Optimierung, UI/UX-Design, Analytik & Berichterstattung, Technologieberatung, Wartung & Support sowie Schulungsworkshops. Jede Dienstleistung ist anpassbar, um Ihren spezifischen Geschäftsanforderungen gerecht zu werden."
          }
        ]
      }
    },
    // Add other language translations as needed
  };

  const content = faqTranslations[currentLang as keyof typeof faqTranslations] || faqTranslations.en;
  const [activeCategory, setActiveCategory] = useState("general");

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
                FAQ
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-300">
                {content.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {content.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-20">
            <ScrollReveal className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-32">
                <h3 className="font-semibold text-lg mb-4">
                  {currentLang === 'en' ? 'Categories' : 
                   currentLang === 'de' ? 'Kategorien' : 
                   currentLang === 'zh' ? '类别' : 'Categories'}
                </h3>
                <nav className="space-y-2">
                  {content.categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </nav>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" delay={0.2}>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {content.categories.find(c => c.id === activeCategory)?.label}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {content.faqs[activeCategory as keyof typeof content.faqs]?.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-gray-100 dark:border-gray-700 rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left py-5 text-lg font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 dark:text-gray-300 pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">{content.contactText}</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {content.contactCta}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
                
                <a 
                  href="mailto:info@maxtize.com" 
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <Mail size={18} /> info@maxtize.com
                </a>
                
                <a 
                  href="tel:+1234567890" 
                  className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  <Phone size={18} /> +1 (234) 567-890
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;
