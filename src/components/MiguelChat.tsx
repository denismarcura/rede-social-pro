import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Phone, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface MiguelChatProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

const WHATSAPP_LINK = "https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A";

const MiguelChat = ({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: MiguelChatProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen || setInternalIsOpen;
  
  const [showOptions, setShowOptions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(Math.random().toString(36).substring(7));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const streamChat = async (userMessages: Message[]) => {
    const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/miguel-chat`;
    
    const resp = await fetch(CHAT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      },
      body: JSON.stringify({ messages: userMessages, sessionId: sessionId.current }),
    });

    if (!resp.ok || !resp.body) throw new Error("Falha ao conectar com Miguel");

    const reader = resp.body.getReader();
    const decoder = new TextDecoder();
    let textBuffer = "";
    let assistantContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      textBuffer += decoder.decode(value, { stream: true });

      let newlineIndex: number;
      while ((newlineIndex = textBuffer.indexOf("\n")) !== -1) {
        let line = textBuffer.slice(0, newlineIndex);
        textBuffer = textBuffer.slice(newlineIndex + 1);
        if (line.endsWith("\r")) line = line.slice(0, -1);
        if (line.startsWith(":") || line.trim() === "" || !line.startsWith("data: ")) continue;
        const jsonStr = line.slice(6).trim();
        if (jsonStr === "[DONE]") break;
        try {
          const parsed = JSON.parse(jsonStr);
          const content = parsed.choices?.[0]?.delta?.content;
          if (content) {
            assistantContent += content;
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === "assistant") {
                return prev.map((m, i) => i === prev.length - 1 ? { ...m, content: assistantContent } : m);
              }
              return [...prev, { role: "assistant", content: assistantContent }];
            });
          }
        } catch {
          textBuffer = line + "\n" + textBuffer;
          break;
        }
      }
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage: Message = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    try {
      await streamChat(newMessages);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Desculpe, tive um problema. Tente novamente ou fale no WhatsApp!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartChat = () => {
    setShowOptions(false);
    setMessages([{ role: "assistant", content: "Olá! 👋 Sou o Miguel, assistente virtual da Rede Social Pro! Como posso ajudar?" }]);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="fixed bottom-24 right-6 z-50">
            <motion.button onClick={() => setIsOpen(true)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }} transition={{ duration: 2, repeat: Infinity }} />
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg">
                <MessageCircle className="w-6 h-6" />
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }} className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-48px)] h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"><Bot className="w-6 h-6" /></div>
                <div><h3 className="font-semibold">Miguel</h3><p className="text-xs text-white/80">Copiloto Rede Social Pro</p></div>
              </div>
              <button onClick={() => { setIsOpen(false); setShowOptions(true); setMessages([]); }} className="p-2 hover:bg-white/20 rounded-full"><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {showOptions ? (
                <div className="h-full flex flex-col items-center justify-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><Bot className="w-10 h-10 text-white" /></div>
                  <h3 className="text-xl font-bold text-gray-800">Como posso ajudar?</h3>
                  <motion.button whileHover={{ scale: 1.02 }} onClick={() => window.open(WHATSAPP_LINK, "_blank")} className="w-full bg-green-500 text-white p-4 rounded-xl flex items-center gap-3">
                    <Phone className="w-6 h-6" /><div className="text-left"><p className="font-semibold">Falar com Atendente</p><p className="text-xs">Via WhatsApp</p></div>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.02 }} onClick={handleStartChat} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl flex items-center gap-3">
                    <MessageCircle className="w-6 h-6" /><div className="text-left"><p className="font-semibold">Falar com Miguel</p><p className="text-xs">Assistente virtual</p></div>
                  </motion.button>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.role === "assistant" && <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div>}
                      <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === "user" ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-gray-100 text-gray-800"}`}>
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      </div>
                      {msg.role === "user" && <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"><User className="w-4 h-4 text-gray-600" /></div>}
                    </div>
                  ))}
                  {isLoading && <div className="flex gap-2"><div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"><Bot className="w-4 h-4 text-white" /></div><div className="bg-gray-100 p-3 rounded-2xl"><Loader2 className="w-4 h-4 animate-spin" /></div></div>}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {!showOptions && (
              <div className="p-4 border-t bg-gray-50">
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex gap-2">
                  <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Digite sua mensagem..." className="flex-1" disabled={isLoading} />
                  <Button type="submit" disabled={isLoading || !input.trim()} className="bg-gradient-to-r from-blue-500 to-purple-600"><Send className="w-4 h-4" /></Button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MiguelChat;
