import React from 'react'

const Button1 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} px-6 py-2 rounded-full text-white hover:scale-110 transition-all duration-300 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600`} {...props}>
            {children}
        </button>
    )
}

export default Button1