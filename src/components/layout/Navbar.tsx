"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          {/* Books SVG */}
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 19V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
            <path d="M6 17h12" />
          </svg>
          EduManage
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="/enroll">Enroll</Link>
          <Link href="/contact">Contact</Link>

          <Link
            href="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
