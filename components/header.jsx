import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchModal from './searchModal'

export default function Header({ openModal, hideSearch }) {
    return (
        <header className=' flex w-full h-16 p-2 bg-indigo-400'>
            <div className='flex items-center justify-between w-full h-full'>
                <div className='flex items-center w-full h-full gap-3'>

                    <figure className='w-16 h-full'>
                        <Image
                            className='w-full h-full'
                            src='/logo.png'
                            alt='Logo'
                            width={100}
                            height={100}
                            priority
                        />
                    </figure>

                    <Link href='/'>
                        <h2 className='text-sm font-semibold hover:underline hover:text-indigo-500 cursor-pointer'>Inicio</h2>
                    </Link>

                    <Link href='/faq'>
                        <h2 className='text-sm font-semibold hover:underline hover:text-indigo-500 cursor-pointer'>FAQ</h2>
                    </Link>
                </div>

                {
                    !hideSearch &&
                    <SearchModal openModal={openModal} hideSearch={true}
                    />
                }
            </div>
        </header>
    )
}
