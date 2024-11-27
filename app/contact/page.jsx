import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
    return (
        <div className="relative bg-sky-50 min-h-screen flex flex-col justify-center items-center">
            <Link href={'/'}>
           <button className='absolute right-4 top-4 border rounded-full w-8 h-8 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 transition duration-600' type="button">
            <figure>
                <Image src={'/icons/home.svg'} alt='home icon' width={34}height={34}/>
            </figure>
           </button>
           </Link>
            <div className="relative z-10 max-w-lg bg-white shadow-lg rounded-lg p-8 m-4">
                
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
                    Contacta con el equipo de Nexo-Noticias
                </h1>
                <p className="text-gray-700 mb-6 text-center">
                    En Nexo-Noticias, valoramos tu opinión y estamos aquí para ayudarte. 
                    Si tienes alguna pregunta, sugerencia o comentario, no dudes en ponerte en contacto con nosotros. 
                    Nuestro equipo está comprometido a brindarte el mejor servicio y responder a todas tus inquietudes de manera rápida y eficiente. 
                    ¡Tu confianza es lo más importante para nosotros!
                </p>
                <div className="flex flex-col space-y-4">
                    <Link href="mailto:contacto@nexonoticias.com" className="block text-center bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
                        contacto@nexonoticias.com
                    </Link>
                    <Link href="mailto:support@nexonoticias.com" className="block text-center bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
                        support@nexonoticias.com
                    </Link>
                    <Link href="mailto:info@nexonoticias.com" className="block text-center bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300">
                        info@nexonoticias.com
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;