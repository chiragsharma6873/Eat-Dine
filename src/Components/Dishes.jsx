import React, { useState } from 'react'
import Animated from './Animated'
import { dishes } from '../data/data'
import {motion} from 'motion/react'


const Dishes = () => {

const [rotate, setrotate] = useState({});


  return (
    <section id='dishes' className='px-auto mt-44'>
        <div className="text-center mb-16">
            <Animated delay={0.2}>
              <p className='text-orange-500 font-medium uppercase mb-3.5'>
                Chef's Signature Selection 
              </p>
           </Animated>

            <Animated >
              <h2 className='text-4xl md:text-5xl max-w-lg mx-auto text-balance'>
                Discover Our Signature Dishes
              </h2>
            </Animated>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto'>
            {dishes.map((dish, index)=>(
                 <Animated key={index} y={80} delay={index * 0.1} className='flex flex-col items-center text-center shrink-0 cursor-pointer' onMouseEnter={() =>setrotate((prev)=>({...prev, [index]: (prev[index]  || 0) + 180}))}>
                 <motion.div animate={{rotate: rotate[index] || 0}} 
                 transition={{type: "spring", stiffness: 80, damping:15}}>
                   <img src={dish.img} alt={dish.title} className='size-30 md:size-35 object-cover' />
                 </motion.div>
                     <h3 className='mt-5'>{dish.title}</h3>
                     <p className='mt-2 text-zinc-600'>{dish.price}</p>
                 </Animated>
            ))}

        </div>
    </section>
  )
}

export default Dishes