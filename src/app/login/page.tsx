"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Redirect authenticated users
  useEffect(() => {
    if (isAuthenticated) {
      router.replace("/dashboard");
    }
  }, [isAuthenticated, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-6">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center">
            Welcome Back
          </h1>

          <p className="text-center text-gray-600 mt-2">
            Sign in to continue
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border px-4 py-3 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <div>
              <div className="flex justify-between mb-1 text-sm">
                <span>Password</span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border px-4 py-3 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {error && (
              <div className="text-sm text-red-600 text-center">
                {error}
              </div>
            )}

            <button
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            <p className="text-center text-sm text-gray-600">
              Forgot password?{" "}
              <Link href="/forgot-password" className="text-blue-600">
                Reset
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}