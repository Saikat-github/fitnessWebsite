import React from 'react'
import banner2 from '../assets/heroimage2.webp'
import { useNavigate } from 'react-router-dom'
import CTAButtons from './CTAButtons'



const Hero = () => {
  const navigate = useNavigate();


  return (
    <div className="bg-cover bg-center bg-no-repeat relative sm:h-screen"
      style={{ backgroundImage: `url(${banner2})` }}>

      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10hero-right px-10 flex flex-col gap-12 justify-center h-full max-sm:py-10 max-sm:items-center">
        <span className='text-5xl sm:text-6xl font-bold'>
          Learn the Luxury of Being Fit
        </span>

        <span className='text-2xl xs:text-3xl flex gap-6 max-sm:mb-6 font-semibold'>
          By Saikat Saha
        </span>

        <CTAButtons />
      </div>
    </div>
  )
}

export default Hero