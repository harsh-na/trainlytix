import { useState } from "react";
import { FEEDBACK_HISTORY } from "../lib/mockData";
import { Star, Send } from "lucide-react";
import { toast } from "sonner";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const submit = () => {
    if (!rating) return toast.error("Please select a rating");
    toast.success("Thanks for your feedback!");
    setRating(0); setComment("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-base font-semibold text-slate-900">Rate Recent Session</h3>
        <p className="text-xs text-slate-500 mt-1">JWT & Auth Middlewares · Priya Nair · Feb 12</p>
        <div className="flex gap-1.5 mt-5" data-testid="rating-stars">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} data-testid={`star-${n}`} onClick={() => setRating(n)} className="p-1 transition hover:scale-110">
              <Star className={`h-7 w-7 ${n <= rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
            </button>
          ))}
        </div>
        <textarea
          data-testid="feedback-comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share what worked, what could be better..."
          rows={5}
          className="w-full mt-4 rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        <button data-testid="submit-feedback-btn" onClick={submit} className="mt-4 h-10 px-5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold inline-flex items-center gap-2">
          <Send className="h-4 w-4" /> Submit Feedback
        </button>
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-base font-semibold text-slate-900">Feedback History</h3>
        <div className="divide-y divide-slate-50 mt-4">
          {FEEDBACK_HISTORY.map((f) => (
            <div key={f.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{f.session}</p>
                <p className="text-xs text-slate-500 mt-0.5">{f.trainer} · {f.date}</p>
              </div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} className={`h-4 w-4 ${n <= f.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
