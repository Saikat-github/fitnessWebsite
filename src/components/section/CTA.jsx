import React from 'react'
import Info from './Info'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import whatsappLogo from "../../assets/whatsapp.svg"

const CTA = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-6 items-center my-20'>
            {/* <h1 className='text-[#0f0671] font-semibold text-2xl text-center'>SAIKATSAHA FITNESS</h1> */}
            {/* <img src="../logo5.png" className='w-28' alt="" /> */}
            <h2 className='md:text-4xl font-semibold lg:w-1/2 text-center flex gap-2 items-center'>Personalized workout routines and diet plan delivered via
                <img src={whatsappLogo} className='w-16' alt="" /></h2>
            <h3 className='font-semibold  text-lg md:text-2xl'>If you want to</h3>
            <div className="info my-10 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="LOSE FAT" h2="Effective workouts, calorie control" h2color={"bg-red-700"} />
                    <Info h1="BUILD MUSCLES" h2="Strength training, protein rich diet" h2color={"bg-red-700"} />
                </div>
                <div className='space-y-12'>
                    <Info h1="BODY RECOMPOSITION" h2="Build muscles & lose fat" h2color={"bg-red-700"} />
                    <Info h1="BE HEALTHY & HAPPY" h2="Balanced  lifestyle, mental well-being" h2color={"bg-red-700"} />
                </div>
            </div>
            <div className='flex gap-2 flex-col sm:flex-row'>
                <Button className='text-white bg-gray-900 py-4 hover:bg-white border hover:text-gray-900 font-semibold border-gray-900
          ' onClick={() => navigate("/input")} >JOIN NOW</Button>

                <Button className='text-white  py-4 border border-gray-900 font-semibold bg-gray-900 hover:bg-white hover:text-gray-900 transition-all duration-300' onClick={() => navigate("/input-freesession")} >Book a Free Session</Button>
            </div>
        </div>
    )
}

export default CTA