import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-32 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Términos del Servicio</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="bg-card p-8 rounded-xl border border-border/50 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Uso de servicios de terceros</h2>
            <p className="mb-4 text-muted-foreground">
              Este sitio web utiliza servicios de terceros para la gestión de comunicaciones y notificaciones con los usuarios, incluyendo plataformas de mensajería y APIs externas.
            </p>
            <p className="mb-4 text-muted-foreground">
              Dichos servicios pueden requerir el tratamiento de datos personales como nombre, número de teléfono y contenido de los mensajes, únicamente con el fin de brindar el servicio solicitado por el usuario.
            </p>
            <p className="text-muted-foreground">
              El uso de estos servicios se realiza conforme a sus propios términos y políticas de privacidad, y el titular del sitio no se hace responsable por interrupciones, fallos técnicos o cambios derivados de dichos proveedores externos.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
