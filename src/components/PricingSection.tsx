import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Clock, Star, CreditCard, Bot, MessageCircle, Phone, X, Crown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const pricing: Record<BillingPeriod, { prata: string; ouro: string; titanio: string }> = {
    mensal: { prata: "159", ouro: "299", titanio: "499" },
    bimestral: { prata: "139", ouro: "269", titanio: "449" },
    trimestral: { prata: "119", ouro: "249", titanio: "399" },
  };

  const discounts: Record<BillingPeriod, string> = {
    mensal: "",
    bimestral: "Economize 13%",
    trimestral: "Economize 25%",
  };

  const plans = [
    {
      name: "Plano Prata",
      icon: "🥈",
      priceKey: "prata" as const,
      description: "Ideal para quem está começando e quer presença digital profissional",
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
      cta: "COMEÇAR AGORA",
    },
    {
      name: "Plano Ouro",
      icon: "🥇",
      priceKey: "ouro" as const,
      description: "O mais escolhido! Resultados expressivos para seu negócio crescer",
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
        "⚡ Entrega em até 12 horas",
        "🎁 BÔNUS: Website profissional com IA",
      ],
      highlight: true,
      isPromo: true,
      cta: "ESCOLHER PLANO OURO",
    },
    {
      name: "Plano Titânio",
      icon: "💎",
      priceKey: "titanio" as const,
      description: "Máximo poder digital para dominar todos os canais e vender mais",
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
        "⚡ Entrega em até 6 dias úteis",
        "🎁 BÔNUS: Website profissional com IA",
      ],
      highlight: false,
      isPromo: false,
      cta: "ESCOLHER PLANO TITÂNIO",
    },
  ];

  const periodLabels: Record<BillingPeriod, string> = {
    mensal: "Mensal",
    bimestral: "Bimestral",
    trimestral: "Trimestral",
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary text-sm font-semibold px-5 py-2 rounded-full mb-6">
              <Crown className="w-4 h-4" />
              Nossos Planos
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5 tracking-tight">
              Escolha o plano <span className="italic text-primary">ideal</span> para você
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Planos flexíveis, sem fidelidade, que se adaptam às necessidades do seu negócio
            </p>
          </motion.div>

          {/* Billing Period Tabs */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex bg-card/80 border border-border rounded-2xl p-1.5 backdrop-blur-sm shadow-card">
              {(["mensal", "bimestral", "trimestral"] as BillingPeriod[]).map((period) => (
                <button
                  key={period}
                  onClick={() => setBillingPeriod(period)}
                  className={`relative px-6 md:px-8 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                    billingPeriod === period
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {periodLabels[period]}
                  {discounts[period] && billingPeriod === period && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {discounts[period]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mb-14 items-stretch">
            {plans.map((plan, index) => {
              const currentPrice = pricing[billingPeriod][plan.priceKey];
              return (
                <motion.div
                  key={plan.priceKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className={`group rounded-3xl relative flex flex-col overflow-hidden transition-all duration-500 hover:translate-y-[-4px] ${
                    plan.highlight
                      ? "bg-gradient-to-b from-primary/15 via-card to-card border-2 border-primary shadow-[0_0_60px_hsl(24_95%_53%/0.15)] md:scale-[1.04] z-10"
                      : "bg-card border border-border/50 hover:border-primary/30 hover:shadow-[0_0_40px_hsl(24_95%_53%/0.08)]"
                  }`}
                >
                  {/* Top accent line */}
                  <div className={`h-1 w-full ${plan.highlight ? "bg-gradient-to-r from-primary via-primary-foreground/20 to-primary" : "bg-border/30"}`} />

                  {/* Promo Badge */}
                  {plan.isPromo && (
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="bg-primary text-primary-foreground text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg shadow-primary/30 flex items-center gap-1.5"
                      >
                        <Sparkles className="w-3 h-3" />
                        Mais Popular
                      </motion.div>
                    </div>
                  )}

                  {/* Stars for Prata */}
                  {!plan.highlight && index === 0 && (
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  )}

                  <div className="p-7 md:p-8 pt-12 flex flex-col flex-1">
                    {/* Plan Icon & Name */}
                    <div className="text-center mb-5">
                      <span className="text-3xl mb-2 block">{plan.icon}</span>
                      <h3 className={`text-2xl font-extrabold tracking-tight ${
                        plan.highlight ? "text-primary" : "text-foreground"
                      }`}>
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="text-center mb-5">
                      <motion.div
                        key={currentPrice + billingPeriod}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="flex items-baseline justify-center gap-1"
                      >
                        <span className="text-muted-foreground text-lg font-medium">R$</span>
                        <span className={`text-5xl font-black tracking-tight ${
                          plan.highlight ? "text-primary" : "text-foreground"
                        }`}>
                          {currentPrice}
                        </span>
                        <span className="text-muted-foreground text-base font-medium">/mês</span>
                      </motion.div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm text-center mb-7 leading-relaxed px-2">
                      {plan.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-border/50 mb-7" />

                    {/* Features */}
                    <div className="space-y-3.5 mb-8 flex-1">
                      {plan.features.map((feature, idx) => {
                        const isBonus = feature.includes("BÔNUS:");
                        const isDelivery = feature.includes("Entrega");
                        const hasEmoji = feature.startsWith("⚡") || feature.startsWith("🎁");
                        return (
                          <div key={idx} className="flex items-start gap-3">
                            {!hasEmoji && (
                              <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                plan.highlight ? "text-primary" : "text-primary/80"
                              }`} />
                            )}
                            <span className={`text-sm leading-snug ${
                              isBonus ? "text-primary font-bold" : 
                              isDelivery ? "text-emerald-400 font-semibold" :
                              hasEmoji ? "font-semibold text-foreground" :
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
                      className={`w-full rounded-xl font-bold text-sm py-6 transition-all duration-300 ${
                        plan.highlight
                          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                          : "bg-foreground/5 border-2 border-foreground/15 text-foreground hover:bg-primary/10 hover:border-primary/40"
                      }`}
                      onClick={() => window.open(
                        plan.priceKey === "prata" ? PLANO_PRATA_WHATSAPP :
                        `https://wa.me/5519993937708?text=Olá, gostaria de informações sobre o ${plan.name}`,
                        '_blank'
                      )}
                    >
                      {plan.cta}
                    </Button>

                    {onOpenMiguelChat && plan.highlight && (
                      <div className="mt-4 flex justify-center">
                        <MiguelButtonInline onOpenMiguelChat={onOpenMiguelChat} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <CreditCard className="w-4 h-4 text-primary" />
              <span>3x sem juros no cartão</span>
            </div>
            <div className="w-px h-4 bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <X className="w-4 h-4 text-destructive" />
              <span className="font-semibold text-destructive">Sem fidelidade</span>
            </div>
            <div className="w-px h-4 bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Clock className="w-4 h-4 text-primary" />
              <span>Entrega expressa</span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Dúvidas sobre qual plano escolher?{" "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline underline-offset-4 hover:text-primary/80 transition-colors"
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
