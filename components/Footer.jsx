import { useState } from "react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="bg-white border-t text-sm py-6 px-6 mt-16 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p className="select-none text-gray-700" aria-label="Copyright notice">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-black">SmartResumeAI</span>. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center md:justify-start gap-4">
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-white-700 hover:text-yellow-500 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setShowModal(true)}
                  className="text-white-700 hover:text-yellow-500 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

      {/* Modal */}
      <ComingSoonModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
