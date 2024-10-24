import React, { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './Input'
import { useForm } from 'react-hook-form'
import Button from './Button'
import GoogleLogo from '../assets/google2.svg';
import { useDispatch } from 'react-redux'
import { login as storeLogin } from '../store/authSlice';
import authService from '../appwrite/auth'
import { useMemo } from 'react'




const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const rootUrl = window.location.origin;
  const resetUrl = useMemo(() => `${rootUrl}/resetPassword`, []);

  const { register, handleSubmit, watch, formState: { isSubmitting } } = useForm();
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
          navigate("/");
        });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch, navigate]);


  //forget password logic
  const forgetPassword = useCallback(() => {
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
    console.log("rootUr -l", rootUrl, "resetUrl -", resetUrl);
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
      className='flex justify-center h-screen z-10 bg-[#00000090]'
    >
      <div className={`mx-auto w-full max-w-lg h-3/4 bg-gray-100 rounded-sm px-10 border border-black/10 animate-[fadeIn_1s] overflow-y-auto `}>
        <div className='flex justify-end'>
          <Link to='/' className='flex justify-end'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='h-6 cursor-pointer'><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
          </Link >
        </div>

        <h2 className="text-center text-3xl leading-tight">Log In</h2>
        <p className="mt-2 text-center text-base text-black/60">
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
          <div className='space-y-5'>
            <Input
              label="Email "
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
              label="Password "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
              })}
            />
            <div className="flex justify-between">
              <Button
                type="submit"
                className="flex gap-2 justify-center bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >Login <div className={`h-6 w-6 border-4 border-blue-800 border-t-white rounded-full animate-spin ${loading ? "opacity-100" : "opacity-0"}`}></div></Button>
              <span disabled={loading} className='text-xs hover:underline py-2 cursor-pointer' onClick={() => forgetPassword()}>
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
          <button onClick={googleLogin} className='hover:ring-1 hover:ring-blue-700  w-72 py-3 text-gray-600 flex gap-2 justify-center items-center shadow-xl'><img className='w-8' src={GoogleLogo} alt="" />Continue With Google</button>
        </div>

      </div>
    </div>
  )
}

export default Login