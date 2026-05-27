import { SCHEDULE_WEEK } from "../lib/mockData";

const ScheduleWeek = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="font-outfit text-lg font-bold text-slate-900 mb-4">Weekly Schedule</h3>
      
      <div className="space-y-3">
        {SCHEDULE_WEEK.map((daySchedule, idx) => (
          <div key={idx} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
            <p className="text-sm font-semibold text-slate-900">{daySchedule.day} • {daySchedule.date}</p>
            <div className="mt-2 space-y-2 ml-2">
              {daySchedule.sessions.map((session, sidx) => (
                <div key={sidx} className="text-xs p-2 rounded bg-slate-50 border border-slate-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{session.time}</p>
                      <p className="text-slate-600 mt-1">{session.title}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-[10px] font-semibold ${
                      session.status === 'completed' 
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {session.status === 'completed' ? 'Done' : 'Upcoming'}
                    </span>
                  </div>
                  <p className="text-slate-500 mt-1">{session.batch}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleWeek;