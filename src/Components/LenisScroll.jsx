import React, { useEffect } from 'react'
import Lenis from 'lenis'

const LenisScroll = () => {
    useEffect(()=>{
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syntouch: false,
            anchors:{
                offset: -120
            },
        })

        const raf = (time)=>{
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return()=>{
            lenis.destroy()
        }
    },[])


  return null
}

export default LenisScroll