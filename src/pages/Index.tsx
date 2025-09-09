import Hero from "@/components/Hero";
import CTABanner from "@/components/CTABanner";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import CarouselShowcase from "@/components/CarouselShowcase";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <CTABanner />
      <Services />
      <Process />
      <Portfolio />
      <CarouselShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Index;
