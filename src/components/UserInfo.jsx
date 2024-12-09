import React, { useEffect, useState, useCallback } from "react";
import dbService from "../appwrite/data";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeDetails } from "../store/authSlice";
import ConfirmationModal from "./ConfirmationModal"; // Import the modal

const UserInfo = ({ userId }) => {
  const userDetails = useSelector((state) => state.auth.userDetails);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state
  const [selectedUserId, setSelectedUserId] = useState(null); // Track ID to delete
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Open the modal when delete button is clicked
  const openModal = (id) => {
    setSelectedUserId(id);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
  };

  // Confirm delete action
  const confirmDelete = useCallback(async () => {
    setLoading(true);
    const success = await dbService.deletePost(selectedUserId);

    if (success) {
      dispatch(removeDetails());
      alert("Your details have been deleted successfully");
      navigate("/");
    }

    setLoading(false);
    closeModal(); // Close modal after deletion
  }, [selectedUserId, dispatch, navigate]);

  if (loading) return <div className="text-center text-lg font-semibold">Loading...</div>;




  return userDetails ? (
    <div className="flex flex-col gap-6 pt-2 items-center min-h-screen text-black">
      <div className="bg-white shadow-lg rounded-lg px-8 py-2 w-full max-w-md">
        Thank You for choosing us, we'll contact you in 24 hours
      </div>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">Your Details</h1>
        <div className="space-y-4">
          <p><strong className="text-gray-700">Name:</strong> {userDetails.applicantName}</p>
          <p><strong className="text-gray-700">Email:</strong> {userDetails.email}</p>
          <p><strong className="text-gray-700">Phone Number:</strong> {userDetails.phoneNo}</p>
          <p><strong className="text-gray-700">Goal:</strong> {userDetails.applicantGoal}</p>
          <p className="space-x-6">
            <span><strong className="text-gray-700">Age:</strong> {userDetails.applicantAge}</span>
            <span><strong className="text-gray-700">Gender:</strong> {userDetails.applicantGender}</span>
          </p>
          <p className="space-x-6">
            <span><strong className="text-gray-700">Weight:</strong> {userDetails.weight} kg</span>
            <span><strong className="text-gray-700">Height:</strong> {userDetails.height} ft</span>
          </p>

          <p><strong className="text-gray-700">Plan Chosen:</strong> {userDetails.planChoosen}</p>
          <p><strong className="text-gray-700">Agreed to Continue:</strong> {userDetails.agreedToContinue}</p>
        </div>
      </div>
      <button
        disabled={loading}
        onClick={() => openModal(userId)} // Trigger modal
        className="bg-red-600 text-white hover:bg-red-700 rounded-lg py-3 px-6 font-semibold transition-all duration-300"
      >
        Delete Your Details
      </button>

      {/* Modal for confirmation */}
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to delete your details?"
        onConfirm={confirmDelete} // Handle confirm action
        onCancel={closeModal} // Handle cancel action
      />
    </div>
  ) : (
    <div className="font-semibold text-2xl text-center mt-6">
      You haven't submitted your details yet. Please submit your details{" "}
      <Link className="text-blue-600" to="/input">Here</Link>
    </div>
  );
};

export default UserInfo;
