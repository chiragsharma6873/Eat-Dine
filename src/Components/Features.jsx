import React from 'react'
import Animated from './Animated'
import { featuresData } from '../data/data'
import { ChefHat, Heart, Leaf } from 'lucide-react'


const iconMap ={
    ChefHat,
    Leaf,
    Heart
}

const Features = () => {
  return (
    <section id='features' className='px-auto mt-44'>
       <div className="text-center mb-16">
            <Animated delay={0.2}>
              <p className='text-orange-500 font-medium uppercase mb-3.5'>
                What Sets Us Apart
              </p>
           </Animated>

            <Animated delay={0.2}>
              <h2 className='text-4xl md:text-5xl max-w-lg mx-auto text-balance'>
                Crafting memorable dining experience
              </h2>
            </Animated>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto'>
            <div className='space-y-10 max-w-md'>
                {featuresData.map((item, index)=>{
                    const IconComponent = iconMap[item.icon];
                    return(
                        <Animated key={index} y={150} delay={index * 0.15} className="flex items-start gap-4 text-left">
                            {IconComponent && (
                                <IconComponent className="text-orange-500 size-5 shrink-0 mt-0.5"/>

                            )}
                            <div>
                                <h3 className='text-xl mb-2'>
                                    {item.title}
                                </h3>
                                <p className='text-zinc-600 max-w-sm'>
                                    {item.description}
                                </p>
                            </div>

                        </Animated>

                    )
                })}
            </div>
            <div>
                <Animated x={50} y={0}>
                <img src="/assets/chef-img.png" alt="chef" className='w-full max-w-sm h-111 object-cover rounded-3xl' />
                </Animated>
            </div>
        </div>
    </section>
  )
}

export default Features