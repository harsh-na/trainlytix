import { BarChart3, Plus } from "lucide-react";

const ReportsAndDashboards = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-outfit text-3xl font-bold text-slate-900">Reports & Dashboards</h1>
          <p className="text-sm text-slate-500 mt-1">Generate and view analytical reports</p>
        </div>
        <button className="h-11 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold inline-flex items-center gap-2">
          <Plus className="h-4 w-4" /> New Report
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Batch Performance Report", date: "Weekly" },
          { title: "Trainee Progress Dashboard", date: "Real-time" },
          { title: "Trainer Effectiveness Report", date: "Monthly" },
          { title: "Attendance & Compliance", date: "Daily" },
          { title: "Assessment Analytics", date: "Weekly" },
          { title: "Course Effectiveness", date: "Monthly" }
        ].map((report, idx) => (
          <div key={idx} className="rounded-xl bg-white border border-slate-100 shadow-sm p-5 hover:shadow-md transition cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <BarChart3 className="h-6 w-6 text-red-600" />
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded">{report.date}</span>
            </div>
            <h3 className="font-semibold text-slate-900">{report.title}</h3>
            <p className="text-xs text-slate-500 mt-2">Click to view or regenerate</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsAndDashboards;
