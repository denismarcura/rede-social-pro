import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, CreditCard, DollarSign, Smartphone, Users, TrendingUp, Clock, X, Percent } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Plano Prata",
      price: "R$ 299",
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
    { service: "Criação de Landing Page", price: "Sob consulta" },
    { service: "Criação de Folders", price: "Sob consulta" },
    { service: "Mentoria", price: "Sob consulta" },
    { service: "Tráfego Orgânico", price: "Sob consulta" },
    { service: "Ebooks", price: "Sob consulta" },
    { service: "Consultoria Estratégica", price: "Sob consulta" },
    { service: "Fotografia/Videografia de Produtos", price: "Sob consulta" },
    { service: "Criação de Logotipo", price: "Sob consulta" }
  ];

  return (
    <section className="py-20 bg-background">
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
        <div className="bg-gradient-dark rounded-2xl p-8 mb-16 border-2 border-primary shadow-glow text-center">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Marketing Digital Definitivo
          </h3>
          <p className="text-foreground/90 mb-6">
            Domine o marketing digital com estratégias profissionais que geram resultados reais.
          </p>
          
          <div className="mb-6">
            <div className="text-5xl font-bold text-primary mb-2">
              3x de R$ 199
            </div>
            <div className="text-foreground/80">
              ou R$ 549 no PIX (7% de desconto)
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto mb-8 text-sm text-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>60 Criativos profissionais</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>60 Textos otimizados com SEO</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>60 Postagens estratégicas</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>10 Stories envolventes</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>10 Vídeos (Reels)</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Tráfego pago Facebook/Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Tráfego pago Google/YouTube</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Bio profissional completa</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Link na bio Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Checklist digital personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Atendimento VIP WhatsApp</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Relatório mensal detalhado</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>BÔNUS: Website ou Landing Page</span>
            </div>
          </div>

          <Button 
            variant="hero" 
            size="lg"
            className="font-bold text-lg px-12 py-4"
          >
            QUERO DOMINAR O MARKETING AGORA
          </Button>
          
          <div className="mt-4 text-primary/80 text-sm">
            Últimas vagas disponíveis • Acesso imediato
          </div>
          
          <div className="mt-6 text-foreground/60 text-sm">
            Garantia de 30 dias ou seu dinheiro de volta
          </div>
        </div>

        {/* Main Plans */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-0 shadow-card hover:shadow-glow transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-primary transform scale-105' 
                  : 'bg-gradient-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary-glow text-background px-4 py-1 font-semibold">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className={`text-2xl ${plan.popular ? 'text-primary-foreground' : ''}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                    {plan.period}
                  </span>
                </div>
                <CardDescription className={plan.popular ? 'text-primary-foreground/80' : ''}>
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className={`flex items-start gap-3 ${plan.popular ? 'text-primary-foreground' : ''}`}>
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "outline" : "default"} 
                  className={`w-full mt-6 ${
                    plan.popular 
                      ? 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary' 
                      : ''
                  }`}
                  size="lg"
                >
                  Escolher {plan.name}
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