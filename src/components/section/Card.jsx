import React from 'react'


  


const Card = ({h1, h2, className='', children}) => {
  return (
    <div className={` h-40 w-72 text-center rounded ${className} bg-slate-400/20 transition-all duration-300`}>
        <h1 className={`text-lg py-2 px-2 rounded-t flex gap-4 justify-center items-center bg-gray-200 text-black font-semibold`}>
            {h1} 
            {children}
        </h1>
        <h2 className='mt-6 text-sm'>{h2}</h2>
    </div>
  )
}

export default Card