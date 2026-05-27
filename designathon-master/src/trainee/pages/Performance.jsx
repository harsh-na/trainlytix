import { PERFORMANCE } from "../lib/mockData";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { Award, TrendingUp, Trophy } from "lucide-react";

const Performance = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Stat icon={Award} label="Latest Score" value={PERFORMANCE.latest} tone="emerald" />
        <Stat icon={TrendingUp} label="Average" value={PERFORMANCE.average} tone="blue" />
        <Stat icon={Trophy} label="Cohort Rank" value={`#${PERFORMANCE.rank} / ${PERFORMANCE.totalTrainees}`} tone="amber" />
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-base font-semibold text-slate-900 mb-4">Weekly Score Trend</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={PERFORMANCE.trend} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="week" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[50, 100]} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2.5} dot={{ r: 4, strokeWidth: 2, fill: "#fff" }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-base font-semibold text-slate-900 mb-4">Recent Assessment Scores</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PERFORMANCE.recentScores} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e2e8f0", fontSize: 12 }} />
              <Bar dataKey="score" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ icon: Icon, label, value, tone }) => {
  const map = { emerald: "bg-emerald-50 text-emerald-600", blue: "bg-blue-50 text-blue-600", amber: "bg-amber-50 text-amber-600" };
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5">
      <div className="flex items-start justify-between">
        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{label}</p>
        <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${map[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="font-outfit text-3xl font-bold text-slate-900 mt-3">{value}</p>
    </div>
  );
};

export default Performance;
