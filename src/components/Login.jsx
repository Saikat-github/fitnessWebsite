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
import { SmallLoader } from './util components/MinimalLoader';
import { toast } from 'react-toastify';



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
          toast.success("You're logged in successfully")
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
    const email = watch("email");
    if (!email) {
      toast.warn("Please enter your email to reset password");
      return;
    }
    setLoading(true);
    authService.sendPasswordRecoveryEmail(email, resetUrl)
      .then(() => toast.success("Reset email sent to your email"))
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  }, [watch, resetUrl]);



  // google login logic
  const googleLogin = useCallback(async () => {
    setLoading(true);
    try {
      const session = await authService.googleAuth(rootUrl);
      if (session) {
        authService.getCurrentUser().then((userData) => {
          if (userData) dispatch(storeLogin(userData));
          navigate("/");
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
      <div className={`mx-auto w-full max-w-lg bg-gray-950 rounded-lg px-10 border border-black/10 animate-[fadeIn_1s] overflow-y-auto my-4`}>
        <div className='flex justify-end'>
          <Link to='/' className='flex justify-end'>
            <img src={cross} className='w-4 mt-1' alt="" />
          </Link >
        </div>

        <h2 className="text-center text-3xl mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Log In</h2>
        <p className="mb-4 text-center text-xs">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 text-center">{error}</p>}

        <div className="oauth my-6 flex flex-col gap-4 items-center">
          <button onClick={googleLogin} className='w-72 py-3 flex gap-2 justify-center items-center shadow-xl border-2 rounded-full hover:scale-105 transition-all duration-300'><img className='w-8' src={GoogleLogo} alt="" />Continue With Google</button>
        </div>

        <div className='my-6 flex gap-4 items-center'>
          <hr className='bg-gray-400 h-0.5 border-0 flex-grow' />
          <span className="mx-2">Or</span>
          <hr className='bg-gray-400 h-0.5 border-0 flex-grow' />
        </div>

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
                className='px-6 py-1 bg-gray-950 text-white 
          rounded-full transition-all duration-300 
          hover:bg-gray-900  flex gap-2 border-2 text-sm'
                type="submit"
                disabled={isSubmitting}
              >{loading ? <SmallLoader /> : "Login"}</button>
              <span disabled={loading} className='text-xs hover:underline py-2 cursor-pointer ml-2 sm:ml-0' onClick={() => forgetPassword()}>
                Forget Password?
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login