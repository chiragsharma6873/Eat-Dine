import React from 'react'
import Animated from './Animated'
import { timingData } from '../data/data'

const Timing = () => {
  return (
    <section id='timing' className='px-auto mt-44'>
     <Animated scale={0.8} y={0} className="w-full max-w-5xl h-162.5 rounded-3xl bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-14 overflow-hidden mx-auto
     bg-[url('/assets/restro-timing.png')]">

        <div className='bg-white rounded-3xl p-8 w-full max-w-xs'>
            <Animated delay={0.2}>
                <h3 className='text-xl mb-8 font-medium'>Opening Time</h3>
            </Animated>

            <div className='space-y-7'>
                {timingData.map((item, index)=>(
                    <Animated key={index} delay={index * 0.15} className="flex justify-between items-center">
                        <span className='font-medium text-zinc-500'>{item.day}</span>
                        <span className={`font-medium ${item.hours === "closed" ? "text-zinc-400" : "text-zinc-500"}`}>{item.hours}</span>
                    </Animated>
                ))}
            </div>

            <Animated delay={0.2} className="mt-12 flex justify-center">
                <a href="#booking-process" className='bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-full transition'>
                    Book a table
                </a>
            </Animated>

        </div>

     </Animated>
    </section>
  )
}

export default Timing