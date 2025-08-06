import React from 'react'
import banner2 from '../assets/heroimage1.webp'
import whatsappLogo from '../assets/whatsapp.svg'
import { useNavigate } from 'react-router-dom'
import Button1 from './Button1'
import Button2 from './Button2'
import CTAButtons from './CTAButtons'



const Hero = () => {
  const navigate = useNavigate();


  return (
    <div className='flex flex-col md:flex-row '>
        <img src={banner2} className='w-full md:w-1/2 opacity-80' alt="" />

      <div className="hero-right px-10 md:my-auto my-20 space-y-8 ">
        <div className=' text-4xl font-medium xs:text-6xl'>
          <hr className='border-0 w-20 h-2 bg-gray-200 mb-6' />
          Learn the Luxury of Being Fit
        </div>

        <div className='text-2xl xs:text-3xl flex gap-6 max-sm:mb-6'>
          <hr className='border-0 w-1 h-10 bg-gray-200 ' />
          By Saikat Saha
        </div>

        <CTAButtons />
      </div>
    </div>
  )
}

export default Hero