import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-primary">Política de Privacidade — MIDIA FOCO</h1>
          
          <div className="text-muted-foreground space-y-2 mb-8">
            <p><strong>Razão Social / CNPJ:</strong> MIDIA FOCO — 01.170.135/0001-68</p>
            <p><strong>Telefone:</strong> (19) 99393-7708</p>
            <p><strong>Website:</strong> <a href="https://midiafoco.com.br" className="text-primary hover:underline">https://midiafoco.com.br</a></p>
            <p><strong>Última atualização:</strong> 2025</p>
          </div>

          <p className="text-lg mb-8">
            A MIDIA FOCO respeita sua privacidade e está comprometida em proteger os dados pessoais coletados em nosso site. 
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações, de acordo com a 
            <strong> Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)</strong>.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">1. Dados que coletamos</h2>
            <p className="mb-4">Coletamos apenas dados necessários para prestação dos nossos serviços, incluindo:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Informações comerciais fornecidas voluntariamente</li>
              <li>Dados de navegação (cookies, endereço IP, tempo de visita, páginas acessadas)</li>
            </ul>
            <p className="mt-4">Não coletamos dados sensíveis sem autorização expressa.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">2. Como usamos seus dados</h2>
            <p className="mb-4">Seus dados podem ser utilizados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Prestar serviços contratados</li>
              <li>Enviar propostas, informações e suporte</li>
              <li>Melhorar a experiência do usuário</li>
              <li>Realizar análises internas e métricas</li>
              <li>Cumprir obrigações legais</li>
            </ul>
            <p className="mt-4">Jamais vendemos ou compartilhamos dados pessoais com terceiros sem autorização.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">3. Cookies e tecnologias de rastreamento</h2>
            <p>
              Utilizamos cookies para melhorar seu uso do site. Você pode desativar cookies no navegador, 
              porém algumas funções podem não funcionar corretamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">4. Compartilhamento de dados</h2>
            <p className="mb-4">Podemos compartilhar dados apenas quando necessário para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processamentos internos</li>
              <li>Parceiros estratégicos necessários para a execução do serviço</li>
              <li>Obrigações legais e regulatórias</li>
            </ul>
            <p className="mt-4">Todos os parceiros seguem práticas rígidas de segurança.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">5. Segurança das informações</h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus dados contra acesso não autorizado, 
              perda ou alteração.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">6. Seus direitos (LGPD)</h2>
            <p className="mb-4">Você pode, a qualquer momento:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Solicitar acesso aos seus dados</li>
              <li>Solicitar correção</li>
              <li>Pedir exclusão</li>
              <li>Revogar consentimento</li>
              <li>Solicitar portabilidade</li>
            </ul>
            <p className="mt-4">
              Para exercer seus direitos, envie um e-mail para: <a href="mailto:contato@midiafoco.com.br" className="text-primary hover:underline">contato@midiafoco.com.br</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">7. Armazenamento dos dados</h2>
            <p>
              Os dados são armazenados por tempo indeterminado, ou até que você solicite a exclusão.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">8. Alterações nesta política</h2>
            <p>
              Podemos atualizar esta Política de Privacidade a qualquer momento. Consulte esta página periodicamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contato</h2>
            <p className="mb-2">Dúvidas sobre privacidade?</p>
            <p>📞 <strong>(19) 99393-7708</strong></p>
            <p>🌐 <a href="https://midiafoco.com.br" className="text-primary hover:underline">https://midiafoco.com.br</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
