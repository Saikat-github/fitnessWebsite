import React from 'react'
import Button from './Button'
import banner2 from '../assets/heroimage3.webp'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate();


  return (
    <div className='flex flex-col md:flex-row bg-gray-300'>
      <img src={banner2} className='w-full md:w-1/2' alt="" />
      <div className="hero-right px-10 md:my-auto my-20 space-y-6 ">
        <div className=' text-3xl xs:text-5xl font-semibold'>
          <hr className='border-0 w-20 h-2 bg-[#0f0671] mb-6' />
          Learn the Luxury of <span className='text-blue-900'>Being Fit</span>
        </div>

        <div className='text-2xl xs:text-3xl font-semibold flex gap-6'>
          <hr className='border-0 w-1 h-10 bg-[#0f0671] ' />
          By Saikat Saha
        </div>

        <div className='flex gap-2 flex-col sm:flex-row'>
          <Button className='text-white bg-[#0f0671] py-4 hover:bg-white border hover:text-[#0f0671] font-semibold border-[#0f0671]' onClick={() => navigate("/input")} >JOIN NOW</Button>

          <Button className='text-white  py-4 hover:bg-white border font-semibold   bg-gradient-to-r from-gray-900 to-gray-400 hover:from-gray-400 hover:to-gray-900' onClick={() => navigate("/input-freesession")} >Book a Free Session</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero