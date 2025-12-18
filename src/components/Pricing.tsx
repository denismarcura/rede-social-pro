import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, CreditCard, DollarSign, Smartphone, Users, TrendingUp, Clock, X, Percent } from "lucide-react";
import PromoCountdown from "./PromoCountdown";

const PLANO_PRATA_WHATSAPP = 'https://api.whatsapp.com/send?phone=5519993937708&text=Ol%C3%A1%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20prata%20de%20R%24%20199%2C00%20mensais';

const Pricing = () => {
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
      description: "A solução premium para empresas que querem dominar todos os canais digitais",
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
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Planos e Investimento</Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">ORÇAMENTO</span>
            <br />
            <span className="text-foreground">MARKETING</span> Digital Completo
          </h2>
          
          {/* Statistics Icons */}
          <div className="grid grid-cols-3 gap-8 pt-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">300%</div>
              <div className="text-sm text-muted-foreground">Crescimento Médio</div>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Online</div>
            </div>
          </div>
          
          {/* Special Highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-primary p-4 rounded-lg text-primary-foreground">
              <CreditCard className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold">3x sem juros</div>
              <div className="text-sm">No cartão de crédito</div>
            </div>
            <div className="bg-red-500/20 border border-red-500 p-4 rounded-lg">
              <X className="w-8 h-8 mx-auto mb-2 text-red-500" />
              <div className="font-bold text-red-500">SEM FIDELIDADE</div>
              <div className="text-sm">Cancele quando quiser</div>
            </div>
            <div className="bg-green-500/20 border border-green-500 p-4 rounded-lg">
              <Percent className="w-8 h-8 mx-auto mb-2 text-green-500" />
              <div className="font-bold text-green-500">50% OFF</div>
              <div className="text-sm">Preços promocionais</div>
            </div>
          </div>
        </div>

        {/* Special Promotion */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 md:p-12 mb-16 border-2 border-primary shadow-glow">
          <div className="text-center mb-8">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              MARKETING DIGITAL COMPLETO
            </h3>
            <p className="text-xl md:text-2xl text-foreground font-semibold mb-2">
              GANHE UMA LANDING PAGE OU WEBSITE
            </p>
            <p className="text-lg text-foreground/80">
              FECHANDO NOSSO PLANO OURO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8 text-foreground">
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>60 CRIATIVOS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>60 TEXTOS COM SEO</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>60 POSTAGENS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>10 Stories</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>10 VÍDEOS REELS</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>TRÁFEGO PAGO (Facebook Instagram)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>TRÁFEGO PAGO (Google e Youtube)</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>BIO PROFISSIONAL</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>LINKBIO INSTAGRAM</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>CHECKLIST DIGITAL DE SEU INSTAGRAM</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>ATENDIMENTO VIP WHATSAPP</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <span>RELATÓRIO MENSAL</span>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <div className="text-foreground/80 text-lg mb-2">A PARTIR DE</div>
            <div className="text-6xl font-bold text-primary mb-2">
              R$ 599<span className="text-3xl">,00</span>
            </div>
            <div className="text-foreground/80 text-lg">
              EM 3X SEM JUROS NO CARTÃO
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-12 py-6 rounded-lg"
              onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
            >
              QUERO COMEÇAR AGORA
            </Button>
          </div>
        </div>

        {/* Main Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-glow transition-all duration-300 ${
                plan.isPromo 
                  ? 'bg-gradient-to-br from-red-500/20 to-red-900/30 ring-2 ring-red-500 ring-offset-2 ring-offset-background transform scale-105'
                  : plan.popular 
                  ? 'bg-gradient-primary transform scale-105' 
                  : 'bg-gradient-card'
              }`}
            >
              {plan.isPromo && (
                <>
                  {/* Santa Hat */}
                  <div className="absolute -top-10 -left-4 z-20">
                    <svg width="65" height="55" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <ellipse cx="50" cy="72" rx="45" ry="10" fill="#FFFFFF"/>
                      <path d="M10 70 Q15 30 50 15 Q85 30 90 70" fill="#DC2626"/>
                      <circle cx="75" cy="20" r="12" fill="#FFFFFF"/>
                      <path d="M50 15 Q60 10 75 20" stroke="#DC2626" strokeWidth="8" fill="none"/>
                    </svg>
                  </div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1 font-semibold shadow-lg">
                      🎄 PROMOÇÃO DE NATAL!
                    </Badge>
                  </div>
                </>
              )}
              {plan.popular && !plan.isPromo && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary-glow text-background px-4 py-1 font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-2xl ${plan.isPromo ? 'text-red-500' : plan.popular ? 'text-primary-foreground' : ''}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  {plan.isPromo && plan.originalPrice && (
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <span className="text-lg text-muted-foreground line-through">{plan.originalPrice}</span>
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">-33%</span>
                    </div>
                  )}
                  <span className={`text-4xl font-bold ${plan.isPromo ? 'text-red-500' : plan.popular ? 'text-primary-foreground' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <CardDescription className={plan.popular ? 'text-primary-foreground/80' : ''}>
                  {plan.description}
                </CardDescription>
                {plan.isPromo && (
                  <div className="mt-4">
                    <PromoCountdown variant="large" />
                  </div>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-3 ${plan.popular ? 'text-primary-foreground' : ''}`}>
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.isPromo ? 'text-red-500' : plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "outline" : "default"} 
                  className={`w-full mt-6 ${
                    plan.isPromo
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : plan.popular 
                      ? 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary' 
                      : ''
                  }`}
                  size="lg"
                  onClick={() => window.open(plan.isPromo ? PLANO_PRATA_WHATSAPP : 'https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
                >
                  {plan.isPromo ? 'APROVEITAR AGORA!' : `Escolher ${plan.name}`}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center mb-8">Serviços Adicionais</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((item, index) => (
              <div key={index} className="text-center p-4 border border-primary/10 rounded-lg hover:border-primary/30 transition-colors duration-300">
                <h4 className="font-semibold mb-2">{item.service}</h4>
                <p className="text-primary font-bold text-lg">{item.price}</p>
                {item.note && (
                  <p className="text-xs text-muted-foreground mt-2">{item.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Formas de Pagamento</h3>
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Smartphone className="w-5 h-5 text-primary" />
              <span>PIX</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <DollarSign className="w-5 h-5 text-primary" />
              <span>Boleto Bancário</span>
            </div>
            <div className="w-px h-6 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <CreditCard className="w-5 h-5 text-primary" />
              <span>Cartão de Crédito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;