import { NavLink } from "react-router-dom";
import * as Icons from "lucide-react";
import { SIDEBAR_ITEMS } from "../../lib/mockData";
import { GraduationCap, ChevronLeft, ChevronRight, LifeBuoy } from "lucide-react";

const AdminSidebar = ({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  return (
    <>
      {mobileOpen && (
        <div
          data-testid="admin-sidebar-backdrop"
          className="fixed inset-0 z-30 bg-slate-900/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        data-testid="admin-sidebar"
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen flex flex-col bg-slate-900 border-r border-slate-800 text-slate-300 transition-all duration-300 ease-in-out
        ${collapsed ? "lg:w-20" : "lg:w-64"}
        ${mobileOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0"} w-64`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-red-600 flex items-center justify-center shadow-lg shadow-red-600/30">
              <GraduationCap className="h-5 w-5 text-white" strokeWidth={2.2} />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="font-outfit font-bold text-white text-lg leading-none tracking-tight">Trainlytix</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 mt-1">Admin Portal</span>
              </div>
            )}
          </div>
          <button
            data-testid="admin-sidebar-collapse-btn"
            onClick={() => setCollapsed((v) => !v)}
            className="hidden lg:inline-flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:bg-slate-800 hover:text-white transition"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto scrollbar-thin py-4 px-3 space-y-0.5">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = Icons[item.icon] || Icons.Circle;
            return (
              <NavLink
                key={item.key}
                to={item.path}
                data-testid={`nav-admin-${item.key}`}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `group relative flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${isActive
                    ? "bg-slate-800 text-white border-l-[3px] border-red-500 pl-[9px]"
                    : "text-slate-400 hover:bg-slate-800/60 hover:text-white border-l-[3px] border-transparent pl-[9px]"
                  }`
                }
              >
                <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={2} />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </NavLink>
            );
          })}
        </nav>

        <div className={`p-4 border-t border-slate-800 ${collapsed ? "hidden lg:block" : ""}`}>
          {!collapsed ? (
            <div className="rounded-xl bg-gradient-to-br from-slate-800 to-slate-800/40 p-4 border border-slate-700/50">
              <p className="text-xs text-slate-400 mb-1.5">Need help?</p>
              <p className="text-sm text-white font-medium leading-snug mb-3">Admin Support</p>
              <button className="text-xs font-semibold text-red-400 hover:text-red-300">support@trainlytix.io →</button>
            </div>
          ) : (
            <div className="flex justify-center">
              <LifeBuoy className="h-5 w-5 text-slate-500" />
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
