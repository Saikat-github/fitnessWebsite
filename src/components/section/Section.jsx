import React from 'react'
import Button1 from '../Button1'
import Button2 from '../Button2'
import formimage2 from '../../assets/formimage-2.webp'
import logo from '../../assets/logo6.png'
import dumbbell from '../../assets/dumbbell-solid.svg'
import apple from '../../assets/apple-whole-solid.svg'
import clipboard from '../../assets/clipboard-list-solid.svg'
import user from '../../assets/user-check-solid.svg'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import CTAButtons from '../CTAButtons'
import { Dumbbell, CheckCircle, Utensils, Users } from "lucide-react";



const Section = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-6 items-center my-10'>
            <div className='mb-10 flex flex-col items-center'>
                <img src={logo} className='w-72' alt="" />
                <h2 className='text-4xl font-medium mb-8 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent'>Exclusive Membership</h2>
                <img src={formimage2} alt="" />

            </div>
            <div className="info my-12 sm:my-20 flex flex-wrap gap-12 md:gap-20 justify-center">
                <div className='space-y-12 md:space-y-20'>
                    <Card h1="Workouts" h2="Customized Workout Plans" h2color={"bg-[#0f0671]"} img={dumbbell}>
                        <Dumbbell className='w-6' />
                    </Card>
                    <Card h1="Nutrition" h2="Delicious meal recipes & nutrition planning" h2color={"bg-[#0f0671]"} img={apple}>
                        <Utensils className='w-6' />
                    </Card>
                </div>
                <div className='space-y-12 md:space-y-20'>
                    <Card h1="Habits" h2="Daily habit tracking" h2color={"bg-[#0f0671]"} img={clipboard}>
                        <CheckCircle className='w-6' />
                    </Card>
                    <Card h1="Accontability" h2="Weekly check-ins through WhatsApp" h2color={"bg-[#0f0671]"} img={user}>
                        <Users className='w-6' />
                    </Card>
                </div>
            </div>

            <CTAButtons />
        </div>
    )
}

export default Section