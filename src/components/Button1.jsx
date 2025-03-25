import React from 'react'

const Button1 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} px-6 py-2 rounded-full text-white border border-[#4d4dff] shadow shadow-blue-700 hover:scale-110 transition-all duration-300`} {...props}>
            {children}
        </button>
    )
}

export default Button1