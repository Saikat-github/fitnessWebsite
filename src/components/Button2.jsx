import React from 'react'

const Button2 = ({ children, type = "submit", className = "", ...props }) => {
  return (
<button type={type} className={`${className} px-4 py-2 rounded hover:opacity-70 transition-all duration-300 text-sm bg-slate-200 text-black`} {...props}>
{children}
</button>
  )
}

export default Button2
