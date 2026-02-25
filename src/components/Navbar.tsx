import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import hessenLogo from "@/assets/LOGOFINAL.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Vehículos", href: "/catalog" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Contacto", href: "/#contacto" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // Si ya estamos en la página principal, hacer scroll al inicio
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Si estamos en otra página, navegar y luego hacer scroll
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const openWhatsApp = () => {
    const message = "Hola! Me gustaria una asesoría";
    window.open(
      `https://wa.me/+56967569483?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Si es un enlace interno (no hash), hacer scroll al inicio después de navegar
    if (href.startsWith("/") && !href.includes("#")) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
            : "bg-gradient-to-b from-black via-black/80 to-transparent"
        }`}
      >
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-center md:justify-between h-20 relative">
            {/* Logo - Centered on mobile, left on desktop */}
            <Link 
              to="/" 
              onClick={handleLogoClick}
              className="flex-shrink-0 md:static absolute left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 mt-4 md:mt-6"
            >
              <img src={hessenLogo} alt="Hessen Motors" className="h-48 md:h-64" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                onClick={openWhatsApp}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile Menu Button - Right side on mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground absolute right-0"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-lg pt-24 px-6">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    openWhatsApp();
                    setIsMobileMenuOpen(false);
                  }}
                  className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-14 text-lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contactar por WhatsApp
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
