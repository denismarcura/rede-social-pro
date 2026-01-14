import { useState } from "react";
import Hero from "@/components/Hero";
import PricingSection from "@/components/PricingSection";
import TrafficCTA from "@/components/TrafficCTA";
import WhatsAppTestimonials from "@/components/WhatsAppTestimonials";
import ClientTestimonials from "@/components/ClientTestimonials";
import PromoBadges from "@/components/PromoBadges";
import CTABanner from "@/components/CTABanner";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";
import MiguelChat from "@/components/MiguelChat";

const Index = () => {
  const [isMiguelChatOpen, setIsMiguelChatOpen] = useState(false);

  const handleOpenMiguelChat = () => {
    setIsMiguelChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <PromoPopup />
      <Hero />
      <PricingSection onOpenMiguelChat={handleOpenMiguelChat} />
      <PromoBadges />
      <TrafficCTA />
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
        <Pricing onOpenMiguelChat={handleOpenMiguelChat} />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <Contact />
      </ScrollReveal>
      <Footer />
      <WhatsAppFloat />
      <MiguelChat isOpen={isMiguelChatOpen} setIsOpen={setIsMiguelChatOpen} />
    </div>
  );
};

export default Index;
