import React from 'react'
import authService from '../appwrite/auth'
import { useState } from 'react';
import { logout as storeLogout } from '../store/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SmallLoader } from './util components/MinimalLoader';
import { LogOut } from "lucide-react";
import { toast } from 'react-toastify';



const LogoutBtn = ({setShowBar}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout =  async () => {
    try {
      setLoading(true);
      await authService.logout()
      dispatch(storeLogout());
      setShowBar(false)
      toast.success("You're logged out successfully")
      navigate("/")
      setLoading(false);
    } catch (error) {
      toast.error("An error occurred while logging out")
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={() => logout()} className='transition px-4 py-2 hover:text-white cursor-pointer text-sm  flex items-center gap-2'>
      <LogOut />
      {loading ? <SmallLoader /> :"Logout"}
      </button>
  )
}

export default LogoutBtn