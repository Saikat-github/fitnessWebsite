import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import conf from '../conf/conf';
import { useNavigate } from 'react-router-dom';

const FreeSession = () => {
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const { register, formState: { isSubmitting, errors, isSubmitSuccessful }, reset, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data, event) => {
    setError(null);
    setLoader(true);
    try {
      const formData = new FormData(event.target);

      formData.append("access_key", conf.web3accesskey);

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch(conf.web3url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      // if (res.success) {
      //   alert("You've successfully booked a session");
      // }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoader(false);
      reset();
    }

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {isSubmitSuccessful
        ?
        <div className='bg-white p-8 rounded shadow-lg w-full max-w-md mb-10'>Session has been booked successfully, Please check your WhatsApp for any updates
          <span className='text-blue-700' onClick={() => navigate("/")}>Back To Home Page</span></div>
        :
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded shadow-lg w-full max-w-md mb-10"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Book a Free Session
          </h2>

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-medium mb-1">
              Name<span className='text-red-600'>*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
                }`}
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-600 font-medium mb-1"
            >
              WhatsApp Number<span className='text-red-600'>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
                }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-600 font-medium mb-1"
            >
              List 2-3 dates and time ranges, you could do the session
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows="4"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2`}
              placeholder="Enter your message"
            />

          </div>

          {/* Submit Button */}
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full flex gap-2 justify-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500"
          >
            Submit {loader ? <span className='w-6 h-6 border-4 rounded-full animate-spin border-dotted'></span> : null}
          </button>
          {error && <p className='text-center text-red-600 text-sm font-semibold'>{error.toUpperCase()}!</p>}
        </form>}
    </div>
  )
}

export default FreeSession