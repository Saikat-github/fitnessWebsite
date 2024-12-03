import React from 'react'
import banner2 from '../assets/heroimage1.webp'
import whatsappLogo from '../assets/whatsapp.svg'
import { useNavigate } from 'react-router-dom'
import Button1 from './Button1'
import Button2 from './Button2'

const Hero = () => {
  const navigate = useNavigate();


  return (
    <div className='flex flex-col md:flex-row '>
        <img src={banner2} className='w-full md:w-1/2 opacity-80' alt="" />

      <div className="hero-right px-10 md:my-auto my-20 space-y-6 ">
        <div className=' text-4xl xs:text-6xl font-semibold'>
          <hr className='border-0 w-20 h-2 bg-gradient-to-r from-red-500 via-red-600 to-red-700 mb-6' />
          Learn the Luxury of <span className='bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent'>Being Fit</span>
        </div>

        <div className='text-2xl xs:text-3xl font-semibold flex gap-6'>
          <hr className='border-0 w-1 h-10 bg-gradient-to-r from-red-500 via-red-600 to-red-700 ' />
          By Saikat Saha
        </div>

        <div className='flex gap-2 flex-col sm:flex-row'>
          <Button1 onClick={() => navigate("/input")} >JOIN NOW</Button1>
          <Button2 onClick={() => navigate("/input-freesession")} >Book a Free Session</Button2>
        </div>
      </div>
    </div>
  )
}

export default Hero