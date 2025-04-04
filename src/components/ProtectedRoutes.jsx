import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const ProtectedRoutes = ({ children }) => {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (!userData) {
        toast.warn("Please login to continue")
        return navigate("/login")
      }
    } catch (error) {
      toast.warn(error.message);
    }
  }, [])


  return (children)
}

export default ProtectedRoutes