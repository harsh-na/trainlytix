import { ROADMAP, PROGRESS } from "../lib/mockData";
import StatusPill from "../components/StatusPill";
import { CheckCircle2, Circle, Clock3 } from "lucide-react";

const Roadmap = () => {
  return (
    <div className="space-y-6 max-w-5xl">
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold">Full-Stack Engineering · Cohort B-26</p>
            <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900 mt-1.5">My Training Roadmap</h2>
            <p className="text-sm text-slate-500 mt-1">14-week path from foundations to capstone delivery.</p>
          </div>
          <div className="rounded-xl border border-slate-100 px-4 py-3 bg-slate-50/60">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">Overall</p>
            <p className="font-outfit text-2xl font-bold text-slate-900 mt-0.5">{PROGRESS.overall}%</p>
          </div>
        </div>

        <ol className="relative border-l-2 border-slate-100 ml-3 space-y-8 pt-2">
          {ROADMAP.map((p) => {
            const Icon = p.status === "completed" ? CheckCircle2 : p.status === "in_progress" ? Clock3 : Circle;
            return (
              <li key={p.id} data-testid={`roadmap-phase-${p.id}`} className="ml-6">
                <span className={`absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full
                  ${p.status === "completed" ? "bg-emerald-500 text-white" :
                    p.status === "in_progress" ? "bg-blue-600 text-white ring-4 ring-blue-100" :
                    "bg-white border-2 border-slate-200 text-slate-400"}`}>
                  <Icon className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-1">
                  <h3 className="font-outfit text-lg font-semibold text-slate-900">Phase {p.id}: {p.title}</h3>
                  <StatusPill status={p.status} />
                </div>
                <p className="text-sm text-slate-500">{p.weeks} · 4-5 modules · live + lab + assessment</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Roadmap;
