import Image from 'next/image'
import React from 'react'


export default function SearchModal({ openModal, hideSearch }) {
    return (
        <div>
            {
                hideSearch &&
                <button className='flex items-center w-32 border rounded-full overflow-hidden' onClick={openModal}>

                <figure className='flex justify-center items-center w-12'>
                    <Image
                        className='w-4 h-full'
                        src='/icons/searchIcon.svg'
                        alt='search icon'
                        width={30}
                        height={30}
                        as='image' />
                </figure>

                <input
                    className='pl-2 w-full h-full outline-none'
                    id='openModal'
                    type="text" placeholder='Buscar'
                    readOnly
                />
            </button>
            }
        </div>

    )
}
