
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQs from "./pages/FAQs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Pricing from "./pages/Pricing";
import TermsOfUse from "./pages/TermsOfUse";
import CookieConsent from "./components/common/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        {/* Default routes */}
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        
        {/* Localized routes */}
        <Route path="/:lang" element={<Index />} />
        <Route path="/:lang/about" element={<About />} />
        <Route path="/:lang/services" element={<Services />} />
        <Route path="/:lang/services/:id" element={<ServiceDetail />} />
        <Route path="/:lang/projects" element={<Projects />} />
        <Route path="/:lang/projects/:id" element={<ProjectDetail />} />
        <Route path="/:lang/blog" element={<Blog />} />
        <Route path="/:lang/blog/:slug" element={<BlogPost />} />
        <Route path="/:lang/contact" element={<Contact />} />
        <Route path="/:lang/faqs" element={<FAQs />} />
        <Route path="/:lang/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/:lang/pricing" element={<Pricing />} />
        <Route path="/:lang/terms-of-use" element={<TermsOfUse />} />
        
        {/* Catch all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieConsent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
