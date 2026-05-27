import { useState } from "react";
import { Search, Video, FileType2, Newspaper, Download, ArrowUpRight } from "lucide-react";
import { MATERIALS } from "../lib/mockData";

const Materials = () => {
  const [q, setQ] = useState("");
  const filtered = MATERIALS.filter((m) => m.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 sm:p-5 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            data-testid="materials-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search materials..."
            className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          {["All", "PDF", "Video", "Article"].map((t) => (
            <button
              key={t}
              type="button"
              className="h-10 px-4 rounded-lg text-xs font-semibold border border-slate-200 hover:bg-slate-50 text-slate-700 transition"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => {
          const Icon = m.type === "Video" ? Video : m.type === "Article" ? Newspaper : FileType2;
          const tone =
            m.type === "Video"
              ? "bg-rose-50 text-rose-600"
              : m.type === "Article"
                ? "bg-indigo-50 text-indigo-600"
                : "bg-blue-50 text-blue-600";

          return (
            <div
              key={m.id}
              data-testid={`material-card-${m.id}`}
              className="group rounded-2xl bg-white border border-slate-100 shadow-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition cursor-pointer"
            >
              <div className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${tone}`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                {m.type} · {m.course}
              </p>
              <h4 className="font-outfit text-base font-semibold text-slate-900 mt-1 leading-snug">{m.title}</h4>
              <p className="text-xs text-slate-500 mt-1.5">
                {m.size} · {m.date}
              </p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                <button
                  type="button"
                  className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition"
                >
                  Open <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  className="text-xs font-medium text-slate-500 hover:text-slate-900 inline-flex items-center gap-1 transition"
                >
                  <Download className="h-3.5 w-3.5" /> Download
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Materials;

