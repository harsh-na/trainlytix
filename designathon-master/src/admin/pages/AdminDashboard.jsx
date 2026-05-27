import { 
  Users, BookOpen, Trophy, Zap, AlertTriangle, TrendingUp, 
  BarChart3, CheckCircle2, Clock, Activity, BarChart4, GitBranch 
} from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, 
  LineChart, Line, PieChart, Pie, Cell
} from "recharts";
import KPICard from "../components/KPICard";
import StatusBadge from "../components/StatusBadge";
import {
  KPI_METRICS, BATCH_HEALTH, COMPLIANCE_RISKS, PERFORMANCE_DISTRIBUTION,
  SYSTEM_ALERTS, RECENT_ACTIONS, COMPLIANCE_METRICS
} from "../lib/mockData";

const AdminDashboard = () => {
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="space-y-6">
      {/* Executive Overview */}
      <div>
        <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-4">Executive Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <KPICard 
            label="Active Batches" 
            value={KPI_METRICS.activeBatches} 
            Icon={BookOpen} 
            tone="blue"
            change={{ text: "+2 this month", positive: true }}
          />
          <KPICard 
            label="Total Trainees" 
            value={KPI_METRICS.totalTrainees} 
            Icon={Users} 
            tone="emerald"
            change={{ text: "+18 enrolled", positive: true }}
          />
          <KPICard 
            label="Active Trainers" 
            value={KPI_METRICS.activeTrainers} 
            Icon={Trophy} 
            tone="purple"
            change={{ text: "100% utilization", positive: true }}
          />
          <KPICard 
            label="Completion Rate" 
            value={`${KPI_METRICS.completionRate}%`} 
            Icon={TrendingUp} 
            tone="amber"
            change={{ text: "+5% this week", positive: true }}
          />
        </div>
      </div>

      {/* Compliance Status Overview */}
      <div>
        <h2 className="font-outfit text-lg font-semibold text-slate-900 mb-4">Compliance Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">On Track</p>
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            </div>
            <p className="font-outfit text-3xl font-bold text-slate-900">{KPI_METRICS.complianceStatus.onTrack}</p>
            <p className="text-xs text-slate-500 mt-2">{Math.round(KPI_METRICS.complianceStatus.onTrack / KPI_METRICS.totalTrainees * 100)}% of trainees</p>
          </div>
          <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">At Risk</p>
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <p className="font-outfit text-3xl font-bold text-slate-900">{KPI_METRICS.complianceStatus.atRisk}</p>
            <p className="text-xs text-slate-500 mt-2">Require attention</p>
          </div>
          <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Critical</p>
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>
            <p className="font-outfit text-3xl font-bold text-slate-900">{KPI_METRICS.complianceStatus.critical}</p>
            <p className="text-xs text-slate-500 mt-2">Immediate action needed</p>
          </div>
        </div>
      </div>

      {/* Batch Health & Performance Metrics */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Batch Health Monitor */}
        <div className="lg:col-span-2 rounded-xl bg-white border border-slate-100 shadow-sm p-6">
          <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-4">Batch Health Monitor</h3>
          <div className="space-y-3">
            {BATCH_HEALTH.slice(0, 4).map((batch) => (
              <div key={batch.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900 truncate">{batch.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{batch.traineesCount} trainees • {batch.trainersAssigned} trainers</p>
                  <div className="flex gap-4 mt-2">
                    <div className="flex-1 bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-600 h-full" style={{ width: `${batch.progress}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{batch.progress}%</span>
                  </div>
                </div>
                <div className="ml-4">
                  <StatusBadge status={batch.healthScore >= 85 ? "on_track" : batch.healthScore >= 70 ? "at_risk" : "pending"} label={`${batch.healthScore} pts`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Distribution */}
        <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
          <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-4">Performance Distribution</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={PERFORMANCE_DISTRIBUTION} dataKey="count" cx="50%" cy="50%" innerRadius={40} outerRadius={70}>
                  {PERFORMANCE_DISTRIBUTION.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
            {PERFORMANCE_DISTRIBUTION.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[idx] }} />
                <span className="text-slate-600">{item.range}: {item.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Metrics & Alerts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Compliance Metrics */}
        <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
          <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-4">Compliance Metrics</h3>
          <div className="space-y-3">
            {COMPLIANCE_METRICS.map((metric, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-slate-50/50">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{metric.metric}</p>
                  <p className="text-xs text-slate-500 mt-0.5">Target: {metric.target}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-slate-900">{metric.value}</p>
                  <StatusBadge status={metric.status} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Alerts */}
        <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
          <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-4">System Alerts</h3>
          <div className="space-y-2">
            {SYSTEM_ALERTS.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-3 rounded-lg border flex gap-3 ${
                  alert.type === "critical" ? "bg-red-50 border-red-200" : 
                  alert.type === "warning" ? "bg-amber-50 border-amber-200" : 
                  "bg-blue-50 border-blue-200"
                }`}
              >
                <AlertTriangle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                  alert.type === "critical" ? "text-red-600" : 
                  alert.type === "warning" ? "text-amber-600" : 
                  "text-blue-600"
                }`} />
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-semibold ${
                    alert.type === "critical" ? "text-red-700" : 
                    alert.type === "warning" ? "text-amber-700" : 
                    "text-blue-700"
                  }`}>{alert.title}</p>
                  <p className="text-xs text-slate-600 mt-0.5">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Risks */}
      <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-4">Compliance Risks & Alerts</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 font-semibold">Trainee</th>
                <th className="px-4 py-3 font-semibold">Batch</th>
                <th className="px-4 py-3 font-semibold">Risk Type</th>
                <th className="px-4 py-3 font-semibold">Details</th>
                <th className="px-4 py-3 font-semibold">Severity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {COMPLIANCE_RISKS.map((risk) => (
                <tr key={risk.id} className="hover:bg-slate-50/60 transition">
                  <td className="px-4 py-3 font-medium text-slate-900">{risk.trainee}</td>
                  <td className="px-4 py-3 text-slate-600">{risk.batch}</td>
                  <td className="px-4 py-3 text-slate-600 capitalize">{risk.type.replace(/_/g, " ")}</td>
                  <td className="px-4 py-3 text-slate-600">
                    {risk.type === "low_attendance" && `${risk.attendanceRate}% attendance`}
                    {risk.type === "overdue_assignment" && `${risk.overdueDays} days overdue`}
                    {risk.type === "low_performance" && `Score: ${risk.averageScore}/100`}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={risk.severity} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent Admin Actions */}
      <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-4">Recent Admin Actions</h3>
        <div className="space-y-2">
          {RECENT_ACTIONS.map((action) => (
            <div key={action.id} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 hover:bg-slate-50 transition">
              <Activity className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900">{action.description}</p>
                <p className="text-xs text-slate-500 mt-1">By {action.admin} • {action.timestamp}</p>
              </div>
              <StatusBadge status={action.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
