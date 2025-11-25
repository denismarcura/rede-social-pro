import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        onClick={() => window.open('https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
      >
        WhatsApp
      </Button>
    </div>
  );
};

export default WhatsAppFloat;