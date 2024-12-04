import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import { useForm } from 'react-hook-form'
import GoogleLogo from '../assets/google2.svg';
import { useDispatch } from 'react-redux'
import { login as storeLogin } from '../store/authSlice';
import authService from '../appwrite/auth'
import { useMemo } from 'react'
import cross from '../assets/cross.svg';





const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const rootUrl = window.location.origin;
  const resetUrl = useMemo(() => `${rootUrl}/resetPassword`, []);

  const { register, handleSubmit, watch, formState: { isSubmitting }, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  //login user handler
  const login = useCallback(async (data) => {
    setLoading(true);
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        authService.getCurrentUser().then((userData) => {
          if (userData) dispatch(storeLogin(userData));
          alert("You're logged in successfully")
          navigate("/");
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      reset();
    }
  }, [dispatch, navigate]);


  //forget password logic
  const forgetPassword = useCallback(() => {
    console.log("rootUrl -", rootUrl, "resetUrl -", resetUrl);
    const email = watch("email");
    if (!email) {
      alert("Please enter your email to reset password");
      return;
    }
    setLoading(true);
    authService.sendPasswordRecoveryEmail(email, resetUrl)
      .then(() => alert("Reset email sent to your email"))
      .finally(() => setLoading(false));
  }, [watch, resetUrl]);



  // google login logic

  const googleLogin = useCallback(async () => {
    console.log("google login was clicked")
    setLoading(true);
    try {
      const session = await authService.googleAuth(rootUrl);
      if (session) {
        authService.getCurrentUser().then((userData) => {
          if (userData) dispatch(storeLogin(userData));
          navigate("/");
          alert("You're logged in successfully")
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch])


  return (
    <div
      className='flex justify-center h-screen z-10'
    >
      <div className={`mx-auto w-full max-w-lg h-3/4 bg-gray-950 rounded-lg px-10 animate-[fadeIn_1s] overflow-y-auto mt-4 border-2 border-blue-700`}>
        <div className='flex justify-end'>
          <Link to='/' className='flex justify-end'>
            <img src={cross} className='w-4 mt-4' alt="" />
          </Link >
        </div>

        <h2 className="text-center text-3xl leading-tight">Log In</h2>
        <p className="mt-2 text-center text-base">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
          <div className='space-y-8'>
            <Input
              placeholder="Enter your email"
              type="email"

              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }
              })}
            />
            <Input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <div className="flex justify-between">
              <button
                className='font-semibold px-6 py-3 bg-gray-950 text-white 
          rounded-lg transition-all duration-300 
          hover:bg-gray-900  flex items-center gap-2 border-2 focus:outline-none focus:ring-2 focus:ring-white'
                type="submit"
                disabled={isSubmitting}
              >Login <div className={`h-6 w-6 border-4 border-blue-800 border-t-white rounded-full animate-spin ${loading ? "opacity-100" : "opacity-0"}`}></div></button>
              <span disabled={loading} className='text-xs hover:underline py-2 cursor-pointer ml-2 sm:ml-0' onClick={() => forgetPassword()}>
                Forget Password?
              </span>
            </div>
          </div>
        </form>
        <div className='my-6 flex gap-4 items-center'>
          <hr className='bg-gray-400 h-0.5 border-0 flex-grow' />
          <span className="mx-2">Or</span>
          <hr className='bg-gray-400 h-0.5 border-0 flex-grow' />
        </div>

        <div className="oauth my-4 flex flex-col gap-4 items-center">
          {/* <button className='hover:ring-1 hover:ring-blue-700  w-72 py-3 text-gray-600 flex gap-2 justify-center items-center shadow-lg'><img className='w-8' src={FacebookLogo} alt="" />Continue With Facebook</button> */}
          <button onClick={googleLogin} className='hover:ring-1 hover:ring-blue-700  w-72 py-3 flex gap-2 justify-center items-center shadow-xl border-2 rounded-lg hover:bg-gray-900 transition-all duration-300'><img className='w-8' src={GoogleLogo} alt="" />Continue With Google</button>
        </div>

      </div>
    </div>
  )
}

export default Login