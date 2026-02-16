import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import hessenLogo from "@/assets/LOGOFINAL.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#" },
    { label: "Vehículos", href: "#vehiculos" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/+56967569483", label: "WhatsApp" },
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/30">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <img src={hessenLogo} alt="Hessen Motors" className="w-48 mb-4" />
            <p className="text-muted-foreground max-w-md mb-6">
              Autos premium seleccionados con excelencia automotriz. Confianza, transparencia y calidad en cada vehículo.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary/50 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+56 9 84748277</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>contacto@hessenmotors.cl</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Av. Principal 1234, Santiago, Chile</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border/50 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
          <p>© {currentYear} Hessen Motors. Todos los derechos reservados.</p>
          
          <div className="flex gap-4 md:gap-6">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Términos y Condiciones
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Política de Privacidad
            </Link>
          </div>

          <p className="text-center md:text-right">
            Diseñado con pasión por la excelencia automotriz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
