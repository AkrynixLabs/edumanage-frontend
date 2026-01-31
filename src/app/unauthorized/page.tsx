import Link from "next/link";

export const metadata = {
  title: "Unauthorized Access",
  description: "You do not have permission to access this page.",
};

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-lg rounded-xl bg-white p-10 shadow-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <span className="text-3xl">🚫</span>
        </div>

        {/* Title */}
        <h1 className="mb-2 text-2xl font-semibold text-gray-900">
          Access Denied
        </h1>

        {/* Description */}
        <p className="mb-8 text-gray-600">
          You do not have permission to view this page.  
          Please log in with an authorized account or return home.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Go to Login
          </Link>

          <Link
            href="/"
            className="rounded-lg border border-gray-300 px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Return Home
          </Link>
        </div>

        {/* Footer help */}
        <p className="mt-8 text-sm text-gray-500">
          If you believe this is an error, please contact support.
        </p>
      </div>
    </main>
  );
}
