import { motion } from "framer-motion";
import { Car, MessageSquare, ClipboardCheck, KeyRound } from "lucide-react";

const steps = [
  {
    icon: Car,
    number: "01",
    title: "Elige tu vehículo",
    description: "Explora nuestro catálogo y encuentra el auto que se ajuste a tus necesidades",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Contacto directo",
    description: "Comunícate con nosotros por WhatsApp o formulario para agendar una visita",
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Validación del vehículo",
    description: "Revisión presencial, test drive y verificación de toda la documentación",
  },
  {
    icon: KeyRound,
    number: "04",
    title: "Entrega segura",
    description: "Firma de contrato, pago seguro y entrega del vehículo con todos los papeles al día",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proceso de <span className="text-primary">Compra</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un proceso simple, transparente y diseñado para tu comodidad
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                      <step.icon className="w-9 h-9 text-primary" />
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-px h-8 bg-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
