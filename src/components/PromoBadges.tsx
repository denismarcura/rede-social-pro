import { CreditCard, X, Percent } from "lucide-react";

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
