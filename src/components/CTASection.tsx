import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const openWhatsApp = () => {
    const message = "Hola! Me gustaria una asesoría";
    window.open(
      `https://wa.me/+56967569483?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Red glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tu próximo auto
            <br />
            <span className="text-primary">comienza aquí</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Déjanos ayudarte a encontrar el vehículo perfecto para ti
          </p>

          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl px-12 py-8 glow-red glow-red-hover transition-all duration-300"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Hablar con un asesor ahora
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
