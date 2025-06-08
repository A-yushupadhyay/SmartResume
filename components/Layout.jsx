"use client";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useAuth } from "@/context/AuthContext";

export default function Layout({ children }) {
  const { user } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {user && <Navbar />}
      <main className="flex-grow px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
