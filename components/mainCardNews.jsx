import React from 'react'
import CardNews from './cardNews'

export default function MainCardNews() {
  return (
    <div className='m-4'>
      <h2 className='font-semibold mt-8 text-2xl'>Los periodicos más importantes</h2>
      <div className='flex justify-center items-center flex-wrap m-4'>
      <CardNews />
      </div>
    </div>
  )
}
