import { TrendingUp } from "lucide-react";
import { PERFORMANCE_DATA } from "../lib/mockData";

const PerformanceChart = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-purple-600" />
        <h3 className="font-outfit text-lg font-bold text-slate-900">Performance Trends</h3>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-2xl font-bold text-slate-900">{PERFORMANCE_DATA.overall}%</p>
          <p className="text-xs text-slate-500 mt-1">Overall Average</p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-slate-600 uppercase">By Batch</p>
          {PERFORMANCE_DATA.byBatch.map((batch) => (
            <div key={batch.batch} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-slate-900">{batch.batch}</span>
                <span className="text-slate-600">{batch.avg}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full"
                  style={{ width: `${batch.avg}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-400">{batch.count} trainees</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
