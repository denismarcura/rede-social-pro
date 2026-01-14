import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, sessionId } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Get Miguel's config from database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: config } = await supabase
      .from("miguel_config")
      .select("*")
      .limit(1)
      .single();

    const systemPrompt = config?.system_prompt || "Você é o Miguel, assistente virtual da Rede Social Pro.";
    const trainingContent = config?.training_content || "";

    const fullSystemPrompt = `${systemPrompt}

${trainingContent}

Informações importantes sobre nossos planos:

1. Plano Hyperfoco - R$ 99,90
   - 10 criativos profissionais
   - 10 textos persuasivos com SEO
   - 10 postagens estratégicas
   - Gestão de tráfego pago
   - Entrega em 24 horas
   - Pagamento: PIX ou cartão em até 2x

2. Plano Prata - R$ 397/mês
   - 10 artes estáticas
   - 2 vídeos
   - Criação de calendário editorial
   - Configuração Business Manager
   - 1 campanha de anúncios

3. Plano Ouro - R$ 697/mês (Mais vendido!)
   - 15 artes
   - 4 vídeos
   - 2 campanhas de anúncios
   - Stories e Reels inclusos
   - Suporte prioritário

4. Plano Titânio - R$ 997/mês
   - 20 artes
   - 6 vídeos
   - 4 campanhas de anúncios
   - Relatórios mensais
   - Gestão completa

Contato WhatsApp: (19) 99393-7708

Seja simpático, objetivo e sempre incentive o cliente a contratar nossos serviços!`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: fullSystemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Muitas solicitações. Tente novamente em alguns segundos." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Limite de uso atingido." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "Erro ao processar sua mensagem." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("miguel-chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Erro desconhecido" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
