import { useState } from "react";
import { QUERIES } from "../lib/mockData";
import StatusPill from "../components/StatusPill";
import { Send, MessageSquarePlus } from "lucide-react";
import { toast } from "sonner";

const Support = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) return toast.error("Please fill in both fields");
    toast.success("Query submitted. We'll get back to you shortly.");
    setSubject(""); setMessage("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <form onSubmit={submit} data-testid="query-form" className="lg:col-span-3 rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-1">
          <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <MessageSquarePlus className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-outfit text-base font-semibold text-slate-900">Raise a Query</h3>
            <p className="text-xs text-slate-500">Average response time: 4-6 hours</p>
          </div>
        </div>

        <div className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Subject</label>
            <input
              data-testid="query-subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full h-11 rounded-lg border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief subject..."
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">Message</label>
            <textarea
              data-testid="query-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="w-full rounded-lg border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Describe your issue or question in detail..."
            />
          </div>
          <button data-testid="submit-query-btn" type="submit" className="h-11 px-5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold inline-flex items-center gap-2">
            <Send className="h-4 w-4" /> Submit Query
          </button>
        </div>
      </form>

      <div className="lg:col-span-2 rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
        <h3 className="font-outfit text-base font-semibold text-slate-900 mb-4">Your Queries</h3>
        <div className="divide-y divide-slate-50">
          {QUERIES.map((q) => (
            <div key={q.id} className="py-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">{q.subject}</p>
                <p className="text-xs text-slate-500 mt-0.5">{q.id} · {q.date}</p>
              </div>
              <StatusPill status={q.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
