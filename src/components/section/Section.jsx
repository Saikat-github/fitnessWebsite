import React from 'react'
import Button from '../Button'
import formimage2 from '../../assets/formimage-2.png'
import logo from '../../assets/logo5.png'
import Info from './Info'
import { useNavigate } from 'react-router-dom'

const Section = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col gap-6 items-center my-20'>
            <div className='my-10 flex flex-col items-center'>
                <img src={logo} className='w-72' alt="" />
                <h2 className='text-4xl font-semibold mb-8 text-center'>Exclusive Membership</h2>
                <img src={formimage2} alt="" />

            </div>
            <div className="info my-16 sm:my-28 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="WORKOUTS" h2="Customized Workout Plans" h2color={"bg-[#0f0671]"} />
                    <Info h1="NUTRITION" h2="Delicious meal recipes & nutrition planning" h2color={"bg-[#0f0671]"} />
                </div>
                <div className='space-y-12'>
                    <Info h1="HABITS" h2="Daily habit tracking" h2color={"bg-[#0f0671]"} />
                    <Info h1="ACCOUNTABILIY" h2="Weekly check-ins through WhatsApp" h2color={"bg-[#0f0671]"} />
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

export default Section