import React, { useEffect, useState } from 'react'
import authService from '../appwrite/auth';
import dbService from '../appwrite/data';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import { useDispatch, useSelector } from 'react-redux';
import { addDetails, removeDetails } from '../store/authSlice';
import { useCallback } from 'react';

const UserInfo = ({ userId }) => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!userId) return;  // Return early if no userId
  //   setLoading(true);
    
  //   dbService.getPost(userId)
  //     .then((data) => {
  //       dispatch(addDetails(data));
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       dispatch(removeDetails())
  //       setError(error.message);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [userId]);

  const deleteHandler = useCallback(async (id) => {
    setLoading(true);
    const success = await dbService.deletePost(id);
    
    if (success) {
      dispatch(removeDetails());
      alert('Your details has been deleted successfully');
      navigate('/');
    }
    
    setLoading(false);
  }, []);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;
  // if (error) return <div className="text-red-500 text-center">{error}</div>;

  return userDetails ? (
    <div className="flex flex-col gap-6 pt-2 items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg px-8 py-2 w-full max-w-md">
        Thank You for choosing us, we'll contact you in 24 hours
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">Your Details</h1>
        <div className="space-y-4">
          <p><strong className="text-gray-700">Name:</strong> {userDetails.applicantName}</p>
          <p><strong className="text-gray-700">Email:</strong> {userDetails.email}</p>
          {userDetails.instaID && <p><strong className="text-gray-700">Instagram ID:</strong> {userDetails.instaID}</p>}
          <p><strong className="text-gray-700">Goal:</strong> {userDetails.applicantGoal}</p>
          <p><strong className="text-gray-700">Age:</strong> {userDetails.applicantAge}</p>
          <p><strong className="text-gray-700">Gender:</strong> {userDetails.applicantGender}</p>
          <p><strong className="text-gray-700">Phone Number:</strong> {userDetails.phoneNo}</p>
          <p><strong className="text-gray-700">Plan Chosen:</strong> {userDetails.planChoosen}</p>
          <p><strong className="text-gray-700">Agreed to Continue:</strong> {userDetails.agreedToContinue}</p>
        </div>
      </div>
      <Button disabled={loading} onClick={() => deleteHandler(userId)} className='bg-blue-600 text-white hover:bg-blue-700 rounded-lg'>Delete Your Details</Button>
    </div>
  ) : (<div className='font-semibold text-2xl text-center mt-6'>You haven't submitted your details yet. Please submit Your details <Link className='text-blue-600' to="/input">Here</Link> </div>)
}

export default UserInfo