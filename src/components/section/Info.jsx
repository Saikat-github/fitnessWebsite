import React from 'react'

const Info = ({h1, h2, className='', h2color, img}) => {
  return (
    <div className={` bg-gray-950 h-40 w-72  text-center shadow-lg rounded-lg ${className}`}>
        <h1 className={`text-xl font-semibold py-2 px-2 text-gray-950 rounded-t-lg bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 flex gap-4 justify-center items-center`}>{h1} <img src={img} alt="" className='w-8'/></h1>
        <h2 className='mt-6'>{h2}</h2>
    </div>
  )
}

export default Info