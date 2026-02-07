import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleCatalogClick = () => {
    navigate("/catalog");
  };

  const openWhatsApp = () => {
    const message = "Hola! Me gustaria una asesoría";
    window.open(`https://wa.me/+56967569483?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-background to-secondary/20" />
      
      {/* Dark overlay for navbar area */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-0" />
      
      {/* Enhanced grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Multiple glow effects for depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/12 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      {/* Decorative accent lines */}
      <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6 pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Main heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-foreground mb-2">Tu Próximo Auto Premium</span>
            <span 
              className="block bg-gradient-to-r from-foreground via-foreground/90 to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient"
            >
              Garantizado y Certificado
            </span>
          </motion.h1>

          {/* Divider line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mb-8 rounded-full"
          />

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Calidad superior, transparencia total y financiamiento a tu medida. Compra con la seguridad que mereces.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Button
              size="lg"
              onClick={handleCatalogClick}
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10 py-7 glow-red glow-red-hover transition-all duration-300 shadow-lg shadow-primary/20 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Ver Catálogo Disponible
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={openWhatsApp}
              className="group border-2 border-foreground/20 hover:border-primary/50 hover:bg-primary/5 text-foreground font-semibold text-lg px-10 py-7 transition-all duration-300 backdrop-blur-sm"
            >
              <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Contáctanos al WhatsApp
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Inspección rigurosa</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Garantía Extendida</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Financiamiento Flexible</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
