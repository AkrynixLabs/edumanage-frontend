"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Smooth scroll for hash links
  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const id = href.replace("#", "");

    // Close drawer first
    setOpen(false);

    // Small delay so drawer closes nicely before scrolling
    setTimeout(() => {
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

  // Close on Esc + lock background scroll when menu is open
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Navbar style changes when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = useMemo(() => {
    return [
      "sticky top-0 z-50 w-full",
      "transition-all duration-300",
      scrolled
        ? "bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm"
        : "bg-white/30 backdrop-blur border-b border-white/10",
    ].join(" ");
  }, [scrolled]);

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="#top"
            onClick={handleNavClick("#top")}
            className="group flex items-center gap-2"
            aria-label="EduManage Home"
          >
            <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              {/* subtle glow */}
              <span className="pointer-events-none absolute -top-10 -right-10 h-20 w-20 rounded-full bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Books SVG */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-700"
              >
                <path d="M4 19V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
                <path d="M6 17h12" />
              </svg>
            </span>

            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight text-gray-900">
                EduManage
              </div>
              <div className="text-xs text-gray-500 -mt-0.5">
                School Management Platform
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur px-2 py-2">
              {navLinks.slice(0, 5).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={handleNavClick(l.href)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <Link
              href="/login"
              className="ml-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow hover:bg-blue-700 hover:-translate-y-0.5 transition-all"
            >
              Login <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/70 backdrop-blur px-3 py-2 shadow-sm hover:bg-white transition"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 text-gray-900" />
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* overlay */}
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-black/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-label="Close menu overlay"
            />

            {/* panel */}
            <motion.aside
              className="fixed right-0 top-0 z-[60] h-full w-[86%] max-w-sm bg-white shadow-2xl border-l border-gray-200"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              aria-label="Mobile navigation"
            >
              <div className="p-5 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-blue-700"
                    >
                      <path d="M4 19V5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
                      <path d="M6 17h12" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-extrabold text-gray-900">EduManage</div>
                    <div className="text-xs text-gray-500 -mt-0.5">
                      Modern school operations
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50 transition"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5 text-gray-900" />
                </button>
              </div>

              <div className="p-5">
                <div className="text-xs font-semibold text-gray-500 mb-3">
                  Navigate
                </div>

                <div className="space-y-2">
                  {navLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={handleNavClick(l.href)}
                      className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-white hover:shadow-sm transition"
                    >
                      <span>{l.label}</span>
                      <ArrowRight className="h-4 w-4 text-gray-500" />
                    </Link>
                  ))}
                </div>

                <div className="mt-5 grid gap-3">
                  <Link
                    href="/enroll"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition"
                  >
                    Request a Demo <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 font-semibold text-gray-900 hover:bg-gray-50 transition"
                  >
                    Login
                  </Link>
                </div>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800">
                  Tip: Use the “Module 4” section to show your Exams & Assessment feature.
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
