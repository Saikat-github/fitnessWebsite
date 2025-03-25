import React from 'react'


  


const Card = ({h1, h2, className='', children}) => {
  return (
    <div className={` bg-gray-950 h-40 w-72 text-center rounded-lg ${className} shadow shadow-blue-700`}>
        <h1 className={`text-lg py-2 px-2 rounded-t-lg flex gap-4 justify-center items-center text-pink-600`}>
            {h1} 
            {children}
        </h1>
        <h2 className='mt-6 text-sm'>{h2}</h2>
    </div>
  )
}

export default Card