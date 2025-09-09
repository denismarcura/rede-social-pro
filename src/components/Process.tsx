import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Target, 
  Palette, 
  Calendar, 
  BarChart3, 
  Users 
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Reunião Inicial (Briefing)",
      description: "Entender seus objetivos, público-alvo e identidade da marca."
    },
    {
      number: "02",
      icon: Target,
      title: "Planejamento Estratégico",
      description: "Definição de metas, editorias de conteúdo e cronograma."
    },
    {
      number: "03",
      icon: Palette,
      title: "Criação e Aprovação",
      description: "Desenvolvimento das artes e textos para sua validação."
    },
    {
      number: "04",
      icon: Calendar,
      title: "Agendamento e Publicação",
      description: "Organização e postagem do conteúdo nas redes sociais."
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Análise de Métricas",
      description: "Monitoramento dos resultados para otimizar a estratégia."
    },
    {
      number: "06",
      icon: Users,
      title: "Reuniões Periódicas",
      description: "Alinhamentos e apresentação de relatórios de desempenho."
    }
  ];

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Nosso Processo</Badge>
          <h2 className="text-4xl font-bold mb-4">
            Como <span className="text-primary">Trabalhamos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Para garantir os melhores resultados, seguimos um processo estruturado e transparente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group relative overflow-hidden">
              {/* Number badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                {step.number}
              </div>
              
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg pr-16">{step.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-card rounded-2xl border border-primary/20">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium">Processo Ativo</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <span className="text-sm text-muted-foreground">
              Acompanhamento em tempo real de cada etapa do seu projeto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;