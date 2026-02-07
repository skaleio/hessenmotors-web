import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-32 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Política de Privacidad</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="bg-card p-8 rounded-xl border border-border/50 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-card-foreground">Uso de proveedores externos de mensajería</h2>
            <p className="mb-4 text-muted-foreground">
              Para el envío de notificaciones, comunicaciones transaccionales y atención al cliente, este sitio puede utilizar proveedores tecnológicos externos de mensajería y comunicación.
            </p>
            <p className="mb-4 text-muted-foreground">
              Para ello, algunos datos personales como nombre y número de teléfono pueden ser compartidos de forma segura con dichos proveedores, exclusivamente para la finalidad de enviar comunicaciones relacionadas con los servicios o productos ofrecidos.
            </p>
            <p className="text-muted-foreground">
              Estos proveedores tratan los datos conforme a sus propias políticas de privacidad y cumplen con las normativas de protección de datos aplicables.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
