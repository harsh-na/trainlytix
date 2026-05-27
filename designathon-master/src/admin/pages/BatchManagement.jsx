import { Users, Plus, Search, Filter } from "lucide-react";
import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { BATCH_HEALTH } from "../lib/mockData";

const BatchManagement = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-outfit text-3xl font-bold text-slate-900">Batch Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage and monitor all training batches</p>
        </div>
        <button className="h-11 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold inline-flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create Batch
        </button>
      </div>

      <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search batches..."
              className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button className="h-10 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold inline-flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500 uppercase tracking-wider border-b border-slate-100 bg-slate-50/50">
                <th className="px-4 py-3 font-semibold">Batch Name</th>
                <th className="px-4 py-3 font-semibold">Progress</th>
                <th className="px-4 py-3 font-semibold">Trainees</th>
                <th className="px-4 py-3 font-semibold">Trainers</th>
                <th className="px-4 py-3 font-semibold">Health</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {BATCH_HEALTH.map((batch) => (
                <tr key={batch.id} className="hover:bg-slate-50/60 transition cursor-pointer">
                  <td className="px-4 py-3 font-medium text-slate-900 max-w-xs truncate">{batch.name}</td>
                  <td className="px-4 py-3">
                    <div className="w-24 bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: `${batch.progress}%` }} />
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">{batch.traineesCount}</td>
                  <td className="px-4 py-3 text-slate-600">{batch.trainersAssigned}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-bold">{batch.healthScore}<span className="text-xs font-normal text-slate-500">/100</span></div>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status="in_progress" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BatchManagement;
