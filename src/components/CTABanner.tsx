import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Zap, Gift, Download } from "lucide-react";

const CTABanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const promoEndDate = new Date('2026-01-10T23:59:59');
      const now = new Date();
      const difference = promoEndDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute top-32 right-20 w-32 h-32 bg-primary/15 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-primary/10 rounded-full blur-lg" />
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Flash Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-primary/20 rounded-full p-4 animate-pulse">
              <Zap className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Main Question */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            VOCÊ SABE QUANTO CUSTA UM
            <br />
            <span className="text-primary">WEBSITE PROFISSIONAL?</span>
          </h2>

          {/* Price Comparison */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-xl md:text-2xl">
                <span className="line-through opacity-75">R$ 2.000,00</span>
              </div>
              <div className="text-4xl md:text-6xl font-bold text-primary animate-pulse">
                R$ 599,00
              </div>
            </div>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              APROVEITE NOSSA PROMOÇÃO!
            </p>
          </div>

          {/* Bonus */}
          <div className="bg-card/80 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-primary">BÔNUS EXCLUSIVO</span>
            </div>
            <p className="text-lg md:text-xl text-foreground">
              2 MESES DE CAMPANHA, E AINDA GANHE UM WEBSITE OU UMA LANDING PAGE
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-primary animate-pulse" />
              <span className="text-lg font-semibold">PROMOÇÃO ATÉ DIA</span>
              <span className="text-xl font-bold text-primary bg-primary/20 px-3 py-1 rounded-full animate-pulse border border-primary/40 shadow-glow">
                10 DE JANEIRO
              </span>
            </div>
            <div className="flex justify-center gap-3 md:gap-4">
              <div className="bg-card/80 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] backdrop-blur-sm border border-primary/20">
                <div className="text-2xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground">Dias</div>
              </div>
              <div className="bg-card/80 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] backdrop-blur-sm border border-primary/20">
                <div className="text-2xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground">Horas</div>
              </div>
              <div className="bg-card/80 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] backdrop-blur-sm border border-primary/20">
                <div className="text-2xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground">Min</div>
              </div>
              <div className="bg-card/80 rounded-lg p-3 md:p-4 min-w-[70px] md:min-w-[80px] backdrop-blur-sm border border-primary/20">
                <div className="text-2xl md:text-4xl font-bold text-primary">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-xs md:text-sm uppercase tracking-wide text-muted-foreground">Seg</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              variant="hero"
              size="lg" 
              className="font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
              onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
            >
              QUERO APROVEITAR ESTA OFERTA!
            </Button>
            
            <div className="flex flex-col items-center gap-3">
              <p className="text-base text-white/90">
                📄 Conheça mais sobre a qualidade dos nossos serviços
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-primary/50 text-white hover:bg-primary/20 font-semibold text-lg px-8 py-3 rounded-full"
                onClick={() => window.open('https://drive.google.com/file/d/1ZfzEJGOHcJNzM7CEYRBzSbZOkAw7ygyT/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                BAIXAR NOSSO FOLDER PROFISSIONAL
              </Button>
              <p className="text-sm text-white/70">
                Veja nosso portfólio completo e cases de sucesso
              </p>
            </div>
          </div>

          <p className="text-sm mt-4 opacity-90">
            ⚡ Promoção válida até <span className="font-bold text-primary animate-pulse">10 de janeiro de 2026</span> • Não perca esta oportunidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;