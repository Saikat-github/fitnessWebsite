import React from 'react'
import formimage1 from '../../assets/myimage1.jpg'
import formimage2 from '../../assets/myimage2.png'
import formimage3 from '../../assets/myimage3.png'


const DetailsPane = () => {
    return (
        <div className='py-20 '>
            <h1 className='text-4xl font-semibold mb-10 text-center text-gray-200'>THIS IS MY STORY</h1>
            <div className='flex gap-8 md:px-20 px-5 md:flex-row flex-col'>
                <img src={formimage3} className='max-w-md object-contain rounded-lg' alt="" />
                <img src={formimage2} className='max-w-md object-contain rounded-lg' alt="" />
                <div className="details space-y-4">
                    <h2 className='text-2xl font-semibold'>I'M SAIKAT SAHA</h2>
                    <p className='text-sm'>
                        <span className='font-bold'>I wasn’t born with a great physique</span>, and from a young age, I wasn’t happy with how I looked. Growing up skinny, it always bothered me, and in my teenage years, I decided to do something about it. I wanted to build a body that I could feel confident about and be proud of. Over the past 2.5 years, I’ve dedicated myself to learning everything I could about fitness and health, and along the way, I fell in love with the process.
                    </p>
                    <p className='mt-10 text-sm'>
                        <span className='font-bold'>Fitness has never been the center of my life</span>, but it’s always been a part of it. Without having any real fitness role models, I experimented with all kinds of workouts and diets I came across online—some worked, some didn’t. All this while juggling my studies and work. Over 2.5 years, I learned how to balance everything and gradually understood the right way to build muscle and stay lean.
                    </p>
                    <p className='mt-10 text-sm'>
                        If there’s one lesson I’ve learned from these 2.5 years, it’s that consistency is key. You don’t need to revolve your life around fitness. Instead, find a routine that fits into your life.

                        <br />
                        I managed to strike that balance and live my life fully—now I’m here to help you do the same
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailsPane