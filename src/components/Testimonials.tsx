import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      company: "Boutique da Maria",
      role: "Proprietária",
      content: "Desde que começamos a trabalhar com a Rede Social Pro, nossas vendas aumentaram 300%. O conteúdo é de alta qualidade e o atendimento é excepcional.",
      rating: 5,
      avatar: "MS"
    },
    {
      name: "João Santos",
      company: "Academia Fitness Pro",
      role: "Diretor",
      content: "A gestão das nossas redes sociais ficou muito mais profissional. Conseguimos alcançar um público muito maior e aumentar significativamente nossas matrículas.",
      rating: 5,
      avatar: "JS"
    },
    {
      name: "Ana Costa",
      company: "Clínica Estética Bella",
      role: "Diretora",
      content: "O trabalho da equipe superou nossas expectativas. A qualidade das artes e a estratégia de conteúdo trouxeram resultados incríveis para nossa clínica.",
      rating: 5,
      avatar: "AC"
    },
    {
      name: "Carlos Ferreira",
      company: "Restaurante Sabor & Arte",
      role: "Chef/Proprietário",
      content: "Nossa presença no Instagram cresceu exponencialmente. As fotos dos pratos ficaram lindas e conseguimos atrair muito mais clientes para o restaurante.",
      rating: 5,
      avatar: "CF"
    },
    {
      name: "Luciana Oliveira",
      company: "Advocacia Oliveira & Associados",
      role: "Sócia",
      content: "Profissionalismo em cada detalhe. A estratégia de conteúdo jurídico educativo nos posicionou como referência no mercado local.",
      rating: 5,
      avatar: "LO"
    },
    {
      name: "Roberto Mendes",
      company: "Auto Peças Central",
      role: "Gerente",
      content: "Excelente retorno sobre investimento. As campanhas de tráfego pago trouxeram muitos clientes novos e aumentaram nossas vendas online.",
      rating: 5,
      avatar: "RM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Depoimentos</Badge>
          <h2 className="text-4xl font-bold mb-4">
            O que Nossos <span className="text-primary">Clientes Dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja os resultados reais que nossos clientes alcançaram com nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 relative overflow-hidden">
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">5★</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3 Anos</div>
            <div className="text-sm text-muted-foreground">No Mercado</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;