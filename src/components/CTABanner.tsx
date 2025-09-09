import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Zap, Gift } from "lucide-react";

const CTABanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 48,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Flash Icon */}
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 rounded-full p-4 animate-pulse">
              <Zap className="w-8 h-8 text-yellow-300" />
            </div>
          </div>

          {/* Main Question */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            VOCÊ SABE QUANTO CUSTA UM
            <br />
            <span className="text-yellow-300">WEBSITE PROFISSIONAL?</span>
          </h2>

          {/* Price Comparison */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-xl md:text-2xl">
                <span className="line-through opacity-75">R$ 2.000,00</span>
              </div>
              <div className="text-4xl md:text-6xl font-bold text-yellow-300 animate-pulse">
                R$ 599,00
              </div>
            </div>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              APROVEITE NOSSA PROMOÇÃO!
            </p>
          </div>

          {/* Bonus */}
          <div className="bg-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm border border-white/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Gift className="w-6 h-6 text-yellow-300" />
              <span className="text-xl font-bold text-yellow-300">BÔNUS EXCLUSIVO</span>
            </div>
            <p className="text-lg md:text-xl">
              GANHE UMA CAMPANHA COMPLETA DE MARKETING DIGITAL
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-yellow-300" />
              <span className="text-lg font-semibold">PROMOÇÃO ACABA EM:</span>
            </div>
            <div className="flex justify-center gap-4">
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px] backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wide">Horas</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px] backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wide">Min</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px] backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </div>
                <div className="text-sm uppercase tracking-wide">Seg</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-yellow-400/25 hover:scale-105 transition-all duration-300"
          >
            QUERO APROVEITAR ESTA OFERTA!
          </Button>

          <p className="text-sm mt-4 opacity-90">
            ⚡ Oferta limitada • Apenas hoje • Não perca esta oportunidade!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;