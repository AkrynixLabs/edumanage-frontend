"use client";

import Navbar from "@/components/layout/Navbar";
import { ArrowRight, Mail, Phone, School } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-gray-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[90px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Contact EduManage
          </h1>
          <p className="mt-4 text-lg text-white/75 max-w-2xl mx-auto">
            Have questions or want a demo of our Examination & Assessment module?
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT INFO */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Get in touch
            </h2>
            <p className="mt-4 text-gray-600 max-w-md">
              Whether you’re a school administrator or teacher, our team will
              guide you through setup and next steps.
            </p>

            <div className="mt-8 space-y-4">
              <InfoCard
                icon={School}
                title="Schools & Institutions"
                text="Crèche, Primary, JHS & Secondary schools"
              />
              <InfoCard
                icon={Mail}
                title="Email"
                text="edumanage@gmail.com"
              />
              <InfoCard
                icon={Phone}
                title="Phone"
                text="+233 24 327 4313"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <h3 className="text-xl font-extrabold tracking-tight">
              Send us a message
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We usually respond within 24 hours.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <input
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="School admin / teacher"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="name@school.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-blue-200"
                  placeholder="Tell us your school name, level, and what you want to improve…"
                />
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to be contacted about EduManage.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <div className="text-white font-extrabold tracking-tight">
            EduManage
          </div>
          <p className="mt-1 text-sm">
            School Management Platform
          </p>
          <div className="mt-6 text-sm">
            © {new Date().getFullYear()} EduManage. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* Small helper */
function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 items-start rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{text}</div>
      </div>
    </div>
  );
}