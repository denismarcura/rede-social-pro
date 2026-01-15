-- Create admin role system
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Only admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop ALL overly permissive policies on miguel_config
DROP POLICY IF EXISTS "Allow public read for config" ON public.miguel_config;
DROP POLICY IF EXISTS "Allow public insert for config" ON public.miguel_config;
DROP POLICY IF EXISTS "Allow public update for config" ON public.miguel_config;

-- Create admin-only policies for miguel_config (SELECT, INSERT, UPDATE)
CREATE POLICY "Admin only read config"
ON public.miguel_config FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin only insert config"
ON public.miguel_config FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admin only update config"
ON public.miguel_config FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Drop overly permissive SELECT policy on miguel_chats
DROP POLICY IF EXISTS "Allow public read for own session chats" ON public.miguel_chats;

-- Keep INSERT policy for chats (users need to send messages)
-- But SELECT should be admin-only for viewing conversation history
CREATE POLICY "Admin only read chats"
ON public.miguel_chats FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));