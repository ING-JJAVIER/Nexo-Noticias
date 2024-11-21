'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

export default function SelectCategories({ onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState('');
    const menuRef = useRef(null);

    const categories = [
        { key: 'business', label: 'Negocios' },
        { key: 'entertainment', label: 'Entretenimiento' },
        { key: 'general', label: 'General' },
        { key: 'health', label: 'Salud' },
        { key: 'science', label: 'Ciencias' },
        { key: 'sports', label: 'Deportes' },
        { key: 'technology', label: 'Tecnología' },
    ];

    const handleSelect = (cat) => {
        setCategory(cat.label);
        setIsOpen(false);
        if (onChange) {
            onChange(cat.key);
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                <h2 className='text-sm'> Categorías </h2>
                <label className='flex border rounded-full overflow-hidden'>
                    <input
                        className='w-20 pl-2'
                        type="text"
                        value={category || ''} 
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
                                alt='category icon'
                                width={20}
                                height={20} />
                        </figure>
                    </button>
                </label>
            </div>

            {isOpen && (
                <div ref={menuRef} className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-11/12 mt-1">
                    <ul className="py-2 text-sm text-gray-700">
                        {categories.map(item => (
                            <li key={item.key}>
                                <button
                                    onClick={() => handleSelect(item)}
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
