import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useMetaPixel, MetaPixelEvents } from "@/hooks/useMetaPixel";

const ContactSection = () => {
  const { toast } = useToast();
  const { trackEvent } = useMetaPixel();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "+569",
    email: "",
    tipoPago: "" as "financiamiento" | "contado" | "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTipoPagoChange = (value: "financiamiento" | "contado") => {
    setFormData({ ...formData, tipoPago: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar datos al webhook de n8n
      const response = await fetch('https://n8n-n8n.obmrlq.easypanel.host/webhook/formulario-hessen', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          email: formData.email,
          tipoPago: formData.tipoPago || 'No especificado',
          fecha: new Date().toISOString(),
          origen: 'Hessen Motors - Formulario de Contacto',
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el formulario');
      }

      // Disparar evento del Meta Pixel - Lead
      trackEvent(MetaPixelEvents.Lead, {
        content_name: formData.tipoPago || 'Consulta General',
        content_category: 'Contact Form',
        value: 0,
        currency: 'CLP',
      });

      // Disparar evento personalizado de formulario
      trackEvent(MetaPixelEvents.FormSubmit, {
        form_name: 'Contact Form',
        form_id: 'contact-section',
        tipo_pago: formData.tipoPago || 'N/A',
      });

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setIsSubmitting(false);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.",
        variant: "destructive",
      });
    }
  };

  const handleCloseSuccess = () => {
    setIsSubmitted(false);
    setFormData({ nombre: "", telefono: "+569", email: "", tipoPago: "" });
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cotiza o agenda tu <span className="text-primary">vehículo</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg">
              Un asesor de Hessen Motors te contactará a la brevedad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                    placeholder="Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Teléfono WhatsApp *
                  </label>
                  <Input
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                    placeholder="+569 1234 5678"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Correo electrónico *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background/50 border-border/50 focus:border-primary h-12"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium mb-4">
                  Tipo de pago *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleTipoPagoChange("financiamiento")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      formData.tipoPago === "financiamiento"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/50 bg-background/50 hover:border-primary/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="font-semibold text-lg mb-1">Financiamiento</div>
                    <div className="text-sm opacity-80">Crédito automotriz</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTipoPagoChange("contado")}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      formData.tipoPago === "contado"
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border/50 bg-background/50 hover:border-primary/50 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <div className="font-semibold text-lg mb-1">Al contado</div>
                    <div className="text-sm opacity-80">Pago completo</div>
                  </button>
                </div>
                {!formData.tipoPago && (
                  <p className="text-xs text-muted-foreground mt-2">Selecciona una opción</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted || !formData.tipoPago}
                className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90 glow-red glow-red-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    ¡Solicitud enviada!
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar solicitud
                  </>
                )}
              </Button>

            </form>
          </motion.div>
        </div>
      </div>

      {/* Modal de éxito tipo ticket */}
      <Dialog open={isSubmitted} onOpenChange={handleCloseSuccess}>
        <DialogContent className="max-w-md p-0 overflow-hidden border-primary/20">
          <div className="relative bg-gradient-to-br from-card via-card to-card/80 border-2 border-primary/30">
            {/* Efecto de ticket - líneas punteadas en los bordes */}
            <div className="absolute left-0 top-0 bottom-0 w-8 border-r-2 border-dashed border-primary/20" />
            <div className="absolute right-0 top-0 bottom-0 w-8 border-l-2 border-dashed border-primary/20" />
            
            <div className="p-8 relative">
              {/* Icono de éxito */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
                >
                  <Check className="w-12 h-12 text-primary" strokeWidth={3} />
                </motion.div>
              </div>

              {/* Título */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-center mb-4"
              >
                ¡Solicitud Enviada!
              </motion.h3>

              {/* Línea divisoria */}
              <div className="w-24 h-1 bg-primary mx-auto mb-6" />

              {/* Mensaje */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center text-muted-foreground mb-6 text-lg"
              >
                Un asesor de Hessen Motors se pondrá en contacto contigo pronto.
              </motion.p>

              {/* Información del ticket */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-background/50 rounded-lg p-4 border border-border/50 mb-6"
              >
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nombre:</span>
                    <span className="font-medium">{formData.nombre}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tipo de pago:</span>
                    <span className="font-medium capitalize">
                      {formData.tipoPago === "financiamiento" ? "Financiamiento" : "Al contado"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fecha:</span>
                    <span className="font-medium">
                      {new Date().toLocaleDateString("es-CL")}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Botón de cerrar */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  onClick={handleCloseSuccess}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Cerrar
                </Button>
              </motion.div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;
