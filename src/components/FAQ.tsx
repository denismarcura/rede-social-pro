import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "Qual a duração do contrato?",
      answer: "Nosso contrato mínimo é de 6 meses para garantir tempo hábil para a construção de resultados sólidos. Acreditamos que o marketing digital é um investimento de médio e longo prazo."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é pré-pago, realizado no início de cada ciclo mensal. Aceitamos PIX, boleto bancário e cartão de crédito. Para cartão de crédito há um acréscimo de 5% no valor."
    },
    {
      question: "Como funciona a landing page ou website gratuito?",
      answer: "Trabalhamos com a Lovable e o sistema só funciona dentro do ambiente deles, o valor mensal é de R$ 25,00 e está incluído 1 conta de e-mail, suporte e atualizações."
    },
    {
      question: "Preciso fornecer as fotos e vídeos?",
      answer: "Recomendamos que o cliente forneça o material visual de seus produtos/serviços, mas oferecemos serviços de produção de conteúdo visual à parte. Temos parcerias com fotógrafos profissionais."
    },
    {
      question: "Em quanto tempo vejo resultados?",
      answer: "Os resultados variam de acordo com o segmento e estratégia, mas geralmente os primeiros sinais de crescimento em engajamento e alcance aparecem já no primeiro mês. Resultados em vendas costumam aparecer a partir do segundo mês."
    },
    {
      question: "Vocês trabalham com que redes sociais?",
      answer: "Trabalhamos principalmente com Instagram, Facebook, LinkedIn, TikTok e YouTube. A escolha das plataformas depende do seu público-alvo e objetivos de negócio."
    },
    {
      question: "Como é feito o acompanhamento dos resultados?",
      answer: "Enviamos relatórios mensais detalhados com métricas de alcance, engajamento, crescimento de seguidores e conversões. Também realizamos reuniões periódicas para alinhamento estratégico."
    },
    {
      question: "Posso cancelar o contrato antes do prazo?",
      answer: "O cancelamento antecipado é possível mediante aviso prévio de 30 dias e pagamento de multa equivalente a 50% do valor mensal. Buscamos sempre conversar para entender os motivos e encontrar uma solução."
    },
    {
      question: "Vocês criam campanhas de tráfego pago?",
      answer: "Sim! Criamos e gerenciamos campanhas no Facebook Ads, Instagram Ads, Google Ads e LinkedIn Ads. O investimento em mídia é separado da nossa mensalidade e fica por conta do cliente."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">Dúvidas</span> Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas principais dúvidas sobre nossos serviços
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-primary/10 rounded-lg px-6 hover:border-primary/30 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center p-8 bg-gradient-card rounded-2xl border border-primary/20">
            <h3 className="text-xl font-semibold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão sobre nossos serviços
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5519993937708?text=Ol%C3%A1%2C%20estou%20com%20d%C3%BAvidas%20pode%20me%20ajudar%0A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg hover:shadow-glow transition-all duration-300 font-semibold"
              >
                WhatsApp: (19) 99393-7708
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;