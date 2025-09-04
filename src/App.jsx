import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Footer, Navbar, ScrollToTop } from './components'
import { useDispatch, useSelector } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout, addDetails, removeDetails } from './store/authSlice'
import dbService from './appwrite/data'
import ReactGA from "react-ga4";
import { ToastContainer } from "react-toastify";
import { Loader2 } from 'lucide-react'

ReactGA.initialize("G-1QYWZQESQK");
ReactGA.send("pageview");




const App = () => {
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);


  useEffect(() => {
    if (!userData) return;  // Return early if no userId
    setDataLoading(true);

    dbService.getPost(userData.$id)
      .then((data) => {
        dispatch(addDetails(data));
      })
      .catch((error) => {
        dispatch(removeDetails())
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [userData]);
  // console.log(userData);


  useEffect(() => {
    setAuthLoading(true)
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login(user))
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("User can't be logged in, error in App.jsx", error.message)
      })
      .finally(() => setAuthLoading(false))
  }, [])


  return !authLoading ? (
    <div className='font-Poppins bg-black text-gray-200'>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <main className='min-h-[200vh]'>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : <div className='font-Montserrat bg-black text-white w-screen h-screen flex justify-center items-center'>
    <Loader2 className='w-8 animate-spin'/>
  </div>
}

export default App


