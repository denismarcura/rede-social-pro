import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Key, Brain, Save, Eye, EyeOff, ArrowLeft, Loader2, CheckCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link, useNavigate } from "react-router-dom";
import { User, Session } from "@supabase/supabase-js";

const AdminDashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showElevenLabsKey, setShowElevenLabsKey] = useState(false);
  const [showResendKey, setShowResendKey] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [config, setConfig] = useState({
    id: "",
    elevenlabs_api_key: "",
    resend_api_key: "",
    system_prompt: "",
    training_content: "",
  });

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        // Check admin role with setTimeout to avoid deadlock
        if (session?.user) {
          setTimeout(() => {
            checkAdminRole(session.user.id);
          }, 0);
        } else {
          setIsAdmin(false);
          setIsLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        checkAdminRole(session.user.id);
      } else {
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();

      if (error) {
        console.error("Error checking admin role:", error);
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
        if (data) {
          loadConfig();
        }
      }
    } catch (error) {
      console.error("Error checking admin role:", error);
      setIsAdmin(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha email e senha.",
        variant: "destructive",
      });
      return;
    }

    setIsAuthLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Erro ao entrar",
          description: error.message === "Invalid login credentials" 
            ? "Email ou senha incorretos." 
            : error.message,
          variant: "destructive",
        });
        return;
      }

      if (data.user) {
        // Auth state change will handle the rest
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Erro ao entrar",
        description: "Ocorreu um erro ao tentar fazer login.",
        variant: "destructive",
      });
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setConfig({
      id: "",
      elevenlabs_api_key: "",
      resend_api_key: "",
      system_prompt: "",
      training_content: "",
    });
  };

  const loadConfig = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("miguel_config")
        .select("*")
        .limit(1)
        .single();

      if (error) throw error;

      if (data) {
        setConfig({
          id: data.id,
          elevenlabs_api_key: data.elevenlabs_api_key || "",
          resend_api_key: data.resend_api_key || "",
          system_prompt: data.system_prompt || "",
          training_content: data.training_content || "",
        });
      }
    } catch (error) {
      console.error("Error loading config:", error);
      toast({
        title: "Erro ao carregar",
        description: "Não foi possível carregar as configurações. Verifique se você tem permissão de admin.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      const { error } = await supabase
        .from("miguel_config")
        .update({
          elevenlabs_api_key: config.elevenlabs_api_key,
          resend_api_key: config.resend_api_key,
          system_prompt: config.system_prompt,
          training_content: config.training_content,
        })
        .eq("id", config.id);

      if (error) throw error;

      setSaveSuccess(true);
      toast({
        title: "Salvo com sucesso!",
        description: "As configurações do Miguel foram atualizadas.",
      });

      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving config:", error);
      toast({
        title: "Erro ao salvar",
        description: "Não foi possível salvar as configurações.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

  // Not logged in - show login form
  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Dashboard Admin</CardTitle>
              <CardDescription className="text-gray-300">
                Entre com suas credenciais de administrador
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@exemplo.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    disabled={isAuthLoading}
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-white">Senha</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a senha"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    disabled={isAuthLoading}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isAuthLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {isAuthLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    "Acessar Dashboard"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Logged in but not admin
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
                <Bot className="w-10 h-10 text-red-400" />
              </div>
              <CardTitle className="text-2xl text-white">Acesso Negado</CardTitle>
              <CardDescription className="text-gray-300">
                Você está logado como {user.email}, mas não tem permissão de administrador.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sair e entrar com outra conta
              </Button>
              <Link to="/">
                <Button
                  variant="ghost"
                  className="w-full text-white/70 hover:text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar ao site
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Admin dashboard
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao site
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">{user.email}</span>
              <Button
                onClick={handleLogout}
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard Miguel</h1>
              <p className="text-gray-300">Configure APIs e treine seu assistente</p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-6">
          {/* API Keys Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/20">
                    <Key className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Chaves de API</CardTitle>
                    <CardDescription className="text-gray-300">
                      Configure suas chaves para ElevenLabs e Resend
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="elevenlabs" className="text-white flex items-center gap-2">
                    ElevenLabs API Key
                    <span className="text-xs text-gray-400">(para voz)</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="elevenlabs"
                      type={showElevenLabsKey ? "text" : "password"}
                      value={config.elevenlabs_api_key}
                      onChange={(e) => setConfig({ ...config, elevenlabs_api_key: e.target.value })}
                      placeholder="sk_..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowElevenLabsKey(!showElevenLabsKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showElevenLabsKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="resend" className="text-white flex items-center gap-2">
                    Resend API Key
                    <span className="text-xs text-gray-400">(para email)</span>
                  </Label>
                  <div className="relative">
                    <Input
                      id="resend"
                      type={showResendKey ? "text" : "password"}
                      value={config.resend_api_key}
                      onChange={(e) => setConfig({ ...config, resend_api_key: e.target.value })}
                      placeholder="re_..."
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowResendKey(!showResendKey)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showResendKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Brain className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Treinamento do Miguel</CardTitle>
                    <CardDescription className="text-gray-300">
                      Configure a personalidade e conhecimento do assistente
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="systemPrompt" className="text-white">
                    Prompt do Sistema (Personalidade)
                  </Label>
                  <Textarea
                    id="systemPrompt"
                    value={config.system_prompt}
                    onChange={(e) => setConfig({ ...config, system_prompt: e.target.value })}
                    placeholder="Descreva a personalidade e comportamento do Miguel..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Defina como o Miguel deve se comportar e responder
                  </p>
                </div>

                <div>
                  <Label htmlFor="trainingContent" className="text-white">
                    Conteúdo de Treinamento
                  </Label>
                  <Textarea
                    id="trainingContent"
                    value={config.training_content}
                    onChange={(e) => setConfig({ ...config, training_content: e.target.value })}
                    placeholder="Adicione informações sobre sua empresa, produtos, serviços, FAQs..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[200px]"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Adicione todas as informações que o Miguel precisa saber sobre seu negócio
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Save Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-end"
          >
            <Button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-6 text-lg"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Salvando...
                </>
              ) : saveSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Salvo!
                </>
              ) : (
                <>
                  <Save className="w-5 h-5 mr-2" />
                  Salvar Configurações
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;