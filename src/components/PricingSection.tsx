import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Star, CreditCard, Bot, MessageCircle, Phone, X, Crown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PromoCountdown from "./PromoCountdown";

const PLANO_PRATA_WHATSAPP = 'https://api.whatsapp.com/send?phone=5519993937708&text=Ol%C3%A1%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20prata';
const WHATSAPP_LINK = "https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A";

// Miguel Button Component
const MiguelButtonInline = ({ onOpenMiguelChat }: { onOpenMiguelChat: () => void }) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setShowOptions(!showOptions)}
        className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-4 py-2.5 rounded-xl shadow-lg text-sm"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          animate={{ x: ["0%", "100%", "0%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          style={{ filter: "blur(20px)", opacity: 0.5 }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="relative flex items-center gap-2">
          <Bot className="w-4 h-4" />
          Tire dúvidas com Miguel
        </span>
      </motion.button>

      <AnimatePresence>
        {showOptions && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setShowOptions(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5" />
                    <span className="font-semibold text-sm">Como posso ajudar?</span>
                  </div>
                  <button onClick={() => setShowOptions(false)} className="p-1 hover:bg-white/20 rounded-full">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-3 space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { window.open(WHATSAPP_LINK, "_blank"); setShowOptions(false); }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white p-2.5 rounded-lg flex items-center gap-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <div className="text-left">
                    <p className="font-medium">Falar com Atendente</p>
                    <p className="text-[10px] text-white/80">Via WhatsApp</p>
                  </div>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { onOpenMiguelChat(); setShowOptions(false); }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-2.5 rounded-lg flex items-center gap-2 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <div className="text-left">
                    <p className="font-medium">Falar com Miguel</p>
                    <p className="text-[10px] text-white/80">Digite suas dúvidas</p>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

type BillingPeriod = "mensal" | "bimestral" | "trimestral";

const PricingSection = ({ onOpenMiguelChat }: { onOpenMiguelChat?: () => void }) => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("mensal");

  const hyperfocoOffer = {
    title: "Plano Hyperfoco",
    subtitle: "Impulsione sua marca hoje mesmo",
    description: "Se você quer atrair mais clientes, aumentar sua presença digital e vender todos os dias nas redes sociais, eu criei uma solução completa, acessível e rápida.",
    features: [
      "10 criativos profissionais prontos para postar",
      "10 textos persuasivos com SEO focados em alcance e vendas",
      "10 postagens estratégicas pensadas para engajar e converter",
      "Gestão de tráfego pago para Facebook e Instagram",
      "Material personalizado alinhado com seu público"
    ],
    price: "99",
    cents: "90",
    delivery: "Entrega em até 24 horas",
    paymentMethods: ["Pix", "Cartão de crédito em até 2x"]
  };

  const pricing: Record<BillingPeriod, { prata: string; ouro: string; titanio: string }> = {
    mensal: { prata: "159", ouro: "299", titanio: "499" },
    bimestral: { prata: "139", ouro: "269", titanio: "449" },
    trimestral: { prata: "119", ouro: "249", titanio: "399" },
  };

  const plans = [
    {
      name: "Plano Prata",
      priceKey: "prata" as const,
      description: "Perfeito para empresas que querem crescer com qualidade no marketing digital",
      features: [
        "20 Criativos profissionais",
        "20 Textos com SEO",
        "20 Postagens estratégicas",
        "10 Stories envolventes",
        "05 Vídeos Reels",
        "Tráfego pago (Facebook Instagram)",
        "Bio profissional",
        "LinkBio Instagram",
        "Checklist digital personalizado",
        "Atendimento VIP WhatsApp",
        "Relatório mensal",
      ],
      highlight: false,
      isPromo: false,
      cta: "APROVEITAR AGORA!",
    },
    {
      name: "Plano Ouro",
      priceKey: "ouro" as const,
      description: "Solução completa para empresas que querem resultados expressivos",
      features: [
        "30 Criativos profissionais",
        "30 Textos otimizados com SEO",
        "30 Postagens estratégicas",
        "10 Stories envolventes",
        "05 Vídeos (Reels)",
        "Tráfego pago Facebook/Instagram",
        "Link na bio Instagram",
        "Checklist digital personalizado",
        "Atendimento VIP WhatsApp",
        "Entrega em até 12 horas",
        "BÔNUS: Website profissional com IA integrada",
      ],
      highlight: true,
      isPromo: true,
      cta: "Escolher Plano Ouro",
    },
    {
      name: "Plano Titânio",
      priceKey: "titanio" as const,
      description: "A solução premium para empresas que querem dominar todos os canais digitais",
      features: [
        "50 Criativos profissionais",
        "50 Textos otimizados com SEO",
        "50 Postagens estratégicas",
        "10 Stories envolventes",
        "05 Vídeos (Reels)",
        "Tráfego pago Facebook/Instagram",
        "Bio profissional completa",
        "Link na bio Instagram",
        "Checklist digital personalizado",
        "Atendimento VIP WhatsApp",
        "Relatório mensal detalhado",
        "Entrega em até 6 dias úteis",
        "BÔNUS: Website profissional com IA integrada",
      ],
      highlight: false,
      isPromo: false,
      cta: "Escolher Plano Titânio",
    },
  ];

  const periodLabels: Record<BillingPeriod, string> = {
    mensal: "Mensal",
    bimestral: "Bimestral",
    trimestral: "Trimestral",
  };

  return (
    <section className="py-16 bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(24_95%_53%)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* New Pricing Table */}
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <Crown className="w-4 h-4" />
              Nossos Planos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Escolha o plano <span className="italic text-primary">ideal</span> para você
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Planos flexíveis que se adaptam às necessidades do seu negócio
            </p>
          </div>

          {/* Billing Period Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card border border-border rounded-full p-1">
              {(["mensal", "bimestral", "trimestral"] as BillingPeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setBillingPeriod(period)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    billingPeriod === period
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {periodLabels[period]}
                </button>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan, index) => {
              const currentPrice = pricing[billingPeriod][plan.priceKey];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`rounded-2xl p-6 md:p-8 border-2 relative flex flex-col ${
                    plan.highlight
                      ? "border-primary bg-card shadow-glow md:scale-105 z-10"
                      : "border-border/30 bg-card/50 backdrop-blur-sm"
                  } transition-all`}
                >
                  {/* Promo Badge for highlighted plan */}
                  {plan.isPromo && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                        ⏰ Promoção por tempo limitado
                      </div>
                    </div>
                  )}

                  {/* Stars for promo */}
                  {!plan.highlight && !plan.isPromo && index === 0 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  )}

                  {/* Plan Name */}
                  <h3 className={`text-xl font-bold text-center mb-2 ${
                    plan.highlight ? "text-primary" : "text-foreground"
                  }`}>
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="text-center mb-4">
                    <motion.div
                      key={currentPrice}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className={`text-4xl font-bold ${
                        plan.highlight ? "text-red-500" : "text-primary"
                      }`}>
                        R$ {currentPrice}
                      </span>
                      <span className="text-muted-foreground text-sm"> /mês</span>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs text-center mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, idx) => {
                      const isBonus = feature.startsWith("BÔNUS:");
                      const isDelivery = feature.startsWith("Entrega");
                      return (
                        <div key={idx} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isBonus || isDelivery ? "text-emerald-500" : "text-primary"
                          }`} />
                          <span className={`text-xs ${
                            isBonus ? "text-emerald-400 font-semibold" : 
                            isDelivery ? "text-emerald-400 font-medium" :
                            "text-foreground/80"
                          }`}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full rounded-lg font-bold text-sm py-5 ${
                      plan.highlight
                        ? "bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20"
                        : "bg-card border-2 border-foreground/20 text-foreground hover:bg-foreground/10"
                    }`}
                    onClick={() => window.open(
                      plan.priceKey === "prata" ? PLANO_PRATA_WHATSAPP :
                      `https://wa.me/5519993937708?text=Olá, gostaria de informações sobre o ${plan.name}`,
                      '_blank'
                    )}
                  >
                    {plan.cta}
                  </Button>

                  {onOpenMiguelChat && (
                    <div className="mt-3 flex justify-center">
                      <MiguelButtonInline onOpenMiguelChat={onOpenMiguelChat} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Dúvidas sobre qual plano escolher?{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                Fale com nossa equipe
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
