import React from 'react'

const Button = ({children, type="submit", className="", ...props}) => {
  return (
    <button type={type} className={` px-12 py-2 ${className} text-lg transition duration-300 max-sm:text-sm  rounded-md`} {...props}>
        {children}
    </button>
    
  )
}

export default Button