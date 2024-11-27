import React, { useState, useEffect } from 'react';
import SelectCountry from '@/components/selectCountry';
import SelectLanguage from '@/components/selectLanguage';
import SelectCategories from '@/components/selectCategories';
import SearchButton from '@/components/searchButton';
import Image from 'next/image';

export default function ModalSearch({ closeModal, onSearch, language }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [languageSelection, setLanguageSelection] = useState(language || 'en');

  useEffect(() => {
   
    setLanguageSelection(language);
  }, [language]);

  const handleSearch = () => {
    const filters = {
      searchQuery,
      language: languageSelection, 
      category,
      country,
    };
    onSearch(filters);  
    closeModal();
  };

  return (
    <div className='bg-indigo-500 relative'>
      <div className='gap-2 w-full h-full md:flex md:justify-center lg:flex lg:justify-center pb-2'>
        <div className='flex justify-end w-11/12 absolute pt-1'>
          <button
            className='flex items-center text-3xl hover:bg-red-600 h-6 hover:rounded-lg active:text-4xl pb-1'
            type="button"
            onClick={closeModal}
            aria-label='Cerrar'
          >
            &times;
          </button>
        </div>

        <div className='flex flex-wrap justify-center md:flex-wrap pt-6'>
          <label className='flex border rounded-full overflow-hidden w-10/12 m-4' htmlFor="searchmanual">
            <input
              className='flex-grow h-full outline-none pl-3'
              type="text"
              id="searchmanual"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Escribe tu búsqueda"
            />
            <button type="button" onClick={handleSearch}>
              <figure className='mx-2'>
                <Image src={'/icons/searchIcon.svg'} width={30} height={30} alt='search icon' as='image' />
              </figure>
            </button>
          </label>

          <div className='flex flex-wrap justify-center items-center gap-2 pt-3'>
            <SelectLanguage selectedLanguage={languageSelection} onChange={(lang) => setLanguageSelection(lang)} />
            <SelectCategories onChange={(cat) => setCategory(cat)} />
            <SelectCountry onChange={(cnt) => setCountry(cnt)} />
          </div>

          <div className='flex justify-center w-full pt-4'>
            <SearchButton language={languageSelection} closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
