import Image from 'next/image'
import React from 'react'

export default function SubModal({closeSubModal}) {
    return (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-indigo-100">
            <div className="bg-[#1f2937] rounded-lg shadow-lg p-6 max-w-sm text-center relative">
                <h3 className="text-lg font-semibold text-indigo-400">
                    Ticket enviado
                </h3>
                <p className="mt-2 text-gray-400">
                    Nos pondremos en contacto a la brevedad posible.
                </p>
                <figure className="mt-4 flex justify-center items-center">
                    <Image className='text-green-500' src="/icons/check.svg" alt="check icon" width={40} height={40} />
                </figure>
                <button
                    type="button"
                    className="mt-4 text-gray-400 bg-transparent hover:bg-red-600 hover:text-gray-900 rounded-lg text-lg w-8 h-8 inline-flex justify-center items-center absolute right-4 top-0 active:text-[1.5rem]"
                    onClick={closeSubModal}>
                    &times;
                </button>
            </div>
        </div>
    )
}
