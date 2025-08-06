import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Instagram, Twitter, Facebook, UserCog } from "lucide-react";
import Button1 from './Button1';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='border-t md:px-20 px-5'>
      <div className="footer-first py-20 flex gap-4 flex-col items-center text-xs">
        <div className='w-72'>
          <img src="/logo6.png" className='object-fill rounded-full' alt="" />
        </div>
        <h3 className='text-sm'>TAKE YOUR FIRST STEP TODAY</h3>
        <h1 className='font-medium'>START YOUR TRANSFORMATION</h1>
        <div className='flex gap-2 flex-col sm:flex-row'>
          <Button1 onClick={() => navigate("/input")} >JOIN NOW</Button1>
        </div>
      </div>

      <div className="footer-second py-10 flex gap-20 justify-around md:flex-row flex-col">
        <div className="contact space-y-4">
          <div className='flex gap-2'>
            <hr className='border-0 w-1 h-10 bg-gray-200' />
            <h1 className='font-semibold'>Contact Us</h1>
          </div>
          <p className='text-xs sm:text-sm'>Call : +91 9635473546</p>
          <p className='text-xs sm:text-sm'>saikatservices@gmail.com</p>
          <p>
            <a
              href="https://fitness-website-admin.vercel.app/login"
              className='text-xs sm:text-sm text-blue-600'
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Admin Panel
            </a>
          </p>
        </div>


        <div className="footer-social space-y-4">
          <div className='flex gap-2'>
            <hr className='border-0 w-1 h-10 bg-gray-200' />
            <h1 className='font-semibold'>Follow Me</h1>
          </div>
          <div className='flex gap-12'>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 hover:scale-105 transition duration-200 text-blue-600" />
            </a>
            <a
              href="https://x.com/Saikaatsaha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-6 h-6 hover:scale-105 transition duration-200 text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/saikaatsaha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:scale-105 transition duration-200 text-pink-600" />
            </a>

          </div>
        </div>
      </div>

      <div className="footer-third md:py-10 text-xs text-center space-y-4">
        <p>&copy; {new Date().getFullYear()} zerodiet.in All Rights Reserved.</p>
        <div className="details-terms flex gap-8 justify-center ">
          <Link className='hover:underline' to="/privacy">Privacy Policy</Link>
          <Link className='hover:underline' to="/terms" >Terms of Services</Link>
        </div>
      </div>
    </div>

  )
}

export default Footer