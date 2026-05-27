import { useNavigate } from "react-router-dom";
import { ChevronRight, Award, TrendingUp, MessageSquarePlus, FileText } from "lucide-react";
import {
  TRAINEE,
  ROADMAP,
  PROGRESS,
  ATTENDANCE,
  ASSIGNMENTS,
  MATERIALS,
  PERFORMANCE,
  NOTIFICATIONS,
} from "../lib/mockData";
import StatusPill from "../components/StatusPill";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  RadialBarChart,
  RadialBar,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();

  const pendingCount = ASSIGNMENTS.filter((a) => a.status !== "completed").length;

  // mockData has PERFORMANCE.trend, but the UI expects weekly.
  const weekly = PROGRESS?.weekly ?? PERFORMANCE?.trend ?? [];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 p-6 sm:p-8 text-white shadow-lg overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10">
          <p className="text-sm font-semibold text-blue-100 mb-2">
            Welcome back, {TRAINEE.name.split(" ")[0]}.
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            You&apos;re enrolled in <span className="text-blue-100">{TRAINEE.batch}</span>
          </h2>
          <p className="text-blue-100 text-sm sm:text-base">
            Keep the momentum - 5 items need your attention this week
          </p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard icon={Award} label="Attendance" value={ATTENDANCE.percent} suffix="%" />
        <MetricCard icon={TrendingUp} label="Latest Score" value={PERFORMANCE.latest} />
        <MetricCard icon={MessageSquarePlus} label="Pending Tasks" value={pendingCount} />
        <MetricCard icon={TrendingUp} label="Phase Progress" value={PROGRESS.overall} suffix="%" />
      </div>

      {/* Training Roadmap Section */}
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 font-outfit">Training Roadmap</h3>
            <p className="text-sm text-slate-500 mt-1">Your end-to-end training journey</p>
          </div>
          <button
            onClick={() => navigate("/app/roadmap")}
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
          >
            View full <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6">
          {ROADMAP.slice(0, 5).map((phase, idx) => (
            <div key={phase.id ?? idx} className="flex-shrink-0 w-32 text-center">
              <div
                className={`h-12 w-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold bg-blue-600`}
              >
                {idx + 1}
              </div>
              <p className="text-xs text-slate-600 font-medium truncate">{phase.title}</p>
              <p className="text-xs text-slate-400 mt-1">{phase.weeks ?? phase.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Performance & Attendance Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Performance Snapshot */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 font-outfit">Performance Snapshot</h3>
            <button className="text-slate-400 hover:text-slate-600" type="button" aria-label="Add feedback">
              {/* no-op */}
            </button>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weekly}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="week" tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <YAxis tick={{ fontSize: 12 }} stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                  cursor={{ stroke: "#3b82f6" }}
                />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-200">
            <div>
              <p className="text-2xl font-bold text-slate-900">{PERFORMANCE.latest}</p>
              <p className="text-xs text-slate-500 uppercase font-medium mt-1">Latest</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{PERFORMANCE.average}</p>
              <p className="text-xs text-slate-500 uppercase font-medium mt-1">Average</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">#{PERFORMANCE.rank} / {PERFORMANCE.totalTrainees}</p>
              <p className="text-xs text-slate-500 uppercase font-medium mt-1">Rank</p>
            </div>
          </div>
        </div>

        {/* Attendance Donut Chart */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 font-outfit">Attendance</h3>

          <div className="h-48 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                innerRadius="70%"
                outerRadius="100%"
                data={[{ value: ATTENDANCE.percent, name: "Attendance" }]}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar background dataKey="value" cornerRadius={8} fill="#3b82f6" />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-slate-900">{ATTENDANCE.percent}%</p>
            <p className="text-sm text-slate-500 mt-2">
              {ATTENDANCE.attended}/{ATTENDANCE.total} sessions
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-teal-600">{ATTENDANCE.attended}</p>
                <p className="text-xs text-slate-500 uppercase font-medium mt-1">Present</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-rose-600">{ATTENDANCE.total - ATTENDANCE.attended}</p>
                <p className="text-xs text-slate-500 uppercase font-medium mt-1">Missed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pending Assignments */}
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-slate-900 font-outfit">Pending Assignments</h3>
          <button
            onClick={() => navigate("/app/assessments")}
            className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
          >
            View all <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Title</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Course</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Due</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-slate-600 uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {ASSIGNMENTS.filter((a) => a.status !== "completed")
                .slice(0, 5)
                .map((assignment, idx) => (
                  <tr key={assignment.id ?? idx} className="border-b border-slate-100 hover:bg-slate-50 transition">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-slate-400" />
                        <span className="font-medium text-slate-900">{assignment.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-600">{assignment.course}</td>
                    <td className="py-4 px-4 text-slate-600">{assignment.due}</td>
                    <td className="py-4 px-4">
                      <StatusPill status={assignment.status} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Materials & Notifications Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Recent Learning Materials */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 font-outfit">Recent Learning Materials</h3>
            <button
              onClick={() => navigate("/app/materials")}
              className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
            >
              Library <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {MATERIALS.slice(0, 4).map((material) => (
              <div
                key={material.id}
                className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 text-sm">{material.title}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {material.size} - {material.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-slate-900 font-outfit">Notifications</h3>
            <button
              onClick={() => navigate("/app/notifications")}
              className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1"
            >
              All <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {NOTIFICATIONS.slice(0, 4).map((notif) => (
              <div key={notif.id} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition">
                <div className="flex items-start gap-3">
                  <div className="h-3 w-3 rounded-full mt-2 flex-shrink-0 bg-blue-500" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-slate-900 text-sm">{notif.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard = ({ icon: Icon, label, value, suffix }) => (
  <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-4 hover:shadow-md transition">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-xs text-slate-600 uppercase font-semibold tracking-wide mb-1">{label}</p>
        <p className="text-2xl font-bold text-slate-900">
          {value}
          {suffix || ""}
        </p>
      </div>
      <div className="rounded-lg p-2 bg-slate-50 border border-slate-200">
        <Icon className="h-5 w-5 text-slate-700" />
      </div>
    </div>
  </div>
);

export default Dashboard;

