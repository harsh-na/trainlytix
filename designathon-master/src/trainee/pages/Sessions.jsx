import { UPCOMING_SESSIONS } from "../lib/mockData";
import { Calendar, Clock, MapPin, User, Video } from "lucide-react";

const Sessions = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="This Week" value="6" hint="scheduled" />
        <StatCard label="Live" value="3" hint="in person" />
        <StatCard label="Online" value="3" hint="zoom" />
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-lg font-semibold text-slate-900 mb-6">Upcoming Schedule</h3>

        <div className="space-y-4">
          {UPCOMING_SESSIONS.map((s, idx) => (
            <div
              key={s.id}
              data-testid={`session-row-${s.id}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm transition-all p-5 group"
            >
              <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-2 md:gap-0">
                <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{s.date.split(",")[0]}</p>
                <p className="font-outfit text-xl font-bold text-slate-900">{s.date.split(",")[1]?.trim()}</p>
              </div>

              <div className="md:col-span-5">
                <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700 transition">{s.title}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-slate-400" /> {s.time}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-slate-400" /> {s.trainer}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-slate-400" /> {s.room}
                  </span>
                </div>
              </div>

              <div className="md:col-span-2 flex md:justify-center">
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg ${
                    s.mode === "Online" ? "bg-blue-50 text-blue-600" : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {s.mode === "Online" && <Video className="h-3 w-3" />}
                  {s.mode}
                </span>
              </div>

              <div className="md:col-span-3 flex md:justify-end">
                <button
                  type="button"
                  data-testid={`join-session-${s.id}`}
                  className="h-9 px-5 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition"
                >
                  {idx === 0 ? "Join now" : "Details"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value, hint }) => (
  <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-5 hover:shadow-md transition">
    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{label}</p>
    <p className="font-outfit text-3xl font-bold text-slate-900 mt-2">{value}</p>
    <p className="text-xs text-slate-500 mt-2">{hint}</p>
  </div>
);

export default Sessions;

