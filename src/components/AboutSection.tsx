import { motion } from "framer-motion";
import { Shield, Award, Handshake } from "lucide-react";

const AboutSection = () => {
  const features = [
    { icon: Shield, text: "Garantía de calidad" },
    { icon: Award, text: "Estándar europeo" },
    { icon: Handshake, text: "Compromiso a largo plazo" },
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quiénes <span className="text-primary">Somos</span>
            </h2>
            
            <div className="w-24 h-1 bg-primary mb-8" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              En <span className="text-foreground font-semibold">Hessen Motors</span> nos especializamos en la selección de vehículos premium con los más altos estándares de calidad europeos. Cada auto en nuestro inventario pasa por un riguroso proceso de verificación.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nuestro compromiso es brindarte una experiencia de compra transparente, con asesoría personalizada y el respaldo de una automotora seria, orientada a construir relaciones de confianza a largo plazo.
            </p>

            <div className="flex flex-wrap gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
