import Hero from "@/components/Hero";

import PricingSection from "@/components/PricingSection";
import WhatsAppTestimonials from "@/components/WhatsAppTestimonials";
import ClientTestimonials from "@/components/ClientTestimonials";

import PromoBadges from "@/components/PromoBadges";
import CTABanner from "@/components/CTABanner";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <PricingSection />
      <PromoBadges />
      <WhatsAppTestimonials />
      <ClientTestimonials />
      <ScrollReveal>
        <CTABanner />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Process />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Portfolio />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Pricing />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Contact />
      </ScrollReveal>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
