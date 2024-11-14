import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Header() {
    return (
        <header className=' flex w-full h-12 p-2 bg-indigo-400'>
            <div className='flex items-center justify-between w-full h-full'>
                <div className='flex items-center w-full h-full gap-3'>

                    <figure className='w-16 h-full'>
                        <Link href='/'>
                            <Image
                                className='w-full h-full'
                                src='/logo.png'
                                alt='Logo'
                                width={100}
                                height={100}
                                priority
                            />
                        </Link>
                    </figure>

                    <h2 className='text-sm font-semibold hover:underline hover:text-indigo-500 cursor-pointer'>Inicio</h2>
                    <h2 className='text-xs font-semibold hover:underline hover:text-indigo-500 cursor-pointer'>Ayuda</h2>
                </div>

                <label className='flex w-32 border rounded-full overflow-hidden cursor-pointer' htmlFor="openModal">

                    <figure className='flex justify-center items-center w-12'>
                        <Image
                            className='w-4 h-full'
                            src='/icons/searchIcon.svg'
                            alt='search icon'
                            width={30}
                            height={30} />
                    </figure>

                    <input
                        className='pl-2 w-full h-full outline-none'
                        id='openModal'
                        type="text" placeholder='Buscar' />
                </label>


            </div>

        </header>
    )
}
