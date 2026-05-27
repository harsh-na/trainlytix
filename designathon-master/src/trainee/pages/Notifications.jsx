import { Zap, Bell, FileText, Calendar, Award, MessageSquareHeart } from "lucide-react";
import { NOTIFICATIONS } from "../lib/mockData";

const ICONS = {
  assignment: FileText,
  session: Calendar,
  score: Award,
  feedback: MessageSquareHeart,
  announcement: Bell,
};

const Notifications = () => {
  return (
    <div className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h3 className="font-outfit text-lg font-semibold text-slate-900">All Notifications</h3>
        <p className="text-xs text-slate-500 mt-1">{NOTIFICATIONS.filter((n) => n.unread).length} unread</p>
      </div>

      <div className="divide-y divide-slate-50">
        {NOTIFICATIONS.map((n) => {
          const Icon = ICONS[n.type] || Zap;
          const bgColor =
            n.type === "assignment"
              ? "bg-blue-50"
              : n.type === "session"
                ? "bg-emerald-50"
                : n.type === "score"
                  ? "bg-amber-50"
                  : n.type === "feedback"
                    ? "bg-purple-50"
                    : "bg-slate-50";

          const iconColor =
            n.type === "assignment"
              ? "text-blue-600"
              : n.type === "session"
                ? "text-emerald-600"
                : n.type === "score"
                  ? "text-amber-600"
                  : n.type === "feedback"
                    ? "text-purple-600"
                    : "text-slate-600";

          return (
            <div
              key={n.id}
              data-testid={`notif-row-${n.id}`}
              className="flex gap-4 p-5 hover:bg-slate-50/60 transition"
            >
              <div className={`h-10 w-10 rounded-full shrink-0 flex items-center justify-center text-sm font-semibold ${bgColor} ${iconColor}`}>
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                  {n.unread && <span className="h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />}
                </div>

                <p className="text-sm text-slate-600 mt-0.5 line-clamp-2">{n.body}</p>
                <p className="text-xs text-slate-400 mt-2 font-medium">{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;

