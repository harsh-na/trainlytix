import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowRight, Users } from "lucide-react";

export const BatchesSnapshot = ({ batches }) => {
  if (!batches) return null;
  return (
    <Card className="shadow-soft border-border/60">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <CardTitle className="text-base">My Batches</CardTitle>
        </div>
        <Button variant="ghost" size="sm" className="gap-1 text-primary" data-testid="batches-view-all-btn">
          View all <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {batches.slice(0, 4).map((b) => (
          <div
            key={b.id}
            data-testid={`batch-row-${b.id}`}
            className="rounded-xl border border-border/60 p-4 hover:border-primary/40 transition cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{b.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-[10px] font-medium">{b.track}</Badge>
                  <span className="text-xs text-muted-foreground">{b.trainees} trainees</span>
                </div>
              </div>
              <span className="text-sm font-bold tabular-nums">{b.progress}%</span>
            </div>
            <Progress value={b.progress} className="h-1.5" />
            <p className="text-xs text-muted-foreground mt-2">Next: <span className="font-medium text-foreground">{b.next_session}</span></p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
