import React from 'react'
import Info from './Info'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-6 items-center my-20'>
            <h1 className='text-[#0f0671] font-semibold text-2xl text-center'>SAIKATSAHA FITNESS</h1>
            <h2 className='md:text-4xl font-semibold lg:w-1/2 text-center'>Personalized workout routines and diet plan delivered via <span className='text-[#08BF62]'>WhatsApp</span></h2>
            <h3 className='font-semibold  text-lg md:text-2xl'>If you want to</h3>
            <div className="info my-10 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="LOSE FAT" h2="Effective workouts, calorie control" h2color={"bg-red-700"} className='shadow-black'/>
                    <Info h1="BUILD MUSCLES" h2="Strength training, protein rich diet" h2color={"bg-red-700"} className='shadow-black'/>
                </div>
                <div className='space-y-12'>
                    <Info h1="BODY RECOMPOSITION" h2="Build muscles & lose fat" h2color={"bg-red-700"} className='shadow-black'/>
                    <Info h1="BE HEALTHY & HAPPY" h2="Balanced  lifestyle, mental well-being" h2color={"bg-red-700"} className='shadow-black'/>
                </div>
            </div>
            <div className='flex gap-2 flex-col sm:flex-row'>
          <Button className='text-white bg-[#0f0671] py-4 hover:bg-white border hover:text-[#0f0671] font-semibold border-[#0f0671]' onClick={() => navigate("/input")} >JOIN NOW</Button>

          <Button className='text-white  py-4 hover:bg-white border font-semibold   bg-gradient-to-r from-gray-900 to-gray-400 hover:from-gray-400 hover:to-gray-900' onClick={() => navigate("/input-freesession")} >Book a Free Session</Button>
        </div>
        </div>
    )
}

export default CTA