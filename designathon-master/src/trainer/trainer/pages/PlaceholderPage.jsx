// import { Card, CardContent } from "../components/ui/card";
import { Construction } from "lucide-react";
import { NAV_ITEMS } from "../lib/nav";

export const PlaceholderPage = ({ slug }) => {
  const item = NAV_ITEMS.find((n) => n.to === `/${slug}`) || { label: "Page", icon: Construction };
  const Icon = item.icon;
  return (
    <div className="space-y-6" data-testid={`page-${slug}`}>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{item.label}</h1>
        <p className="text-muted-foreground mt-1.5 text-sm">
          This module is part of the Trainer Portal. Detailed views can be wired up here.
        </p>
      </div>
      <div className="shadow-soft border-dashed border border-border/60 rounded-xl bg-white dark:bg-slate-900">
        <div className="p-10 flex flex-col items-center text-center gap-3">
          <div className="h-14 w-14 rounded-2xl bg-primary/10 grid place-items-center text-primary">
            <Icon className="h-7 w-7" />
          </div>
          <h3 className="text-lg font-semibold">{item.label} module</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Use the dashboard widgets to drill into this section. Implementation can be expanded with
            tables, filters, forms and detail views as needed.
          </p>
        </div>
      </div>
    </div>
  );
};
