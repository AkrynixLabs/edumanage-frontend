"use client";

import Navbar from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

        <form className="space-y-6 bg-white p-8 border rounded-lg">
          <input
            placeholder="Your Name"
            className="w-full border px-4 py-3 rounded-lg"
          />

          <input
            placeholder="Email Address"
            className="w-full border px-4 py-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border px-4 py-3 rounded-lg"
          />

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
