'use client'
import React, { useState } from 'react'
import Header from '@/components/header'
import ModalSearch from '@/components/ModalSearch'
import Carousel from '@/components/carousel'
import MainCardNews from '@/components/mainCardNews'
import MainCardArticles from '@/components/mainCardArticles'
import ModalSupport from '@/components/modalSupport'
import Footer from '@/components/footer'

export default function Home() {
  const [modal, setModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('');

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    closeModal();
  };

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <Header openModal={openModal} />
      {
        modal && <ModalSearch closeModal={closeModal} onSearch={handleSearch} onLanguageChange={handleLanguageChange} language={language} />
      }
      <Carousel />
      <MainCardNews searchQuery={searchQuery} language={language} />
      <MainCardArticles />
      <ModalSupport />
      <Footer />
    </div>
  );
}
