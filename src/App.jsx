import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Stats from './Components/Stats'
import Dishes from './Components/Dishes'
import Features from './Components/Features'
import BookingProcess from './Components/BookingProcess'
import Timing from './Components/Timing'
import TestimonialSection from './Components/TestimonialSection'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import LenisScroll from './Components/LenisScroll'
import { DotRingCursor } from './Components/DotRingCursor'




const App = () => {
  return (
    <>
    <DotRingCursor/>
    <LenisScroll/>
     <Navbar/>
     <HeroSection/>
     <About/>
     <Stats/>
     <Dishes/>
     <Features/>
     <BookingProcess/>
     <Timing/>
     <TestimonialSection/>
     <FAQ/>
     <Footer/>
      </>
  )
}

export default App