import React from 'react'

const Button1 = ({children, type="submit", className="", ...props}) => {
    return (
        <button type={type} className={`${className} px-6 py-2 rounded-full  hover:scale-110 transition-all duration-300 border-2`} {...props}>
            {children}
        </button>
    )
}

export default Button1