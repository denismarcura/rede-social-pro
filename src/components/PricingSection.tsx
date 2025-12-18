import { Button } from "@/components/ui/button";
import { Check, Clock } from "lucide-react";
import PromoCountdown from "./PromoCountdown";
import ChristmasLights from "./ChristmasLights";

const PLANO_PRATA_WHATSAPP = 'https://api.whatsapp.com/send?phone=5519993937708&text=Ol%C3%A1%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20prata%20de%20R%24%20199%2C00%20mensais';

const PricingSection = () => {
  const mainOffer = {
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
      price: "199",
      originalPrice: "299",
      isPromo: true,
      features: [
        "20 Criativos profissionais",
        "20 Textos com SEO",
        "20 Postagens estratégicas",
        "10 Stories envolventes",
        "05 Vídeos Reels",
        "Tráfego pago (Facebook/Instagram)",
        "Bio profissional",
        "LinkBio Instagram",
        "Checklist digital personalizado",
        "Atendimento VIP WhatsApp",
        "Relatório mensal",
        "2x sem juros no cartão"
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
      {/* Christmas Lights */}
      <ChristmasLights />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(24_95%_53%)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Pricing Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg mb-2">
            Planos a partir de R$ 299,00 / Mensais
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="border-2 border-primary rounded-2xl p-8 bg-background/50 backdrop-blur-sm">
            <h3 className="text-center text-white font-bold text-xl mb-1">
              {mainOffer.subtitle}
            </h3>
            <p className="text-center text-white/70 text-sm mb-8 uppercase tracking-wide">
              {mainOffer.subtitle2}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 mb-8 max-w-3xl mx-auto">
              <div className="space-y-2">
                {mainOffer.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-xs uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {mainOffer.features2.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-white/90 text-xs uppercase tracking-wide">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="text-center mb-6">
              <p className="text-white/60 text-xs uppercase tracking-widest">A PARTIR DE</p>
            </div>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="text-6xl md:text-7xl font-bold text-primary mb-1">
                R$ {mainOffer.price}<span className="text-4xl">,00</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold text-sm uppercase tracking-wider px-16 py-6 rounded-full"
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
              className={`rounded-xl p-6 border-2 relative ${
                plan.isPromo
                  ? "border-red-500 bg-gradient-to-br from-red-500/20 to-red-900/20 backdrop-blur-sm ring-2 ring-red-500 ring-offset-2 ring-offset-background"
                  : plan.highlight
                  ? "border-primary bg-primary text-white"
                  : "border-border/30 bg-background/30 backdrop-blur-sm"
              } transition-all hover:scale-105`}
            >
              {/* Promo Badge with Santa Hat */}
              {plan.isPromo && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
                    🎅 PROMOÇÃO DE NATAL!
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-xl font-bold text-center mb-4 uppercase tracking-wide ${
                plan.highlight ? "text-white" : "text-white"
              }`}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-4">
                {plan.isPromo && plan.originalPrice && (
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-lg text-white/50 line-through">R$ {plan.originalPrice},00</span>
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">-33%</span>
                  </div>
                )}
                <div className={`text-3xl font-bold mb-1 ${
                  plan.isPromo ? "text-red-500" : plan.highlight ? "text-white" : "text-primary"
                }`}>
                  R$ {plan.price}<span className="text-xl">,00</span>
                </div>
                <p className={`text-xs ${
                  plan.highlight ? "text-white/80" : "text-white/60"
                }`}>
                  EM 3X SEM JUROS NO CARTÃO
                </p>
              </div>

              {/* Countdown for Promo */}
              {plan.isPromo && (
                <div className="mb-4">
                  <PromoCountdown variant="large" />
                </div>
              )}

              {/* Features */}
              <div className="space-y-2 mb-6 min-h-[280px]">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className={`w-3 h-3 flex-shrink-0 mt-1 ${
                      plan.isPromo ? "text-red-500" : plan.highlight ? "text-white" : "text-primary"
                    }`} />
                    <span className={`text-xs ${
                      plan.highlight ? "text-white/90" : "text-white/80"
                    }`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full rounded-full font-bold text-xs uppercase tracking-wide ${
                  plan.isPromo
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : plan.highlight
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
                onClick={() => window.open(plan.isPromo ? PLANO_PRATA_WHATSAPP : 'https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
              >
                {plan.isPromo ? 'APROVEITAR AGORA!' : 'Solicitar Orçamento'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
