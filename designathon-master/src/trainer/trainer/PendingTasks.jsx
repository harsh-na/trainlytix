import { CheckCircle2 } from "lucide-react";
import { PENDING_TASKS } from "../lib/mockData";

const PendingTasks = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <h3 className="font-outfit text-lg font-bold text-slate-900 mb-4">Pending Tasks</h3>
      
      <div className="space-y-2">
        {PENDING_TASKS.map((task) => (
          <div key={task.id} className="p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition cursor-pointer">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">{task.task}</p>
                <p className="text-xs text-slate-500 mt-1">{task.batch || task.title}</p>
                <p className="text-xs text-slate-400 mt-1">Due: {task.dueDate}</p>
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded flex-shrink-0 ${
                task.priority === 'high' ? 'bg-red-100 text-red-700' :
                task.priority === 'medium' ? 'bg-amber-100 text-amber-700' :
                'bg-slate-100 text-slate-700'
              }`}>
                {task.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingTasks;
