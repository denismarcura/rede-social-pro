import { useState, useEffect } from 'react';
import { X, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCountdown } from '@/hooks/use-countdown';

const PROMO_END_DATE = new Date('2025-12-22T23:59:59');
const WHATSAPP_LINK = 'https://api.whatsapp.com/send?phone=5519993937708&text=Ol%C3%A1%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20plano%20prata%20de%20R%24%20199%2C00%20mensais';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeLeft = useCountdown(PROMO_END_DATE);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('promo-popup-seen');
    if (!hasSeenPopup && !timeLeft.isExpired) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft.isExpired]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('promo-popup-seen', 'true');
  };

  if (!isOpen || timeLeft.isExpired) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 animate-fade-in">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border-4 border-primary shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(24_95%_53%)_1px,transparent_0)] bg-[size:30px_30px] animate-pulse" />
        </div>

        <div className="relative p-6 md:p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <Clock className="w-4 h-4" />
              OFERTA POR TEMPO LIMITADO!
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              PLANO <span className="text-primary">PRATA</span>
            </h2>
            <p className="text-white/70">Marketing Digital Completo</p>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl text-white/50 line-through">R$ 299,00</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">-33%</span>
            </div>
            <div className="text-5xl md:text-6xl font-bold text-primary">
              R$ 199<span className="text-3xl">,00</span>
            </div>
            <p className="text-white/60 text-sm mt-1">/mês</p>
          </div>

          {/* Countdown */}
          <div className="bg-black/40 rounded-xl p-4 mb-6">
            <p className="text-center text-white/70 text-sm mb-3">Promoção termina em:</p>
            <div className="grid grid-cols-4 gap-2">
              <div className="bg-primary/20 rounded-lg p-3 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-xs text-white/60">DIAS</div>
              </div>
              <div className="bg-primary/20 rounded-lg p-3 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-white/60">HORAS</div>
              </div>
              <div className="bg-primary/20 rounded-lg p-3 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-white/60">MIN</div>
              </div>
              <div className="bg-primary/20 rounded-lg p-3 text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-white/60">SEG</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6 rounded-full flex items-center justify-center gap-3"
            onClick={() => window.open(WHATSAPP_LINK, '_blank')}
          >
            <MessageCircle className="w-6 h-6" />
            QUERO APROVEITAR AGORA!
          </Button>

          <p className="text-center text-white/50 text-xs mt-4">
            * Válido até 22/12/2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
