import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { BookOpen, Plus, FileText, NotebookPen, Folder, Presentation } from "lucide-react";

const TYPE_ICONS = {
  PDF: FileText,
  Notebook: NotebookPen,
  Repo: Folder,
  Slides: Presentation,
};

export const LearningContentSummary = ({ items }) => {
  if (!items) return null;
  return (
    <Card className="shadow-soft border-border/60">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-primary" />
          <CardTitle className="text-base">Learning Content</CardTitle>
        </div>
        <Button size="sm" className="gap-1.5" data-testid="content-upload-btn">
          <Plus className="h-3.5 w-3.5" /> Upload
        </Button>
      </CardHeader>
      <CardContent>
        <ul className="divide-y divide-border/60">
          {items.map((c) => {
            const Icon = TYPE_ICONS[c.type] || FileText;
            return (
              <li
                key={c.id}
                data-testid={`content-${c.id}`}
                className="flex items-center gap-3 py-3 first:pt-0 last:pb-0 hover:bg-accent/30 -mx-2 px-2 rounded-lg transition cursor-pointer"
              >
                <div className="h-9 w-9 rounded-lg grid place-items-center bg-accent text-accent-foreground shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold truncate">{c.title}</p>
                  <p className="text-xs text-muted-foreground">{c.batch} · {c.type}</p>
                </div>
                <span className="text-[11px] text-muted-foreground shrink-0">{c.added}</span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};
