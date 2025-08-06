import React from 'react'
import Card from './Card'
import Button1 from '../Button1'
import Button2 from '../Button2'
import { useNavigate } from 'react-router-dom'
import { Flame, Repeat, Dumbbell, HeartPulse, 
    Home, LogOut, BadgeDollarSign, PhoneCall, Mail, LifeBuoy 
  } from "lucide-react";
import CTAButtons from '../CTAButtons'


const CTA = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-6 items-center py-20'>
            {/* <h1 className='text-[#0f0671]  text-2xl text-center'>SAIKATSAHA FITNESS</h1> */}
            {/* <img src="../logo5.png" className='w-28' alt="" /> */}
            <h2 className='text-4xl font-medium lg:w-1/2 text-center'>Personalized Training</h2>
            <h3 className='  text-lg md:text-2xl'>If you want to</h3>
            <div className="info my-10 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Card h1="Lose Fat" h2="Effective workouts, calorie control">
                        <Flame className='w-6' />
                    </Card>
                    <Card h1="Build Muscles" h2="Strength training, protein rich diet">
                        <Dumbbell className='w-6' />
                    </Card>
                </div>
                <div className='space-y-12'>
                    <Card h1="Body Remcomposition" h2="Build muscles & lose fat">
                        <Repeat className='w-6' />
                    </Card>
                    <Card h1="Be Healthy & Happy" h2="Balanced  lifestyle, mental well-being">
                        <HeartPulse className='w-6' />
                    </Card>
                </div>
            </div>
            <CTAButtons />
        </div>
    )
}

export default CTA