'use client'
import React, { useState } from 'react'
import Header from '@/components/header'
import ModalSearch from '@/components/modalSearch'
import Carousel from '@/components/carousel'
import MainCardNews from '@/components/mainCardNews'
import MainCardVideo from '@/components/mainCardVideo'
import ModalSupport from '@/components/modalSupport'
import Footer from '@/components/footer'


export default function Home() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <div className=''>
      <Header openModal={openModal} />

      {
        modal &&
        <ModalSearch closeModal={closeModal} />
      }
      <Carousel />
      <MainCardNews />
      <MainCardVideo />
      <ModalSupport />
      <Footer />
    </div>
  )
}
