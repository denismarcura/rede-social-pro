import { CreditCard, X, Percent, Gift } from "lucide-react";

const PromoBadges = () => {
  const badges = [
    {
      icon: CreditCard,
      title: "3x sem juros",
      subtitle: "No cartão de crédito",
      bgColor: "bg-[hsl(24_95%_53%)]",
      textColor: "text-white",
      borderColor: "border-[hsl(24_95%_53%)]"
    },
    {
      icon: X,
      title: "SEM FIDELIDADE",
      subtitle: "Cancele quando quiser",
      bgColor: "bg-background",
      textColor: "text-red-500",
      borderColor: "border-red-500"
    },
    {
      icon: Percent,
      title: "50% OFF",
      subtitle: "Preços promocionais",
      bgColor: "bg-background",
      textColor: "text-green-500",
      borderColor: "border-green-500"
    }
  ];

  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Promo Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-primary via-primary/90 to-primary rounded-2xl p-6 md:p-8 text-center shadow-lg animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Gift className="w-8 h-8 text-primary-foreground animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground uppercase">
                Ganhe uma Landing Page ou Website
              </h3>
              <Gift className="w-8 h-8 text-primary-foreground animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
              Fechando nosso <span className="font-bold underline">Plano Ouro</span> - São dois meses de postagens
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Pague em até <span className="font-bold text-primary-foreground">3x sem juros</span> no cartão
            </p>
          </div>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`${badge.bgColor} ${badge.textColor} border-2 ${badge.borderColor} rounded-xl p-6 text-center animate-fade-in hover-scale`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <badge.icon className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-sm">{badge.title}</div>
              <div className="text-xs opacity-90">{badge.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoBadges;
