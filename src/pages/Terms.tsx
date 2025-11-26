import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8 text-primary">Termos e Condições de Uso — MIDIA FOCO</h1>
          
          <p className="text-lg mb-8">
            Bem-vindo ao site <strong>midiafoco.com.br</strong>. Ao acessar nossos serviços, você concorda com estes Termos e Condições.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao utilizar o site, você declara ter lido, compreendido e concordado com estes termos. 
              Caso não concorde, não utilize o site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Uso do site</h2>
            <p className="mb-4">Você concorda em:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utilizar o site apenas para fins legais</li>
              <li>Não publicar conteúdos ofensivos, ilegais ou que infrinjam direitos</li>
              <li>Não tentar acessar áreas restritas sem autorização</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Propriedade intelectual</h2>
            <p className="mb-4">
              Todo conteúdo do site — textos, imagens, identidade visual, marca, sistemas — pertence à MIDIA FOCO 
              e é protegido por leis brasileiras.
            </p>
            <p>É proibido copiar, distribuir ou modificar sem autorização formal.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Serviços oferecidos</h2>
            <p className="mb-4">
              A MIDIA FOCO atua há <strong>30 anos no mercado</strong>, oferecendo serviços de:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Marketing digital</li>
              <li>Gestão de mídias sociais</li>
              <li>Criação de websites</li>
              <li>Consultoria estratégica</li>
            </ul>
            <p className="mt-4">As condições específicas de cada serviço serão apresentadas em contrato individual.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Limitação de responsabilidade</h2>
            <p className="mb-4">Não nos responsabilizamos por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Danos provenientes do uso inadequado do site</li>
              <li>Erros externos ou falhas de serviços de terceiros</li>
              <li>Conteúdos publicados por usuários</li>
            </ul>
            <p className="mt-4">
              Prestamos serviços com excelência, mas não garantimos resultados financeiros sem estratégia e 
              implementação adequada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Links externos</h2>
            <p>
              Nosso site pode conter links para terceiros. Não nos responsabilizamos pelo conteúdo ou 
              política de privacidade desses sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Cadastro e segurança</h2>
            <p className="mb-2">Você deve fornecer informações verdadeiras ao se cadastrar.</p>
            <p>É responsabilidade do usuário manter sua senha segura.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Cancelamento de serviços</h2>
            <p>
              O cancelamento de serviços deverá seguir o contrato específico de cada projeto.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Alterações nos Termos</h2>
            <p>
              Podemos modificar estes Termos a qualquer momento. Alterações entram em vigor imediatamente após publicação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">10. Jurisdição</h2>
            <p>
              Qualquer conflito será resolvido no foro da comarca de Campinas — SP.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contato</h2>
            <p className="mb-2">Para dúvidas ou solicitações:</p>
            <p>📧 <a href="mailto:contato@midiafoco.com.br" className="text-primary hover:underline">contato@midiafoco.com.br</a></p>
            <p>📞 <strong>(19) 99393-7708</strong></p>
            <p>🌐 <a href="https://midiafoco.com.br" className="text-primary hover:underline">https://midiafoco.com.br</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
