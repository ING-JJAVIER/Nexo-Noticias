import React, { useState } from 'react'
import SelectCountry from './selectCountry'
import SelectLanguage from './SelectLanguage'
import SelectCategories from './selectCategories'
import SearchButton from './searchButton'
import Image from 'next/image'

export default function ModalSearch({ closeModal }) {
    const [language, setLanguage] = useState('');
    const [category, setCategory] = useState('');

    const langChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const categoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    return (
        <div className='bg-indigo-500 relative'>
            <div className=' gap-2 w-full h-full md:flex md:justify-center lg:flex lg:justify-center pb-2 '>

                <div className='flex justify-end w-11/12 absolute pt-1'>
                    <button className='flex items-center text-3xl hover:bg-red-600 h-6 hover:rounded-lg active:text-4xl pb-1' type="button"
                        onClick={closeModal}
                        aria-label='Cerrar'
                    >
                        &times;
                    </button>
                </div>



                <div className='flex flex-wrap justify-center md:flex-wrap pt-6'>
                    <label className='flex border rounded-full overflow-hidden w-10/12 m-4' htmlFor="searchmanual">
                        <input className='flex-grow h-full outline-none pl-3' type="text" name="" id="searchmanual" />
                        <button type="button">
                            <figure className='mx-2'>
                                <Image src={'/icons/searchIcon.svg'} width={30} height={30} alt='search icon' as='image' />
                            </figure>
                        </button>
                    </label>

                    <div className='flex flex-wrap justify-center items-center gap-2 pt-3'>
                    <SelectLanguage onChange={langChange} />
                    <SelectCategories onChange={categoryChange} />
                    <SelectCountry />
                    <SearchButton closeModal={closeModal} language={language} />
                </div>

                </div>

                
            </div>

        </div>
    )
}
