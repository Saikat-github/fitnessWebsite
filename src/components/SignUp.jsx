import React, { useCallback, useState } from 'react'
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';
import { login as storeLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux';
import cross from '../assets/cross.svg';
import { toast } from 'react-toastify';
import { SmallLoader } from './util components/MinimalLoader';
import GoogleLogo from '../assets/google2.svg';


const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const rootUrl = window.location.origin;

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const create = async (data) => {
        setLoading(true);
        setError("");
        try {
            const session = await authService.createAccount(data);
            if (session) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(storeLogin(userData));
                toast.success("Signup successful")
                navigate("/")
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            reset()
        }
    }


    // google login logic

    const googleLogin = useCallback(async () => {
        setLoading(true);
        try {
            const session = await authService.googleAuth(rootUrl);
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
        }
    }, [dispatch])

    return (
        <div className="flex justify-center h-screen z-10 animate">
            <div className={`mx-auto w-full max-w-lg bg-black/50 rounded-lg px-10 my-4`}>
                <div className='flex justify-end'>
                    <Link to='/' className='flex justify-end'>
                        <img src={cross} className='w-4' alt="" />
                    </Link >
                </div>
                <h2 className="text-center text-3xl mb-2">Sign Up</h2>
                <p className="mb-4 text-center text-xs">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center text-xs">{error}</p>}

                <div className="oauth my-6 flex flex-col gap-4 items-center">
                    <button onClick={googleLogin} className='w-72 py-2 flex gap-2 justify-center items-center shadow-xl border rounded-full hover:scale-105 transition-all duration-300'><img className='w-8' src={GoogleLogo} alt="" />Continue With Google</button>
                </div>

                <div className='my-6 flex gap-4 items-center'>
                    <hr className='bg-gray-400 h-0.5 border-0 flex-grow' />
                    <span className="mx-2">Or</span>
                    <hr className='bg-gray-400 h-0.5 border-0 flex-grow' />
                </div>

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-8 mt-8'>
                        <Input

                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
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
                        <button className='px-6 py-1 text-white 
                        rounded-full transition-all duration-300 
                        hover:bg-gray-900  flex gap-2 border  text-sm' type="submit" disabled={loading} >
                            {loading
                                ?
                                <SmallLoader />
                                : "Creat Account"
                            }
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default SignUp