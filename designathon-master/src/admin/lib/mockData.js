export const ADMIN_USER = {
  id: "ADM-001",
  name: "Rohan Kapoor",
  email: "rohan.kapoor@trainlytix.io",
  role: "Super Admin",
  avatar: "RK",
  phone: "+91 98765 43210",
  department: "Operations",
  lastLogin: "2026-02-17 14:30"
};

export const SIDEBAR_ITEMS = [
  { key: "dashboard", label: "Dashboard", icon: "LayoutDashboard", path: "/admin/dashboard" },
  { key: "batches", label: "Batch Management", icon: "Users", path: "/admin/batches" },
  { key: "trainees", label: "Trainee Management", icon: "UserCheck", path: "/admin/trainees" },
  { key: "trainers", label: "Trainer Management", icon: "Award", path: "/admin/trainers" },
  { key: "courses", label: "Course & Curriculum", icon: "BookOpen", path: "/admin/courses" },
  { key: "assessments", label: "Assessments Config", icon: "ClipboardList", path: "/admin/assessments" },
  { key: "attendance", label: "Attendance & Compliance", icon: "CheckSquare", path: "/admin/attendance" },
  { key: "feedback", label: "Feedback Management", icon: "MessageSquare", path: "/admin/feedback" },
  { key: "automation", label: "Automation & Notifications", icon: "Zap", path: "/admin/automation" },
  { key: "reports", label: "Reports & Dashboards", icon: "BarChart3", path: "/admin/reports" },
  { key: "genai", label: "GenAI Settings", icon: "Sparkles", path: "/admin/genai" },
  { key: "access", label: "User Access & Roles", icon: "Lock", path: "/admin/access" },
  { key: "audit", label: "Audit Logs", icon: "LogIn", path: "/admin/audit" },
  { key: "settings", label: "System Settings", icon: "Settings", path: "/admin/settings" },
];

export const KPI_METRICS = {
  totalBatches: 8,
  activeBatches: 6,
  totalTrainees: 248,
  activeTrainees: 220,
  totalTrainers: 24,
  activeTrainers: 22,
  coursesInProgress: 12,
  completionRate: 72,
  complianceStatus: {
    onTrack: 195,
    atRisk: 25,
    critical: 0
  }
};

export const BATCH_HEALTH = [
  {
    id: "B-001",
    name: "Full-Stack Engineering · Cohort B-26",
    progress: 68,
    attendance: 92,
    traineesCount: 32,
    trainersAssigned: 4,
    startDate: "2026-01-15",
    status: "in_progress",
    healthScore: 92
  },
  {
    id: "B-002",
    name: "Data Science · Cohort A-25",
    progress: 45,
    attendance: 88,
    traineesCount: 28,
    trainersAssigned: 3,
    startDate: "2026-02-01",
    status: "in_progress",
    healthScore: 85
  },
  {
    id: "B-003",
    name: "Cloud Architecture · Cohort C-24",
    progress: 78,
    attendance: 85,
    traineesCount: 24,
    trainersAssigned: 3,
    startDate: "2025-12-01",
    status: "in_progress",
    healthScore: 78
  },
  {
    id: "B-004",
    name: "DevOps Mastery · Cohort D-26",
    progress: 32,
    attendance: 79,
    traineesCount: 20,
    trainersAssigned: 2,
    startDate: "2026-02-15",
    status: "in_progress",
    healthScore: 70
  },
  {
    id: "B-005",
    name: "Frontend React · Cohort E-26",
    progress: 55,
    attendance: 82,
    traineesCount: 26,
    trainersAssigned: 2,
    startDate: "2026-01-20",
    status: "in_progress",
    healthScore: 75
  },
  {
    id: "B-006",
    name: "Python Advanced · Cohort F-25",
    progress: 92,
    attendance: 95,
    traineesCount: 18,
    trainersAssigned: 2,
    startDate: "2025-11-01",
    status: "in_progress",
    healthScore: 96
  }
];

