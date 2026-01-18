-- Adicionar colunas para Maritaca AI e WhatsApp API
ALTER TABLE public.miguel_config 
ADD COLUMN IF NOT EXISTS maritaca_api_key text,
ADD COLUMN IF NOT EXISTS whatsapp_api_key text;