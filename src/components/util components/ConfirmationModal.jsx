import { Loader2 } from "lucide-react";

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel, loader}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <p className="text-lg font-semibold text-gray-800">{message}</p>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-700  rounded hover:bg-gray-800"
          >
            No
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            {
              loader
              ?
              <Loader2 className="animate-spin"/>
              :
              "Yes"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
