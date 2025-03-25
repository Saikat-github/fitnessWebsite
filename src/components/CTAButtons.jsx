import React from 'react'
import { LogIn, CalendarCheck } from 'lucide-react';
import Button1 from './Button1';
import Button2 from './Button2';
import { useNavigate } from 'react-router-dom';



const CTAButtons = () => {
  const navigate = useNavigate()
  return (
    <div className='flex gap-6 flex-col sm:flex-row'>
    <Button1 onClick={() => navigate("/input")} className='flex gap-2 items-center'>
      Join Now
      <LogIn size={24} />  
      </Button1>
    <Button2 onClick={() => navigate("/input-freesession")} className='flex gap-2'>
      Book a Free Session
      <CalendarCheck size={24} />
    </Button2>
  </div>
  )
}

export default CTAButtons