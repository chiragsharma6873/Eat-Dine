
import React from 'react'
import Animated from './Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../data/data'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='px-auto relative mt-44 overflow-hidden'>
        <div className='max-w-7xl mx-auto'>
         <div className='flex flex-wrap gap-6 justify-between pb-8'>
            {/* col-1 */}
            <div className='flex flex-col item-start text-left'>
                <Animated>
                    <img src="/assets/nav-img.png" alt="logo"  className='h-22 w-23 object-contain pb-0.5'/>
                </Animated>
                <Animated delay={0.2}>
                   <p className='mt-3 text-sm/5.5 text-zinc-600 max-w-81.25'>
                   Serving freshly prepared dishes with authentic flavour, premium ingredients and exceptional hospitality every day.
                   </p>
                </Animated>
                <div className='flex item-center gap-1.5 mt-6'>
                    {socialLinks.map((item, index )=>(
<Animated key={index} delay={index * 0.05}>
    <a href={item.href} className='size-7.5 rounded-full border border-slate-300 grid place-content-center'>{item.icon}</a>
</Animated>
                    ))}
                </div>
            </div>


         <div>
            <p className='font-medium mb-5'>Quick Links</p>
            <div className='flex flex-col gap-2.5'>
                {quickLinks.map((link, index)=>(
                    <Animated key={link.name} delay={index * 0.05}>
                        <a href={link.href} className='text-zinc-600 hover:text-zinc-500'>{link.name}</a>
                    
                    </Animated>
                ))}
            </div>
         </div>

<div>
    <p className='font-medium mb-5'>Get In Touch</p>
    <div className='space-y-2'>
        <Animated> 
            <a href="mailto:Eat&dine@gmail.com" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                <Mail size={16}  className='shrink-0'/>
                Eat&dine@gmail.com</a>
        </Animated>
        <Animated delay={0.2}> 
            <a href="tel:677-584-3473" className='flex items-center gap-1 text-zinc-600 hover:text-zinc-500'>
                <Phone size={16}  className='shrink-0'/>
                677-584-3473</a>
        </Animated>
    </div>
</div>
           <div>
            <p className='font-medium mb-5'>SiteMap</p>
            <div className='flex flex-col gap-2.5'>
                {sitemapLinks.map((link, index)=>(
                    <Animated key={link.name} delay={index * 0.05}>
                        <a href={link.href}>{link.name}</a>
                    </Animated>
                ))}
            </div>
           </div>
{/*  */}
<div className='border-t text-zinc-500 border-slate-200 py-4.5 flex justify-between items-center'>
    <p>@2026. All Right Reserved</p>
    <p>Designed by CHIRAG SHARMA</p>

</div>
         </div>
        </div>
    </footer>
    
  )
}

export default Footer