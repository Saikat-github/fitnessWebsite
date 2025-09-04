import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn';
import cross from '../assets/cross.svg';
import hamburger from '../assets/hamburger.svg'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Home, DollarSign, User, LogOut } from "lucide-react";


const Navbar = () => {
    const [showBar, setShowBar] = useState(false);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);


    const navOptions = [
        {
            name: "Home",
            url: "/",
            active: true,
            icon: <Home />
        },
        {
            name: "Pricing",
            url: "/pricing",
            active: true,
            icon: <DollarSign />
        },
        {
            name: "Account",
            url: "/account",
            active: authStatus,
            icon: <User />
        },
        {
            name: "Login",
            url: "/login",
            active: !authStatus,
            icon: <LogOut />
        },
        // {
        //     name: "Signup",
        //     url: "/signup",
        //     active: !authStatus
        // }
    ];


    const onClickHandler = (url) => {
        setShowBar(false);
        navigate(url);
    }



    return (
        <div className=' h-20 px-3 sm:px-20 flex justify-between items-center sticky top-0 z-10 py-12 text-gray-200 backdrop-blur-lg'>
            <Link to='/' className='text-4xl w-28 h-28'>
                <img src="/logo6.png" className='object-fill' alt="" />
            </Link>
            <div className="showBar flex md:gap-6 text-lg z-10">
                <ul className={`navitems md:flex lg:gap-10 gap-2 ${showBar ? "flex flex-col gap-10 mt-48 py-6 px-2 bg-black z-10 backdrop-blur-md rounded-lg" : "hidden"}`}>
                    {navOptions.map((item, idx) => (
                        item.active && <li className=' transition px-4 py-2 hover:text-white cursor-pointer text-sm flex items-center gap-2' key={idx} onClick={() => onClickHandler(item.url)}>
                            {item.icon}
                            {item.name}
                        </li>
                    ))}
                    {authStatus && <LogoutBtn setShowBar={setShowBar} />}
                </ul>
                {
                    showBar ? <img src={cross} className='w-6 cursor-pointer md:hidden' alt="" onClick={() => setShowBar((prev) => !prev)} /> : <img src={hamburger} className='w-6 cursor-pointer  md:hidden' onClick={() => setShowBar((prev) => !prev)} />
                }

            </div>
        </div>
    )
}

export default Navbar


// bg-[#0f0671]