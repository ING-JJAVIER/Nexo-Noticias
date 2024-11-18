import React, { useState } from 'react'
import SelectCountry from './selectCountry'
import SelectLanguage from './SelectLanguage'
import SelectCategories from './selectCategories'
import SearchButton from './searchButton'

export default function ModalSearch({ closeModal  }) {
    const [language, setLanguage] = useState('');
    
    const langChange = (newLanguage) => {
        setLanguage(newLanguage);
    };
    
    return (
        <div className='bg-indigo-500 relative'>
            <div className='gap-2 w-full h-full md:flex md:justify-center lg:flex lg:justify-center pb-2 '>
                <div className='flex justify-end w-11/12 absolute pt-1'>
                    <button className='flex items-center text-3xl hover:bg-red-600 h-6 hover:rounded-lg active:text-4xl pb-1' type="button"
                    onClick={closeModal}
                    aria-label='Cerrar'
                    >
                        &times;
                    </button>
                </div>
                <div className='flex pt-3'>
                    <SelectLanguage onChange ={langChange} />
                    <SelectCategories />
                </div>

                <div className='flex items-center gap-2 pt-3'>
                    <SelectCountry />
                    <SearchButton closeModal={closeModal} language={language}/>
                </div>
            </div>

        </div>
    )
}
