"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { Eye, EyeOff, ArrowRight, Lock, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.replace("/dashboard");
  }, [isAuthenticated, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Background / Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-gray-50" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[90px]" />
          <div className="absolute top-24 -left-24 h-[360px] w-[360px] rounded-full bg-teal-400/20 blur-[90px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                Secure access • Role-based permissions
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Welcome back to EduManage
              </h1>

              <p className="mt-4 text-white/75 text-lg max-w-xl">
                Sign in to manage exams, assessments, and results with accuracy and speed.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
                <MiniStat title="Fewer errors" desc="Validated score entry" />
                <MiniStat title="Faster workflows" desc="Approvals & result slips" />
              </div>
            </div>

            {/* Right: Card */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
                <div className="text-center">
                  <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Sign in
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    Enter your details to continue.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <div className="mt-2 relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="name@school.com"
                        className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-200"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-semibold text-gray-700">
                        Password
                      </label>

                      {/* Reset password link */}
                      <Link
                        href="/forgot-password"
                        className="text-sm font-semibold text-blue-600 hover:text-blue-700"
                      >
                        Reset password
                      </Link>
                    </div>

                    <div className="mt-2 relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-12 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-200"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-2 text-gray-500 hover:bg-gray-100 transition"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow hover:bg-blue-700 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {loading ? "Signing in..." : "Sign in"}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Sign up */}
                  <p className="text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <Link
                      href="/signup"
                      className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Create one
                    </Link>
                  </p>
                </form>

                {/* Divider */}
                <div className="mt-7 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs text-gray-500">EduManage</span>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>

                <div className="mt-5 text-xs text-gray-500 text-center">
                  By signing in, you agree to EduManage policies.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Soft fade into page */}
        <div className="h-16 bg-gradient-to-b from-transparent to-gray-50" />
      </section>
    </main>
  );
}

function MiniStat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur">
      <div className="text-white font-extrabold">{title}</div>
      <div className="text-white/70 text-sm">{desc}</div>
    </div>
  );
}
