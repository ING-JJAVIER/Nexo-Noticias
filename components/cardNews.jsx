import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { apiAll } from '@/app/api/apiAll'

export default function CardNews() {

    return (
        <div className='flex justify-center'>
            <div className="w-60 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <figure className='p-5'>
                    <Image className="rounded-lg" src='/logo.png' alt="" width={100} height={300} as='image' />
                </figure>

                <div className="p-5">

                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-700 to-indigo-600 rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-600 active:text-[1.2rem] outline-none">
                        Leer más
                        <figure >
                            <Image className="w-4 ml-2 text-white" src="/icons/2.svg" alt="arrow icon" width={30} height={10} as='image' />
                        </figure>
                    </Link>
                </div>
            </div>
        </div>
    )
}
