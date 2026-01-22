// src/app/dashboard/page.tsx
"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Logged in as {user?.email}</p>
      <p>Role: {user?.role}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}
