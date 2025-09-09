import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Instagram, Globe, Play, FileText } from "lucide-react";

const Portfolio = () => {
  const websites = [
    { name: "Temas Ambiental", url: "https://temasaambiental.com.br/" },
    { name: "Veg Certificado", url: "https://vegcertificado.com.br/" },
    { name: "Mega Office Coworking", url: "https://megaofficecoworking.com.br/" },
    { name: "Juliana MV Ergna", url: "https://julianamvergna.com.br/" },
    { name: "Inova Logos", url: "https://inovalogos.com.br/" },
    { name: "Rede Social Pro", url: "https://redesocialpro.com/" },
    { name: "Miano Frezzarin", url: "https://mianofrezzarin.com.br/" },
    { name: "Gold Brasil Polímeros", url: "https://goldbrasilpolimeros.com.br/" }
  ];

  const instagramClients = [
    { name: "MRJ Corretora de Seguros", handle: "@mrjcorretoradeseguros", url: "https://www.instagram.com/mrjcorretoradeseguros/" },
    { name: "Geo Nasser", handle: "@_geonasser", url: "https://www.instagram.com/_geonasser/" },
    { name: "Demolidora Fortaleza", handle: "@demolidora_fortaleza", url: "https://www.instagram.com/demolidora_fortaleza/" },
    { name: "Express MFT", handle: "@expressmft", url: "https://www.instagram.com/expressmft/" },
    { name: "Dr. Danilo Talarico", handle: "@drdanilotalarico", url: "https://www.instagram.com/drdanilotalarico/" },
    { name: "Friesian Marchador", handle: "@friesianmarchador", url: "https://www.instagram.com/friesianmarchador/" }
  ];

  const youtubeVideos = [
    { title: "Vídeo Promocional 1", url: "https://www.youtube.com/shorts/_l8sT55Us78?feature=share" },
    { title: "Vídeo Promocional 2", url: "https://www.youtube.com/shorts/sObo7I5u8kQ?feature=share" },
    { title: "Vídeo Promocional 3", url: "https://www.youtube.com/shorts/b_DKeoE_OSA?feature=share" },
    { title: "Vídeo Promocional 4", url: "https://www.youtube.com/shorts/3OOU8uOndMQ?feature=share" },
    { title: "Vídeo Promocional 5", url: "https://www.youtube.com/shorts/D_fHm7jL2JQ?feature=share" },
    { title: "Vídeo Promocional 6", url: "https://www.youtube.com/shorts/QQNrq9-Yurg?feature=share" }
  ];

  const professionalFolders = [
    { title: "Fortaleza Demolidora", url: "https://redesocialpro.com/wp-content/uploads/2025/09/Fortaleza-Demolidora-em-Sao-Paulo.pdf" },
    { title: "Coletare", url: "https://redesocialpro.com/wp-content/uploads/2025/09/folder-coletare-NOVO.pdf" },
    { title: "Rede Social Pro", url: "https://redesocialpro.com/wp-content/uploads/2025/09/Folder-rede-social-pro-04-2025.pdf" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nosso Portfólio</Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary">NOSSOS</span> Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Confira alguns dos projetos que desenvolvemos e clientes que atendemos
          </p>
        </div>

        {/* Websites Desenvolvidos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            <Globe className="w-6 h-6 inline-block mr-2" />
            + DE 7000 SITES, LANDING PAGES E LOJAS VIRTUAIS EM 30 ANOS DE EXCELÊNCIA
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websites.map((site, index) => (
              <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold mb-3 text-foreground">{site.name}</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(site.url, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visitar Site
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Clientes Instagram */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            <Instagram className="w-6 h-6 inline-block mr-2" />
            Clientes do Instagram que Cuidamos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramClients.map((client, index) => (
              <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold mb-2 text-foreground">{client.name}</h4>
                  <p className="text-primary mb-3 font-medium">{client.handle}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(client.url, '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Ver Perfil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vídeos YouTube */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            <Play className="w-6 h-6 inline-block mr-2" />
            Criação de vídeos para Reels, TikTok e YouTube
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {youtubeVideos.map((video, index) => (
              <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-4 text-center">
                  <div className="bg-red-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="font-semibold mb-3 text-foreground">{video.title}</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(video.url, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Assistir Vídeo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Folders Profissionais */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">
            <FileText className="w-6 h-6 inline-block mr-2" />
            Criação de Folders Profissionais
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professionalFolders.map((folder, index) => (
              <Card key={index} className="bg-gradient-card border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-3 text-foreground">{folder.title}</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(folder.url, '_blank')}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Visualizar Folder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ver seu projeto aqui também?
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=5519994572513&text&type=phone_number&app_absent=0', '_blank')}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;