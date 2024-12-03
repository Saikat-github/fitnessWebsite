import React from 'react'

const Button1 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} font-semibold px-6 py-3 bg-gray-950 text-white 
          rounded-lg transition-all duration-300 
          hover:bg-gray-900  flex items-center gap-2 border-2 focus:outline-none focus:ring-2 focus:ring-white `} {...props}>
            {children}
        </button>
    )
}

export default Button1