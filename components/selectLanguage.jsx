'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function SelectLanguage({ onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('');
    const menuRef = useRef(null);

    const languages = [
        { key: 'en', label: 'Ingles' },
        { key: 'es', label: 'Español' },
        { key: 'pt', label: 'Portugues' },
        { key: 'ru', label: 'Ruso' },
        { key: 'fr', label: 'Frances' },
        { key: 'sv', label: 'Sueco' },
        { key: 'no', label: 'Noruego' },
        { key: 'it', label: 'italiano' },
        { key: 'nl', label: 'Neerlndés' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (language) => {
        setLanguage(language.label); 
        setIsOpen(false);
        if (onChange) onChange(language.key); 
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left p-3">
            <div className='flex flex-col'>
                <h2 className='text-sm'> Idioma </h2>
                <label className='flex border rounded-full overflow-hidden'>
                    <input
                        className='w-20 pl-2'
                        type="text"
                        value={language}
                        readOnly
                    />
                    <button
                        onClick={toggleMenu}
                        className="flex justify-center items-center outline-none font-medium text-sm"
                        type="button"
                    >
                        <figure className="flex items-center mx-2">
                            <Image
                                className='w-4'
                                src='/icons/1.svg'
                                alt='language icon'
                                width={20}
                                height={20}
                            />
                        </figure>
                    </button>
                </label>
            </div>

            {isOpen && (
                <div ref={menuRef} className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-8/12 mt-1" aria-required>
                    <ul className="py-2 text-sm text-gray-700">
                        {languages.map(language => (
                            <li key={language.key}>
                                <button
                                    onClick={() => handleSelect(language)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    {language.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
