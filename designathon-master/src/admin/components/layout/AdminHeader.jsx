import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bell, Search, Menu, LogOut, Settings, UserRound } from "lucide-react";
import { SIDEBAR_ITEMS } from "../../lib/mockData";
import { useAuth } from "../../../context/AuthContext";

const AdminHeader = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const current = SIDEBAR_ITEMS.find((i) => location.pathname.startsWith(i.path));
  const unreadAlerts = 3;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };


  return (
    <header
      data-testid="admin-header"
      className="sticky top-0 z-20 backdrop-blur-xl bg-white/80 border-b border-slate-200"
    >
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-3 min-w-0">
          <button
            data-testid="admin-mobile-menu-btn"
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="hidden sm:block min-w-0">
            <p className="text-xs text-slate-500 leading-none">Admin / <span className="text-slate-700 font-medium">{current?.label || "Dashboard"}</span></p>
            <h1 className="font-outfit text-lg font-semibold text-slate-900 mt-1 truncate">{current?.label || "Dashboard"}</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              data-testid="admin-header-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search batches, trainees, trainers..."
              className="w-80 h-9 rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          <button
            data-testid="admin-header-alerts-btn"
            onClick={() => navigate("/admin/alerts")}
            className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition"
          >
            <Bell className="h-[18px] w-[18px]" />
            {unreadAlerts > 0 && (
              <span className="absolute -top-1 -right-1 h-4 min-w-[16px] px-1 rounded-full bg-red-500 text-[10px] font-bold text-white flex items-center justify-center">
                {unreadAlerts}
              </span>
            )}
          </button>

          <div className="relative">
            <button 
              data-testid="admin-profile-menu-trigger"
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2.5 pl-1 pr-2 sm:pr-3 py-1 rounded-full hover:bg-slate-100 transition"
            >
              <div className="h-8 w-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                {user.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-slate-900 leading-none">{user.name.split(" ")[0]}</p>
                <p className="text-xs text-slate-500 leading-none mt-1">{user.role}</p>
              </div>
            </button>
            
            {showMenu && (
              <div className="absolute top-full right-0 mt-1 w-56 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
                <div className="px-4 py-3 border-b border-slate-200">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
                <button 
                  data-testid="admin-menu-profile"
                  onClick={() => { navigate("/admin/profile"); setShowMenu(false); }}
                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                >
                  <UserRound className="h-4 w-4" /> Profile
                </button>
                <button 
                  data-testid="admin-menu-settings"
                  className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 flex items-center gap-2"
                >
                  <Settings className="h-4 w-4" /> Settings
                </button>
                <hr className="my-1" />
                <button 
                  data-testid="admin-logout-btn"
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50 flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
