import promoCard from "@/assets/promo-card.png";

const PromoCard = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <img 
          src={promoCard} 
          alt="Marketing Digital Completo - Promoção" 
          className="max-w-4xl w-full h-auto rounded-2xl shadow-card"
        />
      </div>
    </section>
  );
};

export default PromoCard;
