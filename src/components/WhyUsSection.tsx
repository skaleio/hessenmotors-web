import { motion } from "framer-motion";
import { CheckCircle2, Users, ShieldCheck, FileCheck, Eye } from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Vehículos verificados",
    description: "Cada auto pasa por inspecciones técnicas rigurosas antes de entrar a nuestro inventario",
  },
  {
    icon: Users,
    title: "Atención personalizada",
    description: "Un asesor dedicado te acompañará durante todo el proceso de compra",
  },
  {
    icon: CheckCircle2,
    title: "Compra segura",
    description: "Documentación legal transparente y procesos de pago protegidos",
  },
  {
    icon: FileCheck,
    title: "Asesoría completa",
    description: "Te guiamos en financiamiento, seguros y todos los trámites necesarios",
  },
  {
    icon: Eye,
    title: "Transparencia total",
    description: "Historial completo del vehículo, sin sorpresas ni costos ocultos",
  },
];

const WhyUsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -translate-x-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/2" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Por qué elegir <span className="text-primary">Hessen Motors</span>?
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tu confianza es nuestra prioridad. Por eso ofrecemos un servicio integral con los más altos estándares
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.1)]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
