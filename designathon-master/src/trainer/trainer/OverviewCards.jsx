import { Users, Calendar, BookCheck, GraduationCap } from "lucide-react";

const ICONS = {
  activeBatches: { Icon: GraduationCap, tone: "bg-indigo-50 text-indigo-600" },
  totalTrainees: { Icon: Users, tone: "bg-sky-50 text-sky-600" },
  sessionsThisWeek: { Icon: Calendar, tone: "bg-emerald-50 text-emerald-600" },
  pendingAssessments: { Icon: BookCheck, tone: "bg-amber-50 text-amber-600" },
};

const LABELS = {
  activeBatches: "Active Batches",
  totalTrainees: "Total Trainees",
  sessionsThisWeek: "Sessions This Week",
  pendingAssessments: "Pending Assessments",
};

const OverviewCards = ({ data }) => {
  if (!data) return null;
  
  const items = [
    { key: "activeBatches", value: data.activeBatches },
    { key: "totalTrainees", value: data.totalTrainees },
    { key: "sessionsThisWeek", value: data.sessionsThisWeek },
    { key: "pendingAssessments", value: data.pendingAssessments },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ key, value }) => {
        const { Icon, tone } = ICONS[key];
        return (
          <div key={key} className={`rounded-lg border border-slate-200 p-6 ${tone}`}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600">{LABELS[key]}</p>
                <p className="font-outfit text-2xl font-bold mt-2">{value}</p>
              </div>
              <Icon className="h-8 w-8 opacity-50" strokeWidth={2} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OverviewCards;
