import { Users, Plus, Search, Filter } from "lucide-react";
import { useState } from "react";
import StatusBadge from "../components/StatusBadge";

const TraineeManagement = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-outfit text-3xl font-bold text-slate-900">Trainee Management</h1>
          <p className="text-sm text-slate-500 mt-1">Manage trainee accounts and progress tracking</p>
        </div>
        <button className="h-11 px-5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold inline-flex items-center gap-2">
          <Plus className="h-4 w-4" /> Add Trainee
        </button>
      </div>

      <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-5">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search trainees..."
              className="w-full h-10 pl-9 pr-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <button className="h-10 px-4 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold inline-flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>

        <div className="text-center py-12">
          <Users className="h-12 w-12 text-slate-300 mx-auto mb-3" />
          <p className="text-slate-500 font-medium">Trainee management features coming soon</p>
          <p className="text-sm text-slate-400 mt-1">View, edit, and manage all trainee accounts from here</p>
        </div>
      </div>
    </div>
  );
};

export default TraineeManagement;
