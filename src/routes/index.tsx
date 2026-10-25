import { Navigate, Route, Routes } from "react-router";

function DashboardPage() {
  return (
    <main className="page-container">
      <h1>Dashboard</h1>
      <p>Selamat datang di React Bun Template.</p>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="page-container">
      <h1>404</h1>
      <p>Halaman tidak ditemukan.</p>
    </main>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
