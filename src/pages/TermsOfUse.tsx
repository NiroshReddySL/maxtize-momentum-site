
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/common/SEO';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TableOfContents from '@/components/terms/TableOfContents';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { companyInfo } from '@/data/companyInfo';

const TermsOfUse = () => {
  const { currentLang } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: "Terms of Use",
      subtitle: "Please read these terms carefully before using our services",
      updated: `Last Updated: June 15, 2024`,
      contactText: "Have questions about our terms?",
      contactCta: "Contact our team",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: `By accessing and using the services provided by Maxtize ('we', 'our', or 'the Company'), you agree to be bound by these Terms of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing our services.`
        },
        {
          title: "2. Use License",
          content: `Permission is granted to temporarily access the materials on Maxtize's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose; attempt to decompile or reverse engineer any software contained on Maxtize's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.`
        },
        {
          title: "3. Disclaimer",
          content: `The materials on Maxtize's website are provided on an 'as is' basis. Maxtize makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`
        },
        {
          title: "4. Limitations",
          content: `In no event shall Maxtize or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Maxtize's website, even if Maxtize or a Maxtize authorized representative has been notified orally or in writing of the possibility of such damage.`
        },
        {
          title: "5. Accuracy of Materials",
          content: `The materials appearing on Maxtize's website could include technical, typographical, or photographic errors. Maxtize does not warrant that any of the materials on its website are accurate, complete or current. Maxtize may make changes to the materials contained on its website at any time without notice.`
        },
        {
          title: "6. Links",
          content: `Maxtize has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Maxtize of the site. Use of any such linked website is at the user's own risk.`
        },
        {
          title: "7. Modifications",
          content: `Maxtize may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.`
        },
        {
          title: "8. Governing Law",
          content: `These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in ${companyInfo.location.city}, ${companyInfo.location.state}.`
        },
        {
          title: "9. Privacy",
          content: `Your use of Maxtize's website is also subject to our Privacy Policy, which is incorporated into these Terms of Use by reference. Please review our Privacy Policy to understand our practices.`
        },
        {
          title: "10. User Accounts",
          content: `Some services offered on this website may require the creation of a user account. You are responsible for maintaining the confidentiality of your account information, including your password, and for all activity that occurs under your account. You agree to notify Maxtize immediately of any unauthorized use of your account or any other breach of security.`
        }
      ]
    },
    de: {
      title: "Nutzungsbedingungen",
      subtitle: "Bitte lesen Sie diese Bedingungen sorgfältig durch, bevor Sie unsere Dienste nutzen",
      updated: "Zuletzt aktualisiert: 15. Juni 2024",
      contactText: "Haben Sie Fragen zu unseren Bedingungen?",
      contactCta: "Kontaktieren Sie unser Team",
      sections: [
        {
          title: "1. Akzeptanz der Bedingungen",
          content: "Durch den Zugriff auf und die Nutzung der von Maxtize ('wir', 'uns' oder 'das Unternehmen') bereitgestellten Dienste erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen, alle geltenden Gesetze und Vorschriften gebunden zu sein, und Sie stimmen zu, dass Sie für die Einhaltung aller geltenden lokalen Gesetze verantwortlich sind. Wenn Sie mit einer dieser Bedingungen nicht einverstanden sind, ist es Ihnen untersagt, unsere Dienste zu nutzen oder darauf zuzugreifen."
        },
        {
          title: "2. Nutzungslizenz",
          content: "Es wird die Erlaubnis erteilt, vorübergehend auf die Materialien auf der Website von Maxtize für persönliche, nicht-kommerzielle, vorübergehende Betrachtung zuzugreifen. Dies ist die Erteilung einer Lizenz, nicht eine Übertragung des Eigentums, und im Rahmen dieser Lizenz dürfen Sie nicht: die Materialien modifizieren oder kopieren; die Materialien für kommerzielle Zwecke verwenden; versuchen, jegliche Software, die auf der Website von Maxtize enthalten ist, zu dekompilieren oder zurückzuentwickeln; urheberrechtliche oder andere Eigentumshinweise aus den Materialien entfernen; oder die Materialien an eine andere Person übertragen oder die Materialien auf einem anderen Server 'spiegeln'."
        }
        // Additional German translations would be added here
      ]
    }
    // Additional languages would be added here
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
                Legal
              </motion.span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-300">
                {content.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-2">
                {content.subtitle}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {content.updated}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-10">
            <TableOfContents sections={content.sections} />
            
            <ScrollReveal className="lg:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {content.sections.map((section, index) => (
                    <motion.div
                      key={index}
                      id={`section-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="mb-12"
                    >
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p>{section.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4}>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-10 text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">{content.contactText}</h3>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {content.contactCta}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
