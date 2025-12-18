import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

const Hero = () => {
  const counter1 = useCounterAnimation(500);
  const counter2 = useCounterAnimation(5000);
  const counter3 = useCounterAnimation(30);

  return (
    <section className="relative py-20 bg-gradient-dark flex items-center overflow-hidden">
        {/* Background image with transparency */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(24_95%_53%)_1px,transparent_0)] bg-[size:50px_50px]" />
        </div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                MARKETING
              </span>
              <br />
              <span className="text-foreground">DIGITAL COMPLETO</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Transforme sua presença online com estratégias de marketing digital que geram resultados reais para o seu negócio.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
            >
              Você tem alguma dúvida?
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Nossos Serviços
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center" ref={counter1.ref}>
              <div className="text-3xl font-bold text-primary">+{counter1.count}</div>
              <div className="text-sm text-muted-foreground">Clientes Atendidos em 2025</div>
            </div>
            <div className="text-center" ref={counter2.ref}>
              <div className="text-3xl font-bold text-primary">+{counter2.count}</div>
              <div className="text-sm text-muted-foreground">Crescimento Médio</div>
            </div>
            <div className="text-center" ref={counter3.ref}>
              <div className="text-3xl font-bold text-primary">+{counter3.count}</div>
              <div className="text-sm text-muted-foreground">Anos no Mercado</div>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 transform rotate-6" />
          <img 
            src={heroImage} 
            alt="Marketing Digital Profissional" 
            className="relative rounded-3xl shadow-card w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;