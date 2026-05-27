import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react";

const KPICard = ({ label, value, change, Icon, tone = "blue" }) => {
  const tones = {
    blue: "bg-blue-50 text-blue-600",
    red: "bg-red-50 text-red-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    purple: "bg-purple-50 text-purple-600"
  };

  return (
    <div className="rounded-xl bg-white border border-slate-100 shadow-sm p-4 hover:shadow-md transition">
      <div className="flex items-start justify-between mb-3">
        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{label}</p>
        <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${tones[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">{value}</p>
      {change && (
        <p className={`text-xs font-medium mt-2 flex items-center gap-1 ${change.positive ? "text-emerald-600" : "text-red-600"}`}>
          {change.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {change.text}
        </p>
      )}
    </div>
  );
};

export default KPICard;
