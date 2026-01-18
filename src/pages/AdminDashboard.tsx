import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Key, Brain, Save, Eye, EyeOff, ArrowLeft, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [showElevenLabsKey, setShowElevenLabsKey] = useState(false);
  const [showResendKey, setShowResendKey] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const { toast } = useToast();

  const [config, setConfig] = useState({
    id: "",
    elevenlabs_api_key: "",
    resend_api_key: "",
    system_prompt: "",
    training_content: "",
  });

  useEffect(() => {
    loadConfig();
  }, []);

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
        description: "Não foi possível carregar as configurações.",
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-white" />
      </div>
    );
  }

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
