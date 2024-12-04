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
            <div className={`mx-auto w-full max-w-lg h-3/4 bg-gray-950 rounded-lg p-10 border border-black/10 animate-[fadeIn_0.5s] overflow-y-auto mt-4 text-white`}>
                <div className='flex justify-end'>
                    <Link to='/' className='flex justify-end'>
                        <img src={cross} className='w-4' alt="" />
                    </Link >
                </div>
                <h2 className="text-center text-3xl leading-tight">Sign up</h2>
                <p className="my-2 text-center">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Log In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

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
                        <button className='font-semibold px-6 py-3 bg-gray-950  text-white 
                            rounded-lg transition-all duration-300 
                            hover:bg-gray-900  flex items-center gap-2 border-2 focus:outline-none focus:ring-2 focus:ring-white' type="submit" disabled={loading} >
                            Creat Account
                            {loading ? <div className="h-6 w-6 border-4 border-blue-800 border-t-white rounded-full animate-spin"></div> : null}
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default SignUp