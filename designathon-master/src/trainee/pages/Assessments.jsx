import { ASSIGNMENTS } from "../lib/mockData";
import StatusPill from "../components/StatusPill";
import { Upload } from "lucide-react";
import { toast } from "sonner";

const Assessments = () => {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100">
        <div>
          <h3 className="font-outfit text-lg font-semibold text-slate-900">Assessments & Assignments</h3>
          <p className="text-xs text-slate-500 mt-1">All your assigned tasks across courses.</p>
        </div>
        <button
          data-testid="bulk-submit-btn"
          onClick={() => toast.info("Choose an assignment to submit")}
          className="h-10 px-4 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition inline-flex items-center gap-2 flex-shrink-0"
        >
          <Upload className="h-4 w-4" /> Submit
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100 bg-slate-50/50">
              <th className="px-6 py-3 font-semibold">ID</th>
              <th className="px-3 py-3 font-semibold">Title</th>
              <th className="px-3 py-3 font-semibold">Course</th>
              <th className="px-3 py-3 font-semibold">Due</th>
              <th className="px-3 py-3 font-semibold">Priority</th>
              <th className="px-6 py-3 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {ASSIGNMENTS.map((a) => (
              <tr
                key={a.id}
                data-testid={`assessment-${a.id}`}
                className="hover:bg-slate-50/60 transition"
              >
                <td className="px-6 py-4 text-slate-500 font-mono text-xs">{a.id}</td>
                <td className="px-3 py-4 font-semibold text-slate-900">{a.title}</td>
                <td className="px-3 py-4 text-slate-600">{a.course}</td>
                <td className="px-3 py-4 text-slate-600 whitespace-nowrap">{a.due}</td>

                <td className="px-3 py-4">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold capitalize">
                    <span
                      className="h-2 w-2 rounded-full bg-slate-400"
                      aria-hidden
                    />
                    {a.priority}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <StatusPill status={a.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Assessments;

