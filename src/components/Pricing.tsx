import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, CreditCard, DollarSign, Smartphone, Users, TrendingUp, Clock, X, Percent, Gift, Zap } from "lucide-react";

const Pricing = ({ onOpenMiguelChat }: { onOpenMiguelChat?: () => void }) => {
  const plans = [
    {
      name: "Plano Prata",
      price: "R$ 199",
      originalPrice: "R$ 299",
      isPromo: true,
      period: "/mês",
      description: "Perfeito para empresas que querem crescer com qualidade no marketing digital",
      popular: false,
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
        "2x sem juros no cartão"
      ]
    },
    {
      name: "Plano Ouro",
      price: "R$ 599",
      period: "/mês",
      description: "Solução completa para empresas que querem resultados expressivos",
      popular: true,
      features: [
        "60 Criativos profissionais",
        "60 Textos otimizados com SEO",
        "60 Postagens estratégicas",
        "10 Stories envolventes",
        "10 Vídeos (Reels)",
        "Tráfego pago Facebook/Instagram",
        "Tráfego pago Google/YouTube",
        "Bio profissional completa",
        "Link na bio Instagram",
        "Checklist digital personalizado",
        "Atendimento VIP WhatsApp",
        "Relatório mensal detalhado",
        "BÔNUS: Website ou Landing Page",
        "3x sem juros no cartão"
      ]
    },
    {
      name: "Plano Titânio",
      price: "R$ 899",
      period: "/mês",
      description: "A solução premium para dominar todos os canais digitais",
      popular: false,
      features: [
        "90 Criativos profissionais",
        "90 Textos otimizados com SEO",
        "90 Postagens estratégicas",
        "20 Stories envolventes",
        "15 Vídeos (Reels)",
        "Tráfego pago Facebook/Instagram",
        "Tráfego pago Google/YouTube",
        "Tráfego Pago LinkedIn/TikTok/Pinterest",
        "Bio profissional completa",
        "Link na bio Instagram",
        "Checklist digital personalizado",
        "Atendimento VIP WhatsApp",
        "Relatório mensal detalhado",
        "BÔNUS: Website ou Landing Page",
        "BÔNUS: Folder Digital Profissional",
        "3x sem juros no cartão"
      ]
    }
  ];

  const additionalServices = [
    { service: "Criação de Landing Page **", price: "Sob consulta", note: "** Fechando plano ouro ganhe gratuitamente" },
    { service: "Criação de Folders", price: "Sob consulta" },
    { service: "Mentoria", price: "Sob consulta" },
    { service: "Tráfego Orgânico", price: "Sob consulta" },
    { service: "Ebooks", price: "Sob consulta" },
    { service: "Consultoria Estratégica", price: "Sob consulta" },
    { service: "Fotografia/Videografia de Produtos", price: "Sob consulta" },
    { service: "Criação de Logotipo", price: "Sob consulta" }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-1.5">Planos e Investimento</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            <span className="text-primary">ORÇAMENTO</span>
            <br />
            <span className="text-foreground">MARKETING</span> Digital Completo
          </h2>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 pt-8 max-w-2xl mx-auto mb-12">
            {[
              { icon: Users, value: "500+", label: "Clientes Atendidos" },
              { icon: TrendingUp, value: "300%", label: "Crescimento Médio" },
              { icon: Clock, value: "24/7", label: "Suporte Online" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="bg-primary/10 p-3 md:p-4 rounded-2xl w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div className="text-xl md:text-2xl font-black text-primary">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-primary/10 border border-primary/20 p-5 rounded-2xl">
              <CreditCard className="w-7 h-7 mx-auto mb-2 text-primary" />
              <div className="font-bold text-foreground">3x sem juros</div>
              <div className="text-sm text-muted-foreground">No cartão de crédito</div>
            </div>
            <div className="bg-destructive/10 border border-destructive/20 p-5 rounded-2xl">
              <X className="w-7 h-7 mx-auto mb-2 text-destructive" />
              <div className="font-bold text-destructive">SEM FIDELIDADE</div>
              <div className="text-sm text-muted-foreground">Cancele quando quiser</div>
            </div>
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl">
              <Percent className="w-7 h-7 mx-auto mb-2 text-emerald-500" />
              <div className="font-bold text-emerald-500">ATÉ 50% OFF</div>
              <div className="text-sm text-muted-foreground">Preços promocionais</div>
            </div>
          </div>
        </div>

        {/* Featured Ouro Promotion */}
        <div className="relative rounded-3xl mb-16 overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card to-primary/10" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/5 rounded-full blur-[80px]" />
          
          <div className="relative border-2 border-primary/40 rounded-3xl p-8 md:p-12">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-extrabold px-5 py-2 rounded-full uppercase tracking-wider shadow-lg shadow-primary/30">
                <Gift className="w-4 h-4" />
                Oferta Exclusiva — Plano Ouro
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tight">
                MARKETING DIGITAL <span className="text-primary">COMPLETO</span>
              </h3>
              <p className="text-xl md:text-2xl text-primary font-bold mb-2 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                GANHE UM WEBSITE OU LANDING PAGE
              </p>
              <p className="text-base text-muted-foreground">
                Fechando nosso Plano Ouro você ganha um site profissional com IA integrada
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 max-w-4xl mx-auto mb-10">
              {[
                "60 CRIATIVOS PROFISSIONAIS", "60 TEXTOS COM SEO",
                "60 POSTAGENS ESTRATÉGICAS", "10 Stories Envolventes",
                "10 VÍDEOS REELS", "TRÁFEGO PAGO (Facebook/Instagram)",
                "TRÁFEGO PAGO (Google/Youtube)", "BIO PROFISSIONAL",
                "LINKBIO INSTAGRAM", "CHECKLIST DIGITAL",
                "ATENDIMENTO VIP WHATSAPP", "RELATÓRIO MENSAL",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-background/30 rounded-xl px-4 py-2.5">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground/90 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <div className="text-muted-foreground text-sm uppercase tracking-widest mb-2 font-medium">A PARTIR DE</div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-muted-foreground text-2xl">R$</span>
                <span className="text-6xl md:text-7xl font-black text-primary">599</span>
                <span className="text-muted-foreground text-2xl">,00</span>
              </div>
              <div className="text-muted-foreground text-base mt-2 flex items-center justify-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                EM 3X SEM JUROS NO CARTÃO
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-extrabold text-base md:text-lg px-10 md:px-14 py-6 md:py-7 rounded-2xl shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-[1.02]"
                onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
              >
                QUERO COMEÇAR AGORA
              </Button>
            </div>
          </div>
        </div>

        {/* Main Plans */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-3xl overflow-hidden flex flex-col transition-all duration-500 hover:translate-y-[-4px] ${
                plan.isPromo 
                  ? 'bg-gradient-to-b from-destructive/15 via-card to-card border-2 border-destructive shadow-[0_0_50px_hsl(0_84%_60%/0.1)]'
                  : plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 via-card to-card border-2 border-primary shadow-[0_0_60px_hsl(24_95%_53%/0.15)] lg:scale-[1.04] z-10' 
                  : 'bg-card border border-border/50 hover:border-primary/30'
              }`}
            >
              {/* Top line */}
              <div className={`h-1 w-full ${
                plan.isPromo ? 'bg-gradient-to-r from-destructive to-destructive/50' :
                plan.popular ? 'bg-gradient-to-r from-primary via-primary-foreground/20 to-primary' :
                'bg-border/30'
              }`} />

              {plan.isPromo && (
                <>
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 flex gap-0.5 z-20">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
                    <Badge className="bg-destructive text-white px-3 py-1 font-bold text-[10px] uppercase tracking-wider shadow-lg">
                      ⭐ Promoção Especial
                    </Badge>
                  </div>
                </>
              )}
              {plan.popular && !plan.isPromo && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1.5 font-bold text-[10px] uppercase tracking-wider shadow-lg shadow-primary/30">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <div className={`p-7 md:p-8 flex flex-col flex-1 ${plan.isPromo ? 'pt-20' : plan.popular ? 'pt-14' : 'pt-8'}`}>
                <h3 className={`text-2xl font-extrabold text-center mb-3 tracking-tight ${
                  plan.isPromo ? 'text-destructive' : plan.popular ? 'text-primary' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                
                <div className="text-center mb-4">
                  {plan.isPromo && plan.originalPrice && (
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-base text-muted-foreground line-through">{plan.originalPrice}</span>
                      <span className="bg-destructive text-white text-[10px] font-bold px-2 py-0.5 rounded-full">-33%</span>
                    </div>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl md:text-5xl font-black ${
                      plan.isPromo ? 'text-destructive' : plan.popular ? 'text-primary' : 'text-foreground'
                    }`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-base">{plan.period}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm text-center mb-6 leading-relaxed">
                  {plan.description}
                </p>

                <div className="h-px bg-border/50 mb-6" />
              
                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature, idx) => {
                    const isBonus = feature.startsWith("BÔNUS:");
                    return (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.isPromo ? 'text-destructive' : 'text-primary'
                        }`} />
                        <span className={`text-sm ${
                          isBonus ? 'text-primary font-bold' : 'text-foreground/80'
                        }`}>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
                
                <Button 
                  className={`w-full mt-8 rounded-xl font-bold text-sm py-6 transition-all duration-300 ${
                    plan.isPromo
                      ? 'bg-destructive hover:bg-destructive/90 text-white shadow-lg shadow-destructive/20'
                      : plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25' 
                      : 'bg-foreground/5 border-2 border-foreground/15 text-foreground hover:bg-primary/10 hover:border-primary/40'
                  }`}
                  size="lg"
                  onClick={() => window.open(
                    plan.isPromo 
                      ? 'https://api.whatsapp.com/send?phone=5519993937708&text=Ol%C3%A1%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20prata%20de%20R%24%20199%2C00%20mensais' 
                      : 'https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', 
                    '_blank'
                  )}
                >
                  {plan.isPromo ? 'APROVEITAR AGORA!' : `Escolher ${plan.name}`}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-card rounded-3xl p-8 md:p-10 border border-border/50">
          <h3 className="text-2xl font-bold text-center mb-8 tracking-tight">Serviços Adicionais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalServices.map((item, index) => (
              <div key={index} className="text-center p-5 bg-background/50 border border-border/30 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:bg-primary/5">
                <h4 className="font-semibold text-sm mb-2 text-foreground">{item.service}</h4>
                <p className="text-primary font-bold text-base">{item.price}</p>
                {item.note && (
                  <p className="text-xs text-muted-foreground mt-2">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold mb-4 text-foreground">Formas de Pagamento</h3>
          <div className="flex justify-center items-center gap-6 md:gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-sm">PIX</span>
            </div>
            <div className="w-px h-5 bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="w-5 h-5 text-primary" />
              <span className="text-sm">Boleto Bancário</span>
            </div>
            <div className="w-px h-5 bg-border hidden md:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5 text-primary" />
              <span className="text-sm">Cartão de Crédito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
