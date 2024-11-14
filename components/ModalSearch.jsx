import Image from 'next/image'
import React from 'react'
import DropDownBtn from './dropDownBtn'

export default function ModalSearch() {
    return (
        <div className='bg-indigo-500'>
            <div className='flex justify-center items-center gap-2 w-[30%] h-full'>

                <DropDownBtn />
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
    )
}
