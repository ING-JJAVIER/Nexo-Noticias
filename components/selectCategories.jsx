'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function SelectCategories() {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState('');
    const menuRef = useRef(null);

    const categories = [
        { key: 'Deportes', label: 'Deportes' },//qui va la logica del consumo del API
        { key: 'Finanzas', label: 'Finanzas' },
        { key: 'Espectaculo', label: 'Espectaculo' },
        { key: 'Moda', label: 'Moda' },
        { key: 'Especial', label: 'Especial' },
    ];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (cat) => {
        setCategory(cat.label);
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
                <h2 className='text-sm'> Categorias </h2>
                <label className='flex border rounded-full overflow-hidden'>
                    <input
                        className='w-20 pl-2'
                        type="text"
                        value={category}
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
                        {categories.map(item => (
                            <li key={item.key}>
                                <button
                                    onClick={() => handleSelect(category)}
                                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}