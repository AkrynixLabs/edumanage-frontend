import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Smart School Management Made Simple
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Manage students, exams, results and school operations in one
              secure digital platform.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/enroll"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Request a Demo
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3 border rounded-lg hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="bg-white border rounded-xl h-80 flex items-center justify-center text-gray-400">
            Dashboard Preview
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Student Management",
            "Examination & Assessments",
            "Reports & Analytics",
          ].map((title) => (
            <div key={title} className="border rounded-xl p-6 bg-white">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Simplify academic and administrative workflows digitally.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How EduManage Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold">1. School Registers</h3>
              <p className="text-gray-600 mt-2">
                Institution signs up on EduManage.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2. Setup Users</h3>
              <p className="text-gray-600 mt-2">
                Admin adds teachers, students & classes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Manage Academics</h3>
              <p className="text-gray-600 mt-2">
                Exams and reporting handled digitally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h2 className="text-3xl font-bold">
          Ready to modernize your school?
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/enroll"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg"
          >
            Get Started
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-white rounded-lg"
          >
            Talk to Us
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-center py-10">
        <p>© EduManage. All rights reserved.</p>
      </footer>
    </main>
  );
}
