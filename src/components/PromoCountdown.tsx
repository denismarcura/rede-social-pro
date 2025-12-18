import { useCountdown } from '@/hooks/use-countdown';
import { Clock } from 'lucide-react';

const PROMO_END_DATE = new Date('2025-12-22T23:59:59');

interface PromoCountdownProps {
  variant?: 'small' | 'large';
}

const PromoCountdown = ({ variant = 'small' }: PromoCountdownProps) => {
  const timeLeft = useCountdown(PROMO_END_DATE);

  if (timeLeft.isExpired) return null;

  if (variant === 'small') {
    return (
      <div className="flex items-center justify-center gap-1 text-xs">
        <Clock className="w-3 h-3 text-red-500" />
        <span className="text-red-500 font-bold">
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
        </span>
      </div>
    );
  }

  return (
    <div className="bg-black/40 rounded-lg p-3">
      <p className="text-center text-white/70 text-xs mb-2">Oferta termina em:</p>
      <div className="grid grid-cols-4 gap-1">
        <div className="bg-red-500/20 rounded p-2 text-center">
          <div className="text-lg font-bold text-red-500">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="text-[10px] text-white/60">DIAS</div>
        </div>
        <div className="bg-red-500/20 rounded p-2 text-center">
          <div className="text-lg font-bold text-red-500">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="text-[10px] text-white/60">HRS</div>
        </div>
        <div className="bg-red-500/20 rounded p-2 text-center">
          <div className="text-lg font-bold text-red-500">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="text-[10px] text-white/60">MIN</div>
        </div>
        <div className="bg-red-500/20 rounded p-2 text-center">
          <div className="text-lg font-bold text-red-500">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="text-[10px] text-white/60">SEG</div>
        </div>
      </div>
    </div>
  );
};

export default PromoCountdown;
