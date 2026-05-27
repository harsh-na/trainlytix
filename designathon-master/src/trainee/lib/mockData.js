// Mock data for Trainlytix Trainee Portal
export const TRAINEE = {
  id: "TRN-2026-0184",
  name: "Aanya Sharma",
  email: "aanya.sharma@trainlytix.io",
  phone: "+91 98765 43210",
  joinedAt: "2026-01-08",
  photo: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MHx8fHwxNzc4MTQzMjg0fDA&ixlib=rb-4.1.0&q=85",
  batch: "Full-Stack Engineering · Cohort B-26",
  batchCode: "FSE-B26",
  phase: "Phase 3 — Backend Mastery",
  mentor: "Rohan Kapoor",
  location: "Bengaluru, IN",
};

export const ROADMAP = [
  { id: 1, title: "Foundations & Tooling", weeks: "Wk 1-2", status: "completed" },
  { id: 2, title: "Frontend with React", weeks: "Wk 3-5", status: "completed" },
  { id: 3, title: "Backend Mastery", weeks: "Wk 6-8", status: "in_progress" },
  { id: 4, title: "Databases & APIs", weeks: "Wk 9-10", status: "pending" },
  { id: 5, title: "DevOps & Deployment", weeks: "Wk 11-12", status: "pending" },
  { id: 6, title: "Capstone Project", weeks: "Wk 13-14", status: "pending" },
];

export const PROGRESS = { overall: 48, currentPhase: 65, completedModules: 14, totalModules: 29 };

export const UPCOMING_SESSIONS = [
  { id: 1, title: "FastAPI Dependency Injection", trainer: "Rohan Kapoor", date: "Tue, 18 Feb", time: "10:00 - 11:30", mode: "Live", room: "Hall A" },
  { id: 2, title: "JWT & Auth Middlewares", trainer: "Priya Nair", date: "Wed, 19 Feb", time: "14:00 - 15:30", mode: "Online", room: "Zoom" },
  { id: 3, title: "MongoDB Aggregations Lab", trainer: "Karan Mehta", date: "Thu, 20 Feb", time: "10:00 - 12:00", mode: "Lab", room: "Lab 2" },
  { id: 4, title: "System Design Primer", trainer: "Rohan Kapoor", date: "Fri, 21 Feb", time: "16:00 - 17:00", mode: "Live", room: "Hall A" },
];

export const ATTENDANCE = {
  percent: 92,
  attended: 46,
  total: 50,
  thisWeek: [
    { day: "Mon", present: true }, { day: "Tue", present: true },
    { day: "Wed", present: true }, { day: "Thu", present: false },
    { day: "Fri", present: true },
  ],
};

export const ASSIGNMENTS = [
  { id: "A-101", title: "Build a REST API for Notes", course: "Backend Mastery", due: "Feb 19, 2026", status: "pending", priority: "high" },
  { id: "A-102", title: "Auth Middleware Implementation", course: "Backend Mastery", due: "Feb 22, 2026", status: "in_progress", priority: "medium" },
  { id: "A-103", title: "MongoDB Aggregation Quiz", course: "Databases", due: "Feb 16, 2026", status: "overdue", priority: "high" },
  { id: "A-104", title: "React Hooks Deep Dive", course: "Frontend", due: "Feb 28, 2026", status: "pending", priority: "low" },
  { id: "A-105", title: "Capstone Proposal Draft", course: "Capstone", due: "Mar 02, 2026", status: "pending", priority: "medium" },
];

export const MATERIALS = [
  { id: 1, title: "FastAPI Cheatsheet", type: "PDF", size: "1.2 MB", date: "Feb 14", course: "Backend" },
  { id: 2, title: "JWT in 10 Minutes", type: "Video", size: "12 min", date: "Feb 13", course: "Auth" },
  { id: 3, title: "MongoDB Indexes Guide", type: "PDF", size: "2.4 MB", date: "Feb 12", course: "Database" },
  { id: 4, title: "REST vs GraphQL", type: "Article", size: "8 min read", date: "Feb 11", course: "API Design" },
  { id: 5, title: "Async Python Patterns", type: "PDF", size: "950 KB", date: "Feb 10", course: "Python" },
  { id: 6, title: "Pydantic v2 Migration", type: "Video", size: "22 min", date: "Feb 09", course: "Backend" },
];

export const PERFORMANCE = {
  latest: 86,
  average: 79,
  rank: 7,
  totalTrainees: 42,
  trend: [
    { week: "W1", score: 68 }, { week: "W2", score: 72 },
    { week: "W3", score: 70 }, { week: "W4", score: 78 },
    { week: "W5", score: 81 }, { week: "W6", score: 79 },
    { week: "W7", score: 86 },
  ],
  recentScores: [
    { name: "FastAPI Quiz", score: 92, max: 100 },
    { name: "React State Mgmt", score: 84, max: 100 },
    { name: "DB Modelling", score: 78, max: 100 },
    { name: "Git Fundamentals", score: 90, max: 100 },
  ],
};

export const NOTIFICATIONS = [
  { id: 1, type: "assignment", title: "Assignment due tomorrow", body: "Build a REST API for Notes is due Feb 19.", time: "2h ago", unread: true },
  { id: 2, type: "session", title: "Session reminder", body: "FastAPI Dependency Injection starts at 10:00.", time: "5h ago", unread: true },
  { id: 3, type: "score", title: "Score published", body: "FastAPI Quiz: 92/100.", time: "1d ago", unread: false },
  { id: 4, type: "announcement", title: "Holiday notice", body: "Campus closed on Feb 26 for Maintenance Day.", time: "2d ago", unread: false },
  { id: 5, type: "feedback", title: "Feedback requested", body: "Please rate the React Hooks session.", time: "3d ago", unread: false },
];

export const QUERIES = [
  { id: "Q-44", subject: "Lab access on weekends", status: "open", date: "Feb 14" },
  { id: "Q-43", subject: "Reschedule mock interview", status: "resolved", date: "Feb 11" },
  { id: "Q-42", subject: "Materials missing for Wk5", status: "resolved", date: "Feb 04" },
];

export const FEEDBACK_HISTORY = [
  { id: 1, session: "JWT & Auth Middlewares", trainer: "Priya Nair", rating: 5, date: "Feb 12" },
  { id: 2, session: "React Hooks Deep Dive", trainer: "Anita Rao", rating: 4, date: "Feb 06" },
  { id: 3, session: "Git Workflows", trainer: "Karan Mehta", rating: 5, date: "Jan 30" },
];

export const SIDEBAR_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "LayoutDashboard", path: "/app/dashboard" },
  { key: "profile", label: "My Profile", icon: "UserRound", path: "/app/profile" },
  { key: "roadmap", label: "Training Roadmap", icon: "Map", path: "/app/roadmap" },
  { key: "sessions", label: "Sessions & Schedule", icon: "CalendarDays", path: "/app/sessions" },
  { key: "attendance", label: "Attendance", icon: "ClipboardCheck", path: "/app/attendance" },
  { key: "materials", label: "Learning Materials", icon: "BookOpen", path: "/app/materials" },
  { key: "assessments", label: "Assessments", icon: "FileCheck2", path: "/app/assessments" },
  { key: "performance", label: "Performance", icon: "TrendingUp", path: "/app/performance" },
  { key: "feedback", label: "Feedback", icon: "MessageSquareHeart", path: "/app/feedback" },
  { key: "notifications", label: "Notifications", icon: "Bell", path: "/app/notifications" },
  { key: "support", label: "Support / Queries", icon: "LifeBuoy", path: "/app/support" },
];