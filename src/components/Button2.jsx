import React from 'react'

const Button2 = ({ children, type = "submit", className = "", ...props }) => {
  return (
<button type={type} className={`${className} px-6 py-2 rounded-full text-white border-2 hover:scale-110 transition-all duration-300`} {...props}>
{children}
</button>
  )
}

export default Button2
