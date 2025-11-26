import promoCard from "@/assets/promo-card.png";

const PromoCard = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="relative max-w-4xl w-full group">
          <img 
            src={promoCard} 
            alt="Marketing Digital Completo - Promoção" 
            className="w-full h-auto rounded-2xl shadow-card"
          />
          {/* Animated overlay on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default PromoCard;
