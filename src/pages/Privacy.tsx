import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 md:py-24 md:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-primary">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-10">Última actualización: 16 de febrero de 2026</p>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">1. Introducción</h2>
            <p>
              En Hessen Motors, nos comprometemos a proteger su privacidad y garantizar la seguridad de sus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos, almacenamos y protegemos su información personal cuando utiliza nuestro sitio web y servicios, incluyendo nuestra integración con YCloud para comunicaciones a través de WhatsApp Business API.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">2. Información que Recopilamos</h2>
            <p className="mb-4">Recopilamos los siguientes tipos de información personal:</p>
            <h3 className="text-lg font-medium mb-2 text-foreground">2.1. Información que Usted Nos Proporciona</h3>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Datos de contacto: Nombre completo, dirección de correo electrónico, número de teléfono</li>
              <li>Información sobre vehículos: Interés en modelos, consultas sobre inventario, solicitud de test drive</li>
              <li>Mensajes y consultas: Cualquier información que nos proporcione a través de formularios de contacto, mensajes o consultas por WhatsApp</li>
              <li>Datos de registro: Información proporcionada al solicitar cotizaciones o información sobre vehículos</li>
            </ul>
            <h3 className="text-lg font-medium mb-2 text-foreground">2.2. Información Recopilada Automáticamente</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Datos técnicos: Dirección IP, tipo de navegador, sistema operativo, páginas visitadas</li>
              <li>Cookies y tecnologías similares: Utilizamos cookies para mejorar su experiencia y analizar el uso del sitio</li>
              <li>Datos de uso: Información sobre cómo interactúa con nuestro sitio web (catálogo, formularios, enlaces)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">3. Cómo Utilizamos Su Información</h2>
            <p className="mb-4">Utilizamos su información personal para los siguientes propósitos:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Atención y ventas:</strong> Responder consultas sobre vehículos, agendar test drives, gestionar cotizaciones y procesos de compra</li>
              <li><strong className="text-foreground">Comunicaciones:</strong> Responder a sus consultas, enviar información sobre vehículos de su interés y mantener comunicación a través de WhatsApp mediante YCloud</li>
              <li><strong className="text-foreground">Mejora de servicios:</strong> Analizar el uso de nuestro sitio web para mejorar la experiencia y el catálogo</li>
              <li><strong className="text-foreground">Cumplimiento legal:</strong> Cumplir con obligaciones legales y regulatorias</li>
              <li><strong className="text-foreground">Marketing:</strong> Enviar comunicaciones sobre vehículos y promociones (con su consentimiento; puede optar por no recibirlas en cualquier momento)</li>
              <li><strong className="text-foreground">Seguridad:</strong> Proteger nuestros servicios y prevenir fraudes o actividades ilegales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">4. Compartir Información con Terceros</h2>
            <p className="mb-4">Compartimos su información personal con los siguientes terceros:</p>
            <h3 className="text-lg font-medium mb-2 text-foreground">4.1. YCloud (WhatsApp Business API)</h3>
            <p className="mb-4">
              Utilizamos los servicios de YCloud para facilitar comunicaciones a través de WhatsApp Business API. Cuando usted proporciona su número de teléfono y acepta recibir comunicaciones, compartimos la información necesaria con YCloud para enviar mensajes por WhatsApp, gestionar conversaciones y procesar solicitudes de contacto relacionadas con vehículos. YCloud tiene su propia Política de Privacidad:{" "}
              <a href="https://www.ycloud.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.ycloud.com/privacy-policy</a>
            </p>
            <h3 className="text-lg font-medium mb-2 text-foreground">4.2. Otros Proveedores de Servicios</h3>
            <p className="mb-4">
              También podemos compartir información con proveedores de servicios que nos ayudan a operar (hosting, análisis web, herramientas de marketing). Estos proveedores están obligados a mantener la confidencialidad de su información.
            </p>
            <h3 className="text-lg font-medium mb-2 text-foreground">4.3. Requisitos Legales</h3>
            <p>
              Podemos divulgar su información si es requerido por ley, orden judicial o proceso legal, o para proteger nuestros derechos, propiedad o seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">5. Bases Legales para el Tratamiento de Datos</h2>
            <p className="mb-4">Procesamos su información personal basándonos en:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-foreground">Consentimiento:</strong> Cuando nos proporciona su información voluntariamente y acepta recibir comunicaciones</li>
              <li><strong className="text-foreground">Ejecución de contrato:</strong> Para gestionar consultas, cotizaciones y ventas que haya solicitado</li>
              <li><strong className="text-foreground">Interés legítimo:</strong> Para mejorar nuestros servicios, analizar el uso del sitio y realizar comunicaciones comerciales sobre vehículos</li>
              <li><strong className="text-foreground">Cumplimiento legal:</strong> Para cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">6. Sus Derechos</h2>
            <p className="mb-4">Usted tiene derecho a: acceso, rectificación, supresión, oposición, portabilidad, retirar el consentimiento y optar por no recibir comunicaciones (por ejemplo respondiendo "STOP" a mensajes de WhatsApp o contactándonos). Para ejercer estos derechos, contacte a través de los medios indicados en la sección de Contacto.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">7. Cookies y Tecnologías Similares</h2>
            <p>
              Utilizamos cookies para mejorar la funcionalidad del sitio, analizar tráfico y recordar preferencias. Puede controlar el uso de cookies en la configuración de su navegador; desactivar ciertas cookies puede afectar la funcionalidad del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">8. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger su información. Ningún método de transmisión por Internet es 100% seguro; nos esforzamos por proteger su información pero no podemos garantizar seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">9. Retención de Datos</h2>
            <p>
              Conservamos su información durante el tiempo necesario para los fines descritos en esta política, salvo que la ley requiera un período mayor. Cuando ya no la necesitemos, la eliminaremos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">10. Transferencias Internacionales</h2>
            <p>
              Su información puede ser transferida y procesada en países fuera de Chile, incluyendo aquellos donde YCloud y otros proveedores operan. Nos aseguramos de que estas transferencias cumplan con las leyes aplicables y que se implementen salvaguardas apropiadas.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">11. Menores de Edad</h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">12. Cambios a Esta Política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Le recomendamos revisar esta política periódicamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">13. Cumplimiento Legal</h2>
            <p>
              Esta política cumple con las leyes de protección de datos aplicables, incluyendo la Ley N° 19.628 sobre Protección de la Vida Privada (Chile), el RGPD para usuarios de la UE y otras leyes aplicables según su jurisdicción.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-foreground">14. Contacto</h2>
            <p>
              Si tiene preguntas, inquietudes o desea ejercer sus derechos respecto a su información personal, puede contactarnos a través de:
            </p>
            <ul className="list-none mt-2 space-y-1">
              <li><strong className="text-foreground">Email:</strong> hessenmotors@gmail.com</li>
              <li><strong className="text-foreground">Teléfono:</strong> +56 9 84748277</li>
              <li><strong className="text-foreground">WhatsApp:</strong> A través de nuestro enlace de contacto en el sitio web</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
