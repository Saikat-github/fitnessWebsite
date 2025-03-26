import React from 'react';
import Input from './Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import authService from '../appwrite/auth';
import { login as storeLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux';
import Button1 from './Button1';
import cross from '../assets/cross.svg';
import { toast } from 'react-toastify';
import { SmallLoader } from './util components/MinimalLoader';



const SignUp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
                navigate("/")
            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
            reset()
        }

    }


    return (
        <div className="flex justify-center h-screen z-10 animate">
            <div className={`mx-auto w-full max-w-lg bg-gray-950 rounded-lg px-10 border border-black/10 animate-[fadeIn_0.5s] overflow-y-auto my-4 text-white`}>
                <div className='flex justify-end'>
                    <Link to='/' className='flex justify-end'>
                        <img src={cross} className='w-4' alt="" />
                    </Link >
                </div>
                <h2 className="text-center text-3xl mb-2 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">Sign Up</h2>
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
                        <button className='px-6 py-1
                        bg-gray-950 text-white 
                        rounded-full transition-all duration-300 
                        hover:bg-gray-900  flex gap-2 border-2  text-sm' type="submit" disabled={loading} >
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