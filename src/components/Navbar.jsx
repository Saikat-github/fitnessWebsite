import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutBtn from './LogoutBtn';
import cross from '../assets/crosssolid.svg';
import hamburger from '../assets/hamburgersolid.svg'
import { useState } from 'react';
import { useSelector } from 'react-redux';


const Navbar = () => {
    const [showBar, setShowBar] = useState(false);
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
        setShowBar(false);
        navigate(url);
    }



    return (
        <div className='text-gray-600 h-20 px-3 sm:px-20 flex justify-between items-center sticky top-0 z-10 shadow-lg bg-white'>
            <Link to='/' className='text-4xl w-28 h-28'>
                <img src="/logo5.png" className='object-fill' alt="" />
            </Link>
            <div className="showBar flex md:gap-6 text-lg z-10">
                <ul className={`navitems md:flex lg:gap-10 gap-4 ${showBar ? "flex flex-col gap-10 mt-48 py-6 px-2 bg-white" : "hidden"}`}>
                    {navOptions.map((item, idx) => (
                        item.active && <li className=' transition px-6 py-2 hover:text-black cursor-pointer text-sm font-semibold' key={idx} onClick={() => onClickHandler(item.url)}>
                            {item.name}
                        </li>
                    ))}
                    {authStatus && <LogoutBtn setShowBar={setShowBar}/>}
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