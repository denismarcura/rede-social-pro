import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        onClick={() => window.open('https://wa.me/5519993937708?text=oL%C3%81%2C%20MARKETING%20DIGITAL%2C%20ESTOU%20COM%20D%C3%9AVIDAS%20PODE%20ME%20AJUDAR%20%3F', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
      >
        WhatsApp
      </Button>
    </div>
  );
};

export default WhatsAppFloat;