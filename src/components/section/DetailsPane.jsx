import React from 'react'
import myImage1 from '../../assets/myimage1.webp'
import myImage2 from '../../assets/myimage2.webp'
import myImage3 from '../../assets/myimage3.webp'
import myImage4 from '../../assets/myimage4.webp'
import { ArrowDown, ArrowRight, Instagram } from 'lucide-react'


const DetailsPane = () => {
    return (
        <div className='py-20'>
            <h2 className='text-4xl font-medium mb-12 text-center'>This is My Story</h2>
            <div className='flex gap-12 md:gap-20 md:px-20 px-5 flex-col justify-center items-center'>
                <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10'>
                    <img src={myImage3} className='max-w-md object-contain rounded-lg max-sm:w-60 h-80' alt="" />
                    <ArrowDown className='md:hidden' />
                    <ArrowRight className='max-md:hidden' />
                    <img src={myImage4} className='max-w-md object-contain rounded-lg max-sm:w-60 h-80' alt="" />
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-2 md:gap-10'>
                    <img src={myImage1} className='max-w-md object-contain rounded-lg max-sm:w-60 h-[500px]' alt="" />
                    <ArrowDown className='md:hidden' />
                    <ArrowRight className='max-md:hidden' />
                    <img src={myImage2} className='max-w-md object-contain rounded-lg max-sm:w-60 h-[500px]' alt="" />
                </div>

                {/* Visit Instagram button */}
                <a
                    href="https://www.instagram.com/saikaatsaha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-2 rounded px-3 py-1.5 text-sm hover:bg-transparent transition-all duration-300 bg-slate-400/20'
                >
                    <Instagram className="w-6 h-6 hover:scale-105 transition duration-200 text-pink-600" />
                    Visit My Instagram
                    <ArrowRight className='text-gray-400'/>
                </a>

                <div className="details space-y-4">
                    <h2 className='text-xl font-semibold'>I'M SAIKAT SAHA</h2>
                    <p className='text-xs '>
                        <span className='font-bold'>I wasn’t born with a great physique</span>, and from a young age, I wasn’t happy with how I looked. Growing up skinny, it always bothered me, and in my teenage years, I decided to do something about it. I wanted to build a body that I could feel confident about and be proud of. Over the past 3 years, I’ve dedicated myself to learning everything I could about fitness and health, and along the way, I fell in love with the process.
                    </p>
                    <p className='mt-10 text-xs '>
                        <span className='font-bold'>Fitness has never been the center of my life</span>, but it’s always been a part of it. Without having any real fitness role models, I experimented with all kinds of workouts and diets I came across online—some worked, some didn’t. All this while juggling my studies and work. Over 2.5 years, I learned how to balance everything and gradually understood the right way to build muscle and stay lean.
                    </p>
                    <p className='mt-10 text-xs '>
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