'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import SubModal from './subModal';

export default function ModalSupport() {
    const [modalSupport, setModalSupport] = useState(false);
    const [subModal, setSubModal] = useState(false);


    const openModalSupport = () => setModalSupport(true);
    const closeModalSupport = () => setModalSupport(false);
    const openSubModal = (e) => {
        e.preventDefault();
        setModalSupport(false);
        setSubModal(true);
    };
    const closeSubModal = () => {
        setSubModal(false);
    };

    return (
        <div>
            <button
                className="flex justify-center items-center h-12 w-12 rounded-full bg-indigo-800 fixed right-4 bottom-16"
                type="button"
                onClick={openModalSupport}>
                <figure>
                    <Image className='w-9' src='/icons/support.svg' alt='support icon' width={30} height={30} as='image' />
                </figure>
            </button>

            {
                modalSupport &&
                <div id="crud-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed right-4 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

                    <div className="p-4 w-full max-w-md max-h-full">

                        <div className=" bg-white rounded-lg shadow dark:bg-gray-700">

                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    Envienos un mensaje
                                </h3>


                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={closeModalSupport} >
                                    &times;
                                </button>


                            </div>

                            <form className="p-4 md:p-5">
                                <div className="grid gap-4 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de whatsapp</label>
                                        <input
                                            type="number"
                                            name="price"
                                            id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            required
                                        />
                                    </div>

                                    <div className="col-span-2">
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe la falla</label>
                                        <textarea
                                            id="description"
                                            rows="4"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none" required  ></textarea>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={openSubModal}
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }

            {
                subModal && (
                    <SubModal closeSubModal={closeSubModal} />

                )
            }

        </div>
    )
}
