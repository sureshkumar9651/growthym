"use client";

import { useState } from "react";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form),
        });

        const data = await res.json();

        if (res.ok) {
            alert(data.message);

            setForm({
                name: "",
                email: "",
                password: "",
            });
        } else {
            alert(data.message || "Registration failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4">
            <div className="w-full max-w-md bg-gray-900 text-white rounded-xl shadow-lg p-8">

                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-300">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-1 text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 rounded-md bg-black border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
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
                            onChange={(e) =>
                                setForm({ ...form, password: e.target.value })
                            }
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-gray-200 transition"
                    >
                        Register
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-400 mt-6">
                    Already have an account?{" "}
                    <a href="/login" className="text-white underline">
                        Login
                    </a>
                </p>
            </div>
        </div>
    );
}
