-- Drop existing restrictive policies on miguel_config
DROP POLICY IF EXISTS "Admin only insert config" ON public.miguel_config;
DROP POLICY IF EXISTS "Admin only read config" ON public.miguel_config;
DROP POLICY IF EXISTS "Admin only update config" ON public.miguel_config;

-- Create public access policies for miguel_config
CREATE POLICY "Public read config" 
ON public.miguel_config 
FOR SELECT 
USING (true);

CREATE POLICY "Public update config" 
ON public.miguel_config 
FOR UPDATE 
USING (true);

CREATE POLICY "Public insert config" 
ON public.miguel_config 
FOR INSERT 
WITH CHECK (true);