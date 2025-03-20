
import React from 'react';
import { ServiceContentType } from '@/types/serviceContent';

export const servicesContent: Record<string, ServiceContentType> = {
  "digital-marketing": {
    id: "digital-marketing",
    relatedServices: ["seo", "analytics", "design"],
    sections: [
      {
        id: "strategy",
        title: "Strategic Marketing Approach",
        content: (
          <>
            <p className="mb-4">Our digital marketing strategies are data-driven and results-oriented. We begin with a comprehensive analysis of your business goals, target audience, and competitive landscape.</p>
            <p>Using these insights, we develop customized campaigns that connect with your audience at the right time, in the right place, with the right message.</p>
          </>
        ),
        image: "/images/services/digital-marketing-strategy.jpg",
        imageAlt: "Strategic marketing planning session",
        translations: {
          'de': {
            title: "Strategischer Marketing-Ansatz",
            content: (
              <>
                <p className="mb-4">Unsere digitalen Marketingstrategien sind datengesteuert und ergebnisorientiert. Wir beginnen mit einer umfassenden Analyse Ihrer Geschäftsziele, Zielgruppe und Wettbewerbslandschaft.</p>
                <p>Mit diesen Erkenntnissen entwickeln wir maßgeschneiderte Kampagnen, die Ihre Zielgruppe zur richtigen Zeit, am richtigen Ort, mit der richtigen Botschaft erreichen.</p>
              </>
            ),
            imageAlt: "Strategische Marketingplanungssitzung"
          },
          'zh': {
            title: "战略营销方法",
            content: (
              <>
                <p className="mb-4">我们的数字营销策略以数据为驱动，以结果为导向。我们从对您的业务目标、目标受众和竞争格局的全面分析开始。</p>
                <p>利用这些见解，我们开发定制化的营销活动，在正确的时间、正确的地点，以正确的信息与您的受众建立联系。</p>
              </>
            ),
            imageAlt: "战略营销规划会议"
          }
        }
      },
      {
        id: "channels",
        title: "Multi-Channel Excellence",
        content: (
          <>
            <p className="mb-4">We excel across all digital channels, from social media and search engines to email and content marketing. Our integrated approach ensures consistent messaging and maximum impact.</p>
            <p>By leveraging the unique strengths of each platform, we create a cohesive ecosystem that guides prospects through your marketing funnel efficiently.</p>
          </>
        ),
        image: "/images/services/digital-marketing-channels.jpg",
        imageAlt: "Multi-channel marketing visualization",
        flipped: true,
        translations: {
          'de': {
            title: "Multi-Channel-Exzellenz",
            content: (
              <>
                <p className="mb-4">Wir überzeugen über alle digitalen Kanäle hinweg, von sozialen Medien und Suchmaschinen bis hin zu E-Mail- und Content-Marketing. Unser integrierter Ansatz gewährleistet konsistente Botschaften und maximale Wirkung.</p>
                <p>Durch die Nutzung der einzigartigen Stärken jeder Plattform schaffen wir ein zusammenhängendes Ökosystem, das Interessenten effizient durch Ihren Marketing-Trichter führt.</p>
              </>
            ),
            imageAlt: "Visualisierung von Multi-Channel-Marketing"
          }
        }
      },
      {
        id: "analytics",
        title: "Data-Driven Optimization",
        content: (
          <>
            <p className="mb-4">Our campaigns aren't set-and-forget. We continuously monitor performance metrics and consumer behavior to refine and optimize your marketing initiatives.</p>
            <p>This agile approach allows us to capitalize on emerging opportunities, address challenges quickly, and maximize your return on investment.</p>
          </>
        ),
        image: "/images/services/digital-marketing-analytics.jpg",
        imageAlt: "Marketing analytics dashboard",
        translations: {
          'de': {
            title: "Datengesteuerte Optimierung",
            content: (
              <>
                <p className="mb-4">Unsere Kampagnen werden nicht einfach eingestellt und vergessen. Wir überwachen kontinuierlich Leistungskennzahlen und Verbraucherverhalten, um Ihre Marketinginitiativen zu verfeinern und zu optimieren.</p>
                <p>Dieser agile Ansatz ermöglicht es uns, aufkommende Chancen zu nutzen, Herausforderungen schnell anzugehen und Ihren Return on Investment zu maximieren.</p>
              </>
            ),
            imageAlt: "Marketing-Analytics-Dashboard"
          }
        }
      }
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "EcoTech Solutions",
        comment: "The digital marketing strategy Maxtize developed for us transformed our online presence. Within just three months, we saw a 45% increase in qualified leads and a 30% boost in conversion rates.",
        avatar: "/images/testimonials/sarah-j.jpg",
        rating: 5,
        translations: {
          'de': {
            comment: "Die von Maxtize für uns entwickelte digitale Marketingstrategie hat unsere Online-Präsenz verändert. Innerhalb von nur drei Monaten verzeichneten wir einen Anstieg der qualifizierten Leads um 45% und eine Steigerung der Konversionsraten um 30%."
          },
          'zh': {
            comment: "Maxtize为我们制定的数字营销策略改变了我们的在线形象。仅仅三个月内，我们的合格潜在客户增加了45%，转化率提高了30%。"
          }
        }
      },
      {
        name: "Michael Chen",
        company: "Nexus Innovations",
        comment: "What sets Maxtize apart is their holistic approach to digital marketing. They don't just focus on metrics—they understand our business goals and create campaigns that directly contribute to our growth.",
        avatar: "/images/testimonials/michael-c.jpg",
        rating: 5,
        translations: {
          'de': {
            comment: "Was Maxtize auszeichnet, ist ihr ganzheitlicher Ansatz für digitales Marketing. Sie konzentrieren sich nicht nur auf Metriken – sie verstehen unsere Geschäftsziele und erstellen Kampagnen, die direkt zu unserem Wachstum beitragen."
          }
        }
      }
    ],
    faq: [
      {
        question: "How quickly can I expect to see results from digital marketing efforts?",
        answer: "The timeline for results varies depending on your specific goals, industry, and the channels we're utilizing. Typically, you'll start seeing improvements in metrics like website traffic and engagement within the first month. More significant results in lead generation and conversions usually become apparent within 3-6 months as we optimize campaigns based on data.",
        translations: {
          'de': {
            question: "Wie schnell kann ich Ergebnisse von digitalen Marketingmaßnahmen erwarten?",
            answer: "Der Zeitrahmen für Ergebnisse variiert je nach Ihren spezifischen Zielen, Ihrer Branche und den Kanälen, die wir nutzen. In der Regel werden Sie innerhalb des ersten Monats Verbesserungen bei Metriken wie Website-Traffic und Engagement feststellen. Bedeutendere Ergebnisse bei der Leadgenerierung und Konversionen werden in der Regel innerhalb von 3-6 Monaten sichtbar, wenn wir Kampagnen auf Basis von Daten optimieren."
          }
        }
      },
      {
        question: "How do you measure the success of digital marketing campaigns?",
        answer: "We establish clear KPIs aligned with your business objectives at the outset. Depending on your goals, these might include metrics like traffic growth, engagement rates, lead quality and quantity, conversion rates, cost per acquisition, and ultimately ROI. We provide regular reporting and insights on these metrics, along with strategic recommendations."
      }
    ]
  },
  "seo": {
    id: "seo",
    relatedServices: ["digital-marketing", "web-development", "analytics"],
    sections: [
      {
        id: "technical-seo",
        title: "Technical SEO Excellence",
        content: (
          <>
            <p className="mb-4">Our technical SEO approach ensures your website provides an optimal foundation for search visibility. We meticulously analyze and enhance site architecture, crawlability, indexation, speed, and mobile responsiveness.</p>
            <p>By resolving technical barriers, we enable search engines to effectively crawl and understand your content, creating the groundwork for higher rankings.</p>
          </>
        ),
        image: "/images/services/technical-seo.jpg",
        imageAlt: "Technical SEO audit visualization",
        translations: {
          'de': {
            title: "Technische SEO-Exzellenz",
            content: (
              <>
                <p className="mb-4">Unser technischer SEO-Ansatz stellt sicher, dass Ihre Website eine optimale Grundlage für die Suchsichtbarkeit bietet. Wir analysieren und verbessern akribisch die Website-Architektur, Crawlability, Indexierung, Geschwindigkeit und Mobile-Responsiveness.</p>
                <p>Durch die Beseitigung technischer Barrieren ermöglichen wir Suchmaschinen, Ihre Inhalte effektiv zu crawlen und zu verstehen, und schaffen damit die Grundlage für höhere Rankings.</p>
              </>
            ),
            imageAlt: "Visualisierung eines technischen SEO-Audits"
          }
        }
      },
      {
        id: "on-page-seo",
        title: "Strategic On-Page Optimization",
        content: (
          <>
            <p className="mb-4">Our on-page SEO strategies go beyond basic keyword placement. We conduct comprehensive research to identify high-value search terms and user intent, then strategically incorporate these insights into your content.</p>
            <p>We optimize all on-page elements including meta data, headings, content structure, internal linking, and schema markup to maximize visibility and click-through rates.</p>
          </>
        ),
        image: "/images/services/on-page-seo.jpg",
        imageAlt: "On-page SEO optimization process",
        flipped: true
      },
      {
        id: "off-page-seo",
        title: "Authority-Building Off-Page SEO",
        content: (
          <>
            <p className="mb-4">Our off-page SEO focuses on building your site's authority and reputation. We develop strategic link building campaigns to acquire high-quality backlinks from relevant, authoritative sources.</p>
            <p>Additionally, we enhance your brand's online presence through social signals, content marketing, and digital PR initiatives that strengthen your position in search results.</p>
          </>
        ),
        image: "/images/services/off-page-seo.jpg",
        imageAlt: "Link building and off-page SEO visualization"
      }
    ],
    testimonials: [
      {
        name: "David Martinez",
        company: "Precision Tools Manufacturing",
        comment: "After working with Maxtize on our SEO strategy, we saw our organic traffic increase by 120% within six months. More importantly, our conversion rate from organic search improved significantly, leading to a substantial ROI on our SEO investment.",
        avatar: "/images/testimonials/david-m.jpg",
        rating: 5
      }
    ],
    faq: [
      {
        question: "How long does it take to see results from SEO efforts?",
        answer: "SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. The timeline depends on factors such as your website's current state, competition level, and the scope of optimizations being implemented. We focus on building a sustainable foundation that provides lasting benefits rather than quick fixes that might be penalized by future algorithm updates."
      },
      {
        question: "How do you stay current with search engine algorithm changes?",
        answer: "Our SEO team constantly monitors industry news, search engine announcements, and ranking fluctuations. We participate in professional communities, attend conferences, and conduct regular testing to identify and adapt to algorithm changes quickly. This proactive approach ensures your strategies remain effective even as search engines evolve."
      }
    ]
  }
};

// Add placeholder content for other services
const placeholderContent = (id: string): ServiceContentType => ({
  id,
  relatedServices: ["digital-marketing", "seo"],
  sections: [
    {
      id: "overview",
      title: "Service Overview",
      content: "This is a placeholder section for the " + id + " service page. Additional content will be added soon.",
      image: "/placeholder.svg",
      imageAlt: "Placeholder image"
    }
  ],
  testimonials: [
    {
      name: "John Doe",
      company: "Example Company",
      comment: "This is a placeholder testimonial for the " + id + " service.",
      rating: 5
    }
  ],
  faq: [
    {
      question: "What are the benefits of this service?",
      answer: "This is a placeholder answer for the " + id + " service FAQ section."
    }
  ]
});

// Add placeholder content for remaining services
const remainingServiceIds = [
  "web-development", 
  "app-development", 
  "design", 
  "analytics", 
  "tech-consulting", 
  "maintenance", 
  "training"
];

remainingServiceIds.forEach(id => {
  if (!servicesContent[id]) {
    servicesContent[id] = placeholderContent(id);
  }
});
