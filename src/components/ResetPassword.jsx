import React, { useState } from 'react'
import authService from '../appwrite/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {

  const query = new URLSearchParams(useLocation().search);
  const userId = query.get('userId');
  const secret = query.get('secret');
  const { register, handleSubmit, formState: {isSubmitting} } = useForm();
  const navigate = useNavigate();
  const [error, setError] = useState(null);



  const submitHandler = async (data) => {
    try {
      await authService.resetPassword(userId, secret, data.newPassword)
      alert("Password Reset Successful");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div
      className='flex justify-center items-center h-screen z-10'
    >
      <div className={`mx-auto mb-32 w-full max-w-lg h-1/2 bg-slate-400/20 rounded-sm px-10 border border-black/10 animate-[fadeIn_1s] overflow-y-auto `}>
        <h2 className="text-center font-semibold text-3xl leading-tight my-6">Reset Password</h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form onSubmit={handleSubmit(submitHandler)} className='flex flex-col gap-10'>
          <input className={`px-4 py-2 text-sm bg-slate-400/30 rounded outline-none duration-200 w-full`} type="password" placeholder='Enter New Password'  {...register("newPassword", { required: true })} />

          <button className={`py-1.5 px-4 transition duration-300 border border-white/30 bg-white/10 hover:bg-white/15 rounded-full mx-auto text-sm`} type='submit' disabled={isSubmitting}>Reset Password</button>
        </form>

      </div>
    </div>

  )
}

export default ResetPassword