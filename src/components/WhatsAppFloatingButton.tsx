import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_PHONE = "56967569483";
const WHATSAPP_DEFAULT_MESSAGE = "Hola, quiero más información.";
const WHATSAPP_URL = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)}`;

const WhatsAppFloatingButton = () => {
  return (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </a>
      </motion.div>
  );
};

export default WhatsAppFloatingButton;
