"use client";

import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import React, { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  GraduationCap,
  Lock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-120px 0px -120px 0px", once: true });

  return (
    <section id={id} ref={ref} className={className}>
      <motion.div
        variants={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
      >
        {children}
      </motion.div>
    </section>
  );
}

function Pill({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
      <Icon className="h-4 w-4" />
      {text}
    </span>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white/80 p-6 shadow-sm backdrop-blur",
        "hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300",
        className,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-600/10 blur-2xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-teal-500/10 blur-2xl" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-white backdrop-blur">
      <div className="text-2xl font-bold tracking-tight">{value}</div>
      <div className="text-sm text-white/80">{label}</div>
    </div>
  );
}

function FeatureRow({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700 border border-blue-100">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-semibold text-gray-900">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </div>
  );
}

function MiniBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700">
      {children}
    </span>
  );
}

export default function LandingPage() {
  const [activeExamTab, setActiveExamTab] = useState<
    "creation" | "bank" | "entry" | "slips" | "analytics"
  >("creation");

  const examTabs = useMemo(
    () => [
      {
        key: "creation" as const,
        icon: FileText,
        title: "Test & Exam Creation",
        bullets: [
          "Set title, subject, class, total marks, duration, and instructions.",
          "Schedule open/close dates for online submissions (optional).",
          "Keep drafts, duplicate exams, and reuse structure across terms.",
        ],
      },
      {
        key: "bank" as const,
        icon: BookOpen,
        title: "Question Bank",
        bullets: [
          "Build a reusable repository of questions by subject and topic.",
          "Supports Multiple Choice, True/False, Short Answer, Essay.",
          "Tag by difficulty and learning objective for faster paper setup.",
        ],
      },
      {
        key: "entry" as const,
        icon: ClipboardCheck,
        title: "Result Entry & Management",
        bullets: [
          "Secure score entry with role-based access and audit-friendly tracking.",
          "Validation to reduce mistakes (missing scores, out-of-range marks).",
          "Bulk import-ready structure for quick updates when needed.",
        ],
      },
      {
        key: "slips" as const,
        icon: GraduationCap,
        title: "Result Slips",
        bullets: [
          "Auto-generate student result slips after approval.",
          "Clean layout for printing and sharing (per term/per exam).",
          "Optional remarks and signatures to match school format.",
        ],
      },
      {
        key: "analytics" as const,
        icon: BarChart3,
        title: "Result Analytics",
        bullets: [
          "Basic charts for class performance: average, highest, lowest.",
          "Spot trends early and support intervention planning.",
          "Compare performance across subjects and periods.",
        ],
      },
    ],
    []
  );

  const activeTab = examTabs.find((t) => t.key === activeExamTab)!;

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-white">
        {/* glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/25 blur-[90px]" />
          <div className="absolute top-24 -left-24 h-[380px] w-[380px] rounded-full bg-teal-400/20 blur-[90px]" />
          <div className="absolute top-24 -right-24 h-[380px] w-[380px] rounded-full bg-indigo-400/15 blur-[90px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                <Pill icon={ShieldCheck} text="Secure & Reliable" />
                <Pill icon={Sparkles} text="Modern, Simple UI" />
                <Pill icon={Users} text="Built for African schools" />
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-6 text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight text-white"
              >
                EduManage{" "}
                <span className="text-white/80 font-extrabold">
                  — Smart School Management Made Simple
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-lg md:text-xl text-white/75 leading-relaxed"
              >
                Manage students, exams, results and school operations in one secure
                digital platform — designed for clarity, speed, and fewer mistakes.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col sm:flex-row gap-3"
              >
                <Link
                  href="/enroll"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 hover:shadow-xl transition-all"
                >
                  Request a Demo <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Contact Us <MessageSquare className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-3">
                <Stat value="Fast" label="Setup & onboarding" />
                <Stat value="Accurate" label="Results workflows" />
                <Stat value="Secure" label="Role-based access" />
              </motion.div>
            </motion.div>

            {/* “Dashboard” preview */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-500/20 to-teal-400/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur shadow-2xl shadow-black/30">
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-white/80">
                    <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    <span className="ml-2 text-sm">EduManage Dashboard</span>
                  </div>
                  <span className="text-xs text-white/60">Preview</span>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Students", value: "1,240" },
                      { label: "Teachers", value: "62" },
                      { label: "Classes", value: "28" },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
                      >
                        <div className="text-xs text-white/60">{s.label}</div>
                        <div className="mt-1 text-xl font-bold text-white">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid md:grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white/90">
                          Exam Performance
                        </div>
                        <MiniBadge>Avg / High / Low</MiniBadge>
                      </div>
                      <div className="mt-3 space-y-2">
                        {[72, 88, 64].map((w, i) => (
                          <div key={i} className="h-2 w-full rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${w}%` }}
                              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 + i * 0.1 }}
                              className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-teal-300"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 text-xs text-white/60">
                        Track class averages and spot improvement areas.
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-semibold text-white/90">
                          Upcoming Schedule
                        </div>
                        <MiniBadge>Auto reminders</MiniBadge>
                      </div>
                      <div className="mt-3 space-y-3">
                        {[
                          { title: "Math Test", meta: "JHS 2 • 45 mins" },
                          { title: "Science Exam", meta: "JHS 3 • 60 mins" },
                          { title: "Results Approval", meta: "Admin • Today" },
                        ].map((e) => (
                          <div key={e.title} className="flex items-start gap-3">
                            <div className="mt-0.5 h-8 w-8 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                              <CalendarDays className="h-4 w-4 text-white/70" />
                            </div>
                            <div>
                              <div className="text-sm text-white/90 font-medium">{e.title}</div>
                              <div className="text-xs text-white/60">{e.meta}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-2 text-white/90 font-semibold">
                      <Lock className="h-4 w-4 text-white/70" />
                      Role-based access & audit-friendly actions
                    </div>
                    <div className="mt-2 text-xs text-white/60">
                      Protect scores, approvals, and result slips with permissions.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <MiniBadge>Clean UI</MiniBadge>
                <MiniBadge>Mobile-friendly</MiniBadge>
                <MiniBadge>Fast workflows</MiniBadge>
                <MiniBadge>Secure data</MiniBadge>
              </div>
            </motion.div>
          </div>
        </div>

        {/* soft wave into white */}
        <div className="h-16 md:h-24 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* PROBLEM -> SOLUTION */}
      <Section id="problems" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              From chaos to clarity
            </h2>
            <p className="mt-4 text-gray-600">
              EduManage reduces errors, saves time, and gives your school a single
              source of truth.
            </p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp}>
              <Card className="border-red-200/60">
                <div className="flex items-center gap-2 text-red-700 font-semibold">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 border border-red-100">
                    <Timer className="h-5 w-5" />
                  </span>
                  The Challenges
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    "Manual record keeping and scattered files",
                    "Exam and result errors that damage trust",
                    "Slow communication between staff and parents",
                    "Disorganized student data across terms",
                  ].map((t) => (
                    <div key={t} className="flex gap-3">
                      <div className="mt-0.5 text-red-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="text-gray-700">{t}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="border-emerald-200/60">
                <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  The Solution
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    "Centralized school system for all records",
                    "Secure exam & result management with approvals",
                    "Fast data access for admins and teachers",
                    "Reliable reporting for better decisions",
                  ].map((t) => (
                    <div key={t} className="flex gap-3">
                      <div className="mt-0.5 text-emerald-600">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="text-gray-700">{t}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl border border-emerald-200/60 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                  Built to be simple for schools — powerful enough for growth.
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CORE FEATURES */}
      <Section id="features" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Core features that actually matter
            </h2>
            <p className="mt-4 text-gray-600">
              Everything is designed to keep workflows smooth and reduce admin load.
            </p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp}>
              <Card>
                <FeatureRow
                  icon={Users}
                  title="Student Management"
                  desc="Profiles, history, attendance and records — clean, searchable, and organized."
                />
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card>
                <FeatureRow
                  icon={ClipboardCheck}
                  title="Examination & Assessment"
                  desc="Create exams, manage marking, approvals, and generate results with confidence."
                />
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card>
                <FeatureRow
                  icon={BarChart3}
                  title="Reports & Analytics"
                  desc="Quick insights that show class performance and help you act early."
                />
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card>
                <FeatureRow
                  icon={MessageSquare}
                  title="Communication Hub"
                  desc="Keep teachers, admins, parents, and students aligned with updates and notices."
                />
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card>
                <FeatureRow
                  icon={ShieldCheck}
                  title="Secure & Reliable"
                  desc="Role-based access and controlled approvals to protect sensitive academic data."
                />
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card>
                <FeatureRow
                  icon={Lock}
                  title="Permissions & Roles"
                  desc="Admins control who can create, approve, and publish results — no surprises."
                />
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* MODULE 4 (DETAILED) */}
      <Section id="exams" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                <Sparkles className="h-4 w-4" />
                Module 4 — Current Focus
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                Examination & Assessment Management
              </h2>
              <p className="mt-4 text-gray-600">
                A key feature of EduManage: create exams, build a question bank, enter results securely,
                generate slips, and view simple performance analytics.
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow hover:bg-blue-700 transition-all"
              >
                Request a Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition-all"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>

          <div className="mt-10 grid lg:grid-cols-12 gap-8">
            {/* Tabs */}
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <div className="sticky top-24 space-y-3">
                <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 px-2 pb-2">
                    Module capabilities
                  </div>
                  <div className="space-y-2">
                    {examTabs.map(({ key, icon: Icon, title }) => {
                      const active = key === activeExamTab;
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveExamTab(key)}
                          className={[
                            "w-full text-left rounded-xl px-3 py-3 border transition-all",
                            active
                              ? "bg-blue-600 text-white border-blue-600 shadow"
                              : "bg-white hover:bg-gray-50 border-gray-200 text-gray-900",
                          ].join(" ")}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={[
                                "inline-flex h-9 w-9 items-center justify-center rounded-xl",
                                active ? "bg-white/15" : "bg-blue-50 text-blue-700 border border-blue-100",
                              ].join(" ")}
                            >
                              <Icon className="h-5 w-5" />
                            </span>
                            <div className="font-semibold">{title}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-5">
                  <div className="flex items-center gap-2 font-semibold text-gray-900">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    Security by design
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    Results entry and approvals are protected with roles, so only the right people can edit
                    or publish scores.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Details */}
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <Card className="p-0">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 border border-blue-100">
                      <activeTab.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold tracking-tight">
                        {activeTab.title}
                      </h3>
                      <div className="mt-1 text-sm text-gray-600">
                        Built to reduce errors and speed up term workflows.
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    {activeTab.bullets.map((b) => (
                      <div key={b} className="flex gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                        <div className="text-sm text-gray-700">{b}</div>
                      </div>
                    ))}
                  </div>

                  {/* “Mini UI” */}
                  <div className="mt-8 rounded-2xl border border-gray-200 bg-white">
                    <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
                      <div className="font-semibold text-gray-900">Example workflow</div>
                      <div className="flex gap-2">
                        <MiniBadge>Less clicking</MiniBadge>
                        <MiniBadge>More accuracy</MiniBadge>
                      </div>
                    </div>

                    <div className="p-5 grid md:grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                        <div className="flex items-center gap-2 font-semibold">
                          <FileText className="h-4 w-4 text-blue-700" />
                          Create
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Setup exam details, instructions and timelines.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                        <div className="flex items-center gap-2 font-semibold">
                          <ClipboardCheck className="h-4 w-4 text-blue-700" />
                          Enter Scores
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Secure entry with validations to reduce mistakes.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                        <div className="flex items-center gap-2 font-semibold">
                          <GraduationCap className="h-4 w-4 text-blue-700" />
                          Approve & Publish
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                          Generate result slips + basic analytics instantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-5 md:px-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <div className="flex items-center gap-2 text-gray-800">
                      <ShieldCheck className="h-5 w-5 text-emerald-600" />
                      <span className="font-semibold">Result integrity</span>
                      <span className="text-gray-600 text-sm">
                        — approvals before slips are generated
                      </span>
                    </div>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 transition-all"
                    >
                      Talk to us about Module 4 <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>

              <div className="mt-6 grid md:grid-cols-3 gap-4">
                <motion.div variants={fadeUp}>
                  <Card>
                    <FeatureRow
                      icon={Timer}
                      title="Faster term close"
                      desc="Streamline exams → entry → approval in one flow."
                    />
                  </Card>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Card>
                    <FeatureRow
                      icon={CheckCircle2}
                      title="Fewer errors"
                      desc="Validation and controlled roles reduce mistakes."
                    />
                  </Card>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <Card>
                    <FeatureRow
                      icon={BarChart3}
                      title="Clear insights"
                      desc="See average/high/low performance quickly."
                    />
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              How EduManage works
            </h2>
            <p className="mt-4 text-gray-600">
              Simple onboarding. Your school is ready in steps — not weeks.
            </p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1. School registers",
                desc: "Create the institution account and confirm admin access.",
                icon: Users,
              },
              {
                title: "2. Setup users",
                desc: "Add classes, teachers, students, and academic structure.",
                icon: ClipboardCheck,
              },
              {
                title: "3. Manage academics",
                desc: "Run exams, enter results, approve, publish slips & reports.",
                icon: BarChart3,
              },
            ].map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Card>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-gray-200">
                      <s.icon className="h-6 w-6 text-blue-700" />
                    </span>
                    <div className="text-lg font-extrabold">{s.title}</div>
                  </div>
                  <p className="mt-3 text-gray-600">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHO IT'S FOR + WHY */}
      <Section id="who" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Who it’s for
              </h2>
              <p className="mt-4 text-gray-600">
                EduManage is built for the real day-to-day of schools.
              </p>

              <div className="mt-8 space-y-4">
                <Card>
                  <FeatureRow
                    icon={ShieldCheck}
                    title="School Administrators"
                    desc="Control permissions, approvals, reporting and performance overview."
                  />
                </Card>
                <Card>
                  <FeatureRow
                    icon={ClipboardCheck}
                    title="Teachers"
                    desc="Create exams, manage marking, enter scores and track class progress."
                  />
                </Card>
                <Card>
                  <FeatureRow
                    icon={MessageSquare}
                    title="Students & Parents"
                    desc="Clear results, better communication, and consistent academic records."
                  />
                </Card>
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-teal-50 p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-gray-200 px-3 py-1 text-sm font-semibold text-gray-800">
                  <Sparkles className="h-4 w-4 text-blue-700" />
                  Why EduManage
                </div>

                <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
                  Trust, simplicity, and scale
                </h3>
                <p className="mt-3 text-gray-600">
                  Built for African schools — modern, secure, and easy to use.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Easy to use (teachers don’t struggle)",
                    "Designed for African school workflows",
                    "Scalable for growing institutions",
                    "Modern & secure technology approach",
                  ].map((t) => (
                    <div key={t} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div className="text-gray-700">{t}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white border border-gray-200 p-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      Secure
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Role-based access and controlled approvals.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-white border border-gray-200 p-4">
                    <div className="flex items-center gap-2 font-semibold">
                      <BarChart3 className="h-4 w-4 text-blue-700" />
                      Insightful
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Basic analytics that help decisions.
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <MiniBadge>Clean UI</MiniBadge>
                  <MiniBadge>Fast setup</MiniBadge>
                  <MiniBadge>Less errors</MiniBadge>
                  <MiniBadge>Better reporting</MiniBadge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta" className="bg-slate-950">
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl" />
          </div>

          <motion.div
            variants={fadeUp}
            className="relative rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14 text-center backdrop-blur"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Ready to modernize your school?
            </h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Get a guided demo of Module 4 (Exams & Assessments) and see how EduManage
              reduces errors and speeds up end-of-term workflows.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/enroll"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 shadow hover:-translate-y-0.5 transition-all"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Talk to Us <MessageSquare className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Pill icon={Lock} text="Role-based access" />
              <Pill icon={ClipboardCheck} text="Validated score entry" />
              <Pill icon={BarChart3} text="Basic analytics" />
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div variants={fadeUp} className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Contact EduManage
              </h2>
              <p className="mt-4 text-gray-600">
                Want a demo of the Examination & Assessment module? Send a message and we’ll respond.
              </p>

              <div className="mt-8 space-y-4">
                <Card>
                  <FeatureRow
                    icon={MessageSquare}
                    title="Fast response"
                    desc="We’ll get back to you with next steps and a demo schedule."
                  />
                </Card>
                <Card>
                  <FeatureRow
                    icon={ShieldCheck}
                    title="School-friendly onboarding"
                    desc="We guide admins and teachers through the setup."
                  />
                </Card>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              <div className="text-lg font-extrabold">Quick message</div>
              <div className="mt-1 text-sm text-gray-600">
                (Hook this to your form endpoint later)
              </div>

              <form className="mt-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Name</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="School admin / teacher"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700">Email</label>
                    <input
                      className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                      placeholder="name@school.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-blue-200"
                    rows={5}
                    placeholder="Tell us your school name, level (Crèche–JHS), and what you want to improve…"
                  />
                </div>

                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition-all"
                >
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>

                <div className="text-xs text-gray-500">
                  By sending, you agree to be contacted about EduManage.
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="text-white font-extrabold tracking-tight">EduManage</div>
              <div className="text-sm text-gray-400">
                School Management Platform
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link className="text-sm hover:text-white transition" href="#features">
                Features
              </Link>
              <Link className="text-sm hover:text-white transition" href="#exams">
                Module 4
              </Link>
              <Link className="text-sm hover:text-white transition" href="#how">
                How it works
              </Link>
              <Link className="text-sm hover:text-white transition" href="#contact">
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm">
            © {new Date().getFullYear()} EduManage. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
