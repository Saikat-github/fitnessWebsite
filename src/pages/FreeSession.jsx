import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dbService from '../appwrite/data';
import { useSelector } from 'react-redux';

const FreeSession = () => {
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");
  const { register, formState: { isSubmitting, errors, isSubmitSuccessful }, reset, handleSubmit, setValue, watch } = useForm();
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setResult(null);
    setLoader(true);
    try {
      await dbService.createFreeSession(data);
      setResult("Session has been booked successfully, Please check your WhatsApp for updates");
    } catch (error) {
      setResult(error.message);
    } finally {
      setLoader(false);
      reset();
    }
  };

  return (
    <div className="flex justify-center min-h-screen">
      {isSubmitSuccessful ? (
        <div className='bg-black/50 p-8 max-h-40 rounded-lg shadow-lg w-full max-w-md mb-10 mt-20 text-center'>
          {result} <br />
          <span className='cursor-pointer px-4 py-1 border border-gray-400 rounded-full' onClick={() => navigate("/")}> Back To Home Page</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="text-sm bg-black/50 p-8 rounded shadow-lg w-full max-w-md mb-10 my-4">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Book a Free Session
          </h2>

          {/* Name Field */}
          <div className="my-8 space-y-2 text-gray-100">
            <label htmlFor="name" className="block font-medium mb-1">
              Name<span className='text-red-600'>*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`bg-gray-900 outline-none w-full px-4 py-2 rounded-lg`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="my-8 space-y-2">
            <label htmlFor="phone" className="block font-medium mb-1">
              WhatsApp Number<span className='text-red-600'>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phoneNo", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9][0-9]{9}$/,
                  message: "Phone number must be 10 digits and start with 6-9",
                },
              })}
              className={`bg-gray-900 outline-none w-full px-4 py-2 rounded-lg`}
              placeholder="Enter your phone number"
            />
            {errors.phoneNo && <p className="text-red-500 text-sm mt-1">{errors.phoneNo.message}</p>}
          </div>

          {/* Date Picker Field */}
          <div className="my-8 space-y-2">
            <label htmlFor="preferredTime" className="block font-medium mb-1">
              Please choose a date, you could do the session
            </label>
            <DatePicker
              selected={watch("preferredTime")}
              onChange={(date) => setValue("preferredTime", date)}
              className="bg-gray-900 outline-none w-full px-4 py-2 rounded-lg"
              minDate={new Date()}
              placeholderText="Select a date"
            />
          </div>

          {/* Submit Button */}
          <button
            disabled={loader}
            type="submit"
            className="flex gap-2 justify-center text-white py-2 px-4 rounded-full transition-all duration-500 w-48 mx-auto border"
          >
            {loader ? <Loader className='w-6 animate-spin'/> : "Submit"}
          </button>
        </form>
      )}
    </div>
  );
};

export default FreeSession;
