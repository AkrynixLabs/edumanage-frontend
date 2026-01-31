"use client";

import Navbar from "@/components/layout/Navbar";

export default function EnrollPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">
          Register Your School
        </h1>

        <p className="text-gray-600 mb-10">
          Start onboarding your institution onto EduManage.
        </p>

        <form className="space-y-6 bg-white p-8 border rounded-lg">
          <input
            placeholder="School Name"
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            placeholder="School Email"
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            placeholder="Administrator Name"
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Submit Registration
          </button>
        </form>
      </section>
    </main>
  );
}
