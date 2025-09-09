import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Plano Bronze",
      price: "R$ 897",
      period: "/mês",
      description: "Ideal para pequenos negócios iniciando no digital",
      popular: false,
      features: [
        "Gestão de 2 redes sociais (Instagram e Facebook)",
        "12 posts por mês",
        "Criação de artes para o feed",
        "Suporte via WhatsApp",
        "Relatório mensal básico"
      ]
    },
    {
      name: "Plano Prata",
      price: "R$ 1.497",
      period: "/mês",
      description: "Perfeito para empresas em crescimento",
      popular: true,
      features: [
        "Tudo do Plano Bronze",
        "Gestão de 3 redes sociais",
        "20 posts por mês",
        "8 stories por semana",
        "Relatório mensal detalhado",
        "Gestão básica de tráfego pago",
        "Atendimento prioritário"
      ]
    },
    {
      name: "Plano Ouro",
      price: "R$ 2.297",
      period: "/mês",
      description: "Para empresas que querem dominar o digital",
      popular: false,
      features: [
        "Tudo do Plano Prata",
        "Gestão de todas as redes sociais",
        "30 posts por mês",
        "4 Reels/vídeos curtos por mês",
        "Gestão avançada de tráfego pago",
        "Reunião estratégica mensal",
        "Consultoria personalizada",
        "Suporte 24/7"
      ]
    }
  ];

  const additionalServices = [
    { service: "Criação de Landing Page", price: "R$ 1.997" },
    { service: "Consultoria Estratégica", price: "R$ 297/hora" },
    { service: "Fotografia/Videografia de Produtos", price: "Sob consulta" },
    { service: "Criação de Logotipo", price: "R$ 897" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Planos e Investimento</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Escolha o <span className="text-primary">Plano Ideal</span> para Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos diferentes planos para atender às necessidades específicas do seu negócio
          </p>
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
          <div className="flex justify-center items-center gap-8 text-muted-foreground">
            <span>PIX</span>
            <div className="w-px h-6 bg-border" />
            <span>Boleto Bancário</span>
            <div className="w-px h-6 bg-border" />
            <span>Cartão de Crédito</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;