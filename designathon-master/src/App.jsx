import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/AuthContext";
import { AdminAuthProvider } from "./admin/context/AdminAuthContext";
import AppLayout from "./trainee/components/layout/AppLayout";
import AdminLayout from "./admin/components/layout/AdminAppLayout";
import TrainerAppLayout from "./trainer/components/layout/TrainerAppLayout";
import UnifiedLogin from "./trainee/pages/UnifiedLogin";
import Dashboard from "./trainee/pages/Dashboard";
import Profile from "./trainee/pages/Profile";
import Roadmap from "./trainee/pages/RoadMap";
import Sessions from "./trainee/pages/Sessions";
import Attendance from "./trainee/pages/Attendance";
import Materials from "./trainee/pages/Materials";
import Assessments from "./trainee/pages/Assessments";
import Performance from "./trainee/pages/Performance";
import Feedback from "./trainee/pages/Feedback";
import Notifications from "./trainee/pages/Notifications";
import Support from "./trainee/pages/Support";

// Trainer pages
import {
  TrainerDashboard,
  MyBatches,
  SessionPlanning,
  SessionDelivery,
  Attendance as TrainerAttendance,
  Assessments as TrainerAssessments,
  LearningContent,
  Performance as TrainerPerformance,
  Feedback as TrainerFeedback,
  Availability,
  Reports,
  Profile as TrainerProfile
} from "./trainer/pages/index";

// Admin pages

import AdminDashboard from "./admin/pages/AdminDashboard";
import BatchManagement from "./admin/pages/BatchManagement";
import TraineeManagement from "./admin/pages/TraineeManagement";
import ReportsAndDashboards from "./admin/pages/ReportsAndDashboards";
import AuditLogs from "./admin/pages/AuditLogs";
import {
  TrainerManagement,
  CourseAndCurriculum,
  AssessmentsConfig,
  AttendanceAndCompliance,
  FeedbackManagement,
  AutomationAndNotifications,
  GenAISettings,
  UserAccessAndRoles,
  SystemSettings
} from "./admin/pages/index";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AdminAuthProvider>
          <BrowserRouter>
            <Toaster position="top-right" richColors closeButton />
            <Routes>
              {/* Unified Login */}
              <Route path="/login" element={<UnifiedLogin />} />
              
              {/* Main App - Trainee Portal */}
              <Route path="/" element={<Navigate to="/app/dashboard" replace />} />
              <Route path="/app" element={<AppLayout />}>
                <Route index element={<Navigate to="/app/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="roadmap" element={<Roadmap />} />
                <Route path="sessions" element={<Sessions />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="materials" element={<Materials />} />
                <Route path="assessments" element={<Assessments />} />
                <Route path="performance" element={<Performance />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="support" element={<Support />} />
              </Route>

              {/* Trainer Portal */}
              <Route path="/trainer" element={<Navigate to="/trainer/dashboard" replace />} />
              <Route path="/trainer" element={<TrainerAppLayout />}>
                <Route path="dashboard" element={<TrainerDashboard />} />
                <Route path="batches" element={<MyBatches />} />
                <Route path="session-planning" element={<SessionPlanning />} />
                <Route path="session-delivery" element={<SessionDelivery />} />
                <Route path="attendance" element={<TrainerAttendance />} />
                <Route path="assessments" element={<TrainerAssessments />} />
                <Route path="content" element={<LearningContent />} />
                <Route path="performance" element={<TrainerPerformance />} />
                <Route path="feedback" element={<TrainerFeedback />} />
                <Route path="availability" element={<Availability />} />
                <Route path="reports" element={<Reports />} />
                <Route path="profile" element={<TrainerProfile />} />
              </Route>

  {/* Admin Routes */}
              <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="/admin" element={<AdminLayout />}>

                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="batches" element={<BatchManagement />} />
                <Route path="trainees" element={<TraineeManagement />} />
                <Route path="trainers" element={<TrainerManagement />} />
                <Route path="courses" element={<CourseAndCurriculum />} />
                <Route path="assessments" element={<AssessmentsConfig />} />
                <Route path="attendance" element={<AttendanceAndCompliance />} />
                <Route path="feedback" element={<FeedbackManagement />} />
                <Route path="automation" element={<AutomationAndNotifications />} />
                <Route path="reports" element={<ReportsAndDashboards />} />
                <Route path="genai" element={<GenAISettings />} />
                <Route path="access" element={<UserAccessAndRoles />} />
                <Route path="audit" element={<AuditLogs />} />
                <Route path="settings" element={<SystemSettings />} />
              </Route>

              <Route path="*" element={<Navigate to="/app/dashboard" replace />} />
            </Routes>
          </BrowserRouter>
        </AdminAuthProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

