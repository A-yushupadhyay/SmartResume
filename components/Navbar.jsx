"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { logout } from "@/utils/api";
import { useRouter } from "next/router";
import { useState } from "react";
import ComingSoonModal from "@/components/ComingSoonModal";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
      router.push("/login");
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors duration-200">
            SmartResume<span className="text-black">AI</span>
          </Link>

          <div className="space-x-4 flex items-center">
            {user ? (
              <>
                <Link
                  href="/upload"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Upload
                </Link>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Dashboard
                </Link>

                {/* 🔧 Coming Soon Links */}
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="text-white-700 hover:text-yellow-600 font-medium transition-colors duration-200"
                >
                  Jobs
                </button>
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="text-white-700 hover:text-yellow-600 font-medium transition-colors duration-200"
                >
                  AI Review
                </button>

                <button
                  onClick={handleLogout}
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md font-medium transition-all duration-200 shadow-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-md font-medium transition-all duration-200 shadow-sm"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Coming Soon Modal */}
      <ComingSoonModal show={showComingSoon} onClose={() => setShowComingSoon(false)} />
    </>
  );
}
