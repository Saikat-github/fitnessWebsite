import React from 'react'

const Button1 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} font-semibold px-6 py-3 bg-gray-950 text-red-600 
          rounded-lg transition-all duration-300  
          hover:bg-black  flex items-center gap-2`} {...props}>
            {children}
        </button>
    )
}

export default Button1