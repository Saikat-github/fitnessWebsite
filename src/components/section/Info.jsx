import React from 'react'

const Info = ({h1, h2, className='', h2color}) => {
  return (
    <div className={`h-40 w-72 border border-black text-center shadow-lg shadow-blue-700 rounded-lg ${className}`}>
        <h1 className={`text-2xl font-semibold py-2 text-white rounded-t-lg ${h2color}`}>{h1}</h1>
        <h2 className='mt-6'>{h2}</h2>
    </div>
  )
}

export default Info