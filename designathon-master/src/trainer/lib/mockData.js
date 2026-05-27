// Mock data for Trainlytix Trainer Portal
export const TRAINER = {
  id: "TR-2026-0045",
  name: "Rohan Kapoor",
  email: "rohan.kapoor@trainlytix.io",
  phone: "+91 98765 43210",
  joinedAt: "2024-06-15",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxtYWxlIHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDB8fHx8fDE3NzgxNDMyODR8MA&ixlib=rb-4.1.0&q=85",
  specialization: "Backend Development & System Design",
  batchesManaging: 3,
  traineesUnder: 84,
};

export const SIDEBAR_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "LayoutDashboard", path: "/trainer/dashboard" },
  { key: "batches", label: "My Batches", icon: "Users", path: "/trainer/batches" },
  { key: "session-planning", label: "Session Planning", icon: "Calendar", path: "/trainer/session-planning" },
  { key: "session-delivery", label: "Session Delivery", icon: "Video", path: "/trainer/session-delivery" },
  { key: "attendance", label: "Attendance Management", icon: "ClipboardCheck", path: "/trainer/attendance" },
  { key: "assessments", label: "Assessments", icon: "FileCheck2", path: "/trainer/assessments" },
  { key: "content", label: "Learning Content", icon: "BookOpen", path: "/trainer/content" },
  { key: "performance", label: "Trainee Performance", icon: "TrendingUp", path: "/trainer/performance" },
  { key: "feedback", label: "Feedback Insights", icon: "MessageSquareHeart", path: "/trainer/feedback" },
  { key: "availability", label: "Availability & Calendar", icon: "CalendarDays", path: "/trainer/availability" },
  { key: "reports", label: "Reports & Analytics", icon: "BarChart3", path: "/trainer/reports" },
];

export const OVERVIEW_CARDS = {
  activeBatches: 3,
  totalTrainees: 84,
  sessionsThisWeek: 12,
  avgAttendance: 94,
  pendingAssessments: 23,
  avgPerformance: 78,
};

export const BATCHES = [
  {
    id: "B-001",
    name: "Full-Stack Engineering · Cohort B-26",
    code: "FSE-B26",
    phase: "Phase 3 — Backend Mastery",
    trainees: 28,
    progress: 68,
    attendance: 92,
    status: "active"
  },
  {
    id: "B-002",
    name: "Full-Stack Engineering · Cohort B-25",
    code: "FSE-B25",
    phase: "Phase 4 — DevOps & Deployment",
    trainees: 26,
    progress: 85,
    attendance: 89,
    status: "active"
  },
  {
    id: "B-003",
    name: "Full-Stack Engineering · Cohort B-24",
    code: "FSE-B24",
    phase: "Phase 5 — Capstone Project",
    trainees: 30,
    progress: 95,
    attendance: 90,
    status: "active"
  },
];

export const UPCOMING_SESSIONS = [
  {
    id: 1,
    title: "FastAPI Dependency Injection",
    batch: "FSE-B26",
    trainees: 28,
    date: "Tue, 18 Feb",
    time: "10:00 - 11:30",
    mode: "Live",
    room: "Hall A",
    status: "scheduled"
  },
  {
    id: 2,
    title: "JWT & Auth Middlewares",
    batch: "FSE-B26",
    trainees: 28,
    date: "Wed, 19 Feb",
    time: "14:00 - 15:30",
    mode: "Online",
    room: "Zoom",
    status: "scheduled"
  },
  {
    id: 3,
    title: "MongoDB Aggregations Lab",
    batch: "FSE-B25",
    trainees: 26,
    date: "Thu, 20 Feb",
    time: "10:00 - 12:00",
    mode: "Lab",
    room: "Lab 2",
    status: "scheduled"
  },
  {
    id: 4,
    title: "System Design Primer",
    batch: "FSE-B26",
    trainees: 28,
    date: "Fri, 21 Feb",
    time: "16:00 - 17:00",
    mode: "Live",
    room: "Hall A",
    status: "scheduled"
  },
];

