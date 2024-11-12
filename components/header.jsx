import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className=' flex w-full h-1/12 p-1 bg-indigo-400'>
            <div className='flex items-center justify-between w-full h-full'>

                <figure className='w-[20%] h-full'>
                    <Image className='w-full h-full' src='/logo.png' alt='Logo' width={100} height={100} />
                </figure>

                <div className='flex justify-center items-center gap-2 w-[30%] h-full'>
                    <button type="button">
                        <figure>
                            <Image className='w-full h-full' src='/icons/langIcon.svg' alt='language icon' width={30} height={30} />
                        </figure>
                    </button>

                    <button type="button">
                        <figure>
                            <Image className='w-full h-full' src='/icons/country.svg' alt='country icon' width={30} height={30} />
                        </figure>
                    </button>

                    <button type="button">
                        <figure>
                            <Image className='w-full h-full' src='/icons/newslester.svg' alt='newslester icon' width={30} height={30} />
                        </figure>
                    </button>

                </div>
            </div>

        </header>
    )
}
