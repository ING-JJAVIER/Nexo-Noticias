import React from 'react';
import Header from '@/components/header';


const PoliticaDePrivacidad = () => {
    return (
        <>
        <Header/>
        <div className="p-6 max-w-2xl mx-auto bg-slate-100">
            <h1 className="text-3xl font-bold mb-4">POLÍTICA DE PRIVACIDAD</h1>
            <p className="text-sm mb-4"><strong>Fecha de entrada en vigor:</strong> 20 de junio de 2023</p>
            <p className="mb-4">
                En Nexo Noticias, nos comprometemos a proteger tu privacidad y a manejar tus datos personales de manera transparente y responsable. 
                Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos tu información. 
                Al utilizar nuestro sitio web o servicios, aceptas los términos establecidos en este documento.
            </p>
            <p className="mb-4">
                Si tienes alguna duda, puedes contactarnos al correo <a href="mailto:contacto@nexonoticias.com" className="text-blue-600 hover:underline">contacto@nexonoticias.com</a> o al número +1 800 555 6369, extensiones 101 o 102.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">1. Información que Recopilamos</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">1.1. Información Proporcionada por el Usuario</h3>
            <p className="mb-2">Recopilamos información cuando:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Te registras en nuestro sitio o aplicación.</li>
                <li>Te suscribes a nuestro boletín informativo.</li>
                <li>Te pones en contacto con nosotros a través de formularios, correos electrónicos o llamadas.</li>
            </ul>
            <p className="mb-2">Los datos pueden incluir:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Nombre completo.</li>
                <li>Dirección de correo electrónico.</li>
                <li>Número de teléfono (opcional).</li>
                <li>Preferencias de contenido.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">1.2. Información Recopilada Automáticamente</h3>
            <p className="mb-2">Cuando visitas nuestro sitio o usas nuestra aplicación, recopilamos datos como:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Dirección IP.</li>
                <li>Tipo de navegador y sistema operativo.</li>
                <li>Actividad en el sitio web (noticias leídas, tiempo de navegación).</li>
                <li>Ubicación aproximada según tu dirección IP.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">1.3. Información de Terceros</h3>
            <p className="mb-4">Podemos recibir información adicional de socios publicitarios y redes sociales si interactúas con nuestro contenido en dichas plataformas.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">2. Uso de la Información</h2>
            <p className="mb-4">Utilizamos tu información para:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Proporcionar acceso personalizado a nuestras noticias y servicios.</li>
                <li>Enviar boletines informativos y actualizaciones relevantes (solo si te suscribes).</li>
                <li>Mejorar la experiencia del usuario mediante análisis de datos.</li>
                <li>Responder a consultas y solicitudes de soporte.</li>
                <li>Mostrar anuncios relevantes según tus intereses.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">3. Cookies y Tecnologías Similares</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">3.1. Uso de Cookies</h3>
            <p className="mb-2">Utilizamos cookies para:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Recordar tus preferencias.</li>
                <li>Analizar el tráfico en nuestro sitio web.</li>
                <li>Mostrar anuncios personalizados a través de socios publicitarios.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">3.2. Gestión de Cookies</h3>
            <p className="mb-4">Puedes controlar o desactivar las cookies desde la configuración de tu navegador. Sin embargo, deshabilitarlas podría afectar la funcionalidad de nuestro sitio.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">4. Compartición de la Información</h2>
            <p className="mb-4">No vendemos tus datos personales. Sin embargo, podemos compartir tu información con:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Proveedores de Servicios: Empresas que nos ayudan a gestionar nuestra plataforma, como proveedores de alojamiento web o herramientas de análisis.</li>
                <li>Socios Publicitarios: Para ofrecerte anuncios relevantes basados en tus intereses.</li>
                <li>Autoridades Legales: Si es requerido por ley o para proteger nuestros derechos.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-2">5. Almacenamiento y Seguridad de los Datos</h2>
            <h3 className="text-xl font-semibold mt-4 mb-2">5.1. Almacenamiento de Datos</h3>
            <p className="mb-4">Tus datos se almacenan en servidores seguros ubicados en [CDMX, México]. Implementamos medidas técnicas y organizativas para proteger tu información.</p>

            <h3 className="text-xl font-semibold mt-4 mb-2">5.2. Periodo de Conservación</h3>
            <p className="mb-4">Conservamos tu información mientras sea necesaria para cumplir con los fines mencionados o mientras lo exija la ley.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">6. Tus Derechos</h2>
            <p className="mb-4">Dependiendo de tu ubicación, puedes ejercer los siguientes derechos:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Acceso: Solicitar una copia de tus datos personales.</li>
                <li>Rectificación: Corregir datos inexactos o incompletos.</li>
                <li>Eliminación: Solicitar la eliminación de tus datos, salvo excepciones legales.</li>
                <li>Oposición: Restringir el uso de tus datos para ciertos fines, como la publicidad.</li>
                <li>Portabilidad: Solicitar que tus datos se transfieran a otro proveedor, si es técnicamente viable.</li>
            </ul>
            <p className="mb-4">Para ejercer estos derechos, envía un correo a <a href="mailto:contacto@nexonoticias.com" className="text-blue-600 hover:underline">contacto@nexonoticias.com</a> o llama al +1 800 555 6369, extensiones 101 o 102.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">7. Transferencias Internacionales de Datos</h2>
            <p className="mb-4">En caso de transferir datos fuera de México, aseguraremos que estas transferencias cumplan con las leyes aplicables y que tus datos estén protegidos bajo estándares equivalentes.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">8. Política de Privacidad para Menores</h2>
            <p className="mb-4">Nexo Noticias no está dirigido a menores de 16 años. No recopilamos deliberadamente información de menores. Si descubrimos que hemos recopilado datos de un menor, eliminaremos dicha información de inmediato.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">9. Actualizaciones de la Política de Privacidad</h2>
            <p className="mb-4">Podemos actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será notificado a través de nuestro sitio web. La fecha al inicio de este documento refleja la última actualización.</p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">10. Contacto</h2>
            <p className="mb-4">Si tienes preguntas sobre esta Política de Privacidad o sobre cómo gestionamos tus datos, contáctanos:</p>
            <ul className="list-disc list-inside mb-4">
                <li>Correo Electrónico: <a href="mailto:contacto@nexonoticias.com" className="text-blue-600 hover:underline">contacto@nexonoticias.com</a></li>
                <li>Teléfono: +1 800 555 6369, Exts. 101 o 102</li>
                <li>Dirección: Avenida Ficticia 123, Colonia Inventada, CDMX, México.</li>
            </ul>

            <p className="mb-4">Gracias por confiar en Nexo Noticias, tu fuente de información confiable.</p>
        </div>
        </>
    );
};

export default PoliticaDePrivacidad;