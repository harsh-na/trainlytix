import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import { Users, BookOpen, CheckSquare, TrendingUp, AlertCircle, BarChart3 } from "lucide-react";

const TrainerDashboard = () => {
  const { user } = useAuth();

  if (!user || user.role !== "trainer") {
    return <Navigate to="/login" replace />;
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="font-outfit text-3xl font-bold text-slate-900">Trainer Dashboard</h1>
          <p className="text-slate-600">Welcome, {user.name}. Here's your teaching overview.</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KPICard
            icon={Users}
            label="Active Trainees"
            value="24"
            change="+3 this week"
            tone="blue"
          />
          <KPICard
            icon={BookOpen}
            label="Courses"
            value="6"
            change="2 in progress"
            tone="emerald"
          />
          <KPICard
            icon={CheckSquare}
            label="Assignments"
            value="48"
            change="12 pending review"
            tone="amber"
          />
          <KPICard
            icon={TrendingUp}
            label="Avg Performance"
            value="78%"
            change="+5% vs last batch"
            tone="red"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Submissions */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 p-6">
            <h2 className="font-outfit text-lg font-bold text-slate-900 mb-4">Recent Submissions</h2>
            <div className="space-y-3">
              {[
                { trainee: "Aanya Sharma", assignment: "Module 3 Quiz", submitted: "2 hours ago", status: "pending" },
                { trainee: "Rohan Patel", assignment: "Project Phase 1", submitted: "4 hours ago", status: "pending" },
                { trainee: "Priya Singh", assignment: "Case Study", submitted: "1 day ago", status: "reviewed" },
                { trainee: "Vikram Kumar", assignment: "Module 2 Quiz", submitted: "2 days ago", status: "reviewed" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <div className="flex-1">
                    <p className="font-medium text-slate-900 text-sm">{item.trainee}</p>
                    <p className="text-xs text-slate-500">{item.assignment}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500">{item.submitted}</p>
                    <span className={`inline-block mt-1 px-2 py-1 rounded text-xs font-medium ${
                      item.status === "pending" 
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-emerald-100 text-emerald-700"
                    }`}>
                      {item.status === "pending" ? "Pending" : "Reviewed"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="font-outfit font-bold text-slate-900 mb-4 text-sm">Quick Actions</h3>
              <div className="space-y-2">
                <ActionButton label="Grade Submissions" />
                <ActionButton label="Send Announcement" />
                <ActionButton label="Schedule Session" />
                <ActionButton label="View Performance Report" />
              </div>
            </div>

            {/* Announcements */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-900 text-sm">New Batch Assigned</p>
                  <p className="text-xs text-blue-700 mt-1">Batch 2026-Q2 is now assigned to you</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trainee Performance Overview */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h2 className="font-outfit text-lg font-bold text-slate-900 mb-4">Trainee Performance Overview</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatBox label="Excellent (90-100%)" value="8" color="emerald" />
            <StatBox label="Good (75-89%)" value="12" color="blue" />
            <StatBox label="Needs Support (<75%)" value="4" color="amber" />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

const KPICard = ({ icon: Icon, label, value, change, tone }) => {
  const toneClass = {
    blue: "bg-blue-50 border-blue-200 text-blue-600",
    emerald: "bg-emerald-50 border-emerald-200 text-emerald-600",
    amber: "bg-amber-50 border-amber-200 text-amber-600",
    red: "bg-red-50 border-red-200 text-red-600"
  };

  return (
    <div className={`rounded-lg border p-4 ${toneClass[tone]}`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs font-medium opacity-75">{label}</p>
          <p className="font-outfit text-2xl font-bold mt-2">{value}</p>
          <p className="text-xs mt-2 opacity-70">{change}</p>
        </div>
        <Icon className="h-5 w-5 opacity-50" strokeWidth={2} />
      </div>
    </div>
  );
};

const ActionButton = ({ label }) => (
  <button className="w-full px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 font-medium text-sm transition">
    {label}
  </button>
);

const StatBox = ({ label, value, color }) => {
  const colorMap = {
    emerald: "bg-emerald-100 text-emerald-900",
    blue: "bg-blue-100 text-blue-900",
    amber: "bg-amber-100 text-amber-900"
  };

  return (
    <div className={`rounded-lg p-4 text-center ${colorMap[color]}`}>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs font-medium mt-1">{label}</p>
    </div>
  );
};

export default TrainerDashboard;
