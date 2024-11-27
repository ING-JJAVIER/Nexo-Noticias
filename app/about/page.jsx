import React from 'react';
import Header from '@/components/header';

const About = () => {
    return (
        <>
        <Header hideSearch={true} />
            <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
                <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6 m-4">
                    <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
                        Bienvenido a Nexo-Noticias
                    </h1>
                    <p className="text-gray-700 mb-4">
                        En Nexo Noticias, nos dedicamos a ofrecerte las noticias más relevantes y actualizadas del mundo.
                        Con una mezcla de reportajes profundos, análisis detallados y cobertura en tiempo real,
                        nuestra misión es mantenerte informado y conectado con los eventos que definen el presente y el futuro.
                        Nos aseguramos de que cada historia sea verificada, imparcial y presentada con la claridad que nuestros lectores merecen.
                        Desde política global hasta las últimas tendencias tecnológicas, en Nexo Noticias encontrarás todo lo que necesitas saber.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Nuestra plataforma garantiza una experiencia ágil y rápida, adaptándose perfectamente a tus necesidades,
                        sin importar el dispositivo desde el cual accedas. Ofrecemos una interfaz intuitiva que pone a tu alcance
                        los contenidos más destacados de forma accesible y amigable.
                        Ya sea que te conectes desde tu computadora, smartphone o tablet, te aseguramos una navegación fluida y cómoda.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Nos enorgullece ser tu fuente de confianza en un mundo lleno de información, ayudándote a navegar por el océano
                        de noticias con precisión y claridad. Si deseas profundizar en temas específicos, Nexo Noticias te brinda un enfoque
                        personalizado, permitiéndote seguir de cerca las áreas de interés que más te apasionan.
                        Mantente actualizado con nosotros y forma parte de una comunidad que busca siempre lo mejor de la información global.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;