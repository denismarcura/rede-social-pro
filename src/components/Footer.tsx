import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">MIDIA FOCO</h3>
            <p className="text-muted-foreground mb-4">
              30 anos transformando negócios através do marketing digital.
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 01.170.135/0001-68
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📞 (19) 99393-7708</p>
              <p>📧 contato@midiafoco.com.br</p>
              <p>🌐 midiafoco.com.br</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <div className="space-y-2">
              <Link 
                to="/politica-de-privacidade" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos-e-condicoes" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Termos e Condições
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MIDIA FOCO. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
