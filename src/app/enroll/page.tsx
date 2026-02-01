"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowRight,
  Building2,
  Mail,
  Phone,
  User,
  Users,
  MapPin,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function EnrollPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Hook to your API later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-gray-50" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[90px]" />
          <div className="absolute top-20 -left-24 h-[360px] w-[360px] rounded-full bg-teal-400/20 blur-[90px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Register your school • Get a guided demo
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Register your institution on EduManage
              </h1>

              <p className="mt-4 text-white/75 max-w-xl">
                Share your school details and we’ll help you onboard—especially for
                Exams & Assessments.
              </p>

              <div className="mt-7 grid sm:grid-cols-2 gap-3 max-w-xl">
                <MiniStat title="Fast onboarding" desc="Ready in simple steps" />
                <MiniStat title="Secure setup" desc="Role-based access" />
              </div>

              <div className="mt-6 text-sm text-white/70">
                Prefer to talk first?{" "}
                <Link className="text-white font-semibold underline underline-offset-4" href="/contact">
                  Contact us
                </Link>
              </div>
            </div>

            {/* Form card */}
            <div className="lg:flex lg:justify-end">
              <div className="w-full max-w-xl rounded-3xl border border-gray-200 bg-white p-8 md:p-10 shadow-2xl">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                      School registration
                    </h2>
                    <p className="mt-1 text-sm text-gray-600">
                      Fill this once. We’ll reach out to confirm details.
                    </p>
                  </div>

                  <span className="hidden sm:inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
                    Takes ~1 minute
                  </span>
                </div>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 mt-0.5" />
                      <div>
                        <div className="font-extrabold text-emerald-900">
                          Registration received
                        </div>
                        <div className="mt-1 text-sm text-emerald-800">
                          We’ll contact you soon to schedule onboarding and a demo.
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 py-3 font-semibold text-emerald-900 hover:bg-emerald-50 transition"
                      >
                        Back to home
                      </Link>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700 transition"
                      >
                        Contact support <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Field
                        icon={Building2}
                        label="School name"
                        placeholder="e.g., Bright Future Academy"
                        required
                      />
                      <Field
                        icon={Mail}
                        label="School email"
                        placeholder="e.g., info@school.com"
                        type="email"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field
                        icon={User}
                        label="Administrator name"
                        placeholder="e.g., Headteacher / Admin"
                        required
                      />
                      <Field
                        icon={Phone}
                        label="Phone number"
                        placeholder="e.g., +233 24 000 0000"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Field
                        icon={GraduationCap}
                        label="School level"
                        placeholder="Crèche – JHS / SHS"
                      />
                      <Field
                        icon={Users}
                        label="Estimated students"
                        placeholder="e.g., 350"
                      />
                    </div>

                    <Field
                      icon={MapPin}
                      label="Location (optional)"
                      placeholder="City / Region"
                    />

                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
                      <span className="font-semibold">Note:</span> After registration,
                      we’ll confirm details and help you set up your Exams & Assessments.
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow hover:bg-blue-700 hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {loading ? "Submitting…" : "Submit registration"}
                      <ArrowRight className="h-4 w-4" />
                    </button>

                    <div className="text-xs text-gray-500 text-center">
                      By submitting, you agree to be contacted about EduManage.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

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

function Field({
  icon: Icon,
  label,
  placeholder,
  type = "text",
  required = false,
}: {
  icon: React.ElementType;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700">
        {label} {required ? <span className="text-red-600">*</span> : null}
      </label>
      <div className="mt-2 relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3.5 text-gray-900 outline-none focus:ring-2 focus:ring-blue-200"
        />
      </div>
    </div>
  );
}
