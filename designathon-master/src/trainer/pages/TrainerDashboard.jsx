import { OVERVIEW_CARDS } from "../lib/mockData";
import OverviewCards from "../trainer/OverviewCards";
import UpcomingSessions from "../trainer/UpcomingSessions";
import ScheduleWeek from "../trainer/ScheduleWeek";
import PendingTasks from "../trainer/PendingTasks";
import PerformanceChart from "../trainer/PerformanceChart";

const TrainerDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="font-outfit text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">Welcome back! Here's your training overview.</p>
      </div>

      {/* Overview Cards */}
      <OverviewCards data={OVERVIEW_CARDS} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upcoming Sessions */}
          <UpcomingSessions />

          {/* Weekly Schedule */}
          <ScheduleWeek />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Pending Tasks */}
          <PendingTasks />

          {/* Performance Chart */}
          <PerformanceChart />
        </div>
      </div>
    </div>
  );
};

export default TrainerDashboard;
