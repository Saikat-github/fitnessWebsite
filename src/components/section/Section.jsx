import React from 'react'
import Button from '../Button'
import formimage2 from '../../assets/formimage-2.png'
import Info from './Info'
import { useNavigate } from 'react-router-dom'

const Section = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='my-10 flex flex-col items-center'>
                <h1 className='text-[#0f0671] text-2xl my-4 font-semibold text-center'>SAIKATSAHA FITNESS</h1>
                <h2 className='text-4xl font-semibold mb-8 text-center'>Exclusive Membership</h2>
                <img src={formimage2} alt="" />
                <div className='flex gap-2 flex-col sm:flex-row'>
                    <Button className='text-white bg-[#0f0671] py-4 hover:bg-white border hover:text-[#0f0671] font-semibold border-[#0f0671]' onClick={() => navigate("/input")} >JOIN NOW</Button>

                    <Button className='text-white  py-4 hover:bg-white border font-semibold   bg-gradient-to-r from-gray-900 to-gray-400 hover:from-gray-400 hover:to-gray-900' onClick={() => navigate("/input-freesession")} >Book a Free Session</Button>
                </div>
            </div>
            <div className="info my-28 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="WORKOUTS" h2="Customized Workout Plans" h2color={"bg-[#0f0671]"} className=' shadow-blue-700' />
                    <Info h1="NUTRITION" h2="Delicious meal recipes & nutrition planning" h2color={"bg-[#0f0671]"} className=' shadow-blue-700' />
                </div>
                <div className='space-y-12'>
                    <Info h1="HABITS" h2="Daily habit tracking" h2color={"bg-[#0f0671]"} className=' shadow-blue-700' />
                    <Info h1="ACCOUNTABILIY" h2="Weekly check-ins through WhatsApp" h2color={"bg-[#0f0671]"} className=' shadow-blue-700' />
                </div>
            </div>
        </div>
    )
}

export default Section