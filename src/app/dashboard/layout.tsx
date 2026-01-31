import ProtectedRoute from "@/components/auth/ProtectedRoute";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex bg-gray-100">
        <DashboardSidebar />

        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
