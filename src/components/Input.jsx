import React from 'react'
import { useId } from 'react';

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
    
    const id = useId();
    
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1 text-sm'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 py-1.5 text-sm bg-slate-400/10 outline-none duration-200  w-full ${className} focus:outline-none rounded`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
}

export default React.forwardRef(Input);