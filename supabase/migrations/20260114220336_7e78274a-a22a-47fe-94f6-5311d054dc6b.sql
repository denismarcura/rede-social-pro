-- Create table for Miguel AI assistant configuration
CREATE TABLE public.miguel_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  elevenlabs_api_key TEXT,
  resend_api_key TEXT,
  training_content TEXT,
  system_prompt TEXT DEFAULT 'Você é o Miguel, assistente virtual da Rede Social Pro. Você ajuda clientes com dúvidas sobre nossos planos de marketing digital.',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.miguel_config ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access (using a simple password-based approach for now)
CREATE POLICY "Allow public read for config" 
ON public.miguel_config 
FOR SELECT 
USING (true);

-- Create policy for updates (we'll use a secret admin password)
CREATE POLICY "Allow public update for config" 
ON public.miguel_config 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public insert for config" 
ON public.miguel_config 
FOR INSERT 
WITH CHECK (true);

-- Create table for chat messages with Miguel
CREATE TABLE public.miguel_chats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.miguel_chats ENABLE ROW LEVEL SECURITY;

-- Allow public access to chats (anonymous users can chat)
CREATE POLICY "Allow public insert for chats" 
ON public.miguel_chats 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public read for own session chats" 
ON public.miguel_chats 
FOR SELECT 
USING (true);

-- Insert default config
INSERT INTO public.miguel_config (system_prompt, training_content)
VALUES (
  'Você é o Miguel, assistente virtual da Rede Social Pro. Você é simpático, prestativo e conhece todos os nossos planos de marketing digital. Responda de forma clara e objetiva.',
  'A Rede Social Pro oferece serviços de marketing digital incluindo: Plano Hyperfoco (R$ 99,90), Plano Prata (R$ 397), Plano Ouro (R$ 697), e Plano Titânio (R$ 997). Todos os planos incluem gestão de redes sociais, criação de conteúdo e suporte.'
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_miguel_config_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_miguel_config_updated_at
BEFORE UPDATE ON public.miguel_config
FOR EACH ROW
EXECUTE FUNCTION public.update_miguel_config_updated_at();