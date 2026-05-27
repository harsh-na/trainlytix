import { CheckCircle2, Clock3, AlertTriangle, XCircle } from "lucide-react";

const StatusBadge = ({ status, label }) => {
  const config = {
    in_progress: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      border: "border-blue-200",
      Icon: Clock3,
      defaultLabel: "In Progress"
    },
    completed: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      Icon: CheckCircle2,
      defaultLabel: "Completed"
    },
    pending: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      Icon: AlertTriangle,
      defaultLabel: "Pending"
    },
    failed: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      Icon: XCircle,
      defaultLabel: "Failed"
    },
    ready: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      Icon: CheckCircle2,
      defaultLabel: "Ready"
    },
    partial: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      Icon: AlertTriangle,
      defaultLabel: "Partial"
    },
    active: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      Icon: CheckCircle2,
      defaultLabel: "Active"
    },
    inactive: {
      bg: "bg-slate-50",
      text: "text-slate-700",
      border: "border-slate-200",
      Icon: XCircle,
      defaultLabel: "Inactive"
    },
    on_track: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      Icon: CheckCircle2,
      defaultLabel: "On Track"
    },
    at_risk: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      Icon: AlertTriangle,
      defaultLabel: "At Risk"
    },
    warning: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      Icon: AlertTriangle,
      defaultLabel: "Warning"
    },
    success: {
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      border: "border-emerald-200",
      Icon: CheckCircle2,
      defaultLabel: "Success"
    },
    high: {
      bg: "bg-red-50",
      text: "text-red-700",
      border: "border-red-200",
      Icon: AlertTriangle,
      defaultLabel: "High"
    },
    medium: {
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
      Icon: AlertTriangle,
      defaultLabel: "Medium"
    }
  };

  const cfg = config[status] || config.pending;
  const Icon = cfg.Icon;

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${cfg.bg} ${cfg.text} ${cfg.border}`}>
      <Icon className="h-3 w-3" />
      {label || cfg.defaultLabel}
    </span>
  );
};

export default StatusBadge;
