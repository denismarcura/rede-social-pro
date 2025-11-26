import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import avatarMaria from "@/assets/avatar-maria.jpg";
import avatarJoao from "@/assets/avatar-joao.jpg";
import avatarAna from "@/assets/avatar-ana.jpg";
import avatarCarlos from "@/assets/avatar-carlos.jpg";
import avatarLuciana from "@/assets/avatar-luciana.jpg";
import avatarRoberto from "@/assets/avatar-roberto.jpg";
import avatarPatricia from "@/assets/avatar-patricia.jpg";
import avatarHelen from "@/assets/avatar-helen.jpg";
import avatarDenis from "@/assets/avatar-denis.jpg";

const ClientTestimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária, Boutique da Maria",
      image: avatarMaria,
      text: "Desde que começamos a trabalhar com a equipe, nossas vendas aumentaram 300%. O conteúdo é de alta qualidade e o atendimento é excepcional."
    },
    {
      name: "João Santos",
      role: "Diretor, Academia Fitness Pro",
      image: avatarJoao,
      text: "A gestão das nossas redes sociais ficou muito mais profissional. Conseguimos alcançar um público muito maior e aumentar significativamente nossas matrículas."
    },
    {
      name: "Ana Costa",
      role: "Diretora, Clínica Estética Bella",
      image: avatarAna,
      text: "O trabalho da equipe superou nossas expectativas. A qualidade das artes e a estratégia de conteúdo trouxeram resultados incríveis para nossa clínica."
    },
    {
      name: "Carlos Ferreira",
      role: "Chef/Proprietário, Restaurante Sabor & Arte",
      image: avatarCarlos,
      text: "Nossa presença no Instagram cresceu exponencialmente. As fotos dos pratos ficaram lindas e conseguimos atrair muito mais clientes para o restaurante."
    },
    {
      name: "Luciana Oliveira",
      role: "Sócia, Advocacia Oliveira & Associados",
      image: avatarLuciana,
      text: "Profissionalismo em cada detalhe. A estratégia de conteúdo jurídico educativo nos posicionou como referência no mercado local."
    },
    {
      name: "Roberto Mendes",
      role: "Gerente, Auto Peças Central",
      image: avatarRoberto,
      text: "Excelente retorno sobre investimento. As campanhas de tráfego pago trouxeram muitos clientes novos e aumentaram nossas vendas online."
    },
    {
      name: "Patricia Lima",
      role: "Proprietária, Pizzaria Nonna Rosa",
      image: avatarPatricia,
      text: "A campanha do Nhoque da Sorte foi um sucesso absoluto! Enchemos a pizzaria e ainda ganhamos muitos seguidores novos. Recomendo muito!"
    },
    {
      name: "Helen Terapeuta",
      role: "Terapeuta Holística",
      image: avatarHelen,
      text: "Tive 40 leads em apenas 1 semana! A campanha foi um sucesso, os outros gestores não passavam de 5. Muito feliz com os resultados!"
    },
    {
      name: "Denis Souza",
      role: "Proprietário, Rede Social Pro",
      image: avatarDenis,
      text: "Adoramos o logotipo! Conseguimos mais de 20 clientes pelo WhatsApp do tráfego pago. Investimento que realmente trouxe retorno para o negócio."
    }
  ];

  return (
    <section className="py-16 bg-gradient-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(24_95%_53%)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-sm">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja os resultados reais que nossos clientes alcançaram com nossos serviços
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-border/50 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <span className="absolute -top-2 -left-1 text-6xl text-primary/20 font-serif leading-none">
                    "
                  </span>
                  <p className="text-foreground/90 italic pl-6">
                    {testimonial.text}
                  </p>
                  <span className="absolute -bottom-6 right-0 text-6xl text-primary/20 font-serif leading-none">
                    "
                  </span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 mt-8">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
