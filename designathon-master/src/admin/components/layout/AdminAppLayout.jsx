import { useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { useAuth } from "../../../context/AuthContext";

const AdminLayout = () => {
  const { user, ready } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!ready) return <div className="h-screen flex items-center justify-center text-slate-500">Loading...</div>;
  if (!user || user.role !== "admin") return <Navigate to="/login" replace />;


  return (
    <div className="min-h-screen flex bg-slate-50">
      <AdminSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminHeader onMenuClick={() => setMobileOpen(true)} />
        <main data-testid="admin-main-content" className="flex-1 px-4 sm:px-6 lg:px-8 py-6 lg:py-8 overflow-y-auto bg-slate-50">
          <div className="animate-fade-in-up">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
