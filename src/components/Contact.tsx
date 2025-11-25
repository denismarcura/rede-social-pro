import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Globe, ArrowRight } from "lucide-react";

const Contact = () => {
  const nextSteps = [
    "Escolha o plano que melhor se adapta às suas necessidades",
    "Entre em contato para formalizarmos o contrato",
    "Realize o pagamento da primeira mensalidade",
    "Inicie sua jornada de sucesso no marketing digital"
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Vamos Começar</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Pronto para <span className="text-primary">Transformar</span> Seu Negócio?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Siga os passos abaixo para iniciarmos nossa parceria e levar seu negócio ao próximo nível
          </p>
        </div>

        {/* Next Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Próximos Passos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {nextSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-gradient-card rounded-lg border border-primary/10">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* WhatsApp 1 */}
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 p-4 bg-green-500/10 rounded-full w-fit mx-auto group-hover:bg-green-500/20 transition-colors duration-300">
                <MessageCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Principal</h3>
              <p className="text-muted-foreground mb-4">Fale diretamente com nossa equipe</p>
              <a 
                href="https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full group-hover:border-green-500 group-hover:text-green-500 transition-colors">
                  (19) 99393-7708
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* WhatsApp 2 */}
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 p-4 bg-green-500/10 rounded-full w-fit mx-auto group-hover:bg-green-500/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Secundário</h3>
              <p className="text-muted-foreground mb-4">Linha alternativa de atendimento</p>
              <a 
                href="https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full group-hover:border-green-500 group-hover:text-green-500 transition-colors">
                  (19) 99393-7708
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Website */}
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="mb-4 p-4 bg-primary/10 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nosso Site</h3>
              <p className="text-muted-foreground mb-4">Conheça mais sobre nossos serviços</p>
              <a 
                href="https://rede-social-pro-kit.lovable.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
                  Visitar Site
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 p-8 bg-gradient-primary rounded-2xl">
            <div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                Pronto para começar?
              </h3>
              <p className="text-primary-foreground/80 mb-4">
                Entre em contato agora e receba uma proposta personalizada
              </p>
              <a 
                href="https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
                >
                  Solicitar Orçamento Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;