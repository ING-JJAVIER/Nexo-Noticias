import Image from 'next/image'
import React from 'react'
import { apiAll } from '@/app/api/apiAll'


export default function SearchButton({ closeModal, language }) {
  
    const handleSearch = async () => {
        try {
            const news = await apiAll(1, 10, { language });
        } catch (error) {
            console.error("Error al buscar noticias:", error);
        }
        closeModal();
    };

    return (
        <button className='flex justify-center items-center border border-indigo-700 rounded-full w-28 h-8 bg-slate-700 text-white mt-4 ml-1 hover:bg-slate-600 active:text-[1.2rem]' type="button" onClick={handleSearch}>
            <figure className='mr-2'>
                <Image className='w-full h-full' src='/icons/searchIcon.svg' alt='search icon' width={30} height={30} />
            </figure>
            Buscar
        </button>
    )
}
