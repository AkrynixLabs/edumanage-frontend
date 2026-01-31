"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardHeader() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h1 className="font-semibold text-lg">Dashboard</h1>

      <div className="flex items-center gap-4 text-sm">
        <span className="text-gray-600">
          {user?.email} ({user?.role})
        </span>

        <button
          onClick={logout}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
