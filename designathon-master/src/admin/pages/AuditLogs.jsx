import { Search, Filter } from "lucide-react";
import { useState } from "react";
import StatusBadge from "../components/StatusBadge";
import { AUDIT_LOG } from "../lib/mockData";

const AuditLogs = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-outfit text-3xl font-bold text-slate-900">Audit Logs</h1>
        <p className="text-sm text-slate-500 mt-1">Track all administrative actions and system events</p>
      </div>

      <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search audit logs..."
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
                <th className="px-4 py-3 font-semibold">Timestamp</th>
                <th className="px-4 py-3 font-semibold">Admin</th>
                <th className="px-4 py-3 font-semibold">Action</th>
                <th className="px-4 py-3 font-semibold">Resource</th>
                <th className="px-4 py-3 font-semibold">IP Address</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {AUDIT_LOG.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/60 transition">
                  <td className="px-4 py-3 text-slate-600 font-mono text-xs">{log.timestamp}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{log.admin}</td>
                  <td className="px-4 py-3 text-slate-600">
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-semibold">{log.action}</span>
                  </td>
                  <td className="px-4 py-3 text-slate-600 truncate max-w-xs">{log.resource}</td>
                  <td className="px-4 py-3 text-slate-500 font-mono text-xs">{log.ipAddress}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status="success" />
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

export default AuditLogs;
