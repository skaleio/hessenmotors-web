import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import CatalogPage from "@/components/CatalogPage";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Catalog = () => {
  useEffect(() => {
    // Hacer scroll al inicio cuando se carga la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-20">
        <CatalogPage />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Catalog;
