"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    setOpen(false);
    const id = href.replace("#", "");

    setTimeout(() => {
      if (id === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  };

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
            className="group flex items-center gap-3"
            aria-label="EduManage Home"
          >
            <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white shadow-sm overflow-hidden">
              {/* If you placed your file in /public/assets/logo.png, this works: */}
              <Image
                src="/assets/logo.png"
                alt="EduManage logo"
                width={500}
                height={500}
                className="h-10 w-10 object-contain"
                priority
              />

              {/* subtle glow */}
              <span className="pointer-events-none absolute -top-10 -right-10 h-20 w-20 rounded-full bg-blue-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>

           
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur px-2 py-2">
              {navLinks.map((l) => (
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
              className="fixed right-0 top-0 z-[60] h-full w-[86%] max-w-sm border-l border-white/10 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              aria-label="Mobile navigation"
            >
              {/* Background (gradient + glow) */}
              <div className="relative h-full overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-white">
                {/* glow blobs */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/30 blur-3xl" />
                  <div className="absolute top-40 -left-24 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
                  <div className="absolute -bottom-20 right-10 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Header */}
                  <div className="px-5 py-5 border-b border-white/10 bg-white/5 backdrop-blur flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur overflow-hidden">
                        <Image
                          src="/assets/logo.png"
                          alt="EduManage logo"
                          width={48}
                          height={48}
                          className="h-10 w-10 object-contain"
                          priority
                        />
                      </span>

                      <div>
                        <div className="font-extrabold text-white tracking-tight">
                          EduManage
                        </div>
                        <div className="text-xs text-white/70 -mt-0.5">
                          School Management Platform
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-3 py-2 hover:bg-white/15 transition"
                      onClick={() => setOpen(false)}
                      aria-label="Close menu"
                    >
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>

                  {/* Links */}
                  <div className="flex-1 p-5">
                    <div className="text-xs font-semibold text-white/70 mb-3">
                      Navigate
                    </div>

                    <div className="space-y-2">
                      {navLinks.map((l) => (
                        <Link
                          key={l.href}
                          href={l.href}
                          onClick={handleNavClick(l.href)}
                          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 hover:border-white/20 transition"
                        >
                          <span>{l.label}</span>
                          <ArrowRight className="h-4 w-4 text-white/70 group-hover:text-white transition" />
                        </Link>
                      ))}
                    </div>

                    <div className="mt-5 grid gap-3">
                      <Link
                        href="/login"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 font-semibold text-slate-950 shadow hover:-translate-y-0.5 transition-all"
                      >
                        Login <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        href="/enroll"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 font-semibold text-white hover:bg-white/15 transition"
                      >
                        Request a Demo
                      </Link>
                    </div>
                  </div>

                  {/* Footer fade */}
                  <div className="h-10 bg-gradient-to-b from-transparent to-white/20" />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
