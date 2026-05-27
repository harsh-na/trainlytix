import { ATTENDANCE } from "../lib/mockData";
import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { CheckCircle2, XCircle } from "lucide-react";

const sessions = [
  { date: "Feb 14", topic: "JWT & Middlewares", present: true },
  { date: "Feb 13", topic: "FastAPI Routing", present: true },
  { date: "Feb 12", topic: "Async Python", present: true },
  { date: "Feb 11", topic: "REST Patterns", present: false },
  { date: "Feb 10", topic: "Pydantic v2", present: true },
  { date: "Feb 07", topic: "Git Advanced", present: true },
  { date: "Feb 06", topic: "React Hooks", present: true },
  { date: "Feb 05", topic: "TypeScript Basics", present: true },
];

const Attendance = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 flex flex-col items-center">
        <h3 className="font-outfit text-base font-semibold text-slate-900 self-start mb-4">Overall</h3>
        <div className="h-52 w-52 relative">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart innerRadius="75%" outerRadius="100%" data={[{ value: ATTENDANCE.percent, fill: "#2563eb" }]} startAngle={90} endAngle={-270}>
              <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
              <RadialBar background={{ fill: "#eff6ff" }} dataKey="value" cornerRadius={20} />
            </RadialBarChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="font-outfit text-4xl font-bold text-slate-900">{ATTENDANCE.percent}%</p>
            <p className="text-xs text-slate-500 mt-1">{ATTENDANCE.attended}/{ATTENDANCE.total} sessions</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 w-full mt-6">
          <Stat label="Present" value={ATTENDANCE.attended} accent="text-emerald-600" />
          <Stat label="Missed" value={ATTENDANCE.total - ATTENDANCE.attended} accent="text-rose-600" />
        </div>
      </div>

      <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-base font-semibold text-slate-900 mb-4">Recent Attendance Log</h3>
        <div className="divide-y divide-slate-50">
          {sessions.map((s, i) => (
            <div key={i} data-testid={`attendance-row-${i}`} className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                {s.present ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-rose-500" />
                )}
                <div>
                  <p className="text-sm font-semibold text-slate-900">{s.topic}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{s.date}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold ${s.present ? "text-emerald-700" : "text-rose-700"}`}>
                {s.present ? "Present" : "Absent"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value, accent }) => (
  <div className="rounded-lg bg-slate-50 p-3 text-center">
    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{label}</p>
    <p className={`font-outfit text-2xl font-bold mt-1 ${accent}`}>{value}</p>
  </div>
);

export default Attendance;
