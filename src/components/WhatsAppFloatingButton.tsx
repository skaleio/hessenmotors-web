import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import whatsappLogo from "@/assets/logowhatsapp.jpg";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const WhatsAppFloatingButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 Bienvenido a Hessen Motors. ¿En qué podemos ayudarte hoy?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // URL del webhook de n8n para el chat
  // En desarrollo usa proxy, en producción usa URL directa
  const CHAT_WEBHOOK_URL = "https://n8n-n8n.obmrlq.easypanel.host/webhook/soporte-web";

  useEffect(() => {
    if (isModalOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isModalOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!message.trim() || isLoading) return;

    const userMessageText = message.trim();
    
    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: userMessageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // Enviar mensaje al webhook de n8n
      const response = await fetch(CHAT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessageText,
          timestamp: new Date().toISOString(),
          sessionId: `session-${Date.now()}`, // ID de sesión para mantener contexto
        }),
      });

      if (!response.ok) {
        // Intentar obtener más información del error
        let errorMessage = `Error ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.text();
          if (errorData) {
            errorMessage += ` - ${errorData}`;
          }
        } catch (e) {
          // Ignorar si no se puede leer el error
        }
        console.error('Error del servidor:', errorMessage);
        throw new Error('Error al enviar mensaje');
      }

      // Verificar si la respuesta tiene contenido
      const contentType = response.headers.get('content-type');
      let data;
      
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        // Si no es JSON, leer como texto
        const text = await response.text();
        console.warn('Respuesta no es JSON:', text);
        // Intentar parsear como JSON si es posible
        try {
          data = JSON.parse(text);
        } catch {
          data = { message: text || "Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto." };
        }
      }
      
      // Obtener la respuesta del AI Agent
      // El workflow de n8n devuelve la respuesta en el body
      // Ajusta esto según la estructura de respuesta de tu workflow
      const botResponseText = data?.output || data?.response || data?.message || 
        "Gracias por tu mensaje. Un asesor se pondrá en contacto contigo pronto.";

      // Filtrar mensajes no deseados
      const filteredText = botResponseText.trim();
      if (
        filteredText.toLowerCase().includes("workflow was started") ||
        filteredText.toLowerCase().includes("workflow started") ||
        filteredText.length === 0
      ) {
        // No mostrar este mensaje
        return;
      }

      // Agregar respuesta del bot
      const botResponse: Message = {
        id: messages.length + 2,
        text: filteredText,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      // No mostrar mensaje de error al usuario
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Resetear mensajes al cerrar (opcional)
    setTimeout(() => {
      setMessages([
        {
          id: 1,
          text: "¡Hola! 👋 Bienvenido a Hessen Motors. ¿En qué podemos ayudarte hoy?",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
      setMessage("");
    }, 300);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>
      </motion.div>

      {/* Modal de Chat WhatsApp */}
      <Dialog open={isModalOpen} onOpenChange={handleClose}>
        <DialogContent className="max-w-sm p-0 overflow-hidden border-0 sm:rounded-2xl h-[500px] flex flex-col [&>button]:hidden">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col h-full">
            {/* Header verde de WhatsApp */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={whatsappLogo} 
                    alt="Hessen Motors" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="text-white font-semibold text-lg">HessenMotors</span>
              </div>
              <button
                onClick={handleClose}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 overflow-y-auto bg-[#ECE5DD] p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg px-4 py-2 ${
                      msg.isUser
                        ? "bg-[#DCF8C6] rounded-tr-sm"
                        : "bg-white rounded-tl-sm"
                    }`}
                  >
                    <p className="text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                      {msg.text}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 text-right">
                      {msg.timestamp.toLocaleTimeString("es-CL", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input de mensaje */}
            <form
              onSubmit={handleSendMessage}
              className="bg-white border-t border-gray-200 p-3 flex-shrink-0"
            >
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  disabled={isLoading}
                  className="flex-1 bg-gray-100 border-0 focus-visible:ring-2 focus-visible:ring-[#25D366] rounded-full px-4 disabled:opacity-50 text-gray-900 placeholder:text-gray-500"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && !isLoading) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
                <Button
                  type="submit"
                  disabled={!message.trim() || isLoading}
                  className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-12 h-12 p-0 flex-shrink-0 disabled:opacity-50"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppFloatingButton;
