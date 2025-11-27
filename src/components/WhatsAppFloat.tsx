import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
        className="bg-green-500 hover:bg-green-600 w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Contato WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
