import React from 'react'

const Button2 = ({ children, type = "submit", className = "", ...props }) => {
  return (
<button type={type} className={`${className} px-4 py-2 rounded-full  hover:scale-110 transition-all duration-300 border border-gray-300 text-sm bg-black/50`} {...props}>
{children}
</button>
  )
}

export default Button2
