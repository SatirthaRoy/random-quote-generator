import { useState } from 'react'
import Card from './Components/Card'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion';

function App() {
  const [save, setSave] = useState('');
  const {data:quote=[], refetch} = useQuery({
    queryKey: ['quote'],
    queryFn: async() => {
      const res = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      const data = res.json();
      return data;
    }
  })
  return (
    <div className='space-y-6 grid place-content-center w-11/12 mx-auto'>
      <h1 className='text-center text-4xl font-semibold'>Random Quotes Generator</h1>
      <Card refetch={refetch} quote={quote[0]} save={save} setSave={setSave}/>
      <div className='space-y-4 flex flex-col'>
        {save.length && <>{save.map((item, i) => {
          return <motion.p initial={{scale: 0}} animate={{scale: 1}} className='p-2 rounded-xl border border-black' key={i}>{item}</motion.p>
        })}</>}
      </div>
    </div>
  )
}

export default App
