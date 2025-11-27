import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3 } from "lucide-react";

const TrafficCTA = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre tráfego pago profissional.";

  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wide">Especialistas em Performance</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tráfego Pago <span className="text-primary">Profissional</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Com anos de experiência em tráfego pago no <strong className="text-foreground">Google</strong> e{" "}
            <strong className="text-foreground">Instagram</strong>, potencializamos campanhas que realmente 
            alcançam quem importa. Nosso foco é gerar vendas com estratégia, otimização constante e análise precisa.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Segmentação Precisa</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Análise de Dados</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Otimização Constante</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-lg font-medium text-foreground">
              Quer resultados reais?
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8"
              onClick={() => window.open(whatsappLink, "_blank")}
            >
              Fale com Nossa Equipe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrafficCTA;
