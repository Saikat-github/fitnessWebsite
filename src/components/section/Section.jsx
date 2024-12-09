import React from 'react'
import Button1 from '../Button1'
import Button2 from '../Button2'
import formimage2 from '../../assets/formimage-2.png'
import logo from '../../assets/logo6.png'
import dumbbell from '../../assets/dumbbell-solid.svg'
import apple from '../../assets/apple-whole-solid.svg'
import clipboard from '../../assets/clipboard-list-solid.svg'
import user from '../../assets/user-check-solid.svg'
import Info from './Info'
import { useNavigate } from 'react-router-dom'


const Section = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-6 items-center my-10'>
            <div className='mb-10 flex flex-col items-center'>
                <img src={logo} className='w-72' alt="" />
                <h2 className='text-4xl font-semibold mb-8 text-center text-gray-200'>Exclusive Membership</h2>
                <img src={formimage2} alt="" />

            </div>
            <div className="info my-12 sm:my-20 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="WORKOUTS" h2="Customized Workout Plans" h2color={"bg-[#0f0671]"} img={dumbbell}/>
                    <Info h1="NUTRITION" h2="Delicious meal recipes & nutrition planning" h2color={"bg-[#0f0671]"} img={apple}/>
                </div>
                <div className='space-y-12'>
                    <Info h1="HABITS" h2="Daily habit tracking" h2color={"bg-[#0f0671]"} img={clipboard}/>
                    <Info h1="ACCOUNTABILIY" h2="Weekly check-ins through WhatsApp" h2color={"bg-[#0f0671]"} img={user}/>
                </div>
            </div>

            <div className='flex gap-2 flex-col sm:flex-row'>
            <Button1 onClick={() => navigate("/input")} >JOIN NOW</Button1>
            <Button2 onClick={() => navigate("/input-freesession")} >Book a Free Session</Button2>
            </div>
        </div>
    )
}

export default Section