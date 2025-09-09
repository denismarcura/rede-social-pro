import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Instagram, 
  TrendingUp, 
  Palette, 
  PenTool,
  Users,
  BarChart3,
  Target,
  Zap
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Instagram,
      title: "Gestão de Redes Sociais",
      description: "Criação de conteúdo, agendamento de posts e interação com o público.",
      features: ["Posts diários", "Stories interativos", "Engajamento ativo"]
    },
    {
      icon: TrendingUp,
      title: "Tráfego Pago",
      description: "Campanhas de anúncios estratégicas para alcançar mais pessoas.",
      features: ["Facebook Ads", "Google Ads", "Instagram Ads"]
    },
    {
      icon: Palette,
      title: "Design Gráfico",
      description: "Artes personalizadas e profissionais para suas publicações.",
      features: ["Feed personalizado", "Identidade visual", "Banners promocionais"]
    },
    {
      icon: PenTool,
      title: "Copywriting",
      description: "Textos persuasivos que geram engajamento e vendas.",
      features: ["Textos persuasivos", "Call-to-actions", "Storytelling"]
    }
  ];

  const benefits = [
    { icon: Users, title: "Alcance Ampliado", description: "Aumente sua visibilidade online" },
    { icon: BarChart3, title: "Resultados Mensuráveis", description: "Relatórios detalhados de performance" },
    { icon: Target, title: "Público Segmentado", description: "Atinja exatamente quem precisa do seu produto" },
    { icon: Zap, title: "Crescimento Acelerado", description: "Resultados em menos tempo" }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nossos Serviços</Badge>
          <h2 className="text-4xl font-bold mb-4">
            O <span className="text-primary">Marketing Digital</span> é a Chave 
            <br />para o Sucesso do Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O marketing digital é um conjunto de estratégias aplicadas nas redes sociais que 
            visam promover a sua marca, atrair novos clientes e impulsionar o seu negócio.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;