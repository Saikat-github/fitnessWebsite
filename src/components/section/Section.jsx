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
                <Button onClick={() => navigate("/input")} className='bg-[#0f0671] py-4 hover:bg-white border hover:text-[#0f0671] font-semibold border-[#0f0671] transition text-white'>JOIN NOW</Button>
            </div>
            <div className="info my-28 flex flex-wrap gap-12 justify-center">
                <div className='space-y-12'>
                    <Info h1="WORKOUTS" h2="Customized Workout Plans" h2color={"bg-[#0f0671]"} className=' shadow-blue-700'/>
                    <Info h1="NUTRITION" h2="Delicious meal recipes & nutrition planning"  h2color={"bg-[#0f0671]"} className=' shadow-blue-700'/>
                </div>
                <div className='space-y-12'>
                    <Info h1="HABITS" h2="Daily habit tracking" h2color={"bg-[#0f0671]"} className=' shadow-blue-700'/>
                    <Info h1="ACCOUNTABILIY" h2="Weekly check-ins through WhatsApp" h2color={"bg-[#0f0671]"} className=' shadow-blue-700'/>
                </div>
            </div>
        </div>
    )
}

export default Section