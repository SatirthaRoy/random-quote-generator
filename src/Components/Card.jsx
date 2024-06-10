import React from 'react'
import { motion } from 'framer-motion'

const Card = ({quote, save, setSave, refetch}) => {
  return (
    <div className='p-8 rounded-xl max-w-xs mx-auto bg-blue-200 space-y-8'>
      <p  className='text-center font-medium text-xl'>{quote}</p>
      <div className='flex gap-4 justify-center'>
        <button onClick={() => setSave([...save, quote])} className='bg-blue-500 hover:scale-110 transition-all text-white p-2 rounded-lg '>Save</button>
        <button onClick={refetch} className='bg-green-700 text-white hover:scale-110 transition-all p-2 rounded-lg'>Re-generate</button>
      </div>
    </div>
  )
}

export default Card