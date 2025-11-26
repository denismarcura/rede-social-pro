import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const mainOffer = {
    title: "MARKETING DIGITAL COMPLETO",
    subtitle: "GANHE UMA LANDING PAGE OU WEBSITE",
    subtitle2: "FECHANDO NOSSO PLANO OURO",
    features: [
      "60 CRIATIVOS",
      "60 POSTAGENS",
      "10 VÍDEOS REELS",
      "TRÁFEGO PAGO (Google e Youtube)",
      "LINKBIO INSTAGRAM",
      "ATENDIMENTO VIP WHATSAPP"
    ],
    features2: [
      "60 TEXTOS COM SEO",
      "10 Stories",
      "TRÁFEGO PAGO (Facebook Instagram)",
      "BIO PROFISSIONAL",
      "CHECKLIST DIGITAL DE SEU INSTAGRAM",
      "RELATÓRIO MENSAL"
    ],
    price: "599",
    cta: "QUERO COMEÇAR AGORA"
  };

  const plans = [
    {
      name: "Plano Prata",
      price: "299",
      features: [
        "30 Criativos profissionais",
        "30 Postagens",
        "5 Vídeos Reels",
        "30 Textos com SEO",
        "5 Stories mensais",
        "Tráfego pago (Facebook/Instagram)",
        "Bio profissional",
        "Relatório mensal",
        "Atendimento via WhatsApp"
      ],
      highlight: false
    },
    {
      name: "Plano Ouro",
      price: "599",
      features: [
        "60 Criativos profissionais",
        "60 Postagens",
        "10 Vídeos Reels",
        "60 Textos com SEO",
        "10 Stories",
        "Tráfego pago (Facebook/Instagram)",
        "Tráfego pago (Google e Youtube)",
        "LinkBio Instagram",
        "Bio profissional",
        "Checklist digital Instagram",
        "Relatório mensal",
        "Atendimento VIP WhatsApp",
        "GANHE Website ou Landing Page"
      ],
      highlight: true
    },
    {
      name: "Plano Titânio",
      price: "899",
      features: [
        "90 Criativos profissionais",
        "90 Postagens",
        "15 Vídeos Reels",
        "90 Textos com SEO",
        "15 Stories",
        "Tráfego pago (Todas plataformas)",
        "LinkBio Instagram premium",
        "Bio profissional completa",
        "Checklist digital Instagram",
        "Relatório mensal detalhado",
        "Atendimento VIP WhatsApp prioritário",
        "Website ou Landing Page",
        "E-mail marketing mensal",
        "Consultoria estratégica mensal"
      ],
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(24_95%_53%)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-2 border-primary rounded-3xl p-8 bg-card/30 backdrop-blur-sm">
            <p className="text-center text-white font-semibold text-lg mb-1">
              {mainOffer.subtitle}
            </p>
            <p className="text-center text-white/80 text-sm mb-8">
              {mainOffer.subtitle2}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-8 max-w-2xl mx-auto">
              <div className="space-y-3">
                {mainOffer.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                {mainOffer.features2.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-white text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-white/80 text-sm mb-2">A PARTIR DE</p>
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">
                R$ {mainOffer.price}<span className="text-3xl">,00</span>
              </div>
              <p className="text-white/80 text-sm">EM 3X SEM JUROS NO CARTÃO</p>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 py-6 rounded-full animate-pulse hover:animate-none"
                onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
              >
                {mainOffer.cta}
              </Button>
            </div>
          </div>
        </div>

        {/* Three Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 border-2 ${
                plan.highlight
                  ? "border-primary bg-primary text-white scale-105"
                  : "border-border bg-card/30 backdrop-blur-sm"
              } transition-transform hover:scale-105`}
            >
              {/* Plan Name */}
              <h3 className={`text-2xl font-bold text-center mb-4 ${
                plan.highlight ? "text-white" : "text-primary"
              }`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <div className={`text-4xl font-bold mb-2 ${
                  plan.highlight ? "text-white" : "text-primary"
                }`}>
                  R$ {plan.price}<span className="text-2xl">,00</span>
                </div>
                <p className={`text-sm ${
                  plan.highlight ? "text-white/90" : "text-muted-foreground"
                }`}>
                  EM 3X SEM JUROS NO CARTÃO
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                      plan.highlight ? "text-white" : "text-primary"
                    }`} />
                    <span className={`text-sm ${
                      plan.highlight ? "text-white" : "text-foreground"
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
                onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
              >
                Solicitar Orçamento
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
