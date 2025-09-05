import React from 'react'

const Button2 = ({ children, type = "submit", className = "", ...props }) => {
  return (
<button type={type} className={`${className} px-4 py-1 rounded-full transition-all duration-300 text-sm border border-white/30 bg-white/10 hover:bg-white/15`} {...props}>
{children}
</button>
  )
}

export default Button2
