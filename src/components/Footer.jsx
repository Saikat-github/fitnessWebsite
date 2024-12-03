import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import FacebookLogo from '../assets/facebook.svg';
import TwitterLogo from '../assets/twitterwhite.svg';
import Instagram from '../assets/instagramwhite.svg'
import Button1 from './Button1';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-slate-950 md:px-20 px-5 text-white'>
      <div className="footer-first py-20 flex gap-4 flex-col items-center">
        <div className='w-72'>
          <img src="/logo5.png" className='object-fill rounded-full' alt="" />
        </div>
        <h3 className='text-sm'>TAKE YOUR FIRST STEP TODAY</h3>
        <h1 className='font-semibold'>START YOUR TRANSFORMATION</h1>
        <div className='flex gap-2 flex-col sm:flex-row'>
        <Button1 onClick={() => navigate("/input")} >JOIN NOW</Button1>
        </div>
      </div>

      <div className="footer-second py-10 flex gap-20 justify-around md:flex-row flex-col">
        <div className="contact space-y-4">
          <div className='flex gap-2'>
            <hr className='border-0 w-1 h-10 bg-gradient-to-r from-red-500 via-red-600 to-red-700' />
            <h1 className='font-semibold'>Contact Us</h1>
          </div>
          <p className='text-xs sm:text-sm'>Call : +91 9635473546</p>
          <p className='text-xs sm:text-sm'>saikatservices@gmail.com</p>
        </div>
        <div className="footer-social space-y-4">
          <div className='flex gap-2'>
            <hr className='border-0 w-1 h-10 bg-gradient-to-r from-red-500 via-red-600 to-red-700' />
            <h1 className='font-semibold'>Follow Me</h1>
          </div>
          <div className='flex gap-12'>
            <a href=""><img src={FacebookLogo} alt="" className='w-6 hover:scale-105 transition-all duration-300' /></a>
            <a href="https://x.com/Saikaatsaha"><img src={TwitterLogo} alt="" className='w-6 hover:scale-105 transition-all duration-300' /></a>
            <a href="https://www.instagram.com/saikaatsaha/"><img src={Instagram} alt="" className='w-6 hover:scale-105 transition-all duration-300' /></a>
          </div>
        </div>
      </div>

      <div className="footer-third md:py-10 text-xs text-center space-y-4">
        <p>&copy; 2024 ZERODIET.IN  All Rights Reserved.</p>
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