export const SCHEDULE_WEEK = [
  {
    day: "Monday",
    date: "Feb 17",
    sessions: [
      { time: "09:00 - 10:00", title: "Code Review Session", batch: "FSE-B26", status: "completed" },
      { time: "14:00 - 15:30", title: "System Design Workshop", batch: "FSE-B25", status: "completed" },
    ]
  },
  {
    day: "Tuesday",
    date: "Feb 18",
    sessions: [
      { time: "10:00 - 11:30", title: "FastAPI Dependency Injection", batch: "FSE-B26", status: "upcoming" },
      { time: "15:00 - 16:00", title: "Project Review", batch: "FSE-B24", status: "upcoming" },
    ]
  },
  {
    day: "Wednesday",
    date: "Feb 19",
    sessions: [
      { time: "14:00 - 15:30", title: "JWT & Auth Middlewares", batch: "FSE-B26", status: "upcoming" },
    ]
  },
  {
    day: "Thursday",
    date: "Feb 20",
    sessions: [
      { time: "10:00 - 12:00", title: "MongoDB Aggregations Lab", batch: "FSE-B25", status: "upcoming" },
      { time: "16:00 - 17:00", title: "1-on-1 Mentoring", batch: "Individual", status: "upcoming" },
    ]
  },
  {
    day: "Friday",
    date: "Feb 21",
    sessions: [
      { time: "11:00 - 12:00", title: "Batch Standup", batch: "FSE-B26", status: "upcoming" },
      { time: "16:00 - 17:00", title: "System Design Primer", batch: "FSE-B26", status: "upcoming" },
    ]
  },
];

export const PENDING_TASKS = [
  { id: 1, task: "Grade Quiz: MongoDB Aggregations", batch: "FSE-B25", dueDate: "Feb 18, 2026", priority: "high" },
  { id: 2, task: "Review Capstone Proposals", batch: "FSE-B24", dueDate: "Feb 20, 2026", priority: "high" },
  { id: 3, task: "Prepare Session Slides", title: "System Design Advanced", dueDate: "Feb 19, 2026", priority: "medium" },
  { id: 4, task: "Provide Feedback on Projects", batch: "FSE-B26", dueDate: "Feb 22, 2026", priority: "medium" },
  { id: 5, task: "Update Learning Materials", batch: "FSE-B25", dueDate: "Feb 25, 2026", priority: "low" },
];

export const PERFORMANCE_DATA = {
  overall: 78,
  trend: [
    { week: "W1", avg: 72 }, { week: "W2", avg: 74 },
    { week: "W3", avg: 76 }, { week: "W4", avg: 75 },
    { week: "W5", avg: 78 }, { week: "W6", avg: 77 },
    { week: "W7", avg: 78 },
  ],
  byBatch: [
    { batch: "FSE-B26", avg: 82, count: 28 },
    { batch: "FSE-B25", avg: 76, count: 26 },
    { batch: "FSE-B24", avg: 75, count: 30 },
  ],
};

export const ATTENDANCE_ANALYTICS = [
  { batch: "FSE-B26", percentage: 92, attended: 26, total: 28 },
  { batch: "FSE-B25", percentage: 89, attended: 23, total: 26 },
  { batch: "FSE-B24", percentage: 90, attended: 27, total: 30 },
];

export const FEEDBACK_INSIGHTS = [
  { id: 1, session: "FastAPI Basics", rating: 4.5, comments: 24, sentiment: "positive" },
  { id: 2, session: "React Advanced Patterns", rating: 4.2, comments: 18, sentiment: "positive" },
  { id: 3, session: "Database Optimization", rating: 3.8, comments: 15, sentiment: "neutral" },
  { id: 4, session: "DevOps Fundamentals", rating: 4.1, comments: 22, sentiment: "positive" },
];

export const LEARNING_CONTENT = [
  { id: 1, title: "FastAPI Cheatsheet", type: "PDF", size: "1.2 MB", uploadDate: "Feb 14", batch: "FSE-B26" },
  { id: 2, title: "JWT in 10 Minutes", type: "Video", size: "12 min", uploadDate: "Feb 13", batch: "FSE-B26" },
  { id: 3, title: "MongoDB Indexes Guide", type: "PDF", size: "2.4 MB", uploadDate: "Feb 12", batch: "FSE-B25" },
  { id: 4, title: "REST vs GraphQL", type: "Article", size: "8 min read", uploadDate: "Feb 11", batch: "FSE-B25" },
  { id: 5, title: "Async Python Patterns", type: "PDF", size: "950 KB", uploadDate: "Feb 10", batch: "FSE-B26" },
  { id: 6, title: "Pydantic v2 Migration", type: "Video", size: "22 min", uploadDate: "Feb 09", batch: "FSE-B26" },
];
