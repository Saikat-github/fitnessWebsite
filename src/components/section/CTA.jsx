import React from 'react'
import Info from './Info'
import Button1 from '../Button1'
import Button2 from '../Button2'
import { useNavigate } from 'react-router-dom'
import whatsappLogo from "../../assets/whatsapp.svg"
import person from "../../assets/person-running-solid.svg"
import scale from "../../assets/scale-balanced-solid.svg"
import heart from "../../assets/heart-pulse-solid.svg"
import facesmile from "../../assets/face-smile-beam-solid.svg"

const CTA = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-6 items-center py-20'>
            {/* <h1 className='text-[#0f0671] font-semibold text-2xl text-center'>SAIKATSAHA FITNESS</h1> */}
            {/* <img src="../logo5.png" className='w-28' alt="" /> */}
            <h2 className='md:text-4xl font-semibold lg:w-1/2 text-center'>Personalized workout routines and diet plan delivered via <span className='font-bold'>WhatsApp</span></h2>
            <h3 className='font-semibold  text-lg md:text-2xl'>If you want to</h3>
            <div className="info my-10 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="LOSE FAT" h2="Effective workouts, calorie control" h2color={"bg-red-700"} img={heart}/>
                    <Info h1="BUILD MUSCLES" h2="Strength training, protein rich diet" h2color={"bg-red-700"} img={person}/>
                </div>
                <div className='space-y-12'>
                    <Info h1="BODY RECOMPOSITION" h2="Build muscles & lose fat" h2color={"bg-red-700"} img={scale}/>
                    <Info h1="BE HEALTHY & HAPPY" h2="Balanced  lifestyle, mental well-being" h2color={"bg-red-700"} img={facesmile}/>
                </div>
            </div>
            <div className='flex gap-2 flex-col sm:flex-row'>
                <Button1 onClick={() => navigate("/input")} >JOIN NOW</Button1>
                <Button2 onClick={() => navigate("/input-freesession")} >Book a Free Session</Button2>
            </div>
        </div>
    )
}

export default CTA