"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">
        Welcome back
      </h2>

      <p className="text-gray-600 mb-8">
        You are logged in as <strong>{user?.role}</strong>
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <DashboardCard
          title="Students"
          description="Manage student records and profiles"
        />

        <DashboardCard
          title="Exams"
          description="Create and manage examinations"
        />

        <DashboardCard
          title="Reports"
          description="View academic performance and analytics"
        />
      </div>
    </div>
  );
}

function DashboardCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
}
