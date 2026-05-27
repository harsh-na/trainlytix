import { CheckCircle2, Clock3, AlertTriangle, Circle } from "lucide-react";

const MAP = {
  completed: { label: "Completed", cls: "text-emerald-700 bg-emerald-50 border-emerald-200", Icon: CheckCircle2 },
  in_progress: { label: "In Progress", cls: "text-blue-700 bg-blue-50 border-blue-200", Icon: Clock3 },
  pending: { label: "Pending", cls: "text-amber-700 bg-amber-50 border-amber-200", Icon: Circle },
  overdue: { label: "Overdue", cls: "text-rose-700 bg-rose-50 border-rose-200", Icon: AlertTriangle },
  open: { label: "Open", cls: "text-blue-700 bg-blue-50 border-blue-200", Icon: Clock3 },
  resolved: { label: "Resolved", cls: "text-emerald-700 bg-emerald-50 border-emerald-200", Icon: CheckCircle2 },
};

export const StatusPill = ({ status, withIcon = true, label }) => {
  const cfg = MAP[status] || MAP.pending;
  const Icon = cfg.Icon;
  return (
    <span
      data-testid={`status-pill-${status}`}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${cfg.cls}`}
    >
      {withIcon && <Icon className="h-3.5 w-3.5" />}
      {label || cfg.label}
    </span>
  );
};

export default StatusPill;
