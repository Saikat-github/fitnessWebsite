import React from 'react'

const Info = ({h1, h2, className='', h2color}) => {
  return (
    <div className={` bg-gray-950 h-40 w-72  text-center shadow-lg rounded-lg ${className}`}>
        <h1 className={`text-2xl font-semibold py-2 text-white rounded-t-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-4 hover:from-purple-600 hover:via-pink-600 hover:to-red-600`}>{h1}</h1>
        <h2 className='mt-6'>{h2}</h2>
    </div>
  )
}

export default Info