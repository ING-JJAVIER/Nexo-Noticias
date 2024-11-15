'use client'
import Header from '@/components/header';
import { useState } from 'react';
import { faqs } from '@/utils/faqs';
export default function Faq() {
  
    return (
        <>
        <Header hideSearch={true}/>
        <div className="max-w-2xl mx-auto p-4 bg-[#e0e7ff]">
            <h1 className="text-3xl font-bold text-center mb-6 ">Preguntas Frecuentes (FAQ)</h1>
            {
                faqs?.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
        </div>
        </>
    );
}


function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 border rounded-lg shadow ">
            <button
                className="flex justify-between items-center w-full p-4 text-left text-lg font-semibold rounded-xl bg-[#1f2937] text-[#99a0ac]"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                {question}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && (
                <div className="p-4 text-slate-700 bg-[#1f293737] rounded-b-xl">
                    {answer}
                </div>
            )}
        </div>
    );
}