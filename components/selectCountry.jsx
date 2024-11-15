'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function SelectCountry() {
    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState('');
    const menuRef = useRef(null);

    const countries = [
        { key: 'argentina', label: 'Argentina' },//qui va la logica del consumo del API
        { key: 'venezuela', label: 'Venezuela' },
        { key: 'brazil', label: 'Brasil' },
        { key: 'switzerland', label: 'Suiza' },
        { key: 'germany', label: 'Alemania' },
        { key: 'spain', label: 'España' },
        { key: 'france', label: 'Francia' },
        { key: 'italy', label: 'Italia' },
        { key: 'mexico', label: 'México' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (country) => {
        setCountry(country.label);
        setIsOpen(false);
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
                <h2 className='text-sm'> País</h2>
                <label className='flex border rounded-full overflow-hidden'>
                    <input
                    className='w-20 pl-2'
                        type="text"
                        value={country}
                        readOnly
                    />

                    <button
                        onClick={toggleMenu}
                        className="flex justify-center items-center outline-none font-medium text-sm "
                        type="button">

                        <figure className="flex items-center mx-2">
                            <Image
                                className='w-4'
                                src='/icons/1.svg'
                                alt='language icon'
                                width={20}
                                height={20} />
                        </figure>
                    </button>
                </label>
            </div>

            {isOpen && (
                <div ref={menuRef} className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-8/12 mt-1">
                    <ul className="py-2 text-sm text-gray-700">
                        {countries.map(country => (
                            <li key={country.key}>
                                <button
                                    onClick={() => handleSelect(country)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    {country.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}