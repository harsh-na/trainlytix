import { Clock } from "lucide-react";
import { UPCOMING_SESSIONS } from "../lib/mockData";

const UpcomingSessions = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-purple-600" />
          <h3 className="font-outfit text-lg font-bold text-slate-900">Upcoming Sessions</h3>
        </div>
      </div>

      <div className="space-y-3">
        {UPCOMING_SESSIONS.map((session) => (
          <div key={session.id} className="p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-medium text-slate-900">{session.title}</p>
                <p className="text-xs text-slate-500 mt-1">{session.batch}</p>
              </div>
              <span className="text-xs font-semibold px-2 py-1 rounded bg-emerald-50 text-emerald-700">
                {session.trainees} trainees
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-600">
              <div>
                <span>{session.date} • {session.time}</span>
              </div>
              <span className="text-slate-500">{session.room}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSessions;
