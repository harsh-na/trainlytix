import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Star, MessageSquareHeart, Smile, Meh, Frown } from "lucide-react";
import { cn } from "../../lib/utils";

const SENT = {
  positive: { Icon: Smile, label: "Positive", className: "text-emerald-600 dark:text-emerald-400" },
  neutral: { Icon: Meh, label: "Neutral", className: "text-amber-600 dark:text-amber-400" },
  negative: { Icon: Frown, label: "Negative", className: "text-rose-600 dark:text-rose-400" },
};

export const FeedbackInsights = ({ data }) => {
  if (!data) return null;
  const total = data.positive + data.neutral + data.negative;
  return (
    <Card className="shadow-soft border-border/60">
      <CardHeader className="flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-2">
          <MessageSquareHeart className="h-4 w-4 text-primary" />
          <CardTitle className="text-base">Feedback Insights</CardTitle>
        </div>
        <div className="flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-bold">{data.average}</span>
          <span className="text-xs text-muted-foreground">/ 5</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* sentiment bar */}
        <div>
          <div className="flex h-2 rounded-full overflow-hidden bg-muted">
            <div className="bg-emerald-500" style={{ width: `${(data.positive / total) * 100}%` }} />
            <div className="bg-amber-400" style={{ width: `${(data.neutral / total) * 100}%` }} />
            <div className="bg-rose-500" style={{ width: `${(data.negative / total) * 100}%` }} />
          </div>
          <div className="flex justify-between mt-2 text-[11px] text-muted-foreground">
            <span>👍 {data.positive} positive</span>
            <span>≈ {data.neutral} neutral</span>
            <span>👎 {data.negative} negative</span>
          </div>
        </div>

        {/* recent feedback */}
        <div className="space-y-3 max-h-[260px] overflow-y-auto pr-1">
          {data.items.map((f) => {
            const S = SENT[f.sentiment];
            return (
              <div
                key={f.id}
                data-testid={`feedback-item-${f.id}`}
                className="rounded-xl border border-border/60 p-3 hover:border-primary/30 transition"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 min-w-0">
                    <S.Icon className={cn("h-4 w-4 shrink-0", S.className)} />
                    <p className="text-sm font-semibold truncate">{f.trainee}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3 w-3",
                          i < f.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{f.batch} · {f.time}</p>
                <p className="text-sm leading-relaxed">{f.comment}</p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
