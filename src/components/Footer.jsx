import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FacebookLogo from '../assets/facebook.svg';
import TwitterLogo from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg'
import Button from './Button';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-300 md:px-20 px-5'>
      <div className="footer-first py-20 flex gap-4 flex-col items-center">
        <div className='text-4xl w-20'>
          <img src="/logo2.png" className='object-fill rounded-full' alt="" />
        </div>
        <h3 className='text-sm'>TAKE YOUR FIRST STEP TODAY</h3>
        <h1 className='font-semibold'>START YOUR TRANSFORMATION</h1>
        <Button onClick={() => navigate("/input")} className='bg-[#0f0671] py-4 hover:bg-white border hover:text-[#0f0671] font-semibold border-[#0f0671] transition text-white'>JOIN NOW</Button>
      </div>

      <div className="footer-second py-10 flex gap-20 justify-around md:flex-row flex-col">
        <div className="contact space-y-4">
          <div className='flex gap-2'>
            <hr className='border-0 w-1 h-10 bg-[#0f0671]' />
            <h1 className='font-semibold'>Contact Us</h1>
          </div>
          <p className='text-xs sm:text-sm'>Call : +91 9999999999</p>
          <p className='text-xs sm:text-sm'>sahasaikat782@gmail.com</p>
        </div>
        <div className="footer-social space-y-4">
          <div className='flex gap-2'>
            <hr className='border-0 w-1 h-10 bg-[#0f0671]' />
            <h1 className='font-semibold'>Follow Me</h1>
          </div>
          <div className='flex gap-12'>
            <a href=""><img src={FacebookLogo} alt="" className='w-6' /></a>
            <a href="https://x.com/Saikaatsaha"><img src={TwitterLogo} alt="" className='w-6' /></a>
            <a href="https://www.instagram.com/saikaatsaha/"><img src={Instagram} alt="" className='w-6' /></a>
          </div>
        </div>
      </div>

      <div className="footer-third md:py-10 text-xs text-center space-y-4">
        <p>&copy; 2024 SAIKATSAHA FITNESS. All Rights Reserved.</p>
        <div className="details-terms flex gap-8 justify-center ">
          <Link className='hover:underline'>Privacy Policy</Link>
          <Link className='hover:underline'>Terms of Services</Link>
          <Link className='hover:underline'>Contact</Link>
        </div>
      </div>
    </div>

  )
}

export default Footer