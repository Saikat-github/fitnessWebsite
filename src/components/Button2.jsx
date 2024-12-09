import React from 'react'

const Button2 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} bg-blue-900 px-6 py-3 text-white 
          rounded-lg font-semibold transition-all duration-300 hover:bg-blue-800`} {...props}>
        {children} 
        </button>
    )
}

export default Button2