export const ASSESSMENT_READINESS = [
  {
    id: "ASMT-001",
    name: "Phase 1 - Foundations Quiz",
    courseCode: "FSE-B26",
    dueDate: "2026-02-20",
    configured: 6,
    pending: 0,
    status: "ready",
    type: "quiz"
  },
  {
    id: "ASMT-002",
    name: "Phase 2 - Frontend Deep Dive",
    courseCode: "FSE-B26",
    dueDate: "2026-02-25",
    configured: 5,
    pending: 1,
    status: "partial",
    type: "project"
  },
  {
    id: "ASMT-003",
    name: "Backend Mastery Exam",
    courseCode: "DS-A25",
    dueDate: "2026-03-05",
    configured: 3,
    pending: 3,
    status: "pending",
    type: "exam"
  },
  {
    id: "ASMT-004",
    name: "Capstone Proposal Review",
    courseCode: "CA-C24",
    dueDate: "2026-03-10",
    configured: 4,
    pending: 2,
    status: "partial",
    type: "proposal"
  }
];

export const COMPLIANCE_RISKS = [
  {
    id: "RISK-001",
    type: "low_attendance",
    trainee: "Priya Sharma",
    batch: "FSE-B26",
    attendanceRate: 62,
    severity: "high",
    lastSession: "2026-02-10"
  },
  {
    id: "RISK-002",
    type: "low_attendance",
    trainee: "Ajay Kumar",
    batch: "DS-A25",
    attendanceRate: 71,
    severity: "medium",
    lastSession: "2026-02-12"
  },
  {
    id: "RISK-003",
    type: "overdue_assignment",
    trainee: "Neha Patel",
    batch: "FSE-B26",
    overdueDays: 5,
    severity: "high",
    dueDate: "2026-02-12"
  },
  {
    id: "RISK-004",
    type: "low_performance",
    trainee: "Vikram Singh",
    batch: "CA-C24",
    averageScore: 58,
    severity: "high",
    lastAssessment: "2026-02-14"
  },
  {
    id: "RISK-005",
    type: "low_attendance",
    trainee: "Ananya Roy",
    batch: "DM-D26",
    attendanceRate: 68,
    severity: "medium",
    lastSession: "2026-02-08"
  }
];

export const PERFORMANCE_DISTRIBUTION = [
  { range: "90-100", count: 32, percentage: 14 },
  { range: "80-89", count: 48, percentage: 22 },
  { range: "70-79", count: 78, percentage: 35 },
  { range: "60-69", count: 45, percentage: 20 },
  { range: "Below 60", count: 17, percentage: 9 }
];

export const TRAINER_METRICS = [
  {
    id: "TR-001",
    name: "Rohan Kapoor",
    batchCount: 3,
    traineesManaged: 62,
    avgRating: 4.8,
    sessionsDelivered: 24,
    feedbackScore: 92
  },
  {
    id: "TR-002",
    name: "Priya Nair",
    batchCount: 2,
    traineesManaged: 44,
    avgRating: 4.6,
    sessionsDelivered: 18,
    feedbackScore: 88
  },
  {
    id: "TR-003",
    name: "Karan Mehta",
    batchCount: 2,
    traineesManaged: 52,
    avgRating: 4.7,
    sessionsDelivered: 22,
    feedbackScore: 90
  },
  {
    id: "TR-004",
    name: "Aisha Khan",
    batchCount: 1,
    traineesManaged: 28,
    avgRating: 4.5,
    sessionsDelivered: 14,
    feedbackScore: 85
  }
];

export const RECENT_ACTIONS = [
  {
    id: "ACT-001",
    type: "role_change",
    admin: "Rohan Kapoor",
    description: "Changed Priya Nair role from Trainer to Senior Trainer",
    timestamp: "2026-02-17 14:30",
    status: "success"
  },
  {
    id: "ACT-002",
    type: "user_creation",
    admin: "Rohan Kapoor",
    description: "Created new trainee account: Vikram Singh (FSE-B26)",
    timestamp: "2026-02-17 12:15",
    status: "success"
  },
  {
    id: "ACT-003",
    type: "batch_status_change",
    admin: "Admin User",
    description: "Updated batch FSE-B26 to Midterm Review stage",
    timestamp: "2026-02-16 10:45",
    status: "success"
  },
  {
    id: "ACT-004",
    type: "policy_update",
    admin: "Rohan Kapoor",
    description: "Updated minimum attendance policy to 80%",
    timestamp: "2026-02-16 09:20",
    status: "warning"
  },
  {
    id: "ACT-005",
    type: "system_config",
    admin: "Admin User",
    description: "Enabled GenAI-powered feedback generation",
    timestamp: "2026-02-15 16:00",
    status: "success"
  }
];

