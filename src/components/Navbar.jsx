import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn';
import cross from '../assets/cross.svg';
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [options, setOptions] = useState(false);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);


    const navOptions = [
        {
            name: "Home",
            url: "/",
            active: true
        },
        {
            name: "Pricing",
            url: "/pricing",
            active: true
        },
        {
            name: "Account",
            url: "/account",
            active: authStatus
        },
        {
            name: "Login",
            url: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            url: "/signup",
            active: !authStatus
        }
    ];


    const onClickHandler = (url) => {
        setOptions(false);
        navigate(url);
    }



    return (
        <div className='text-gray-600 h-20 px-3 sm:px-20 flex justify-between items-center sticky top-0 z-10 shadow-lg bg-white'>
            <Link to='/' className='text-4xl w-28 h-28'>
                <img src="/logo5.png" className='object-fill' alt="" />
            </Link>
            <div className="options flex md:gap-6 text-lg z-10">
                <ul className={`navitems md:flex lg:gap-10 gap-4 ${options ? "flex flex-col gap-10 mt-48 py-6 px-2" : "hidden"}`}>
                    {navOptions.map((item, idx) => (
                        item.active && <li className=' transition px-6 py-2 hover:text-black cursor-pointer text-sm font-semibold' key={idx} onClick={() => onClickHandler(item.url)}>
                            {item.name}
                        </li>
                    ))}
                    {authStatus && <LogoutBtn />}
                </ul>
                {
                    options ? <img src={cross} className='w-8 cursor-pointer md:hidden' alt="" onClick={() => setOptions((prev) => !prev)} /> : <img src={hamburger} className='w-8 cursor-pointer  md:hidden' onClick={() => setOptions((prev) => !prev)} />
                }
            </div>
        </div>
    )
}

export default Navbar


// bg-[#0f0671]