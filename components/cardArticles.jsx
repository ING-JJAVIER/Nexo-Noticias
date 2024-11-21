import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function CardArticles({ name, des, url, urlToImage,author }) {
    return (
        <div className='flex justify-center'>
            <div className="w-60 h-[31rem] bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                <figure className='w-full h-40 p-3 object-cover'>
                    <img className="w-full rounded-lg" src={urlToImage} alt={`Article for: ${author}`} width={100} height={300} />
                </figure>

                <div className="px-5">

                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>

                    <p className="mb-3 text-xs font-normal text-gray-700 dark:text-gray-400">{des}</p>

                    <Link href={`${url}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-tr from-blue-700 to-indigo-600 rounded-lg focus:ring-4 focus:outline-none dark:bg-blue-600 active:text-[1.2rem] outline-none">
                        Leer mas
                        <figure >
                            <Image className="w-4 ml-2 text-white" src="/icons/2.svg" alt="arrow icon" width={30} height={10} />
                        </figure>
                    </Link>
                </div>
            </div>
        </div>
    )
}