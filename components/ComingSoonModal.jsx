// components/ComingSoonModal.jsx
import { useRouter } from "next/router";

export default function ComingSoonModal({ show, onClose }) {
  const router = useRouter();

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🚧 Under Development</h2>
        <p className="text-gray-600 mb-6">
          This feature is currently being worked on. Please check back later.
        </p>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition-all duration-200 mr-2"
          onClick={() => {
            onClose(); // close modal
            router.push("/upload"); // redirect
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
