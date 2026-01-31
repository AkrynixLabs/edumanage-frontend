"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function DashboardSidebar() {
  const { user } = useAuth();

  return (
    <aside className="w-64 bg-white border-r p-6">
      <div className="font-bold text-xl mb-8">EduManage</div>

      <nav className="space-y-3 text-sm">
        <Link href="/dashboard" className="block hover:text-blue-600">
          Overview
        </Link>

        {(user?.role === "SCHOOL_ADMIN" ||
          user?.role === "SUPER_ADMIN") && (
          <>
            <Link href="/dashboard/users" className="block hover:text-blue-600">
              Users
            </Link>
            <Link href="/dashboard/classes" className="block hover:text-blue-600">
              Classes
            </Link>
            <Link href="/dashboard/reports" className="block hover:text-blue-600">
              Reports
            </Link>
          </>
        )}

        {user?.role === "TEACHER" && (
          <>
            <Link href="/dashboard/my-classes" className="block hover:text-blue-600">
              My Classes
            </Link>
            <Link href="/dashboard/exams" className="block hover:text-blue-600">
              Exams
            </Link>
          </>
        )}

        {user?.role === "STUDENT" && (
          <>
            <Link href="/dashboard/subjects" className="block hover:text-blue-600">
              Subjects
            </Link>
            <Link href="/dashboard/results" className="block hover:text-blue-600">
              Results
            </Link>
          </>
        )}

        {user?.role === "PARENT" && (
          <>
            <Link href="/dashboard/children" className="block hover:text-blue-600">
              My Children
            </Link>
            <Link href="/dashboard/progress" className="block hover:text-blue-600">
              Progress
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
}
