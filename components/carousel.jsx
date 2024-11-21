'use client';
import React, { useEffect, useState } from 'react';
import { apiCar } from '@/app/api/apiCar';
import { Spinner } from "@nextui-org/react";

export default function Carousel({language}) {
    const [carousel, setCarousel] = useState(0);
    const [int, setInt] = useState(null);
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    const topNews = async () => {
        try {
            setLoading(true);
            const allArticles = await apiCar();
            const topArticles = allArticles
                .filter((article) => article.urlToImage && article.title)
                .slice(0, 10);
            setArticles(topArticles);
        } catch (error) {
            console.error("Error fetching articles:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        topNews();
    }, [language]);

    useEffect(() => {
        if (articles.length > 0) {
            const id = setInterval(() => {
                setCarousel((prevIndex) => (prevIndex + 1) % articles.length);
            }, 5000);
            setInt(id);
    
            
            return () => clearInterval(id);
        }
    }, [articles]);  
    
    useEffect(() => {
        return () => {
            if (int) {
                clearInterval(int);
            }
        };
    }, [int]); 
    

    const nextSlide = () => {
        setCarousel((prevIndex) => (prevIndex + 1) % articles.length);
    };

    const prevSlide = () => {
        setCarousel((prevIndex) => (prevIndex - 1 + articles.length) % articles.length);
    };

    return (
        <div className='flex justify-center items-center mt-4'>
            <div className="relative w-10/12 overflow-hidden object-cover">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Spinner size="lg" />
                    </div>
                ) : (
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${carousel * 100}%)` }}>
                        {
                            articles.map((article, index) => (
                                <div key={index} className="min-w-full relative flex flex-col items-center">
                                    <img src={article.urlToImage} alt={article.title} className="w-full h-auto object-cover" width={100} height={100} />
                                    <div className="absolute bottom-0 w-full bg-black bg-opacity-65 text-white text-center p-4">
                                        <h2 className="font-semibold text-lg">{article.title}</h2>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )}

                <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-400">
                    &#10094;
                </button>
                <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-slate-400">
                    &#10095;
                </button>
            </div>
        </div>
    );
}
