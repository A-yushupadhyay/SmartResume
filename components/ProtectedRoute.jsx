// components/ProtectedRoute.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "@/components/AuthModal";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      setShowModal(true); // show modal if not logged in
    }
  }, [loading, user]);

  if (loading) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">Checking authentication...</div>
    );
  }

  if (!user && showModal) {
    return <AuthModal onLogin={() => router.push("/login")} />;
  }

  return children;
}
