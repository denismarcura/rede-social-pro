import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <Button
        onClick={() => window.open('https://api.whatsapp.com/send/?phone=5519994572513&text&type=phone_number&app_absent=0', '_blank')}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
      >
        WhatsApp
      </Button>
    </div>
  );
};

export default WhatsAppFloat;