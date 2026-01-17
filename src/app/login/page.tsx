"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-xl shadow-lg p-8">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h1>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} MyCompany
        </p>
      </div>
    </div>
  );
}
