import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-10">Última actualización: 16 de febrero de 2026</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">1. Aceptación de los Términos</h2>
            <p>
              Al acceder y utilizar este sitio web de Hessen Motors, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio ni nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">2. Uso del Servicio</h2>
            <p className="mb-4">
              Nuestros servicios incluyen la consulta de catálogo de vehículos, solicitud de información, cotizaciones, agendamiento de test drives y comunicación por WhatsApp. Usted se compromete a:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Proporcionar información veraz y precisa en formularios y consultas</li>
              <li>Utilizar nuestro sitio y servicios de manera legal y ética</li>
              <li>No utilizar nuestros servicios para actividades ilegales o fraudulentas</li>
              <li>Respetar los derechos de propiedad intelectual de Hessen Motors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">3. Privacidad y Protección de Datos</h2>
            <p>
              Nos comprometemos a proteger su información personal. Los datos que proporcione serán utilizados únicamente para los fines establecidos en nuestra Política de Privacidad y para atender consultas, cotizaciones y ventas de vehículos. Al utilizar nuestros servicios, especialmente a través de WhatsApp mediante YCloud, usted consiente el procesamiento de sus datos personales conforme a dicha política.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">4. Comunicaciones por WhatsApp</h2>
            <p className="mb-4">
              Al proporcionar su número de teléfono y aceptar estos términos, usted autoriza a recibir comunicaciones comerciales a través de WhatsApp mediante la plataforma YCloud. Estas comunicaciones pueden incluir:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Respuestas a consultas sobre vehículos</li>
              <li>Información sobre disponibilidad, precios y características de vehículos</li>
              <li>Agendamiento y recordatorios de test drives</li>
              <li>Promociones y ofertas (puede darse de baja en cualquier momento)</li>
            </ul>
            <p>
              Puede optar por no recibir estas comunicaciones en cualquier momento contactándonos directamente o respondiendo "STOP" a cualquier mensaje de WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">5. Garantías y Limitaciones</h2>
            <p>
              La información del sitio web y del catálogo se ofrece a título informativo. Nos esforzamos por mantener la información actualizada y veraz, pero no garantizamos la disponibilidad permanente de cada vehículo ni que los precios o especificaciones no varíen. Las condiciones definitivas de cada venta se establecerán en los contratos que se suscriban con Hessen Motors. Nuestra responsabilidad por el uso del sitio se limita a lo permitido por la ley.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">6. Propiedad Intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes de vehículos y software, es propiedad de Hessen Motors o sus licenciantes y está protegido por las leyes de propiedad intelectual. No está permitida la reproducción o uso no autorizado de dicho contenido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">7. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en este sitio web. Se recomienda revisar periódicamente estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">8. Ley Aplicable</h2>
            <p>
              Estos términos y condiciones se rigen por las leyes de Chile. Cualquier disputa relacionada con estos términos será resuelta en los tribunales competentes de Chile.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">9. Contacto</h2>
            <p>
              Si tiene preguntas sobre estos términos y condiciones, puede contactarnos a través de:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li><strong className="text-foreground">Email:</strong> hessenmotors@gmail.com</li>
              <li><strong className="text-foreground">Teléfono:</strong> +56 9 84748277</li>
              <li><strong className="text-foreground">WhatsApp:</strong> A través del enlace disponible en nuestro sitio web</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
