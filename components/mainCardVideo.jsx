import React from 'react'
import CardVideo from '@/components/cardVideo'

export default function MainCardVideo() {
  return (
    <div className='m-4'>
      <h2 className='font-semibold text-2xl mt-8'>Noticieros en directo</h2>

      <div className='flex justify-center items-center flex-wrap m-4
      '>
      <CardVideo />
      </div>
      
    </div>
  )
}