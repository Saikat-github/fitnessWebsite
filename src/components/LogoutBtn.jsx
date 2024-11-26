import React from 'react'
import authService from '../appwrite/auth'
import { useState } from 'react';
import { logout as storeLogout } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const LogoutBtn = ({setShowBar}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout =  async () => {
    setLoading(true);
    await authService.logout()
    dispatch(storeLogout());
    setShowBar(false)
    alert("You're logged out successfully")
    navigate("/")
    setLoading(false);
  }

  return (
    <button onClick={() => logout()} className='transition px-6 py-2 hover:text-black cursor-pointer text-sm font-semibold'>{loading ? <div className="h-6 w-6 border-4 border-t-blue-500 rounded-full animate-spin "></div> :"Logout"}</button>
  )
}

export default LogoutBtn