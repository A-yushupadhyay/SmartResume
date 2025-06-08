// components/AuthModal.jsx
import { useEffect } from "react";

export default function AuthModal({ onLogin }) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🔒 Access Denied</h2>
        <p className="text-gray-600 mb-6">
          You must be logged in to access this page.
        </p>
        <button
          onClick={onLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition duration-200"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
