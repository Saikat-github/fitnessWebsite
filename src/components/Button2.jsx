import React from 'react'

const Button2 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} px-6 py-3 border-2 border-blue-700 text-blue-700 
          rounded-lg font-semibold transition-all duration-300 
          hover:bg-blue-900 hover:text-white 
          focus:outline-none focus:ring-2 focus:ring-blue-700`} {...props}>
        {children} 
        </button>
    )
}

export default Button2