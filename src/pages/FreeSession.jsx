import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import conf from '../conf/conf';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { sendTelegramNotification } from '../conf/otherInfo';

const FreeSession = () => {
  const [loader, setLoader] = useState(false);
  const [result, setResult] = useState("");
  const { register, formState: { isSubmitting, errors, isSubmitSuccessful }, reset, handleSubmit } = useForm();

  const navigate = useNavigate();


  // // NORMAL BOOKING
  // const onSubmit = async (data, event) => {
  //   setError(null);
  //   setLoader(true);
  //   try {
  //     const formData = new FormData(event.target);

  //     formData.append("access_key", conf.web3accesskey);

  //     const object = Object.fromEntries(formData);
  //     const json = JSON.stringify(object);

  //     const res = await fetch(conf.web3url, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //       },
  //       body: json
  //     })

  //     const web3data = await res.json();

  //     if (web3data.success) {
  //       setResult("Session has been booked successfully, Please check your WhatsApp for updates");
  //     } else {
  //       setResult(web3data.message);
  //     }
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoader(false);
  //     reset();
  //   }

  // };



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
          <h2 className="text-2xl font-bold text-center text-gray-50 mb-6">
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
            className="w-full flex gap-2 justify-center bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-500"
          >
            Submit {loader ? <span className='w-6 h-6 border-4 rounded-full animate-spin border-dotted'></span> : null}
          </button>
          {/* {error && <p className='text-center text-red-600 text-sm font-semibold'>{error.toUpperCase()}!</p>} */}
        </form>}
    </div>
  )
}

export default FreeSession