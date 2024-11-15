'use client';
import React, { useEffect, useState } from 'react';

const images = [
    '/logo.png',//logica de la api para las imagenes
    '/logo.png',

];

export default function Carousel() {
    const [carousel, setCarousel] = useState(0);
    const [int, setInt] = useState(null);

    const startInterval = () => {
        const id = setInterval(() => {
            setCarousel((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        setInt(id);
    };

    useEffect(() => {
        startInterval();
        return () => clearInterval(int);
    }, []);

    const nextSlide = () => {
        setCarousel((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCarousel((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className='flex justify-center items-center'>
            <div className="relative w-10/12 overflow-hidden  ">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${carousel * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="min-w-full">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
                        </div>
                    ))}
                </div>

                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-400">
                    &#10094;
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-400">
                    &#10095;
                </button>
            </div>
        </div>
    )
}