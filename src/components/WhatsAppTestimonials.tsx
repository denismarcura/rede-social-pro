import whatsappChat1 from "@/assets/whatsapp-chat-1.webp";
import whatsappChat2 from "@/assets/whatsapp-chat-2.webp";
import whatsappChat3 from "@/assets/whatsapp-chat-3.webp";
import whatsappChat4 from "@/assets/whatsapp-chat-4.webp";
import whatsappChat5 from "@/assets/whatsapp-chat-5.webp";
import { MessageCircle } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const WhatsAppTestimonials = () => {
  const chats = [
    {
      image: whatsappChat1,
      alt: "Depoimento cliente Ótica - Campanha Nhoque da Sorte"
    },
    {
      image: whatsappChat2,
      alt: "Depoimento Helen Terapeuta - 40 Leads em 1 semana"
    },
    {
      image: whatsappChat3,
      alt: "Depoimento Rede Social Pro - Mais de 20 clientes"
    },
    {
      image: whatsappChat4,
      alt: "Depoimento Estação Fiel - Arte moderna e diferenciada"
    },
    {
      image: whatsappChat5,
      alt: "Depoimento JL Assessoria - Arte bem feita e expectativas atendidas"
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Veja o que nossos clientes dizem
            </h2>
          </div>
          <p className="text-muted-foreground">
            Depoimentos reais de clientes satisfeitos
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {chats.map((chat, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div
                    className="rounded-2xl overflow-hidden shadow-card hover-scale animate-fade-in border border-border/50"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <img
                      src={chat.image}
                      alt={chat.alt}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-6" />
            <CarouselNext className="-right-4 md:-right-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;
