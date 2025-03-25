import React from 'react'

const MinimalLoader = ({className='w-4 h-4 border-2'}) => {
    return (
        <div className="flex justify-center w-full h-screen py-36">
            <div className={`relative border-blue-700 border-t-transparent rounded-full animate-spin  ${className}`}>
            </div>
        </div>
    );
};


const SmallLoader = ({className="w-4 h-4 border-2"}) => {
    return (
        <div className={`relative border-white rounded-full animate-spin border-t-transparent ${className}`}>
            </div>
    )
}


export {MinimalLoader, SmallLoader}