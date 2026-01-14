import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A";

interface MiguelButtonProps {
  onOpenChat: () => void;
}

const MiguelButton = ({ onOpenChat }: MiguelButtonProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="relative">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={() => setShowOptions(!showOptions)}
          className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            animate={{
              x: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ filter: "blur(20px)", opacity: 0.5 }}
          />
          
          {/* Sparkle effects */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <span className="relative flex items-center gap-2">
            <Bot className="w-5 h-5" />
            Tire suas dúvidas com nosso copiloto Miguel
          </span>
        </Button>
      </motion.div>

      {/* Options Popup */}
      <AnimatePresence>
        {showOptions && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setShowOptions(false)}
            />
            
            {/* Options Card */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-72 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="w-6 h-6" />
                    <span className="font-semibold">Como posso ajudar?</span>
                  </div>
                  <button
                    onClick={() => setShowOptions(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    window.open(WHATSAPP_LINK, "_blank");
                    setShowOptions(false);
                  }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg flex items-center gap-3 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Falar com Atendente</p>
                    <p className="text-xs text-white/80">Via WhatsApp</p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onOpenChat();
                    setShowOptions(false);
                  }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg flex items-center gap-3 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <p className="font-medium text-sm">Falar com Miguel</p>
                    <p className="text-xs text-white/80">Digite suas dúvidas</p>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MiguelButton;
