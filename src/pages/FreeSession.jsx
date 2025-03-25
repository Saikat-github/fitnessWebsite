import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { sendTelegramNotification } from '../conf/otherInfo';

const FreeSession = () => {
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");
  const { register, formState: { isSubmitting, errors, isSubmitSuccessful }, reset, handleSubmit } = useForm();

  const navigate = useNavigate();

  // NORMAL BOOKING
  const onSubmit = async (data, event) => {
    setResult(null);
    setLoader(true);
    try {
      await sendTelegramNotification(data, "FREE SESSION");
      setResult("Session has been booked successfully, Please check your WhatsApp for updates")
    } catch (error) {
      setResult(error.message);
    } finally {
      setLoader(false);
      reset();
    }

  };



  return (
    <div className="flex justify-center min-h-screen">
      {isSubmitSuccessful
        ?
        <div className='bg-gray-950 p-8 max-h-40 rounded-lg shadow-lg w-full max-w-md mb-10 mt-20 text-center'>{result} <br />
          <span className='text-indigo-500 font-semibold cursor-pointer' onClick={() => navigate("/")}> Back To Home Page</span></div>
        :
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-sm bg-gray-950 p-8 rounded shadow-lg w-full max-w-md mb-10 my-4"
        >
          <h2 className="text-2xl font-semibold text-center bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-8">
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
              className={`bg-gray-900 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-300" : " focus:ring-blue-700"
                }`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="my-8 space-y-2">
            <label
              htmlFor="phone"
              className="block font-medium mb-1"
            >
              WhatsApp Number<span className='text-red-600'>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phoneNo", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`bg-gray-900 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-300" : " focus:ring-blue-700"
                }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="my-8 space-y-2">
            <label
              htmlFor="message"
              className="block font-medium mb-1"
            >
              List 2-3 dates and time ranges, you could do the session
            </label>
            <textarea
              id="message"
              {...register("dates")}
              rows="4"
              className={`bg-gray-900 w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-300" : " focus:ring-blue-700" }`}
              placeholder="Date - 12/12/25                                                                                        Time - 7-10pm"
            />

          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex gap-2 justify-center text-white py-2 px-4 rounded-full transition-all duration-500 border-2 border-blue-700 w-48 mx-auto"
          >
            Submit {loader ? <span className='w-6 h-6 border-4 rounded-full animate-spin border-dotted'></span> : null}
          </button>
          {/* {error && <p className='text-center text-red-600 text-sm font-semibold'>{error.toUpperCase()}!</p>} */}
        </form>}
    </div>
  )
}

export default FreeSession