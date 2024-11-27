import Image from 'next/image';
import React, { useState } from 'react';
import { apiCont } from '@/app/api/apiCont';

export default function SearchButton({ closeModal, language }) {
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!language) {
      console.error('No se ha seleccionado un idioma');
      return; 
    }

    try {
      setLoading(true); 
      const news = await apiCont(1, 10, { language });
      console.log(news);
    } catch (error) {
      console.error("Error al buscar noticias:", error);
    } finally {
      setLoading(false); 
      closeModal(); 
    }
  };

  return (
    <button
      className={`flex justify-center items-center border border-indigo-700 rounded-full w-28 h-8 mt-4 ml-1 ${
        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-slate-700 hover:bg-slate-600 active:text-[1.2rem]'
      } text-white`}
      type="button"
      onClick={handleSearch}
      disabled={loading} 
    >
      <figure className="mr-2">
        <Image className="w-full h-full" src="/icons/searchIcon.svg" alt="search icon" width={30} height={30} />
      </figure>
      {loading ? 'Buscando...' : 'Buscar'}
    </button>
  );
}
