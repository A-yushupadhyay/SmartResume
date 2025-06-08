import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { register } from "../utils/api";
import { useAuth } from "@/context/AuthContext"; // ✅ IMPORT CONTEXT

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { setUser } = useAuth(); // ✅ CONTEXT ACCESS

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const result = await register(username, email, password);
      if (result && result.user) {
        localStorage.setItem("user", JSON.stringify(result.user)); // optional
        setUser(result.user); // ✅ THIS FIXES THE SYNC ISSUE
        router.push("/upload");
      } else {
        alert(result.message || "Registration failed");
      }
    } catch (err) {
      alert(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">📝 Register</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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
          placeholder="Create password"
          required
          className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
        >
          Register
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 underline hover:text-blue-800">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
