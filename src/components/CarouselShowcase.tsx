import { Badge } from "@/components/ui/badge";
import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

const CarouselShowcase = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Galeria Interativa</Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">NOSSOS</span> Trabalhos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore nosso portfólio de forma interativa com nosso carrossel 3D
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <ThreeDPhotoCarousel />
        </div>
      </div>
    </section>
  );
};

export default CarouselShowcase;