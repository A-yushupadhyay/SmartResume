import { useState } from "react";
import { useRouter } from "next/router";
import { login } from "../utils/api";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setUser } = useAuth(); // ✅ update context for Navbar/Layout

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      if ( result && result.user) {
        localStorage.setItem("user", JSON.stringify(result.user)); // ✅ optional but helpful
        setUser(result.user); // ✅ crucial for showing Navbar etc.
        router.push("/upload"); // ✅ redirect to resume upload
      } else {
        alert("Unexpected response from server.");
      }
    } catch (err) {
      alert("❌ " + (err.response?.data?.message || "Login failed"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">
          🔐 Login
        </h2>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          Login
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          New here?{" "}
          <Link href="/register" className="text-blue-600 underline hover:text-blue-800">
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}