export const SYSTEM_ALERTS = [
  {
    id: "ALERT-001",
    type: "critical",
    title: "Database Backup Failed",
    message: "Daily backup for 2026-02-17 failed. Manual intervention required.",
    timestamp: "2026-02-17 15:30",
    action: "Review"
  },
  {
    id: "ALERT-002",
    type: "warning",
    title: "High Storage Usage",
    message: "Storage usage has reached 78%. Consider archiving old records.",
    timestamp: "2026-02-17 14:00",
    action: "Acknowledge"
  },
  {
    id: "ALERT-003",
    type: "info",
    title: "Scheduled Maintenance",
    message: "System maintenance scheduled for 2026-02-18 02:00 AM - 04:00 AM",
    timestamp: "2026-02-17 12:00",
    action: "View"
  }
];

export const COMPLIANCE_METRICS = [
  {
    metric: "Policy Compliance Rate",
    value: "94%",
    target: "95%",
    status: "on_track",
    trend: "up"
  },
  {
    metric: "SLA Adherence",
    value: "98%",
    target: "99%",
    status: "on_track",
    trend: "stable"
  },
  {
    metric: "Data Privacy Score",
    value: "96%",
    target: "98%",
    status: "on_track",
    trend: "up"
  },
  {
    metric: "System Uptime",
    value: "99.9%",
    target: "99.95%",
    status: "warning",
    trend: "down"
  }
];

export const WORKFLOW_METRICS = [
  {
    id: "WF-001",
    name: "Auto-Reminder: Low Attendance",
    status: "active",
    triggeredCount: 156,
    lastTriggered: "2026-02-17 08:30",
    successRate: 94
  },
  {
    id: "WF-002",
    name: "Escalation: Overdue Assignments",
    status: "active",
    triggeredCount: 48,
    lastTriggered: "2026-02-17 10:15",
    successRate: 98
  },
  {
    id: "WF-003",
    name: "Notification: Assessment Ready",
    status: "inactive",
    triggeredCount: 0,
    lastTriggered: "N/A",
    successRate: 0
  },
  {
    id: "WF-004",
    name: "Feedback Request: Session End",
    status: "active",
    triggeredCount: 320,
    lastTriggered: "2026-02-17 15:45",
    successRate: 87
  }
];

export const AUDIT_LOG = [
  {
    id: "AUDIT-001",
    timestamp: "2026-02-17 16:30",
    admin: "Rohan Kapoor",
    action: "VIEW",
    resource: "Batch FSE-B26 Details",
    ipAddress: "192.168.1.100",
    status: "success"
  },
  {
    id: "AUDIT-002",
    timestamp: "2026-02-17 15:45",
    admin: "Priya Nair",
    action: "EDIT",
    resource: "Assessment ASMT-002 Configuration",
    ipAddress: "192.168.1.101",
    status: "success"
  },
  {
    id: "AUDIT-003",
    timestamp: "2026-02-17 14:20",
    admin: "Rohan Kapoor",
    action: "DELETE",
    resource: "User Account: test.user@trainlytix.io",
    ipAddress: "192.168.1.100",
    status: "success"
  },
  {
    id: "AUDIT-004",
    timestamp: "2026-02-17 13:15",
    admin: "Admin User",
    action: "EXPORT",
    resource: "Batch Report: February 2026",
    ipAddress: "192.168.1.102",
    status: "success"
  },
  {
    id: "AUDIT-005",
    timestamp: "2026-02-17 12:00",
    admin: "Rohan Kapoor",
    action: "CONFIGURE",
    resource: "System Settings: Email Configuration",
    ipAddress: "192.168.1.100",
    status: "success"
  }
];
