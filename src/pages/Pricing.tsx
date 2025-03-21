
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import SEO from '@/components/common/SEO';
import { BarChart4, Sparkles, Shield } from 'lucide-react';
import PricingHero from '@/components/pricing/PricingHero';
import PricingGrid from '@/components/pricing/PricingGrid';
import PricingCTA from '@/components/pricing/PricingCTA';
import PricingFAQs from '@/components/pricing/PricingFAQs';
import { companyInfo } from '@/data/companyInfo';

const Pricing = () => {
  const { currentLang } = useLanguage();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const translations = {
    en: {
      title: "Value-Based Solutions for Your Business",
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
        },
        {
          question: "Do you work with clients internationally?",
          answer: `Yes, we work with clients globally. Based in ${companyInfo.location.city}, ${companyInfo.location.country}, our team has experience working with businesses of all sizes across different time zones and markets.`
        }
      ],
      plans: [
        {
          name: "Starter",
          description: "For small businesses getting started with digital solutions",
          priceDescription: "Best value for startups",
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
          priceDescription: "Optimal balance of features and value",
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
          priceDescription: "Tailored enterprise solutions",
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
      title: "Wertbasierte Lösungen für Ihr Unternehmen",
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
          priceDescription: "Bester Wert für Startups",
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
          <PricingHero
            title={content.title}
            subtitle={content.subtitle}
          />

          <PricingGrid plans={content.plans} />

          <PricingCTA
            title={content.contactTitle}
            description={content.contactText}
            buttonText={content.contactCta}
          />

          <PricingFAQs
            title={content.faqTitle}
            faqs={content.pricingFaqs}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
